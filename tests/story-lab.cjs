const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const w={};const tags=[...html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)];
for(const tag of tags.slice(0,-1))new Function("window",tag[1]?fs.readFileSync(path.join(root,tag[1]),"utf8"):tag[2])(w);
const storageCalls=[];const storage={getItem(){storageCalls.push("read");throw Error("lab read player save")},setItem(){storageCalls.push("write");throw Error("lab wrote player save")}};
const document={getElementById:()=>({scrollIntoView(){}})};
new Function("window","document","localStorage","location","confirm",tags.at(-1)[2])(w,document,storage,{search:"?storylab=1"},()=>true);
const api=w.STORY_LAB;assert(api,"missing lab bridge");const o=api.origins();const origin={name:"Lab",province:o.cities[0],place:o.place[0],family:o.family[0],home:o.home[0]};
function sample(){api.start(origin,8123,true);const trace=[];for(let i=0;i<25;i++){const scene=api.current();assert(scene&&scene.choices.length);assert(scene.title&&scene.story);const out=api.pick(0);assert.equal(out.result,scene.choices[0].result);assert(out.after.stats&&scene.before.stats);trace.push([scene.id,scene.age,scene.title,scene.story,out.result]);}return trace;}
const a=sample(),b=sample();assert.deepEqual(a,b,"seed is not reproducible");assert.deepEqual(storageCalls,[],"lab accessed player storage");
const lab=fs.readFileSync(path.join(root,"story-lab.html"),"utf8");for(const m of lab.matchAll(/<script>([\s\S]*?)<\/script>/g))new Function(m[1]);
assert(lab.includes('src="index.html?storylab=1"'));assert(!html.includes('btn("ระบบทดลอง · Story Quality Lab"'));assert(html.includes('goodman-cloud.js'));const cloud=fs.readFileSync(path.join(root,"goodman-cloud.js"),"utf8");new Function("window",cloud);assert(cloud.includes('/functions/v1/life-story-studio-admin'));assert(cloud.includes('function pinDialog'));assert(cloud.includes('life-story-studio.admin.session.v1'));assert(cloud.includes('story-lab.html'));
console.log("Story Lab: 25 decisions × 2, deterministic trace, zero player storage accesses, UI syntax passed.");

const catalogWindow={};
for(const tag of tags.slice(0,-1))new Function("window",tag[1]?fs.readFileSync(path.join(root,tag[1]),"utf8"):tag[2])(catalogWindow);
new Function("window","document","localStorage","location","confirm",tags.at(-1)[2])(catalogWindow,document,storage,{search:"?storylab=1&storymap=1"},()=>true);
assert(typeof catalogWindow.STORY_MAP_SOURCE==="function");const catalog=catalogWindow.STORY_MAP_SOURCE();
assert(catalog.events.length>100);assert.equal(new Set(catalog.events.map(e=>e.id)).size,catalog.events.length);assert(catalog.events.every(e=>Array.isArray(e.choices)));assert(Object.keys(catalog.stats).length>10);
const mapHtml=fs.readFileSync(path.join(root,"story-current-map.html"),"utf8"),mapJs=mapHtml.match(/<script>([\s\S]*?)<\/script>/)[1],mapEnv={};
new Function("globalThis",mapJs)(mapEnv);const indexed=mapEnv.CURRENT_MAP_CORE.index(catalog);
assert.equal([...indexed.groups.values()].reduce((n,v)=>n+v.length,0),catalog.events.length);assert.equal(indexed.map.size,catalog.events.length);assert(indexed.links.length>0);assert.deepEqual(storageCalls,[]);
console.log("STORY_MAP_COUNTS "+JSON.stringify({events:catalog.events.length,choices:catalog.events.reduce((n,e)=>n+e.choices.length,0),groups:indexed.groups.size,subgroups:indexed.subgroups.size,stats:Object.keys(catalog.stats).length,links:indexed.links.length,unknown:indexed.unknown.length,careers:Object.keys(catalog.careers||{}).length,states:Object.keys(catalog.stateDefaults).length}));
