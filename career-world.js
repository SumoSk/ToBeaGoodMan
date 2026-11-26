window.CAREER_WORLD=(()=>{
const catalog=window.CAREER_CATALOG, by=Object.fromEntries(catalog.map(x=>[x.id,x]));
const groups=["สุขภาพ","เทคโนโลยี","ฝีมือ","สร้างสรรค์","ยุติธรรม"];const extras=[...new Set((window.CAREER_EXTRA||[]).map(x=>x.group))];const rankNames={doctor:["แพทย์ทั่วไป","แพทย์อาวุโส","หัวหน้าทีมแพทย์"],nurse:["พยาบาลเริ่มงาน","พยาบาลอาวุโส","หัวหน้าทีมพยาบาล"],pharm:["เภสัชกรเริ่มงาน","เภสัชกรอาวุโส","หัวหน้าทีมเภสัชกรรม"],dent:["ทันตแพทย์เริ่มงาน","ทันตแพทย์อาวุโส","หัวหน้าทีมทันตกรรม"],engineer:["วิศวกรเริ่มงาน","วิศวกรอาวุโส","หัวหน้าทีมวิศวกรรม"],software:["โปรแกรมเมอร์ระดับต้น","นักพัฒนาอาวุโส","หัวหน้าทีมพัฒนา"],teacher:["ครูเริ่มงาน","ครูผู้มีประสบการณ์","ผู้ประสานงานด้านการสอน"],chef:["ผู้เริ่มงานครัว","เชฟอาวุโส","หัวหน้าครัว"],police:["ตำรวจเริ่มงาน","ตำรวจมีประสบการณ์","ผู้ประสานทีมตามหน้าที่"],judge:["ผู้พิพากษาเริ่มงาน","ผู้พิพากษามีประสบการณ์","ผู้พิพากษาอาวุโส"],pilot:["นักบินเริ่มงาน","นักบินมีประสบการณ์","นักบินอาวุโส"],singer:["นักร้องหน้าใหม่","นักร้องอาชีพมีผลงาน","ศิลปินอาวุโส"],actor_pro:["นักแสดงหน้าใหม่","นักแสดงมีผลงาน","นักแสดงนำตามผลงาน"],footballer:["นักฟุตบอลหน้าใหม่","นักฟุตบอลมีประสบการณ์","ผู้เล่นอาวุโส"],restaurant:["เจ้าของร้านเริ่มต้น","เจ้าของร้านที่มั่นคง","ผู้บริหารกิจการร้านอาหาร"],clinic:["ผู้บริหารคลินิกเริ่มต้น","ผู้จัดการกิจการมีประสบการณ์","ผู้บริหารกิจการอาวุโส"]};function rankName(id,rank){const x=by[id];return (rankNames[id]||[x?.name+"เริ่มงาน",x?.name+"มีประสบการณ์",x?.name+"ระดับอาวุโส"])[Math.max(0,Math.min(2,rank||0))]}
const c=(label,result,delta,set)=>({label,result,delta,set});
const add=(id,age,order,title,story,gate,choices,profession="")=>window.STORY.push({id,age,order,title,story,cw:gate,cwProfession:profession,custom:true,choices});
const initial={profession:"",careerPlan:"",careerPhase:"",careerMenu:"",trainingAge:-1,foundation:false,careerCase:"",careerOutcome:"",careerCaseAge:-1,careerBalance:"",careerFriend:"",careerHistory:[],careerStudy:"",careerRank:0};
const working=state=>["งานประจำ","อิสระ","ธุรกิจ","งานประจำควบธุรกิจ"].includes(state.mode);
const oldGoals={แพทย์:"doctor",พยาบาล:"nurse",ทนายความ:"lawyer",ตำรวจ:"police",ผู้พิพากษา:"judge"};
const mapped={med1:"doctor",med2:"doctor",nurse1:"nurse",nurse2:"nurse",law1:"lawyer",law2:"lawyer",police1:"police",police2:"police",judge1:"judge",judge2:"judge"};
const trainingOld=new Set(["med1","nurse1","judge1"]);
function qualified(x,state,s){const a=s.answers;const science=a.studytrack===0||state.foundation;
if(x.req==="science")return science&&s.stats.knowledge>=x.level&&s.stats.discipline>=45;
if(x.req==="study"||x.req==="law")return s.stats.knowledge>=x.level&&s.stats.discipline>=45;
if(x.req==="fitness")return s.stats.physical>=55&&s.stats.discipline>=50&&s.stats.knowledge>=x.level;
if(x.req==="portfolio")return Math.max(s.stats.creative,s.stats.skill)>=x.level;
return s.stats.skill>=x.level}
function last(s,prefix){return s.history.findLast(x=>x.id.startsWith(prefix))}
function allowed(e,state,s){const x=by[e.cwProfession],age=e.age;
if(mapped[e.id])return trainingOld.has(e.id)?state.careerPlan===mapped[e.id]&&state.careerPhase==="training":state.profession===mapped[e.id]&&working(state);
if(["stayhome","work_entry","switch1","career_reset"].includes(e.id)||e.flex==="jobshift"){if(state.careerPhase==="training"||state.careerPhase==="foundation")return false;if(state.profession&&working(state)&&["stayhome","work_entry"].includes(e.id))return false;}
if(["teacher1","tech1","trade1","service1"].includes(e.id)&&state.profession)return false;
if(!e.cw)return true;
switch(e.cw){
case "explore":return !state.careerPlan&&!state.careerMenu&&!(state.careerPhase==="training"||state.careerPhase==="foundation")&&state.mode!=="เกี่ยวข้องอาชญากรรม"&&state.mode!=="ฟื้นตัว";
case "group":return state.careerMenu==="open";
case "extraPage":return state.careerMenu==="extra";
case "extraGroups":return state.careerMenu===e.cwProfession;
case "rank":{const r=state.careerRank||0;return state.profession===x.id&&working(state)&&r<2&&age>=(state.professionSince??age)+[3,7][r]&&s.stats.career>=[20,45][r]&&s.stats.skill>=[25,50][r]&&(!last(s,"cw_rank_"+x.id+"_")||age-last(s,"cw_rank_"+x.id+"_").age>=3)}
case "pick":return state.careerMenu===e.cwProfession;
case "bridge":return state.careerPlan===x.id&&x.req==="science"&&s.answers.studytrack!==0&&!state.foundation&&!["training","active"].includes(state.careerPhase);
case "train":return state.careerPlan===x.id&&["","waiting","foundation"].includes(state.careerPhase)&&(x.req!=="science"||s.answers.studytrack===0||state.foundation)&&(state.careerPhase!=="foundation"||age>state.trainingAge);
case "entry":return state.careerPlan===x.id&&state.careerPhase==="training"&&age>=state.trainingAge+x.years;
case "case":return state.profession===x.id&&working(state)&&!state.careerCase&&(!last(s,"cw_case_"+x.id+"_")||age-last(s,"cw_case_"+x.id+"_").age>=5);
case "follow":return state.careerCase===x.id&&age>=state.careerCaseAge&&(!last(s,"cw_follow_"+x.id+"_")||last(s,"cw_follow_"+x.id+"_").age<age);
case "home":return !!state.careerBalance&&["คบกัน","อยู่ด้วยกัน"].includes(state.relationship)&&(!last(s,"cw_home_")||last(s,"cw_home_").age<age);
case "friend":return !!state.careerFriend&&(!last(s,"cw_friend_")||last(s,"cw_friend_").age<age);
case "family":return !!state.careerBalance&&state.parent==="มีลูก"&&(!last(s,"cw_family_")||last(s,"cw_family_").age<age);
case "money":return state.careerPhase==="training"&&age>state.trainingAge&&age%2===0;
default:return false}}
function choices(e,state,s){if(e.cw==="entry"&&!qualified(by[e.cwProfession],state,s))return e.choices.map((v,n)=>n<2?{...v,label:n===0?"ทบทวนวิชาพื้นฐานที่ยังขาด":"ฝึกทักษะเพิ่มเติมก่อนสมัคร",result:"คุณยังไม่ผ่านคุณสมบัติจำลองของอาชีพนี้ จึงเตรียมตัวต่อโดยยังไม่ได้เริ่มงาน",delta:n===0?{knowledge:5,discipline:3}:{skill:5,creative:3,physical:2},set:{}}:v);return e.choices}
function after(state,old,e,n,choice,item){const id=e.id,age=item.age;
if(["health_choice","law_choice"].includes(id)&&oldGoals[state.goal]){state.careerPlan=oldGoals[state.goal];state.careerPhase="waiting"}
if(e.cw==="bridge"&&n===0){state.trainingAge=age;state.careerPhase="foundation";state.foundation=true}
if(e.cw==="train"&&n<2){state.trainingAge=age;state.careerPhase="training"}
if(e.cw==="entry"&&n<2&&choice.set?.profession){state.careerPlan="";state.careerPhase="active";state.careerRank=0;state.careerHistory.push({name:by[state.profession].name,age});}
if(e.cw==="rank"&&n===0)state.careerRank=Math.min(2,(old.careerRank||0)+1);
if(e.cw==="case"){state.careerCase=e.cwProfession;state.careerCaseAge=age;state.careerOutcome=String(n);if(n===2||id.includes("nurse")&&n===1){state.careerBalance="ค้าง";state.careerFriend="ค้าง"}}
if(e.cw==="follow"&&n===3){state.profession="";state.careerPlan="";state.careerPhase="";state.careerHistory.push({name:"ออกจากงาน",age});}
if(!e.cw&&old.profession&&(old.mode!==state.mode||old.goal!==state.goal)&&(["switch1","career_reset","startup2","hobby3","babycare","crime_offer","crime_pressure","stayhome_a","carework","failure_cross","artist_mid"].includes(id)||e.flex==="jobshift")){state.profession="";if(state.careerPhase==="active")state.careerPhase="";state.careerHistory.push({name:"เปลี่ยนเส้นทางจาก"+by[old.profession].name,age});}
}
function story(e,state){if(e.cw==="rank")return "คุณทำงานเป็น "+rankName(e.cwProfession,state.careerRank)+" มาระยะหนึ่ง มีโอกาสพัฒนาไปสู่ "+rankName(e.cwProfession,(state.careerRank||0)+1)+" ตามคุณสมบัติจำลองของเกม แต่จะมีความรับผิดชอบและภาระเพิ่มขึ้น คุณอยากเดินต่อไหม";if(e.cw==="follow"){const x=by[e.cwProfession],out=x.choices[Number(state.careerOutcome)]?.result;return (out?"ผลจากครั้งก่อน: "+out+"\n\n":"")+e.story}return e.story}
for(let age=18;age<=79;age++){
if(age===19||age%5===4){
add("cw_explore_"+age,age,60,"เส้นทางอาชีพที่ยังเปิดอยู่","คุณอยากสำรวจเส้นทางใหม่หรือรักษาแผนเดิม ไม่จำเป็นต้องเปลี่ยนงานทันที","explore",[
c("สำรวจสุขภาพ วิศวกรรม เทคโนโลยี และงานฝีมือ","คุณเปิดแผนสำรวจอาชีพ",{experience:2},{careerMenu:"open"}),
c("สำรวจงานสร้างสรรค์และยุติธรรม","คุณเปิดแผนสำรวจอาชีพอีกกลุ่ม",{experience:2},{careerMenu:"more"}),
c("เดินต่อในเส้นทางเดิม","คุณให้ความสำคัญกับแผนเดิม",{discipline:2}),
c("ให้เวลากับเรื่องอื่นในชีวิต","คุณเลือกความสุขนอกงาน",{h:3,energy:2}),c("สำรวจอาชีพเพิ่มเติมอีกหลายกลุ่ม","คุณเปิดสารบัญอาชีพใหม่",{experience:2},{careerMenu:"extra"})]);
if(extras.length){const pages=Array.from({length:Math.ceil(extras.length/4)},(_,i)=>extras.slice(i*4,i*4+4));add("cw_extra_page_"+age,age,60.6,"สำรวจกลุ่มอาชีพเพิ่มเติม","เลือกหมวดที่ตรงกับความสนใจของคุณ","extraPage",pages.map((page,i)=>c(page.join(" / "),"คุณเปิดหมวดอาชีพที่สนใจ",{experience:1},{careerMenu:"extraPage"+i})));for(const [i,page] of pages.entries())add("cw_extra_groups_"+i+"_"+age,age,60.7,"เลือกกลุ่มอาชีพ","แต่ละสายมีระยะเวลาเตรียมตัวและคุณสมบัติต่างกัน","extraGroups",page.map(g=>c(g,"คุณสำรวจกลุ่ม"+g,{knowledge:1},{careerMenu:g})),"extraPage"+i);for(const [i,g] of extras.entries())add("cw_extra_pick_"+i+"_"+age,age,62.1,"อาชีพด้าน"+g,"เลือกแผนการฝึกและการศึกษาที่อยากเตรียมตัว ไม่ได้เริ่มงานทันที","pick",catalog.filter(x=>x.group===g).map(x=>c(x.name,"คุณตั้งเป้าหมาย"+x.name,{knowledge:2},{careerPlan:x.id,careerPhase:"waiting",careerMenu:""})),g);}
add("cw_group_"+age,age,61,"เลือกกลุ่มอาชีพ","คุณอยากค้นหาข้อมูลอาชีพในด้านไหน","group",[
c("สุขภาพ","คุณสำรวจสายสุขภาพ",{knowledge:1},{careerMenu:"สุขภาพ"}),
c("วิศวกรรม เทคโนโลยี และบัญชี","คุณสำรวจสายเทคโนโลยี",{knowledge:1},{careerMenu:"เทคโนโลยี"}),
c("อาหาร เกษตร งานช่าง และขนส่ง","คุณสำรวจอาชีพฝีมือ",{experience:1},{careerMenu:"ฝีมือ"}),
c("ศิลปะ การศึกษา และเกม","คุณสำรวจอาชีพสร้างสรรค์",{creative:1},{careerMenu:"สร้างสรรค์"})]);
add("cw_justice_"+age,age,60.5,"เลือกอาชีพด้านยุติธรรมและงานสาธารณะ","แต่ละอาชีพมีคุณสมบัติและความรับผิดชอบต่างกัน","pick",catalog.filter(x=>x.group==="ยุติธรรม").map(x=>c(x.name,"คุณตั้งเป้าหมาย"+x.name+" ยังไม่ใช่การได้งาน",{knowledge:2},{careerPlan:x.id,careerPhase:"waiting",careerMenu:""})),"more");
for(const g of groups.slice(0,4))add("cw_pick_"+groups.indexOf(g)+"_"+age,age,62,"อาชีพด้าน"+g,"คุณต้องการตั้งเป้าหมายอาชีพใด","pick",catalog.filter(x=>x.group===g).map(x=>c(x.name,"คุณตั้งเป้าหมาย"+x.name+" และต้องเตรียมคุณสมบัติก่อน",{knowledge:2},{careerPlan:x.id,careerPhase:"waiting",careerMenu:""})),g);
}
for(const x of catalog){
add("cw_rank_"+x.id+"_"+age,age,67.5,"โอกาสเติบโตในอาชีพ"+x.name,"คุณมีโอกาสพัฒนาบทบาทตามผลงานและคุณสมบัติจำลอง","rank",[
c("รับโอกาสและผ่านการประเมินในเกม","คุณผ่านการประเมินจำลองและรับบทบาทใหม่ รายได้พื้นฐานเพิ่มขึ้นพร้อมภาระ",{career:5,skill:3,stress:3}),c("ฝึกเพิ่มเติมก่อนรับบทบาท","คุณเพิ่มความพร้อมและยังไม่เปลี่ยนระดับ",{skill:4,knowledge:3}),c("รักษาตำแหน่งเดิมเพื่อชีวิตส่วนตัว","คุณเลือกความสมดุลมากกว่าการเลื่อนระดับ",{h:4,energy:3}),c("ทบทวนเส้นทางอาชีพ","คุณยังมีสิทธิสำรวจงานอื่นภายหลัง",{experience:3,confidence:2})],x.id);
if(x.req==="science")add("cw_bridge_"+x.id+"_"+age,age,63,"พื้นฐานวิทย์–คณิตที่ยังขาด","ตามกติกาเกม เส้นทาง"+x.name+" ต้องมีพื้นฐานวิทย์–คณิตก่อน คุณไม่ได้เลือกแผนนี้ตอนมัธยม จึงยังเข้าอาชีพโดยตรงไม่ได้","bridge",[
c("กลับไปปรับพื้นฐานและเรียนเพิ่มเติม","คุณเริ่มสะสมพื้นฐานที่ขาด ใช้เวลาอย่างน้อยหนึ่งปีในเกม",{knowledge:5,discipline:3,m:-800}),
c("พักแผนไว้ก่อน","คุณยังไม่ผ่านเงื่อนไขและยังไม่ได้เริ่มอาชีพ",{patience:2}),
c("เลือกอาชีพที่เหมาะกับพื้นฐานเดิม","คุณยกเลิกแผนและสำรวจได้ใหม่",{experience:3},{careerPlan:"",careerPhase:""}),
c("กลับไปทำสิ่งที่ถนัด","คุณไม่จำเป็นต้องเดินเส้นทางนี้",{selfcontrol:3},{careerPlan:"",careerPhase:""})],x.id);
add("cw_train_"+x.id+"_"+age,age,64,"เตรียมตัวเป็น"+x.name,"การเริ่มอาชีพนี้ในเกมใช้เวลาเตรียมตัวขั้นต่ำ "+x.years+" ปี และต้องผ่านเงื่อนไขด้าน"+({science:"พื้นฐานวิทย์–คณิตและความรู้",study:"ความรู้และวินัย",law:"การเรียนกฎหมายและประสบการณ์จำลอง",fitness:"ความรู้ วินัย และสมรรถภาพ",skill:"ทักษะปฏิบัติ",portfolio:"ผลงานและทักษะ"}[x.req])+" ระยะเวลาเป็นกติกาสมมติ ไม่ใช่เกณฑ์สมัครจริง","train",[
c("เริ่มเรียนหรือฝึกจริงจัง","คุณเข้าสู่ช่วงเตรียมตัว ยังไม่ใช่ผู้ประกอบอาชีพ",{knowledge:4,discipline:3,m:-1000}),
c("ฝึกควบคู่กับการหารายได้ตามความพร้อม","คุณเริ่มสะสมความรู้และฝีมือ",{skill:4,discipline:2}),
c("ยังไม่พร้อม ขอสำรวจต่อ","คุณเลื่อนการเตรียมตัวออกไป",{experience:2},{careerPhase:"waiting"}),
c("ยกเลิกแผนนี้","คุณเก็บบทเรียนไว้และเปิดทางใหม่",{selfcontrol:2},{careerPlan:"",careerPhase:""})],x.id);
add("cw_entry_"+x.id+"_"+age,age,65,"ประเมินความพร้อมเป็น"+x.name,"คุณผ่านระยะเตรียมตัวขั้นต่ำแล้ว แต่ยังต้องผ่านคุณสมบัติจำลองที่เกี่ยวข้องก่อนเริ่มงาน","entry",[
c("ผ่านคุณสมบัติในเกมและเริ่มงานประจำ","คุณเริ่มทำงานในบทบาทใหม่หลังผ่านเงื่อนไขสมมติ",{career:4,skill:4,m:2500},{profession:x.id,mode:"งานประจำ",goal:x.name}),
c("ผ่านคุณสมบัติและเริ่มงานตามรูปแบบที่เหมาะกับอาชีพ","คุณเริ่มบทบาทใหม่อย่างถูกต้องตามกติกาเกม",{skill:4,experience:3,m:1500},{profession:x.id,mode:["police","judge","civil","teacher"].includes(x.id)?"งานประจำ":"อิสระ",goal:x.name}),
c("ฝึกต่อก่อนเริ่มงาน","คุณพัฒนาความรู้และทักษะเพิ่มเติม",{knowledge:4,skill:4,creative:2,discipline:2,physical:2}),
c("เปลี่ยนใจ","คุณยังมีทักษะจากช่วงเรียนและฝึก",{experience:4},{careerPlan:"",careerPhase:""})],x.id);
add("cw_case_"+x.id+"_"+age,age,66,"โจทย์ชีวิตของ"+x.name,x.story,"case",x.choices,x.id);
add("cw_follow_"+x.id+"_"+age,age,67,"ผลจากเรื่องที่เกิดในงาน"+x.name,"คนที่เกี่ยวข้องกลับมาขอคุยเรื่องที่เกิดขึ้นในงาน คุณจะจัดการผลของการตัดสินใจก่อนหน้าอย่างไร","follow",[
c("รับฟังและจัดการข้อเท็จจริง","เรื่องค้างได้รับการทบทวนและคุณได้บทเรียน",{responsibility:4,reliable:3,problem:3},{careerCase:""}),
c("ขอคนที่เกี่ยวข้องช่วยทบทวน","คุณไม่ต้องแบกเรื่องนี้คนเดียว",{network:3,skill:3,stress:-2},{careerCase:""}),
c("เลื่อนการจัดการไปอีก","เรื่องยังค้างและกระทบเวลาชีวิต",{stress:5,reliable:-3,energy:-3},{careerBalance:"ค้าง",careerFriend:"ค้าง"}),
c("ออกจากงานและตั้งหลักใหม่","คุณเก็บประสบการณ์ไว้แต่ไม่ได้ทำงานเดิมต่อ",{career:-3,experience:4,m:-1000},{careerCase:"",mode:"พักที่บ้าน",goal:"หางานใหม่"})],x.id);
}
add("cw_money_"+age,age,68,"ค่าใช้จ่ายระหว่างเตรียมอาชีพ","การเรียนหรือฝึกยังไม่จบ แต่รายจ่ายในชีวิตยังมีอยู่ คุณจะจัดการอย่างไร","money",[
c("หารายได้เสริมตามกำลัง","คุณมีเงินเพิ่มแต่เวลาพักลดลง",{m:1200,energy:-3,skill:2}),c("ขอคำแนะนำเรื่องทุนหรือค่าใช้จ่าย","คุณได้ทางเลือกและวางแผนใหม่",{problem:3,security:2}),c("ใช้เงินสำรอง","คุณมีเวลาเรียนเต็มที่แต่เงินลดลง",{m:-1500,knowledge:3}),c("พักแผนเรียนเพื่อกลับไปทำงาน","คุณเลือกตั้งหลักก่อน",{experience:2},{careerPlan:"",careerPhase:"",mode:"งานประจำ",goal:"งานประจำ"})]);
add("cw_home_"+age,age,69,"คนรักกับเรื่องงานที่ยังค้าง","คนรักสังเกตว่าคุณเหนื่อยหรือมีเรื่องจากงานตามกลับมาถึงบ้าน และถามว่าชีวิตคู่ควรจัดเวลาอย่างไร","home",[
c("เล่าเรื่องตามจริงและตกลงเวลาให้กัน","ทั้งคู่เข้าใจสิ่งที่เกิดและวางแผนร่วมกัน",{partner:4,stress:-3},{careerBalance:""}),c("ขอเวลาพักก่อนแล้วนัดคุย","คุณมีพื้นที่พักแต่ยังรักษาคำพูด",{patience:3,partner:2},{careerBalance:""}),c("หงุดหงิดและไม่ยอมคุย","เรื่องงานกลายเป็นความขัดแย้งในบ้าน",{partner:-5,stress:4},{coupleLoop:"ค้าง"}),c("ทบทวนว่าควรเปลี่ยนงานหรือไม่","คุณเปิดทางสำรวจอนาคตโดยยังไม่ลาออกทันที",{problem:4,confidence:2},{careerBalance:"",careerPlan:""})]);
add("cw_friend_"+age,age,70,"เพื่อนที่ถามว่าไหวไหม","เพื่อนที่รู้ว่าคุณกำลังเจอปัญหาจากงานชวนออกไปคุยกันนอกบรรยากาศการทำงาน","friend",[
c("เล่าความจริงและฟังความเห็น","คุณได้คนรับฟังและมุมมองใหม่",{friend:4,stress:-3},{careerFriend:""}),c("ชวนเพื่อนทำกิจกรรมที่ไม่เกี่ยวกับงาน","คุณได้พักและรักษามิตรภาพ",{h:4,friend:3},{careerFriend:""}),c("ปฏิเสธทุกนัดเพราะไม่อยากเจอใคร","ความเหนื่อยยังอยู่และเพื่อนเริ่มเป็นห่วง",{friend:-2,stress:2}),c("ขอให้เพื่อนช่วยมองหาโอกาสงานอื่น","คุณมีทางเลือกใหม่โดยไม่รับปากเกินจริง",{network:4,problem:2},{careerFriend:""})]);
add("cw_family_"+age,age,71,"วันที่ลูกอยากให้คุณอยู่ด้วย","ลูกมีเรื่องอยากเล่าและสังเกตว่าช่วงนี้คุณวุ่นกับงานมากขึ้น","family",[
c("กันเวลาฟังลูกโดยไม่เอางานมาปน","ลูกได้พื้นที่พูดและคุณได้รู้เรื่องสำคัญ",{child:5,r:3},{careerBalance:""}),c("นัดเวลาที่ทำได้จริงแล้วทำตาม","ลูกเริ่มไว้ใจคำพูดของคุณ",{child:3,reliable:3},{careerBalance:""}),c("เลื่อนนัดโดยไม่อธิบาย","ลูกเริ่มไม่กล้าเล่าสิ่งที่สำคัญ",{child:-5,stress:2}),c("ปรับภาระงานและขอคนช่วย","บ้านและงานมีแผนที่ทำได้มากขึ้น",{problem:4,energy:3},{careerBalance:""})]);
}
return {initial,allowed,choices,after,story,qualified,by,count:catalog.length,rankName};})();
