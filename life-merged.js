window.LIFE_MERGED=(()=>{
const details=window.CAREER_DETAIL, catalog=window.CAREER_WORLD.by;
const c=(label,result,delta,set)=>({label,result,delta,set});
const initial={detailFlag:"",detailSource:"",detailAge:-1,partnerJob:"",partnerIdentity:"",partnerSince:-1,partnerJobAge:-1,partnerJobHistory:[],hobbyId:"",hobbyAim:"",hobbyXP:0,hobbyMenu:"",hobbyStart:-1,hobbyPractice:-1,professionSince:-1};
const hobbies=[
["music","เล่นดนตรี","ดนตรี","ซ้อมเพลงที่ชอบและลองบันทึกเสียง","music"],
["photo","ถ่ายภาพ","ภาพถ่าย","เดินถ่ายภาพและจัดอัลบั้มผลงาน","photo"],
["game","เล่นเกมและสร้างเกม","เกม","ลองทำเกมขนาดเล็กหรือด่านทดลอง","game"],
["art","วาดภาพและออกแบบ","ศิลปะ","วาดภาพหรือออกแบบงานชิ้นเล็ก","architect"],
["cook","ทำอาหาร","อาหาร","ลองทำเมนูใหม่และจดต้นทุนวัตถุดิบ","chef"],
["garden","ปลูกต้นไม้","สวน","ดูแลแปลงเล็กและสังเกตการเติบโต","farmer"],
["sport","กีฬาและออกกำลังกาย","กีฬา","ฝึกตามกำลังและสนุกกับการเคลื่อนไหว",""],
["reading","อ่านหนังสือและเรียนรู้","หนังสือ","อ่านเรื่องที่ชอบและจดสิ่งที่ค้นพบ",""]
].map(([id,name,short,activity,career])=>({id,name,short,activity,career}));
const hb=Object.fromEntries(hobbies.map(h=>[h.id,h]));
const partnerJobs=[
["doctor","แพทย์","สุขภาพ","เวรและงานที่คาดเวลาไม่ได้"],
["nurse","พยาบาล","สุขภาพ","ตารางเวรที่เปลี่ยนบ่อย"],
["pharm","เภสัชกร","สุขภาพ","เวลาเปิดบริการและการทำงานช่วงวันหยุด"],
["dent","ทันตแพทย์","สุขภาพ","คิวนัดผู้รับบริการ"],
["engineer","วิศวกร","โครงการ","งานโครงการและการเดินทาง"],
["architect","สถาปนิก","โครงการ","แก้แบบและนัดลูกค้า"],
["software","โปรแกรมเมอร์","โครงการ","กำหนดส่งและงานแก้ระบบ"],
["account","นักบัญชี","โครงการ","ช่วงปิดงบที่งานหนาแน่น"],
["chef","เชฟ","บริการ","งานช่วงมื้อเย็นและวันหยุด"],
["farmer","เกษตรกร","ธุรกิจ","รายได้ที่เปลี่ยนตามฤดูกาล"],
["mechanic","ช่างยนต์","บริการ","คิวซ่อมที่อาจใช้เวลานานกว่าคาด"],
["logistics","งานโลจิสติกส์","บริการ","กะงานและการเดินทาง"],
["teacher","ครู","การศึกษา","งานสอนและเตรียมบทเรียน"],
["photo","ช่างภาพ","สร้างสรรค์","งานถ่ายที่ไม่ตรงวันหยุดทั่วไป"],
["music","นักดนตรี","สร้างสรรค์","งานแสดงตอนกลางคืนและรายได้ไม่สม่ำเสมอ"],
["game","นักพัฒนาเกม","โครงการ","ช่วงปล่อยเกมและแก้บั๊ก"],
["lawyer","ทนายความ","ยุติธรรม","กำหนดนัดและเตรียมเอกสาร"],
["police","ตำรวจ","ยุติธรรม","ตารางเวรและหน้าที่ที่เปลี่ยนกะทันหัน"],
["judge","ผู้พิพากษา","ยุติธรรม","ภาระงานเอกสารและขอบเขตการเปิดเผยเรื่องงาน"],
["civil","ข้าราชการ","การศึกษา","วันทำงานและโอกาสย้ายหน่วยงาน"],
["office","พนักงานบริษัท","โครงการ","กำหนดส่งและเวลาประชุม"],
["owner","เจ้าของธุรกิจ","ธุรกิจ","ยอดขายและรายจ่ายกิจการ"],
["actor","นักแสดง","สร้างสรรค์","เวลาออดิชันและตารางถ่ายทำ"],
["student","นักศึกษา","เรียน","ตารางเรียน การสอบ และค่าใช้จ่าย"],
["care","ดูแลครอบครัว","บ้าน","งานดูแลคนในบ้านที่ไม่มีเวลาสิ้นสุดแน่นอน"],
["retired","เกษียณแล้ว","พัก","กิจวัตรและเวลาพักที่ต่างจากคนทำงาน"]
].map(([id,name,kind,burden])=>({id,name,kind,burden}));
const jobs=Object.fromEntries(partnerJobs.map(j=>[j.id,j]));
const partnered=s=>["คบกัน","อยู่ด้วยกัน"].includes(s.relationship);
const working=s=>["งานประจำ","อิสระ","ธุรกิจ","งานประจำควบธุรกิจ"].includes(s.mode);
const hash=t=>Array.from(t).reduce((n,ch)=>((n*31+ch.codePointAt(0))>>>0),2166136261);
function jobFor(name,age){const pool=age<20?["student"]:age<23?["student","office","chef","photo","music","mechanic","logistics","farmer","actor"]:age<25?partnerJobs.filter(j=>!["judge","doctor","dent","pharm","retired"].includes(j.id)).map(j=>j.id):age<35?partnerJobs.filter(j=>!["judge","retired"].includes(j.id)).map(j=>j.id):age<60?partnerJobs.filter(j=>j.id!=="retired").map(j=>j.id):["retired","care","owner","farmer","photo","music","teacher","office"];return pool[hash(name+"|"+age)%pool.length]}
function beforeAge(s,prefix){return s.history.findLast(x=>x.id.startsWith(prefix))?.age??-100}
function first(s,prefix){return !s.history.some(x=>x.id.startsWith(prefix))}
function add(id,age,order,title,story,merge,choices,extra={}){window.STORY.push({id,age,order,title,story,merge,choices,custom:true,...extra})}
function allowed(e,st,s){if(!e.merge)return true;const a=e.age,h=hb[st.hobbyId],p=jobs[st.partnerJob];switch(e.merge){
case "detail":return st.profession===e.detailJob&&working(st)&&!st.detailFlag&&a>=st.professionSince+e.detailDelay&&first(s,"mx_detail_"+e.detailIndex+"_");
case "detailFollow":return !!st.detailFlag&&st.detailFlag===e.flag&&a>=st.detailAge&&beforeAge(s,"mx_follow_")<a;
case "hobbyMenu":return !st.hobbyMenu&&a-beforeAge(s,"mx_hobby_menu_")>=5;
case "hobbyPick":return st.hobbyMenu===e.group;
case "hobbyAim":return !!h&&st.hobbyAim==="choose";
case "hobbyPractice":return !!h&&["relax","career","both"].includes(st.hobbyAim)&&a>st.hobbyStart&&a-st.hobbyPractice>=2;
case "hobbyCareer":return !!h&&!!h.career&&st.hobbyXP>=2&&["career","both"].includes(st.hobbyAim)&&!st.careerPlan&&!st.careerMenu&&st.profession!==h.career&&a-beforeAge(s,"mx_hobby_career_")>=4&&a<=74;
case "hobbyTogether":return !!h&&partnered(st)&&!!p&&a-beforeAge(s,"mx_hobby_together_")>=5&&a>st.hobbyStart;
case "partnerIntro":return partnered(st)&&!!p&&st.partnerJobAge<st.partnerSince;
case "partnerWork":return partnered(st)&&!!p&&p.kind===e.kind&&a>st.partnerSince&&a-beforeAge(s,"mx_partner_work_")>=4;
case "partnerFuture":return partnered(st)&&!!p&&a-st.partnerSince>=2&&a-beforeAge(s,"mx_partner_future_")>=7;
default:return false}}
function after(st,old,e,n,choice,item){const a=item.age;
if(st.profession&&st.profession!==old.profession)st.professionSince=a;
if(!st.profession)st.professionSince=-1;
if(!partnered(st)){st.partnerJob="";st.partnerIdentity="";st.partnerSince=-1;st.partnerJobAge=-1}
else {const identity=st.partnerName||old.partnerIdentity||"คนรัก";if(!partnered(old)||!st.partnerJob||st.partnerIdentity!==identity){st.partnerIdentity=identity;st.partnerJob=jobFor(identity,a);st.partnerSince=a;st.partnerJobAge=-1;st.partnerJobHistory.push({name:identity,job:st.partnerJob,age:a})}}
if(e.merge==="detail"&&choice.set?.detailFlag){st.detailSource=e.title;st.detailAge=a;}
if(e.merge==="hobbyPick"){st.hobbyXP=0;st.hobbyStart=a;st.hobbyPractice=a;st.hobby=hb[st.hobbyId].name}
if(e.merge==="hobbyPractice"){st.hobbyPractice=a;if(n!==3)st.hobbyXP+=n===1?2:1}
if(e.merge==="hobbyCareer"&&n===0){const h=hb[st.hobbyId];if(h?.career){st.careerPlan=h.career;st.careerPhase="waiting";st.careerMenu=""}}
if(e.merge==="partnerIntro")st.partnerJobAge=a;
if(e.merge==="partnerFuture"&&n===0){const current=st.partnerJob;const next=a>=60?"retired":current==="student"?"office":current==="owner"?"office":"owner";st.partnerJob=next;st.partnerJobAge=-1;st.partnerJobHistory.push({name:st.partnerIdentity,job:next,age:a})}
}
function story(e,st){const h=hb[st.hobbyId],p=jobs[st.partnerJob],my=st.profession?catalog[st.profession]?.name:st.goal||st.mode||"เส้นทางชีวิตของคุณ";return e.story.replaceAll("{hobby}",h?.name||"งานอดิเรก").replaceAll("{activity}",h?.activity||"ทำกิจกรรมที่ชอบ").replaceAll("{career}",h?.career?catalog[h.career]?.name||"งานที่สนใจ":"งานที่สนใจ").replaceAll("{partner}",st.partnerName||st.partnerIdentity||"คนรัก").replaceAll("{job}",p?.name||"งานของอีกฝ่าย").replaceAll("{burden}",p?.burden||"ภาระของอีกฝ่าย").replaceAll("{my}",my).replaceAll("{source}",st.detailSource||"เรื่องที่เกิดในงาน")}
const follow={
time:["เวลาที่หายไป","หลังเรื่อง {source} คุณมีเวลาพักและเวลาส่วนตัวน้อยลง",[
c("ปรับตารางและกันเวลาพักจริง","คุณได้เวลาคืนมาโดยไม่ต้องทิ้งเป้าหมายงาน",{energy:5,stress:-3},{detailFlag:""}),
c("ขอแรงสนับสนุนจากคนที่เกี่ยวข้อง","คุณแบ่งภาระและรักษาความสัมพันธ์",{r:3,problem:4},{detailFlag:""}),
c("ทำงานต่อและเลื่อนแผนชีวิตไปอีก","ความเหนื่อยยังสะสมและเรื่องนี้ยังไม่จบ",{energy:-4,stress:5},{careerBalance:"ค้าง"}),
c("ใช้วันหยุดทำสิ่งที่ชอบ","คุณได้กลับมาพักจากบทบาทงานและทบทวนความต้องการ",{h:5,energy:3},{detailFlag:""})]],
money:["รายจ่ายที่ตามมาจากงาน","หลังเรื่อง {source} เงินสำรองเปลี่ยนไป คุณต้องวางแผนก่อนตัดสินใจเรื่องอื่น",[
c("จัดงบใหม่ตามเงินที่เหลือ","คุณเห็นว่าค่าใช้จ่ายใดต้องปรับก่อน",{security:4,discipline:3},{detailFlag:""}),
c("หารายได้เสริมตามกำลัง","คุณได้เงินเพิ่มแต่เวลาพักลดลง",{m:1800,energy:-3},{detailFlag:""}),
c("รับภาระเพิ่มโดยไม่จัดแผน","ความเครียดและค่าใช้จ่ายยังตามมา",{m:-1800,stress:5},{careerBalance:"ค้าง"}),
c("ขอคำแนะนำและทบทวนการลงทุน","คุณไม่ต้องตัดสินใจเพียงเพราะกลัวเสียโอกาส",{problem:4,knowledge:3},{detailFlag:""})]],
conflict:["คนที่ยังไม่อยากคุยกับเรา","เรื่อง {source} ยังไม่จบ คนที่เกี่ยวข้องขอให้ทบทวนสิ่งที่เกิดขึ้น",[
c("ฟังและรับผิดชอบส่วนของตัวเอง","ทุกคนได้พูดข้อเท็จจริงและวางแผนแก้เรื่อง",{responsibility:4,reliable:3},{detailFlag:""}),
c("ขอคนกลางช่วยตามความเหมาะสม","การพูดคุยไม่ต้องขึ้นกับอารมณ์ฝ่ายเดียว",{fair:4,problem:3},{detailFlag:""}),
c("หลบเลี่ยงการคุยต่อ","เรื่องค้างเริ่มกระทบความไว้ใจและชีวิตนอกงาน",{reliable:-4,stress:5},{careerFriend:"ค้าง",careerBalance:"ค้าง"}),
c("ทบทวนขอบเขตและทางเลือกอาชีพ","คุณได้พิจารณาว่าจะเดินต่อในสภาพแวดล้อมนี้อย่างไร",{experience:4,confidence:3},{detailFlag:""})]],
opportunity:["โอกาสที่ยังไม่ใช่คำตอบ","จากเรื่อง {source} มีคนชวนคุยต่อเรื่องโอกาสใหม่ คุณยังไม่ต้องรับปากว่าจะเปลี่ยนชีวิต",[
c("ทดลองในขอบเขตเล็ก","คุณได้ข้อมูลและประสบการณ์เพิ่มโดยไม่ต้องเสี่ยงทุกอย่าง",{skill:4,network:3},{detailFlag:""}),
c("หารือเงื่อนไขและความพร้อม","คุณเห็นทั้งต้นทุนและโอกาสก่อนตัดสินใจ",{problem:4,knowledge:3},{detailFlag:""}),
c("มุ่งสร้างผลงานจนละเลยเวลาพัก","ผลงานคืบหน้าแต่ชีวิตส่วนอื่นเริ่มตึง",{career:4,energy:-5},{detailFlag:"time",careerBalance:"ค้าง"}),
c("ขอเก็บโอกาสไว้ก่อน","คุณยังมีทางเลือกโดยไม่ต้องรับทุกข้อเสนอ",{patience:3,h:3},{detailFlag:""})]]
};
const issues={
สุขภาพ:["เวลาที่สวนกัน","คนรักทำงานเป็น{job} และมี{burden} ขณะที่คุณมีแผนชีวิตของตัวเอง"],
โครงการ:["กำหนดส่งที่ชนกัน","คนรักทำงานเป็น{job} และมี{burden} ช่วงเดียวกับที่คุณต้องจัดการเรื่องของตัวเอง"],
บริการ:["วันหยุดที่ไม่ตรงกัน","คนรักทำงานเป็น{job} มี{burden} ทำให้นัดส่วนตัวต้องวางแผนใหม่"],
ธุรกิจ:["รายได้ที่ไม่เท่ากันทุกเดือน","คนรักทำงานเป็น{job} มี{burden} ทั้งคู่ต้องตกลงเรื่องเวลาและค่าใช้จ่าย"],
การศึกษา:["ช่วงงานที่ต้องเตรียมตัว","คนรักทำงานเป็น{job} มี{burden} และอยากรักษาเวลานอกงานด้วย"],
สร้างสรรค์:["ความฝันที่มีตารางไม่แน่นอน","คนรักทำงานเป็น{job} มี{burden} และอยากมีพื้นที่ทำสิ่งที่ชอบ"],
ยุติธรรม:["เรื่องงานที่เล่าได้ไม่ทั้งหมด","คนรักทำงานเป็น{job} มี{burden} และต้องรักษาขอบเขตเรื่องงาน"],
เรียน:["สอบกับแผนที่นัดไว้","คนรักเป็น{job} มี{burden} แต่คุณมีแผนชีวิตของตัวเอง"],
บ้าน:["งานที่ไม่ได้รับเงินเดือน","คนรัก{job} มี{burden} ทั้งคู่ต้องคุยกันเรื่องภาระและเวลาพัก"],
พัก:["ชีวิตที่เดินคนละจังหวะ","คนรัก{job} มี{burden} ขณะที่คุณมีตารางของตัวเอง"]
};
for(let age=15;age<=99;age++){
if(age>=18&&age<=79)details.forEach((d,i)=>add("mx_detail_"+i+"_"+age,age,72+i/100,d.title,d.story,"detail",d.choices,{detailJob:d.job,detailIndex:i,detailDelay:i%2===0?1:3}));
if(age>=18)for(const [flag,[title,body,cs]] of Object.entries(follow))add("mx_follow_"+flag+"_"+age,age,74,title,body,"detailFollow",cs,{flag});
if(age===15||age%5===0){
add("mx_hobby_menu_"+age,age,45,"เวลาที่เป็นของเรา","อยากมีงานอดิเรกใหม่ไหม หรืออยากเก็บความสนใจเดิมไว้ ไม่จำเป็นต้องทำเพื่อหาเงิน","hobbyMenu",[
c("ลองงานสร้างสรรค์หรือดิจิทัล","คุณเปิดพื้นที่ลองสิ่งใหม่",{creative:2},{hobbyMenu:"creative"}),c("ลองอาหาร ธรรมชาติ กีฬา หรือหนังสือ","คุณสำรวจสิ่งที่เหมาะกับจังหวะชีวิต",{h:2},{hobbyMenu:"other"}),c("รักษางานอดิเรกเดิม","คุณยังมีสิ่งที่ชอบโดยไม่จำเป็นต้องเปลี่ยน",{h:3}),c("ไม่ต้องมีงานอดิเรกเป็นเรื่องเป็นราว","คุณเลือกพักตามความต้องการ",{energy:3})]);
for(const [g,arr] of [["creative",hobbies.slice(0,4)],["other",hobbies.slice(4)]])add("mx_hobby_pick_"+g+"_"+age,age,45.1,"เลือกสิ่งที่อยากลอง","กิจกรรมไหนที่อยากลองในเวลาของตัวเอง","hobbyPick",arr.map(h=>c(h.name,"คุณเริ่มลอง"+h.name+" ในแบบที่เหมาะกับตัวเอง",{experience:2},{hobbyId:h.id,hobbyMenu:"",hobbyAim:"choose"})),{group:g});
add("mx_hobby_aim_"+age,age,45.2,"ทำเพราะรักหรืออยากเป็นอาชีพ","คุณอยากให้ {hobby} มีบทบาทกับชีวิตอย่างไร","hobbyAim",[
c("ทำเพื่อความสุขและพักจากงาน","คุณไม่ต้องวัดคุณค่าความชอบด้วยรายได้",{h:4,stress:-2},{hobbyAim:"relax"}),c("ฝึกจริงจังเผื่อเปลี่ยนอาชีพ","คุณเริ่มสะสมฝีมือ แต่ยังต้องผ่านเงื่อนไขงานหากจะเปลี่ยน",{skill:3,discipline:2},{hobbyAim:"career"}),c("ทั้งพักใจและค่อยๆ ฝึกฝีมือ","คุณเลือกจังหวะที่ไม่ทำลายความสนุก",{h:3,skill:2},{hobbyAim:"both"}),c("ยังไม่แน่ใจ ขอทำเล่นก่อน","คุณไม่ต้องรีบกำหนดเป้าหมาย",{h:3,patience:2},{hobbyAim:"relax"})]);
}
add("mx_hobby_practice_"+age,age,46,"เวลาว่างที่อยากรักษา","คุณมีโอกาส {activity} แต่ยังต้องจัดเวลาให้เรื่องอื่นในชีวิต","hobbyPractice",[
c("ทำเพื่อผ่อนคลายตามกำลัง","คุณรู้สึกดีขึ้นและได้พักจากเรื่องอื่น",{h:4,energy:3,stress:-2}),c("ฝึกอย่างจริงจังและเก็บผลงาน","คุณสะสมฝีมือและเริ่มเห็นพัฒนาการ",{skill:4,creative:3,discipline:2}),c("ชวนเพื่อนหรือคนรู้จักทำด้วยกัน","คุณได้สังคมใหม่และแลกเปลี่ยนความสนใจ",{friend:3,social:3,skill:1}),c("พักกิจกรรมช่วงนี้","คุณไม่ฝืนความชอบเมื่อชีวิตมีเรื่องอื่น",{energy:3,selfcontrol:2})]);
if(age>=18){
add("mx_hobby_career_"+age,age,46.1,"ความชอบกำลังเปิดประตูอีกบาน","จากฝีมือที่สะสมใน {hobby} คุณสนใจสำรวจเส้นทาง {career} ไหม ยังต้องเรียนหรือฝึกตามคุณสมบัติของอาชีพจริงในเกม","hobbyCareer",[
c("ตั้งเป้าและเตรียมตัวเปลี่ยนสายงาน","คุณเปิดแผนเตรียมอาชีพ ไม่ได้ออกจากงานเดิมหรือผ่านคุณสมบัติทันที",{confidence:3,ambition:3}),c("รับงานทดลองที่ไม่เกินขอบเขตความสามารถ","คุณได้ประสบการณ์โดยไม่รับบทบาทวิชาชีพที่ยังไม่มีคุณสมบัติ",{skill:3,experience:3}),c("ทำเพื่อความสุขต่อไป","คุณรักษางานอดิเรกเป็นพื้นที่พักใจ",{h:4,stress:-2},{hobbyAim:"relax"}),c("รอช่วงที่ชีวิตพร้อมกว่า","คุณยังมีสิทธิเปลี่ยนใจในภายหลัง",{patience:3,security:2})]);
add("mx_hobby_together_"+age,age,47,"ความชอบของเรากับชีวิตของอีกคน","คุณอยากทำ {hobby} ในวันว่าง แต่ {partner} ซึ่งมีเส้นทางเป็น{job} มี {burden} และความสนใจของตัวเอง","hobbyTogether",[
c("ชวนลองด้วยกันโดยไม่บังคับ","อีกฝ่ายเลือกได้ว่าจะร่วมแค่ไหนและทั้งคู่ได้คุยเรื่องความชอบ",{partner:4,h:3}),c("ต่างคนต่างทำสิ่งที่ชอบแล้วนัดเจอกัน","ทั้งคู่รักษาพื้นที่ของตัวเองโดยไม่ต้องสนใจเหมือนกัน",{partner:3,selfcontrol:3}),c("ขอให้คนรักทิ้งแผนของตัวเองมาช่วยเรา","อีกฝ่ายรู้สึกว่าความสนใจของตนถูกมองข้าม",{partner:-5,stress:3},{coupleLoop:"ค้าง"}),c("หาเวลาใหม่ให้ทั้งสองฝ่าย","คุณได้ฝึกแบ่งเวลาและรักษาความสนใจของตัวเอง",{problem:4,partner:2})]);
add("mx_partner_intro_"+age,age,48,"ชีวิตอีกด้านของคนรัก","{partner} เล่าว่าตอนนี้เส้นทางของเธอคือ{job} มี {burden} คุณเองมีเส้นทาง {my} ทั้งคู่ไม่จำเป็นต้องใช้ชีวิตเหมือนกัน","partnerIntro",[
c("ถามถึงความฝันและสิ่งที่อีกฝ่ายชอบ","คุณได้รู้จักเธอนอกเหนือจากบทบาทคนรัก",{partner:4,e:3}),c("คุยเรื่องเวลาที่เหมาะกับทั้งคู่","ทั้งคู่ได้ข้อตกลงที่คำนึงถึงชีวิตแต่ละคน",{problem:3,partner:3}),c("คุยเรื่องเงินและแผนอนาคตเมื่ออีกฝ่ายพร้อม","ทั้งคู่ได้เริ่มเข้าใจความคาดหวังด้านชีวิต",{security:3,i:2}),c("รับฟังไว้ก่อนโดยไม่ต้องวางแผนทันที","คุณให้ความสัมพันธ์ค่อยๆ เติบโต",{patience:3,partner:2})]);
for(const [kind,[title,body]] of Object.entries(issues))add("mx_partner_work_"+kind+"_"+age,age,49,title,body+" เส้นทางของคุณคือ {my}","partnerWork",[
c("ฟังและปรับแผนร่วมกัน","ทั้งสองคนมีพื้นที่รักษางานและเวลาส่วนตัว",{partner:4,problem:3}),c("ช่วยเท่าที่อีกฝ่ายต้องการและแบ่งหน้าที่ให้ชัด","อีกฝ่ายได้รับแรงสนับสนุนโดยไม่ถูกควบคุม",{partner:3,responsibility:3}),c("คาดหวังให้อีกฝ่ายปรับทุกอย่างเพื่อเรา","คนรักรู้สึกว่าเส้นทางชีวิตตัวเองไม่สำคัญ",{partner:-6,stress:4},{coupleLoop:"ค้าง"}),c("รักษาแผนของตัวเองและนัดเวลาคุยใหม่","ทั้งคู่มีเวลาคิด แต่ยังต้องรักษาข้อตกลงที่ทำไว้",{selfcontrol:3,patience:2})],{kind});
add("mx_partner_future_"+age,age,50,"ความฝันของคนรักที่เปลี่ยนไป","{partner} ซึ่งมีเส้นทาง{job} กำลังทบทวนว่าจะเปลี่ยนรูปแบบงานหรือใช้ชีวิตแบบอื่น เธออยากฟังความเห็น แต่การตัดสินใจสุดท้ายเป็นของเธอ","partnerFuture",[
c("สนับสนุนให้ลองทางใหม่และคุยผลกระทบร่วมกัน","เธอตัดสินใจลองเปลี่ยนรูปแบบชีวิต ทั้งคู่ต้องปรับแผนร่วมกัน",{partner:4,problem:3}),c("ช่วยเปรียบเทียบทางเลือกโดยไม่กดดัน","เธอยังไม่ตัดสินใจและได้ข้อมูลเพิ่ม",{partner:3,knowledge:2}),c("กดดันให้ทำงานเดิมเพราะเราไม่อยากเปลี่ยนแผน","อีกฝ่ายรู้สึกว่าความฝันของตัวเองไม่มีพื้นที่",{partner:-5,stress:4},{coupleLoop:"ค้าง"}),c("ให้เวลาทบทวนและรักษาเป้าหมายของเราเอง","ทั้งคู่ยังมีพื้นที่เลือกอนาคตของตัวเอง",{selfcontrol:3,patience:3})]);
}
}
return {initial,allowed,after,story,jobs,hobbies:hb,detailCount:details.length};})();
