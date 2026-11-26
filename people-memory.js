window.PEOPLE=(()=>{
const all=[...window.STORY,...window.EPISODES], by=Object.fromEntries(all.map(e=>[e.id,e]));
const c=(label,result,delta,set)=>({label,result,delta,set});
const optional={},required={},gates={};
function map(target,person,ids){for(const id of ids.split(" "))if(by[id]){(target[id]??=[]).push(person)}}
function opt(person,ids){map(optional,person,ids)}
function duty(person,ids){map(required,person,ids)}
function gate(id,parent,choices){if(by[id])gates[id]=[parent,choices]}
const known=(st,n)=>!!st.people[n];
const blocked=(st,n)=>["ไม่ชอบ","เว้นระยะ"].includes(st.people[n]?.feeling);
const privateOK=(st,n)=>known(st,n)&&!blocked(st,n)&&st.people[n].boundary!=="งานเท่านั้น"&&st.people[n].boundary!=="ไม่ติดต่อ";
const set=(st,n,patch)=>{st.people[n]={...(st.people[n]||{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"}),...patch}};
const like=(st,n)=>set(st,n,{feeling:"รู้สึกดี",boundary:"เปิดใจ"});
const stop=(st,n,feeling="เว้นระยะ")=>set(st,n,{feeling,boundary:"ไม่ติดต่อ"});
const workOnly=(st,n)=>set(st,n,{boundary:"งานเท่านั้น"});
const meet=(st,n)=>{if(!known(st,n))set(st,n,{})};
const mek=by.meet_mek;
mek.title="เด็กที่ป้าพามาบ้าน";mek.story="ป้าอ้อยพาเด็กชายวัยเดียวกันชื่อเมฆมาเยี่ยม แม่แนะนำให้รู้จัก เขาหยิบรถของเล่นออกมา คุณรู้สึกอย่างไรกับเด็กคนนี้";mek.custom=true;
mek.choices=[c("ชอบ อยากรู้จักเขา","คุณสนใจเด็กคนใหม่และอยากรู้ว่าเขาชอบเล่นอะไร",{social:1}),c("เฉยๆ ยังไม่รู้ว่าจะเข้ากันได้ไหม","คุณยังไม่ต้องรีบชอบหรือไม่ชอบใคร",{experience:1}),c("ไม่ชอบ อยากอยู่กับของเล่นของตัวเอง","แม่รับรู้ว่าคุณอยากมีพื้นที่ส่วนตัว",{selfcontrol:1}),c("ยังไม่คุ้น ขออยู่ใกล้แม่ก่อน","คุณต้องการเวลาปรับตัวโดยไม่จำเป็นต้องเล่นกับเขา",{mother:1})];
const visit={id:"people_mek_visit",age:3,order:-5,title:"เมฆอยากเล่นด้วย",story:"ป้าอ้อยยังคุยกับแม่อยู่ เมฆเดินมาชวนเล่น คุณเลือกได้ว่าจะเล่นด้วยกันหรือเล่นของตัวเอง",custom:true,choices:[c("ลองเล่นด้วยกัน","คุณได้ลองเล่นร่วมกัน เมฆเริ่มคุ้นเคยกับคุณ",{friend:2,social:1}),c("เล่นใกล้กันแต่ขอใช้ของคนละชุด","ทั้งคู่มีพื้นที่ของตัวเอง",{selfcontrol:2}),c("ไม่อยากเล่นด้วย ขออยู่กับแม่","แม่ช่วยจัดพื้นที่ให้คุณ เรื่องการเล่นกับเมฆจบลงตรงนี้",{mother:1,selfcontrol:2}),c("ขอเล่นคนเดียวในมุมของตัวเอง","เมฆไปเล่นอีกมุม คุณได้ใช้เวลาตามที่ต้องการ",{h:2})]};
window.STORY.push(visit);
opt("เมฆ","toy toy_a toy_b glass loan loan_a loan_cross business business_a friendsecret reunion reunion_a");
duty("เมฆ","group group_a apology loanback betray betray_a");
opt("ฟ้า","school_a school_b snack fahhelp return gamble_b beach_cross");
duty("ฟ้า","bully exam fahhurt school_care oldfriendjob");
opt("ฟ้า","betray_cross");duty("เมฆ","betray_cross");
opt("มายด์","crush date");duty("มายด์","tempt caught love1");
opt("พิม","teen_pim");opt("นารา","teen_nara");
opt("แพร","campuslove pubdate pub_cross");opt("ออม","odd_trip");
opt("พลอย","colleague colleague2 colleague_follow");duty("พลอย","office_rival office_rival2");
opt("น้ำ","bossromance");duty("น้ำ","bossromance2 boss_fall");
opt("มิน","juniorromance");duty("มิน","junior2");
opt("ครูแนน","teacherlater");duty("ครูแนน","teacher_secret");
gate("toy","people_mek_visit",[0,1]);gate("toy_a","toy",[1,2]);gate("toy_b","toy_a",[0,2]);
gate("school_a","kindergarten",[1,3]);gate("school_b","school_a",[0,1,2]);
gate("campus_a","campus",[0,1,3]);gate("campus_b","campus_a",[0,1,2]);gate("study_team","campus_b",[0,1]);gate("campuslove","campus",[0,1,3]);
gate("pub_a","pub",[0,1,2,3]);gate("pub_cross","pub_a",[2]);gate("loan_a","loan",[0,1,3]);gate("business_a","business",[0,1,3]);gate("reunion_a","reunion",[0,2]);gate("colleague_follow","colleague2",[0,1]);gate("odd_trip","travel_stranger",[0,1,2]);
if(by.meet_mind)by.meet_mind.story="ในงานโรงเรียน คุณพบมายด์ที่ชอบจัดกิจกรรม พิมที่ตั้งใจเรียนและมั่นใจ และนาราที่ชอบดนตรี แต่ละคนมีชีวิตของตัวเอง คุณอยากรู้จักใครมากขึ้นไหม";
if(by.campus)by.campus.story="กลุ่มนักศึกษาชวนคุณเข้ากลุ่มติว หนึ่งในสมาชิกชื่อแพร เธอแนะนำตัวและถามว่าคุณสนใจร่วมกิจกรรมไหม";
if(by.campus_a)by.campus_a.story="กลุ่มติวนัดกินข้าว แพรเอาหนังสือมาด้วยเพราะยังมีโจทย์ทำไม่เสร็จ อีกคนชวนไปดูหนัง";
if(by.campus_b)by.campus_b.story="เพื่อนตั้งกลุ่มใหม่หลังมื้ออาหาร มีคนส่งสรุป แพรส่งรูปแมว และมีคนเสนอให้สมัครแข่งทำโครงการด้วยกัน";
if(by.study_team)by.study_team.story="ก่อนส่งโครงการ เพื่อนในกลุ่มคนหนึ่งต้องกลับบ้านด่วน แพรอยากเลื่อนนัด ส่วนอีกคนกลัวคะแนนไม่ทัน";
if(by.pub_cross)by.pub_cross.story="แพรชวนกินกาแฟวันหยุด เธออยากรู้จักคุณนอกบรรยากาศร้านเพลง";
if(by.pub_cross)by.pub_cross.choices[1]={...by.pub_cross.choices[1],label:"ชวนเพื่อนในกลุ่มมาร่วมด้วย",result:"ทุกคนได้พบกันในบรรยากาศกลุ่ม"};
if(by.office_rival2)by.office_rival2.choices[3]={...by.office_rival2.choices[3],label:"นัดคุยเรื่องงานกับคนกลาง",result:"ทั้งคู่ได้พูดคุยเรื่องงานในขอบเขตที่เหมาะสม"};
function allowed(e,st,s){if(e.id==="people_mek_visit")return known(st,"เมฆ")&&!Object.hasOwn(s.answers,e.id);
if(e.id==="toy"&&Object.hasOwn(s.answers,"meet_mek")&&!Object.hasOwn(s.answers,"people_mek_visit"))return false;
if(gates[e.id]){const [p,ns]=gates[e.id];if(!ns.includes(s.answers[p]))return false}
if(optional[e.id]?.some(n=>!privateOK(st,n)))return false;
if(required[e.id]?.some(n=>!known(st,n)))return false;
if(e.id==="glass"&&!privateOK(st,"เมฆ"))return false;
if(e.id==="teen_future"&&st.teenBond&&!privateOK(st,st.teenBond))return false;
if(["adult_meet2","early_love","dating"].includes(e.id)&&st.adultInterest&&!privateOK(st,st.adultInterest))return false;
if(e.id==="new_love"&&st.flirt&&blocked(st,st.flirt))return false;
if(e.flex==="court"&&st.candidate&&blocked(st,st.candidate))return false;
if(e.id==="secret_begin"&&st.flirt&&blocked(st,st.flirt))return false;
if(e.id==="people_boundary")return false;
if(e.personBoundary)return known(st,e.personBoundary)&&!blocked(st,e.personBoundary)&&!["ไม่ติดต่อ","งานเท่านั้น"].includes(st.people[e.personBoundary].boundary)&&!(st.partnerName===e.personBoundary&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship));
return true}
function after(st,old,e,n,ch,item){const id=e.id;
if(id==="meet_mek"){meet(st,"เมฆ");if(n===0)like(st,"เมฆ");if(n===2)stop(st,"เมฆ","ไม่ชอบ");if(n===3)set(st,"เมฆ",{feeling:"ยังไม่คุ้น"});}
if(id==="people_mek_visit"){if(n===0)like(st,"เมฆ");if(n===1)set(st,"เมฆ",{boundary:"รู้จักห่างๆ"});if(n>=2)stop(st,"เมฆ",st.people["เมฆ"]?.feeling==="ไม่ชอบ"?"ไม่ชอบ":"เว้นระยะ")}
if(id==="kindergarten"){meet(st,"ฟ้า");if(n===1)like(st,"ฟ้า");if(n===2)set(st,"ฟ้า",{boundary:"รู้จักห่างๆ"});}
if(id==="school_a"&&n===3)stop(st,"ฟ้า");
if(id==="school_b"&&n===2)stop(st,"ฟ้า","ไม่ชอบ");
if(id==="toy_a"&&[1,3].includes(n))stop(st,"เมฆ");
if(id==="loanback"&&n===1||id==="friendsecret"&&n===2||id==="reunion"&&n===3||id==="betray_a"&&n===2||id==="reunion_a"&&n===3)stop(st,"เมฆ");
if(id==="return"&&n===3)stop(st,"ฟ้า");
if(id==="meet_mind"){for(const name of ["มายด์","พิม","นารา"])meet(st,name);if(n<3)like(st,["มายด์","พิม","นารา"][n]);}
if(["teen_pim","teen_nara"].includes(id)&&n===3){const name=id==="teen_pim"?"พิม":"นารา";set(st,name,{boundary:"เพื่อนเท่านั้น"});st.teenBond="";st.teenCrush="";}
if(id==="crush"&&n===1){set(st,"มายด์",{boundary:"เพื่อนเท่านั้น"});st.teenCrush="";st.teenBond=""}
if(id==="date"&&n===1){set(st,"มายด์",{boundary:"เพื่อนเท่านั้น"});st.teenBond="";st.teenCrush=""}
if(id==="campus"||id==="pub"){meet(st,"แพร");if(id==="campus"&&n===2||id==="pub"&&n===4)stop(st,"แพร")}
if(id==="campuslove"&&n===2||id==="pub_a"&&n===3)stop(st,"แพร");
if(id==="adult_meet"){for(const name of ["ริน","ใบเฟิร์น","อิง"])meet(st,name);if(n<3)like(st,["ริน","ใบเฟิร์น","อิง"][n])}
if(id==="adult_meet2"&&n===3&&old.adultInterest){stop(st,old.adultInterest);st.adultInterest="";st.adultBond=""}
if(id==="work_people"){meet(st,"พลอย");meet(st,"น้ำ");if(n===2){workOnly(st,"พลอย");workOnly(st,"น้ำ")}if(n===3)like(st,"พลอย")}
if(id==="colleague"&&n===3)workOnly(st,"พลอย");
if(id==="colleague2"&&n>=2||id==="colleague_follow"&&n===2){workOnly(st,"พลอย");if(st.flirt==="พลอย")st.flirt=""}
if(id==="office_rival2"&&n===1)workOnly(st,"พลอย");
if(id==="bossromance"&&n===2||id==="bossromance2"&&n===3){workOnly(st,"น้ำ");if(st.flirt==="น้ำ")st.flirt=""}
if(id==="lead_people")meet(st,"มิน");
if(id==="juniorromance"&&n===2||id==="junior2"){workOnly(st,"มิน");if(st.flirt==="มิน")st.flirt=""}
if(id==="teachermeet"){meet(st,"ครูแนน");if(n===0||n===3)workOnly(st,"ครูแนน");else like(st,"ครูแนน")}
if(id==="teacherlater"&&n===2||id==="teacher_secret"&&n===1){stop(st,"ครูแนน");if(st.flirt==="ครูแนน")st.flirt=""}
if(id==="travel_stranger"){meet(st,"ออม");if(n===3)stop(st,"ออม");else like(st,"ออม")}
if(id==="meet_late"){meet(st,"จูน");if(n===3)stop(st,"จูน");if(n===2)set(st,"จูน",{boundary:"เพื่อนเท่านั้น"})}
if(e.flex==="reopen"&&st.candidate)meet(st,st.candidate);
if(e.flex==="court"&&old.candidate){if(n===2)set(st,old.candidate,{boundary:"เพื่อนเท่านั้น"});if(n===3)stop(st,old.candidate)}
if(e.personBoundary){const person=e.personBoundary;if(n===0)like(st,person);if(n===1)set(st,person,{boundary:"รู้จักห่างๆ"});if(n===2)stop(st,person);if(n===3)stop(st,person,"ไม่ชอบ");if(n>=2){for(const k of ["flirt","interest","candidate","teenBond","teenCrush","adultInterest"])if(st[k]===person)st[k]="";}}
if(old.partnerName&&old.partnerName!==st.partnerName&&["โสด","แยกทาง"].includes(st.relationship))stop(st,old.partnerName);
if(st.partnerName&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship))like(st,st.partnerName);
}
const names=["เมฆ","ฟ้า","พลอย","น้ำ","มิน","แพร","ออม","ครูแนน","มายด์","พิม","นารา","ริน","ใบเฟิร์น","อิง","จูน"];
for(const [i,name] of names.entries())for(const age of [12,17,22,30,40,50,60,70,80,90]){if(i>=2&&age<22)continue;window.STORY.push({id:"people_boundary_"+i+"_"+age,age,order:78+i/100,title:"ความรู้สึกที่มีต่อ"+name,story:"คุณมีโอกาสทบทวนความรู้สึกที่มีต่อ"+name+" ไม่จำเป็นต้องฝืนสนิทหรือใช้เวลาส่วนตัวร่วมกัน หากยังมีหน้าที่เกี่ยวข้องกันก็รักษาขอบเขตตามหน้าที่ได้",personBoundary:name,custom:true,choices:[c("รู้สึกดี อยากรักษาความสัมพันธ์","คุณเปิดพื้นที่ให้ติดต่อกันเมื่อทั้งคู่ต้องการ",{friend:1}),c("เฉยๆ ขอรู้จักกันห่างๆ","คุณไม่ต้องสนิทกับทุกคน",{selfcontrol:1}),c("ไม่อยากติดต่อเรื่องส่วนตัวแล้ว","เกมจะจดจำขอบเขตนี้และหยุดเรื่องส่วนตัวของคนนี้",{selfcontrol:1}),c("ไม่ชอบ ขอเว้นระยะ","คุณเลือกไม่สานต่อความสัมพันธ์ส่วนตัว โดยยังรับผิดชอบหน้าที่ที่หลีกเลี่ยงไม่ได้",{selfcontrol:1})]})}
function story(e,st){if(e.id==="group"&&blocked(st,"เมฆ"))return "ครูจัดกลุ่มให้คุณทำงานกับเมฆ แม้คุณไม่อยากสนิทกับเขา แต่ต้องทำงานตามหน้าที่ เมฆต้องดูแลน้องจึงไม่ได้ช่วยงาน เพื่อนจะตัดชื่อ";if(["office_rival","office_rival2"].includes(e.id)&&!privateOK(st,"พลอย"))return "แม้คุณอยากรักษาระยะส่วนตัวกับพลอย แต่ยังต้องร่วมงานในทีมตามหน้าที่ "+e.story;return e.story}
return {allowed,after,story,privateOK,blocked,known};})();
