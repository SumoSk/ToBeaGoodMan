/* Shared data adapter for TO BE A GOOD MAN. and Life Story Studio.
   A publishable API key is intentionally public. Authorization is enforced by SUMOWEB RLS. */
(function(root){
"use strict";
if(typeof document==="undefined")return;
if(new URLSearchParams(location.search).get("storylab")==="1")document.documentElement.setAttribute("data-studio-lock","");
const URL="https://jeqbyhzbpivscsduwkcj.supabase.co", KEY="sb_publishable_yEaGo1wDqb4qehdi702eMQ_ZqyVcHuf";
const prefix="goodman.cloud.session.v1.", emailKey="goodman.dev.email.v1";
const get=scope=>{try{return JSON.parse(sessionStorage.getItem(prefix+scope)||"null")}catch(_){return null}};
function set(scope,s){if(s)sessionStorage.setItem(prefix+scope,JSON.stringify(s));else sessionStorage.removeItem(prefix+scope)}
function err(data,res){return new Error(data?.message||data?.msg||data?.error_description||data?.error||("HTTP "+res.status))}
async function request(path,{method="GET",data,token,prefer}={}){
 const headers={apikey:KEY,Accept:"application/json"};
 if(token)headers.Authorization="Bearer "+token;
 if(data!==undefined)headers["Content-Type"]="application/json";
 if(prefer)headers.Prefer=prefer;
 const r=await fetch(URL+path,{method,headers,body:data===undefined?undefined:JSON.stringify(data),cache:"no-store"});
 const raw=await r.text();let body=null;try{body=raw?JSON.parse(raw):null}catch(_){body=raw}
 if(!r.ok)throw err(body,r);
 return body;
}
async function signIn(scope,email,password,signup=false){
 const s=await request(signup?"/auth/v1/signup":"/auth/v1/token?grant_type=password",{method:"POST",data:{email,password}});
 if(!s?.access_token)return false;
 set(scope,{access_token:s.access_token,refresh_token:s.refresh_token,expires_at:s.expires_at||Math.floor(Date.now()/1000)+(s.expires_in||3600),user:s.user});
 return true;
}
const refreshing=new Map();
async function session(scope){
 const s=get(scope);if(!s?.access_token)return null;
 if(s.expires_at>Math.floor(Date.now()/1000)+60)return s;
 if(!s.refresh_token){set(scope,null);return null}
 if(refreshing.has(scope))return refreshing.get(scope);
 const pending=(async()=>{try{
  const n=await request("/auth/v1/token?grant_type=refresh_token",{method:"POST",data:{refresh_token:s.refresh_token}});
  const next={access_token:n.access_token,refresh_token:n.refresh_token,expires_at:n.expires_at||Math.floor(Date.now()/1000)+(n.expires_in||3600),user:n.user||s.user};
  set(scope,next);return next;
 }catch(_){set(scope,null);return null}finally{refreshing.delete(scope)}})();
 refreshing.set(scope,pending);return pending;
}
async function api(scope,path,opt={}){
 const s=await session(scope);if(!s)throw Error("กรุณาเข้าสู่ระบบใหม่");
 return request("/rest/v1/"+path,{...opt,token:s.access_token});
}
async function isAdmin(){try{return (await api("dev","studio_admins?select=user_id&limit=1")).length===1}catch(_){return false}}
async function signOut(scope){const s=get(scope);set(scope,null);if(s?.access_token)try{await request("/auth/v1/logout?scope=local",{method:"POST",token:s.access_token})}catch(_){}}
function node(tag,txt){const e=document.createElement(tag);if(txt!==undefined)e.textContent=txt;return e}
function modal(title){
 const d=node("dialog");d.className="gc-dialog";
 const h=node("h2",title), msg=node("p",""), body=node("div"), close=node("button","ปิด");
 msg.className="gc-message";close.type="button";close.onclick=()=>d.close();
 d.append(h,body,msg,close);document.body.append(d);d.addEventListener("close",()=>d.remove(),{once:true});d.showModal();
 return {d,body,msg,close};
}
function action(parent,label,fn,m){const b=node("button",label);b.type="button";b.onclick=async()=>{b.disabled=true;if(m)m.msg.textContent="";try{await fn()}catch(e){if(m)m.msg.textContent=e.message||"ทำรายการไม่ได้";else alert(e.message)}finally{b.disabled=false}};parent.append(b);return b}
function field(parent,label,type,value=""){const l=node("label",label),i=node("input");i.type=type;i.value=value;i.required=true;i.autocomplete=type==="password"?"current-password":"email";l.append(i);parent.append(l);return i}
function loginDialog(scope,done){
 const m=modal(scope==="dev"?"ทางเข้าผู้พัฒนา":"บัญชีผู้เล่น");
 let remembered="";if(scope==="dev")try{remembered=localStorage.getItem(emailKey)||""}catch(_){}
 const form=node("form");m.body.append(form);
 const email=field(form,"อีเมล","email",remembered),pw=field(form,"รหัสผ่าน","password");
 if(remembered){email.parentElement.hidden=true;action(form,"เปลี่ยนอีเมล",()=>{email.parentElement.hidden=false;email.focus()},m)}
 const submit=node("button","เข้าสู่ระบบ");submit.type="submit";form.append(submit);
 async function login(signup){if(!form.reportValidity())return;submit.disabled=true;m.msg.textContent="";try{
  const ok=await signIn(scope,email.value.trim(),pw.value,signup);pw.value="";
  if(!ok){m.msg.textContent="ตรวจสอบอีเมลยืนยันบัญชี แล้วกลับมาเข้าสู่ระบบ";return}
  if(scope==="dev"&&!(await isAdmin())){await signOut(scope);throw Error("บัญชีนี้ยังไม่มีสิทธิ์ผู้พัฒนา Life Story Studio")}
  if(scope==="dev")try{localStorage.setItem(emailKey,email.value.trim())}catch(_){}
  m.d.close();await done();
 }catch(e){m.msg.textContent=e.message||"เข้าสู่ระบบไม่ได้"}finally{submit.disabled=false}}
 form.onsubmit=e=>{e.preventDefault();login(false)};
 if(scope==="player")action(form,"สมัครบัญชี",()=>login(true),m);
 requestAnimationFrame(()=>{if(remembered)pw.focus();else email.focus()});
}
async function developer(){
 if(!(await isAdmin())){loginDialog("dev",developer);return}
 const m=modal("Developer Mode");
 action(m.body,"ทดสอบเกม",()=>{root.location.href="story-lab.html"},m);
 action(m.body,"Life Story Studio",()=>{root.location.href="story-map.html"},m);
 action(m.body,"ออกจากระบบผู้พัฒนา",async()=>{await signOut("dev");m.d.close()},m);
}
async function guard(){
 const path=location.pathname.split("/").pop(), lab=new URLSearchParams(location.search).get("storylab")==="1";
 const locked=["story-map.html","story-lab.html","story-current-map.html"].includes(path)||lab;
 if(locked){if(await isAdmin()){document.documentElement.removeAttribute("data-studio-lock");return}
  if(window.parent!==window){document.body.replaceChildren(node("p","ต้องเข้าสู่ระบบผู้พัฒนา"));document.documentElement.removeAttribute("data-studio-lock");return}
  location.replace("index.html");return;
 }
 const brand=document.querySelector(".brand");if(brand){brand.setAttribute("role","button");brand.tabIndex=0;brand.addEventListener("click",()=>developer().catch(e=>alert(e.message)));brand.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();brand.click()}})}
}
async function player(getSave,applySave){
 if(!(await session("player"))){loginDialog("player",()=>player(getSave,applySave));return}
 const m=modal("บัญชีและเซฟเกม Cloud");
 async function draw(){
  m.body.replaceChildren();m.msg.textContent="";
  const s=await session("player");if(!s)throw Error("กรุณาเข้าสู่ระบบใหม่");
  m.body.append(node("p",s.user?.email||"บัญชีผู้เล่น"));
  const rows=await api("player","goodman_saves?select=slot_id,label,updated_at,schema_version&order=updated_at.desc");
  const current=getSave();
  action(m.body,"บันทึกชีวิตเป็นเซฟ Cloud ใหม่",async()=>{
   const payload=getSave();if(!payload)throw Error("ยังไม่มีชีวิตที่บันทึกในเครื่อง");
   const name=String(payload.origin?.name||"ชีวิต").slice(0,120);
   await api("player","goodman_saves",{method:"POST",data:{slot_id:crypto.randomUUID(),label:name,schema_version:payload.version||4,payload,updated_at:new Date().toISOString()}});
   await draw();m.msg.textContent="บันทึก Cloud แล้ว";
  },m).disabled=!current;
  for(const row of rows){const card=node("section");card.className="gc-row";card.append(node("strong",row.label),node("small",new Date(row.updated_at).toLocaleString("th-TH")));
   action(card,"โหลด",async()=>{const data=await api("player","goodman_saves?slot_id=eq."+encodeURIComponent(row.slot_id)+"&select=payload");if(!data.length)throw Error("ไม่พบเซฟ");if(await applySave(data[0].payload))m.d.close()},m);
   action(card,"บันทึกทับ",async()=>{const payload=getSave();if(!payload)throw Error("ไม่มีเซฟในเครื่อง");if(!confirm("บันทึกทับเซฟ Cloud นี้หรือไม่?"))return;
    const out=await api("player","goodman_saves?slot_id=eq."+encodeURIComponent(row.slot_id),{method:"PATCH",prefer:"return=representation",data:{label:String(payload.origin?.name||"ชีวิต").slice(0,120),schema_version:payload.version||4,payload,updated_at:new Date().toISOString()}});
    if(!out?.length)throw Error("บันทึกไม่สำเร็จ");await draw();m.msg.textContent="บันทึก Cloud แล้ว";
   },m).disabled=!current;m.body.append(card);
  }
  action(m.body,"ออกจากบัญชี",async()=>{await signOut("player");m.d.close()},m);
 }
 try{await draw()}catch(e){m.msg.textContent=e.message}
}
const studio={
 async list(){return api("dev","studio_projects?select=project_id,title,revision,updated_at&order=updated_at.desc")},
 async read(id){const r=await api("dev","studio_projects?project_id=eq."+encodeURIComponent(id)+"&select=project_id,title,revision,schema_version,payload");if(!r.length)throw Error("ไม่พบโปรเจกต์");return r[0]},
 async history(id){return api("dev","studio_revisions?project_id=eq."+encodeURIComponent(id)+"&select=revision,created_at&order=revision.desc&limit=30")},
 async revision(id,rev){const r=await api("dev","studio_revisions?project_id=eq."+encodeURIComponent(id)+"&revision=eq."+encodeURIComponent(rev)+"&select=payload");if(!r.length)throw Error("ไม่พบเวอร์ชัน");return r[0].payload},
 async save(id,rev,title,payload){return api("dev","rpc/studio_save_project",{method:"POST",data:{p_project_id:id,p_expected_revision:rev,p_title:title,p_schema_version:1,p_payload:payload}})}
};
root.GoodmanCloud={developer,player,studio,isAdmin,modal,action,node};
document.addEventListener("DOMContentLoaded",()=>guard().catch(()=>{if(document.documentElement.hasAttribute("data-studio-lock"))location.replace("index.html")}));
})(window);
