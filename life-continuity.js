window.CONTINUITY=(()=>{
const roots=window.STORY, episodes=window.EPISODES, all=[...roots,...episodes], by=Object.fromEntries(all.map(e=>[e.id,e]));
function edit(id,patch){if(!by[id])throw Error("unknown "+id);Object.assign(by[id],patch)}
function req(ids,...r){for(const id of ids.split(" "))if(by[id])by[id].requirements=[...(by[id].requirements||[]),...r]}
function choice(id,n,patch){Object.assign(by[id].choices[n],patch)}
edit("kindergarten",{story:"แม่กำลังจะกลับบ้าน เด็กผู้หญิงข้างๆ ชื่อฟ้า ครูเพิ่งแนะนำให้รู้จักกัน เธอร้องไห้เพราะยังไม่คุ้นกับโรงเรียน"});
edit("toy",{story:"เมฆ เด็กข้างบ้านที่ป้าอ้อยพามาเล่นด้วย หยิบตุ๊กตาที่คุณชอบไปเล่น คุณจะทำอย่างไร"});
edit("team",{story:"หลังสมัครเข้าทีมและซ้อมจนได้ลงแข่งขัน ทีมของคุณผ่านมาถึงรอบชิง ครูให้สมาชิกช่วยกันตัดสินใจเรื่องเปลี่ยนตัว ขณะนี้ทีมตามหนึ่งประตู เพื่อนคนหนึ่งยังไม่ได้ลงสนาม"});
req("team","football=ทีม");edit("drawing",{story:"ในคาบศิลปะครูให้ทุกคนลองวาดสัตว์ คุณลองวาดช้าง เพื่อนบอกว่าหน้าตาเหมือนมันฝรั่ง ครูกำลังจะติดภาพหน้าห้อง"});req("secondary_a","@joinedClub");
edit("study_report",{story:"ครูแจกสมุดรายงานผลการเรียน คุณเห็นวิชาที่ทำได้และวิชาที่ต้องฝึกเพิ่ม ผลขึ้นกับความตั้งใจและการเรียนที่ผ่านมา"});
edit("scholar",{story:"ครูประกาศว่าคุณผ่านการพิจารณาทุนการเรียนในเกมจากผลการเรียนและความตั้งใจ แต่เพื่อนอีกคนยังขาดเงินเรียน"});req("scholar","@studyReady");
edit("parentdream",{story:"พ่อชวนคุยเรื่องเรียนต่อและอาชีพที่มั่นคง คุณเองกำลังค้นหาว่าความสนใจและความสามารถที่มีจะพาไปทางไหน"});
edit("crush",{story:"หลังจากเลือกทำความรู้จักมายด์ คุณเริ่มรู้สึกดีกับเธอ แต่เพื่อนอีกคนบอกว่าก็สนใจเธอเหมือนกัน"});req("crush","teenCrush=มายด์");
edit("festival",{story:"เพื่อนชวนไปงานวัด มีเกมปาโป่ง ของกิน และวงดนตรีที่กำลังเล่น คุณอยากใช้เวลายังไง"});
choice("festival",1,{label:"ชวนคนที่สนิทไปด้วย",result:"ได้รู้จักกันนอกห้องเรียน"});choice("festival",2,{label:"ลองฟังดนตรีหรือสมัครร้องเพลงถ้าอยากลอง",result:"คุณได้สนุกกับดนตรีในแบบที่ตัวเองเลือก"});
edit("festival_a",{variants:{0:"เพื่อนยังถือถุงของกินเต็มมือ",1:"คนที่คุณชวนมายืนถือสายไหมอยู่ข้างคุณ",2:"เสียงเพลงยังดังมาจากเวที",3:"เพื่อนส่งรูปงานวัดมาในแชต คุณตอบจากบ้าน"}});
edit("festival_b",{story:"เพื่อนในกลุ่มส่งข้อความว่ากำลังรวมของไปให้เด็กๆ ในชุมชน และถามว่าคุณอยากร่วมไหม"});choice("festival_b",0,{result:"คุณได้คุยกับเพื่อนๆ ระหว่างจัดถุง"});
edit("campus",{story:"ฟ้า เพื่อนสมัยเรียนที่ยังติดต่อกัน ชวนเข้ากลุ่มติวกับนักศึกษาชื่อแพร ซึ่งเพิ่งแนะนำตัวให้คุณรู้จัก"});
edit("pub",{story:"หลังเลือกลองเที่ยวกลางคืน เพื่อนชวนไปร้านเพลง ผู้หญิงชื่อแพรเดินเข้ามาทักและแนะนำตัว เพื่อนอีกคนชวนดื่มหนัก"});req("pub","nightChoice=ลอง");
req("date","@mindBond","@romanceAllowed");req("tempt caught","@partner");edit("tempt",{story:"คนที่เคยรู้จักทักมาชวนพบตามลำพัง ขณะที่คุณกำลังคบมายด์อยู่"});req("tempt caught","@mindPartner");req("love1","@mindPartner");
req("adult_meet","romanceOpen=เปิดใจ","@single");req("early_love","@romanceReady","@single");edit("early_love",{story:"คนที่คุณเลือกทำความรู้จักกำลังคุยกับคุณอย่างจริงจัง ทั้งคู่เริ่มถามถึงความสัมพันธ์และชีวิตในอนาคต"});
req("dating","@romanceReady","@single");req("early_baby","@partner");req("family","@partner");req("marriage wedding","@partner");req("child childtime schoolfee","parent=มีลูก");req("single independent","@single");req("exreturn","@pastRomance");
req("work_people","@employee");req("client_entry","@workActive");req("lead_offer","@employee");req("lead_people","@employee");
req("colleague office_rival","@employee","@knowPloy");req("office_rival2","@employee");req("bossromance bossromance2","@employee","@knowBoss");req("juniorromance junior2","@employee","leadRole=หัวหน้า","@knowMin");
req("clientanger clientreview clientfriend","@workActive","clientRole=ติดต่อ");req("office promotion fired layoff","@employee");req("raise employee oldfriendjob","@employee","leadRole=หัวหน้า");req("bribe","@workActive","leadRole=หัวหน้า");req("success1 failure1","@workActive");
req("study1","@university");req("graduate","@university");req("campusclub","@joinedCampusClub");
req("hobby3","@hobby");req("retirecall","@everWorked");
req("boss_fall","@employee");req("client_surprise","@workActive","clientRole=ติดต่อ");req("failure_cross","@everWorked");req("retire_a","@everWorked");
req("ambition1","@workActive");req("ambition2 ambition3 ambition4","@workActive");req("power1 power2","@workActive");
req("bkkwork localwork regionalwork bkk_local cmjob kkjob skjob hyjob","@workActive");req("workcity","@workActive");req("work_people","@employee");req("longdistance","@partner");
req("child_cross","parent=มีลูก");req("school_pressure","parent=มีลูก");
req("teacherlater","parent=มีลูก");
edit("family_a",{story:"วันนี้คุณมีวันหยุด ไม่มีงานด่วน คุณอยากใช้เวลานี้กับอะไรหรือใคร"});
edit("reunion",{story:"เมฆ เพื่อนบ้านวัยเด็กที่เคยรู้จักกัน กลับมาติดต่อและอยากถามสารทุกข์สุขดิบ รวมถึงพูดถึงเรื่องที่เคยทำให้ไม่เข้าใจกัน"});
edit("failure_cross",{story:"คนที่คุณเคยรู้จักจากการทำงานติดต่อมา เขามีข้อเสนองานที่ต่างจากเส้นทางเดิม และอยากให้คุณลองฟังก่อน"});
edit("early_baby",{story:"หลังใช้เวลาคบกัน คุณกับคนรักเริ่มคุยเรื่องการมีลูก ทั้งรายได้ ความพร้อม และความต้องการของทั้งสองฝ่าย"});
edit("retirecall",{story:"คนที่เคยรู้จักคุณจากการทำงานโทรมาขอคำแนะนำเรื่องการดูแลทีม แม้คุณอาจไม่ได้เคยเป็นหัวหน้าเอง"});

edit("retire",{story:"เมื่อเข้าสู่วัยเกษียณ คุณมีโอกาสจัดเวลาให้สิ่งที่อยากทำมากขึ้น จะสานต่อความสนใจเดิมหรือเริ่มอะไรใหม่ก็ได้"});
edit("oldfriendjob",{story:"ฟ้า เพื่อนที่คุณรู้จักตั้งแต่เด็ก ติดต่อมาว่าหลานของเธอสมัครงานในหน่วยงานที่คุณดูแล"});
edit("family",{story:"คุณกับคนรักกำลังคุยกันเรื่องอนาคตระยะยาว ทั้งคู่มีโอกาสตกลงว่าจะมีลูกหรือใช้ชีวิตคู่แบบไหน"});
edit("work_entry",{story:"จากแผนชีวิตที่ผ่านมา ตอนนี้คุณอยากเริ่มงานหรือปรับรูปแบบงานอย่างไร หากกำลังเรียนวิชาชีพอยู่ก็เลือกเรียนต่อได้",order:8});
req("work_entry","@canWorkEntry");
edit("lead_offer",{story:"หลังทำงานในทีมมาระยะหนึ่ง คุณได้รับข้อเสนอให้ทดลองดูแลทีมเล็กๆ หากรับ จะต้องประสานงานและประเมินผลงานคนอื่น"});
edit("teen_future",{story:"คนที่คุณเลือกทำความรู้จักเริ่มเล่าว่าอาจต้องไปเรียนต่อที่อื่น ทั้งคู่กำลังทบทวนความรู้สึกและแผนชีวิต"});
choice("early_love",0,{set:{relationship:"คบกัน"}});choice("early_love",1,{set:{relationship:"อยู่ด้วยกัน"}});choice("early_love",2,{set:{relationship:"โสด"}});choice("early_love",3,{set:{relationship:"คบกัน"}});
for(const id of ["med1","nurse1","law1","judge1","med2","nurse2","law2","judge2"])req(id,"@professionalStudy");
req("athlete1 athlete2","@athleteIntent");
edit("secret_begin",{story:"คนที่คุณเคยแสดงความสนใจเริ่มชวนคุยเรื่องความรู้สึกเกินเพื่อน ขณะที่คุณมีคนรักอยู่แล้ว"});
edit("new_love",{story:"คนที่คุณเคยแสดงความสนใจอยากคุยเรื่องความสัมพันธ์ให้ชัดเจน ทั้งคู่มีชีวิตและความฝันของตัวเอง"});
// Make old same-age roots occur after the relevant introductions.
edit("primary",{order:-5});edit("movehome",{order:-10});edit("school_interest",{order:-5});edit("workcity",{order:9});edit("early_love",{order:0});edit("lead_offer",{order:-5});
edit("adult_romance",{order:5});edit("adult_meet",{order:-10});edit("adult_meet2",{order:-5});edit("career_select",{order:1});for(const id of ["health_choice","law_choice","creative_choice","business_choice"])edit(id,{order:2});
const initial={childLike:"",schoolLike:"",football:"",music:"",creativePath:"",studyHabit:"",teenLike:"",teenCrush:"",teenBond:"",teenRelationship:"",adultInterest:"",adultBond:"",romanceOpen:"",nightChoice:"",workRole:"",leadRole:"",clientRole:"",knowPloy:"",knowBoss:"",knowMin:"",partnerName:"",pastRomance:"",focus:"",midFocus:"",lateFocus:"",everWorked:"",joinedClub:"",mek:""};
function stateAfter(state,id,n,choice){const old={...state};Object.assign(state,choice.set||{});if(id==="secondary")state.joinedClub=n<3?"ใช่":"";
if(id==="work_entry"&&n===0)state.everWorked="ใช่";
if(id==="lead_again"&&n===0){state.leadRole="หัวหน้า";state.everWorked="ใช่";}
if(id==="lead_again"&&n!==0)state.leadRole="";
if(id==="single_life"&&n===2)state.romanceOpen="เปิดใจ";
if(id==="meet_late"&&n===0){state.relationship="คบกัน";state.partnerName="จูน";state.pastRomance="ใช่";}
if(id==="meet_late"&&n===1)state.flirt="จูน";
if(id==="crush"&&[0,3].includes(n))state.teenBond="มายด์";
if(id==="teen_future"&&n===1){state.relationship="คบกัน";state.partnerName=state.teenBond;state.pastRomance="ใช่";}
if(id==="adult_romance"&&n===2&&old.relationship==="คบกัน"){/* preference is not an automatic breakup */}
if(id==="early_love"&&[0,1,3].includes(n)){state.partnerName=state.adultInterest||state.teenBond||state.flirt||"คนรัก";state.pastRomance="ใช่";}
if(id==="date"&&[0,3].includes(n)){state.partnerName="มายด์";state.pastRomance="ใช่";}
if(id==="new_love"&&n===0){state.partnerName=old.flirt||"คนรัก";state.pastRomance="ใช่";}
if(id==="love_rebuild"&&[0,3].includes(n)){state.partnerName="คนรักใหม่";state.pastRomance="ใช่";}
if(id==="emptylove"&&n===0){state.partnerName="คนรักใหม่";state.pastRomance="ใช่";}
if(["work","workmentor"].includes(id))state.everWorked="ใช่";
if(id==="stayhome"){state.workRole=n===0?"พนักงาน":n===3?"อิสระ":"พัก";if(n===0||n===3)state.everWorked="ใช่";}
if(id==="work_entry"&&n<2)state.everWorked="ใช่";
if(id==="work_entry"&&n===2){state.mode="เรียนต่อ";state.workRole="ฝึกเรียน";}
if(id==="switch1"||id==="career_reset"){if(n!==0||id==="career_reset"){state.workRole=state.mode==="งานประจำ"?"พนักงาน":state.mode==="ธุรกิจ"||state.mode==="อิสระ"?"อิสระ":"พัก";state.leadRole="";state.knowMin="";state.knowBoss="";state.knowPloy="";}}
if(old.mode!==state.mode&&state.mode){if(state.mode==="งานประจำ"){state.workRole="พนักงาน";state.everWorked="ใช่"}else if(["ธุรกิจ","อิสระ","งานประจำควบธุรกิจ"].includes(state.mode)){state.workRole="อิสระ";state.everWorked="ใช่"}else if(["พึ่งครอบครัว","พักที่บ้าน","เกี่ยวข้องอาชญากรรม","ฟื้นตัว","ดูแลครอบครัว","เรียนต่อ"].includes(state.mode))state.workRole=state.mode==="เรียนต่อ"?"ฝึกเรียน":"พัก";if(!["งานประจำ","งานประจำควบธุรกิจ"].includes(state.mode)){state.leadRole="";state.knowMin="";}}
if(["โสด","แยกทาง"].includes(state.relationship)){if(old.partnerName)state.pastRomance="ใช่";state.partnerName="";}
return state}
function test(r,state,s){const a=s.answers,work=["งานประจำ","ธุรกิจ","อิสระ","งานประจำควบธุรกิจ"].includes(state.mode);switch(r){
case "@musicPerform":return ["ฝึก","ร้อง"].includes(state.music);
case "@joinedClub":return a.secondary>=0&&a.secondary<3;
case "@joinedCampusClub":return a.campus===3;
case "@studyReady":return s.stats.knowledge>=20&&s.stats.discipline>=48;
case "@mindBond":return state.teenBond==="มายด์";
case "@mindPartner":return state.partnerName==="มายด์"||(!state.partnerName&&[0,3].includes(a.date));
case "@romanceAllowed":return state.romanceOpen!=="ไม่"&&state.romanceOpen!=="เปิดใจ";
case "@romanceReady":return (state.romanceOpen==="เปิดใจ"&&!!state.adultInterest&&state.adultBond==="รู้จัก")||(state.romanceOpen==="เดิม"&&!!state.teenBond);
case "@pastRomance":return !!state.pastRomance;
case "@workActive":return work;
case "@employee":return ["งานประจำ","งานประจำควบธุรกิจ"].includes(state.mode)&&state.workRole==="พนักงาน";
case "@canWorkEntry":return !["เกี่ยวข้องอาชญากรรม","ฟื้นตัว","พึ่งครอบครัว"].includes(state.mode);
case "@university":return [0,1].includes(a.route);
case "@professionalStudy":return [0,1].includes(a.route);
case "@athleteIntent":return a.creative_choice===1;
case "@everWorked":return !!state.everWorked;
default:return undefined;}}
return {initial,stateAfter,test};})();
