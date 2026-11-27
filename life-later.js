window.LIFE_LATER=(()=>{
const arcs=[{"key":"project","ages":[28,35,42,49,56,63,70,77,84,91],"cd":7,"title":"โปรเจกต์ใหญ่ที่คนเชื่อมือคุณ","story":"จากผลงานที่ผ่านมา มีผู้ว่าจ้างเสนอโปรเจกต์ใหญ่ที่ต้องบริหารทีมและรับผิดชอบงบประมาณ คุณยังเลือกขนาดงานได้","choices":[{"label":"รับงานและจัดทีมตามความถนัด","result":"คุณได้ค่าตอบแทนจากงานและเริ่มรับผิดชอบทีมใหญ่ขึ้น","delta":{"m":12000,"career":5,"influence":4,"stress":3},"action":"team"},{"label":"แบ่งงานเป็นช่วงและรับเฉพาะส่วนที่ถนัด","result":"งานคืบหน้าโดยไม่ต้องรับภาระทั้งหมด","delta":{"m":6000,"skill":4,"reliable":3},"action":""},{"label":"รับงานทั้งหมดโดยไม่ตรวจทรัพยากร","result":"ทีมเริ่มทำงานไม่ทันและเกิดค่าใช้จ่ายเพิ่ม","delta":{"m":-4000,"stress":8,"reliable":-4},"action":"projectTrouble"},{"label":"ไม่รับเพิ่มเพื่อรักษาคุณภาพงานเดิม","result":"คุณยังมีผลงานที่ดีและเวลาของตัวเอง","delta":{"h":4,"reliable":3},"action":""}]},{"key":"leadteam","ages":[30,36,42,48,54,60,66,72,78,84,90],"cd":6,"title":"ลูกน้องที่เก่งกว่าเราในบางเรื่อง","story":"ทีมที่คุณดูแลมีคนรุ่นใหม่เสนอวิธีทำงานที่อาจดีกว่าเดิม คุณจะใช้ความสามารถของทีมอย่างไร","choices":[{"label":"ให้เขานำเสนอและทดลองในขอบเขตงาน","result":"ทีมได้แนวทางใหม่และคนรุ่นใหม่รู้สึกได้รับการยอมรับ","delta":{"career":4,"skill":3,"respect":4},"action":""},{"label":"มอบหมายให้เป็นหัวหน้าโครงการพร้อมสนับสนุน","result":"ทีมมีผู้นำเพิ่ม คุณมีเวลาทำงานสำคัญ","delta":{"influence":4,"network":4,"energy":3},"action":""},{"label":"กดผลงานเพราะกลัวเสียตำแหน่ง","result":"ลูกน้องเริ่มหางานใหม่และทีมเสียแรงจูงใจ","delta":{"fair":-5,"reliable":-5,"career":-3},"action":""},{"label":"รับฟังแล้วเลือกแนวเดิมตามหลักฐาน","result":"ทีมเห็นว่าการตัดสินใจไม่ได้ขึ้นอยู่กับอาวุโส","delta":{"problem":4,"fair":3},"action":""}]},{"key":"projectfix","ages":[29,36,43,50,57,64,71,78,85,92],"cd":1,"title":"โปรเจกต์ที่ต้องกลับมาแก้","story":"งานใหญ่ที่รับไว้เริ่มติดปัญหากำหนดส่งและงบ ผู้ร่วมทีมขอให้คุณตัดสินใจ","choices":[{"label":"แจ้งผู้ว่าจ้างและปรับแผนตามจริง","result":"ผู้ว่าจ้างได้แผนใหม่และทีมรู้หน้าที่ชัดขึ้น","delta":{"m":-1500,"reliable":4,"problem":4},"action":"clearProject"},{"label":"จ้างผู้ช่วยตามงบ 8,000 บาท","result":"ทีมมีแรงช่วยและงานคืบหน้าโดยไม่ต้องฝืนทุกคน","delta":{"m":-8000,"energy":5,"career":3},"action":"clearProject"},{"label":"ปิดปัญหาไว้จนกว่าจะถึงวันส่ง","result":"ผู้ว่าจ้างไม่ทราบความเสี่ยงและเริ่มเสียความเชื่อมั่น","delta":{"reliable":-6,"stress":6},"action":""},{"label":"ลดขอบเขตงานโดยตกลงกับผู้ว่าจ้าง","result":"ภาระลดลงและทั้งสองฝ่ายมีแผนจบงานที่ทำได้","delta":{"career":-2,"problem":4},"action":"clearProject"}]},{"key":"business","ages":[60,63,66,69,72,75,78,81,84,87,90,93,96],"cd":3,"title":"กิจการใหม่ในวัยที่เราเลือกเอง","story":"คุณเห็นโอกาสทำกิจการจากความรู้และคนที่รู้จัก ไม่จำเป็นต้องหยุดทำงานหรืออยู่บ้านเพียงเพราะอายุมาก","choices":[{"label":"ทดลองกิจการเล็กด้วยทุน 10,000 บาท","result":"คุณเริ่มกิจการทดลองและรับภาระตามกำลัง","delta":{"m":-10000,"assets":5000,"skill":4},"action":"smallBiz"},{"label":"ลงทุนกิจการ 50,000 บาทพร้อมจัดผู้ช่วย","result":"คุณเริ่มกิจการที่มีทีมช่วยและมีภาระเงินลงทุนมากขึ้น","delta":{"m":-50000,"assets":30000,"career":5},"action":"largeBiz"},{"label":"ชวนคนรู้จักวางแผนก่อนลงทุน","result":"คุณได้ข้อมูลตลาดและความเห็นโดยยังไม่ผูกเงิน","delta":{"network":4,"knowledge":4},"action":""},{"label":"ยังไม่สนใจ รักษาชีวิตแบบเดิม","result":"คุณไม่จำเป็นต้องเริ่มกิจการเพื่อพิสูจน์คุณค่าตัวเอง","delta":{"h":4,"selfcontrol":3},"action":""}]},{"key":"bizgrowth","ages":[61,64,67,70,73,76,79,82,85,88,91,94,97],"cd":3,"title":"ร้านที่เริ่มมีลูกค้าประจำ","story":"กิจการของคุณมีลูกค้ากลับมาใช้บริการและมีโอกาสขยายงาน คุณอยากให้กิจการโตแค่ไหน","choices":[{"label":"เพิ่มสินค้าและจ้างคนช่วย 6,000 บาท","result":"ทีมรับงานเพิ่มและกิจการเริ่มสร้างรายได้มากขึ้น","delta":{"m":-6000,"career":4,"network":3},"action":"growBiz"},{"label":"คงขนาดร้านและรักษาคุณภาพ","result":"ลูกค้าประจำยังกลับมา คุณไม่ต้องเพิ่มภาระมาก","delta":{"m":7000,"reliable":4,"h":2},"action":""},{"label":"ขยายทันทีเกินงบโดยไม่คุยกับทีม","result":"ค่าใช้จ่ายเพิ่มเร็วกว่ารายได้และทีมเริ่มเหนื่อย","delta":{"m":-10000,"stress":7},"action":"bizTrouble"},{"label":"ขายกิจการให้คนที่พร้อมดูแล","result":"คุณได้รับเงินจากการส่งต่อกิจการในเกมและไม่ต้องบริหารต่อ","delta":{"m":16000,"career":1},"action":"sellBiz"}]},{"key":"bizfix","ages":[62,65,68,71,74,77,80,83,86,89,92,95,98],"cd":1,"title":"เดือนที่กิจการไม่เป็นตามแผน","story":"ค่าใช้จ่ายกิจการสูงขึ้น ลูกค้าไม่ได้เพิ่มตามที่คิด และคนช่วยงานเริ่มกังวล","choices":[{"label":"ทบทวนรายรับรายจ่ายแล้วลดขนาด","result":"กิจการอยู่ในขนาดที่ดูแลได้มากขึ้น","delta":{"security":4,"problem":4},"action":"clearBiz"},{"label":"ใช้เงินสำรอง 12,000 บาทปรับระบบ","result":"คุณได้ปรับงานและลดปัญหาเดิม แต่ต้องเสียเงินสำรอง","delta":{"m":-12000,"skill":4},"action":"clearBiz"},{"label":"ฝืนลงทุนต่อโดยไม่เปลี่ยนแผน","result":"เงินสำรองลดและปัญหายังไม่ได้แก้","delta":{"m":-6000,"stress":7},"action":""},{"label":"ปิดกิจการและจัดการภาระตามข้อตกลง","result":"คุณจบภาระกิจการและกลับมาเลือกชีวิตใหม่ได้","delta":{"m":-2000,"responsibility":4},"action":"sellBiz"}]},{"key":"workchoice","ages":[60,65,70,75,80,85,90,95],"cd":5,"title":"งานในจังหวะที่เราเลือกเอง","story":"คุณไม่จำเป็นต้องเกษียณตามอายุ อยากทำงานต่อ เปลี่ยนรูปแบบงาน หรือพักก็เป็นสิทธิของคุณ","choices":[{"label":"ทำงานต่อและรักษาเป้าหมายเดิม","result":"คุณเลือกเดินหน้าอาชีพและมีเวลาทบทวนภายหลัง","delta":{"career":3,"confidence":3},"action":"keepWork"},{"label":"ลดภาระและรับงานเป็นบางช่วง","result":"คุณเลือกจังหวะที่มีเวลาส่วนตัวมากขึ้น โดยไม่เสียความรู้เดิม","delta":{"h":3,"energy":4},"action":"partWork"},{"label":"พักจากงานเพื่อใช้ชีวิตตามใจ","result":"คุณหยุดรับงานหลักและเลือกกิจกรรมที่อยากทำ","delta":{"h":5,"stress":-3},"action":"retireNow"},{"label":"เปิดใจสำรวจงานหรือกิจการใหม่","result":"คุณยังมีสิทธิสร้างเส้นทางใหม่โดยไม่ต้องลาออกทันที","delta":{"experience":4,"ambition":3},"action":""}]},{"key":"luxury","ages":[60,64,68,72,76,80,84,88,92,96],"cd":4,"title":"ชีวิตที่อยากให้รางวัลตัวเอง","story":"เงินที่สะสมมาทำให้คุณมีทางเลือกมากขึ้น อยากใช้ชีวิตหรูหรา หรือรักษาทรัพย์สินไว้ก็ได้","choices":[{"label":"ใช้เงิน 40,000 บาทกับทริปและที่พักพิเศษ","result":"คุณได้ประสบการณ์ที่ตั้งใจมานานและมีรายจ่ายตามแผน","delta":{"m":-40000,"h":9,"satisfaction":6},"action":""},{"label":"จัดงานเลี้ยงเพื่อน 12,000 บาท","result":"เพื่อนมีช่วงเวลาร่วมกันโดยไม่ต้องแลกกับผลประโยชน์","delta":{"m":-12000,"friend":6,"social":3},"action":""},{"label":"ซื้อบริการอำนวยความสะดวก 20,000 บาท","result":"กิจวัตรสะดวกขึ้น คุณมีเวลาให้สิ่งที่ชอบ","delta":{"m":-20000,"energy":5,"h":4},"action":""},{"label":"เก็บเงินไว้เลือกความสุขในแบบอื่น","result":"คุณไม่ต้องใช้เงินเพื่อแสดงฐานะ","delta":{"security":4,"selfcontrol":3},"action":""}]},{"key":"community","ages":[60,64,68,72,76,80,84,88,92,96],"cd":4,"title":"สมัครเข้าชมรมชุมชน","story":"คนในพื้นที่ชวนคุณเข้าชมรมที่จัดกิจกรรมและเดินทางร่วมกัน คุณจะมีบทบาทอย่างไร","choices":[{"label":"สมัครและช่วยจัดกิจกรรม","result":"คุณเริ่มรู้จักสมาชิกและมีวงสังคมใหม่","delta":{"friend":4,"network":5,"social":3},"action":"joinClub"},{"label":"สมัครเป็นสมาชิกทั่วไป","result":"คุณได้สังคมโดยไม่ต้องรับภาระจัดงาน","delta":{"friend":3,"h":4},"action":"joinClub"},{"label":"ไปทดลองร่วมกิจกรรมก่อน","result":"คุณได้ดูว่าบรรยากาศตรงกับความสนใจหรือไม่","delta":{"experience":3,"social":2},"action":""},{"label":"ไม่สมัคร ขอใช้เวลาของตัวเอง","result":"คุณยังเลือกมีความสุขนอกชมรมได้","delta":{"h":3,"selfcontrol":2},"action":""}]},{"key":"clubdrama","ages":[61,65,69,73,77,81,85,89,93,97],"cd":4,"title":"การเลือกประธานชมรม","story":"สมาชิกแบ่งเป็นสองกลุ่มเพราะงบกิจกรรมไม่ลงตัว บางคนอยากให้คุณเข้ามาช่วยตัดสินใจ","choices":[{"label":"ขอให้เปิดรายรับรายจ่ายและลงมติตามกติกา","result":"สมาชิกได้เห็นข้อมูลและข้อขัดแย้งลดลง","delta":{"fair":5,"reliable":4},"action":""},{"label":"เสนอตัวเป็นผู้ประสานงาน","result":"คุณได้รับความไว้วางใจให้ช่วยจัดประชุมและวางแผน","delta":{"influence":5,"social":4,"stress":2},"action":"clubLead"},{"label":"เข้าข้างเพื่อนสนิทแม้ข้อมูลไม่ครบ","result":"สมาชิกอีกกลุ่มเริ่มไม่เชื่อใจคุณ","delta":{"friend":-3,"fair":-5,"respect":-4},"action":""},{"label":"ออกจากวงขัดแย้งและร่วมเฉพาะกิจกรรม","result":"คุณรักษาขอบเขตและยังมีเพื่อนในชมรม","delta":{"selfcontrol":4,"h":2},"action":""}]},{"key":"clubtrip","ages":[62,66,70,74,78,82,86,90,94,98],"cd":4,"title":"เที่ยวกับเพื่อนในชมรม","story":"เพื่อนในชมรมกำลังวางแผนเที่ยวต่างจังหวัด มีทั้งคนที่ชอบความสะดวกและคนที่อยากประหยัด","choices":[{"label":"ร่วมทริปตามงบ 5,000 บาท","result":"คุณได้พบเพื่อนและเปลี่ยนบรรยากาศ","delta":{"m":-5000,"friend":5,"h":4},"action":""},{"label":"เลือกช่วยวางแผนโดยไม่จำเป็นต้องเดินทาง","result":"เพื่อนมีข้อมูลและคุณยังรักษาเวลาไว้","delta":{"network":3,"problem":3},"action":""},{"label":"ออกค่าเดินทางบางส่วนให้กลุ่ม 15,000 บาท","result":"เพื่อนได้ร่วมทริปมากขึ้นโดยคุณตกลงงบชัดเจน","delta":{"m":-15000,"e":5,"friend":4},"action":""},{"label":"ไม่ไปและนัดพบกันครั้งหน้า","result":"คุณไม่ต้องเดินทางทุกครั้งเพื่อรักษามิตรภาพ","delta":{"h":3,"selfcontrol":2},"action":""}]},{"key":"scamold","ages":[60,65,70,75,80,85,90,95],"cd":5,"title":"ข้อเสนอที่ดูดีเกินจริง","story":"คนที่เพิ่งรู้จักชวนคุณจ่ายเงินเข้าร่วมโครงการที่รับปากผลตอบแทนสูง แต่ข้อมูลยังไม่ชัดเจน","choices":[{"label":"ไม่จ่ายและขอตรวจข้อมูลจากแหล่งอิสระ","result":"คุณไม่เสียเงินจากข้อเสนอที่ยังตรวจไม่ได้","delta":{"problem":5,"security":3},"action":""},{"label":"ปรึกษาคนที่ไว้ใจและเว้นการติดต่อ","result":"คุณได้มุมมองเพิ่มและไม่ต้องรีบตัดสินใจ","delta":{"r":3,"knowledge":3},"action":""},{"label":"จ่ายเงิน 20,000 บาทเพราะเชื่อคำพูด","result":"เงินในเกมหายไปและผู้เสนอไม่ตอบกลับตามที่รับปาก","delta":{"m":-20000,"stress":8,"security":-5},"action":"scamLoss"},{"label":"ปฏิเสธแล้วกลับไปทำสิ่งที่ตั้งใจ","result":"คุณรักษาเงินและเวลาของตัวเอง","delta":{"selfcontrol":4,"h":2},"action":""}]},{"key":"scamfollow","ages":[61,66,71,76,81,86,91,96],"cd":1,"title":"หลังรู้ว่าเสียเงินให้มิจฉาชีพ","story":"คุณพบว่าข้อเสนอเดิมไม่เป็นไปตามคำพูด ต้องจัดการความเสียหายและความรู้สึกของตัวเอง","choices":[{"label":"รวบรวมข้อมูลและขอความช่วยเหลือตามช่องทางที่เหมาะสม","result":"คุณเริ่มจัดการเหตุและลดโอกาสเสียเงินเพิ่ม แต่ยังไม่รับประกันได้เงินคืน","delta":{"responsibility":4,"problem":4},"action":"clearScam"},{"label":"บอกคนที่ไว้ใจและจัดงบใหม่","result":"คุณไม่ต้องรับความเครียดคนเดียวและเห็นแผนเงินที่เหลือ","delta":{"r":4,"stress":-4},"action":"clearScam"},{"label":"จ่ายเงินเพิ่ม 5,000 บาทให้คนที่รับปากว่าจะช่วยเอาเงินคืน","result":"คุณเสียเงินเพิ่มและยังไม่ได้รับเงินเดิมคืน","delta":{"m":-5000,"stress":5},"action":""},{"label":"ยอมรับความเสียหายแล้วหยุดติดต่อ","result":"คุณรักษาเงินที่เหลือและให้เวลาตัวเองฟื้นใจ","delta":{"selfcontrol":5,"h":2},"action":"clearScam"}]},{"key":"childwedding","ages":[40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97],"cd":2,"title":"ลูกอยากแต่งงาน","story":"{child} ซึ่งโตเป็นผู้ใหญ่แล้วมาเล่าว่ากำลังคิดแต่งงานกับคนรัก คุณยังไม่รู้ว่าทั้งคู่จะเลือกแบบไหน","choices":[{"label":"รับฟังและสนับสนุนการตัดสินใจของลูก","result":"ลูกได้พูดเรื่องอนาคตโดยไม่ต้องกลัวถูกบังคับ","delta":{"child":5,"r":3},"action":"childMarry"},{"label":"ช่วยจัดงานด้วยงบ 30,000 บาทตามที่ตกลง","result":"ครอบครัวได้ร่วมงานแต่งในเกมโดยมีขอบเขตค่าใช้จ่าย","delta":{"m":-30000,"child":5,"h":4},"action":"childMarry"},{"label":"พยายามบังคับให้เลิกเพราะไม่ชอบคนรักของลูก","result":"ลูกเสียความรู้สึกและเริ่มไม่อยากเล่าเรื่องความสัมพันธ์","delta":{"child":-6,"stress":4},"action":"childConflict"},{"label":"บอกว่ายังไม่พร้อมแสดงความเห็น แต่เคารพสิทธิของลูก","result":"ลูกมีพื้นที่ตัดสินใจเองโดยไม่ต้องรอคำอนุญาต","delta":{"child":3,"selfcontrol":3},"action":"childMarry"}]},{"key":"grandchild","ages":[45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99],"cd":3,"title":"สมาชิกใหม่ในครอบครัวของลูก","story":"{child} แจ้งว่าครอบครัวของเขาได้เข้าสู่บทบาทผู้ปกครองในเกม คุณอยากมีส่วนช่วยแค่ไหน","choices":[{"label":"ช่วยตามเวลาที่ตกลงโดยไม่ตัดสินใจแทนพ่อแม่เด็ก","result":"คุณได้ใช้เวลากับหลานและรักษาขอบเขตครอบครัว","delta":{"child":4,"r":5,"h":3},"action":"grandAdd"},{"label":"ให้เงินช่วยค่าใช้จ่าย 10,000 บาท","result":"ครอบครัวลูกได้รับความช่วยเหลือโดยยังดูแลชีวิตของตนเอง","delta":{"m":-10000,"child":4,"e":3},"action":"grandAdd"},{"label":"เข้าไปกำหนดทุกเรื่องเพราะคิดว่าตนมีประสบการณ์กว่า","result":"ลูกเริ่มไม่สบายใจกับการถูกแทรกแซง แต่คุณมีหลานแล้ว","delta":{"child":-5,"stress":4},"action":"grandConflict"},{"label":"ยินดีจากระยะที่สบายใจ ไม่รับหน้าที่เลี้ยง","result":"คุณเคารพชีวิตของลูกและรักษาเวลาของตัวเอง","delta":{"child":3,"selfcontrol":4},"action":"grandAdd"}]},{"key":"childdebt","ages":[45,50,55,60,65,70,75,80,85,90,95],"cd":5,"title":"ลูกมาขอความช่วยเหลือเรื่องเงิน","story":"{child} ซึ่งมีชีวิตของตัวเองแล้วกำลังมีภาระค่าใช้จ่ายที่ไม่เป็นตามแผน เขามาขอให้คุณช่วย","choices":[{"label":"ช่วย 20,000 บาทโดยตกลงว่าเป็นเงินช่วยครั้งนี้","result":"ลูกได้ลดภาระโดยคุณยังรักษาขอบเขตทรัพย์สิน","delta":{"m":-20000,"child":4,"e":3},"action":""},{"label":"ช่วยทบทวนงบและทางเลือกโดยไม่จ่ายเงิน","result":"ลูกมีข้อมูลสำหรับจัดการภาระของตนเอง","delta":{"child":3,"problem":4},"action":""},{"label":"รับภาระทั้งหมดทั้งที่เกินกำลัง","result":"เงินสำรองลดลงและลูกอาจคาดหวังความช่วยเหลือครั้งต่อไป","delta":{"m":-35000,"stress":6,"security":-4},"action":"childConflict"},{"label":"ปฏิเสธด้วยเหตุผลและยังเปิดใจรับฟัง","result":"ลูกอาจผิดหวังแต่เข้าใจขอบเขตที่คุณวางไว้","delta":{"selfcontrol":4,"child":1},"action":""}]},{"key":"childrepair","ages":[41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98],"cd":1,"title":"เรื่องของลูกที่ยังไม่จบ","story":"ความขัดแย้งในครอบครัวครั้งก่อนยังมีผลกับความสัมพันธ์ ลูกอยากให้คุณฟังมุมของเขา","choices":[{"label":"ฟังและขอโทษในส่วนที่ทำให้เสียใจ","result":"ลูกเริ่มกล้าคุยมากขึ้น แม้ความไว้ใจยังต้องใช้เวลา","delta":{"child":5,"responsibility":3},"action":"clearChild"},{"label":"หาคนกลางที่ทุกฝ่ายยินดีคุยด้วย","result":"ครอบครัวเริ่มจัดการเรื่องที่ค้างโดยไม่ต้องมีฝ่ายชนะ","delta":{"fair":4,"r":3},"action":"clearChild"},{"label":"ยืนยันว่าลูกต้องทำตามเรา","result":"ความขัดแย้งยังอยู่และลูกเว้นระยะมากขึ้น","delta":{"child":-6,"stress":5},"action":""},{"label":"ตกลงเว้นระยะและไม่บังคับกัน","result":"ทั้งคู่มีพื้นที่ส่วนตัวและไม่ต้องฝืนใกล้ชิด","delta":{"selfcontrol":4,"stress":-2},"action":"clearChild"}]},{"key":"wealthheirs","ages":[65,70,75,80,85,90,95],"cd":5,"title":"ทรัพย์สินที่ทำให้คนในบ้านคิดต่าง","story":"เมื่อลูกที่โตแล้วรู้ว่าคุณมีทรัพย์สินจำนวนมาก บางคนแวะมาหาบ่อยขึ้นและพูดถึงเรื่องมรดก คุณยังมีสิทธิเลือกใช้ทรัพย์สินของตนเอง","choices":[{"label":"จัดแผนทรัพย์สินโดยปรึกษาผู้เชี่ยวชาญที่เป็นกลาง","result":"ความต้องการของคุณถูกบันทึกอย่างชัดเจนโดยไม่ต้องให้สัญญากับใครทันที","delta":{"security":5,"fair":4},"action":"estatePlan"},{"label":"คุยกับลูกว่าความสัมพันธ์ไม่ควรขึ้นกับทรัพย์สิน","result":"ลูกได้ยินขอบเขตของคุณอย่างชัดเจน","delta":{"child":4,"i":3},"action":""},{"label":"สัญญาจะแบ่งเงินให้คนที่เอาใจมากที่สุด","result":"คนในบ้านเริ่มแข่งขันกันและความขัดแย้งเพิ่มขึ้น","delta":{"fair":-6,"child":-5,"stress":6},"action":"heirConflict"},{"label":"ยังไม่คุยเรื่องมรดกและใช้เงินตามแผนของตัวเอง","result":"คุณรักษาสิทธิและยังไม่ผูกพันกับข้อเสนอใด","delta":{"selfcontrol":4,"security":3},"action":""}]},{"key":"heirrepair","ages":[66,71,76,81,86,91,96],"cd":1,"title":"พี่น้องที่ทะเลาะเรื่องทรัพย์สิน","story":"เรื่องการแบ่งทรัพย์สินเริ่มทำให้ลูกหลายคนไม่คุยกันตามปกติ คุณไม่ต้องยกทรัพย์สินทั้งหมดเพื่อให้เรื่องจบ","choices":[{"label":"ขอให้ทุกคนหยุดกดดันและหารือกับคนกลาง","result":"ครอบครัวเริ่มแยกเรื่องเงินออกจากความสัมพันธ์","delta":{"fair":5,"child":3},"action":"clearHeir"},{"label":"ชี้แจงแผนของตนโดยไม่สัญญาให้ใครเป็นพิเศษ","result":"ลูกทราบว่าทรัพย์สินยังเป็นสิทธิของคุณ","delta":{"i":4,"security":4},"action":"clearHeir"},{"label":"เปลี่ยนคำสัญญาตามคนที่มาขอแต่ละวัน","result":"ลูกยิ่งไม่ไว้ใจกันและเรื่องยังค้าง","delta":{"child":-5,"stress":6},"action":""},{"label":"ขอพักการหารือจนกว่าทุกฝ่ายจะพร้อม","result":"แรงกดดันลดลงและคุณรักษาสิทธิเลือกไว้","delta":{"selfcontrol":4,"stress":-3},"action":"clearHeir"}]},{"key":"carepaid","ages":[75,80,85,90,95],"cd":5,"title":"บริการดูแลในบ้าน","story":"คุณอยากให้ชีวิตประจำวันสะดวกขึ้นและไม่ต้องพึ่งลูกทุกเรื่อง การจ้างคนช่วยเป็นทางเลือกที่คุณเลือกเองได้","choices":[{"label":"จ้างผู้ช่วยบางเวลา 18,000 บาท","result":"คุณมีคนช่วยกิจวัตรบางส่วนและยังมีพื้นที่ส่วนตัว","delta":{"m":-18000,"energy":6,"h":4},"action":"paidCare"},{"label":"เลือกบริการเต็มเวลาตามงบ 45,000 บาท","result":"คุณมีคนช่วยดูแลต่อเนื่องโดยยังมีสิทธิเลือกขอบเขตงาน","delta":{"m":-45000,"energy":8,"security":2},"action":"fullCare"},{"label":"ขอข้อมูลบริการก่อน ยังไม่จ้าง","result":"คุณได้เปรียบเทียบทางเลือกและตรวจงบก่อนผูกภาระ","delta":{"knowledge":3,"problem":4},"action":""},{"label":"ดูแลตัวเองตามกำลังและขอความช่วยเหลือเมื่อจำเป็น","result":"คุณรักษาความเป็นอิสระโดยไม่ปิดกั้นความช่วยเหลือ","delta":{"selfcontrol":3,"h":3},"action":""}]},{"key":"nocare","ages":[80,83,86,89,92,95,98],"cd":3,"title":"วันที่อยากมีคนอยู่ข้างๆ","story":"ช่วงนี้คุณเหนื่อยกว่าปกติและอยากมีคนช่วยจัดการเรื่องจำเป็น แต่คนใกล้ตัวอาจไม่ว่าง คุณมีสิทธิขอความช่วยเหลือ","choices":[{"label":"ติดต่อคนที่ไว้ใจและคุยเรื่องที่ต้องการจริงๆ","result":"คุณเริ่มได้รับแรงสนับสนุนโดยไม่ต้องคาดหวังให้ใครเดาใจ","delta":{"r":4,"stress":-3},"action":""},{"label":"ขอความช่วยเหลือจากชุมชนหรือบริการที่เหมาะสม","result":"คุณเห็นทางเลือกที่ไม่ต้องพึ่งครอบครัวเพียงอย่างเดียว","delta":{"network":4,"security":3},"action":""},{"label":"เก็บความรู้สึกไว้และฝืนทำทุกอย่าง","result":"ความเหนื่อยสะสมและความรู้สึกโดดเดี่ยวเพิ่มขึ้น","delta":{"energy":-6,"h":-4,"stress":5},"action":""},{"label":"จัดกิจวัตรใหม่ตามกำลังและเลือกสิ่งที่อยากทำ","result":"คุณรักษาพลังสำหรับเรื่องสำคัญในชีวิต","delta":{"physical":2,"problem":4},"action":""}]},{"key":"healthcare","ages":[80,82,84,86,88,90,92,94,96,98],"cd":2,"title":"สุขภาพที่ต้องติดตามต่อเนื่อง","story":"สุขภาพช่วงนี้ต้องการการติดตามและจัดการกิจวัตรมากขึ้น คุณยังสามารถเลือกใช้ชีวิตนอกเรื่องการรักษาได้","choices":[{"label":"นัดประเมินและทำตามแผนที่เหมาะสมในเกม","result":"คุณได้รับการติดตามและสุขภาพในเกมมีแนวโน้มดีขึ้น","delta":{"physical":6,"responsibility":3,"stress":-3},"action":""},{"label":"จ่าย 8,000 บาทเพื่อจัดบริการและการเดินทางที่สะดวกขึ้น","result":"ภาระการเดินทางลดลงโดยไม่รับประกันผลการรักษา","delta":{"m":-8000,"energy":5,"physical":3},"action":""},{"label":"เลื่อนการติดตามแม้อาการรบกวนชีวิต","result":"ปัญหายังไม่ได้รับการประเมินและสุขภาพในเกมลดลง","delta":{"physical":-6,"stress":5},"action":""},{"label":"ขอคนช่วยจัดนัดพร้อมรักษากิจกรรมที่ชอบ","result":"คุณได้แรงสนับสนุนและยังมีเวลาทำสิ่งที่มีความหมาย","delta":{"r":4,"h":4,"physical":2},"action":""}]},{"key":"careconflict","ages":[81,86,91,96],"cd":5,"title":"คนดูแลกับความต้องการที่ไม่ตรงกัน","story":"ผู้ช่วยที่คุณจ้างอยากปรับตารางและขอบเขตงาน คุณมีสิทธิเลือกบริการ แต่เขาก็มีเวลาชีวิตและสิทธิของตน","choices":[{"label":"ทบทวนข้อตกลงและจ่ายตามงานที่ตกลง","result":"ทั้งสองฝ่ายได้ขอบเขตและตารางที่ชัดเจน","delta":{"fair":4,"reliable":3},"action":""},{"label":"หาผู้ช่วยเพิ่มตามงบ 12,000 บาท","result":"ภาระกระจายและคุณมีบริการต่อเนื่อง","delta":{"m":-12000,"energy":5},"action":""},{"label":"เรียกร้องให้ผู้ช่วยอยู่ตลอดโดยไม่ตกลงค่าตอบแทน","result":"ผู้ช่วยไม่พอใจและอาจยุติงาน","delta":{"fair":-5,"stress":4},"action":"loseCare"},{"label":"เปลี่ยนผู้ให้บริการตามข้อตกลงเดิม","result":"คุณรักษาสิทธิของทั้งสองฝ่ายและหาแผนใหม่ได้","delta":{"problem":3,"responsibility":3},"action":"loseCare"}]},{"key":"travelbig","ages":[60,63,66,69,72,75,78,81,84,87,90,93,96],"cd":3,"title":"เดินทางไปเมืองที่อยากเห็น","story":"คุณมีโอกาสเลือกทริปไปต่างจังหวัดหรือเมืองอื่น ไม่จำเป็นต้องใช้ชีวิตอยู่ที่เดิมตามอายุ","choices":[{"label":"เลือกทริปตามกำลังและงบ 6,000 บาท","result":"คุณได้เปลี่ยนบรรยากาศและมีความทรงจำใหม่","delta":{"m":-6000,"h":6,"experience":4},"action":""},{"label":"ชวนเพื่อนเดินทางร่วมกันตามงบ 8,000 บาท","result":"คุณได้ใช้เวลากับเพื่อนโดยไม่ต้องรีบทำทุกกิจกรรม","delta":{"m":-8000,"friend":5,"h":4},"action":""},{"label":"เลือกทริปสะดวกสบาย 35,000 บาท","result":"คุณได้รับความสะดวกตามที่เลือกและมีรายจ่ายสูงขึ้น","delta":{"m":-35000,"h":8,"energy":3},"action":""},{"label":"เลื่อนทริปไปก่อนและเที่ยวใกล้บ้าน","result":"คุณยังสนุกกับวันว่างได้โดยไม่ต้องเดินทางไกล","delta":{"h":4,"energy":3},"action":""}]}];
arcs.push(...[{"key":"childsuccess","ages":[45,51,57,63,69,75,81,87,93,99],"cd":6,"title":"วันที่ลูกอยากเล่าเรื่องดีๆ","story":"{child} โทรมาบอกว่ามีข่าวดีเกี่ยวกับงานหรือเป้าหมายที่พยายามทำมานาน เขาอยากแบ่งปันความสำเร็จนี้กับคุณ","choices":[{"label":"ชื่นชมความพยายามและถามว่าเขาภูมิใจเรื่องใด","result":"ลูกได้เล่าเรื่องที่มีความหมายกับเขาโดยไม่ต้องแข่งขันกับใคร","delta":{"child":5,"r":3,"h":2}},{"label":"ชวนฉลองด้วยงบ 3,000 บาท","result":"ครอบครัวได้ใช้เวลาร่วมกันและฉลองความพยายามของลูก","delta":{"m":-3000,"child":5,"h":4}},{"label":"เปรียบเทียบกับความสำเร็จของลูกคนอื่นหรือคนรู้จัก","result":"ลูกผิดหวังที่เรื่องดีของตัวเองกลายเป็นการเปรียบเทียบ","delta":{"child":-4,"stress":3}},{"label":"ยินดีด้วยและเคารพเวลาของเขา","result":"ลูกได้รับกำลังใจโดยไม่ต้องเปลี่ยนแผนของตัวเองเพื่อมาพบคุณทันที","delta":{"child":3,"selfcontrol":2}}]},{"key":"grandstudy","ages":[51,55,59,63,67,71,75,79,83,87,91,95,99],"cd":4,"title":"หลานเริ่มมีความฝันของตัวเอง","story":"ครอบครัวของ {child} มีหลานวัยเรียนที่สนใจสิ่งใหม่ พ่อแม่เด็กกับคุณอาจมองเรื่องการเรียนและอนาคตต่างกัน","choices":[{"label":"ฟังหลานและเคารพการตัดสินใจของพ่อแม่","result":"หลานกล้าเล่าความสนใจและครอบครัวไม่ต้องแข่งขันกันเรื่องการเลี้ยงดู","delta":{"child":4,"r":4,"e":3}},{"label":"ช่วยค่าเรียนกิจกรรม 5,000 บาทตามที่ตกลง","result":"หลานได้ทดลองกิจกรรมโดยที่พ่อแม่ยังเป็นคนดูแลแผนของเด็ก","delta":{"m":-5000,"child":4,"e":3}},{"label":"บังคับให้หลานเรียนตามอาชีพที่เราอยากให้เป็น","result":"พ่อแม่เด็กไม่สบายใจและหลานเริ่มไม่กล้าพูดเรื่องความฝัน","delta":{"child":-5,"stress":5},"action":"childConflict"},{"label":"ชวนหลานทำสิ่งที่สนใจด้วยกันเป็นครั้งคราว","result":"คุณได้ใช้เวลากับหลานโดยไม่ต้องรับหน้าที่เลี้ยงดูทั้งหมด","delta":{"r":4,"h":4,"creative":2}}]},{"key":"communityaward","ages":[65,71,77,83,89,95],"cd":6,"title":"คนในชุมชนชื่นชมผลงานของคุณ","story":"หลังช่วยงานชมรมมาระยะหนึ่ง สมาชิกเสนอชื่อคุณให้รับคำขอบคุณจากชุมชน แต่บางคนมองว่าคนทำงานเบื้องหลังก็ควรได้รับเครดิต","choices":[{"label":"รับคำขอบคุณและให้เครดิตทีม","result":"คนที่ช่วยงานได้รับการยอมรับร่วมกันและชมรมมีแรงทำกิจกรรมต่อ","delta":{"fame":5,"respect":5,"fair":3}},{"label":"เสนอให้จัดงานขอบคุณอาสาสมัครทุกคน","result":"สมาชิกเห็นคุณค่าของงานที่ทำร่วมกัน","delta":{"network":4,"e":4,"friend":3}},{"label":"ขอให้ทุกคนยกย่องเราเป็นคนเดียว","result":"คนในทีมเริ่มไม่อยากช่วยงานเมื่อรู้สึกว่าผลงานไม่ถูกเห็น","delta":{"fame":3,"friend":-5,"fair":-4}},{"label":"ไม่รับรางวัลแต่ยังช่วยงานตามความสมัครใจ","result":"คุณรักษาความสุขในการช่วยชุมชนโดยไม่ต้องมีตำแหน่ง","delta":{"h":4,"satisfaction":3}}]}]);
const initial={children:[],grandchildren:0,lateBusiness:0,bizTrouble:false,projectTrouble:false,projectTeam:false,clubMember:false,clubLeader:false,scamLoss:false,childConflict:false,heirConflict:false,estatePlan:false,paidCare:0,parentsLost:{},lateWork:""};
const working=st=>["งานประจำ","ธุรกิจ","อิสระ","งานประจำควบธุรกิจ"].includes(st.mode);
const adultChildren=(st,age)=>st.children.filter(c=>age-c.born>=20);
function childFor(e,st){let a=adultChildren(st,e.age);if(e.later==="childwedding")a=a.filter(c=>!c.married);if(e.later==="grandchild")a=a.filter(c=>c.married&&c.grand<3&&e.age-(c.lastGrand??-100)>=4).sort((x,y)=>x.grand-y.grand);if(["childdebt","childsuccess"].includes(e.later))return a[e.age%Math.max(1,a.length)];if(e.later==="grandstudy")a=a.filter(c=>c.grand&&e.age-(c.firstGrand??e.age)>=6);return a[0]}
function allowed(e,st,s){if(e.id==="retire")return false;if(st.parentsLost.mother&&["parent","careburnout"].includes(e.id))return false;if(!e.later)return true;const a=e.age,k=e.later,stats=s.stats;if(k==="loss"){const which=e.parentKey;if(st.parentsLost[which])return false;const seed=(s.seed??123456789)>>>0;const target=25+((seed^(which==="father"?12345:54321))>>>0)%36+(which==="mother"?4:0);return a>=target;}
if(k==="morechild")return !s.history.some(x=>x.id.startsWith("later_morechild_")&&x.age>a-3)&& st.parent==="มีลูก"&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&st.familyPreference!=="no"&&!st.noMoreChildren&&st.children.length<5&&a-(st.children.at(-1)?.born??a)>=3;
if(s.history.some(x=>x.id.startsWith("later_"+k+"_")&&x.age>a-e.cooldown))return false;
switch(k){
case "project":return working(st)&&stats.career>=55&&stats.skill>=50&&!st.projectTrouble;
case "leadteam":return working(st)&&(st.projectTeam||st.leadRole==="หัวหน้า"||st.careerRank>=2);
case "projectfix":return st.projectTrouble;
case "business":return !st.lateBusiness&&stats.m>=10000&&stats.physical>=30;
case "bizgrowth":return st.lateBusiness>0&&!st.bizTrouble;
case "bizfix":return st.lateBusiness>0&&st.bizTrouble;
case "workchoice":return working(st)||st.lateWork==="retired"||st.everWorked;
case "luxury":return stats.m>=50000;
case "community":return !st.clubMember;
case "clubdrama":case "clubtrip":return st.clubMember;case "communityaward":return st.clubMember&&(st.clubLeader||stats.respect>=65);
case "scamold":return stats.m>=20000&&!st.scamLoss;
case "scamfollow":return st.scamLoss;
case "childwedding":case "grandchild":case "childdebt":case "childsuccess":case "grandstudy":return !!childFor(e,st);
case "childrepair":return st.childConflict;
case "wealthheirs":return st.children.length>=2&&(stats.m+stats.assets>=200000)&&adultChildren(st,a).length>0&&!st.heirConflict;
case "heirrepair":return st.heirConflict&&st.children.length>=2;
case "carepaid":return stats.m>=18000&&!st.paidCare;
case "nocare":return !st.paidCare&&(stats.physical<65||stats.h<45);
case "healthcare":return stats.physical<70;
case "careconflict":return st.paidCare>0;
case "travelbig":return stats.m>=6000&&stats.physical>=35;
default:return true}}
function inheritance(s){return ({modest:8000,ordinary:45000,wealthy:250000}[s.origin?.family]??45000)}
function story(e,st,s){if(e.later==="loss")return e.story+" ครอบครัวกำลังจัดการเรื่องทรัพย์สินตามสิทธิของผู้เกี่ยวข้อง ในเกมคุณได้รับส่วนมรดก "+inheritance(s).toLocaleString("th-TH")+" บาท";const ch=childFor(e,st);return e.story.replaceAll("{child}",ch?ch.name+" (อายุ "+(e.age-ch.born)+" ปี)":"ลูกของคุณ")}
function choices(e,st,s){return e.choices.map((c,n)=>{let delta={...c.delta},label=c.label,result=c.result;if(e.later==="loss")delta.m=(delta.m||0)+inheritance(s);if(delta.m<0&&s.stats.m < -delta.m){label="ยังจ่ายตามแผนนี้ไม่ได้ — "+label;result="เงินสดไม่พอ คุณยังไม่ได้จ่ายหรือดำเนินการตามแผนนี้ และต้องเลือกแนวทางอื่นในอนาคต";return {...c,label,result,delta:{experience:1},baseIndex:n,action:"",unaffordable:true}}return {...c,label,result,delta,baseIndex:n}})}
function addChild(st,age){const names=["ต้น","ข้าวหอม","ภู","นับดาว","ปลายฟ้า"];st.children.push({name:names[st.children.length]||"ลูกคนถัดไป",born:age,married:false,grand:0});}
function after(st,old,e,n,item){if(st.parent==="มีลูก"&&!st.children.length)addChild(st,st.parentSince??item.age);if(e.cw==="entry"&&n<2&&st.profession&&st.profession!==old.profession)st.lateWork="";if(!e.later)return;const a=item.age,act=item.laterAction??e.choices[n]?.action;if(e.later==="loss"){st.parentsLost[e.parentKey]=a;return}if(!act)return;if(e.later==="morechild"){if(act==="addChild")addChild(st,a);if(act==="noMore")st.noMoreChildren=true;return}const ch=childFor(e,st);switch(act){
case "team":st.projectTeam=true;st.leadRole="หัวหน้า";break;case "projectTrouble":st.projectTrouble=true;break;case "clearProject":st.projectTrouble=false;break;
case "smallBiz":case "largeBiz":st.lateBusiness=act==="smallBiz"?1:2;st.bizTrouble=false;break;case "growBiz":st.lateBusiness=Math.min(4,st.lateBusiness+1);break;case "bizTrouble":st.bizTrouble=true;break;case "clearBiz":st.bizTrouble=false;st.lateBusiness=Math.max(1,st.lateBusiness-1);break;case "sellBiz":st.lateBusiness=0;st.bizTrouble=false;break;
case "keepWork":if(st.lateWork==="retired"||!working(st)){st.mode=st.profession?"งานประจำ":"อิสระ";st.everWorked="ใช่"}st.lateWork="";break;case "partWork":if(!working(st)){st.mode=st.profession?"งานประจำ":"อิสระ";st.everWorked="ใช่"}st.lateWork="part";break;case "retireNow":st.mode="พักที่บ้าน";st.lateWork="retired";break;
case "joinClub":st.clubMember=true;break;case "clubLead":st.clubLeader=true;break;case "scamLoss":st.scamLoss=true;break;case "clearScam":st.scamLoss=false;break;
case "childMarry":if(ch)ch.married=true;break;case "grandAdd":case "grandConflict":if(ch){ch.grand++;ch.firstGrand??=a;ch.lastGrand=a;st.grandchildren++;}if(act==="grandConflict")st.childConflict=true;break;case "childConflict":st.childConflict=true;break;case "clearChild":st.childConflict=false;break;
case "estatePlan":st.estatePlan=true;break;case "heirConflict":st.heirConflict=true;break;case "clearHeir":st.heirConflict=false;break;
case "paidCare":st.paidCare=1;st.careStart=a;break;case "fullCare":st.paidCare=2;st.careStart=a;break;case "loseCare":st.paidCare=0;break;}}
for(const arc of arcs)for(const age of arc.ages)window.STORY.push({id:"later_"+arc.key+"_"+age,age,order:83,title:arc.title,story:arc.story,choices:arc.choices,custom:true,later:arc.key,cooldown:arc.cd});
for(let age=25;age<=99;age++)for(const [parentKey,name] of [["father","พ่อ"],["mother","แม่"]])window.STORY.push({id:"later_loss_"+parentKey+"_"+age,age,order:15,title:"วันที่ต้องบอกลา"+name,story:name+"เสียชีวิตในเรื่องราวจำลองของเกม คุณกับคนในครอบครัวต้องจัดการความสูญเสียและภาระที่ตามมา",parentKey,later:"loss",custom:true,choices:[
{label:"ใช้เวลากับครอบครัวและจัดการตามหน้าที่",result:"คุณได้บอกลาและจัดการเรื่องจำเป็นร่วมกับครอบครัว",delta:{r:4,h:-4,stress:3,m:-2000}},
{label:"ขอคนที่ไว้ใจช่วยจัดการเอกสาร",result:"ภาระด้านเอกสารลดลง คุณมีเวลารับมือความสูญเสีย",delta:{problem:3,r:3,h:-3,m:-1000}},
{label:"จัดพิธีตามกำลังและเก็บเงินส่วนที่เหลือ",result:"คุณจัดการภาระตามงบโดยยังเก็บทรัพย์สินส่วนที่ได้รับไว้",delta:{responsibility:4,h:-3,m:-3000}},
{label:"ขอเวลาส่วนตัวหลังจัดการเรื่องจำเป็น",result:"คุณได้มีพื้นที่รับมือความเศร้าโดยไม่ต้องฝืนเข้าสังคม",delta:{h:-2,energy:2,selfcontrol:3}}]});
for(let age=22;age<=55;age++)window.STORY.push({id:"later_morechild_"+age,age,order:84,title:"คิดเรื่องสมาชิกใหม่ในครอบครัว",story:"คุณกับคนรักมีลูกแล้ว และกำลังทบทวนว่าต้องการดูแลเด็กเพิ่มหรือไม่ ไม่จำเป็นต้องมีลูกเพิ่มหากชีวิตตอนนี้เหมาะสมแล้ว",later:"morechild",custom:true,choices:[
{label:"ตกลงร่วมกันและเข้าสู่บทบาทผู้ปกครองเพิ่มในเกม",result:"ครอบครัวมีลูกเพิ่มหนึ่งคนในระบบจำลอง และต้องเตรียมภาระเลี้ยงดู",delta:{m:-3000,child:4,responsibility:4},action:"addChild"},
{label:"ยังไม่พร้อม ขอทบทวนภายหลัง",result:"คุณยังคงดูแลครอบครัวในรูปแบบเดิม",delta:{patience:3,partner:2}},
{label:"พอใจกับจำนวนลูกแล้ว",result:"คุณเลือกให้เวลากับลูกที่มีอยู่โดยไม่เพิ่มภาระ",delta:{child:3,h:2},action:"noMore"},
{label:"ยังไม่อยากคุยเรื่องนี้",result:"คุณเว้นเวลาให้เรื่องอื่นในชีวิต",delta:{selfcontrol:2,h:2}}]});
function annual(st,age){const business=st.lateBusiness?(st.bizTrouble?-3000:st.lateBusiness*6000):0,care=st.paidCare&&age>(st.careStart??-1)?st.paidCare===1?18000:45000:0;const children=st.children.filter(c=>age-c.born<18).length*2400;return {business,care,children,net:business-care-children}}
return {initial,allowed,story,choices,after,annual,arcCount:arcs.length};})();


