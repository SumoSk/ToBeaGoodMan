(function(root){
"use strict";
const schema=`CREATE TABLE mechanics (
 id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, type TEXT NOT NULL,
 initial_json TEXT NOT NULL, min REAL, max REAL, options_json TEXT,
 gate_op TEXT, gate_value_json TEXT
);`;
const fields={mechanics:["id","name","type","initial_json","min","max","options_json","gate_op","gate_value_json"]};
function encode(v){
 return {id:v.id,name:v.name,type:v.type,initial_json:JSON.stringify(v.initial),
  min:v.min??null,max:v.max??null,options_json:JSON.stringify(v.options)??null,
  gate_op:v.gate?.op??null,gate_value_json:JSON.stringify(v.gate?.value)??null};
}
function decode(row,old){
 const v={...old,id:row.id,name:row.name,type:row.type,initial:JSON.parse(row.initial_json)};
 for(const key of ["min","max","options","gate"])delete v[key];
 if(row.min!==null)v.min=row.min;
 if(row.max!==null)v.max=row.max;
 if(row.options_json!==null)v.options=JSON.parse(row.options_json);
 if((row.gate_op===null)!==(row.gate_value_json===null))throw Error("กรอกทั้ง gate_op และ gate_value_json สำหรับ "+row.id);
 if(row.gate_op!==null)v.gate={op:row.gate_op,value:JSON.parse(row.gate_value_json)};
 const E=root.StudioFlow;
 if(!E.variableOK(v)||(v.gate&&!E.argOK(v,v.gate,"condition"))||
    (v.type!=="number"&&(row.min!==null||row.max!==null))||
    (v.type!=="enum"&&row.options_json!==null))throw Error("ชนิดข้อมูลหรือเกณฑ์ผ่านไม่ถูกต้องสำหรับ "+row.id);
 return v;
}
function open(g,api,refresh){
 const E=root.StudioFlow;
 const dialog=document.createElement("dialog");dialog.className="flow-preview-dialog";
 function add(tag,text){const el=document.createElement(tag);el.textContent=text;dialog.append(el);return el}
 function button(label,fn){const el=add("button",label);el.type="button";el.onclick=fn;return el}
 add("h2","SQL กลไก · "+g.title);
 const input=add("textarea","");input.setAttribute("aria-label","คำสั่ง SQL กลไก");input.rows=6;input.style.cssText="width:100%;box-sizing:border-box;font-size:16px";input.placeholder="SELECT * FROM mechanics;";
 let preview=null,generation=0;
 button("ตรวจผล SQL",async()=>{
  const version=++generation,script=input.value,base=JSON.stringify(g);
  preview=null;apply.disabled=true;output.textContent="กำลังตรวจ…";
  try{
   const rows=g.play.variables.map(encode);
   const {after,results}=await api.runMechanicsSQL({mechanics:rows},script,fields,schema);
   if(version!==generation||!dialog.open)return;
   const lookup=new Map(g.play.variables.map(v=>[v.id,v]));
   const previous=new Map(rows.map(r=>[r.id,JSON.stringify(r)]));
   const vars=after.mechanics.map(r=>previous.get(r.id)===JSON.stringify(r)?lookup.get(r.id):decode(r,lookup.get(r.id)));
   const changes=[];
   for(const r of after.mechanics){
    if(previous.get(r.id)!==JSON.stringify(r))changes.push((previous.has(r.id)?"แก้ ":"เพิ่ม ")+r.id+" "+JSON.stringify(r));
    previous.delete(r.id);
   }
   for(const id of previous.keys())changes.push("ลบ "+id);
   const candidate={...g,play:{...g.play,variables:vars}};
   const issues=E.audit(candidate).filter(i=>["condition","effect","wait"].includes(i.code));
   output.textContent=[...results.map(r=>JSON.stringify(r)),...changes,...issues.map(i=>"⚠ "+i.message)].join("\n")||"ไม่มีการเปลี่ยนแปลง";
   if(changes.length){preview={base,script,vars};apply.disabled=false}
  }catch(err){if(version===generation)output.textContent="ตรวจไม่ได้ · "+err.message}
 });
 const apply=button("ใช้กับแผนผัง",()=>{
  if(!preview||preview.script!==input.value||g!==api.get()||preview.base!==JSON.stringify(g)){
   output.textContent="ข้อมูลเปลี่ยนแล้ว กรุณาตรวจผลใหม่";apply.disabled=true;return;
  }
  const vars=preview.vars;api.edit(()=>g.play.variables=vars,"แก้กลไกด้วย SQL");dialog.close();refresh();
 });
 apply.disabled=true;
 button("คัดลอกให้อริส",async()=>{
  const context={แผนผัง:g.title,คำขอ:"ช่วยแก้กติกาด้วย SQLite และส่ง SQL กลับมาวางใน Life Studio",schema,
   ชนิด:E.types,เกณฑ์ตามชนิด:E.ops,กลไก:g.play.variables.map(encode),
   คำตอบ:g.nodes.filter(n=>n.play).map(n=>({id:n.id,title:n.title,choices:n.play.choices})),
   สาย:g.edges.filter(e=>e.play).map(e=>({from:e.from,to:e.to,...e.play})),SQL:input.value,ผลตรวจ:output.textContent};
  const value=JSON.stringify(context,null,2);
  try{await navigator.clipboard.writeText(value);status.textContent="คัดลอกแล้ว นำไปวางในแชตอริสได้เลย"}
  catch{fallback.hidden=false;fallback.value=value;fallback.focus();fallback.select();status.textContent="เลือกข้อความแล้ว กดคัดลอกแล้วนำไปวางในแชต"}
 });
 button("ปิด",()=>dialog.close());
 const status=add("p",""),fallback=add("textarea","");fallback.hidden=true;fallback.readOnly=true;fallback.setAttribute("aria-label","ข้อมูลสำหรับส่งให้อริส");
 const output=add("pre","");output.style.cssText="white-space:pre-wrap;overflow-wrap:anywhere";output.setAttribute("aria-live","polite");
 input.oninput=()=>{generation++;preview=null;apply.disabled=true;output.textContent=""};
 document.body.append(dialog);dialog.addEventListener("close",()=>dialog.remove(),{once:true});dialog.showModal();
}
root.openMechanicsSQL=open;
})(globalThis);
