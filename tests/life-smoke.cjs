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
assert(w.LIFE_QUALITY.optionalIds.length===140,"quality gate absent");
const selected=new Set(w.LIFE_QUALITY.optionalIds);assert(selected.size===140);for(const id of selected)assert(ids.has(id),"removed saved event "+id);
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
const repetitionSummary=new Map();
const addRepeat=(map,key,age,id)=>{const rec=map.get(key)||{count:0,ages:[],ids:[]};rec.count++;rec.ages.push(age);rec.ids.push(id);map.set(key,rec);};
const repeated=(map)=>[...map].filter(([,r])=>r.count>1).sort((a,b)=>b[1].count-a[1].count).map(([key,r])=>({key,count:r.count,ages:r.ages,ids:r.ids}));
for(let run=0;run<12;run++){
 const o={name:"ทดสอบ",province:w.CITIES[run%w.CITIES.length],place:Object.keys(w.ORIGIN.places)[run%Object.keys(w.ORIGIN.places).length],family:Object.keys(w.ORIGIN.families)[run%Object.keys(w.ORIGIN.families).length],home:Object.keys(w.ORIGIN.homes)[run%Object.keys(w.ORIGIN.homes).length]};
 w.LIFE_FLEX.death=run<8?()=>null:originalDeath;
 api.begin(o);api.get().seed=(8123+Math.imul(run+1,2654435761))>>>0;let steps=0,lastAge=-1;const titles=new Map(),exact=new Map(),families=new Map();
 while(!api.get().done){
  assert(++steps<2000,"life did not finish");
  let s=api.get(),e=api.events[s.at],state=api.lifeState();assert(e&&api.allowed(e),"ineligible current event");
  assert(e.age>=lastAge,"time moved backwards");lastAge=e.age;
  const body=api.storyFor(e);assert(!/\{(?:partner|candidate|my|job|hobby|source|newName|ageContext|activity|career|burden)\}/.test(body),"unresolved story variable "+e.id);
  const cs=api.gameChoices(e,state);assert(cs.length>0);
  if(run===0&&e.age===5&&!s.history.some(x=>x.free?.key&&x.age===5)){const a=w.LIFE_FREEDOM.activities(state,s,e.age)[0];if(a){api.takeFree(a);api.restore();assert.equal(api.lifeState().freeUsed,1);s=api.get();e=api.events[s.at];state=api.lifeState();}}
  const choices=api.gameChoices(e,state),n=run===0?0:run===1?choices.length-1:Math.floor(rand()*choices.length);
  const title=e.title.trim(),bodyNow=api.storyFor(e).trim(),signature=JSON.stringify([title,bodyNow,choices.map(c=>c.label.trim())]);
  const family=e.flex?"flex:"+e.flex:e.cw==="adultx"?"adult:"+e.ax:e.cw==="crossx"?"cross:"+e.crossx:e.cw==="elderx"?"elder:"+e.elderx:e.later?"later:"+e.later:e.merge?"merged:"+e.merge:e.personBoundary?"boundary:"+e.personBoundary:e.polish?"polish:"+e.polish:e.cw==="healthstory"?"health:"+e.hsType:e.cw==="adultfamily"?"adultfamily:"+e.afType:e.cw==="case"?"career:"+e.cwProfession:e.cw==="follow"?"career-follow:"+e.cwProfession:e.cw||"authored";
  addRepeat(titles,title,e.age,e.id);addRepeat(exact,signature,e.age,e.id);if(family!=="authored"&&!["womanstory","womanselect","younglife","youthdistinct","teenstories","authored","variedyouth"].includes(family))addRepeat(families,family,e.age,e.id);
  seen.add(e.id);api.choose(e,n);
  assert(api.get().history.some(x=>x.id===e.id),"choice did not save "+e.id);
  for(const [k,v] of Object.entries(api.get().stats))assert(Number.isFinite(v),"nonfinite "+k);
  if(steps===10||steps===100){const old=api.get(),history=JSON.stringify(old.history),stats=JSON.stringify(old.stats);api.restore();assert.equal(JSON.stringify(api.get().history),history);assert.equal(JSON.stringify(api.get().stats),stats);}
 }
 const s=api.get();assert(Number.isInteger(s.finishedAge));if(run<8){assert.equal(s.finishedAge,100);assert.equal(s.checkedAge,99,"annual health checks skipped");assert.equal(s.paidAge,99,"annual income checks skipped");for(const item of s.history)assert(!w.LIFE_QUALITY.optionalIds.includes(item.id),"optional scene forced "+item.id);}
 const titleRepeats=repeated(titles),exactRepeats=repeated(exact),familyRepeats=repeated(families);
 for(const r of titleRepeats){const a=repetitionSummary.get(r.key)||{lives:0,totalRepeats:0,maxInOneLife:0,examples:[]};a.lives++;a.totalRepeats+=r.count-1;a.maxInOneLife=Math.max(a.maxInOneLife,r.count);if(a.examples.length<2)a.examples.push({run,ages:r.ages,ids:r.ids});repetitionSummary.set(r.key,a);}
 results.push({run,age:s.finishedAge,decisions:steps,death:s.death?.cause||null,repeatTitles:titleRepeats.reduce((sum,r)=>sum+r.count-1,0),exactRepeats:exactRepeats.reduce((sum,r)=>sum+r.count-1,0),topTitles:titleRepeats.slice(0,5),topExact:exactRepeats.slice(0,5).map(r=>({title:JSON.parse(r.key)[0],count:r.count,ages:r.ages,ids:r.ids})),topFamilies:familyRepeats.slice(0,5)});
}
console.log(JSON.stringify({scripts:scripts.length,events:api.events.length,uniqueVisited:seen.size,results,mostRepeatedTitles:[...repetitionSummary].sort((a,b)=>b[1].totalRepeats-a[1].totalRepeats).slice(0,25).map(([title,r])=>({title,...r}))},null,2));