// Youth and admission continuity — preserves existing event IDs and save history.
(function installYouth(w){
"use strict";
const W=w.CAREER_WORLD, S=w.STORY, E=w.EPISODES, L=w.LIFE;
const prev={allowed:W.allowed,choices:W.choices,after:W.after,story:W.story,delta:L.delta};
const all=[...S,...E], by=Object.fromEntries(all.map(e=>[e.id,e]));
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const placeholders=Array.from({length:4},()=>c("เลือก","ผลลัพธ์จะประเมินจากสถานะปัจจุบัน"));
const add=(id,age,order,title,story,type,choices=placeholders)=>S.push({id:"youth_"+id,age,order,title,story,cw:"youth",youth:type,custom:true,choices});
const story=(id,age,order,title,body,choices,requirements=[])=>S.push({id:"youth_"+id,age,order,title,story:body,custom:true,choices,requirements});
const fields={doctor:["แพทยศาสตร์",6,66,true],vet:["สัตวแพทยศาสตร์",6,57,true],nurse:["พยาบาลศาสตร์",4,46,true],lawyer:["นิติศาสตร์",4,40,false],engineer:["วิศวกรรมศาสตร์",4,50,true],account:["บัญชี",4,34,false],software:["เทคโนโลยีสารสนเทศ",4,39,false],teacher:["ครุศาสตร์",4,38,false]};
const plans=[["doctor","vet","nurse","lawyer"],["engineer","software","account","teacher"],["lawyer","account","teacher","software"],["vet","nurse","teacher","account"]];
const score=t=>Math.round(.69*t.knowledge+.21*t.discipline+.05*t.energy+.05*t.physical-.16*Math.max(0,t.stress-40));
const passes=(id,st,s)=>{const f=fields[id];return !!f&&score(s.stats)>=f[2]&&(!f[3]||s.answers.studytrack===0||st.foundation)&&s.stats.knowledge>=Math.max(15,f[2]-18)};
const isGap=st=>st.youthStatus==="gap";
const isStudent=st=>st.youthStatus==="student";
const partner=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship);
const enrolled=(id,age)=>({youthStatus:"student",youthField:id,youthStart:age,youthPlan:"",careerPlan:id,careerPhase:"training",trainingAge:age,careerMenu:"",mode:"เรียนต่อ",goal:W.by[id]?.name||fields[id][0]});
const gap={youthStatus:"gap",youthPlan:"",careerPlan:"",careerPhase:"",careerMenu:"",mode:"พักที่บ้าน",goal:"เตรียมสอบใหม่"};
const leave={youthStatus:"left",youthPlan:"",careerPlan:"",careerPhase:"",careerMenu:"",mode:"",goal:""};
if(by.route){
 by.route.choices[0].label="ตั้งใจสมัครมหาวิทยาลัยเต็มเวลา";
 by.route.choices[0].result="คุณตัดสินใจสมัคร ยังต้องผ่านการคัดเลือกก่อน";
 by.route.choices[1].label="สมัครมหาวิทยาลัยและวางแผนหารายได้เสริม";
 by.route.choices[1].result="คุณวางแผนเรียนควบคู่หารายได้ ยังต้องผ่านการคัดเลือก";
}
L.delta=(e,n)=>e.id==="route"&&n<2?{discipline:1}:prev.delta(e,n);
for(let age=10;age<=17;age++){
 story("habit_"+age,age,82,"เวลาหลังเลิกเรียน","ช่วงนี้การบ้านและบทเรียนเริ่มยากขึ้น คุณอยากใช้เวลาหลังเลิกเรียนแบบไหน",[
 c("ทบทวนบทเรียนทุกวันและนอนให้พอ","พื้นฐานความรู้ค่อยๆ แน่นขึ้น",{knowledge:5,discipline:3,energy:1}),
 c("ทุ่มอ่านและฝึกโจทย์จนดึก","คุณเรียนรู้มากขึ้นแต่พักผ่อนน้อย",{knowledge:7,discipline:2,energy:-7,physical:-2,stress:5}),
 c("แบ่งเวลาอ่านและทำสิ่งที่ชอบ","คุณพัฒนาตัวเองและยังมีเวลาสนุก",{knowledge:3,h:3,physical:2}),
 c("ใช้เวลาว่างกับสิ่งที่ชอบเป็นหลัก","คุณได้พักและประสบการณ์อื่น แต่ไม่ได้ทบทวนเพิ่ม",{h:3,experience:2,knowledge:0})]);
}
story("peer_invite",14,74,"วันหยุดที่เพื่อนชวน","เพื่อนในห้องกำลังหาคนไปกินข้าว เล่นเกม และเดินเล่นหลังสอบเสร็จ คุณอยากไปไหม",[
 c("ไปด้วย","คุณตกลงนัดพบกับเพื่อน",{friend:3,h:3},{youthHangout:"yes"}),
 c("ชวนไปเล่นกีฬาหรือเดินสวนแทน","เพื่อนบางคนสนใจ แต่ยังไม่ได้ตกลงสถานที่",{physical:2,social:2}),
 c("ขอกลับบ้านอ่านหนังสือ","คุณได้ใช้เวลากับบทเรียน",{knowledge:4,discipline:2}),
 c("พักอยู่บ้าน","คุณได้พักโดยไม่ฝืนใจ",{energy:4,h:2})]);
story("peer_outing",14,75,"มื้อแรกนอกโรงเรียน","หลังตกลงนัดกัน เพื่อนกำลังแบ่งค่าอาหารและเลือกว่าจะไปไหนต่อ มีคนงบไม่พอ",[
 c("ช่วยออกส่วนที่ขาดเท่าที่ไหว","เพื่อนได้ร่วมกิจกรรมโดยไม่ต้องฝืนจ่าย",{m:-80,friend:4,e:2}),
 c("เสนอร้านที่ทุกคนจ่ายไหว","ทุกคนได้ร่วมมื้ออาหาร",{problem:3,friend:3}),
 c("แยกย้ายหลังมื้ออาหาร","คุณกลับตามเวลาที่ตกลง",{energy:3,discipline:2}),
 c("ชวนเดินเล่นต่อโดยไม่เสียเงิน","คุณได้คุยกับเพื่อนอีกหน่อย",{h:3,social:3})],["youthHangout=yes"]);
story("school_pressure",15,76,"เสียงในแชตห้อง","มีเพื่อนส่งรูปข้อสอบเก่าและชวนใช้คำตอบที่อาจหลุดมาจากครู คุณยังไม่แน่ใจว่าเป็นของจริง",[
 c("ไม่เปิดและอ่านจากตำรา","คุณเลือกเตรียมตัวเอง",{knowledge:3,i:3}),
 c("ถามครูว่าข้อมูลนี้ใช้ได้ไหม","คุณตรวจสอบความถูกต้องก่อน",{responsibility:3,problem:2}),
 c("ส่งต่อโดยไม่ตรวจสอบ","ข่าวลือแพร่เร็วและเกิดความไม่สบายใจ",{i:-3,stress:4,friend:1}),
 c("ไม่ยุ่งและปิดแชตพัก","คุณเว้นระยะจากแรงกดดัน",{energy:3,stress:-2})]);
story("first_job_invite",16,77,"รายได้จากวันหยุด","ร้านใกล้บ้านประกาศรับคนช่วยงานช่วงวันหยุดที่เหมาะกับวัย คุณอยากลองสมัครไหม",[
 c("ขอคุยรายละเอียดและลองงาน","คุณตกลงทดลองช่วยงานในวันหยุด",{skill:2,responsibility:2},{youthWeekendJob:"yes"}),
 c("ถามผู้ปกครองก่อนตัดสินใจ","คุณได้ข้อมูลเพิ่มและยังไม่รับงาน",{problem:2,father:1,mother:1}),
 c("ขอเน้นอ่านหนังสือ","คุณเลือกเตรียมการเรียน",{knowledge:4,discipline:2}),
 c("ไม่สนใจ อยากพักหรือทำกิจกรรมอื่น","คุณรักษาเวลาว่าง",{h:3,energy:3})]);
story("first_job_shift",16,78,"วันทดลองงาน","ร้านตอบรับให้คุณช่วยงานในวันหยุดตามที่ตกลงไว้ ลูกค้าหลายคนเข้ามาพร้อมกัน",[
 c("ถามผู้ดูแลว่าควรจัดคิวอย่างไร","คุณได้ค่าตอบแทนและเรียนรู้การทำงาน",{m:350,skill:4,problem:2}),
 c("ตั้งใจทำตามหน้าที่","คุณได้รายได้จากงานครั้งแรก",{m:350,skill:3,energy:-2}),
 c("บอกว่าทำไม่ทันและขอความช่วยเหลือ","คุณเรียนรู้การทำงานเป็นทีม",{m:350,friend:2,skill:2}),
 c("ขอหยุดหลังจบเวลาที่ตกลง","คุณรักษาเวลาพักและได้รับค่าตอบแทน",{m:350,energy:2,skill:1})],["youthWeekendJob=yes"]);
story("preexam",17,90,"หนึ่งเดือนก่อนสอบ","การสอบปลายมัธยมใกล้เข้ามาแล้ว ความรู้ที่สะสมมาตลอดและวิธีดูแลตัวเองจะส่งผลต่อความพร้อม คุณจะใช้เวลาช่วงนี้อย่างไร",[
 c("อ่านเต็มที่จนดึกทุกวัน","คุณฝึกโจทย์มากขึ้น แต่เหนื่อยและกดดัน",{knowledge:9,discipline:4,physical:-4,energy:-13,stress:10}),
 c("วางตารางอ่าน พัก และออกกำลังกาย","คุณเพิ่มความพร้อมอย่างสม่ำเสมอ",{knowledge:6,discipline:5,energy:6,physical:3,stress:-4}),
 c("หาเพื่อนติวเฉพาะวิชาที่ไม่ถนัด","คุณเติมช่องว่างบางวิชาและได้แรงสนับสนุน",{knowledge:5,friend:3,problem:3}),
 c("เตรียมตามกำลังและเผื่อเวลาให้เรื่องอื่น","คุณไม่ทุ่มทั้งหมดกับการสอบ",{knowledge:2,h:3,energy:4})]);
for(let age=18;age<=99;age++){
 if(age>18)add("gap_"+age,age,-90,"อีกหนึ่งปีที่ยังไม่มีที่เรียน","คุณยังไม่ได้เข้าเรียนมหาวิทยาลัยตามแผน จะใช้ปีนี้ทำอะไร","gap",[
 c("มุ่งอ่านหนังสือเต็มเวลา","คุณเพิ่มความรู้ แต่หากพักน้อยจะเสียสมดุล",{knowledge:11,discipline:5,energy:-10,physical:-4,stress:8},{youthPlan:""}),
 c("อ่านเป็นระบบและดูแลสุขภาพ","คุณพัฒนาพื้นฐานพร้อมรักษาสภาพร่างกาย",{knowledge:8,discipline:4,energy:7,physical:3,stress:-4},{youthPlan:"",mode:"พักที่บ้าน"}),
 c("ทำงานพิเศษและอ่านควบคู่","คุณมีรายได้และความรู้เพิ่มขึ้นแต่เหนื่อยกว่าเดิม",{m:8500,knowledge:5,skill:4,energy:-5},{youthPlan:"",mode:"อิสระ"}),
 c("เลิกแผนสอบและเดินเส้นทางอื่น","คุณยังสามารถสำรวจอาชีพและกลับไปเรียนภายหลัง", {experience:3,h:3},leave)]);
 add("apply_"+age,age,age===18?.6:-89,"เลือกคณะที่จะสมัคร","คุณต้องเลือกกลุ่มคณะที่จะสมัครก่อน ผลสอบจะขึ้นกับความรู้ วินัย สุขภาพ ความเครียด และพื้นฐานที่มี ไม่ใช่เพียงความฝัน","apply",[
 c("แพทย์ / สัตวแพทย์ / พยาบาล / นิติ","คุณยื่นสมัครเฉพาะกลุ่มนี้",{}, {youthStatus:"applying",youthPlan:"0"}),
 c("วิศวะ / เทคโนโลยี / บัญชี / ครุศาสตร์","คุณยื่นสมัครเฉพาะกลุ่มนี้",{}, {youthStatus:"applying",youthPlan:"1"}),
 c("นิติ / บัญชี / ครุศาสตร์ / เทคโนโลยี","คุณยื่นสมัครเฉพาะกลุ่มนี้",{}, {youthStatus:"applying",youthPlan:"2"}),
 c("สัตวแพทย์ / พยาบาล / ครุศาสตร์ / บัญชี","คุณยื่นสมัครเฉพาะกลุ่มนี้",{}, {youthStatus:"applying",youthPlan:"3"})]);
 // Up to four admission offers plus retry / leave; stable indices for replay.
 add("results_"+age,age,age===18?.7:-88,"ผลการคัดเลือก","ผลการสมัครออกแล้ว คุณจะเลือกเส้นทางใด","results",Array.from({length:6},()=>c("เลือก","ผลลัพธ์จะประเมินจากสถานะปัจจุบัน")));
 if(age>18){
 add("study_"+age,age,-87,"ชีวิตนักศึกษา","ตอนนี้คุณกำลังเรียนในสาขาที่สอบเข้าได้ คุณต้องแบ่งเวลาระหว่างการเรียน สุขภาพ เพื่อน และรายได้","study",[
 c("อ่านและฝึกปฏิบัติอย่างสม่ำเสมอ","คุณเข้าใจเนื้อหามากขึ้น",{knowledge:5,discipline:4,skill:3,energy:-2}),
 c("อ่านหนักจนแทบไม่พัก","ผลการเรียนดีขึ้นแต่ความล้าเริ่มสะสม",{knowledge:7,discipline:3,stress:8,energy:-9,physical:-3}),
 c("แบ่งเวลาเรียน พบเพื่อน และพัก","คุณยังพัฒนาความรู้และดูแลตัวเอง",{knowledge:3,friend:3,h:3,energy:4,stress:-2}),
 c("ทำงานเสริมตามเวลาที่ว่าง","คุณช่วยค่าใช้จ่าย แต่มีเวลาอ่านน้อยลง",{m:3500,skill:3,knowledge:1,energy:-4})]);
 add("grad_"+age,age,-86,"ประเมินก่อนเรียนจบ","คุณเรียนมาครบระยะขั้นต่ำแล้ว ต้องผ่านการประเมินความรู้และความพร้อมอีกครั้ง","grad",[
 c("เข้ารับการประเมิน","ผลประเมินขึ้นกับสิ่งที่สะสม",{}),
 c("ขอเรียนเพิ่มอีกปี","คุณขอเสริมพื้นฐานและพักให้เพียงพอ",{knowledge:5,energy:3,stress:-2}),
 c("พักและทำงานก่อน","คุณหยุดเรียนตามแผนเดิม",{experience:3,skill:2}),
 c("ขอออกจากเส้นทางนี้","คุณยังนำความรู้ที่สะสมไปใช้ด้านอื่นได้",{h:3,experience:3})]);
 }
}
const campus=new Set(["campus","campusclub","collegeexam","shift","study1","graduate","career_select","health_choice","law_choice","creative_choice","business_choice"]);
const studentOnly=new Set(["campus","campusclub","collegeexam","shift","study1"]);
const oldCareer=new Set(["career_select","health_choice","law_choice","creative_choice","business_choice"]);
story("campus_invite",19,76,"ชีวิตนอกห้องเรียน","เพื่อนนักศึกษาชวนไปทำกิจกรรมชมรมในวันหยุด คุณอยากลองไหม",[
 c("ลองเข้าชมรม","คุณสมัครทดลองเข้าร่วม",{social:3,friend:3},{youthClub:"yes"}),
 c("ชวนไปกินข้าวแทน","คุณเลือกพบเพื่อนแบบไม่ผูกมัด",{h:3,friend:2}),
 c("กลับไปอ่านหนังสือ","คุณได้ทบทวนเนื้อหา",{knowledge:4,discipline:2}),
 c("ขอพักคนเดียว","คุณได้เวลาส่วนตัว",{energy:4,stress:-2})],["@youthStatus"]);
by.route && (by.route.story="หลังจบมัธยม คุณอยากวางแผนชีวิตแบบไหน การเลือกเรียนต่อยังไม่ใช่ผลสอบ");
story("campus_club",19,77,"งานแรกของชมรม","หลังสมัครเข้าร่วมชมรม เพื่อนเสนอให้ช่วยจัดกิจกรรมเล็กๆ คุณจะรับหน้าที่ไหน",[
 c("ช่วยวางแผนและแบ่งงาน","งานเป็นระบบและได้รู้จักคนใหม่",{problem:3,friend:3}),
 c("รับผิดชอบส่วนที่ถนัด","คุณพัฒนาทักษะจากการลงมือ",{skill:4,confidence:2}),
 c("ลองรับงานหน้าเวที","คุณฝึกสื่อสารในพื้นที่ใหม่",{social:4,confidence:2}),
 c("ช่วยเท่าที่ไหวแล้วกลับไปอ่าน","คุณรักษาสมดุลระหว่างกิจกรรมกับการเรียน",{knowledge:2,energy:2,friend:2})],["youthClub=yes"]);
story("adult_intimacy",20,79,"ขอบเขตความสัมพันธ์","คุณกับคนรักที่คบกันอยู่เริ่มคุยถึงความใกล้ชิดทางเพศ ทั้งคู่มีสิทธิ์ตอบตกลงหรือปฏิเสธ และไม่มีใครต้องฝืนใจ",[
 c("คุยเรื่องความพร้อม ความยินยอม และการป้องกัน","ทั้งคู่ได้ตกลงขอบเขตและไม่เร่งรัดกัน",{partner:4,responsibility:3}),
 c("บอกว่ายังไม่พร้อม","คุณสื่อสารขอบเขตอย่างชัดเจน",{selfcontrol:3,partner:2}),
 c("ขอเวลาหาข้อมูลสุขภาพทางเพศ","คุณได้เตรียมความพร้อมโดยไม่ต้องรีบ",{knowledge:3,responsibility:2}),
 c("เปลี่ยนไปทำกิจกรรมที่ทั้งคู่สบายใจ","คุณให้ความสำคัญกับความสัมพันธ์โดยไม่กดดัน",{h:3,partner:2})],["@partner"]);
story("adult_money",21,78,"เงินที่เริ่มจัดการเอง","คนรู้จักชวนลองหารายได้จากงานเสริม คุณอยากเลือกอะไรโดยไม่จำเป็นต้องมีเงินลงทุนก้อนใหญ่",[
 c("ลองรับงานตามทักษะ","คุณเริ่มจากงานขนาดเล็กที่รับผิดชอบไหว",{skill:3,m:600,experience:2}),
 c("หาข้อมูลก่อนตกลง","คุณตรวจสอบค่าใช้จ่ายและความเสี่ยง",{problem:4,knowledge:2}),
 c("ตั้งใจเรียนหรือทำงานเดิมก่อน","คุณรักษาเป้าหมายหลัก",{discipline:3,knowledge:2}),
 c("ไม่รับเพื่อให้มีเวลาพัก","คุณลดภาระช่วงนี้",{energy:4,h:2})]);
story("adult_trip_invite",22,78,"วันว่างที่ตรงกัน","กลุ่มคนรู้จักชวนเที่ยวต่างจังหวัดหนึ่งวันและกำลังถามว่าใครสนใจ คุณจะตอบอย่างไร",[
 c("ตกลงไปและวางงบ","คุณร่วมวางแผนเดินทาง",{m:-350,h:3,friend:3},{youthTrip:"yes"}),
 c("เสนอเที่ยวใกล้บ้านแทน","คุณรักษางบและยังพบเพื่อนได้",{friend:2,h:2}),
 c("ขออยู่ทำสิ่งที่ค้างไว้","คุณรักษาแผนส่วนตัว",{discipline:3}),
 c("ปฏิเสธและพัก","คุณได้พักเต็มที่",{energy:4})]);
story("adult_trip",22,79,"ทริปที่เลือกเอง","หลังตกลงไปเที่ยว กลุ่มของคุณต้องเปลี่ยนแผนเพราะฝนตก เพื่อนบางคนอยากเดินทางต่อ",[
 c("หาที่พักรอฝนและคุยกัน","คุณเลือกความปลอดภัยและยังสนุกกับเพื่อน",{friend:3,problem:3}),
 c("เปลี่ยนเป็นกิจกรรมในร่ม","ทุกคนได้ประสบการณ์ใหม่",{h:4,experience:2}),
 c("กลับบ้านก่อนตามความสะดวก","คุณตัดสินใจตามกำลังของตัวเอง",{energy:3,selfcontrol:2}),
 c("ช่วยหารือเส้นทางและงบใหม่","กลุ่มได้ตกลงแผนใหม่ร่วมกัน",{problem:4,friend:2})],["youthTrip=yes"]);
W.allowed=(e,st,s)=>{
 if(e.cw==="youth"){
  switch(e.youth){
   case "gap":return isGap(st);
   case "apply":return e.age===18?[0,1].includes(s.answers.route)&&!st.youthStatus:isGap(st);
   case "results":return st.youthStatus==="applying";
   case "study":return isStudent(st)&&e.age>st.youthStart;
   case "grad":return isStudent(st)&&e.age>=st.youthStart+(fields[st.youthField]?.[1]||4);
   default:return false;
  }
 }
 if(e.id==="youth_campus_invite"&&!isStudent(st))return false;
 if(e.id==="youth_campus_club"&&!isStudent(st))return false;
 if(e.id==="youth_adult_intimacy"&&!partner(st))return false;
 if(st.youthStatus){
  if(e.id==="graduate")return false;
  if(studentOnly.has(e.id)&&!isStudent(st))return false;
  if(e.id==="shift"&&s.answers.route!==1)return false;
  if(oldCareer.has(e.id)&&["applying","gap","student"].includes(st.youthStatus))return false;
  if(["applying","gap","student"].includes(st.youthStatus)&&["explore","group","extraPage","extraGroups","pick","bridge","train"].includes(e.cw))return false;
  if(isStudent(st)&&e.cw==="entry"&&e.cwProfession===st.youthField)return false;
 }
 return prev.allowed(e,st,s);
};
W.choices=(e,st,s)=>{
 if(e.cw==="youth"&&e.youth==="results"){
  const ids=plans[Number(st.youthPlan)]||plans[0];
  return [...ids.map(id=>passes(id,st,s)?c("ยืนยันสิทธิ์ "+fields[id][0],"คุณสอบผ่านและเริ่มเรียน "+fields[id][0],{knowledge:1,confidence:4,h:3},enrolled(id,e.age)):c("ไม่ผ่าน "+fields[id][0]+" — เตรียมสอบใหม่","ผลสอบไม่ถึงเกณฑ์จำลองของสาขานี้หรือยังขาดพื้นฐาน คุณยังไม่ได้เข้าเรียน",{stress:3,confidence:-2},gap)),c("พักหนึ่งปีแล้วสอบใหม่","คุณยังไม่มีที่เรียนและจะมีโอกาสเตรียมสอบอีกครั้ง",{patience:2},gap),c("ไม่เรียนต่อในตอนนี้","คุณเลือกเปิดทางไปทำงานหรือสำรวจเส้นทางอื่น",{experience:3},leave)];
 }
 if(e.cw==="youth"&&e.youth==="grad"){
  const id=st.youthField, f=fields[id];
  const ready=score(s.stats)>=Math.max(30,f[2]-8)&&s.stats.knowledge>=Math.max(25,f[2]-12);
  return [ready?c("เข้ารับการประเมินและเรียนจบ","คุณผ่านการประเมินและจบการศึกษา ยังต้องผ่านเงื่อนไขการประกอบอาชีพของเกม",{confidence:5,knowledge:2},{youthStatus:"graduated"}):c("เข้ารับการประเมิน","คุณยังไม่ผ่าน จึงต้องเรียนเสริมก่อนประเมินอีกครั้ง",{stress:4,knowledge:3},{youthStatus:"student"}),c("ขอเรียนเพิ่มอีกปี","คุณขอเสริมพื้นฐานและพักให้เพียงพอ",{knowledge:5,energy:3,stress:-2}),c("พักและทำงานก่อน","คุณออกจากแผนเรียนเดิมและจะได้สำรวจอาชีพใหม่",{skill:2,experience:3},leave),c("ขอออกจากเส้นทางนี้","คุณยังนำความรู้ที่สะสมไปใช้ด้านอื่นได้",{h:3,experience:3},leave)];
 }
 if(e.cw==="youth")return e.choices;
 if(e.cw==="train"){
  const x=W.by[e.cwProfession], f=fields[e.cwProfession];
  if(x&&["science","study","law"].includes(x.req)){
   const required=f?f[2]:Math.max(34,Math.min(58,x.level+14));
   if(score(s.stats)<required||s.stats.knowledge<required-18){
    return e.choices.map((v,n)=>n<2?c(n===0?"เตรียมสอบและทบทวนพื้นฐาน":"หารายได้พร้อมเตรียมสอบ","คุณยังไม่ผ่านเกณฑ์เริ่มเรียนของเกม จึงใช้เวลาพัฒนาความพร้อมก่อน ยังไม่ได้เป็นนักศึกษา",n===0?{knowledge:6,discipline:3,energy:-2}:{knowledge:3,skill:3,m:1500,energy:-3},{youthAdmissionDenied:"yes"}):v);
   }
  }
 }
 return prev.choices(e,st,s);
};
W.story=(e,st)=>{
 if(e.cw==="youth"&&e.youth==="study")return "คุณกำลังเรียน"+(fields[st.youthField]?.[0]||"ในมหาวิทยาลัย")+" ต้องแบ่งเวลาให้บทเรียน การฝึกปฏิบัติ เพื่อน สุขภาพ และรายได้";
 if(e.cw==="youth"&&e.youth==="results")return "ผลสอบของคณะที่คุณสมัครออกแล้ว เลือกยืนยันได้เฉพาะสาขาที่ผ่าน หรือเลือกเตรียมสอบใหม่โดยไม่จำเป็นต้องรับคณะที่ไม่ต้องการ";
 return prev.story(e,st);
};
W.after=(st,old,e,n,ch,item)=>{
 if(e.cw==="train"&&ch.set?.youthAdmissionDenied==="yes"){st.careerPhase=old.careerPhase;st.trainingAge=old.trainingAge;return;}
 prev.after(st,old,e,n,ch,item);
};
})(window);


