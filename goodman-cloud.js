/* Shared data adapter for TO BE A GOOD MAN. and Life Story Studio.
   A publishable API key is intentionally public. Authorization is enforced by SUMOWEB RLS. */
(function(root){
"use strict";
if(typeof document==="undefined")return;
if(new URLSearchParams(location.search).get("storylab")==="1")document.documentElement.setAttribute("data-studio-lock","");
const URL="https://jeqbyhzbpivscsduwkcj.supabase.co", KEY="sb_publishable_yEaGo1wDqb4qehdi702eMQ_ZqyVcHuf";
const prefix="goodman.cloud.session.v1.";
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
const adminKey="life-story-studio.admin.session.v1";
function readAdmin(){try{return JSON.parse(sessionStorage.getItem(adminKey)||"null")}catch(_){return null}}
function setAdmin(value){if(value)sessionStorage.setItem(adminKey,JSON.stringify(value));else sessionStorage.removeItem(adminKey)}
async function adminApi(action,data={}){
 const s=readAdmin();if(!s?.token||new Date(s.expires_at).getTime()<=Date.now()){setAdmin(null);throw Error("กรุณาเข้าสู่ระบบ ADMIN ใหม่")}
 return request("/functions/v1/life-story-studio-admin",{method:"POST",data:{action,token:s.token,data}});
}
async function isAdmin(){try{return (await adminApi("status")).role==="ADMIN"}catch(_){return false}}
async function logoutAdmin(){try{await adminApi("logout")}finally{setAdmin(null)}}
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
 const m=modal("บัญชีผู้เล่น TO BE A GOOD MAN.");
 const form=node("form");m.body.append(form);
 const email=field(form,"อีเมล","email"),pw=field(form,"รหัสผ่าน","password");
 const submit=node("button","เข้าสู่ระบบ");submit.type="submit";form.append(submit);
 async function login(signup){if(!form.reportValidity())return;submit.disabled=true;m.msg.textContent="";try{
  const ok=await signIn("player",email.value.trim(),pw.value,signup);pw.value="";
  if(!ok){m.msg.textContent="ตรวจสอบอีเมลยืนยันบัญชี แล้วกลับมาเข้าสู่ระบบ";return}
  m.d.close();await done();
 }catch(e){m.msg.textContent=e.message||"เข้าสู่ระบบไม่ได้"}finally{submit.disabled=false}}
 form.onsubmit=e=>{e.preventDefault();login(false)};
 action(form,"สมัครบัญชี",()=>login(true),m);
 requestAnimationFrame(()=>email.focus());
}
function pinDialog(done){
 const m=modal("ADMIN");m.d.classList.add("gc-pin");
 m.d.setAttribute("aria-label","PIN สำหรับผู้ดูแล");
 m.d.querySelector("h2").hidden=true;
 const dots=node("div");dots.className="gc-pin-dots";dots.setAttribute("aria-label","จำนวนหลัก PIN");
 const pad=node("div");pad.className="gc-keypad";
 m.body.append(dots,pad);
 let digits="",busy=false;
 const controls=[];
 function display(){dots.replaceChildren();for(let i=0;i<6;i++){const d=node("span");d.className=i<digits.length?"filled":"";dots.append(d)}dots.setAttribute("aria-label","กรอกแล้ว "+digits.length+" จาก 6 หลัก")}
 async function submit(){
  if(busy||digits.length!==6)return;busy=true;controls.forEach(x=>x.disabled=true);m.msg.textContent="";m.d.setAttribute("aria-busy","true");
  try{
   const r=await request("/functions/v1/life-story-studio-admin",{method:"POST",data:{action:"login",pin:digits}});
   if(!r?.ok||r.role!=="ADMIN"||!r.token)throw Error("รหัส PIN ไม่ถูกต้อง");
   setAdmin({token:r.token,expires_at:r.expires_at});digits="";display();m.d.close();await done();
  }catch(e){digits="";display();m.msg.textContent=e.message?.includes("Too many")?"กรอกผิดหลายครั้ง กรุณาลองอีกครั้งใน 15 นาที":"รหัส PIN ไม่ถูกต้อง หรือยังไม่ได้ตั้งค่า ADMIN"}
  finally{busy=false;m.d.removeAttribute("aria-busy");controls.forEach(x=>x.disabled=false)}
 }
 function digit(n){if(busy||digits.length>=6)return;m.msg.textContent="";digits+=n;display();if(digits.length===6)submit()}
 function clear(){if(!busy){digits="";display();m.msg.textContent=""}}
 function erase(){if(!busy){digits=digits.slice(0,-1);display();m.msg.textContent=""}}
 for(const n of ["1","2","3","4","5","6","7","8","9","↺","0","⌫"]){
  const b=node("button",n);b.type="button";if(n==="↺"||n==="⌫")b.className="gc-pin-secondary";if(n==="↺")b.setAttribute("aria-label","ล้าง PIN");if(n==="⌫")b.setAttribute("aria-label","ลบตัวเลขล่าสุด");
  b.onclick=()=>n==="↺"?clear():n==="⌫"?erase():digit(n);controls.push(b);pad.append(b)
 }
 m.d.addEventListener("keydown",e=>{if(/^[0-9]$/.test(e.key)){e.preventDefault();digit(e.key)}else if(e.key==="Backspace"){e.preventDefault();erase()}});
 m.close.textContent="×";m.close.setAttribute("aria-label","ปิด");display();
}
async function developer(){
 if(!(await isAdmin())){pinDialog(developer);return}
 const m=modal("ADMIN");m.body.append(node("p","TO BE A GOOD MAN."));
 action(m.body,"ทดสอบเกม",()=>{root.location.href="story-lab.html"},m);
 action(m.body,"Life Story Studio",()=>{root.location.href="story-map.html?v=20261128-4"},m);
 action(m.body,"ออกจากระบบผู้พัฒนา",async()=>{await logoutAdmin();m.d.close()},m);
}
async function guard(){
 const path=location.pathname.split("/").pop(), lab=new URLSearchParams(location.search).get("storylab")==="1";
 const locked=["story-map.html","story-lab.html","story-current-map.html"].includes(path)||lab;
 if(locked){if(await isAdmin()){document.documentElement.removeAttribute("data-studio-lock");return}
  if(window.parent!==window){document.body.replaceChildren(node("p","ต้องเข้าสู่ระบบผู้พัฒนา"));document.documentElement.removeAttribute("data-studio-lock");return}
  location.replace("index.html");return;
 }
 document.addEventListener("click",e=>{if(e.target.closest?.(".brand,.gc-home-title"))developer().catch(err=>alert(err.message))});
 document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.closest?.(".brand,.gc-home-title")){e.preventDefault();developer().catch(err=>alert(err.message))}});
 const brand=document.querySelector(".brand");if(brand){brand.setAttribute("role","button");brand.tabIndex=0;}
}
async function player(getSave,applySave){
 throw Error("ระบบบัญชีผู้เล่น Cloud ยังไม่เปิดใช้งาน");

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
 async list(){return adminApi("list")},
 async read(id){const r=await adminApi("read",{id});if(!r)throw Error("ไม่พบโปรเจกต์");return r},
 async history(id){return adminApi("history",{id})},
 async revision(id,revision){const r=await adminApi("revision",{id,revision});if(!r)throw Error("ไม่พบเวอร์ชัน");return r},
 async save(id,revision,title,payload){return adminApi("save",{id,revision,title,payload})}
};
root.GoodmanCloud={developer,player,studio,isAdmin,modal,action,node};
document.addEventListener("DOMContentLoaded",()=>guard().catch(()=>{if(document.documentElement.hasAttribute("data-studio-lock"))location.replace("index.html")}));
})(window);
