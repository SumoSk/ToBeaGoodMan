const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const w = {};
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(x=>x[1]);
const tags=[...html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)];
for(const tag of tags.slice(0,-1))new Function("window",tag[1]?fs.readFileSync(path.join(root,tag[1]),"utf8"):tag[2])(w);
const inline = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1];
const element=()=>({children:[],style:{},value:"",textContent:"",className:"",append(...v){this.children.push(...v);if(this.tag==="select"&&!this.value)this.value=this.children[0]?.value||""},replaceChildren(...v){this.children=v},setAttribute(){},scrollIntoView(){}});
const document={getElementById:()=>element(),createElement:tag=>({...element(),tag})};
const storage={data:{},getItem(k){return this.data[k]??null},setItem(k,v){this.data[k]=v}};
const api=new Function("window","document","localStorage","confirm",inline+`\nreturn {events,begin,choose,restore,lifeState,gameChoices,storyFor,allowed,takeFree,get:()=>s};`)(w,document,storage,()=>true);
const seen = new Set(), ids=new Map(api.events.map((e,i)=>[e.id,i]));
assert.equal(ids.size,api.events.length,"duplicate IDs");
for (const [i,e] of api.events.entries()){
 assert(e.title&&e.story&&e.choices.length,"empty scene "+e.id);
 for (const parent of [e.after,e.when?.[0]].filter(Boolean)) assert(ids.has(parent)&&ids.get(parent)<i,"invalid link "+e.id+" -> "+parent);
 for (const [n,c] of e.choices.entries()){
  assert(c.label&&c.result,"empty choice "+e.id);
  for (const [k,v] of Object.entries(w.LIFE.delta(e,n))) assert(Object.hasOwn(w.LIFE.labels,k)&&Number.isFinite(v),"invalid stat "+e.id+" "+k);
 }
}
let seed=8123;function rand(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}
const originalDeath=w.LIFE_FLEX.death;
const results=[];
for(let run=0;run<12;run++){
 const o={name:"ทดสอบ",province:w.CITIES[run%w.CITIES.length],place:Object.keys(w.ORIGIN.places)[run%Object.keys(w.ORIGIN.places).length],family:Object.keys(w.ORIGIN.families)[run%Object.keys(w.ORIGIN.families).length],home:Object.keys(w.ORIGIN.homes)[run%Object.keys(w.ORIGIN.homes).length]};
 w.LIFE_FLEX.death=run<8?()=>null:originalDeath;
 api.begin(o);let steps=0,lastAge=-1;
 while(!api.get().done){
  assert(++steps<2000,"life did not finish");
  let s=api.get(),e=api.events[s.at],state=api.lifeState();assert(e&&api.allowed(e),"ineligible current event");
  assert(e.age>=lastAge,"time moved backwards");lastAge=e.age;
  const body=api.storyFor(e);assert(!/\{(?:partner|candidate|my|job|hobby|source|newName|ageContext|activity|career|burden)\}/.test(body),"unresolved story variable "+e.id);
  const cs=api.gameChoices(e,state);assert(cs.length>0);
  if(run===0&&e.id==="free_focus_5"){const a=w.LIFE_FREEDOM.activities(state,s,e.age)[0];if(a){api.takeFree(a);api.restore();assert.equal(api.lifeState().freeUsed,1);s=api.get();e=api.events[s.at];state=api.lifeState();}}
  const choices=api.gameChoices(e,state),n=run===0?0:run===1?choices.length-1:Math.floor(rand()*choices.length);
  seen.add(e.id);api.choose(e,n);
  assert(api.get().history.some(x=>x.id===e.id),"choice did not save "+e.id);
  for(const [k,v] of Object.entries(api.get().stats))assert(Number.isFinite(v),"nonfinite "+k);
  if(steps===10||steps===100){const old=api.get(),history=JSON.stringify(old.history),stats=JSON.stringify(old.stats);api.restore();assert.equal(JSON.stringify(api.get().history),history);assert.equal(JSON.stringify(api.get().stats),stats);}
 }
 const s=api.get();assert(Number.isInteger(s.finishedAge));if(run<8){assert.equal(s.finishedAge,100);for(let a=5;a<100;a++)assert(s.history.some(x=>x.id==="year_"+a+"_0")&&s.history.some(x=>x.id==="year_"+a+"_1"),"missing annual roots "+a);}
 results.push({run,age:s.finishedAge,decisions:steps,death:s.death?.cause||null});
}
console.log(JSON.stringify({scripts:scripts.length,events:api.events.length,uniqueVisited:seen.size,results},null,2));