// Adult work and cross-life arcs; additive to existing career, memory, youth and saves.
(function adultLife(w){
"use strict";
const W=w.CAREER_WORLD,S=w.STORY,P=w.PEOPLE, prior={allowed:W.allowed,choices:W.choices,story:W.story,after:W.after};
const by=Object.fromEntries(S.map(e=>[e.id,e]));
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const stub=Array.from({length:4},()=>c("ตัดสินใจ","ผลจะขึ้นกับสถานการณ์ในเกม"));
const templates=[
["interview",64.9,"การคัดเลือกก่อนเริ่มอาชีพ","คุณผ่านช่วงเตรียมตัวแล้ว แต่ต้องแสดงความพร้อมก่อนเริ่มงาน"],
["jobsearch",59,"ประกาศรับสมัครงาน","คุณพบประกาศงานทั่วไปที่ไม่ต้องมีคุณวุฒิวิชาชีพเฉพาะ จะลองสมัครไหม"],
["trial",59.1,"ช่วงทดลองงาน","นายจ้างตอบรับให้ทดลองทำงาน ยังไม่ได้เป็นพนักงานประจำ"],
["meet",71.1,"คนใหม่ในโลกการทำงาน","คุณได้รู้จักคนที่เกี่ยวข้องกับงาน"],
["task",71.2,"งานที่ต้องพิสูจน์ตัวเอง","มีงานในขอบเขตหน้าที่ที่ต้องจัดการ"],
["result",71.3,"ผลของงานที่รับไว้","ผู้เกี่ยวข้องกลับมาแจ้งผลจากงานครั้งก่อน"],
["progress",71.4,"ความก้าวหน้าในเส้นทางเดิม","คุณมีผลงานให้ทบทวนและเลือกเป้าหมายต่อไป"],
["ethics",71.5,"ข้อเสนอที่ไม่โปร่งใส","มีคนเสนอผลประโยชน์ส่วนตัวแลกกับการละเลยมาตรฐาน"],
["ethicsfollow",71.6,"เรื่องที่ยังไม่จบจากงาน","คนที่เกี่ยวข้องกลับมาขอข้อมูล"],
["reunion",72.1,"ข้อความจากคนที่เคยร่วมงาน","คนที่เคยรู้จักจากงานกลับมาติดต่อ"],
["layoff",72.2,"รายได้ที่ไม่แน่นอน","ที่ทำงานแจ้งว่าต้องลดรายจ่ายและทบทวนการจ้าง"],
["pair",73.1,"คืนที่อยากมีเวลาให้กัน","คนรักชวนคุยเรื่องการใช้เวลาร่วมกัน"],
["pairfollow",73.2,"สิ่งที่เคยตกลงกัน","คนรักชวนคุยเรื่องครั้งก่อน"],
["child",73.3,"วันสำคัญของลูก","ลูกมีงานที่โรงเรียนและอยากให้คุณไปด้วย"],
["childfollow",73.4,"เรื่องเล็กที่ลูกจำได้","ลูกกลับมาพูดถึงเรื่องในอดีต"],
["biz",74.1,"อยากมีกิจการของตัวเองไหม","คุณพบโอกาสทดลองกิจการจากทักษะและตลาดในพื้นที่"],
["bizfollow",74.2,"ลูกค้าจะกลับมาไหม","ถึงเวลาทบทวนผลกิจการที่เริ่มไว้"],
["bizcrisis",74.3,"ต้นทุนที่สูงขึ้น","กิจการเดิมเจอค่าใช้จ่ายเกินแผน"],
["wealth",75.1,"เงินที่เปลี่ยนวิถีชีวิต","คุณมีเงินสำรองพอจะเลือกใช้ชีวิตได้หลายแบบ"],
["ordinary",75.2,"วันหยุดที่ไม่ได้วางแผน","วันนี้ไม่มีเหตุการณ์ใหญ่ คุณมีเวลาทำสิ่งที่อยากทำ"],
["lost",75.3,"ของที่หายไป","คุณพบของมีค่าที่มีข้อมูลเพียงพอให้ตามหาเจ้าของได้"],
["social",76.1,"คนใหม่ในวงสนทนา","กิจกรรมเปิดโอกาสให้รู้จักคนใหม่โดยไม่ต้องเริ่มความรักทันที"],
["socialfollow",76.2,"จะรู้จักกันต่อไหม","คนที่คุณเลือกเปิดใจรู้จักกลับมาชวนพบกันอีกครั้ง"]
];
for(let a=18;a<=99;a++)for(const [k,order,title,story] of templates)S.push({id:`adultx_${k}_${a}`,age:a,order,title,story,cw:"adultx",ax:k,custom:true,choices:stub});
const working=st=>["งานประจำ","งานประจำควบธุรกิจ","ธุรกิจ","อิสระ"].includes(st.mode)&&st.lateWork!=="retired"&&(!!st.profession||!!st.everWorked);
const employed=st=>working(st)&&["งานประจำ","งานประจำควบธุรกิจ"].includes(st.mode);
const partnered=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!!st.partnerName;
const training=st=>["training","foundation"].includes(st.careerPhase)||["student","applying","gap"].includes(st.youthStatus);
const workKey=st=>st.profession||st.mode;
const same=st=>working(st)&&st.axWork===workKey(st)&&st.axMode===st.mode;
const job=st=>W.by[st.profession]?.name||st.mode||"งาน";
const last=(s,k)=>s.history.findLast(x=>x.id.startsWith("adultx_"+k+"_"));
const due=(s,k,a,n)=>!last(s,k)||a-last(s,k).age>=n;
const child=(st,a)=>{const kids=st.children?.filter(x=>a-x.born>=5&&a-x.born<=17)||[];return kids[a%kids.length];};
const name=(st,a)=>["กานต์","ตะวัน","ขิม","พีท","เมษา","นนท์","พิมพ์","บีม","แป้ง","อาร์ต"].find(n=>!st.people?.[n])||"กานต์ (รู้จักเมื่ออายุ "+a+")";
const privateOK=(st,n)=>!!n&&P.privateOK(st,n);
const role=st=>{const g=W.by[st.profession]?.group||"";if(/สุขภาพ|ดูแล/.test(g))return ["ผู้รับบริการ","การดูแลและประสานงาน","ความปลอดภัยและความเป็นส่วนตัว"];if(/กฎหมาย|ยุติธรรม|สาธารณะ/.test(g))return ["ผู้เกี่ยวข้อง","การตรวจสอบข้อมูลและเอกสาร","ความเป็นธรรมและกติกา"];if(/เทคโนโลยี|ดิจิทัล|วิทยาศาสตร์|อุตสาหกรรม/.test(g))return ["ผู้ใช้งานหรือผู้ว่าจ้าง","การแก้ปัญหาและทดสอบงาน","ความถูกต้องและคุณภาพ"];if(/เกษตร|อาหาร|ฝีมือ|ช่าง/.test(g))return ["ลูกค้าหรือผู้รับสินค้า","การจัดวัตถุดิบและตรวจคุณภาพ","ความปลอดภัยและต้นทุน"];if(/บันเทิง|สร้างสรรค์|ศิลปะ|กีฬา/.test(g))return ["ผู้ชม ผู้ร่วมงาน หรือผู้ว่าจ้าง","การซ้อมและสร้างผลงาน","คุณภาพผลงานและข้อตกลง"];if(/การเงิน|ธุรกิจ|สำนักงาน/.test(g))return ["ลูกค้าหรือผู้เกี่ยวข้อง","การตรวจตัวเลขและประสานงาน","ความถูกต้องและความน่าเชื่อถือ"];if(/การบิน|ท่องเที่ยว/.test(g))return ["ผู้โดยสารหรือผู้รับบริการ","การจัดตารางและบริการ","ความปลอดภัยและมาตรฐาน"];return ["ลูกค้าหรือผู้ร่วมงาน","การจัดลำดับงาน","คุณภาพและความรับผิดชอบ"];};
W.allowed=(e,st,s)=>{
 const a=e.age,t=s.stats;
 if(e.cw!=="adultx"){
  if(e.cw==="entry"&&st.axInterviewYear===a&&st.axInterviewJob===e.cwProfession&&st.axInterviewResult!=="offer")return false;
  return prior.allowed(e,st,s);
 }
 switch(e.ax){
 case "interview":{const x=W.by[st.careerPlan],en=by["cw_entry_"+st.careerPlan+"_"+a];return !!x&&!!en&&st.careerPhase==="training"&&a>=st.trainingAge+x.years&&st.youthStatus!=="student"&&prior.allowed(en,st,s)&&W.qualified(x,st,s)&&due(s,"interview",a,1);}
 case "jobsearch":return !working(st)&&!training(st)&&!st.careerPlan&&!st.careerMenu&&!["เกี่ยวข้องอาชญากรรม","ฟื้นตัว","ดูแลครอบครัว"].includes(st.mode)&&due(s,"jobsearch",a,3)&&(a<30||a%3===0);
 case "trial":return st.axTrial===a&&!working(st)&&!training(st);
 case "meet":return working(st)&&(!same(st)||!st.axContact)&&due(s,"meet",a,3);
 case "task":return same(st)&&!st.axTask&&a>st.axStart&&due(s,"task",a,4);
 case "result":return !!st.axTask&&same(st)&&a>st.axTaskAge&&due(s,"result",a,2);
 case "progress":return same(st)&&st.axWins>=2&&t.reliable>=55&&t.skill>=40&&due(s,"progress",a,5);
 case "ethics":return same(st)&&!st.axEthics&&t.career>=25&&due(s,"ethics",a,7);
 case "ethicsfollow":return !!st.axEthics&&a>st.axEthicsAge&&due(s,"ethicsfollow",a,2);
 case "reunion":return privateOK(st,st.axContact)&&a>=st.axStart+5&&due(s,"reunion",a,8);
 case "layoff":return employed(st)&&t.security<35&&t.reliable<55&&a%3===1&&due(s,"layoff",a,7);
 case "pair":return partnered(st)&&(!st.axPair||st.axPartner!==st.partnerName)&&due(s,"pair",a,4);
 case "pairfollow":return partnered(st)&&st.axPartner===st.partnerName&&!!st.axPair&&a>st.axPairAge&&due(s,"pairfollow",a,2);
 case "child":return !!child(st,a)&&!st.axChild&&due(s,"child",a,4);
 case "childfollow":return !!st.axChild&&a>st.axChildAge&&st.children?.some(x=>x.name===st.axChildName&&x.born===st.axChildBorn)&&due(s,"childfollow",a,2);
 case "biz":return !st.lateBusiness&&!training(st)&&t.m>=10000&&t.physical>=30&&a%3===2&&due(s,"biz",a,5);
 case "bizfollow":return !!st.lateBusiness&&!st.bizTrouble&&st.axBizAge!==undefined&&a>st.axBizAge&&due(s,"bizfollow",a,3);
 case "bizcrisis":return !!st.lateBusiness&&!!st.bizTrouble&&st.axBizAge!==undefined&&due(s,"bizcrisis",a,2);
 case "wealth":return t.m>=100000&&a%3===1&&due(s,"wealth",a,6);
 case "ordinary":return a%4===2;
 case "lost":return a%7===3;
 case "social":return !partnered(st)&&!st.axSocial&&a%3===0&&due(s,"social",a,5);
 case "socialfollow":return !partnered(st)&&privateOK(st,st.axSocial)&&a>st.axSocialAge;
 default:return false;
 }};
W.story=(e,st)=>{
 if(e.cw!=="adultx")return prior.story(e,st);
 const r=role(st),j=job(st),p=st.partnerName||"คนรัก";
 switch(e.ax){
 case "interview":return "คุณเตรียมตัวเป็น"+(W.by[st.careerPlan]?.name||"อาชีพที่เลือก")+" มาครบระยะขั้นต่ำตามกติกาเกม ผู้ว่าจ้างหรือหน่วยงานขอประเมินทักษะ วินัย และความพร้อมก่อนเริ่มงาน";
 case "meet":return "ในบทบาท"+j+" คุณได้รู้จัก "+name(st,e.age)+" ผู้เกี่ยวข้องกับงานคนใหม่ อีกฝ่ายแนะนำตัวและเสนอแลกเปลี่ยนวิธีทำงาน";
 case "task":return "ในงาน"+j+" มีโจทย์เรื่อง"+r[1]+" ที่ต้องจัดการ "+r[0]+" ต้องการคำตอบเร็ว แต่คุณยังต้องคำนึงถึง"+r[2];
 case "result":return "หลังงานที่คุณเลือก"+(st.axTask==="rush"?"เร่งส่ง":st.axTask==="care"?"ตรวจให้รอบคอบ":"แบ่งขอบเขต")+" เมื่ออายุ "+st.axTaskAge+" ปี "+r[0]+" กลับมาแจ้งผลและเสนอสิ่งที่ต้องปรับ";
 case "progress":return "ผลงานในบทบาท"+j+" เปิดโอกาสให้รับงานที่ซับซ้อนขึ้นและเจรจาค่าตอบแทน ไม่จำเป็นต้องขึ้นเป็นหัวหน้าหรือบริหารคน";
 case "ethics":return "คนที่เกี่ยวข้องกับงาน"+j+" เสนอเงินพิเศษหากคุณยอมละเลย"+r[2]+" เขาบอกว่าคงไม่มีใครสนใจ";
 case "ethicsfollow":return "เมื่ออายุ "+st.axEthicsAge+" ปี คุณเคย"+(st.axEthics==="accepted"?"รับผลประโยชน์ที่ไม่โปร่งใส":st.axEthics==="reported"?"แจ้งเรื่องตามช่องทาง":"ปฏิเสธข้อเสนอ")+" วันนี้มีผู้เกี่ยวข้องขอข้อมูลเกี่ยวกับเรื่องนั้น";
 case "reunion":return st.axContact+" คนที่รู้จักจากงานเมื่ออายุ "+st.axStart+" ปี ส่งข้อความมาหา ยังจำช่วงที่เคยทำความรู้จักกันได้และอยากแลกเปลี่ยนข่าวชีวิต";
 case "pair":return p+" ชวนวางแผนใช้เวลาร่วมกันในวันว่าง"+(working(st)?" เพราะช่วงนี้คุณมีภาระงาน":"")+" ทั้งคู่มีความต้องการของตัวเอง";
 case "pairfollow":return p+" จำได้ว่าเมื่ออายุ "+st.axPairAge+" ปี คุณ"+(st.axPair==="missed"?"เลื่อนนัดที่เคยตกลง":"พยายามแบ่งเวลาให้กัน")+" วันนี้อยากคุยถึงความสัมพันธ์ในช่วงนี้";
 case "child":{const ch=child(st,e.age);return ch.name+" อายุ "+(e.age-ch.born)+" ปี มีงานที่โรงเรียนและอยากให้คุณไปด้วย"+(working(st)?" แต่คุณต้องจัดเวลาจากงาน":"");}
 case "childfollow":return st.axChildName+" ยังจำวันงานโรงเรียนเมื่อคุณอายุ "+st.axChildAge+" ปี ที่คุณ"+(st.axChild==="missed"?"ไม่ได้ไปตามที่ลูกหวัง":"พยายามจัดเวลาและพูดคุยกับลูก")+" วันนี้ลูกมีเรื่องอยากเล่าให้ฟัง";
 case "bizfollow":return "กิจการที่เริ่มเมื่ออายุ "+st.axBizAge+" ปี เริ่มเห็นรูปแบบลูกค้าและค่าใช้จ่าย คุณจะขยาย รักษาขนาด หรือขายต่อ";
 case "social":return "ในกิจกรรมเปิดสำหรับผู้ใหญ่ คุณได้รู้จัก "+name(st,e.age)+" ทั้งคู่คุยเรื่องความสนใจและชีวิตประจำวัน จะทำความรู้จักต่อไหม";
 case "socialfollow":return st.axSocial+" ที่คุณเลือกทำความรู้จักเมื่ออายุ "+st.axSocialAge+" ปี ชวนพบกันอีกครั้ง ทั้งคู่ยังมีสิทธิเลือกว่าจะเป็นเพื่อนหรือค่อยๆ สานต่อ";
 default:return e.story;
 }};
W.choices=(e,st,s)=>{
 if(e.cw!=="adultx")return prior.choices(e,st,s);
 const t=s.stats,a=e.age,nm=name(st,a);
 const interview=(bonus,label,d)=>{const v=.34*t.skill+.25*t.discipline+.18*t.social+.13*t.knowledge+.1*t.energy-.12*Math.max(0,t.stress-50)+bonus;return c(label,v>=42?"ผ่านการคัดเลือกในเกมและได้รับข้อเสนอ ยังต้องเลือกรับงาน":"ไม่ผ่านครั้งนี้ คุณยังเตรียมตัวแล้วลองใหม่ได้",d,{axInterviewYear:a,axInterviewJob:st.careerPlan,axInterviewResult:v>=42?"offer":"retry"});};
 switch(e.ax){
 case "interview":return [interview(6,"อธิบายความรู้และประสบการณ์ตามจริง",{confidence:2,experience:2}),interview(2,"นำตัวอย่างงานที่เคยฝึกมาแสดง",{skill:2,experience:2}),c("ขอเลื่อนเพื่อเตรียมตัว","ยังไม่เข้ารับการคัดเลือก",{knowledge:3,energy:3},{axInterviewYear:a,axInterviewJob:st.careerPlan,axInterviewResult:"retry"}),c("ทบทวนเส้นทางอาชีพ","ยังไม่เริ่มงานและสามารถเลือกเส้นทางใหม่",{experience:3},{careerPlan:"",careerPhase:"",axInterviewYear:a,axInterviewJob:st.careerPlan,axInterviewResult:"retry"})];
 case "jobsearch":return [c("ส่งใบสมัครและไปพูดคุย","นายจ้างเสนอช่วงทดลองงาน",{experience:2},{axTrial:a}),c("ฝึกทักษะก่อนสมัคร","คุณพัฒนาตนเอง",{skill:4,knowledge:2}),c("ทดลองรับงานอิสระ","คุณเริ่มรับงานเล็กๆ และได้ค่าตอบแทน",{skill:3,m:800},{mode:"อิสระ",everWorked:"ใช่"}),c("ยังไม่พร้อมทำงาน","คุณยังหางานในอนาคตได้",{energy:3,h:2})];
 case "trial":{const pass=(t.discipline+t.skill+t.energy)/3>=38;return [c("ทำตามหน้าที่และขอคำแนะนำ",pass?"ผ่านทดลองงานและได้รับสัญญางานทั่วไป":"ยังไม่ผ่านทดลองงาน ได้ค่าตอบแทนช่วงที่ทำ",{skill:4,m:1200,experience:3},pass?{axTrial:-1,mode:"งานประจำ",everWorked:"ใช่",workRole:"พนักงาน"}:{axTrial:-1}),c("ขอฝึกเพิ่มก่อนประเมิน","ยังไม่ได้เริ่มงานถาวร แต่ได้ฝึก",{skill:5,m:900},{axTrial:-1}),c("ขอหยุดเพราะงานไม่เหมาะ","คุณกลับไปสำรวจงานอื่น",{experience:3},{axTrial:-1}),c("รับค่าตอบแทนแล้วพัก","ยังไม่รับงานต่อ",{m:600,energy:3},{axTrial:-1})];}
 case "meet":{const set={axWork:workKey(st),axMode:st.mode,axStart:a,axContact:nm,axTask:"",axWins:0};return [c("เปิดใจแลกเปลี่ยนวิธีทำงาน","เริ่มสร้างความสัมพันธ์กับ "+nm,{friend:3,network:3},{...set,axBond:"close"}),c("ค่อยๆ ทำความรู้จัก","ทั้งคู่พูดคุยอย่างสุภาพ",{skill:2,network:2},{...set,axBond:"polite"}),c("คุยเฉพาะเรื่องงาน","คุณรักษาขอบเขต",{selfcontrol:2},{...set,axBond:"work"}),c("รักษาระยะและเน้นงานตัวเอง","ไม่ผูกความสัมพันธ์นอกงาน",{discipline:2},{...set,axBond:"distance"})];}
 case "task":return [c("ตรวจรายละเอียดและทำตามมาตรฐาน","ใช้เวลาเพิ่มเพื่อรักษาคุณภาพ",{skill:4,reliable:3,energy:-3},{axTask:"care",axTaskAge:a}),c("ขอความช่วยเหลือและแบ่งขอบเขต","งานเดินหน้าตามข้อตกลง",{problem:4,network:3},{axTask:"scope",axTaskAge:a}),c("เร่งส่งงานทั้งที่ยังตรวจไม่ครบ","งานส่งเร็วแต่มีความเสี่ยง",{career:2,reliable:-3,stress:5},{axTask:"rush",axTaskAge:a}),c("แจ้งว่าไม่สามารถรับเพิ่มได้","รักษาคุณภาพงานเดิม",{h:3,energy:3,reliable:1})];
 case "result":{const good=st.axTask!=="rush"&&t.skill>=30, set={axTask:"",axWins:(st.axWins||0)+(good?1:0)};return [c("รับฟังผลและแก้ส่วนที่ยังมีปัญหา",good?"งานได้รับการยอมรับและเพิ่มความเชื่อมั่น":"งานต้องแก้เพิ่มเติม แต่คุณรับผิดชอบตามจริง",good?{career:5,skill:3,reliable:4,m:1200}:{skill:4,stress:3,reliable:2},set),c("ขอประเมินร่วมกับผู้เกี่ยวข้อง","ได้รับข้อเสนอแนะและปรับวิธีทำงาน",{problem:4,skill:3},set),c("หลบเลี่ยงข้อร้องเรียน","ความน่าเชื่อถือลดลงและเรื่องยังไม่จบ",{reliable:-5,stress:5}),c("ส่งมอบงานตามข้อตกลงแล้วพัก","ปิดงานโดยไม่รับภาระเพิ่ม",{energy:4,h:2},{axTask:""})];}
 case "progress":return [c("เจรจาค่าตอบแทนและรับงานท้าทาย","ผลงานช่วยเพิ่มอำนาจต่อรอง",{career:7,m:2500,stress:3},{axWins:0}),c("พัฒนาฝีมือโดยยังไม่รับภาระเพิ่ม","คุณเพิ่มความชำนาญ",{skill:6,knowledge:3},{axWins:0}),c("รักษารูปแบบงานเดิม","มีเวลาให้ชีวิตส่วนตัว",{h:4,energy:4},{axWins:0}),c("สำรวจทางเลือกอื่นก่อน","ยังไม่ได้ลาออกหรือเปลี่ยนอาชีพ",{experience:3,confidence:2},{axWins:0})];
 case "ethics":return [c("ปฏิเสธข้อเสนอ","รักษามาตรฐานโดยไม่รับผลประโยชน์",{i:4,reliable:3},{axEthics:"refused",axEthicsAge:a}),c("แจ้งเรื่องตามช่องทางที่เหมาะสม","เรื่องเข้าสู่กระบวนการตรวจสอบ",{responsibility:4,fair:4,stress:2},{axEthics:"reported",axEthicsAge:a}),c("รับเงินและยอมให้ข้อยกเว้น","ได้เงินแต่เกิดความเสี่ยงทางความน่าเชื่อถือ",{m:9000,i:-8,fair:-5},{axEthics:"accepted",axEthicsAge:a}),c("ถอนตัวโดยไม่รับเงิน","เว้นระยะจากข้อเสนอโดยยังไม่แจ้งเรื่อง",{selfcontrol:3},{axEthics:"refused",axEthicsAge:a})];
 case "ethicsfollow":return [c("เล่าข้อเท็จจริงและยอมรับส่วนของตัวเอง",st.axEthics==="accepted"?"คืนผลประโยชน์และรับผลของการกระทำ":"ให้ข้อมูลที่ตรวจสอบได้",st.axEthics==="accepted"?{m:-9000,career:-4,i:3,reliable:-5}:{i:3,reliable:4},{axEthics:""}),c("ขอคนกลางช่วยตรวจสอบ","ให้ความร่วมมือกับกระบวนการ",{problem:3,stress:2},{axEthics:""}),c("ไม่ให้ความร่วมมือ","ความน่าเชื่อถือเสียหาย เรื่องยังไม่จบ",{reliable:-6,stress:6}),c("ขอจัดการตามขั้นตอนที่เป็นธรรม","เรื่องถูกส่งให้ผู้เกี่ยวข้องพิจารณา",st.axEthics==="accepted"?{career:-5,reliable:-4,stress:3}:{fair:3,reliable:2},{axEthics:""})];
 case "reunion":return [c("นัดคุยและถามสารทุกข์สุกดิบ","รักษามิตรภาพจากอดีต",{friend:5,network:3,h:3}),c("คุยโทรศัพท์ตามสะดวก","ได้แลกเปลี่ยนข่าวชีวิต",{friend:3,h:2}),c("คุยเฉพาะงาน","อีกฝ่ายรับรู้ขอบเขต",{selfcontrol:2},{axBond:"work"}),c("บอกว่าไม่อยากติดต่อส่วนตัว","ยุติการติดต่อส่วนตัวชัดเจน",{selfcontrol:3},{axBond:"distance"})];
 case "layoff":return [c("เจรจาปรับหน้าที่และภาระ","ยังมีงานแต่ต้องรักษาผลงาน",{career:-2,security:3}),c("ยอมรับการยุติการจ้างและตั้งหลัก","ออกจากงานโดยเก็บประสบการณ์ไว้",{m:3000,career:-6,stress:5},{profession:"",mode:"พักที่บ้าน",careerPhase:"",careerPlan:"",axTask:"",leadRole:"",projectTeam:false}),c("ขอเวลาหางานใหม่","เริ่มสำรวจทางเลือก",{network:3,experience:3}),c("ทำงานตามข้อตกลงเดิมจนกว่าจะมีข้อสรุป","รักษาสิทธิและยังไม่ออกจากงาน",{responsibility:3,stress:2})];
 case "pair":{const set={axPartner:st.partnerName,axPairAge:a};return [c("จัดเวลาร่วมกันและตกลงเรื่องภาระ","ได้เวลาที่มีความหมาย",{partner:5,h:3},{...set,axPair:"kept"}),c("ทำกิจกรรมง่ายๆ ตามกำลัง","ไม่ต้องใช้เงินมากเพื่อมีความสุข",{partner:4,h:4},{...set,axPair:"kept"}),c("เลื่อนนัดเพราะมีสิ่งอื่นที่ต้องทำ","อีกฝ่ายผิดหวังและอยากคุยอีกครั้ง",{partner:-4,stress:2},{...set,axPair:"missed"}),c("บอกตรงๆ ว่าอยากพักและนัดใหม่","สื่อสารความต้องการโดยไม่บังคับกัน",{energy:4,partner:1},{...set,axPair:"kept"})];}
 case "pairfollow":return [c("รับฟังและปรับข้อตกลงร่วมกัน","ทั้งคู่ได้พื้นที่พูดคุย",{partner:5,stress:-3},{axPair:""}),c("กลับไปทำสิ่งที่เคยสนุกด้วยกัน","สร้างความทรงจำใหม่",{h:5,partner:4},{axPair:""}),c("ไม่อยากคุยเรื่องเดิม","อีกฝ่ายยังรู้สึกไม่ถูกรับฟัง",{partner:-4,stress:4}),c("ขอเวลาคิด","ยังไม่สรุปเรื่องความสัมพันธ์",{patience:3,energy:2},{axPair:""})];
 case "child":{const ch=child(st,a),set={axChildName:ch.name,axChildBorn:ch.born,axChildAge:a};return [c("หาเวลาไปร่วมงาน","ลูกเห็นว่าคุณให้ความสำคัญ",{child:5,h:3,energy:-2},{...set,axChild:"kept"}),c("แจ้งข้อจำกัดและตกลงเวลาอื่น","รับฟังลูกและยังรักษาภาระอื่น",{child:3,responsibility:3},{...set,axChild:"kept"}),c("ไม่ไปและให้ลูกจัดการเอง","ลูกผิดหวังและอยากให้เข้าใจ",{child:-4},{...set,axChild:"missed"}),c("ชวนคนที่ลูกไว้ใจไปด้วยและคุยหลังงาน","ลูกยังมีคนสนับสนุน",{child:2,problem:2},{...set,axChild:"kept"})];}
 case "childfollow":return [c("ฟังลูกและยอมรับความรู้สึก","ลูกได้เล่าเรื่องที่สำคัญสำหรับตัวเอง",{child:5,e:3},{axChild:""}),c("ทำกิจกรรมที่ลูกเลือก","สร้างความทรงจำร่วมกัน",{child:4,h:3},{axChild:""}),c("บอกว่าเรื่องนั้นผ่านไปแล้ว","ลูกยังรู้สึกไม่ถูกเข้าใจ",{child:-4,stress:2}),c("ถามว่าครั้งต่อไปอยากให้ช่วยอย่างไร","ลูกมีส่วนเลือกข้อตกลง",{child:4,responsibility:2},{axChild:""})];
 case "biz":return [c("ทดลองกิจการเล็กด้วยทุน 10,000 บาท","เริ่มกิจการจริงและมีต้นทุนที่ต้องติดตาม",{m:-10000,assets:5000,skill:3},{lateBusiness:1,bizTrouble:false,axBizAge:a,axBizAsset:5000}),t.m>=50000?c("ลงทุนกิจการที่มีผู้ช่วย 50,000 บาท","เริ่มกิจการใหญ่ขึ้นและมีภาระบริหาร",{m:-50000,assets:30000,career:3},{lateBusiness:2,bizTrouble:false,axBizAge:a,axBizAsset:30000}):c("ศึกษากิจการขนาดใหญ่ก่อน","ยังไม่ลงทุน",{knowledge:4}),c("สำรวจตลาดและหารือกับคนที่ไว้ใจ","ยังไม่ผูกเงินทุน",{knowledge:4,network:2}),c("ไม่เปิดกิจการตอนนี้","รักษาเส้นทางเดิม",{h:3,energy:2})];
 case "bizfollow":{const good=t.skill>=45&&t.reliable>=50;return [t.m>=6000&&st.lateBusiness<4?c("ขยายกิจการด้วยทุน 6,000 บาท",good?"กิจการรับลูกค้าเพิ่มได้":"ภาระเพิ่มแต่ระบบยังไม่พร้อม",{m:-6000,assets:3000,stress:3},{lateBusiness:st.lateBusiness+1,bizTrouble:!good,axBizAsset:(st.axBizAsset||0)+3000}):c("สำรวจการขยายโดยยังไม่ลงทุน","รักษาเงินสดและขนาดกิจการ",{knowledge:3}),c("คงขนาดและปรับคุณภาพ","รักษาฐานลูกค้าและบริหารต้นทุน",{reliable:4,skill:3}),c("ทบทวนค่าใช้จ่ายและหาคนช่วย","ลดภาระโดยยังไม่ขยาย",{problem:4,energy:2}),c("ขายกิจการตามมูลค่าในเกม","จบภาระและได้เงินจากการขาย",{m:st.axBizAsset||0,assets:-(st.axBizAsset||0)},{lateBusiness:0,bizTrouble:false,axBizAsset:0})];}
 case "bizcrisis":return [c("ลดขนาดและทบทวนบัญชี","ปรับภาระและแก้ต้นทุน",{problem:4,security:3},{lateBusiness:Math.max(1,st.lateBusiness-1),bizTrouble:false}),t.m>=12000?c("ลงทุนแก้ระบบ 12,000 บาท","ใช้เงินสำรองแก้ปัญหา",{m:-12000,skill:4},{bizTrouble:false}):c("เจรจาปรับแผนกับผู้เกี่ยวข้อง","ยังไม่ได้เติมเงิน",{problem:3,stress:2}),c("ประคองกิจการและยังไม่ตัดสินใจ","ปัญหาค้างและความเครียดเพิ่ม",{stress:5}),c("ปิดกิจการและขายทรัพย์สินที่เหลือ","จบภาระกิจการ",{m:Math.floor((st.axBizAsset||0)/2),assets:-(st.axBizAsset||0)},{lateBusiness:0,bizTrouble:false,axBizAsset:0})];
 case "wealth":return [c("กันเงินสำรองเพื่ออนาคต","เพิ่มเงินออมและยังมีเงินสดเหลือ",{m:-30000,savings:30000,security:4}),c("จัดทริปพักผ่อน 15,000 บาท","ใช้เงินเพื่อประสบการณ์ที่อยากได้",{m:-15000,h:6,experience:3}),c("ช่วยคนที่ต้องการผ่านช่องทางตรวจสอบได้","แบ่งทรัพยากรให้คนอื่นตามกำลัง",{m:-10000,e:5}),c("ยังไม่ซื้อหรือลงทุนเพิ่ม","รักษาอิสระทางการเงิน",{selfcontrol:2,security:2})];
 case "ordinary":return [c("พักและทำงานอดิเรก","ใช้เวลาของตัวเอง",{h:5,energy:4}),c("เดินเล่นและกินของอร่อย","พักและเปลี่ยนบรรยากาศ",{h:4,physical:2}),c("ชวนคนรู้จักที่สะดวกมาพบ","เปิดโอกาสให้มีช่วงเวลาดีๆ",{social:3,friend:2,h:2}),c("ทำสิ่งที่ค้างแล้วนอนให้เต็มที่","จัดการชีวิตและได้พัก",{discipline:3,energy:3})];
 case "lost":return [c("ส่งคืนตามข้อมูลเจ้าของ","เจ้าของได้รับของคืนและขอบคุณ",{i:4,e:2}),c("ฝากกับจุดรับของหาย","ช่วยให้ของกลับไปถึงเจ้าของ",{responsibility:3}),c("เก็บไว้โดยไม่พยายามคืน","ได้ของที่ไม่ใช่ของตนและเสียความซื่อตรง",{m:500,i:-5}),c("แจ้งผู้ดูแลพื้นที่","ส่งต่อให้คนที่รับผิดชอบ",{responsibility:2})];
 case "social":return [c("แลกช่องทางติดต่อและค่อยๆ รู้จัก","เปิดใจรู้จัก "+nm+" โดยยังไม่ได้คบ",{social:4,friend:2},{axSocial:nm,axSocialAge:a,axSocialBond:"open"}),c("อยากเป็นเพื่อนเท่านั้น","รู้จักกันในขอบเขตเพื่อน",{friend:3},{axSocial:nm,axSocialAge:a,axSocialBond:"friend"}),c("คุยตามมารยาทแล้วแยกย้าย","ไม่จำเป็นต้องเริ่มความสัมพันธ์",{selfcontrol:2}),c("ไม่อยากรู้จักคนใหม่ตอนนี้","รักษาพื้นที่ส่วนตัว",{h:2,energy:2})];
 case "socialfollow":return [st.axSocialBond==="open"?c("คุยความรู้สึกและลองคบเมื่อทั้งคู่ตกลง","ทั้งคู่ตกลงเริ่มคบอย่างสมัครใจ",{partner:5,h:3},{relationship:"คบกัน",partnerName:st.axSocial,pastRomance:"ใช่",axSocial:""}):c("รักษาความสัมพันธ์แบบเพื่อน","รักษาขอบเขตที่ตกลงกัน",{friend:4},{axSocial:""}),c("ขอเป็นเพื่อนต่อไป","ไม่จำเป็นต้องเป็นคนรัก",{friend:4},{axSocial:""}),c("บอกว่ายังไม่พร้อมพบกัน","ยังไม่ต้องตัดสินใจ",{patience:2},{axSocial:""}),c("ขอไม่สานต่อ","สื่อสารขอบเขตโดยไม่สร้างความหวัง",{selfcontrol:3},{axSocial:""})];
 default:return e.choices;
 }};
W.after=(st,old,e,n,ch,item)=>{
 prior.after(st,old,e,n,ch,item);
 if(e.cw!=="adultx")return;
 const person=(nm,b)=>{if(!nm)return;st.people[nm]={...(st.people[nm]||{}),feeling:b==="distance"?"เว้นระยะ":b==="close"||b==="open"?"รู้สึกดี":"เฉยๆ",boundary:b==="work"?"งานเท่านั้น":b==="distance"?"ไม่ติดต่อ":b==="friend"?"เพื่อนเท่านั้น":b==="polite"?"ยังไม่สนิท":"เปิดใจ"};};
 if(e.ax==="meet")person(st.axContact,st.axBond);
 if(e.ax==="reunion"&&n>=2)person(old.axContact,n===2?"work":"distance");
 if(e.ax==="social"&&st.axSocial)person(st.axSocial,st.axSocialBond);
 if(e.ax==="socialfollow"&&old.axSocial&&n>=1)person(old.axSocial,n===1?"friend":n===3?"distance":"polite");
};
})(window);


// Concurrent life stories and individual long memories.
(function crossLife(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,S=w.STORY;
const prev={allowed:W.allowed,choices:W.choices,story:W.story,after:W.after};
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const stub=Array.from({length:4},()=>c("ตัดสินใจ","ผลจะขึ้นกับสถานการณ์ในเกม"));
const working=st=>["งานประจำ","งานประจำควบธุรกิจ","ธุรกิจ","อิสระ"].includes(st.mode)&&st.lateWork!=="retired"&&(!!st.profession||!!st.everWorked);
const partner=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!!st.partnerName;
const last=(s,k)=>s.history.findLast(x=>x.id.startsWith("crossx_"+k+"_"));
const due=(s,k,a,n)=>!last(s,k)||a-last(s,k).age>=n;
const job=st=>W.by[st.profession]?.name||st.mode||"งาน";
const kids=(st,a)=>st.children?.filter(x=>a-x.born>=5&&a-x.born<=17)||[];
const schoolChild=(st,a)=>{const v=kids(st,a);return v[a%v.length];};
const memory=(st,a)=> (st.axMemories||[]).find(m=>a-m.age>=10&&!m.revisited&&(m.kind==="child"?st.children?.some(x=>x.name===m.name&&x.born===m.born):m.kind==="partner"?partner(st)&&st.partnerName===m.name:P.privateOK(st,m.name)));
const parentName=st=>!st.parentsLost?.mother?"แม่":!st.parentsLost?.father?"พ่อ":"";
const goodFriend=st=>Object.keys(st.people||{}).find(n=>n!==st.partnerName&&P.privateOK(st,n)&&st.people[n]?.feeling==="รู้สึกดี");
const templates=[
["collision",72.6,"สองเรื่องสำคัญในวันเดียวกัน","งานและครอบครัวต้องการเวลาของคุณพร้อมกัน"],
["collisionfollow",72.7,"สิ่งที่เกิดขึ้นหลังวันนั้น","ลูกและผู้เล่นมีเรื่องที่ยังคุยกันไม่จบ"],
["burnout",72.8,"วันที่ร่างกายเริ่มส่งสัญญาณ","งานต่อเนื่องทำให้เหนื่อยจนการใช้ชีวิตเริ่มเปลี่ยน"],
["recovery",72.9,"ลองทบทวนวิธีใช้ชีวิต","ถึงเวลาตรวจผลจากสิ่งที่เคยเลือก"],
["parent",73.6,"เวลาที่ให้พ่อแม่","ผู้ปกครองที่ยังมีชีวิตอยากใช้เวลาร่วมกับคุณ"],
["friend",73.7,"คำขอจากคนที่เคยรู้จัก","เพื่อนที่คุณเคยสนิทติดต่อมาขอความช่วยเหลือ"],
["friendfollow",73.8,"ข่าวจากเพื่อนคนเดิม","คนที่เคยขอความช่วยเหลือกลับมาเล่าเรื่อง"],
["intimacy",73.9,"ชีวิตคู่ในวันที่ความต้องการต่างกัน","คนรักอยากคุยเรื่องความใกล้ชิดและความสบายใจของทั้งสองฝ่าย"],
["weekend",75.5,"ทริปที่ยังไม่ได้ตกลง","มีคำชวนไปเที่ยวช่วงวันหยุด คุณยังมีสิทธิเลือก"],
["trip",75.6,"วันเดินทางที่เลือกเอง","หลังตกลงนัดกันไว้ ถึงวันเดินทางที่วางแผนไว้"],
["pet",75.7,"อีกหนึ่งชีวิตที่ต้องดูแล","มีคนชวนรับเลี้ยงสัตว์ คุณจะประเมินความพร้อมอย่างไร"],
["petfollow",75.8,"สมาชิกตัวเล็กในบ้าน","สัตว์ที่คุณรับเลี้ยงต้องการการดูแลต่อเนื่อง"],
["memory",79.1,"เรื่องเล็กที่ผ่านมานานแล้ว","คนที่คุณเคยทำความรู้จักหรือครอบครัวนึกถึงเรื่องเก่า"]
];
for(let a=20;a<=99;a++)for(const [k,order,title,story] of templates)S.push({id:`crossx_${k}_${a}`,age:a,order,title,story,cw:"crossx",crossx:k,custom:true,choices:stub});
W.allowed=(e,st,s)=>{
 if(e.cw!=="crossx")return prev.allowed(e,st,s);
 const a=e.age,t=s.stats;
 switch(e.crossx){
 case "collision":return working(st)&&!!schoolChild(st,a)&&!st.cxConflict&&t.career>=30&&due(s,"collision",a,6)&&a%3===0;
 case "collisionfollow":return !!st.cxConflict&&a>st.cxConflictAge&&st.children?.some(x=>x.name===st.cxChild&&x.born===st.cxChildBorn)&&due(s,"collisionfollow",a,2);
 case "burnout":return working(st)&&!st.cxHealth&&(t.stress>=65||t.energy<=30)&&due(s,"burnout",a,4);
 case "recovery":return !!st.cxHealth&&a>st.cxHealthAge&&due(s,"recovery",a,2);
 case "parent":return !!parentName(st)&&a%5===1&&due(s,"parent",a,5);
 case "friend":return !!goodFriend(st)&&!st.cxFriend&&a%4===3&&due(s,"friend",a,6);
 case "friendfollow":return !!st.cxFriend&&a>st.cxFriendAge&&P.privateOK(st,st.cxFriend)&&due(s,"friendfollow",a,2);
 case "intimacy":return partner(st)&&a%5===2&&due(s,"intimacy",a,5);
 case "weekend":return !st.cxTrip&&a%5===3&&due(s,"weekend",a,5);
 case "trip":return !!st.cxTrip&&a>=st.cxTripAge&&(!st.cxTripPartner||partner(st)&&st.partnerName===st.cxTripPartner);
 case "pet":return !st.cxPet&&a%8===4&&due(s,"pet",a,8);
 case "petfollow":return !!st.cxPet&&a>st.cxPetAge&&a-st.cxPetAge<=15&&due(s,"petfollow",a,4);
 case "memory":return !!memory(st,a)&&a%3===0&&due(s,"memory",a,5);
 default:return false;
 }};
W.story=(e,st)=>{
 if(e.cw!=="crossx")return prev.story(e,st);
 switch(e.crossx){
 case "collision":return "ในงาน"+job(st)+" มีงานเร่งที่ผู้เกี่ยวข้องต้องการให้คุณช่วย ขณะเดียวกัน "+schoolChild(st,e.age).name+" มีงานสำคัญที่โรงเรียนและขอให้คุณไป คุณยังไม่ได้ตกลงว่าจะทำสิ่งใด";
 case "collisionfollow":return st.cxChild+" กลับมาพูดถึงวันที่งานชนกับงานโรงเรียนเมื่อคุณอายุ "+st.cxConflictAge+" ปี เขาจำได้ว่า"+(st.cxConflict==="work"?"คุณเลือกอยู่ทำงานและพลาดกิจกรรม":"คุณพยายามจัดเวลาให้เขา")+" และอยากให้คุณฟังความรู้สึก";
 case "burnout":return "คุณมีภาระจากงาน"+job(st)+" ต่อเนื่อง ช่วงนี้พักไม่เต็มที่และมีความเหนื่อยสะสม คุณยังไม่ได้รับการวินิจฉัยโรค จะจัดการชีวิตอย่างไร";
 case "recovery":return "หลังเลือกจัดการความเหนื่อยเมื่ออายุ "+st.cxHealthAge+" ปี คุณมีโอกาสทบทวนว่าการเปลี่ยนวิถีชีวิตที่ผ่านมาเป็นอย่างไร";
 case "parent":return parentName(st)+" ชวนกินข้าวและอยากคุยเรื่องชีวิตที่ผ่านมา"+(working(st)?" แต่คุณยังมีภาระจากงาน":"")+" คุณจะใช้เวลาที่มีอย่างไร";
 case "friend":return goodFriend(st)+" ที่คุณเคยเปิดใจรู้จัก ติดต่อมาบอกว่ามีปัญหาการเงินและอยากขอให้ช่วยคิดทางออก ไม่จำเป็นต้องให้เงิน";
 case "friendfollow":return st.cxFriend+" ที่เคยติดต่อเมื่อคุณอายุ "+st.cxFriendAge+" ปี กลับมาเล่าความคืบหน้าเรื่องเงิน"+(st.cxFriendLoan?" และพูดถึงเงินที่ยืมคุณไว้":"")+" คุณอยากจัดการความสัมพันธ์อย่างไร";
 case "intimacy":return st.partnerName+" อยากคุยเรื่องความใกล้ชิด ทั้งสองคนมีสิทธิแสดงความต้องการหรือปฏิเสธโดยไม่ถูกกดดัน คุณจะรับฟังและสื่อสารอย่างไร";
 case "weekend":return (partner(st)?st.partnerName:"กลุ่มคนรู้จัก")+" ชวนเที่ยวช่วงวันหยุด ยังไม่ได้จองอะไร และแต่ละคนมีเวลาและงบต่างกัน";
 case "trip":return "หลังเลือกไปเที่ยวในปีนี้ คุณ"+(st.cxTripPartner?"กับ "+st.cxTripPartner:"และกลุ่มคนรู้จัก")+" พบว่าฝนทำให้แผนเดิมต้องเปลี่ยน แต่ยังมีทางเลือกอื่น";
 case "petfollow":return "สัตว์ที่คุณรับเลี้ยงเมื่ออายุ "+st.cxPetAge+" ปี ต้องการการดูแลตามวัยและมีค่าใช้จ่ายในเกม คุณจะจัดการอย่างไร";
 case "memory":{const m=memory(st,e.age);return m.name+" กลับมาพูดถึงเรื่องเมื่อคุณอายุ "+m.age+" ปี — "+m.text+" ผ่านมาหลายปีแล้ว คุณอยากพูดอะไรกับเขา";}
 default:return e.story;
 }};
W.choices=(e,st,s)=>{
 if(e.cw!=="crossx")return prev.choices(e,st,s);
 const a=e.age,t=s.stats;
 switch(e.crossx){
 case "collision":{const ch=schoolChild(st,a),set={cxChild:ch.name,cxChildBorn:ch.born,cxConflictAge:a};return [c("รับงานเต็มเวลาและแจ้งลูกว่าไปไม่ได้","งานเดินหน้า แต่ลูกผิดหวัง",{career:4,child:-5,stress:3},{...set,cxConflict:"work"}),c("เจรจาขอบเขตงานและจัดเวลาไปหาลูก","คุณพยายามรักษาทั้งสองหน้าที่",{problem:4,child:4,energy:-3},{...set,cxConflict:"family"}),c("ปฏิเสธงานเพิ่มและไปงานลูก","ลูกได้เห็นคุณ แต่โอกาสงานครั้งนี้ผ่านไป",{child:5,career:-1,h:3},{...set,cxConflict:"family"}),c("ขอผู้เกี่ยวข้องช่วยแบ่งงานและคุยกับลูก","ทุกฝ่ายรับรู้ข้อจำกัดของคุณ",{network:3,child:3,problem:3},{...set,cxConflict:"family"})];}
 case "collisionfollow":return [c("ฟังและยอมรับว่าลูกมีความรู้สึกของตัวเอง","ลูกได้พูดในสิ่งที่ค้างใจ",{child:5,e:3},{cxConflict:""}),c("ชวนลูกทำสิ่งที่เขาสนใจ","ทั้งคู่สร้างความทรงจำใหม่",{child:4,h:3},{cxConflict:""}),c("บอกว่าหน้าที่สำคัญกว่า","ลูกยังมีความรู้สึกที่ไม่ได้รับการรับฟัง",{child:-4,stress:2}),c("อธิบายข้อจำกัดและวางแผนครั้งหน้า","ได้ข้อตกลงที่ชัดเจนขึ้น",{child:3,responsibility:3},{cxConflict:""})];
 case "burnout":return [c("จัดเวลาพักและปรึกษาผู้เชี่ยวชาญตามความจำเป็น","เริ่มดูแลตัวเองและปรับภาระ",{energy:10,stress:-9,physical:3},{cxHealth:"care",cxHealthAge:a}),c("คุยกับผู้เกี่ยวข้องเพื่อปรับงาน","คุณลดแรงกดดันโดยยังไม่ลาออก",{energy:6,stress:-6,problem:3},{cxHealth:"care",cxHealthAge:a}),c("ฝืนทำงานต่อเหมือนเดิม","คุณยังรักษางานไว้ แต่ความล้าสะสม",{career:2,physical:-5,energy:-8,stress:8},{cxHealth:"ignore",cxHealthAge:a}),c("ลดงานเพิ่มเพื่อให้ชีวิตมีเวลาพัก","คุณให้ความสำคัญกับสุขภาพ",{h:4,energy:8,career:-1},{cxHealth:"care",cxHealthAge:a})];
 case "recovery":return [c("รักษาการพักและปรับภาระต่อเนื่อง",st.cxHealth==="ignore"?"คุณเริ่มเปลี่ยนจากการฝืนตัวเอง":"คุณรักษาสมดุลที่เริ่มสร้าง",{physical:4,energy:8,stress:-7},{cxHealth:""}),c("ขอคำแนะนำและทบทวนแผน","คุณได้แนวทางดูแลตัวเองเพิ่ม",{knowledge:3,energy:5,stress:-4},{cxHealth:""}),c("กลับไปใช้ชีวิตหนักเหมือนเดิม","ความเหนื่อยอาจยังไม่ลด",{physical:-3,stress:6}),c("แบ่งเวลาให้ชีวิตนอกงาน","คุณมีพื้นที่ให้เรื่องอื่น",{h:5,energy:5},{cxHealth:""})];
 case "parent":{const who=parentName(st),k=who==="แม่"?"mother":"father";return [c("ไปกินข้าวและฟังเรื่องที่ท่านอยากเล่า","ได้ใช้เวลาที่มีร่วมกัน",{[k]:5,h:3}),c("ชวนทำกิจกรรมที่ท่านชอบ","สร้างความทรงจำอีกครั้ง",{[k]:4,e:2}),c("โทรคุยและนัดวันอื่นตามกำลัง","คุณยังรักษาการติดต่อ",{[k]:2}),c("ขอเลื่อนและบอกเหตุผลตามตรง","คุณจัดลำดับภาระตามความพร้อม",{discipline:2})];}
 case "friend":{const nm=goodFriend(st),set={cxFriend:nm,cxFriendAge:a};return [c("ฟังและช่วยวางแผนโดยไม่ให้เงิน","เพื่อนได้คนรับฟังและข้อมูลเพิ่ม",{friend:4,problem:3},{...set,cxFriendLoan:0}),t.m>=3000?c("ให้ยืม 3,000 บาทตามข้อตกลง","คุณช่วยตามกำลังและมีเรื่องต้องติดตาม",{m:-3000,friend:3},{...set,cxFriendLoan:3000}):c("เสนอช่วยหาทางเลือกที่ไม่ต้องใช้เงิน","คุณยังช่วยได้แม้เงินสดไม่พอ",{friend:3,problem:2},{...set,cxFriendLoan:0}),c("บอกว่าช่วยเรื่องนี้ไม่ไหว","คุณตั้งขอบเขตโดยไม่ตำหนิเพื่อน",{selfcontrol:3},{...set,cxFriendLoan:0}),c("ขอไม่ยุ่งเรื่องการเงินของเขา","คุณรักษาระยะเรื่องนี้",{selfcontrol:2})];}
 case "friendfollow":{const l=st.cxFriendLoan||0;return [c(l?"คุยเรื่องกำหนดคืนเงิน":"รับฟังข่าวและให้กำลังใจ",l?"เพื่อนคืนเงินครึ่งหนึ่งและตกลงเรื่องที่เหลือในเกม":"เพื่อนได้เล่าข่าวชีวิตให้คุณฟัง",l?{m:Math.floor(l/2),friend:2}:{friend:4,h:2},{cxFriend:l>1?st.cxFriend:"",cxFriendLoan:Math.ceil(l/2),cxFriendAge:a}),c("ไม่เร่งและคุยตามความพร้อม","คุณเลือกให้ความสำคัญกับความสัมพันธ์",{friend:3,patience:2}),c("ขอปิดเรื่องนี้ตามขอบเขตที่ตกลง","คุณไม่อยากให้เรื่องเงินครอบงำความสัมพันธ์",{selfcontrol:3},{cxFriend:"",cxFriendLoan:0}),c("บอกว่าไม่อยากติดต่อแล้ว","คุณเว้นระยะและไม่ตามเรื่องส่วนตัวต่อ",{selfcontrol:3},{cxFriend:"",cxFriendLoan:0})];}
 case "intimacy":return [c("ฟังความต้องการของกันและกันโดยไม่กดดัน","ทั้งคู่เข้าใจขอบเขตและความยินยอม",{partner:5,responsibility:3}),c("ชวนคุยเรื่องการป้องกันและสุขภาพทางเพศ","ทั้งคู่มีข้อมูลประกอบการตัดสินใจ",{knowledge:3,partner:3}),c("บอกว่าช่วงนี้ยังไม่พร้อมและนัดคุยใหม่","คุณสื่อสารความต้องการของตัวเอง",{selfcontrol:3,partner:1}),c("ใช้เวลาทำกิจกรรมที่ทั้งคู่สบายใจ","ความใกล้ชิดไม่จำเป็นต้องมีเพศสัมพันธ์เสมอไป",{h:4,partner:3})];
 case "weekend":return [t.m>=1500?c("ตกลงไปและกันงบ 1,500 บาท","คุณตกลงแผนเดินทางในปีนี้",{m:-1500,h:3},{cxTrip:"yes",cxTripAge:a,cxTripPartner:partner(st)?st.partnerName:""}):c("เสนอเที่ยวใกล้บ้านที่ไม่เสียเงิน","คุณเสนอแผนที่เหมาะกับงบ",{h:3,friend:2}),c("ชวนทำกิจกรรมในพื้นที่แทน","ได้พบกันโดยไม่ต้องเดินทางไกล",{h:3,friend:2}),c("ขอเก็บเงินสำหรับเรื่องอื่น","คุณรักษาเป้าหมายการเงิน",{security:3}),c("ขอพักอยู่บ้าน","คุณได้เวลาส่วนตัว",{energy:5,h:2})];
 case "trip":return [c("เปลี่ยนเป็นกิจกรรมในร่ม","ทุกคนได้สนุกแม้แผนเปลี่ยน",{h:5,experience:3},{cxTrip:""}),c("รอให้ฝนหยุดและคุยกัน","คุณให้ความสำคัญกับความปลอดภัย",{problem:3,friend:2},{cxTrip:""}),c("กลับบ้านก่อนตามความสะดวก","คุณตัดสินใจตามกำลัง",{energy:3},{cxTrip:""}),c("หารือแผนใหม่กับทุกคน","ได้ข้อตกลงร่วมกัน",{problem:4,social:2},{cxTrip:""})];
 case "pet":return [t.m>=2000?c("รับเลี้ยงหลังเตรียมพื้นที่และงบ 2,000 บาท","คุณรับภาระดูแลสัตว์อย่างตั้งใจ",{m:-2000,h:4,responsibility:3},{cxPet:"yes",cxPetAge:a}):c("หาข้อมูลและรอจนพร้อม","คุณยังไม่รับเลี้ยง",{knowledge:3}),c("ช่วยหาบ้านที่เหมาะสมให้สัตว์","คุณช่วยโดยไม่รับภาระเกินกำลัง",{e:3,problem:2}),c("อาสาช่วยเป็นบางครั้ง","คุณได้ช่วยตามเวลาที่มี",{e:3,h:2}),c("ยังไม่พร้อมดูแลสัตว์","คุณไม่รับภาระที่ไม่เหมาะกับชีวิต",{selfcontrol:3})];
 case "petfollow":return [t.m>=1000?c("จัดงบตรวจสุขภาพและดูแลตามวัย","สัตว์ได้รับการดูแลตามความพร้อม",{m:-1000,h:4,responsibility:3}):c("ขอคำแนะนำเรื่องการดูแลตามงบ","คุณหาทางดูแลอย่างรับผิดชอบ",{problem:3}),c("จัดเวลาเล่นและดูแลทุกวัน","คุณให้เวลาและความเอาใจใส่",{h:4,responsibility:3}),c("ขอคนที่ไว้ใจช่วยดูแลเมื่อไม่ว่าง","คุณจัดภาระให้เหมาะกับชีวิต",{problem:3,energy:2}),c("หาผู้รับเลี้ยงใหม่ที่เหมาะสม","คุณส่งต่อความรับผิดชอบโดยคำนึงถึงสวัสดิภาพสัตว์",{e:3,stress:2},{cxPet:""})];
 case "memory":{const m=memory(st,a);return [c("ฟังเรื่องที่เขาจำได้และเล่าความรู้สึกของตัวเอง","ทั้งคู่ได้กลับมามองชีวิตที่ผ่านมา",{h:5,e:3},{cxRecall:m.id}),c("ขอบคุณที่ยังจำกันได้","คุณเห็นคุณค่าของช่วงเวลาที่ผ่านมา",{h:4,friend:3},{cxRecall:m.id}),c("ยอมรับว่าบางสิ่งในอดีตยังอยากแก้ไข","คุณรับฟังโดยไม่พยายามลบอดีต",{responsibility:4,e:3},{cxRecall:m.id}),c("ขอไม่ย้อนเรื่องเก่า","คุณเลือกขอบเขตการพูดคุยของตัวเอง",{selfcontrol:3},{cxRecall:m.id})];}
 default:return e.choices;
 }};
W.after=(st,old,e,n,ch,item)=>{
 prev.after(st,old,e,n,ch,item);
 // Archive compact individual memories without changing existing person records.
 const add=(kind,nm,text,born)=>{if(!nm)return;st.axMemories=[...(st.axMemories||[]),{id:item.id,kind,name:nm,text,born,age:item.age}];};
 if(e.cw==="adultx"){
  if(e.ax==="meet"&&n<2)add("contact",st.axContact,n===0?"คุณเลือกทำความรู้จักและแลกเปลี่ยนวิธีทำงาน":"คุณเลือกค่อยๆ ทำความรู้จักกัน");
  if(e.ax==="pair")add("partner",st.axPartner,n===2?"คุณเลื่อนนัดที่เคยตกลงกัน":"คุณพยายามแบ่งเวลาให้ความสัมพันธ์");
  if(e.ax==="child")add("child",st.axChildName,n===2?"คุณไม่ได้ไปร่วมงานที่โรงเรียน":"คุณพยายามหาเวลาและฟังความรู้สึกของลูก",st.axChildBorn);
 }
 if(e.cw==="crossx"){
  if(e.crossx==="collision")add("child",st.cxChild,n===0?"งานชนกับวันสำคัญและคุณเลือกทำงาน":"คุณพยายามจัดเวลาระหว่างงานกับลูก",st.cxChildBorn);
  if(e.crossx==="friendfollow"&&n===3&&old.cxFriend&&st.people[old.cxFriend])st.people[old.cxFriend]={...st.people[old.cxFriend],feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"};
  if(e.crossx==="memory"&&st.cxRecall)st.axMemories=(st.axMemories||[]).map(m=>m.id===st.cxRecall?{...m,revisited:true}:m);
 }
 if(item.laterAction==="sellBiz"){st.axBizAge=undefined;st.axBizAsset=0;}
 if(st.cxTripPartner&&(!partner(st)||st.partnerName!==st.cxTripPartner)){st.cxTrip="";st.cxTripPartner="";}
 if(st.cxPet&&item.age-st.cxPetAge>15)st.cxPet="";
};
})(window);


// Elder life individual continuity, care choices and family memories.
(function elderLife(w){
"use strict";
const W=w.CAREER_WORLD,L=w.LIFE_LATER,P=w.PEOPLE,S=w.STORY;
const prev={allowed:W.allowed,story:W.story,choices:W.choices,after:W.after,laterAfter:L.after,laterAllowed:L.allowed,annual:L.annual,peopleAllowed:P.allowed,privateOK:P.privateOK};
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const stub=Array.from({length:4},()=>c("ตัดสินใจ","ผลขึ้นกับสถานการณ์ในเกม"));
const templates=[
["childvisit",84.1,"ลูกแต่ละคนมีชีวิตของตัวเอง","ลูกที่โตแล้วกลับมาติดต่อ"],
["childfollow",84.2,"เรื่องที่ยังค้างกับลูก","ลูกกลับมาคุยเรื่องที่เกิดขึ้นก่อนหน้านี้"],
["grand",84.3,"ชีวิตของหลานที่ค่อยๆ เติบโต","หลานอยากแบ่งปันเรื่องของตน"],
["careplan",84.4,"ใครจะช่วยดูแลในวันที่ต้องการ","คุณอยากจัดความช่วยเหลือให้เหมาะกับชีวิต"],
["carefollow",84.5,"ข้อตกลงที่ต้องทำให้ได้จริง","ถึงเวลาทบทวนการดูแลที่ตกลงไว้"],
["estate",84.6,"ทรัพย์สินยังเป็นสิทธิของคุณ","ลูกที่โตแล้วชวนคุยเรื่องทรัพย์สิน"],
["estatefollow",84.7,"หลังคุยเรื่องมรดก","คนในครอบครัวกลับมาคุยถึงความต้องการที่ต่างกัน"],
["bereave",84.8,"วันที่ต้องบอกลาคนรัก","คนรักเสียชีวิตในเรื่องราวจำลองของเกม"],
["grief",84.9,"ชีวิตหลังการสูญเสีย","คุณค่อยๆ จัดชีวิตหลังสูญเสียคนรัก"],
["health",85.1,"ร่างกายกับชีวิตที่ยังอยากใช้","สุขภาพส่งผลต่อกิจวัตรที่คุณเลือก"],
["healthfollow",85.2,"เมื่อกลับมาทบทวนสุขภาพ","คุณติดตามผลจากทางเลือกครั้งก่อน"],
["luxury",85.3,"ใช้ทรัพย์สินเพื่อชีวิตที่ต้องการ","คุณมีเงินสำรองและเลือกความสุขตามกำลัง"],
["mentor",85.4,"ประสบการณ์ที่คนรุ่นใหม่อยากเรียนรู้","มีคนขอเรียนรู้จากประสบการณ์ของคุณ"],
["mentorFollow",85.5,"คนรุ่นใหม่กลับมาเล่าความคืบหน้า","คนที่เคยขอคำแนะนำกลับมาบอกผล"],
["friend",85.6,"เพื่อนเก่าที่ยังจำกันได้","คนที่เคยรู้จักอยากกลับมาพบ"],
["autonomy",85.7,"บ้านที่อยากใช้ชีวิตด้วยตัวเอง","คุณเลือกสภาพแวดล้อมและความช่วยเหลือตามความพร้อม"],
["legacy",85.8,"เรื่องที่อยากฝากไว้","คุณมีสิทธิเลือกว่าจะส่งต่อเรื่องราวหรือสิ่งใด"]
];
for(let a=60;a<=99;a++)for(const [k,order,title,story] of templates)S.push({id:`elderx_${k}_${a}`,age:a,order,title,story,cw:"elderx",elderx:k,custom:true,choices:stub});
const key=x=>x.name+"@"+x.born;
const clamp=x=>Math.max(0,Math.min(100,x));
const hash=s=>Array.from(s).reduce((a,x)=>(Math.imul(a,31)+x.charCodeAt(0))>>>0,17);
const get=(st,x)=>st.elChildren?.[key(x)]||{bond:50,trust:50,life:["งานประจำ","งานอิสระ","กิจการ","ดูแลครอบครัว"][hash(key(x))%4],busy:hash(key(x)+"busy")%3,finance:35+hash(key(x)+"finance")%46,visits:0,expectation:0};
const adults=(st,a)=>st.children.filter(x=>a-x.born>=20);
const pick=(st,a,filter=()=>true)=>{const v=adults(st,a).filter(filter);return v.length?v[a%v.length]:null;};
const find=(st,id)=>st.children.find(x=>key(x)===id);
const currentPartner=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!!st.partnerName;
const working=st=>["งานประจำ","งานประจำควบธุรกิจ","อิสระ","ธุรกิจ"].includes(st.mode)&&st.lateWork!=="retired"&&(!!st.profession||!!st.everWorked);
const job=st=>W.by[st.profession]?.name||st.goal||"งานที่เคยทำ";
const last=(s,k)=>s.history.findLast(x=>x.id.startsWith("elderx_"+k+"_"));
const due=(s,k,a,n)=>!last(s,k)||a-last(s,k).age>=n;
const dead=(st,n)=>!!n&&Object.hasOwn(st.elDeadPartners||{},n);
const friend=(st,a)=>{const v=Object.keys(st.people||{}).filter(n=>n!==st.partnerName&&!dead(st,n)&&P.privateOK(st,n)&&st.people[n].feeling==="รู้สึกดี");return v.length?v[a%v.length]:"";};
const support=(st,x)=>{const q=get(st,x);return q.bond+q.trust-q.busy*14-q.expectation*4;};
const childFin=q=>(q.finance??50)<35?"ช่วงนี้เงินของเขาตึงมือ":(q.finance??50)>=70?"ตอนนี้ฐานะของเขาค่อนข้างมั่นคง":"เขายังต้องบริหารรายจ่ายของตัวเอง";
const caregiver=(st,a)=>adults(st,a).slice().sort((x,y)=>support(st,y)-support(st,x))[0];
const oldChildFor=(e,st)=>{let v=adults(st,e.age);if(e.later==="childwedding")v=v.filter(x=>!x.married);if(e.later==="grandchild")v=v.filter(x=>x.married&&x.grand<3&&e.age-(x.lastGrand??-100)>=4).sort((x,y)=>x.grand-y.grand);if(["childdebt","childsuccess"].includes(e.later))return v[e.age%Math.max(1,v.length)];if(e.later==="grandstudy")v=v.filter(x=>x.grand&&e.age-(x.firstGrand??e.age)>=6);return v[0];};
const change=(st,x,d,tag,age)=>{if(!x)return;const id=key(x),p=get(st,x);st.elChildren={...(st.elChildren||{}),[id]:{...p,bond:clamp(p.bond+(d.bond||0)),trust:clamp(p.trust+(d.trust||0)),finance:clamp((p.finance??50)+(d.finance||0)),expectation:Math.max(0,Math.min(10,p.expectation+(d.expectation||0))),visits:p.visits+(d.visits||0),last:tag,lastAge:age}};};
const childEffect=(x,bond,trust=0,expectation=0,visits=0)=>({elEffect:{id:key(x),bond,trust,expectation,visits}});
const financiallyReady=(st,t)=>t.m+t.savings+t.assets>=200000;
const bereaveDue=(st,s,a)=>{if(!currentPartner(st)||dead(st,st.partnerName)||a<65||a-(st.partnerSince??a)<2)return false;const age=65+hash(st.partnerName+"@"+(st.partnerSince??0)+"@"+(s.seed??0))%35;return a>=age;};
W.allowed=(e,st,s)=>{
 if(e.cw!=="elderx"){
  if(e.id==="exreturn"&&st.elWidowed&&!st.pastRomance)return false;
  if(e.cw==="adultx"&&e.ax==="socialfollow"&&dead(st,st.axSocial))return false;
  if(e.id==="early_love"&&dead(st,st.adultInterest||st.teenBond||st.flirt))return false;
  if(e.id==="new_love"&&dead(st,st.flirt))return false;
  if(e.flex==="court"&&dead(st,st.candidate))return false;
  return prev.allowed(e,st,s);
 }
 const a=e.age,t=s.stats;
 switch(e.elderx){
 case "childvisit":return !!pick(st,a)&&!st.elChildIssue&&a%3===1&&due(s,"childvisit",a,4);
 case "childfollow":return !!find(st,st.elChildTarget)&&!!st.elChildIssue&&a>st.elChildAge&&due(s,"childfollow",a,2);
 case "grand":return !!pick(st,a,x=>x.grand&&a-(x.firstGrand??a)>=6)&&a%4===2&&due(s,"grand",a,4);
 case "careplan":return (t.physical<60||t.energy<35)&&!st.elCare&&due(s,"careplan",a,4)&&(a>=75||t.physical<40);
 case "carefollow":return !!st.elCare&&a>st.elCareAge&&due(s,"carefollow",a,3);
 case "estate":return financiallyReady(st,t)&&!!pick(st,a)&&!st.elEstateIssue&&a%4===0&&due(s,"estate",a,5);
 case "estatefollow":return !!st.elEstateIssue&&!!find(st,st.elEstateTarget)&&a>st.elEstateAge&&due(s,"estatefollow",a,2);
 case "bereave":return bereaveDue(st,s,a);
 case "grief":return !!st.elGrief&&a>st.elLossAge&&due(s,"grief",a,2);
 case "health":return (t.physical<65||t.energy<35)&&!st.elHealth&&due(s,"health",a,3);
 case "healthfollow":return !!st.elHealth&&a>st.elHealthAge&&due(s,"healthfollow",a,2);
 case "luxury":return t.m>=120000&&a%5===1&&due(s,"luxury",a,5);
 case "mentor":return !!st.everWorked&&t.skill>=50&&t.reliable>=50&&!st.elMentor&&a%5===2&&due(s,"mentor",a,5);
 case "mentorFollow":return !!st.elMentor&&a>st.elMentorAge;
 case "friend":return !!friend(st,a)&&a%4===3&&due(s,"friend",a,4);
 case "autonomy":return a%5===3&&due(s,"autonomy",a,5);
 case "legacy":return a>=75&&a%5===4&&due(s,"legacy",a,5);
 default:return false;
 }};
L.allowed=(e,st,s)=>{
 if(e.later==="wealthheirs"&&adults(st,e.age).length<2)return false;
 if(e.later==="carepaid"&&st.elCare==="paid")return false;
 return prev.laterAllowed(e,st,s);
};
P.privateOK=(st,n)=>!dead(st,n)&&prev.privateOK(st,n);
P.allowed=(e,st,s)=>{if(dead(st,e.personIntro)||dead(st,e.personBoundary))return false;return prev.peopleAllowed(e,st,s);};
W.story=(e,st)=>{
 if(e.cw!=="elderx")return prev.story(e,st);
 const a=e.age;
 switch(e.elderx){
 case "childvisit":{const x=pick(st,a),q=get(st,x);return x.name+" อายุ "+(a-x.born)+" ปี ใช้ชีวิตในรูปแบบ"+q.life+" "+(q.bond<40?"ช่วงที่ผ่านมาเขาเว้นระยะจากคุณและวันนี้อยากคุยเรื่องที่ค้างใจ":q.busy===2?"เขามีภาระของตัวเองมาก แต่ติดต่อมาหาเมื่อมีเวลา":"เขาอยากแวะมาคุยและใช้เวลาด้วยกัน")+" "+childFin(q)+" คุณอยากตอบรับอย่างไร";}
 case "childfollow":{const x=find(st,st.elChildTarget);return x.name+" จำเรื่องเมื่อคุณอายุ "+st.elChildAge+" ปีได้ "+(st.elChildIssue==="distance"?"เขายังรู้สึกว่าคุยกับคุณได้ไม่เต็มที่":"เขาอยากรักษาความสัมพันธ์และคุยเรื่องชีวิตของตน")+" คุณจะรับฟังอย่างไร";}
 case "grand":{const x=pick(st,a,z=>z.grand&&a-(z.firstGrand??a)>=6);return "หลานคนหนึ่งในครอบครัวของ"+x.name+" อยากเล่าเรื่องความสนใจและชีวิตของเขาให้คุณฟัง ไม่จำเป็นต้องเลือกเส้นทางเดียวกับคุณ";}
 case "careplan":{const x=caregiver(st,a);return "สุขภาพหรือพลังงานช่วงนี้ทำให้บางกิจวัตรยากขึ้น "+(x?x.name+" เป็นลูกที่คุณอาจขอคุยเรื่องความช่วยเหลือได้ แต่เขามีภาระและขอบเขตของตัวเอง":"คุณยังสามารถหาความช่วยเหลือจากคนที่ไว้ใจ ชุมชน หรือบริการได้ แม้ไม่มีลูก")+" คุณอยากวางแผนแบบไหน";}
 case "carefollow":{const x=find(st,st.elCareChild);return "หลังวางแผนดูแลเมื่ออายุ "+st.elCareAge+" ปี "+(st.elCare==="family"&&x?x.name+" กลับมาคุยถึงตารางและสิ่งที่ช่วยได้จริง":st.elCare==="paid"?"บริการที่จ้างไว้ต้องทบทวนค่าใช้จ่ายและขอบเขต":"คุณทบทวนกิจวัตรและความช่วยเหลือที่เข้าถึงได้")+" คุณยังมีสิทธิเลือกวิธีใช้ชีวิต";}
 case "estate":{const x=pick(st,a),q=get(st,x);return x.name+" ชวนคุยเรื่องทรัพย์สิน "+(q.expectation>=2||q.trust<40?"คำพูดของเขาเริ่มทำให้คุณไม่แน่ใจว่าความสนใจมาจากความสัมพันธ์หรือความคาดหวังเรื่องเงิน":"เขาอยากเข้าใจแผนชีวิตของคุณโดยยังไม่ได้ตกลงการแบ่งทรัพย์สิน")+" คุณไม่จำเป็นต้องโอนทรัพย์สินหรือสัญญาให้ใครตอนนี้";}
 case "estatefollow":return find(st,st.elEstateTarget).name+" กลับมาคุยเรื่องทรัพย์สินที่เคยคุยกันเมื่ออายุ "+st.elEstateAge+" ปี "+(st.elEstateIssue==="pressure"?"คำสัญญาที่เคยให้ไว้ทำให้เกิดความคาดหวัง":"ทุกฝ่ายยังต้องเคารพการตัดสินใจของคุณ");
 case "bereave":return st.partnerName+" คนรักที่ร่วมชีวิตกับคุณเสียชีวิตในเรื่องราวจำลองของเกม คุณต้องเผชิญความสูญเสียและเรื่องจำเป็นที่ต้องจัดการ โดยไม่ต้องฝืนเข้มแข็งในทันที";
 case "grief":return "ผ่านมาระยะหนึ่งแล้วนับจากวันที่ "+st.elLostName+" จากไป คุณยังมีสิทธิคิดถึงคนเดิม ใช้ชีวิตคนเดียว พบเพื่อน หรือค่อยๆ เปิดใจเมื่อพร้อม";
 case "health":return "ช่วงนี้สุขภาพหรือพลังงานทำให้กิจวัตรบางอย่างยากขึ้น แต่คุณยังมีเรื่องที่อยากทำ"+(working(st)?" รวมถึงงานที่ยังทำอยู่":"")+" คุณจะจัดการอย่างไร";
 case "healthfollow":return "เมื่ออายุ "+st.elHealthAge+" ปี คุณเลือก"+(st.elHealth==="delay"?"เลื่อนการดูแลสุขภาพ":"เริ่มปรับวิธีดูแลตัวเอง")+" วันนี้คุณมีโอกาสทบทวนผลและปรับแผน";
 case "mentor":return "คนรุ่นใหม่ขอคำแนะนำเกี่ยวกับ"+job(st)+" จากประสบการณ์ที่คุณสะสม ไม่จำเป็นต้องกลับไปทำงานเต็มเวลา";
 case "mentorFollow":return "คนที่คุณตกลงให้คำแนะนำเมื่ออายุ "+st.elMentorAge+" ปี กลับมาเล่าว่าเขาลองทำตามแนวทางบางส่วนแล้วและอยากฟังความคิดเห็น";
 case "friend":return friend(st,a)+" คนที่คุณเคยรู้จักและยังเปิดใจติดต่อกัน ส่งข้อความมาชวนพบ คุณอยากใช้เวลาร่วมกันแบบไหน";
 default:return e.story;
 }};
W.choices=(e,st,s)=>{
 if(e.cw!=="elderx")return prev.choices(e,st,s);
 const a=e.age,t=s.stats;
 switch(e.elderx){
 case "childvisit":{const x=pick(st,a),base={elChildTarget:key(x),elChildAge:a};return [
 c("ชวนกินข้าวและฟังชีวิตของลูก","ลูกได้ใช้เวลากับคุณโดยไม่ต้องพิสูจน์อะไร",{child:4,h:4},{...base,elChildIssue:"close",...childEffect(x,6,3,0,1)}),
 c("ถามว่าช่วงนี้เขามีเรื่องอยากให้ช่วยไหม","คุณเข้าใจภาระของลูกเพิ่มขึ้น",{child:3,e:2},{...base,elChildIssue:"close",...childEffect(x,4,4,0,1)}),
 c("ตำหนิว่าไม่ค่อยมาหาเหมือนที่ควร","ลูกเริ่มระวังการพูดเรื่องส่วนตัว",{child:-4,stress:3},{...base,elChildIssue:"distance",...childEffect(x,-7,-4)}),
 c("ขอนัดวันอื่นตามความสะดวกของทั้งสองฝ่าย","คุณรักษาขอบเขตและยังเปิดโอกาสให้พบกัน",{selfcontrol:2,child:1},{...base,elChildIssue:"close",...childEffect(x,1,1)})];}
 case "childfollow":{const x=find(st,st.elChildTarget);return [
 c("รับฟังและยอมรับสิ่งที่เคยทำให้เขาเสียใจ","ลูกได้พูดในสิ่งที่ค้างใจ",{child:5,e:3},{elChildIssue:"",...childEffect(x,7,5)}),
 c("ชวนทำกิจกรรมที่ลูกอยากทำ","ได้สร้างความทรงจำร่วมกันอีกครั้ง",{h:4,child:4},{elChildIssue:"",...childEffect(x,5,2)}),
 c("บอกว่าลูกควรทำตามที่คุณต้องการ","ลูกยังรู้สึกว่าชีวิตของเขาไม่ถูกรับฟัง",{child:-4,stress:3},childEffect(x,-6,-4)),
 c("เคารพพื้นที่ของลูกและขอคุยใหม่เมื่อพร้อม","ทั้งสองฝ่ายยังรักษาสิทธิเลือก",{selfcontrol:3},{elChildIssue:"",...childEffect(x,2,2)})];}
 case "grand":{const x=pick(st,a,z=>z.grand&&a-(z.firstGrand??a)>=6);return [
 c("ฟังสิ่งที่หลานชอบและให้กำลังใจ","หลานได้มีพื้นที่พูดเรื่องของตน",{h:4,child:3},childEffect(x,3,2)),
 c("เล่าเรื่องชีวิตของคุณเมื่อวัยใกล้กัน","ครอบครัวได้แลกเปลี่ยนประสบการณ์",{h:3,experience:2},childEffect(x,2,2)),
 c("พยายามให้หลานเลือกตามที่คุณคิดไว้","เกิดความเห็นต่างกับครอบครัวของลูก",{child:-3,stress:2},childEffect(x,-4,-3)),
 c("สนับสนุนตามกำลังโดยไม่กำหนดอนาคตแทน","คุณรักษาขอบเขตของแต่ละรุ่น",{e:3,child:2},childEffect(x,3,2))];}
 case "careplan":{const x=caregiver(st,a),can=x&&support(st,x)>=75;return [
 x?c("ถาม "+x.name+" ว่าช่วยอะไรได้จริง",can?"ลูกตกลงช่วยตามเวลาที่มี ไม่ได้ต้องรับภาระทั้งหมด":"ลูกยังไม่พร้อมรับภาระมาก คุณต้องจัดทางเลือกอื่น",can?{energy:6,child:3,h:3}:{problem:3,h:-1},{elCare:can?"family":"community",elCareAge:a,elCareChild:key(x),...childEffect(x,can?3:1,2)}):c("ติดต่อชุมชนเพื่อขอข้อมูลช่วยเหลือ","คุณเริ่มหาทางเลือกที่เหมาะกับชีวิต",{network:3,problem:3},{elCare:"community",elCareAge:a}),
 st.paidCare?c("ทบทวนบริการผู้ช่วยที่จ้างอยู่แล้ว","คุณใช้บริการเดิมโดยไม่จ่ายค่าจ้างเริ่มต้นซ้ำ",{problem:3,energy:2},{elCare:"paid",elCareAge:a,elCareChild:""}):t.m>=18000?c("จ้างผู้ช่วยบางเวลาตามงบ 18,000 บาท","เริ่มบริการช่วยดูแลและมีค่าใช้จ่ายต่อเนื่อง",{m:-18000,energy:6,h:3},{paidCare:1,careStart:a,elCare:"paid",elCareAge:a,elCareChild:""}):c("สำรวจบริการที่จ่ายไหว","ยังไม่ได้จ้างและรักษาเงินสำรองไว้",{problem:4},{elCare:"community",elCareAge:a,elCareChild:""}),
 c("ปรับบ้านและกิจวัตรตามกำลัง","คุณลดภาระและยังใช้ชีวิตได้ด้วยตัวเองตามความพร้อม",{problem:4,energy:3},{elCare:"self",elCareAge:a}),
 c("ยังไม่อยากขอความช่วยเหลือ","ภาระเดิมยังอยู่และอาจต้องทบทวนอีก",{energy:-4,stress:3},{elCare:"self",elCareAge:a})];}
 case "carefollow":{const x=find(st,st.elCareChild);return [
 c("คุยขอบเขตและปรับตารางให้ทุกฝ่ายไหว","ความช่วยเหลือเหมาะกับชีวิตมากขึ้น",{energy:5,stress:-3},x?childEffect(x,3,3):{}),
 c("ประเมินแผนใหม่จากสิ่งที่ทำได้จริง","คุณเปิดทางเลือกใหม่หากแผนเดิมไม่เหมาะ",{problem:4},{elCare:""}),
 c("ยืนยันว่าคนอื่นต้องทำทุกอย่างตามที่คุณต้องการ","ความขัดแย้งเพิ่มขึ้นและแผนอาจใช้ไม่ได้",{h:-3,stress:4},{elCare:"",...(x?childEffect(x,-6,-4):{})}),
 c("รักษาสิ่งที่ทำเองได้และขอความช่วยเหลือเฉพาะที่จำเป็น","คุณรักษาอิสระพร้อมรับแรงสนับสนุน",{energy:4,selfcontrol:3})];}
 case "estate":{const x=pick(st,a),base={elEstateTarget:key(x),elEstateAge:a};return [
 c("บันทึกความต้องการและหารือกับคนกลาง","คุณยังคงสิทธิในทรัพย์สินและลดความคลุมเครือ",{security:5,fair:3},{...base,elEstateIssue:"plan",estatePlan:true,...childEffect(x,1,3)}),
 c("คุยเรื่องเงินโดยไม่ให้คำสัญญา","ลูกทราบว่าความสัมพันธ์ไม่ใช่การแลกทรัพย์สิน",{child:3,selfcontrol:3},{...base,elEstateIssue:"plan",...childEffect(x,2,3,-1)}),
 c("สัญญาว่าจะให้มากขึ้นถ้ามาหาบ่อย","เกิดความคาดหวังและความไม่แน่นอนในครอบครัว",{fair:-5,stress:4},{...base,elEstateIssue:"pressure",...childEffect(x,1,-4,3)}),
 c("ขอใช้ทรัพย์สินกับชีวิตของตัวเองก่อน","คุณยังไม่ผูกพันกับการแบ่งทรัพย์สิน",{security:3,selfcontrol:3},{...base,elEstateIssue:"plan",...childEffect(x,0,1)})];}
 case "estatefollow":{const x=find(st,st.elEstateTarget);return [
 c("ชี้แจงขอบเขตและใช้คนกลางหากจำเป็น","ความคาดหวังเริ่มชัดเจนขึ้น",{fair:4,security:4},{elEstateIssue:"",...childEffect(x,2,5,-2)}),
 c("ฟังความต้องการของลูกโดยไม่รีบโอนเงิน","ทั้งคู่เข้าใจมุมมองที่ต่างกัน",{child:3,e:3},{elEstateIssue:"",...childEffect(x,4,2,-1)}),
 c("เปลี่ยนคำสัญญาเพื่อให้เขาพอใจ","ความไม่แน่นอนเพิ่มขึ้น",{stress:5,fair:-4},childEffect(x,-2,-5,2)),
 c("ขอหยุดการหารือและรักษาสิทธิของตัวเอง","คุณลดแรงกดดันโดยยังไม่ตัดสินใจ",{selfcontrol:4,stress:-2},{elEstateIssue:"",...childEffect(x,0,1)})];}
 case "bereave":{const base={elLostName:st.partnerName,elLossAge:a,elGrief:"yes",elWidowed:true,relationship:"โสด",partnerName:"",married:"",candidate:"",flirt:"",adultInterest:"",teenBond:"",teenCrush:"",pastRomance:"",axSocial:"",axPair:"",romanceOpen:"ไม่"};return [
 c("ใช้เวลากับความสูญเสียและคนที่ไว้ใจ","คุณไม่ต้องรีบผ่านความเศร้า",{h:-9,stress:6,r:3},base),
 c("ขอคนที่ไว้ใจช่วยเรื่องจำเป็น","ภาระบางส่วนลดลงและคุณมีเวลาพัก",{h:-8,stress:4,problem:3},base),
 c("เก็บสิ่งที่มีความหมายและให้เวลาตัวเอง","ความทรงจำยังมีคุณค่าแม้คนรักจากไป",{h:-7,energy:-3},base),
 c("ขอพื้นที่ส่วนตัวหลังจัดเรื่องจำเป็น","คุณเลือกวิธีรับมือความเศร้าของตัวเอง",{h:-9,selfcontrol:3},base)];}
 case "grief":return [
 c("ค่อยๆ กลับไปทำสิ่งที่ชอบ","คุณสร้างจังหวะชีวิตใหม่โดยไม่ลืมคนเดิม",{h:5,energy:4},{elGrief:"",romanceOpen:"ไม่"}),
 c("พบเพื่อนหรือคนที่ไว้ใจ","คุณมีพื้นที่เล่าความรู้สึก",{friend:4,h:4,stress:-3},{elGrief:""}),
 c("ยังอยากมีเวลาส่วนตัว","คุณไม่จำเป็นต้องเริ่มความสัมพันธ์ใหม่",{energy:3,selfcontrol:3},{elGrief:""}),
 c("เปิดใจรู้จักคนใหม่เมื่อพร้อม","คุณเปิดโอกาสให้ความสัมพันธ์ใหม่ โดยยังไม่ได้คบใคร",{social:3,confidence:2},{elGrief:"",romanceOpen:"เปิดใจ"})];
 case "health":return [
 c("นัดประเมินและปรับกิจวัตรตามความเหมาะสม","คุณเริ่มดูแลสุขภาพและรักษากิจกรรมที่ชอบ",{physical:5,energy:4,stress:-3},{elHealth:"care",elHealthAge:a}),
 t.m>=8000?c("จัดบริการและการเดินทางที่สะดวกขึ้น 8,000 บาท","ลดภาระการเดินทาง ไม่ได้รับประกันผลการรักษา",{m:-8000,energy:6,physical:3},{elHealth:"care",elHealthAge:a}):c("สอบถามทางเลือกที่เหมาะกับงบ","คุณเริ่มจัดการข้อจำกัดของตัวเอง",{problem:4},{elHealth:"care",elHealthAge:a}),
 c("เลื่อนการดูแลแม้เริ่มกระทบชีวิต","ปัญหายังไม่ได้รับการจัดการ",{physical:-5,stress:4},{elHealth:"delay",elHealthAge:a}),
 c("ลดภาระบางอย่างโดยไม่เลิกสิ่งที่รักทั้งหมด","คุณเลือกปรับชีวิตให้เหมาะกับร่างกาย",{energy:6,h:3},{elHealth:"care",elHealthAge:a})];
 case "healthfollow":return [
 c("ติดตามผลและรักษากิจวัตรที่เหมาะสม","สุขภาพในเกมได้รับการดูแลต่อเนื่อง",{physical:4,energy:4,stress:-3},{elHealth:""}),
 c("ขอข้อมูลเพิ่มเติมเพื่อวางแผน","คุณเข้าใจทางเลือกเพิ่มขึ้น",{knowledge:3,problem:3},{elHealth:""}),
 c("กลับไปฝืนใช้ชีวิตเหมือนเดิม","ปัญหาอาจยังรบกวนชีวิต",{physical:-4,energy:-3}),
 c("ปรับกิจกรรมโดยยังรักษาความสุขของตัวเอง","คุณมีพื้นที่สำหรับสิ่งที่อยากทำ",{h:4,energy:3},{elHealth:""})];
 case "luxury":return [
 c("ใช้ 40,000 บาทกับทริปที่อยากไปและจัดความสะดวก","คุณได้ใช้เงินเพื่อประสบการณ์ตามกำลัง",{m:-40000,h:8,experience:4}),
 c("ปรับบ้านหรือซื้อของที่ช่วยให้ชีวิตสบายขึ้น 30,000 บาท","คุณได้คุณภาพชีวิตที่ต้องการ",{m:-30000,assets:15000,h:5,energy:4}),
 c("จัดมื้อพิเศษกับคนที่อยากพบ 10,000 บาท","คุณใช้เงินสร้างช่วงเวลาที่มีความหมาย",{m:-10000,h:5,social:3}),
 c("เก็บทรัพย์สินไว้และเลือกความสุขแบบเรียบง่าย","คุณไม่จำเป็นต้องใช้เงินเพื่อพิสูจน์ความสำเร็จ",{security:4,h:3})];
 case "mentor":return [
 c("ตกลงให้คำแนะนำเป็นบางครั้ง","คุณส่งต่อประสบการณ์โดยไม่รับงานเต็มเวลา",{respect:4,network:3},{elMentor:"yes",elMentorAge:a}),
 c("ชวนเรียนรู้ผ่านงานเล็กที่ทำร่วมกัน","คุณได้ใช้ทักษะและคนรุ่นใหม่ได้ลองทำ",{skill:3,h:4},{elMentor:"yes",elMentorAge:a}),
 c("แนะนำแหล่งเรียนรู้อื่นที่เหมาะสม","อีกฝ่ายยังมีทางเลือกโดยไม่เพิ่มภาระให้คุณ",{e:3,problem:2}),
 c("ขอใช้เวลาส่วนตัวในช่วงนี้","คุณไม่จำเป็นต้องทำงานเพื่อพิสูจน์คุณค่าของตัวเอง",{energy:4,h:3})];
 case "mentorFollow":return [
 c("รับฟังและให้ข้อเสนอแนะตามประสบการณ์","คุณได้เห็นคนรุ่นใหม่เติบโต",{respect:4,h:5},{elMentor:""}),
 c("ชื่นชมความพยายามโดยไม่กำหนดวิธีทั้งหมด","อีกฝ่ายได้เรียนรู้จากทางที่เลือก",{e:4,h:3},{elMentor:""}),
 c("อยากลองร่วมงานต่อเมื่อทั้งคู่พร้อม","คุณยังมีโอกาสทำสิ่งที่มีความหมาย",{skill:3,network:3},{elMentor:""}),
 c("ยินดีด้วยแล้วกลับไปใช้ชีวิตของตัวเอง","คุณส่งต่อประสบการณ์โดยไม่รับภาระเพิ่ม",{h:4,selfcontrol:2},{elMentor:""})];
 case "friend":return [
 c("นัดพบและคุยเรื่องชีวิตที่ผ่านมา","คุณได้ใช้เวลากับคนที่ยังติดต่อกัน",{friend:5,h:5}),
 c("คุยโทรศัพท์ตามเวลาที่สะดวก","คุณยังรักษามิตรภาพได้แม้เดินทางยาก",{friend:3,h:3}),
 c("ชวนทำกิจกรรมที่ทั้งคู่ยังสนใจ","ได้สร้างความทรงจำใหม่ร่วมกัน",{friend:4,experience:3}),
 c("ขอเลื่อนโดยบอกตามตรง","คุณเคารพความพร้อมของตัวเอง",{energy:3})];
 case "autonomy":return [
 c("ปรับพื้นที่ให้ใช้ชีวิตได้สะดวกตามกำลัง","คุณรักษาความเป็นอิสระ",{problem:4,energy:3}),
 c("คุยกับคนที่ไว้ใจเรื่องขอบเขตความช่วยเหลือ","คุณได้ทางเลือกโดยไม่ยกสิทธิทั้งหมดให้ใคร",{r:3,security:3}),
 c("ให้คนอื่นตัดสินใจทุกอย่างโดยไม่ระบุความต้องการ","บางสิ่งอาจไม่ตรงกับความต้องการของคุณ",{h:-3,stress:3}),
 c("อยู่แบบเดิมตราบเท่าที่ยังเหมาะสม","คุณรักษาวิถีชีวิตที่เลือกเอง",{h:4,selfcontrol:3})];
 case "legacy":return [
 c("บันทึกเรื่องที่เคยทำและสิ่งที่ได้เรียนรู้","คุณเก็บประสบการณ์ไว้ให้คนที่อยากรับฟัง",{h:5,satisfaction:4}),
 c("ชวนคนที่ไว้ใจคุยเรื่องที่ยังค้างใจ","คุณได้พื้นที่พูดถึงสิ่งที่มีความหมาย",{e:3,r:3}),
 c("ใช้เวลาทำสิ่งที่ยังอยากทำในวันนี้","คุณให้คุณค่ากับชีวิตปัจจุบัน",{h:5,energy:3}),
 c("ไม่ต้องการฝากอะไรเป็นพิเศษ","คุณไม่จำเป็นต้องทิ้งผลงานเพื่อพิสูจน์ชีวิต",{selfcontrol:3,h:3})];
 default:return e.choices;
 }};
W.after=(st,old,e,n,ch,item)=>{
 prev.after(st,old,e,n,ch,item);
 // Apply chosen per-child changes from the stored dynamic choice, never recompute a past outcome.
 if(e.cw==="elderx"&&ch.set?.elEffect){const x=find(st,ch.set.elEffect.id);change(st,x,ch.set.elEffect,item.title,item.age);delete st.elEffect;}
 if(e.cw==="elderx"&&e.elderx==="bereave"){
  st.elDeadPartners={...(st.elDeadPartners||{}),[old.partnerName]:item.age};
  if(st.people[old.partnerName])st.people[old.partnerName]={...st.people[old.partnerName],feeling:"เสียชีวิต",boundary:"ไม่ติดต่อ"};
 }
 // Existing work/parent arcs supply real childhood memories to the individual child record.
 if(e.cw==="adultx"&&e.ax==="child"){const x=st.children.find(z=>z.name===st.axChildName&&z.born===st.axChildBorn);change(st,x,{bond:n===2?-7:5,trust:n===2?-4:3},item.title,item.age);}
 if(e.cw==="adultx"&&e.ax==="childfollow"){const x=st.children.find(z=>z.name===old.axChildName&&z.born===old.axChildBorn);change(st,x,{bond:n===2?-5:4,trust:n===2?-4:3},item.title,item.age);}
 if(e.cw==="crossx"&&e.crossx==="collision"){const x=st.children.find(z=>z.name===st.cxChild&&z.born===st.cxChildBorn);change(st,x,{bond:n===0?-7:5,trust:n===0?-3:3},item.title,item.age);}
 if(e.cw==="crossx"&&e.crossx==="collisionfollow"){const x=st.children.find(z=>z.name===old.cxChild&&z.born===old.cxChildBorn);change(st,x,{bond:n===2?-5:4,trust:n===2?-3:3},item.title,item.age);}
 if(currentPartner(st)&&!dead(st,st.partnerName)&&st.elWidowed)st.elWidowed=false;
};
L.after=(st,old,e,n,item)=>{
 const childArc=["childwedding","grandchild","childdebt","childsuccess","grandstudy"].includes(e.later),x=childArc?oldChildFor(e,st):null;
 prev.laterAfter(st,old,e,n,item);
 // Child creation is handled by the original module. Profiles are derived lazily and replayed from history.
 if(x){const negative=n===2&&["childwedding","grandchild","childdebt"].includes(e.later);const finance=e.later==="childsuccess"?8:e.later==="childdebt"?(n===0?3:n===2?5:-7):0;change(st,x,{bond:negative?-5:3,trust:negative?-4:2,finance,expectation:e.later==="childdebt"&&n===2?2:0},item.title,item.age);}
 if(e.later==="careconflict"&&item.laterAction==="loseCare"&&st.elCare==="paid")st.elCare="";
 if(e.cw==="elderx"&&e.elderx==="bereave"&&st.people[st.elLostName])st.people[st.elLostName]={...st.people[st.elLostName],feeling:"เสียชีวิต",boundary:"ไม่ติดต่อ"};
};
w.ELDER={childProfile:get,childKey:key,caregiver,support,dead};
})(window);


// Concrete childhood stories and voluntary activities; keep old IDs and save replay.
(function childhoodLife(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,F=w.LIFE_FREEDOM,S=w.STORY;
const prev={allowed:W.allowed,after:W.after,peopleAllowed:P.allowed,peopleAfter:P.after,gate:F.gate,activities:F.activities,limit:F.limit,valid:F.valid,replay:F.replay};
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const add=(id,age,order,title,story,choices,gate="")=>S.push({id:"kid_"+id,age,order,title,story,cw:"childx",kidGate:gate,custom:true,choices});
const by=Object.fromEntries([...S,...(w.EPISODES||[])].map(e=>[e.id,e]));
const canMek=st=>!!st.people?.["เมฆ"]&&!["ไม่ชอบ","เว้นระยะ","เสียชีวิต"].includes(st.people["เมฆ"].feeling)&&st.people["เมฆ"].boundary!=="ไม่ติดต่อ";
const canFah=st=>P.privateOK(st,"ฟ้า");
const palOK=st=>!!st.kidPal&&P.privateOK(st,st.kidPal);
const patch=(st,n,p)=>{if(!n)return;st.people[n]={...(st.people[n]||{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"}),...p};};
const known=(st,n)=>!!st.people?.[n];
if(by.free_focus_5){
 const e=by.free_focus_5;e.title="วันหยุดหลังเข้าโรงเรียน";e.story="เช้าวันเสาร์ที่บ้าน ผู้ใหญ่บอกว่าวันนี้ไม่มีการบ้านให้รีบทำ คุณอยากเริ่มวันหยุดด้วยอะไร";
 const labels=["ขอให้คนที่บ้านอ่านนิทานให้ฟัง","ชวนคนที่บ้านเล่นเกมด้วยกัน","ออกไปวิ่งเล่นหรือปั่นจักรยานกับผู้ใหญ่","หยิบสีและตัวต่อมาเล่น"];
 e.choices.forEach((x,i)=>{x.label=labels[i];x.result=["คุณได้สนุกกับนิทานและเริ่มจำคำใหม่","คุณได้หัวเราะและใช้เวลากับคนที่บ้าน","คุณสนุกกับการเคลื่อนไหวและได้พัก","คุณได้ลองสร้างสิ่งที่อยากทำ"][i];});
}
add("peek",0,1,"จ๊ะเอ๋!","คนดูแลเอาผ้าผืนเล็กปิดหน้าตัวเองแล้วเปิดออกพร้อมยิ้มให้คุณ",[
 c("ส่งเสียงหัวเราะ","คนดูแลหัวเราะตามและเล่นต่ออีกนิด",{h:2,r:1}),
 c("เอื้อมมือไปจับผ้า","คุณสนใจสีและการเคลื่อนไหว",{experience:2}),
 c("มองตามเงียบๆ","คุณค่อยๆ สังเกตสิ่งที่อยู่ตรงหน้า",{patience:1}),
 c("ส่งเสียงร้องเพราะง่วง","คนดูแลพาคุณไปพัก",{energy:2})]);
add("walk",1,4,"ก้าวแรกไปหาเจ้าตุ๊กตา","คนดูแลวางตุ๊กตาไว้ไม่ไกล คุณกำลังหัดยืนและเดินโดยมีผู้ใหญ่ช่วยอยู่ข้างๆ",[
 c("ค่อยๆ ก้าวไปหา","คุณได้ฝึกทรงตัวและยิ้มเมื่อจับตุ๊กตาได้",{physical:2,confidence:1}),
 c("คลานไปเอา","คุณไปถึงของเล่นด้วยวิธีที่คุ้นเคย",{experience:1,h:1}),
 c("ยื่นมือขอให้ช่วย","คนดูแลประคองคุณเดินอย่างปลอดภัย",{r:2,physical:1}),
 c("นั่งเล่นตรงที่อยู่","คุณได้พักตามความพร้อม",{energy:2})]);
add("mess",2,4,"สีที่เลอะโต๊ะ","คุณได้เล่นสีล้างออกได้บนกระดาษ สีบางส่วนเลอะโต๊ะ ผู้ใหญ่หยิบผ้ามาให้",[
 c("ช่วยเช็ดตรงที่เอื้อมถึง","ผู้ใหญ่ช่วยส่วนที่เหลือ คุณลองช่วยงานเล็กๆ",{responsibility:2,skill:1}),
 c("วาดต่อบนกระดาษ","คุณได้สนุกกับสีโดยผู้ใหญ่ช่วยดูโต๊ะ",{creative:3,h:1}),
 c("ยื่นผ้าให้ผู้ใหญ่","คุณเรียนรู้ว่าของที่เลอะมีวิธีทำความสะอาด",{knowledge:1,r:1}),
 c("ขอไปล้างมือแล้วพัก","คุณได้พักจากกิจกรรม",{energy:2})]);
add("market",3,5,"ไปตลาดกับคนที่บ้าน","ผู้ใหญ่พาคุณไปตลาด ร้านหนึ่งมีขนม อีกมุมมีลูกโป่ง คุณมีสิทธิขอเลือกหนึ่งอย่างตามงบของบ้าน",[
 c("ขอขนมที่ชอบ","คุณได้ลองขนมและแบ่งกินกับคนที่บ้าน",{h:3}),
 c("ขอลูกโป่ง","คุณถือบอลลูนสีโปรดเดินกลับบ้าน",{h:3,creative:1}),
 c("ขอช่วยเลือกผลไม้","คุณสนุกกับการเลือกและได้รู้จักผลไม้เพิ่ม",{knowledge:2,responsibility:1}),
 c("ไม่ขอซื้ออะไร แค่เดินดู","คุณสนุกกับสิ่งรอบตัว",{experience:2})]);
add("mek4",4,8,"เมฆกับกล่องรถไฟ","เมฆกลับมาเยี่ยมพร้อมกล่องกระดาษ เขาถามว่าจะทำรถไฟหรือเล่นอย่างอื่นด้วยกันไหม",[
 c("ชวนทำรางรถไฟจากกล่อง","ทั้งคู่สร้างรางด้วยกันและหัวเราะเมื่อรถหลุดราง",{creative:3,friend:3},{kidMekBuild:"train"}),
 c("เอาของเล่นของตัวเองมาแลกเล่น","คุณได้รู้จักของเล่นที่เมฆชอบ",{friend:2,social:2},{kidMekBuild:"swap"}),
 c("ขอเล่นคนละมุมวันนี้","เมฆเล่นของเขา คุณได้ใช้เวลาของตัวเอง",{h:2,selfcontrol:1}),
 c("บอกว่าไม่อยากเล่นกับเมฆอีก","ผู้ใหญ่ช่วยให้ทั้งคู่มีพื้นที่ เมฆไม่ต้องฝืนชวนต่อ",{selfcontrol:2},{kidMekStop:"yes"})],"mek");
add("mek5",5,-4,"เมฆมาขอเล่นที่บ้าน","เมฆถือของเล่นมาหาที่ประตูและถามว่าจะเล่นด้วยกันในบ้านได้ไหม ผู้ใหญ่อยู่ใกล้ๆ",[
 c("ชวนเข้ามาเล่นตัวต่อด้วยกัน","เมฆเข้ามาเล่นกับคุณ",{friend:3,creative:1},{kidMekVisit:"yes"}),
 c("ชวนเข้ามาวาดรูปด้วยกัน","ทั้งคู่เตรียมกระดาษและสีในบ้าน",{friend:2,creative:2},{kidMekVisit:"yes"}),
 c("ขอไว้วันอื่น วันนี้อยากอยู่กับครอบครัว","เมฆกลับบ้านตามปกติ ไม่ได้หมายความว่ามิตรภาพจบ",{h:2,r:1}),
 c("ไม่อยากให้เมฆมาเล่นด้วยอีก","ผู้ใหญ่รับรู้ขอบเขตนี้และไม่ฝืนให้เล่นด้วยกัน",{selfcontrol:2},{kidMekStop:"yes"})],"mek");
add("mek6",6,9,"เรื่องที่เมฆยังจำได้","เมฆเอาของเล่นมาให้ดูและชวนสร้างอะไรด้วยกันอีกครั้ง คุณมีโอกาสคุยหรือเล่นต่อโดยไม่ต้องลืมสิ่งที่เคยเกิดขึ้น",[
 c("ชวนทำรถไฟให้ยาวกว่าเดิม","ทั้งคู่สนุกกับการสร้างสิ่งใหม่",{friend:4,creative:3},{kidMekBuild:"train",kidMek6:"yes"}),
 c("คุยเรื่องที่เคยทำให้เสียใจก่อนเล่น","เมฆได้เล่าความรู้สึก ทั้งคู่ค่อยๆ เข้าใจกัน",{friend:3,e:3},{kidMek6:"yes"}),
 c("ขอเล่นอย่างอื่นคนเดียววันนี้","คุณได้พักจากการเล่นด้วยกัน",{h:2}),
 c("ขอเว้นระยะจากเมฆ","เมฆรับรู้ว่าคุณยังไม่อยากเล่นด้วย",{selfcontrol:2},{kidMekStop:"yes"})],"mek6");
add("mek7",7,12,"ทีมสร้างเมืองจำลอง","เมฆเสนอให้เอากล่องและตัวต่อมาสร้างเมืองเล็กๆ เขาอยากทำถนน ส่วนคุณเลือกหน้าที่ได้",[
 c("วางถนนและทางให้รถวิ่ง","คุณสนุกกับการแก้ปัญหาทางเดินรถ",{problem:4,creative:2,friend:2},{kidCity:"road"}),
 c("สร้างบ้านและร้านค้า","คุณกับเมฆแบ่งหน้าที่และทำเมืองด้วยกัน",{creative:4,skill:2,friend:2},{kidCity:"house"}),
 c("ชวนเมฆลองทำเมืองคนละแบบ","ทั้งคู่ได้ผลงานต่างกันโดยไม่ต้องแข่ง",{creative:3,friend:2},{kidCity:"own"}),
 c("ขอไม่เล่นวันนี้","คุณใช้เวลากับกิจกรรมอื่น",{h:2})],"mek7");
add("mek8",8,12,"เมืองที่พังเพราะน้องเดินชน","เมืองจำลองที่คุณเคยสร้างกับเมฆถูกเด็กเล็กเดินชนโดยไม่ตั้งใจ เมฆเสียดายมาก",[
 c("ช่วยกันสร้างใหม่และปรับให้แข็งแรง","เมืองกลับมาอีกครั้ง คุณได้ทดลองวิธีที่ดีกว่า",{problem:4,friend:4},{kidCity:"rebuilt"}),
 c("บอกว่าเสียใจแล้วพักก่อน","ทั้งคู่ได้มีเวลาสงบใจ",{patience:3,friend:2},{kidCity:""}),
 c("โทษเมฆว่าไม่ดูของให้ดี","เมฆไม่สบายใจและไม่อยากสร้างต่อวันนี้",{friend:-3,stress:2},{kidCity:"",kidMekIssue:"city"}),
 c("ชวนเด็กเล็กมาช่วยเก็บชิ้นส่วนอย่างปลอดภัย","ทุกคนช่วยกันแก้เรื่องที่เกิดขึ้น",{e:3,friend:2},{kidCity:""})],"city");
add("mek9",9,12,"คำชวนหลังเรื่องเมืองจำลอง","เมฆอยากคุยเรื่องเมืองที่เคยสร้างด้วยกันและถามว่าคุณยังอยากเล่นกับเขาไหม",[
 c("ขอโทษในส่วนที่เคยพูดแรง","เมฆได้ยินความรู้สึกของคุณและค่อยๆ เปิดใจ",{friend:4,e:3},{kidMekIssue:"",kidMekStop:""}),
 c("ชวนเริ่มกิจกรรมใหม่ด้วยกัน","ทั้งคู่ได้ลองสร้างความทรงจำใหม่",{friend:3,creative:2},{kidMekIssue:""}),
 c("บอกว่ายังไม่พร้อมคุย","เมฆให้พื้นที่และเรื่องยังไม่จบ",{patience:2}),
 c("ขอไม่เล่นด้วยกันอีก","คุณกำหนดขอบเขตชัดเจน",{selfcontrol:3},{kidMekStop:"yes",kidMekIssue:""})],"cityIssue");
add("newpal",5,10,"เพื่อนที่โต๊ะอาหาร","เด็กสองคนชื่อ นัท กับ ข้าวปั้น กำลังคุยเรื่องการ์ตูนและลูกบอลที่โรงเรียน ทั้งคู่แนะนำตัว คุณอยากทำความรู้จักใคร",[
 c("คุยกับนัทเรื่องการ์ตูน","นัทสนุกกับการคุยและชวนคุณเล่นวันหลัง",{friend:3,social:2},{kidPal:"นัท",kidPalStart:5}),
 c("คุยกับข้าวปั้นเรื่องลูกบอล","ข้าวปั้นเล่าเกมที่ชอบและชวนคุณลอง",{friend:3,physical:1},{kidPal:"ข้าวปั้น",kidPalStart:5}),
 c("นั่งฟังทั้งคู่ก่อน","คุณรู้จักทั้งสองคนแต่ยังไม่ต้องสนิท",{social:2,patience:1}),
 c("ขอไปนั่งอีกมุม","คุณมีสิทธิเลือกที่นั่งตามความสบายใจ",{selfcontrol:2})]);
add("palplay",6,15,"เพื่อนชวนเล่นหลังพักกลางวัน","เพื่อนที่คุณเลือกทำความรู้จักเมื่อปีที่แล้วเข้ามาชวนเล่นเกมง่ายๆ ในสนาม",[
 c("ตกลงและเล่นตามกติกา","คุณกับเพื่อนสนุกและเริ่มไว้ใจกัน",{friend:4,physical:2},{kidPalPlay:"yes"}),
 c("เสนอวาดรูปหรือเล่นตัวต่อแทน","เพื่อนตกลงลองกิจกรรมด้วยกัน",{creative:3,friend:3},{kidPalPlay:"yes"}),
 c("ขอไปอ่านหนังสือวันนี้","เพื่อนรับรู้ว่าคุณอยากทำอย่างอื่น",{knowledge:3}),
 c("บอกว่าไม่อยากเล่นด้วยอีก","คุณบอกขอบเขตให้เพื่อนทราบ",{selfcontrol:2},{kidPalStop:"yes"})],"pal");
add("palfight",7,15,"กติกาที่เถียงกัน","เพื่อนที่คุณเคยเล่นด้วยคิดว่าคุณชนะโดยผิดกติกา คุณคิดว่าตัวเองเล่นถูก",[
 c("ชวนทบทวนกติกาแล้วลองใหม่","ทั้งคู่คุยกันและกลับมาเล่น",{problem:3,fair:3,friend:3},{kidPalIssue:""}),
 c("ยอมให้เพื่อนเริ่มใหม่หนึ่งรอบ","เกมเดินหน้าต่อโดยไม่ต้องตัดสินว่าใครผิดทั้งหมด",{patience:3,friend:2},{kidPalIssue:""}),
 c("โมโหแล้วเดินหนี","เพื่อนเสียใจและเรื่องยังค้าง",{friend:-4,stress:2},{kidPalIssue:"fight"}),
 c("ขอครูช่วยเป็นคนกลาง","ทั้งคู่ได้อธิบายสิ่งที่เกิดขึ้น",{problem:3,social:2},{kidPalIssue:""})],"palplay");
add("palrepair",8,15,"เพื่อนที่ยังไม่กล้าทัก","เพื่อนคนเดิมยังไม่แน่ใจว่าคุณโกรธจากเรื่องกติกาหรือไม่ วันนี้เขามีโอกาสคุยด้วย",[
 c("เข้าไปขอโทษที่เดินหนี","ทั้งคู่ค่อยๆ ปรับความเข้าใจ",{friend:4,e:3},{kidPalIssue:""}),
 c("ชวนเล่นอย่างอื่นที่ไม่ต้องแข่ง","คุณได้เริ่มกิจกรรมใหม่ร่วมกัน",{friend:3,h:2},{kidPalIssue:""}),
 c("บอกว่ายังอยากใช้เวลาคนเดียว","เพื่อนเว้นระยะให้",{selfcontrol:2}),
 c("บอกว่าไม่อยากสนิทกันแล้ว","คุณยุติเรื่องส่วนตัวโดยไม่ต้องทำร้ายกัน",{selfcontrol:3},{kidPalStop:"yes",kidPalIssue:""})],"palissue");
add("fah5",5,14,"ภาพวาดวันเกิดของฟ้า","ฟ้าที่คุณรู้จักจากอนุบาลบอกว่าใกล้ถึงวันเกิด เธออยากวาดรูปเล่นในห้องพักกลางวัน",[
 c("วาดการ์ดให้ฟ้า","ฟ้าดีใจที่คุณจำวันเกิดได้",{creative:2,friend:4},{kidFahCard:"yes"}),
 c("ชวนฟ้าวาดรูปด้วยกัน","ทั้งคู่ได้สนุกกับสีและกระดาษ",{creative:3,friend:3},{kidFahCard:"yes"}),
 c("อวยพรแล้วไปทำอย่างอื่น","คุณแสดงความเป็นมิตรโดยไม่ต้องสนิทมาก",{social:2}),
 c("ขอทำงานของตัวเองก่อน","คุณมีพื้นที่ทำสิ่งที่สนใจ",{selfcontrol:2})],"fah");
add("fah8",8,17,"การ์ดที่ฟ้ายังเก็บไว้","ฟ้านำการ์ดหรือรูปที่เคยทำร่วมกันตอนห้าขวบมาให้ดู เธอชวนวาดรูปใหม่",[
 c("วาดรูปใหม่คู่กัน","ทั้งคู่สร้างความทรงจำอีกครั้ง",{friend:4,creative:3}),
 c("ขอบคุณที่ยังจำได้","คุณรักษามิตรภาพโดยไม่ต้องทำกิจกรรมทุกครั้ง",{friend:3,h:2}),
 c("เล่าเรื่องที่คุณชอบทำตอนนี้","ฟ้าได้รู้จักความสนใจใหม่ของคุณ",{social:3,friend:2}),
 c("ขอไว้วันอื่น","ฟ้าเข้าใจว่าคุณมีเวลาไม่เท่ากัน",{patience:2})],"fahcard");
add("birthday",5,16,"ของขวัญวันเกิดที่เลือกเอง","คนที่บ้านถามว่าอยากได้ของขวัญเล็กๆ แบบไหนในงบที่ตกลงกัน หรืออยากใช้เวลาเที่ยวด้วยกันแทน",[
 c("ขอชุดตัวต่อ","คุณได้ฝึกสร้างสิ่งต่างๆ จากจินตนาการ",{creative:3,problem:2},{kidGift:"blocks"}),
 c("ขอหนังสือนิทาน","คุณได้เรื่องใหม่ให้อ่านกับคนที่บ้าน",{knowledge:3,h:2},{kidGift:"book"}),
 c("ขอลูกบอล","คุณมีของเล่นสำหรับฝึกการเคลื่อนไหว",{physical:3,h:2},{kidGift:"ball"}),
 c("ขอไปเที่ยวสวนกับครอบครัว","คุณได้วันพิเศษที่ไม่ต้องมีของใหม่",{r:3,h:4},{kidGift:"trip"})]);
add("giftplay",6,17,"ของขวัญที่ยังอยากใช้","ของขวัญหรือประสบการณ์วันเกิดปีที่แล้วทำให้คุณมีเรื่องอยากลองอีก",[
 c("ใช้เวลาฝึกสิ่งที่เคยชอบ","คุณพัฒนาความสนใจผ่านการลงมือทำ",{skill:3,creative:2}),
 c("ชวนคนที่บ้านทำด้วยกัน","คุณได้ใช้เวลาร่วมกับครอบครัว",{r:3,h:3}),
 c("ลองสิ่งใหม่ที่ยังไม่เคยทำ","คุณค้นพบความสนใจเพิ่ม",{experience:3,confidence:2}),
 c("เก็บไว้ก่อนแล้วไปพัก","คุณเลือกเวลาให้เหมาะกับตัวเอง",{energy:3})],"gift");
add("reading",5,19,"นิทานที่ยังอ่านไม่ออก","คุณเห็นภาพมังกรบนปกหนังสือและอยากรู้ว่าเรื่องเป็นอย่างไร แต่ยังอ่านทุกคำไม่ได้",[
 c("ขอคนที่บ้านอ่านให้ฟัง","คุณสนุกกับเรื่องและเริ่มจำคำใหม่",{knowledge:4,r:2},{kidRead:"yes"}),
 c("ดูภาพแล้วแต่งเรื่องเอง","คุณสร้างเรื่องมังกรในแบบของคุณ",{creative:4,h:2}),
 c("ลองสะกดคำที่จำได้","คุณเริ่มฝึกพื้นฐานอ่านหนังสือ",{knowledge:3,discipline:2},{kidRead:"yes"}),
 c("เลือกเล่นอย่างอื่นก่อน","คุณไม่ต้องรีบอ่านได้ในวันนี้",{h:2})]);
add("readshow",7,22,"นิทานที่อยากเล่าให้เพื่อนฟัง","ครูเปิดให้เด็กอาสาเล่านิทานที่ชอบ คุณเคยฝึกอ่านหรือฟังนิทานจนมีเรื่องโปรด",[
 c("อาสาเล่าเรื่องด้วยคำของตัวเอง","เพื่อนฟังและคุณฝึกสื่อสาร",{knowledge:3,confidence:4}),
 c("ขอเล่าคู่กับครู","คุณได้ลองนำเสนอโดยมีคนช่วย",{social:3,knowledge:2}),
 c("วาดฉากจากนิทานแทน","คุณใช้ภาพเล่าเรื่องที่จำได้",{creative:4}),
 c("นั่งฟังเพื่อนวันนี้","คุณได้ฟังเรื่องใหม่และไม่ต้องฝืนขึ้นหน้าเวที",{knowledge:2})],"read");
add("sports",5,23,"ลูกบอลในสนาม","ครูเปิดสนามให้ลองโยนบอล เตะบอล และวิ่งเล่นในกลุ่มเล็กๆ คุณอยากลองไหม",[
 c("ลองเตะบอลกับเพื่อน","คุณเริ่มฝึกควบคุมลูกบอล",{physical:3,skill:2},{kidSport:"ball"}),
 c("ลองวิ่งเล่นและโยนบอล","คุณสนุกกับการเคลื่อนไหว",{physical:4,h:2},{kidSport:"run"}),
 c("นั่งดูเพื่อนก่อน","คุณได้ดูวิธีเล่นโดยไม่ต้องลงสนาม",{experience:2}),
 c("เลือกกิจกรรมในห้องแทน","คุณได้ทำสิ่งที่สนใจ",{creative:2})]);
add("sportpractice",6,23,"ฝึกทักษะครั้งต่อไป","หลังจากเลือกลองกีฬา ครูชวนฝึกเกมที่เหมาะกับวัยอีกครั้ง คุณยังเลือกได้ว่าจะเล่นต่อไหม",[
 c("ฝึกต่อและลองช่วยเพื่อน","คุณพัฒนาทักษะและสนุกกับเพื่อน",{physical:4,skill:3,friend:2},{kidSportPractice:"yes"}),
 c("เล่นเพื่อความสนุก ไม่ต้องแข่ง","คุณได้ออกกำลังและไม่กดดัน",{physical:3,h:3},{kidSportPractice:"yes"}),
 c("ขอพักแล้วไปทำอย่างอื่น","คุณฟังร่างกายและเปลี่ยนกิจกรรมได้",{energy:3}),
 c("บอกว่าไม่สนใจกีฬาแล้ว","คุณเลือกความสนใจอื่นได้",{selfcontrol:2},{kidSport:"",kidSportPractice:""})],"sport");
add("sportday",8,23,"เกมกีฬาสีสำหรับเด็ก","ครูชวนคนที่เคยฝึกมาลองร่วมเกมกีฬาสีแบบง่ายๆ ยังไม่ได้เลือกลงแข่งขันจริง",[
 c("ตกลงลงเล่นในรอบเล็กๆ","คุณได้ลองแข่งขันอย่างเหมาะกับวัย",{physical:4,confidence:3}),
 c("ขอช่วยเชียร์เพื่อน","คุณได้ร่วมสนุกโดยไม่ลงแข่ง",{friend:3,h:3}),
 c("เลือกเล่นนอกการแข่งขัน","คุณรักษาความสนุกของตัวเอง",{physical:3,h:2}),
 c("ขอทำกิจกรรมอย่างอื่น","คุณไม่จำเป็นต้องลงแข่ง",{selfcontrol:2})],"sportpractice");
add("homework",6,25,"การบ้านกับการ์ตูนตอนเย็น","การ์ตูนเรื่องโปรดกำลังจะเริ่ม แต่ยังมีแบบฝึกหัดที่ครูให้กลับมาทำ",[
 c("ทำการบ้านก่อนแล้วดูการ์ตูน","คุณรักษาทั้งหน้าที่และเวลาสนุก",{knowledge:3,discipline:3,h:1}),
 c("ดูการ์ตูนก่อนแล้วกลับมาทำ","คุณได้สนุกแต่ต้องระวังเวลา",{h:3,knowledge:1}),
 c("ขอคนที่บ้านช่วยอธิบายโจทย์","คุณได้เข้าใจสิ่งที่ยังทำไม่เป็น",{knowledge:4,r:2}),
 c("ไม่ทำการบ้านวันนี้","ครูจะเห็นว่างานยังไม่เสร็จ",{h:2,discipline:-3},{kidMissingHW:"yes"})]);
add("hwresult",7,25,"สมุดการบ้านที่ยังว่าง","ครูเห็นงานที่คุณไม่ได้ทำในครั้งก่อนและถามว่าเกิดอะไรขึ้น",[
 c("ยอมรับแล้วขอทำเพิ่มเติม","ครูช่วยจัดเวลาให้คุณฝึก",{i:3,knowledge:3,discipline:2},{kidMissingHW:""}),
 c("บอกว่าไม่เข้าใจโจทย์และขอให้สอน","คุณเริ่มแก้พื้นฐานที่ยังขาด",{knowledge:4,confidence:2},{kidMissingHW:""}),
 c("อ้างว่าลืมทั้งที่รู้ว่าไม่ได้ทำ","ครูยังไม่ทราบปัญหาที่แท้จริง",{i:-3,stress:2},{kidMissingHW:""}),
 c("รับผิดชอบและส่งงานตามกำหนดใหม่","คุณได้ลองทำตามที่ตกลง",{responsibility:3,knowledge:2},{kidMissingHW:""})],"hw");
add("family6",6,27,"วันอาทิตย์ที่พ่อแม่ไม่ว่างพร้อมกัน","คนที่บ้านมีงานต้องจัดการ แต่คุณอยากไปสวนสาธารณะ ผู้ใหญ่บอกว่าต้องคุยกันก่อน",[
 c("ขอให้ตกลงวันใหม่ด้วยกัน","คุณได้มีนัดที่ชัดเจนขึ้น",{patience:3,r:2},{kidFamilyTrip:"yes"}),
 c("ชวนทำอาหารง่ายๆ ที่บ้านแทน","คุณได้ช่วงเวลาดีกับคนที่บ้าน",{r:4,h:3}),
 c("งอแงเพราะอยากไปวันนี้","คนที่บ้านช่วยปลอบและอธิบายข้อจำกัด",{stress:2,selfcontrol:-1}),
 c("เลือกเล่นของตัวเองระหว่างรอ","คุณได้หากิจกรรมที่สนุกตามกำลัง",{creative:2,h:2})]);
add("family7",7,27,"วันที่ครอบครัวนัดกันไว้","คนที่บ้านจัดเวลาไปสวนตามที่เคยตกลง คุณอยากทำอะไรเมื่อไปถึง",[
 c("เล่นสนามเด็กเล่นและชวนผู้ใหญ่ดู","คุณได้สนุกและรู้สึกได้รับความสนใจ",{physical:3,r:3,h:3},{kidFamilyTrip:""}),
 c("เดินดูต้นไม้และถามชื่อสิ่งที่เห็น","คุณได้เรียนรู้จากสิ่งรอบตัว",{knowledge:3,r:2},{kidFamilyTrip:""}),
 c("นั่งกินของว่างด้วยกัน","คุณได้ใช้เวลากับคนสำคัญ",{r:4,h:3},{kidFamilyTrip:""}),
 c("ขอกลับเมื่อเริ่มเหนื่อย","คนที่บ้านเข้าใจและคุณได้พัก",{energy:4},{kidFamilyTrip:""})],"familytrip");
add("class8",8,27,"โจทย์ที่ครูให้ลองอาสา","ครูมีโจทย์พิเศษสำหรับเด็กที่สนใจ ไม่จำเป็นต้องทำได้หรือแข่งขัน คุณจะลองไหม",[
 c("อาสาลองแก้โจทย์","คุณได้ฝึกคิดและเห็นจุดที่ต้องพัฒนา",{knowledge:4,problem:3},{kidClassPractice:"yes"}),
 c("ขอทำพร้อมเพื่อน","คุณฝึกอธิบายและฟังวิธีคิดคนอื่น",{knowledge:3,friend:3},{kidClassPractice:"yes"}),
 c("เลือกทำงานศิลปะแทน","คุณได้พัฒนาความสามารถอีกด้าน",{creative:4}),
 c("พักและทำงานที่มีอยู่ให้เสร็จ","คุณรักษาหน้าที่เดิม",{discipline:3})]);
add("contest9",9,27,"คำชวนจากครู","ครูจำได้ว่าคุณเคยอาสาฝึกโจทย์ จึงชวนลองกิจกรรมวิชาการเล็กๆ ในโรงเรียน คุณยังไม่ได้สมัคร",[
 c("ลองสมัครและฝึกเพิ่ม","คุณเริ่มเตรียมตัว ไม่ได้รับรางวัลโดยอัตโนมัติ",{knowledge:4,discipline:3},{kidContest:"yes"}),
 c("ขอทำแบบฝึกเพื่อความสนุก","คุณฝึกความรู้โดยไม่แข่งขัน",{knowledge:3}),
 c("ลองกิจกรรมด้านอื่น","คุณค้นหาความสนใจเพิ่มเติม",{experience:3}),
 c("ไม่สมัครในตอนนี้","คุณเลือกเวลาและสิ่งที่เหมาะกับตัวเอง",{selfcontrol:2})],"class");
add("contest10",10,27,"วันกิจกรรมวิชาการ","หลังสมัครและฝึกไว้ คุณได้เข้าร่วมกิจกรรม ครูให้ลองแก้โจทย์ตามพื้นฐานของแต่ละคน",[
 c("ทำโจทย์เต็มความสามารถ","คุณฝึกสมาธิและเรียนรู้จากสิ่งที่ทำได้",{knowledge:4,problem:3,confidence:2},{kidContest:""}),
 c("ลองโจทย์ยากแล้วขอคำแนะนำเมื่อจบ","คุณได้เห็นวิธีคิดใหม่",{knowledge:4,experience:3},{kidContest:""}),
 c("ช่วยให้กำลังใจเพื่อนหลังทำเสร็จ","คุณสนุกกับการเรียนร่วมกัน",{friend:3,e:2},{kidContest:""}),
 c("ขอหยุดหากไม่พร้อม","ครูให้พักตามความเหมาะสม",{energy:3},{kidContest:""})],"contest");
add("rain",7,33,"ฝนตกตอนเลิกเรียน","ฝนตกหนักและผู้ใหญ่มารับช้ากว่าปกติ ครูยังอยู่ดูแลเด็กที่รอ",[
 c("ขอครูช่วยติดต่อคนที่บ้าน","คุณรู้ว่าควรรออยู่ในที่ปลอดภัย",{problem:3,responsibility:2}),
 c("นั่งอ่านหนังสือระหว่างรอ","คุณได้ใช้เวลารออย่างสนุก",{knowledge:3,h:1}),
 c("ชวนเด็กที่รอเหมือนกันคุย","คุณได้รู้จักเพื่อนอีกคน",{social:3,friend:2}),
 c("บอกครูว่ากังวลและขอให้อยู่ใกล้ๆ","ครูช่วยให้คุณสบายใจขึ้น",{r:2,confidence:1})]);
add("saving",8,33,"ของเล่นที่ราคาเกินเงินที่มี","คุณเห็นของเล่นที่อยากได้ คนที่บ้านบอกว่ายังไม่ซื้อทันที คุณจะทำอย่างไร",[
 c("ขอเก็บเงินค่าขนมหรือเงินของขวัญทีละน้อย","คุณเริ่มมีเป้าหมายการออม",{discipline:3,security:2},{kidSave:"yes"}),
 c("ลองทำของเล่นจากสิ่งที่มี","คุณค้นพบวิธีสนุกโดยไม่ต้องซื้อ",{creative:4,problem:2}),
 c("ขอให้คนที่บ้านช่วยเลือกของที่เหมาะกับงบ","คุณเข้าใจข้อจำกัดและทางเลือก",{problem:3,r:2}),
 c("เปลี่ยนใจไปเล่นของเดิม","คุณไม่จำเป็นต้องได้ของใหม่เสมอ",{selfcontrol:3,h:2})]);
add("saved9",9,33,"สิ่งที่ตั้งใจเก็บเงินไว้","คุณจำได้ว่าเคยอยากได้ของเล่นและเริ่มคิดเรื่องเก็บเงิน ตอนนี้อยากจัดการเงินของขวัญหรือค่าขนมอย่างไร",[
 c("เก็บต่อจนพอสำหรับสิ่งที่อยากได้","คุณฝึกวางแผนและรอ",{discipline:4,security:3},{kidSave:""}),
 c("เลือกของราคาต่ำกว่าและเก็บส่วนที่เหลือ","คุณเรียนรู้การเปรียบเทียบทางเลือก",{problem:3,security:3},{kidSave:""}),
 c("เปลี่ยนเป้าหมายเป็นหนังสือหรือกิจกรรม","คุณได้ทบทวนสิ่งที่ชอบจริง",{knowledge:2,experience:2},{kidSave:""}),
 c("ยังไม่ใช้เงินในตอนนี้","คุณยังรักษาอิสระในการตัดสินใจ",{selfcontrol:3},{kidSave:""})],"save");
W.allowed=(e,st,s)=>{
 if(e.cw!=="childx")return prev.allowed(e,st,s);
 switch(e.kidGate){
 case "mek":return canMek(st)&&st.kidMekStop!=="yes";
 case "mek6":return canMek(st)&&st.kidMekStop!=="yes"&&st.kidMekIssue!=="glass";
 case "mek7":return canMek(st)&&st.kidMekStop!=="yes"&&!!st.kidMek6;
 case "city":return canMek(st)&&["road","house","own"].includes(st.kidCity);
 case "cityIssue":return canMek(st)&&st.kidMekIssue==="city";
 case "pal":return palOK(st)&&st.kidPalStop!=="yes";
 case "palplay":return palOK(st)&&st.kidPalPlay==="yes"&&st.kidPalStop!=="yes";
 case "palissue":return palOK(st)&&st.kidPalIssue==="fight"&&st.kidPalStop!=="yes";
 case "fah":return canFah(st);
 case "fahcard":return canFah(st)&&st.kidFahCard==="yes";
 case "gift":return !!st.kidGift;
 case "read":return st.kidRead==="yes";
 case "sport":return !!st.kidSport;
 case "sportpractice":return !!st.kidSport&&st.kidSportPractice==="yes";
 case "hw":return st.kidMissingHW==="yes";
 case "familytrip":return st.kidFamilyTrip==="yes";
 case "class":return st.kidClassPractice==="yes";
 case "contest":return st.kidContest==="yes";
 case "save":return st.kidSave==="yes";
 default:return true;
 }};
W.after=(st,old,e,n,ch,item)=>{
 prev.after(st,old,e,n,ch,item);
 if(e.id==="kid_newpal"){patch(st,"นัท",{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"});patch(st,"ข้าวปั้น",{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"});if(st.kidPal)patch(st,st.kidPal,{feeling:"รู้สึกดี",boundary:"เปิดใจ"});}
 if(e.id.startsWith("kid_mek")&&st.kidMekStop==="yes")patch(st,"เมฆ",{feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"});
 if(e.id.startsWith("kid_pal")&&st.kidPalStop==="yes")patch(st,st.kidPal,{feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"});
};
P.allowed=(e,st,s)=>{
 if(e.id==="people_mek_visit"&&s.answers.meet_mek===2)return false;
 if(e.id==="glass"&&s.answers.kid_mek5!==undefined&&![0,1].includes(s.answers.kid_mek5))return false;
 if(e.id==="glass"&&st.kidMekStop==="yes")return false;
 if(e.id==="people_intro_fah"&&e.age<=8)return false;
 return prev.peopleAllowed(e,st,s);
};
P.after=(st,old,e,n,ch,item)=>{
 const before=old.people?.["เมฆ"]?{...old.people["เมฆ"]}:null;
 prev.peopleAfter(st,old,e,n,ch,item);
 // A normal goodbye or parallel play is not a lifetime rejection.
 if(e.id==="toy_a"&&[1,3].includes(n)&&before)patch(st,"เมฆ",before);
 if(e.id==="people_mek_visit"&&n===1)patch(st,"เมฆ",{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"});
 if(e.id==="glass"&&n===1){st.kidMekIssue="glass";patch(st,"เมฆ",{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"});}
 if(e.id==="apology"){
  if([0,3].includes(n)){st.kidMekIssue="";patch(st,"เมฆ",{feeling:"รู้สึกดี",boundary:"เปิดใจ"});}
  if(n===2){st.kidMekIssue="glass";patch(st,"เมฆ",{feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"});}
 }
};
F.gate=(e,st)=>{
 if(e.age>=5&&e.age<=8&&e.freedom==="topic")return false;
 if(e.age>=6&&e.age<=8&&e.freedom==="focus")return false;
 return prev.gate(e,st);
};
F.limit=a=>a>=3&&a<=8?3:prev.limit(a);
F.valid=(st,s,a,x)=>a>=3&&a<=8?F.used(st,a)<F.limit(a)&&!!x&&!(st.freeYear===a&&st.freeKeys[x.key])&&((x.delta.m||0)>=0||s.stats.m>=-x.delta.m):prev.valid(st,s,a,x);
F.activities=(st,s,a)=>{
 if(a<3||a>8)return prev.activities(st,s,a);
 const act=(key,title,result,delta,patch={})=>({key:"kidfree_"+key,title,result,delta,patch});
 const actions=[
 act("blocks","เล่นตัวต่อ / สร้างเมือง","คุณสร้างบ้านหรือถนนจากตัวต่อและฝึกแก้ปัญหา",{creative:3,problem:2}),
 act("read","อ่านนิทานกับคนที่บ้าน","คุณสนุกกับเรื่องและฝึกคำศัพท์ตามวัย",{knowledge:3,r:1},{childAction:"read"}),
 act("draw","วาดรูป / ระบายสี","คุณได้สร้างภาพตามจินตนาการ",{creative:3,h:2}),
 act("ball","ออกไปเล่นบอลหรือวิ่งเล่นกับผู้ใหญ่","คุณได้เคลื่อนไหวและพักจากห้องเรียน",{physical:3,h:2},{childAction:"sport"}),
 act("help","ช่วยจัดของเล่นและงานเล็กๆ ที่บ้าน","คุณช่วยงานที่เหมาะกับวัย",{responsibility:3,r:2}),
 act("rest","ดูการ์ตูน / พักกับครอบครัว","คุณมีเวลาสนุกและพักผ่อน",{h:3,energy:3})];
 if(a>=5)actions.push(act("homework","ฝึกอ่านเขียนหรือทำแบบฝึกหัด","คุณสะสมพื้นฐานการเรียน",{knowledge:3,discipline:2}));
 if(canMek(st)&&st.kidMekStop!=="yes")actions.push(act("mek","ชวนเมฆมาเล่น","เมฆตกลงเล่นด้วยกันในช่วงที่ทั้งคู่สะดวก",{friend:3,h:2},{contact:"เมฆ",affinity:3,childAction:"mek"}));
 else if(known(st,"เมฆ"))actions.push(act("mek_retry","ขอให้ผู้ใหญ่ช่วยชวนเมฆมาคุยกัน","คุณเปิดโอกาสให้ทำความรู้จักใหม่โดยไม่บังคับให้เมฆสนิททันที",{social:2,patience:2},{contact:"เมฆ",kind:"reconnect",affinity:1,childAction:"mekRetry"}));
 if(canFah(st))actions.push(act("fah","ชวนฟ้าวาดรูปหรือเล่นตัวต่อ","คุณได้ใช้เวลากับฟ้าตามที่ทั้งคู่สะดวก",{friend:3,creative:2},{contact:"ฟ้า",affinity:3}));
 if(palOK(st))actions.push(act("pal","ชวน "+st.kidPal+" เล่น","คุณได้ใช้เวลากับเพื่อนที่รู้จัก",{friend:3,h:2},{contact:st.kidPal,affinity:3}));
 return actions.filter(x=>F.valid(st,s,a,x));
};
F.replay=(st,item)=>{
 prev.replay(st,item);
 const a=item.free?.patch?.childAction;
 if(a==="read")st.kidRead="yes";
 if(a==="sport")st.kidSport=st.kidSport||"run";
 if(a==="mek")st.kidMek6="yes";
 if(a==="mekRetry"){st.kidMekStop="";st.kidMekIssue="";patch(st,"เมฆ",{feeling:"เฉยๆ",boundary:"ยังไม่สนิท"});}
};
})(window);


// Family childhood and responsive environments; preserve previous arcs and save IDs.
(function familyChildhood(w){
"use strict";
const W=w.CAREER_WORLD,F=w.LIFE_FREEDOM,P=w.PEOPLE,S=w.STORY;
const prev={allowed:W.allowed,choices:W.choices,story:W.story,after:W.after,activities:F.activities,replay:F.replay};
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const stub=Array.from({length:4},()=>c("ตัดสินใจ","ผลขึ้นกับเหตุการณ์ในเกม"));
const add=(id,age,order,title,story,choices=stub,gate="")=>S.push({id:"familykid_"+id,age,order,title,story,cw:"familykid",fk:id,fkGate:gate,custom:true,choices});
const grand=st=>st.fkGrand==="dad"?"ปู่กับย่า":"ตากับยาย";
const trouble=st=>(st.fkConduct||0)>=4&&(st.fkIncidents||0)>=2;
const friends=st=>["เมฆ","ฟ้า",st.kidPal].filter((n,i,v)=>n&&v.indexOf(n)===i&&P.privateOK(st,n));
const env=st=>({grand:"ใช้เวลาหลังเลิกเรียนกับ"+grand(st),club:"เข้ากิจกรรมหลังเลิกเรียนกับครู",home:"ปรับตารางและข้อตกลงที่บ้าน",support:"ฝึกจัดการอารมณ์กับผู้ใหญ่ที่ไว้ใจ"}[st.fkEnv]||"ปรับกิจวัตรร่วมกัน");
add("dad1",1,6,"พ่อกลับถึงบ้าน","ประตูเปิดออก พ่อกลับมาถึงบ้านและย่อตัวลงยื่นมือมาหาคุณ",[
c("คลานเข้าไปกอดพ่อ","พ่ออุ้มคุณขึ้นและยิ้มกว้าง",{father:3,h:2}),c("ยื่นของเล่นให้ดู","พ่อเล่นของเล่นกับคุณสักพัก",{father:2,social:1}),c("เกาะแม่ไว้ก่อน","แม่อยู่ใกล้ๆ ให้คุณค่อยๆ ปรับตัว",{mother:2}),c("หาวแล้วขอนอน","คนที่บ้านพาคุณไปพัก",{energy:2})]);
add("grandintro",2,6,"ญาติที่มาเยี่ยมบ้าน","พ่อแม่กำลังจะแนะนำญาติผู้ใหญ่ที่มาเยี่ยมให้คุณรู้จัก",[
c("ยิ้มให้ปู่กับย่า","พ่อแนะนำญาติฝั่งพ่อและพาคุณเล่นด้วยกัน",{father:2,r:2},{fkGrand:"dad"}),c("ยื่นของเล่นให้ตากับยาย","แม่แนะนำญาติฝั่งแม่และทั้งคู่เล่นกับคุณ",{mother:2,r:2},{fkGrand:"mom"}),c("ขออยู่ใกล้แม่ก่อน","ตากับยายทักทายและให้คุณค่อยๆ คุ้นเคย",{mother:2},{fkGrand:"mom"}),c("เล่นของตัวเองก่อน","ญาติให้พื้นที่และยังไม่เริ่มกิจกรรมร่วมกัน",{selfcontrol:1})]);
add("grandvisit",3,16,"วันหยุดที่บ้านญาติ","ญาติที่เคยรู้จักชวนครอบครัวไปกินข้าว คุณอยากไปไหม",[
c("ไปด้วยและชวนผู้ใหญ่เล่น","คุณเริ่มคุ้นกับบ้านอีกหลัง",{r:3,h:3},{fkGrandVisit:true}),c("ไปด้วยและขอดูของเก่า","คุณได้ฟังเรื่องครอบครัว",{knowledge:2,r:3},{fkGrandVisit:true}),c("ขออยู่บ้านกับคนดูแล","ผู้ใหญ่จัดคนดูแลให้ตามความพร้อม",{h:2}),c("ขอไปวันอื่น","ยังมีโอกาสนัดกันใหม่",{patience:2})],"grand");
add("grandmeal",3,17,"ครัวที่มีกลิ่นหอม","ผู้ใหญ่ที่บ้านญาติกำลังเตรียมอาหารและชวนคุณช่วยในส่วนที่ปลอดภัย",[
c("ช่วยจัดช้อนและจานพลาสติก","ทุกคนยิ้มเมื่อคุณช่วยจัดโต๊ะ",{responsibility:3,r:2},{fkGrandVisit:false,fkSignal:-1}),c("ฟังเรื่องตอนพ่อแม่ยังเด็ก","คุณรู้ว่าพ่อแม่ก็เคยซน",{h:3,experience:2},{fkGrandVisit:false}),c("ชวนผู้ใหญ่เล่นเกม","บ้านเต็มไปด้วยเสียงหัวเราะ",{h:4,r:2},{fkGrandVisit:false}),c("นั่งเล่นของตัวเอง","คุณได้พักตามใจ",{energy:2},{fkGrandVisit:false})],"grandvisit");
add("mallinvite",4,34,"ไปห้างครั้งแรก","ครอบครัวมีธุระในเมืองและชวนคุณไปด้วย ที่นั่นมีร้านของเล่นและร้านอาหาร",[
c("อยากไปด้วย","ครอบครัวตกลงให้คุณไปด้วย",{h:2,experience:2},{fkTrip:"mall"}),c("อยากดูร้านหนังสือด้วย","ผู้ใหญ่ตกลงแวะถ้ามีเวลา",{knowledge:2,h:2},{fkTrip:"mall"}),c("ขออยู่กับคนดูแลที่บ้าน","คุณเลือกวันสบายๆ",{h:2}),c("ขอไปครั้งหน้า","ครอบครัวรับรู้ว่าคุณยังไม่อยากไป",{patience:1})]);
add("mall",4,35,"ของเล่นหลังตู้กระจก","เมื่อมาถึงห้าง คุณเห็นของเล่นที่อยากได้มาก แต่ผู้ใหญ่บอกว่าวันนี้อาจยังไม่ได้ซื้อ",stub,"mall");
add("mallfollow",4,36,"ตอนเดินออกจากร้าน","ผู้ใหญ่ชวนคุยเรื่องที่เพิ่งเกิดขึ้น",[
c("บอกว่าชอบของเล่นมาก","ผู้ใหญ่รับฟังความรู้สึกและอธิบายงบ",{r:3,social:2},{fkMallIssue:"",fkSignal:-1}),c("ยอมรับว่าวันนี้ยังซื้อไม่ได้","คุณได้ฝึกรอและเลือกกิจกรรมอื่น",{patience:3,selfcontrol:2},{fkMallIssue:"",fkSignal:-1}),c("ยังโกรธและไม่อยากคุย","ผู้ใหญ่ให้เวลาคุณสงบลง",{stress:2},{fkMallIssue:"",fkSignal:1}),c("ขอไปทำอย่างอื่นด้วยกัน","ครอบครัวกลับมาสนุกกับวันนั้นได้",{h:3,r:2},{fkMallIssue:"",fkSignal:-1})],"mallfollow");
add("mom5",5,34,"แม่ทำขนมผิดสูตร","แม่ทำขนมออกมาไม่สวยเหมือนในรูป แม่หัวเราะแล้วถามว่าคุณอยากช่วยไหม",[
c("ช่วยแต่งขนมให้เป็นหน้าตลก","ขนมหน้าประหลาดกลายเป็นมื้อสนุก",{mother:4,creative:3,h:2}),c("ชิมแล้วบอกแม่ว่าชอบตรงไหน","แม่ได้ฟังความเห็นของคุณ",{mother:3,social:2}),c("บ่นว่าทำไมไม่เหมือนในร้าน","แม่อธิบายว่าคนเราทำพลาดได้",{mother:-1,patience:1},{fkSignal:1}),c("ขอไปเล่นแล้วค่อยมากิน","แม่ให้คุณทำสิ่งที่ชอบ",{h:2})]);
add("seaoffer",5,36,"จะไปเที่ยวทะเลไหม","คนที่บ้านชวนวางแผนวันหยุด ยังไม่ได้จองหรือออกเดินทาง",stub);
add("sea",5,37,"ทราย น้ำ และเสียงคลื่น","หลังตกลงไปเที่ยว ครอบครัวพาคุณมาชายหาด ผู้ใหญ่อยู่ใกล้ๆ และกำหนดพื้นที่เล่นที่ปลอดภัย",[
c("สร้างปราสาททรายกับคนที่บ้าน","คุณกับครอบครัวช่วยกันสร้างกำแพง",{creative:4,r:3,h:3},{fkSea:"castle",fkTrip:""}),c("เดินดูเปลือกหอยกับผู้ใหญ่","คุณได้สังเกตสิ่งใหม่",{knowledge:3,h:3},{fkSea:"shell",fkTrip:""}),c("เล่นน้ำในบริเวณที่ผู้ใหญ่ดูแล","คุณสนุกกับน้ำและฟังคำเตือน",{physical:3,h:4},{fkSea:"water",fkTrip:""}),c("กินของว่างใต้ร่มกับครอบครัว","คุณสนุกกับทะเลในแบบตัวเอง",{h:4,r:3},{fkSea:"snack",fkTrip:""})],"sea");
add("rules",6,34,"การ์ตูนตอนดึก","ผู้ใหญ่เตือนว่าใกล้ถึงเวลานอน พรุ่งนี้ต้องไปโรงเรียน แต่การ์ตูนกำลังสนุก",[
c("ปิดแล้วไปเตรียมนอน","คุณรักษาเวลาพัก",{discipline:3,energy:3},{fkSignal:-1}),c("ขออีกห้านาทีแล้วทำตามที่ตกลง","คุณฝึกต่อรองและรักษาคำพูด",{reliable:3,h:2},{fkSignal:-1}),c("แอบเปิดดูต่อหลังถูกเตือน","คุณนอนช้าและผู้ใหญ่เริ่มกังวล",{energy:-4,i:-2,discipline:-2},{fkSignal:2}),c("โวยวายเมื่อผู้ใหญ่ปิดทีวี","ผู้ใหญ่ช่วยให้คุณสงบลง แต่เกิดความตึงเครียด",{stress:3,r:-2},{fkSignal:2})]);
add("dad6",6,36,"วันของเรากับพ่อ","พ่อมีเวลาว่างและชวนคุณทำอะไรด้วยกัน",[
c("ช่วยพ่อซ่อมของเล่น","คุณได้ฝึกแก้ปัญหาด้วยเครื่องมือที่ปลอดภัย",{father:4,skill:3,problem:2}),c("ชวนพ่อเล่นบอล","ทั้งคู่ได้เคลื่อนไหวและหัวเราะ",{father:4,physical:3}),c("ขอฟังเรื่องสมัยพ่อยังเด็ก","คุณได้รู้จักพ่อมากขึ้น",{father:4,experience:2}),c("ขอใช้เวลาคนเดียววันนี้","พ่อให้พื้นที่และยังชวนคุณวันอื่นได้",{h:2})]);
add("shop7",7,34,"ของที่ยังไม่ได้จ่ายเงิน","คุณเห็นของเล่นเล็กๆ ที่ร้านและอยากได้มาก ผู้ใหญ่ยังไม่ได้อนุญาตให้ซื้อ",[
c("ถามก่อนว่าซื้อได้ไหม","คุณฝึกขออนุญาตและเข้าใจงบ",{i:2,responsibility:2},{fkSignal:-1}),c("วางกลับแล้วจำไว้","คุณมีเป้าหมายโดยไม่ต้องได้ทันที",{selfcontrol:3},{fkSignal:-1}),c("ซ่อนไว้ในกระเป๋าโดยไม่จ่าย","ผู้ใหญ่พบของและพาคุณกลับไปคืน",{i:-5,stress:3},{fkSignal:3,fkShop:true}),c("ร้องขอจนผู้ใหญ่ต้องหยุดเดิน","ผู้ใหญ่พาคุณพักจากสถานการณ์โดยไม่รับปากซื้อ",{stress:2,selfcontrol:-1},{fkSignal:2})]);
add("shopfollow",7,35,"กลับไปคุยที่ร้าน","ร้านยินดีรับของคืนและผู้ใหญ่ให้คุณมีส่วนรับผิดชอบ",[
c("คืนของและขอโทษ","คุณเข้าใจว่าของในร้านมีเจ้าของ",{i:4,responsibility:3},{fkShop:false,fkSignal:-2}),c("ขอให้ผู้ใหญ่ช่วยพูดด้วย","คุณฝึกรับผิดชอบทีละขั้น",{r:2,responsibility:2},{fkShop:false,fkSignal:-1}),c("เงียบและไม่อยากมองใคร","ผู้ใหญ่จัดการคืนของ แต่ยังต้องคุยกันอีก",{stress:2},{fkShop:false,fkSignal:1}),c("ยอมรับว่าทำผิดแม้รู้สึกอาย","คุณเริ่มเข้าใจผลที่เกิดกับคนอื่น",{i:3,e:3},{fkShop:false,fkSignal:-2})],"shop");
add("parenttalk",7,38,"พ่อแม่เริ่มเป็นห่วง","หลายครั้งที่ผ่านมา ผู้ใหญ่สังเกตว่าคุณจัดการความโกรธหรือทำตามข้อตกลงได้ยาก จึงอยากคุยเพื่อหาสาเหตุและปรับกิจวัตร",stub,"trouble");
add("newroutine",8,8,"สภาพแวดล้อมที่เปลี่ยนไป","ครอบครัวทดลองปรับกิจวัตรและคนช่วยดูแลตามแผนที่คุยกันไว้ คุณยังมีโรงเรียนและเพื่อนเดิม",[
c("ลองทำตามแผนและบอกสิ่งที่ไม่ชอบ","ผู้ใหญ่เข้าใจว่าควรช่วยคุณตรงไหน",{discipline:4,r:3},{fkTried:true,fkSignal:-2}),c("ขอปรับตารางให้มีเวลาเล่น","ครอบครัวหาสมดุลระหว่างกติกากับเวลาพัก",{problem:3,h:3},{fkTried:true,fkSignal:-1}),c("ต่อต้านกติกาใหม่ทุกครั้ง","ความตึงเครียดยังอยู่และต้องทบทวนแผน",{stress:4,r:-2},{fkTried:true,fkSignal:2}),c("ขอผู้ใหญ่ช่วยเมื่อเริ่มโมโห","คุณฝึกบอกความรู้สึกโดยไม่ทำให้คนอื่นเดือดร้อน",{selfcontrol:4,social:3},{fkTried:true,fkSignal:-2})],"routine");
add("seaRecall",8,36,"รูปถ่ายจากวันเที่ยวทะเล","ครอบครัวเจอรูปจากวันที่เคยไปทะเลด้วยกัน",[
c("ชวนคนที่บ้านเล่าเรื่องวันนั้น","ทุกคนได้หัวเราะกับความทรงจำ",{r:4,h:4}),c("วาดรูปทะเลจากความจำ","คุณเก็บภาพวันนั้นในแบบของตัวเอง",{creative:4,h:2}),c("ขอไปเที่ยวอีกเมื่อพร้อม","ครอบครัวได้คุยเรื่องวันหยุดในอนาคต",{r:3,h:2}),c("ดูรูปแล้วกลับไปเล่น","คุณเก็บความทรงจำโดยไม่ต้องทำกิจกรรมต่อ",{h:2})],"seamemory");
add("parentgood",8,38,"พ่อแม่สังเกตว่าคุณโตขึ้น","ช่วงที่ผ่านมา คุณเริ่มรักษาคำพูดและช่วยงานตามวัยได้ดีขึ้น คนที่บ้านอยากให้ลองรับผิดชอบเรื่องเล็กๆ ด้วยตัวเอง",[
c("ขอเลือกกิจกรรมวันหยุด","คุณได้รับพื้นที่ตัดสินใจเพิ่ม",{confidence:3,r:3},{fkAutonomy:true}),c("ช่วยจัดรายการซื้อของ","ผู้ใหญ่ให้คุณลองคิดตามงบ",{problem:3,responsibility:3},{fkAutonomy:true}),c("ขอลองทำโครงงานที่สนใจ","ครอบครัวช่วยเตรียมของตามกำลัง",{creative:4,skill:2},{fkAutonomy:true}),c("ยังอยากให้ผู้ใหญ่ช่วยเลือก","คุณยังเรียนรู้ทีละขั้นได้",{r:2})],"good");
add("grandstory",8,40,"พ่อแม่ก็เคยซน","ญาติชวนดูรูปเก่าและเล่าเรื่องพ่อแม่สมัยเด็ก",[
c("ถามว่าพ่อแม่เคยดื้อเหมือนกันไหม","ทุกคนหัวเราะและคุณได้รู้จักครอบครัวอีกด้าน",{h:4,r:3}),c("ขอฟังเรื่องอาชีพของญาติ","คุณรู้จักโลกของคนรุ่นก่อน",{knowledge:3,experience:3}),c("ชวนถ่ายรูปด้วยกัน","คุณสร้างความทรงจำกับคนเดิม",{h:4,r:3},{fkPhoto:true}),c("ขอไปเล่นก่อน","ญาติให้พื้นที่คุณ",{h:2})],"grand");
add("friendhome",8,41,"ชวนเพื่อนมาเล่นที่บ้าน","คนที่บ้านบอกว่าหากอยากชวนเพื่อนที่รู้จักมาเล่น สามารถขออนุญาตผู้ใหญ่ทั้งสองบ้านก่อนได้",stub,"friendhome");
add("friendvisit",8,42,"เพื่อนมาถึงแล้ว","หลังตกลงและผู้ใหญ่ทั้งสองบ้านอนุญาต เพื่อนที่คุณชวนมาถึงบ้านแล้ว",[
c("ชวนเล่นตัวต่อ","ทั้งคู่สร้างของเล่นและสนุกด้วยกัน",{creative:3,friend:4},{fkGuest:""}),c("ชวนกินขนมและคุยกัน","เพื่อนได้รู้จักครอบครัวคุณมากขึ้น",{friend:4,social:2},{fkGuest:""}),c("แบ่งเวลาเล่นคนละอย่าง","ทั้งคู่ไม่ต้องชอบทุกอย่างเหมือนกัน",{friend:2,selfcontrol:2},{fkGuest:""}),c("ขอผู้ใหญ่ช่วยเมื่อเริ่มเถียง","ผู้ใหญ่ช่วยให้เล่นต่อได้ตามความสมัครใจ",{problem:3,friend:2},{fkGuest:""})],"friendvisit");
add("routinefollow",9,8,"เมื่ออยู่กับกติกาใหม่มาระยะหนึ่ง","ครอบครัวทบทวนว่าการปรับกิจวัตรช่วยคุณได้จริงไหม",[
c("บอกว่าสิ่งไหนช่วยได้และอยากรักษาไว้","ครอบครัวรักษาส่วนที่เหมาะและยกเลิกส่วนที่ไม่จำเป็น",{r:4,discipline:3},{fkEnv:"",fkTried:false,fkSignal:-2}),c("ขอเปลี่ยนแผนเพราะไม่สบายใจ","ผู้ใหญ่รับฟังและหาวิธีใหม่",{r:3,problem:3},{fkEnv:"home",fkTried:false,fkSignal:-1}),c("ยังไม่อยากปรับอะไร","ครอบครัวเห็นว่าต้องใช้เวลาและการสนับสนุนเพิ่ม",{stress:3},{fkEnv:"support",fkTried:false,fkSignal:1}),c("ขอรับผิดชอบเรื่องเล็กๆ ด้วยตัวเอง","ผู้ใหญ่ให้ลองตามความพร้อม",{confidence:4,responsibility:3},{fkEnv:"",fkTried:false,fkSignal:-2})],"routinefollow");
add("holiday9",9,41,"วันหยุดที่คุณช่วยวางแผน","ครอบครัวให้คุณเสนอแผนวันหยุดตามเวลาและงบของบ้าน",[
c("เสนอไปพิพิธภัณฑ์หรือห้องสมุด","ครอบครัวเลือกสถานที่ที่เหมาะกับงบ",{knowledge:4,r:2}),c("เสนอไปสวนหรือสนามเด็กเล่น","ทุกคนได้ออกไปเคลื่อนไหว",{physical:3,h:3,r:2}),c("จัดมื้อพิเศษและเล่นเกมที่บ้าน","คุณสร้างความสุขโดยไม่เดินทางไกล",{h:4,r:3}),c("ให้ทุกคนช่วยกันเลือก","คุณฝึกฟังความคิดเห็นของคนอื่น",{social:3,problem:2})]);
add("grand10",10,34,"ภาพครอบครัวที่ยังอยู่","ญาตินำรูปที่คุณเคยชวนถ่ายด้วยกันกลับมาให้ดู และถามว่าช่วงนี้โรงเรียนเป็นอย่างไร",[
c("เล่าเรื่องที่ชอบในโรงเรียน","ญาติได้รู้จักคุณในวัยที่โตขึ้น",{r:3,h:3}),c("ถามเรื่องที่ท่านเคยฝันอยากทำ","ทั้งคู่แลกเปลี่ยนเรื่องชีวิต",{e:3,experience:2}),c("ชวนถ่ายรูปใหม่ด้วยกัน","คุณเพิ่มความทรงจำครอบครัว",{h:4,r:3}),c("ขอเก็บรูปไว้และค่อยคุยวันอื่น","คุณรักษาของที่มีความหมาย",{h:2})],"photo");
W.allowed=(e,st,s)=>{
if(e.cw!=="familykid")return prev.allowed(e,st,s);
switch(e.fkGate){
case "grand":return !!st.fkGrand;
case "grandvisit":return !!st.fkGrand&&!!st.fkGrandVisit;
case "mall":return st.fkTrip==="mall";
case "mallfollow":return !!st.fkMallIssue;
case "sea":return st.fkTrip==="sea";
case "seamemory":return !!st.fkSea;
case "shop":return !!st.fkShop;
case "trouble":return trouble(st)&&!st.fkEnv;
case "routine":return !!st.fkEnv&&!st.fkTried;
case "routinefollow":return !!st.fkEnv&&!!st.fkTried;
case "good":return (st.fkGood||0)>=2&&!trouble(st)&&!st.fkEnv;
case "photo":return !!st.fkGrand&&!!st.fkPhoto;
case "friendhome":return friends(st).length>0;
case "friendvisit":return !!st.fkGuest&&friends(st).includes(st.fkGuest);
default:return true;
}};
W.story=(e,st)=>{
if(e.cw!=="familykid")return prev.story(e,st);
switch(e.fk){
case "grandvisit":return grand(st)+" ที่คุณเคยรู้จัก ชวนครอบครัวไปกินข้าวด้วยกัน คุณอยากไปไหม";
case "grandmeal":return "ที่บ้าน"+grand(st)+" ผู้ใหญ่กำลังเตรียมอาหารและชวนคุณช่วยในส่วนที่ปลอดภัย";
case "mallfollow":return st.fkMallIssue==="tantrum"?"หลังคุณร้องไห้เพราะอยากได้ของเล่น ผู้ใหญ่พาไปนั่งในมุมสงบและถามว่าเกิดอะไรขึ้น":"หลังตกลงว่าจะยังไม่ซื้อของ ผู้ใหญ่ชวนคุยว่าจะจัดการความอยากได้ครั้งต่อไปอย่างไร";
case "seaRecall":return "ครอบครัวเปิดรูปจากวันที่ไปทะเลเมื่อห้าขวบ คุณจำได้ว่าเคย"+({castle:"สร้างปราสาททราย",shell:"เดินดูเปลือกหอย",water:"เล่นน้ำกับผู้ใหญ่",snack:"กินของว่างใต้ร่ม"}[st.fkSea]||"ใช้เวลาด้วยกัน")+" วันนี้อยากคุยเรื่องนั้นไหม";
case "newroutine":return "หลังคุยเรื่องที่ผู้ใหญ่เป็นห่วง ครอบครัวทดลอง"+env(st)+" โดยยังไม่บังคับให้เลิกคบเพื่อนหรือเปลี่ยนโรงเรียน คุณอยากปรับตัวอย่างไร";
case "routinefollow":return "หลังทดลอง"+env(st)+" มาระยะหนึ่ง ครอบครัวอยากรู้ว่าคุณรู้สึกอย่างไรและควรปรับอะไรอีก";
case "grandstory":return grand(st)+" ชวนคุณดูรูปเก่าและเล่าเรื่องพ่อแม่สมัยเด็ก";
case "grand10":return grand(st)+" นำรูปที่คุณเคยชวนถ่ายกลับมาให้ดู";
case "friendvisit":return st.fkGuest+" มาถึงบ้านตามที่ผู้ใหญ่ทั้งสองบ้านตกลงกัน คุณอยากทำอะไรด้วยกัน";
default:return e.story;
}};
W.choices=(e,st,s)=>{
if(e.cw!=="familykid")return prev.choices(e,st,s);
const budget=s.origin?.family||"ordinary",home=s.origin?.home||"warm";
switch(e.fk){
case "mall":return [
c("ถามว่ามีงบซื้อของเล่นไหม",budget==="modest"?"ผู้ใหญ่อธิบายว่าต้องเก็บเงินไว้สำหรับของจำเป็น":"ผู้ใหญ่ให้คุณดูราคาและเลือกไว้ก่อน",{problem:2,selfcontrol:2},{fkTrip:"",fkMallIssue:"wait",fkSignal:-1}),
c("ขอแค่ดูของเล่นแล้วไปกินข้าว","ครอบครัวได้เดินเล่นด้วยกัน",{h:3,r:2},{fkTrip:"",fkSignal:-1}),
c("ร้องไห้และยืนยันว่าต้องได้เดี๋ยวนี้","ผู้ใหญ่พาคุณไปพักในที่สงบโดยยังไม่ซื้อให้",{stress:3,r:-1},{fkTrip:"",fkMallIssue:"tantrum",fkSignal:2}),
c("จำชื่อของเล่นไว้เป็นของขวัญในอนาคต","คุณมีสิ่งที่ตั้งตารอ",{patience:3,security:2},{fkTrip:"",fkMallIssue:"wait",fkSignal:-1})];
case "seaoffer":return [
c("อยากไปทะเลกับครอบครัว",budget==="modest"?"ครอบครัววางแผนไปแบบประหยัดเมื่อจัดค่าเดินทางได้":"ครอบครัวตกลงแผนเดินทางตามงบและเวลา",{h:3,r:2},{fkTrip:"sea"}),
c("อยากไปสวนใกล้บ้านแทน","ครอบครัวรับฟังทางเลือกที่ไม่ต้องเดินทางไกล",{physical:2,r:2}),c("อยากไปเยี่ยมญาติแทนถ้าสะดวก","ครอบครัวรับฟังและยังไม่ตกลงการเดินทาง",{r:2}),c("ขออยู่บ้านเล่นและพัก","คุณเลือกวันหยุดเรียบง่าย",{h:3,energy:2})];
case "parenttalk":{const proposed=st.fkGrand?"grand":home==="strict"?"home":home==="busy"?"club":"support";return [
c("เล่าว่าช่วงนี้หงุดหงิดหรือไม่สบายใจ","ผู้ใหญ่รับฟังและเสนอทดลองปรับสภาพแวดล้อมให้เหมาะกับคุณ",{r:3,social:2},{fkEnv:proposed,fkSignal:-1}),
c("ขอให้พ่อแม่ช่วยตั้งกติกาที่เข้าใจง่าย","ครอบครัวตกลงตารางที่ชัดขึ้น",{discipline:3,r:2},{fkEnv:"home",fkSignal:-1}),
c("ยังไม่อยากคุยและไม่ร่วมมือ","ผู้ใหญ่ตัดสินใจทดลองปรับกิจวัตรโดยยังดูแลความปลอดภัยและการเรียน",{stress:3},{fkEnv:proposed,fkSignal:1}),
c("ขอลองกิจกรรมใหม่กับครู","ครอบครัวเลือกกิจกรรมที่เหมาะกับวัยโดยไม่ใช้เป็นการลงโทษ",{experience:3,social:2},{fkEnv:"club"})];}
case "friendhome":return [...friends(st).slice(0,3).map(n=>c("ขออนุญาตชวน "+n+" มาเล่น","ผู้ใหญ่ทั้งสองบ้านตกลงนัดพบ",{friend:2,r:2},{fkGuest:n})),c("วันนี้อยากใช้เวลากับคนที่บ้าน","คุณไม่ได้ชวนเพื่อนมา",{r:3,h:2},{fkGuest:""})];
default:return e.choices;
}};
const conduct={kid_homework:[0,-1,0,2],kid_hwresult:[-2,-1,1,-2],kid_family6:[-1,-1,1,0],kid_palfight:[-1,-1,2,-1],kid_palrepair:[-2,-1,0,0],kid_mek8:[-1,0,2,-1],glass:[-1,2,1,-1],apology:[-2,0,2,-2],school_b:[-1,-1,2,-1],toy_b:[-1,0,2,-1],wallet:[-1,2,0,0]};
const signal=(st,v)=>{if(!v)return;st.fkConduct=Math.max(0,Math.min(20,(st.fkConduct||0)+v));if(v>0)st.fkIncidents=(st.fkIncidents||0)+1;else st.fkGood=(st.fkGood||0)+1;};
W.after=(st,old,e,n,ch,item)=>{
prev.after(st,old,e,n,ch,item);
if(item.age>12)return;
signal(st,e.cw==="familykid"?(ch.set?.fkSignal||0):(conduct[e.id]?.[n]||0));delete st.fkSignal;
};
F.activities=(st,s,a)=>{
const base=prev.activities(st,s,a);if(a<3||a>10)return base;
const act=(k,title,result,delta,patch={})=>({key:"familyfree_"+k,title,result,delta,patch});
const extra=[act("mom","ชวนแม่ทำขนมหรืออ่านนิทาน","คุณได้ใช้เวลากับแม่",{mother:3,h:2}),act("dad","ชวนพ่อเล่นหรือทำของเล่น","คุณได้ใช้เวลากับพ่อ",{father:3,skill:2}),act("family","ช่วยจัดโต๊ะอาหารกับคนที่บ้าน","คุณได้ช่วยงานที่เหมาะกับวัย",{r:3,responsibility:2},{familySignal:-1}),act("garden","ขอผู้ใหญ่พาไปเดินเล่นใกล้บ้าน","คุณได้เปลี่ยนบรรยากาศ",{physical:3,h:2})];
if(st.fkGrand)extra.push(act("grand","ขอไปเยี่ยม"+grand(st),"ครอบครัวช่วยนัดพบญาติตามความสะดวก",{r:3,h:3}));
return [...base,...extra.filter(x=>F.valid(st,s,a,x))];
};
F.replay=(st,item)=>{prev.replay(st,item);signal(st,item.free?.patch?.familySignal||0);};
})(window);
