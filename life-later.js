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
case "parenttalk":{const proposed=home==="strict"?"home":home==="busy"?(st.fkGrand?"grand":"club"):home==="free"?"club":st.fkGrand?"grand":"support";return [
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


// Concrete alternate childhood environments and new contacts.
(function familyEnvironment(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,S=w.STORY;
const prev={allowed:W.allowed,after:W.after};
const c=(label,result,delta={},set={})=>({label,result,delta,set});
const add=(id,age,order,title,story,gate,choices)=>S.push({id:"familyenv_"+id,age,order,title,story,cw:"familyenv",env:gate,custom:true,choices});
add("grand",8,8.2,"บ่ายแรกที่บ้านญาติ","หลังตกลงปรับกิจวัตร ผู้ใหญ่พาคุณไปใช้เวลาหลังเลิกเรียนที่บ้านญาติที่เคยรู้จัก ที่นั่นมีกติกาเรื่องการเล่นและการทำการบ้านต่างจากบ้านของคุณ","grand",[
c("ช่วยจัดของและทำการบ้านก่อนเล่น","คุณได้ทดลองกิจวัตรใหม่และผู้ใหญ่ชื่นชมความพยายาม",{discipline:3,responsibility:3,r:2},{fkEnvGood:true}),
c("ชวนญาติเล่าเรื่องและทำของเล่นด้วยกัน","คุณได้สร้างความสัมพันธ์กับผู้ใหญ่ที่ดูแล",{creative:3,r:4,h:2},{fkEnvGood:true}),
c("บ่นว่าอยากกลับบ้านและไม่ทำตามกติกา","ญาติรับฟังว่าคุณคิดถึงบ้าน แต่ยังต้องหาข้อตกลงร่วมกัน",{stress:3,r:-2},{fkEnvGood:false}),
c("ขอให้ผู้ใหญ่ช่วยจัดตารางที่เข้าใจง่าย","คุณได้ฝึกบอกความต้องการและหาวิธีปรับตัว",{problem:3,selfcontrol:2},{fkEnvGood:true})]);
add("club",8,8.3,"วันแรกที่ชมรมหลังเลิกเรียน","ครูพาคุณไปพบกลุ่มเด็กที่ทำกิจกรรมหลังเลิกเรียน เด็กชื่อใบหม่อนเข้ามาแนะนำตัวและชวนสร้างของเล่นจากกระดาษ","club",[
c("ชวนใบหม่อนสร้างของเล่นด้วยกัน","ทั้งคู่แบ่งงานและเริ่มรู้จักกัน",{creative:3,friend:3},{fkClubFriend:true,fkEnvGood:true}),
c("ลองสร้างของเล่นของตัวเองก่อน","ครูช่วยให้คุณเรียนรู้ในจังหวะของตัวเอง",{skill:3,confidence:2},{fkEnvGood:true}),
c("บอกครูว่ายังไม่อยากเข้ากิจกรรม","ครูรับฟังและให้คุณดูคนอื่นก่อนได้",{selfcontrol:2},{fkEnvGood:false}),
c("ชวนใบหม่อนลองทำอย่างอื่นด้วยกัน","ทั้งคู่ได้แลกเปลี่ยนความสนใจ",{friend:3,social:2},{fkClubFriend:true,fkEnvGood:true})]);
add("home",8,8.4,"ตารางใหม่บนตู้เย็น","หลังตกลงปรับกิจวัตร พ่อแม่ติดตารางเวลาเล่น ทำการบ้าน และพักผ่อนบนตู้เย็น คุณได้รับโอกาสช่วยปรับตารางด้วย","home",[
c("ช่วยจัดเวลาที่เหมาะกับตัวเอง","ครอบครัวตกลงตารางที่เข้าใจร่วมกัน",{discipline:4,r:3},{fkEnvGood:true}),
c("ขอเพิ่มเวลาเล่นหลังทำการบ้านเสร็จ","คุณได้ฝึกต่อรองและรักษาข้อตกลง",{problem:3,h:3},{fkEnvGood:true}),
c("ไม่ทำตามตารางและฉีกกระดาษทิ้ง","ผู้ใหญ่ต้องหยุดคุยเรื่องตารางและกลับมาหาสาเหตุ",{stress:3,r:-3},{fkEnvGood:false}),
c("ขอลองทีละข้อก่อน","ครอบครัวช่วยให้คุณเริ่มจากสิ่งที่ทำได้",{patience:3,responsibility:2},{fkEnvGood:true})]);
add("support",8,8.5,"คนที่ช่วยฟังโดยไม่ดุ","หลังคุยกันที่บ้าน ผู้ใหญ่พาคุณไปพบครูหรือผู้ช่วยที่เหมาะกับเด็ก เขาชวนวาดรูปและเล่าว่าเกิดอะไรขึ้นเวลาโกรธ","support",[
c("วาดภาพตอนที่รู้สึกโมโห","คุณได้ฝึกสื่อสารอารมณ์ผ่านรูป",{creative:3,selfcontrol:3},{fkEnvGood:true}),
c("ลองฝึกวิธีขอพักเมื่อเริ่มโกรธ","คุณได้วิธีจัดการอารมณ์อีกแบบ",{selfcontrol:4,patience:2},{fkEnvGood:true}),
c("ขอนั่งเงียบๆ ก่อน","ผู้ใหญ่ให้พื้นที่โดยไม่บังคับให้เล่า",{energy:2},{fkEnvGood:false}),
c("บอกว่าคิดถึงบ้านและอยากให้พ่อแม่มาด้วย","ผู้ใหญ่รับฟังความต้องการและช่วยจัดการตามความเหมาะสม",{r:3,confidence:2},{fkEnvGood:true})]);
add("clubfriend",9,13,"ใบหม่อนที่ยังจำได้","ใบหม่อน เด็กที่คุณเคยเลือกทำกิจกรรมด้วยกันในชมรม ส่งของเล่นกระดาษมาให้และถามว่าวันนี้อยากเล่นด้วยกันไหม","friend",[
c("ชวนทำของเล่นชิ้นใหม่","ทั้งคู่รักษามิตรภาพที่เริ่มจากชมรม",{friend:4,creative:3}),c("ขอบคุณและคุยเรื่องที่ชอบ","คุณได้รู้จักเพื่อนมากขึ้น",{friend:3,social:2}),c("ขอไว้วันอื่น","ใบหม่อนให้พื้นที่คุณ",{patience:2}),c("บอกว่าไม่อยากเล่นด้วยแล้ว","คุณบอกขอบเขตโดยไม่ต้องทะเลาะ",{selfcontrol:2},{fkClubFriend:false})]);
add("retry",10,9,"แผนใหม่ที่ยังต้องลอง","ครอบครัวยังทดลองปรับกิจวัตร เพราะแผนก่อนหน้ายังไม่เหมาะทั้งหมด วันนี้คุณกับผู้ใหญ่ลองตกลงขั้นตอนที่ทำได้จริง","retry",[
c("เลือกเป้าหมายเล็กๆ ที่ทำได้ทุกวัน","คุณได้ฝึกตามข้อตกลงที่เป็นไปได้",{discipline:4,confidence:2},{fkEnv:"",fkTried:false}),
c("ขอเปลี่ยนกิจกรรมให้ตรงกับสิ่งที่ชอบ","ครอบครัวปรับแผนตามความต้องการของคุณ",{problem:3,h:3},{fkEnv:"",fkTried:false}),
c("ขอผู้ใหญ่ช่วยทบทวนปัญหาที่ค้าง","คุณได้พื้นที่สื่อสารโดยไม่ต้องรับผิดชอบลำพัง",{r:3,selfcontrol:3},{fkEnv:"",fkTried:false}),
c("ยังไม่พร้อมเปลี่ยนแปลง","ผู้ใหญ่ยังคงสนับสนุนและให้เวลาคุณ",{patience:2},{fkTried:true})]);
W.allowed=(e,st,s)=>{
if(e.cw!=="familyenv")return prev.allowed(e,st,s);
if(e.env==="friend")return !!st.fkClubFriend&&P.privateOK(st,"ใบหม่อน");
if(e.env==="retry")return !!st.fkEnv;
return st.fkEnv===e.env&&!!st.fkTried;
};
W.after=(st,old,e,n,ch,item)=>{
prev.after(st,old,e,n,ch,item);
if(e.id==="familyenv_club"&&st.fkClubFriend)st.people["ใบหม่อน"]={...(st.people["ใบหม่อน"]||{}),feeling:"รู้สึกดี",boundary:"เปิดใจ"};
if(e.id==="familyenv_clubfriend"&&n===3&&st.people["ใบหม่อน"])st.people["ใบหม่อน"]={...st.people["ใบหม่อน"],feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"};
if(e.cw==="familyenv"&&["grand","club","home","support"].includes(e.env))st.fkConduct=Math.max(0,(st.fkConduct||0)+(st.fkEnvGood?-2:1));
};
})(window);


// Skip boilerplate annual follow-ups without removing their IDs from the timeline.
// Existing saves can still replay their historical answers; genuine authored arcs remain active.
(function(w){
"use strict";
const W=w.CAREER_WORLD, previous=W.allowed;
W.allowed=(e,st,s)=>{
 if(e.annual===true && /^year_\d+_[01]_follow$/.test(e.id)) return false;
 return previous(e,st,s);
};
})(window);


// Authored life arcs with one-time stages and actual previous choices.
(function authoredLife(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,S=w.STORY,prev={allowed:W.allowed,choices:W.choices,story:W.story,after:W.after};
const c=(label,result,delta={},next="",extra={})=>({label,result,delta,next,extra});
const stage=(title,story,choices)=>({title,story,choices});
const active=st=>["งานประจำ","งานประจำควบธุรกิจ","ธุรกิจ","อิสระ"].includes(st.mode)&&st.lateWork!=="retired"&&(!!st.profession||!!st.everWorked);
const partnered=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!!st.partnerName;
const child=(st,a)=>st.children?.find(x=>a-x.born>=8&&a-x.born<=17);
const adultChild=(st,a)=>st.children?.find(x=>a-x.born>=23);
const friend=st=>Object.keys(st.people||{}).find(n=>n!==st.partnerName&&P.privateOK(st,n)&&st.people[n].feeling==="รู้สึกดี");
const science=(st,t)=>t.knowledge>=12&&(st.kidRead==="yes"||st.kidClassPractice==="yes"||st.schoolLike==="หนังสือ"||t.discipline>=55);
const job=st=>W.by[st.profession]?.name||st.mode||"งาน";
const hasBiz=st=>st.lateBusiness>0||st.mode==="ธุรกิจ";
const arcs=[
{key:"plant",ages:[9,10,11],gate:(st,t)=>science(st,t),stages:[
stage("ถั่วสองกระถาง","ครูวิทยาศาสตร์เปิดรับอาสาทดลองว่าแสงส่งผลต่อการโตของต้นถั่วอย่างไร มีเมล็ดให้เพียงหกเมล็ด คุณจะลองไหม",[
c("สมัครและแบ่งเมล็ดเป็นสองกลุ่ม","ครูให้สมุดบันทึกและคุณเริ่มทดลอง",{knowledge:3,problem:3},"start"),
c("สมัครพร้อมเพื่อนและแบ่งหน้าที่","คุณตกลงช่วยกันดูแลต้นถั่ว",{friend:3,knowledge:2},"team"),
c("ขอดูการทดลองของเพื่อนก่อน","คุณยังไม่รับผิดชอบโครงงาน",{experience:2},"end"),
c("เลือกกิจกรรมอื่น","คุณใช้เวลากับสิ่งที่ชอบ",{h:2},"end")]),
stage("ต้นถั่วที่ไม่งอก","ต้นถั่วบางเมล็ดไม่งอก ข้อมูลที่ได้ไม่สวยเหมือนตัวอย่าง ครูขอดูสมุดบันทึก",[
c("รายงานผลจริงและลองหาสาเหตุ","ครูเห็นความซื่อตรงและให้ทดลองอีกครั้ง",{knowledge:4,i:3,problem:3},"honest"),
c("ตรวจปริมาณน้ำแล้วปรับการทดลอง","คุณพบว่าต้องควบคุมตัวแปรให้ดีกว่าเดิม",{skill:3,problem:4},"honest"),
c("วาดผลขึ้นใหม่ให้เหมือนตัวอย่าง","งานดูสวยแต่ข้อมูลไม่ตรงกับสิ่งที่เกิดขึ้น",{i:-5,reliable:-3},"fake"),
c("บอกครูว่าขอหยุดโครงงาน","ครูรับรู้และคุณไม่ต้องส่งงานที่ไม่ได้ทำ",{h:2},"end")]),
stage("โต๊ะจัดแสดงวิทยาศาสตร์",st=>st.pathPlant==="fake"?"ครูพบว่าภาพผลทดลองไม่ตรงสมุดที่เคยส่ง จึงเรียกคุณมาคุยก่อนวันจัดแสดง":"ครูขอให้คุณนำผลทดลองต้นถั่วไปเล่าในวันเปิดบ้าน แม้ผลไม่เป็นตามที่คาด",[
c("นำสมุดจริงมาอธิบายและแก้ข้อผิดพลาด","คุณเรียนรู้ว่าข้อมูลจริงมีค่ากว่าผลงานที่สวยงาม",{knowledge:4,i:4,confidence:2},"end"),
c("ขอครูช่วยอธิบายผลที่ยังไม่เข้าใจ","คุณฝึกอธิบายด้วยหลักฐานโดยมีครูช่วย",{knowledge:3,social:2},"end"),
c("ไม่อยากพูดถึงสมุดบันทึก","ครูรับทราบแต่ความเชื่อมั่นในงานยังไม่เพิ่ม",{reliable:-3},"end"),
c("ส่งสมุดให้ครูอ่านโดยไม่ขึ้นพูด","คุณจบโครงงานตามขอบเขตที่ทำได้",{responsibility:3,patience:2},"end")])]},
{key:"comic",ages:[10,11,12],gate:(st,t)=>t.creative>=12,stages:[
stage("หนังสือการ์ตูนทำมือ","ห้องสมุดโรงเรียนเปิดรับผลงานเด็ก คุณมีไอเดียเรื่องแมวที่อยากเป็นนักบิน",[
c("วาดเองเป็นเรื่องสั้นหกหน้า","คุณเริ่มร่างตัวละครและตอนจบ",{creative:4,skill:2},"solo"),
c("ชวนเพื่อนช่วยคิดและแบ่งงาน","คุณตกลงสร้างผลงานร่วมกัน",{creative:3,friend:3},"team"),
c("อ่านผลงานของคนอื่นก่อน","คุณยังไม่ส่งผลงานของตัวเอง",{knowledge:2},"end"),
c("ไม่สนใจงานนี้","คุณเลือกกิจกรรมอื่น",{h:2},"end")]),
stage("หน้าสุดท้ายที่ยังว่าง","ใกล้วันส่งการ์ตูน แต่ตอนจบยังไม่ลงตัว คุณมีเวลาเหลือไม่มาก",[
c("ลดจำนวนหน้าแล้วเขียนตอนจบใหม่","เรื่องจบได้และเป็นผลงานที่คุณทำเอง",{creative:4,problem:3},"finish"),
c("ขอให้ครูอ่านร่างแล้วนำคำแนะนำมาปรับ","คุณได้ฝึกแก้ไขผลงานจากข้อเสนอแนะ",{skill:3,creative:3},"finish"),
c("คัดลอกตอนจบจากหนังสือที่ชอบโดยไม่บอก","ผลงานขาดความเป็นต้นฉบับ",{i:-4,creative:-2},"copy"),
c("ขอถอนผลงานและเก็บไว้ทำต่อเอง","คุณไม่ต้องรีบส่งงานที่ยังไม่พร้อม",{h:2},"end")]),
stage("การ์ตูนในห้องสมุด",st=>st.pathComic==="copy"?"บรรณารักษ์สังเกตว่าตอนจบคล้ายหนังสืออีกเล่มและขอให้คุณชี้แจง":"บรรณารักษ์นำการ์ตูนที่คุณทำไปวางบนชั้น เด็กคนหนึ่งอ่านแล้วมาขอให้ทำตอนต่อ",[
c("พูดถึงที่มาของไอเดียตามจริง","คุณรับผิดชอบผลงานและเรียนรู้เรื่องการให้เครดิต",{i:4,responsibility:3},"end"),
c("ทำฉบับแก้ใหม่จากความคิดตัวเอง","คุณได้ผลงานที่สะท้อนจินตนาการของตัวเอง",{creative:5,skill:3},"end"),
c("เก็บผลงานไว้เป็นความทรงจำ","คุณไม่จำเป็นต้องสร้างงานต่อเพื่อให้ใครพอใจ",{h:3},"end"),
c("ขอคำแนะนำเพื่อทำเรื่องใหม่วันหลัง","คุณได้แนวทางพัฒนาผลงาน",{creative:3,knowledge:2},"end")])]},
{key:"market",ages:[11,12,13],gate:(st,t)=>true,stages:[
stage("ซุ้มขายของงานโรงเรียน","ครูเปิดให้เด็กช่วยทำซุ้มระดมทุนห้องเรียน โดยให้ใช้วัสดุที่โรงเรียนเตรียมไว้",[
c("สมัครช่วยทำขนมกับครู","คุณได้ฝึกวางแผนการทำของในจำนวนที่พอขาย",{skill:3,responsibility:2},"food"),
c("สมัครทำป้ายและจัดซุ้ม","คุณเริ่มออกแบบหน้าร้านและป้ายราคา",{creative:4,problem:2},"design"),
c("ขอช่วยเก็บบัญชีหลังงาน","ครูให้คุณฝึกจดจำนวนของและเงิน",{knowledge:3,responsibility:3},"account"),
c("ไม่รับหน้าที่เพิ่ม","คุณยังไปร่วมงานในฐานะผู้ชมได้",{h:2},"end")]),
stage("ของเหลือกับเงินในกล่อง","หลังงานจบ กลุ่มพบว่าของขายไม่หมดและยอดเงินไม่ตรงกับจำนวนที่จดไว้",[
c("นับของกับเงินใหม่ต่อหน้าทุกคน","กลุ่มพบรายการที่จดตกและแก้บัญชี",{problem:4,i:3},"clear"),
c("ขอครูช่วยตรวจโดยไม่กล่าวหาใคร","ครูช่วยหาสาเหตุอย่างเป็นธรรม",{fair:3,responsibility:3},"clear"),
c("เติมยอดในสมุดให้ดูตรงโดยไม่ตรวจ","บัญชีดูเรียบร้อยแต่ข้อมูลจริงยังผิด",{i:-4,reliable:-3},"bad"),
c("เดินออกไปปล่อยให้เพื่อนจัดการ","ภาระตกกับคนที่ยังอยู่",{friend:-3,responsibility:-3},"bad")]),
stage("เงินกองกลางของห้อง",st=>st.pathMarket==="bad"?"ครูขอให้คนที่รับผิดชอบซุ้มกลับมาตรวจยอดเงินอีกครั้ง เพราะยังอธิบายไม่ได้":"หลังตรวจยอดแล้ว ครูชวนห้องเลือกว่าจะใช้เงินที่ระดมได้ทำอะไร",[
c("เสนอซื้ออุปกรณ์ที่ทุกคนใช้ได้","กลุ่มเห็นแนวทางที่เป็นประโยชน์ร่วมกัน",{fair:4,r:2},"end"),
c("เสนอให้เพื่อนลงความเห็นก่อนตัดสินใจ","ทุกคนมีส่วนร่วมกับผลของงาน",{social:3,fair:3},"end"),
c("ยอมรับข้อผิดพลาดและช่วยแก้บัญชี","คุณรับผิดชอบงานที่เคยรับไว้",{i:4,responsibility:4},"end"),
c("ขอให้ครูตัดสินตามกติกาที่ตกลงกัน","คุณไม่บังคับให้กลุ่มเลือกตามใจคุณ",{responsibility:2},"end")])]},
{key:"radio",ages:[13,14,15],gate:(st,t)=>t.social>=40||t.creative>=25,stages:[
stage("เสียงประกาศพักเที่ยง","โรงเรียนเปิดรับนักเรียนช่วยรายการเสียงตามสาย ครูให้ลองทำข่าวสั้นหรือเพลงประกอบ",[
c("สมัครทำข่าวและสัมภาษณ์เพื่อน","คุณเริ่มเตรียมคำถามและฝึกพูด",{social:4,confidence:2},"news"),
c("สมัครจัดเพลงและเสียงประกอบ","คุณได้ลองเตรียมรายการหลังไมค์",{creative:4,skill:2},"music"),
c("ขอไปฟังรุ่นพี่ทำรายการก่อน","คุณยังไม่ได้สมัครรับหน้าที่",{experience:2},"end"),
c("เลือกกลับไปทำกิจกรรมที่ชอบ","คุณไม่ต้องเข้าชมรมทุกอย่าง",{h:2},"end")]),
stage("ข่าวที่ยังไม่ได้ตรวจ","เพื่อนส่งข้อความว่าครูคนหนึ่งจะย้ายโรงเรียนและอยากให้ประกาศทันที แต่ยังไม่มีคำยืนยัน",[
c("ตรวจสอบกับครูก่อนออกอากาศ","คุณแยกข่าวจริงออกจากคำบอกเล่า",{i:3,knowledge:3},"checked"),
c("ไม่ประกาศข่าวลือและใช้รายการที่เตรียมไว้","คุณรักษาความน่าเชื่อถือของรายการ",{reliable:4,responsibility:2},"checked"),
c("ประกาศตามข้อความเพราะกลัวตกข่าว","ข่าวที่ยังไม่ยืนยันแพร่ไปทั้งโรงเรียน",{i:-4,stress:3},"rumor"),
c("ขอพักจากรายการและส่งงานให้ครู","คุณส่งต่อหน้าที่โดยไม่ฝืนตัวเอง",{energy:2},"end")]),
stage("หน้าไมค์อีกครั้ง",st=>st.pathRadio==="rumor"?"ครูแจ้งว่าข่าวที่ประกาศไม่เป็นจริง และให้คุณรับผิดชอบต่อคนที่ได้รับผลกระทบ":"รุ่นพี่ชวนคุณทำรายการพิเศษหลังเห็นว่าคุณตรวจข้อมูลก่อนออกอากาศ",[
c("พูดข้อมูลที่ตรวจแล้วและแก้สิ่งที่ผิด","คุณรับผิดชอบต่อผู้ฟังและฝึกสื่อสารชัดเจน",{i:4,reliable:3},"end"),
c("ขอครูร่วมออกอากาศเพื่อให้ข้อมูลถูกต้อง","รายการมีคนช่วยตรวจสอบข้อเท็จจริง",{problem:3,social:3},"end"),
c("เลือกทำงานเบื้องหลังแทน","คุณยังใช้ความสามารถโดยไม่ต้องออกหน้า",{skill:3,h:2},"end"),
c("จบกิจกรรมหลังส่งงานเรียบร้อย","คุณรักษาข้อตกลงและเลือกเวลาของตัวเอง",{responsibility:2},"end")])]},
{key:"examhelp",ages:[15,16,17],gate:(st,t)=>t.knowledge>=25,stages:[
stage("เพื่อนที่ยังทำโจทย์ไม่ได้","ครูขออาสาช่วยติวหลังเลิกเรียน เพื่อนชื่อมิวกำลังพยายามทำโจทย์ที่พลาดหลายครั้ง",[
c("อาสาช่วยมิวสัปดาห์ละครั้ง","คุณตกลงแบ่งเวลาติวตามกำลัง",{friend:3,knowledge:2},"help",{arcPerson:"มิว"}),
c("ชวนตั้งกลุ่มติวเล็กๆ กับครู","คุณเริ่มแลกเปลี่ยนวิธีคิดกับเพื่อน",{social:3,knowledge:3},"help",{arcPerson:"มิว"}),
c("ส่งแบบฝึกหัดที่ครูอนุญาตให้ใช้","คุณช่วยโดยไม่ได้ตกลงเป็นคนติว",{e:2},"end"),
c("ไม่รับ เพราะต้องเตรียมตัวเอง","คุณรักษาเวลาสอบของตัวเอง",{discipline:2},"end")]),
stage("สมุดที่มิวขอเอากลับไป","มิวขอคำตอบการบ้านทั้งชุดเพราะกลัวส่งไม่ทัน คุณเคยตกลงช่วยติว แต่ไม่ได้ตกลงทำงานแทน",[
c("อธิบายวิธีคิดแล้วให้มิวลองเอง","มิวได้ฝึกแก้โจทย์ด้วยตัวเอง",{knowledge:3,friend:3},"teach"),
c("ช่วยแบ่งงานเป็นส่วนและขอครูช่วยเมื่อจำเป็น","คุณช่วยให้มิวจัดการปัญหาได้",{problem:4,e:2},"teach"),
c("ให้ลอกทั้งชุดเพื่อให้เรื่องจบ","มิวส่งงานได้แต่ยังทำโจทย์เองไม่ได้",{i:-3,reliable:-2},"copy"),
c("อธิบายว่าคุณไม่มีเวลาติวต่อ","มิวได้รับขอบเขตที่ชัดเจนและหาคนช่วยต่อได้",{selfcontrol:3},"end")]),
stage("คะแนนของมิว",st=>st.pathExamhelp==="copy"?"มิวทำข้อสอบคล้ายการบ้านไม่ได้และกลับมาถามว่าควรเริ่มใหม่อย่างไร":"มิวกลับมาบอกว่าทำโจทย์ได้มากขึ้นและขอบคุณที่เคยช่วยฝึก",[
c("ทบทวนเฉพาะข้อที่ยังผิดด้วยกัน","คุณช่วยในขอบเขตที่ตกลงกัน",{knowledge:3,friend:3},"end"),
c("ชวนให้มิวขอคำแนะนำจากครูด้วย","มิวมีทางเรียนรู้ต่อโดยไม่ต้องพึ่งคุณคนเดียว",{e:3,problem:2},"end"),
c("รับฟังและกลับไปอ่านหนังสือของตัวเอง","คุณรักษาทั้งมิตรภาพและเป้าหมายตัวเอง",{friend:2,discipline:2},"end"),
c("บอกว่าต่อไปอยากให้มิวรับผิดชอบเอง","คุณวางขอบเขตการช่วยเหลือ",{selfcontrol:3},"end")])]},
{key:"budgettrip",ages:[17,18,19],gate:(st,t)=>!!friend(st),stages:[
stage("ทริปหลังสอบ",st=>friend(st)+" ชวนวางแผนไปเที่ยวหลังสอบกับกลุ่มเพื่อน มีค่าเดินทางที่ต้องตกลงก่อน",[
c("ตกลงวางแผนแบบประหยัดก่อน","คุณร่วมวางแผนโดยยังไม่จอง",{friend:3,problem:2},"plan"),
c("ขอคุยกับคนที่บ้านและตรวจงบก่อน","คุณเตรียมตัวตามข้อจำกัดของตัวเอง",{responsibility:3,security:2},"plan"),
c("นัดกินข้าวใกล้บ้านแทน","คุณได้ใช้เวลากับเพื่อนโดยไม่เดินทางไกล",{friend:3,h:2},"end"),
c("ไม่ร่วมทริปครั้งนี้","คุณไม่ได้มีภาระจากการเดินทาง",{energy:2},"end")]),
stage("แผนเที่ยวเปลี่ยนกะทันหัน","เพื่อนในกลุ่มเสนอที่พักแพงกว่าเดิม คุณยังไม่ได้ตกลงเพิ่มงบ",[
c("ยืนยันงบเดิมและเสนอที่พักอื่น","กลุ่มต้องหารือทางเลือกใหม่",{security:3,problem:3},"small"),
c("เลือกเดินทางไปเช้าเย็นกลับ","คุณลดค่าใช้จ่ายและยังมีเวลาร่วมกัน",{h:2,security:2},"small"),
c("ยอมตามเพื่อนทั้งที่ยังไม่รู้ว่าจ่ายไหวไหม","คุณรับภาระกดดันที่ต้องแก้ก่อนเดินทาง",{stress:4,security:-3},"pressure"),
c("ขอถอนตัวจากแผน","คุณไม่ผูกพันกับค่าใช้จ่ายที่ยังไม่ได้ตกลง",{selfcontrol:3},"end")]),
stage("ก่อนออกเดินทาง",st=>st.pathBudgettrip==="pressure"?"กลุ่มเริ่มขอเก็บเงินค่าที่พัก คุณต้องตัดสินใจใหม่ก่อนยืนยันการจอง":"กลุ่มตกลงกิจกรรมใกล้บ้านที่เดินทางได้ตามงบ",[
c("เลือกกิจกรรมฟรีและพบกันตามสะดวก","คุณได้ใช้เวลากับเพื่อนโดยไม่เพิ่มภาระเงิน",{friend:4,h:3},"end"),
c("อธิบายงบจริงและขอปรับแผน","เพื่อนรับรู้ข้อจำกัดก่อนเกิดค่าใช้จ่าย",{social:3,security:3},"end"),
c("ไม่ไปและแจ้งกลุ่มล่วงหน้า","คุณยุติแผนโดยรักษาข้อตกลง",{reliable:2},"end"),
c("ชวนเพื่อนนัดวันอื่นแทน","กลุ่มมีทางเลือกพบกันใหม่",{friend:2,patience:2},"end")])]},
{key:"portfolio",ages:[20,21,22],gate:(st,t)=>active(st)||st.youthStatus==="student"||st.careerPhase==="training"||t.skill>=25,stages:[
stage("งานชิ้นแรกที่มีชื่อเรา","มีประกาศเปิดรับผลงานจากคนเริ่มต้น คุณสามารถส่งตัวอย่างงานที่ตัวเองมีสิทธิใช้ ไม่ต้องลาออกหรือเสียเงินสมัคร",[
c("ส่งผลงานที่ทำเองพร้อมอธิบายขั้นตอน","คุณเริ่มสร้างแฟ้มผลงานของตัวเอง",{skill:4,confidence:2},"entry"),
c("เลือกผลงานเก่าแล้วปรับรายละเอียด","คุณฝึกประเมินและปรับปรุงงาน",{skill:3,problem:3},"entry"),
c("ขอดูตัวอย่างก่อนแต่ยังไม่สมัคร","คุณเก็บข้อมูลสำหรับอนาคต",{experience:2},"end"),
c("ไม่ส่งผลงานในครั้งนี้","คุณใช้เวลากับหน้าที่เดิม",{energy:2},"end")]),
stage("คำวิจารณ์จากกรรมการ","ผู้ประเมินแจ้งว่างานมีไอเดียดีแต่ยังขาดรายละเอียดบางจุด และเปิดให้ส่งฉบับปรับปรุง",[
c("แก้จุดที่ถูกวิจารณ์แล้วส่งใหม่","คุณพัฒนางานจากคำแนะนำจริง",{skill:5,patience:3},"revise"),
c("ขอรายละเอียดว่าตรงไหนยังไม่ผ่าน","คุณได้ข้อมูลสำหรับปรับงาน",{problem:4,knowledge:2},"revise"),
c("ตอบกลับด้วยอารมณ์ว่าเขาไม่เข้าใจงาน","ผู้ประเมินไม่ต้องการคุยต่อ แต่คุณยังเลือกจัดการได้",{stress:3,reliable:-3},"conflict"),
c("ถอนผลงานและเก็บไว้พัฒนาภายหลัง","คุณรักษาเวลาและความพร้อมของตัวเอง",{h:2},"end")]),
stage("คำตอบที่กลับมา",st=>st.pathPortfolio==="conflict"?"ผู้จัดแจ้งว่าผลงานยังไม่ได้รับการพิจารณาต่อเพราะการสื่อสารติดขัด":"ผู้จัดประเมินผลงานฉบับแก้ไขและส่งคำแนะนำรอบสุดท้ายมาให้",[
c("รับฟังผลและเก็บหลักฐานงานไว้","คุณสะสมประสบการณ์โดยไม่ถือว่าต้องชนะเสมอ",{skill:4,reliable:2},"end"),
c("ขอโทษหากเคยตอบไม่เหมาะและจบเรื่องอย่างสุภาพ","คุณรับผิดชอบการสื่อสารของตัวเอง",{i:3,social:3},"end"),
c("นำคำแนะนำไปทดลองกับงานชิ้นถัดไป","คุณได้ฝึกพัฒนาความสามารถต่อ",{creative:3,skill:3},"end"),
c("พักจากการส่งผลงาน","คุณเลือกจังหวะชีวิตของตัวเอง",{energy:3},"end")])]},
{key:"contract",ages:[26,27,28,29,30,31,32],gate:(st,t)=>active(st)&&t.skill>=35,stages:[
stage("งานพิเศษที่เวลาจำกัด",st=>"ผู้เกี่ยวข้องกับ"+job(st)+" เสนอให้รับงานเพิ่มเติม มีค่าตอบแทนตามข้อตกลง แต่ต้องจัดเวลาจากภาระที่มีอยู่",[
c("รับงานหลังตรวจขอบเขตและเวลา","คุณตกลงงานเพิ่มโดยระบุสิ่งที่จะส่ง",{career:3,responsibility:3},"accept"),
c("เจรจาแบ่งงานและตกลงค่าตอบแทนก่อน","คุณรับเฉพาะขอบเขตที่ทำได้",{problem:4,network:2},"accept"),
c("ปฏิเสธเพราะงานเดิมเต็ม","คุณรักษาคุณภาพงานและเวลาพัก",{energy:4,reliable:2},"end"),
c("ขอข้อมูลไว้แต่ยังไม่ตกลง","คุณไม่ผูกพันกับงานที่ยังไม่รับ",{knowledge:2},"end")]),
stage("คำขอเพิ่มนอกข้อตกลง","ผู้ว่าจ้างขอเพิ่มงานโดยไม่เพิ่มเวลาและค่าตอบแทน ทั้งที่คุณเคยตกลงขอบเขตไว้แล้ว",[
c("ยืนยันขอบเขตและเสนอราคาใหม่สำหรับงานเพิ่ม","คุณเจรจาตามเงื่อนไขที่ชัดเจน",{career:3,reliable:3},"fair"),
c("รับเฉพาะส่วนที่จำเป็นและทำข้อตกลงใหม่","ทั้งสองฝ่ายเห็นภาระงานชัดขึ้น",{problem:4,network:2},"fair"),
c("รับทั้งหมดทั้งที่ไม่แน่ใจว่าจะทัน","ภาระเพิ่มและเสี่ยงต่อคุณภาพงาน",{stress:7,energy:-5},"over"),
c("ยุติงานเพิ่มตามข้อตกลงเดิม","คุณส่งมอบเฉพาะส่วนที่รับไว้",{responsibility:3},"end")]),
stage("วันส่งมอบงาน",st=>st.pathContract==="over"?"งานเพิ่มทำให้คุณส่งมอบช้ากว่าที่ตั้งใจ ผู้ว่าจ้างขอคำอธิบาย":"งานตามขอบเขตที่ตกลงไว้เข้าสู่ช่วงตรวจรับและชำระค่าตอบแทน",[
c("ส่งงานที่เสร็จและชี้แจงส่วนที่ยังค้าง","คุณได้รับค่าตอบแทนตามส่วนงานที่ส่งและรับผิดชอบส่วนที่เหลือ",{m:1200,reliable:3,skill:2},"end"),
c("ตรวจรับงานร่วมกันและปิดข้อตกลง","คุณได้รับค่าตอบแทนตามงานที่ตรวจรับในเกม",{m:1800,career:3,responsibility:3},"end"),
c("เลี่ยงการตอบเรื่องงานที่ยังค้าง","ความไว้วางใจลดลงและไม่ได้รับเงินเพิ่ม",{reliable:-5,stress:3},"end"),
c("ขอปิดงานเฉพาะส่วนที่ทำได้โดยไม่รับงานเพิ่ม","คุณรักษาขอบเขตและมีเวลาพัก",{energy:4,responsibility:2},"end")])]},
{key:"couplehome",ages:[28,29,30,31,32,33,34,35,36,37,38],gate:(st,t)=>partnered(st),person:st=>st.partnerName,keep:(st,x)=>partnered(st)&&st.partnerName===x,stages:[
stage("มุมเล็กๆ ที่อยากมีร่วมกัน",(st,x)=>x+" อยากจัดพื้นที่สำหรับกิจกรรมที่ชอบทำร่วมกัน แต่ทั้งคู่มีความชอบและงบต่างกัน",[
c("ชวนคุยแล้วลองจัดมุมด้วยของที่มี","ทั้งคู่ตกลงใช้พื้นที่ร่วมกัน",{partner:4,h:3},"plan"),
c("แบ่งพื้นที่คนละส่วน","คุณรักษาความชอบของทั้งสองคน",{partner:3,problem:3},"plan"),
c("เลือกให้ตัวเองทั้งหมดโดยไม่ถาม","อีกฝ่ายรู้สึกว่าความต้องการไม่ได้รับการรับฟัง",{partner:-4,stress:2},"conflict"),
c("ขอพักเรื่องนี้ไว้ก่อน","คุณยังไม่ตกลงเปลี่ยนพื้นที่",{energy:2},"end")]),
stage("ของชิ้นเดิมที่ไม่ควรทิ้ง",(st,x)=>x+" บอกว่าของชิ้นหนึ่งมีความหมายกับเขา แม้จะดูเก่าและกินพื้นที่",[
c("ถามถึงที่มาแล้วหาที่เก็บด้วยกัน","คุณได้รู้ความทรงจำของอีกฝ่าย",{partner:4,e:3},"keep"),
c("ตกลงจัดมุมของส่วนตัวให้ชัดเจน","ทั้งคู่ได้พื้นที่ของตัวเอง",{problem:3,partner:3},"keep"),
c("บอกว่าไร้สาระและไม่ควรเก็บ","อีกฝ่ายเสียความรู้สึก",{partner:-5,stress:3},"hurt"),
c("ขอไม่แตะของชิ้นนั้นและเลื่อนการจัด","คุณรักษาสิทธิของอีกฝ่าย",{selfcontrol:3},"keep")]),
stage("ความทรงจำในมุมเดิม",(st,x)=>st.pathCouplehome==="hurt"?x+" กลับมาพูดถึงของที่มีความหมายและคำพูดที่ทำให้เสียใจ":x+" ชวนใช้มุมที่ช่วยกันจัดเพื่อทำกิจกรรมเล็กๆ ร่วมกัน",[
c("ฟังเรื่องของเขาและให้เวลาอยู่ด้วยกัน","ทั้งคู่ได้เข้าใจความทรงจำของกันและกัน",{partner:5,h:3},"end"),
c("ขอโทษหากเคยพูดไม่ดีและตกลงขอบเขตใหม่","คุณรับผิดชอบความรู้สึกที่เกิดขึ้น",{partner:4,responsibility:3},"end"),
c("ชวนทำกิจกรรมที่ทั้งคู่สบายใจ","ได้สร้างความทรงจำใหม่ด้วยกัน",{partner:4,h:4},"end"),
c("บอกว่าอยากใช้เวลาส่วนตัววันนี้","คุณสื่อสารความต้องการโดยไม่ตัดความสัมพันธ์",{selfcontrol:3},"end")])]},
{key:"childdream",ages:[33,34,35,36,37,38,39,40,41,42,43,44,45],gate:(st,t,a)=>!!child(st,a),person:(st,a)=>{let x=child(st,a);return x.name+"@"+x.born},keep:(st,x)=>st.children?.some(z=>z.name+"@"+z.born===x),stages:[
stage("ความฝันที่ลูกเอามาให้ดู",(st,x)=>x.split("@")[0]+" เอาภาพที่วาดหรือผลงานที่ทำเองมาให้ดู และบอกว่าอยากลองทำสิ่งนี้จริงจังขึ้น",[
c("ถามว่าลูกชอบอะไรแล้วช่วยหาทางฝึก","ลูกได้มีพื้นที่ลองตามความสนใจ",{child:5,r:2},"support"),
c("ชวนลูกลองกิจกรรมเล็กๆ ที่ไม่ต้องเสียเงิน","ลูกได้ทดลองก่อนตัดสินใจจริง",{child:4,problem:3},"support"),
c("บอกว่าความสนใจนี้ไม่มีอนาคต","ลูกเริ่มลังเลที่จะเล่าเรื่องที่ชอบให้ฟัง",{child:-5,stress:2},"dismiss"),
c("ขอให้ลูกลองคิดเองก่อนแล้วกลับมาคุย","คุณให้พื้นที่โดยยังเปิดรับเรื่องของลูก",{child:2,selfcontrol:2},"support")]),
stage("ผลงานที่ไม่ได้รางวัล",(st,x)=>x.split("@")[0]+" นำผลงานจากกิจกรรมที่ลองทำมาให้ดู ผลไม่เป็นไปตามที่หวังและลูกดูผิดหวัง",[
c("ถามว่าลูกสนุกกับส่วนไหนและอยากลองต่อไหม","ลูกเห็นว่าคุณให้คุณค่ากับความพยายาม",{child:5,e:3},"care"),
c("ช่วยหาสาเหตุที่ทำให้ผลงานยังไม่ดี","ลูกได้เรียนรู้ว่าปรับปรุงอะไรได้",{child:3,problem:3},"care"),
c("เปรียบเทียบลูกกับคนที่ทำได้ดีกว่า","ลูกเริ่มกลัวการนำผลงานมาให้คุณดู",{child:-5,stress:3},"pressure"),
c("ให้เวลาลูกพักและไม่บังคับให้ฝึกต่อ","ลูกได้เลือกจังหวะของตัวเอง",{child:3,patience:2},"care")]),
stage("สิ่งที่ลูกอยากบอก",(st,x)=>x.split("@")[0]+(st.pathChilddream==="pressure"?" บอกว่าไม่กล้าเล่าความสนใจอีกเพราะกลัวถูกเปรียบเทียบ":" กลับมาเล่าว่ายังอยากทำสิ่งที่ชอบ แม้จะไม่ได้ชนะทุกครั้ง"),[
c("ฟังและยอมรับว่าความฝันเป็นของลูก","ลูกมีพื้นที่ตัดสินใจชีวิตตัวเอง",{child:5,e:3},"end"),
c("ขอโทษหากเคยกดดันและคุยกันใหม่","คุณพยายามซ่อมความสัมพันธ์",{child:5,responsibility:3},"end"),
c("เสนอช่วยเฉพาะสิ่งที่ลูกต้องการจริง","ลูกได้รับแรงสนับสนุนตามขอบเขต",{child:4,r:2},"end"),
c("ยืนยันว่าลูกต้องเลือกตามที่คุณคิด","ลูกยังรู้สึกว่าตัวเองไม่มีพื้นที่เลือก",{child:-6,stress:4},"end")])]},
{key:"supplier",ages:[38,39,40,41,42,43,44,45,46,47,48],gate:(st,t)=>hasBiz(st),keep:st=>hasBiz(st),stages:[
stage("ผู้ขายรายใหม่เสนอราคาถูก","กิจการของคุณได้รับข้อเสนอวัตถุดิบหรือบริการราคาถูกกว่าที่เคยใช้ แต่ยังไม่ทราบคุณภาพ",[
c("ขอตัวอย่างและตรวจเงื่อนไขก่อนสั่ง","คุณเริ่มประเมินต้นทุนโดยไม่ลดมาตรฐาน",{problem:4,skill:3},"check"),
c("ทดลองสั่งจำนวนน้อยตามงบที่จ่ายได้","คุณจำกัดความเสี่ยงและตรวจงานจริง",{skill:3,security:2},"check"),
c("ตกลงเปลี่ยนผู้ขายทันทีโดยไม่ตรวจ","กิจการเสี่ยงรับสินค้าหรือบริการที่ไม่เหมาะสม",{stress:3,reliable:-3},"rush"),
c("รักษาผู้ขายเดิมและไม่รับข้อเสนอ","คุณรักษาความต่อเนื่องของกิจการ",{security:2},"end")]),
stage("ลูกค้ากลับมาพร้อมข้อร้องเรียน","ผู้รับบริการแจ้งว่าคุณภาพงานล็อตล่าสุดไม่สม่ำเสมอ คุณต้องตรวจข้อมูลก่อนตัดสินว่าเกิดจากอะไร",[
c("ตรวจตัวอย่างและรับเรื่องร้องเรียนตามจริง","กิจการเริ่มหาสาเหตุโดยไม่โยนความผิด",{reliable:4,problem:4},"repair"),
c("หยุดใช้ของที่ยังไม่ผ่านตรวจและแจ้งผู้ขาย","คุณลดความเสี่ยงก่อนส่งงานต่อ",{responsibility:4,skill:3},"repair"),
c("บอกลูกค้าว่าคิดไปเองโดยไม่ตรวจ","ความไว้วางใจลดลงและปัญหายังค้าง",{reliable:-6,stress:4},"deny"),
c("ขอคนกลางช่วยตรวจตามข้อตกลง","คุณเริ่มแก้ข้อพิพาทอย่างเป็นระบบ",{fair:3,problem:3},"repair")]),
stage("ลูกค้าคนเดิมกลับมา",st=>st.pathSupplier==="deny"?"ลูกค้ายังไม่ได้คำตอบและกลับมาติดตามข้อร้องเรียนครั้งก่อน":"หลังตรวจและปรับงาน ลูกค้ากลับมาขอทราบสิ่งที่กิจการแก้ไข",[
c("อธิบายสิ่งที่ตรวจพบและวิธีป้องกันครั้งต่อไป","กิจการมีโอกาสฟื้นความน่าเชื่อถือ",{reliable:5,career:3},"end"),
c("รับผิดชอบตามข้อตกลงและติดตามผล","ลูกค้าเห็นความจริงจังของกิจการ",{fair:4,responsibility:3},"end"),
c("ปรับมาตรฐานผู้ขายโดยเก็บข้อมูลการตรวจ","คุณพัฒนากระบวนการของกิจการ",{skill:4,problem:3},"end"),
c("ปฏิเสธการรับฟังเพิ่มเติม","ความสัมพันธ์ทางธุรกิจเสียหาย",{reliable:-5},"end")])]},
{key:"oldphoto",ages:[45,46,47,48,49,50,51,52,53,54,55],gate:st=>!!st.fkSea||!!st.fkPhoto||!!st.fkGrand,stages:[
stage("กล่องภาพจากบ้านเก่า",st=>st.fkSea?"คุณเจอภาพเที่ยวทะเลตอนห้าขวบ ภาพนั้นพาคุณย้อนถึงช่วงที่คนในบ้านยังพาไปเที่ยว":"คุณเจอของหรือรูปถ่ายจากช่วงที่เคยไปบ้านญาติผู้ใหญ่เมื่อยังเด็ก",[
c("เก็บภาพและเขียนรายละเอียดที่ยังจำได้","คุณบันทึกความทรงจำของครอบครัว",{h:4,experience:3},"archive"),
c("ชวนคนในบ้านที่ยังติดต่อกันดูภาพ","ความทรงจำกลายเป็นเรื่องที่แบ่งปันได้",{r:3,h:3},"archive"),
c("จัดกล่องไว้ให้ปลอดภัยโดยยังไม่เปิดดูต่อ","คุณเลือกเวลาที่พร้อมจะย้อนอดีต",{energy:2},"end"),
c("ไม่อยากเก็บเรื่องเก่าทั้งหมด","คุณมีสิทธิเลือกสิ่งที่มีความหมายต่อชีวิต",{selfcontrol:3},"end")]),
stage("เรื่องเล่าที่ไม่ตรงกัน","เมื่อทบทวนภาพเก่า คุณพบว่าบางรายละเอียดที่จำได้ไม่แน่นอน และอยากเก็บเรื่องนี้ไว้โดยไม่แต่งเติม",[
c("เขียนว่าเป็นสิ่งที่คุณจำได้ ไม่ใช่ข้อเท็จจริงทั้งหมด","คุณเก็บความทรงจำอย่างซื่อตรง",{i:3,experience:3},"record"),
c("แยกสิ่งที่รู้จริงกับสิ่งที่ยังไม่แน่ใจ","คุณจัดข้อมูลให้เข้าใจง่าย",{problem:3,knowledge:2},"record"),
c("ปล่อยให้ภาพเล่าเรื่องโดยไม่เขียนเพิ่ม","คุณรักษาความทรงจำในแบบเรียบง่าย",{h:3},"record"),
c("เก็บกล่องไว้ก่อน","คุณไม่จำเป็นต้องย้อนอดีตตลอดเวลา",{energy:2},"end")]),
stage("เรื่องหนึ่งที่อยากเก็บไว้","ภาพหรือบันทึกที่คุณจัดไว้กลายเป็นสิ่งเตือนใจถึงช่วงวัยเด็ก",[
c("จัดเก็บให้คนที่สนใจอ่านได้","คุณส่งต่อเรื่องราวโดยไม่บังคับใคร",{r:4,satisfaction:3},"end"),
c("เก็บไว้เป็นเรื่องส่วนตัว","คุณรักษาพื้นที่ความทรงจำของตัวเอง",{h:4},"end"),
c("ใช้เป็นแรงบันดาลใจสร้างวันใหม่กับคนใกล้ตัว","คุณให้คุณค่ากับทั้งอดีตและปัจจุบัน",{h:4,r:3},"end"),
c("เลือกเก็บเฉพาะภาพที่มีความหมาย","คุณรักษาสิ่งสำคัญตามความต้องการ",{selfcontrol:3},"end")])]},
{key:"community",ages:[60,61,62,63,64,65,66,67,68,69,70,71],gate:(st,t)=>t.physical>=45,stages:[
stage("สวนร้างท้ายชุมชน","คนในชุมชนชวนเสนอวิธีใช้พื้นที่สวนร้างให้คนหลายวัยได้ประโยชน์ ยังไม่ได้เริ่มก่อสร้างหรือรับเงินใคร",[
c("เสนอช่วยสำรวจความต้องการของคนในพื้นที่","คุณเริ่มฟังคนที่มีความต้องการต่างกัน",{social:4,problem:3},"join"),
c("อาสาช่วยทำแผนพื้นที่จากประสบการณ์ที่มี","คุณใช้ทักษะเพื่อกิจกรรมชุมชน",{skill:3,respect:3},"join"),
c("ให้ข้อเสนอแล้วไม่รับหน้าที่ต่อ","คุณช่วยตามกำลังโดยไม่ผูกภาระ",{e:2},"end"),
c("ขอใช้เวลาส่วนตัว","คุณไม่จำเป็นต้องรับบทบาทในชุมชน",{h:2},"end")]),
stage("ที่นั่งหรือสนามเด็กเล่น","บางคนอยากได้ม้านั่ง บางคนอยากให้เด็กมีสนาม งบจำกัดและทุกฝ่ายอยากได้พื้นที่",[
c("ชวนสำรวจและแบ่งพื้นที่ตามการใช้งาน","คนหลายกลุ่มได้รับฟังและเห็นทางเลือก",{fair:4,problem:4},"fair"),
c("เสนอทำโครงการเล็กก่อนแล้วค่อยประเมิน","ชุมชนไม่ต้องรับภาระใหญ่เกินพร้อม",{security:3,responsibility:3},"fair"),
c("ยืนยันให้ทำตามความคิดของตัวเองทั้งหมด","บางคนรู้สึกว่าความต้องการถูกมองข้าม",{respect:-4,stress:3},"conflict"),
c("ขอถอนตัวหลังส่งข้อมูลที่รวบรวม","คุณจบหน้าที่ที่ตกลงไว้",{responsibility:2},"end")]),
stage("วันเปิดพื้นที่เล็กๆ",st=>st.pathCommunity==="conflict"?"ชุมชนยังมีข้อโต้แย้งเรื่องพื้นที่ จึงชวนคุณมารับฟังอีกครั้ง":"ชุมชนเปิดพื้นที่ส่วนแรกตามแผนที่ตกลงร่วมกันและชวนคุณไปดู",[
c("ไปฟังความคิดเห็นจากคนที่ใช้งานจริง","คุณเห็นผลของการทำงานร่วมกับคนอื่น",{respect:4,experience:3},"end"),
c("ยินดีที่คนในชุมชนได้พื้นที่ใช้ร่วมกัน","คุณมีความสุขกับสิ่งที่ช่วยทำ",{h:5,r:3},"end"),
c("ยอมรับสิ่งที่ยังต้องปรับและส่งต่อให้ทีม","คุณรักษาความต่อเนื่องโดยไม่ต้องควบคุมทุกอย่าง",{fair:3,responsibility:3},"end"),
c("ขอพักและใช้ชีวิตของตัวเอง","คุณยังมีสิทธิเลือกเวลาของตัวเอง",{h:3,energy:2},"end")])]},
{key:"adultchild",ages:[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],gate:(st,t,a)=>!!adultChild(st,a),person:(st,a)=>{let x=adultChild(st,a);return x.name+"@"+x.born},keep:(st,x)=>st.children?.some(z=>z.name+"@"+z.born===x),stages:[
stage("ลูกอยากเปลี่ยนชีวิต",(st,x)=>x.split("@")[0]+" โตเป็นผู้ใหญ่แล้วและมาคุยว่าอยากเปลี่ยนงานหรือรูปแบบชีวิต แต่ยังไม่ได้ตัดสินใจ",[
c("ถามเหตุผลและช่วยทบทวนทางเลือก","ลูกได้คิดด้วยตัวเองและรู้ว่าคุณพร้อมรับฟัง",{child:4,e:3},"listen"),
c("เล่าประสบการณ์ของคุณโดยไม่บังคับให้ทำตาม","ลูกได้มุมมองเพิ่มแต่ยังตัดสินใจเอง",{child:3,experience:3},"listen"),
c("สั่งให้ลูกอยู่เส้นทางเดิมเท่านั้น","ลูกเริ่มไม่กล้าเล่าแผนชีวิต",{child:-5,stress:3},"control"),
c("ขอให้ลูกหาข้อมูลแล้วค่อยคุยกันใหม่","คุณให้เวลาเขาประเมินทางเลือก",{patience:3,child:2},"listen")]),
stage("แผนที่ลูกลองทำ",(st,x)=>x.split("@")[0]+" กลับมาเล่าว่าแผนเปลี่ยนชีวิตมีทั้งข้อดีและปัญหาที่ต้องจัดการ โดยไม่ได้ขอให้คุณแก้แทนทุกอย่าง",[
c("ฟังผลและถามว่าอยากให้ช่วยแบบไหน","ลูกมีพื้นที่ขอความช่วยเหลือตามความต้องการ",{child:5,e:3},"support"),
c("ชวนทำแผนสำรองโดยให้ลูกเลือกเอง","ลูกได้วิธีประเมินความเสี่ยง",{problem:4,child:3},"support"),
c("ตำหนิว่าที่ลำบากเพราะไม่เชื่อคุณ","ลูกเสียความมั่นใจที่จะขอคำปรึกษา",{child:-5,stress:3},"hurt"),
c("บอกว่าคุณช่วยได้บางเรื่องเท่านั้น","คุณรักษาขอบเขตโดยไม่ตัดความสัมพันธ์",{selfcontrol:3,child:2},"support")]),
stage("วันหนึ่งที่ลูกกลับมาหา",(st,x)=>x.split("@")[0]+(st.pathAdultchild==="hurt"?" อยากคุยถึงคำพูดที่ทำให้รู้สึกว่าคุณไม่เชื่อใจ":" กลับมาเล่าความคืบหน้าและขอบคุณที่คุณให้พื้นที่ตัดสินใจ"),[
c("รับฟังและขอบคุณที่ยังมาเล่าให้ฟัง","คุณรักษาสายสัมพันธ์โดยไม่ตัดสินจากความสำเร็จ",{child:5,h:3},"end"),
c("ขอโทษหากเคยพูดทำร้ายความรู้สึก","ลูกได้เห็นว่าความสัมพันธ์เปลี่ยนแปลงได้",{child:5,e:3},"end"),
c("ชวนใช้เวลาร่วมกันโดยไม่คุยเรื่องงาน","ทั้งคู่มีความสุขนอกเหนือจากเรื่องความสำเร็จ",{child:4,h:4},"end"),
c("ขอไว้คุยในวันที่ทั้งคู่พร้อม","คุณรักษาขอบเขตและไม่ปิดโอกาสพบกัน",{patience:3},"end")])]}
];
const cap=x=>x[0].toUpperCase()+x.slice(1);
const fields=a=>({status:"path"+cap(a.key),who:"path"+cap(a.key)+"Who",age:"path"+cap(a.key)+"Age",stage:"path"+cap(a.key)+"Stage"});
const defs=new Map(arcs.map(a=>[a.key,a]));
for(const a of arcs){const flexible=a.ages.length>3;for(let j=0;j<3;j++){const ages=flexible?Array.from({length:a.ages.length},(_,i)=>a.ages[i]+j):[a.ages[j]];for(const age of ages){const z=a.stages[j];S.push({id:`authored_${a.key}_${j}_${age}`,age,order:87+j*.1,title:z.title,story:typeof z.story==="string"?z.story:"เหตุการณ์ต่อจากสิ่งที่คุณเคยเลือก",cw:"authored",arcKey:a.key,arcStage:j,custom:true,choices:z.choices.map(q=>({label:q.label,result:q.result,delta:q.delta}))});}}}
W.allowed=(e,st,s)=>{
if(e.cw!=="authored")return prev.allowed(e,st,s);
const a=defs.get(e.arcKey),k=fields(a),j=e.arcStage;
if(j===0)return st[k.stage]===undefined&&a.gate(st,s.stats,e.age);
return st[k.stage]===j&&st[k.status]!=="end"&&e.age>st[k.age]&&(!a.keep||a.keep(st,st[k.who]));
};
W.story=(e,st)=>{
if(e.cw!=="authored")return prev.story(e,st);
const a=defs.get(e.arcKey),k=fields(a),z=a.stages[e.arcStage];
const who=e.arcStage===0&&a.person?a.person(st,e.age):st[k.who];
return typeof z.story==="function"?z.story(st,who):z.story;
};
W.choices=(e,st,s)=>{
if(e.cw!=="authored")return prev.choices(e,st,s);
const a=defs.get(e.arcKey),k=fields(a),j=e.arcStage,z=a.stages[j],who=j===0&&a.person?a.person(st,e.age):st[k.who];
return z.choices.map(q=>({label:q.label,result:q.result,delta:q.delta,set:{[k.stage]:j+1,[k.status]:j===2?"end":q.next,[k.age]:e.age,...(who?{[k.who]:who}:{}),...q.extra}}));
};
W.after=(st,old,e,n,ch,item)=>{
prev.after(st,old,e,n,ch,item);
if(e.cw!=="authored")return;
const a=defs.get(e.arcKey),k=fields(a),who=st[k.who];
if(e.arcKey==="examhelp"&&e.arcStage===0&&n<2)st.people["มิว"]={...(st.people["มิว"]||{}),feeling:"รู้สึกดี",boundary:"เปิดใจ"};
if(["childdream","adultchild"].includes(e.arcKey)&&who){
 const x=st.children?.find(z=>z.name+"@"+z.born===who),d=e.arcStage===0?[5,4,-5,2][n]:e.arcStage===1?[5,3,-5,3][n]:[5,5,4,-1][n];
 if(x&&w.ELDER){const id=w.ELDER.childKey(x),p=w.ELDER.childProfile(st,x);st.elChildren={...(st.elChildren||{}),[id]:{...p,bond:Math.max(0,Math.min(100,p.bond+d)),trust:Math.max(0,Math.min(100,p.trust+Math.sign(d)*2)),last:item.title,lastAge:item.age}};}
}
};
w.AUTHORED={arcs,fields};
})(window);


// Varied youth with distinct paths, stat-gated choices and concrete study habits.
(function variedYouth(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,S=w.STORY,prev={allowed:W.allowed,choices:W.choices,story:W.story,after:W.after};
const q=(label,result,delta={},next="end",set={})=>({label,result,delta,next,set});
const sp=(stat,min,base,choice)=>({stat,min,base,choice});
const scene=(age,title,story,choices,special=[])=>({age,title,story,choices,special});
const single=st=>!["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!st.teenBond;
const arcs=[
{key:"mischief",gate:(st,t)=>true,person:"โจ๊ก",stages:[
scene(8,"สนามหลังอาคารเรียน","โจ๊ก เด็กห้องข้างๆ ชวนคุณกับเพื่อนอีกสองคนไปเล่นในสนามช่วงพัก ครูเพิ่งบอกว่าห้ามเข้าเพราะกำลังซ่อมพื้น",[
q("ไปด้วยทั้งที่ครูห้าม","กลุ่มเริ่มรู้จักกันผ่านการฝ่าฝืนกติกา",{friend:2,discipline:-3},"joined"),
q("ชวนโจ๊กไปเล่นตรงสนามที่เปิดแทน","โจ๊กยอมไปด้วยและเริ่มรู้จักคุณ",{friend:3,problem:2},"safe"),
q("ไม่ไปและกลับไปเล่นกับเพื่อนเดิม","คุณไม่ได้เข้ากลุ่มนี้",{selfcontrol:2}),
q("ไปดูจากทางเดินแล้วกลับก่อน","คุณยังไม่ได้ตกลงเข้ากลุ่ม",{experience:1})]),
scene(10,"กระจกห้องเก็บของแตก",st=>st.vy_mischief_status==="joined"?"โจ๊กกับกลุ่มที่เคยชวนคุณฝ่าฝืนกติกาเล่นบอลใกล้ห้องเก็บของจนกระจกแตก เขาขอให้ทุกคนบอกครูว่าไม่รู้เรื่อง":"โจ๊กที่คุณรู้จักจากสนามเล่นบอลพลาดจนกระจกแตก เขากลัวถูกลงโทษและมาขอให้คุณช่วยคิด",[
q("ชวนเพื่อนไปบอกครูและรับผิดชอบตามจริง","ครูช่วยแยกว่าคนไหนเกี่ยวข้องและจัดการความเสียหาย",{i:3,responsibility:3},"honest"),
q("ช่วยปิดบังเพราะกลัวเพื่อนโกรธ","เรื่องยังไม่จบและความไว้ใจของกลุ่มมีเงื่อนไข",{friend:2,i:-4},"cover",{vyRisk:2}),
q("โยนความผิดให้เด็กที่ไม่ได้อยู่ด้วย","เด็กอีกคนถูกสงสัย ครูยังต้องหาข้อเท็จจริง",{i:-6,fair:-4},"blame",{vyRisk:3}),
q("บอกว่าไม่ได้เห็นตอนเกิดเหตุและไม่ช่วยแต่งเรื่อง","คุณไม่รับผิดแทนสิ่งที่ไม่รู้",{i:2,selfcontrol:2},"honest")],[sp("problem",65,0,q("★ ใช้ไหวพริบแยกสิ่งที่เห็นจริงและชวนโจ๊กบอกครู","ครูตรวจสอบข้อเท็จจริงได้โดยไม่ต้องลงโทษผิดคน",{problem:5,fair:4,reliable:3},"honest"))]),
scene(12,"เพื่อนกลุ่มเดิมกับการเรียกผู้ปกครอง",st=>["cover","blame"].includes(st.vy_mischief_status)?"ครูพบข้อมูลไม่ตรงกับคำบอกเล่าเรื่องกระจกและเรียกผู้เกี่ยวข้องกลับมาคุย โจ๊กยังขอให้คุณยืนยันเรื่องเดิม":"โจ๊กกลับมาคุยเรื่องกระจกที่เคยรับผิดชอบร่วมกัน เขาชวนคุณเล่นในสนามที่เปิดให้ใช้แล้ว",[
q("เล่าข้อเท็จจริงและขอแก้สิ่งที่เคยทำ","คุณรับผิดชอบส่วนของตัวเองและมีโอกาสเริ่มใหม่",{i:4,responsibility:4}),
q("รักษามิตรภาพแต่ไม่รับปิดบังความผิดอีก","โจ๊กทราบว่าคุณมีขอบเขตของตัวเอง",{selfcontrol:4,friend:2}),
q("ปกป้องกลุ่มด้วยการโกหกต่อ","ความเชื่อมั่นจากผู้ใหญ่ลดลงและปัญหายังมีผลต่อชีวิต",{i:-5,reliable:-4},"end",{vyRisk:2}),
q("ขอเว้นระยะจากกลุ่มและกลับไปทำกิจกรรมอื่น","คุณไม่ได้ถูกกำหนดให้คบกลุ่มเดิมตลอดชีวิต",{h:2,selfcontrol:3})])]
},
{key:"games",gate:()=>true,person:"บอล",stages:[
scene(9,"เกมที่เล่นกับเพื่อนแล้วหัวเราะจนลืมเวลา","บอล เพื่อนในห้องชวนเล่นเกมร่วมมือกันในเวลาที่ผู้ปกครองอนุญาต คุณจะลองไหม",[
q("ลองเล่นกับบอลหลังทำหน้าที่เสร็จ","คุณพบงานอดิเรกใหม่และเพื่อนที่ชอบเกม",{h:4,friend:3},"casual"),
q("เล่นทุกครั้งที่มีโอกาสจนเริ่มเบียดเวลานอน","เกมกลายเป็นสิ่งที่คุณอยากทำมากขึ้น",{h:4,energy:-4,discipline:-2},"heavy",{vyRisk:1}),
q("ขอลองดูบอลเล่นก่อน","คุณรู้จักเกมแต่ยังไม่ได้เริ่มเล่นเอง",{experience:2}),
q("ไม่สนใจเกมนี้","คุณเลือกความสนใจอื่น",{h:2})]),
scene(12,"รอบคัดเลือกเกมของชมรม",st=>st.vy_games_status==="heavy"?"บอลชวนสมัครกิจกรรมแข่งเกมของโรงเรียน แต่ช่วงนี้คุณเริ่มนอนดึกและทำงานส่งไม่ทัน":"บอลชวนสมัครกิจกรรมแข่งขันเกมแบบทีมของโรงเรียน มีเวลาฝึกและกติกาชัดเจน",[
q("สมัครและแบ่งเวลาฝึกกับการเรียน","ทีมเริ่มฝึกตามตารางที่ตกลง",{skill:4,discipline:2,friend:2},"train"),
q("สมัครแล้วเล่นดึกทุกคืนเพื่อให้เก่งเร็ว","คุณได้ฝึกมากแต่ร่างกายเริ่มล้า",{skill:4,energy:-7,physical:-2},"tired",{vyRisk:2}),
q("ไม่แข่งแต่เล่นเพื่อความสนุก","คุณยังเป็นเพื่อนเล่นเกมกับบอลได้",{h:4,friend:2},"casual"),
q("พักเกมไปทำสิ่งอื่น","คุณเลือกเปลี่ยนงานอดิเรกได้",{energy:3})],[sp("skill",55,0,q("★ อ่านรูปแบบเกมแล้วออกแบบแผนฝึกทีม","ทีมฝึกจุดที่ยังอ่อนแทนการเล่นจนดึก",{skill:5,problem:4,friend:3},"tactical"))]),
scene(14,"ผลของเวลาที่ใช้กับเกม",st=>st.vy_games_status==="casual"?"บอลชวนเล่นเกมในวันว่างเหมือนเดิม แต่คุณมีภาระจากโรงเรียนเพิ่มขึ้น":st.vy_games_status==="tired"?"ทีมถึงวันแข่งขันหลังฝึกหนัก คุณรู้สึกเหนื่อยและพลาดจังหวะที่เคยทำได้":"ทีมที่คุณเคยสมัครถึงวันแข่งขัน ทุกคนต้องร่วมมือกันและรับมือกับผลที่ไม่แน่นอน",[
q("เล่นตามกำลังและให้ความสำคัญกับทีม","คุณได้ประสบการณ์และรักษามิตรภาพ ไม่ว่าผลจะออกมาอย่างไร",{skill:4,friend:4,h:2}),
q("กลับมาจัดเวลาเล่นให้ไม่กระทบชีวิต","คุณรักษาความสนุกโดยไม่ต้องทิ้งเกม",{discipline:4,energy:5}),
q("โทษเพื่อนเมื่อเล่นไม่เป็นไปตามใจ","ความสัมพันธ์ในทีมเสียหาย",{friend:-5,stress:4}),
q("เลือกพักจากการแข่งขันหรือเกมช่วงนี้","คุณมีเวลาให้สิ่งอื่นและยังกลับมาเล่นได้",{energy:4,h:2})],[sp("problem",65,0,q("★ วิเคราะห์จุดผิดพลาดและช่วยทีมปรับแผนระหว่างเล่น","คุณใช้การคิดเป็นระบบและทำให้ทีมสื่อสารดีขึ้น",{problem:5,skill:4,friend:3}))])
]},
{key:"sports",gate:(st,t)=>true,person:"เจ",stages:[
scene(10,"สนามวิ่งหลังเลิกเรียน","เจ เพื่อนที่ชอบกีฬา ชวนมาลองวิ่งผลัด ครูเปิดให้ทุกคนลองก่อนคัดทีม",[
q("ลองวิ่งและขอครูสอนท่าพื้นฐาน","คุณเริ่มฝึกและรู้จักเจมากขึ้น",{physical:4,skill:2,friend:2},"practice"),
q("ลองวิ่งเล่นเพื่อสนุก ไม่สมัครทีม","คุณสนุกกับกีฬาโดยไม่ต้องแข่ง",{physical:3,h:3},"fun"),
q("ช่วยจับเวลาและเชียร์เพื่อน","คุณร่วมกิจกรรมในบทบาทที่เลือกเอง",{friend:3,problem:1}),
q("ไปทำกิจกรรมอื่น","คุณไม่ต้องสนใจกีฬาเหมือนเพื่อน",{h:2})]),
scene(12,"การคัดตัวนักวิ่ง",st=>st.vy_sports_status==="fun"?"เจชวนมาวิ่งเล่นอีกครั้ง ครูเปิดรับสมัครทีมวิ่งผลัดแต่คุณยังไม่ได้สมัคร":"หลังเคยฝึกวิ่ง ครูชวนเข้าคัดตัวทีมวิ่งผลัด คุณยังต้องผ่านการประเมินในสนาม",[
q("ลงคัดตัวหลังเตรียมตัวและพักให้พอ","ครูประเมินความพร้อมตามผลงานของคุณ",{physical:3,discipline:2},"trial"),
q("สมัครเป็นตัวสำรองและฝึกต่อ","คุณมีโอกาสฝึกในบทบาทที่ไม่กดดัน",{physical:3,patience:3},"reserve"),
q("ฝืนวิ่งทั้งที่เจ็บขา","ครูให้คุณหยุดพักและประเมินอาการก่อนกลับมาฝึก",{physical:-5,energy:-3},"hurt"),
q("ไม่เข้าทีม ขอวิ่งเล่นกับเพื่อน","คุณยังรักกีฬาได้โดยไม่ต้องแข่ง",{h:4,physical:2})],[sp("physical",78,0,q("★ ใช้ความแข็งแรงและจังหวะรับส่งไม้ที่ฝึกมา","ครูเห็นความพร้อมและให้คุณมีสิทธิลงแข่งตามกติกา",{physical:4,confidence:3,skill:3},"selected"))]),
scene(14,"วันประกาศรายชื่อและหน้าที่ในทีม",st=>st.vy_sports_status==="selected"?"คุณผ่านการคัดเลือกและครูชวนลงแข่งจริง เจกำลังเตรียมทีม":st.vy_sports_status==="hurt"?"หลังเคยฝืนวิ่งจนเจ็บ ครูให้ทบทวนความพร้อมก่อนกลับเข้าทีม":"ครูแจ้งว่าคุณยังต้องประเมินผลงานและบทบาทก่อนการแข่งขัน ไม่ได้รับประกันว่าจะเป็นตัวจริง",[
q("รับบทบาทตามผลประเมินและฝึกต่อ","คุณได้พัฒนาตามความพร้อมจริง",{physical:4,discipline:3}),
q("ช่วยทีมในบทบาทที่ทำได้","คุณมีส่วนร่วมโดยไม่ต้องชนะหรือเป็นตัวจริง",{friend:4,h:2}),
q("โกรธและกล่าวหาเพื่อนที่ได้ตำแหน่ง","ทีมรู้สึกกดดันและความสัมพันธ์เสียหาย",{friend:-4,stress:3}),
q("พักกีฬาเพื่อดูแลร่างกายหรือไปทำอย่างอื่น","คุณเลือกสุขภาพและเวลาเอง",{energy:5,physical:2})])]
},
{key:"crush",gate:(st,t)=>single(st),keep:st=>single(st),person:"เพลง",stages:[
scene(13,"คนที่นั่งรอรถหลังเลิกเรียน","เพลง นักเรียนวัยเดียวกันนั่งรอรถอยู่ใกล้คุณ เธอถือพวงกุญแจจากการ์ตูนที่คุณเคยเห็นและยิ้มทัก",[
q("ชวนคุยเรื่องการ์ตูนและแนะนำตัว","เพลงคุยด้วยอย่างเป็นมิตร ยังไม่ได้ตกลงเป็นคนรัก",{social:3,confidence:2},"open"),
q("อยากรู้จักในฐานะเพื่อน","ทั้งคู่เริ่มคุยกันโดยไม่คาดหวังความรัก",{friend:3},"friend"),
q("ยิ้มตอบแล้วไปหาเพื่อน","คุณยังไม่ได้สานความสัมพันธ์",{social:1}),
q("ไม่อยากรู้จักใครเพิ่มตอนนี้","คุณมีสิทธิเลือกพื้นที่ส่วนตัว",{h:2})]),
scene(15,"บัตรเข้างานโรงเรียนสองใบ",st=>st.vy_crush_status==="friend"?"เพลงชวนคุณกับเพื่อนกลุ่มหนึ่งไปดูงานโรงเรียนในฐานะเพื่อน":"เพลงที่คุณเคยทำความรู้จักชวนเดินดูงานโรงเรียน เธอบอกว่าชอบคุยกับคุณแต่ยังไม่ได้บอกว่าคิดแบบคนรัก",[
q("ไปกับกลุ่มเพื่อนและไม่เร่งความสัมพันธ์","ทั้งคู่มีช่วงเวลาที่สนุกและได้รู้จักกันเพิ่ม",{friend:3,social:2},"friend"),
q("ชวนไปเดินด้วยกันและบอกว่าคุณรู้สึกดี","เพลงรับฟัง แต่ขอเวลาคิดและยังไม่ตกลงคบ",{confidence:3,i:2},"confess"),
q("กดดันให้ตอบว่าชอบคุณหรือไม่","เพลงไม่สบายใจและขอเว้นระยะ",{social:-3,stress:3},"pressure"),
q("ขอไม่ไปงานและรักษาระยะ","คุณเลือกไม่สานต่อได้",{selfcontrol:2})],[sp("social",70,1,q("★ บอกความรู้สึกอย่างเป็นธรรมชาติและเปิดทางให้ปฏิเสธ","เพลงรู้สึกว่าคุณเคารพเธอและขอค่อยๆ ทำความรู้จัก",{social:4,confidence:3},"respect"))]),
scene(17,"คำตอบที่เพลงเลือกเอง",st=>st.vy_crush_status==="pressure"?"เพลงขอคุยครั้งสุดท้าย เธอบอกว่าไม่ชอบการถูกกดดันและอยากรักษาระยะ":st.vy_crush_status==="friend"?"เพลงบอกว่าดีใจที่มีคุณเป็นเพื่อนและอยากรักษามิตรภาพ":"เพลงบอกว่าเธอมีความรู้สึกของตัวเองและอยากให้ทั้งคู่คุยกันตรงๆ โดยไม่ต้องรีบเป็นแฟน",[
q("รับฟังและเคารพคำตอบของเพลง","คุณรักษาขอบเขตและให้ความสำคัญกับความรู้สึกของอีกฝ่าย",{e:4,social:3}),
q("บอกความรู้สึกตามจริงและยอมรับว่าอาจไม่ตรงกัน","คุณได้ฝึกสื่อสารโดยไม่บังคับความรัก",{confidence:3,i:2}),
q("โกรธและพูดจาไม่ดีเมื่อไม่ได้คำตอบที่หวัง","เพลงขอหยุดติดต่อส่วนตัว",{friend:-4,stress:3},"end",{vyClosePerson:true}),
q("เลือกเดินหน้าชีวิตของตัวเองอย่างสุภาพ","คุณเก็บประสบการณ์ไว้โดยไม่ต้องรอใคร",{h:3,selfcontrol:3})])]
},
{key:"earn",gate:()=>true,stages:[
scene(11,"วันหยุดที่ร้านของคนรู้จัก","ผู้ใหญ่ที่ครอบครัวรู้จักขายของในตลาดและชวนคุณลองช่วยงานง่ายๆ ช่วงสั้น โดยไม่กระทบการเรียนหรือความปลอดภัย",[
q("ช่วยนับของและจัดป้ายราคา","คุณได้ลองงานค้าขายตามวัย",{skill:3,knowledge:2},"count"),
q("ช่วยวาดป้ายร้านและจัดของเบาๆ","คุณได้ทดลองใช้ความคิดสร้างสรรค์กับงานจริง",{creative:4,skill:2},"design"),
q("ไปเดินตลาดกับคนที่บ้านเฉยๆ","คุณยังไม่รับหน้าที่ช่วยงาน",{h:3}),
q("ขอใช้วันหยุดทำสิ่งที่ชอบ","คุณไม่ต้องเริ่มหาเงินตั้งแต่เด็ก",{h:2})]),
scene(14,"เงินก้อนเล็กจากงานที่ตกลงไว้","ผู้ใหญ่ชวนช่วยงานตามวัยในช่วงวันหยุดอีกครั้ง และตกลงค่าตอบแทน 300 บาทหลังงานเสร็จ คุณจะจัดการอย่างไร",[
q("ตกลงและทำงานตามเวลาที่ปลอดภัย","คุณได้ค่าตอบแทนตามงานที่ทำ",{m:300,skill:3,reliable:2},"paid"),
q("ช่วยงานและขอเรียนรู้เรื่องต้นทุนด้วย","คุณได้ค่าตอบแทนและรู้จักการจัดการร้าน",{m:300,knowledge:3,problem:2},"paid"),
q("รับงานมากเกินเวลาที่ตกลง","ผู้ใหญ่หยุดงานส่วนเกินให้ คุณได้เฉพาะค่าตอบแทนงานที่ทำ",{m:200,energy:-3},"paid"),
q("ไม่รับงานครั้งนี้","คุณรักษาเวลาเรียนและชีวิตส่วนตัว",{energy:3})],[sp("knowledge",55,1,q("★ ช่วยคิดยอดขายและตรวจเงินทอนอย่างเป็นระบบ","ผู้ใหญ่เห็นว่าคุณตรวจรายการได้ดีและจ่ายตามข้อตกลง",{m:300,knowledge:4,problem:4},"paid"))]),
scene(17,"ของที่อยากซื้อด้วยเงินตัวเอง","คุณจำเงินที่เคยได้จากการช่วยงานได้ ตอนนี้เริ่มคิดว่าจะทำงานต่อ เรียนสายอาชีพ หรือเก็บเงินเพื่อเป้าหมายอื่น",[
q("เก็บเงินและสำรวจการฝึกอาชีพ","คุณเห็นว่าการฝึกทักษะเป็นอีกเส้นทางหนึ่ง",{security:3,skill:3}),
q("ใช้เงินตามกำลังเพื่อสิ่งที่ชอบ","คุณมีความสุขกับสิ่งที่ได้จากความพยายามโดยไม่ต้องก่อหนี้",{h:4}),
q("ศึกษาเรื่องต้นทุนและลองวางแผนธุรกิจเล็กๆ","คุณเตรียมตัวโดยยังไม่ได้เปิดกิจการ",{knowledge:4,ambition:3}),
q("เลือกเรียนต่อหรือใช้เวลากับเรื่องอื่น","ประสบการณ์ช่วยงานไม่บังคับอาชีพในอนาคต",{experience:3})])]
},
{key:"quiet",gate:(st,t)=>t.social<=58||t.confidence<=58,person:"ขิง",stages:[
scene(9,"โต๊ะที่ยังมีที่ว่าง","ช่วงกินข้าว เด็กชื่อขิงนั่งอ่านหนังสืออยู่คนเดียวและชี้ว่ามีที่ว่างข้างๆ คุณอยากทำอย่างไร",[
q("นั่งด้วยและค่อยๆ คุย","ทั้งคู่พบว่าการอยู่เงียบๆ ด้วยกันก็สบายใจ",{friend:3,h:2},"known"),
q("นั่งอ่านหนังสือคนละเล่ม","คุณได้รู้จักเพื่อนโดยไม่ต้องพูดมาก",{knowledge:2,friend:2},"known"),
q("ไปนั่งกับกลุ่มที่รู้จักแล้ว","คุณเลือกสังคมที่สบายใจ",{h:2}),
q("นั่งพักคนเดียวอีกโต๊ะ","คุณไม่จำเป็นต้องฝืนเข้าสังคม",{energy:2})]),
scene(12,"งานนำเสนอที่ขิงกังวล","ขิงที่คุณรู้จักต้องขึ้นพูดหน้าห้องและบอกว่ากลัวลืมบท คุณเองมีสิทธิเลือกว่าจะช่วยไหม",[
q("ช่วยซ้อมในที่เงียบและฟังจนจบ","ขิงคุ้นกับบทมากขึ้นและขอบคุณคุณ",{friend:4,e:3},"support"),
q("ชวนขิงขอครูแบ่งบทให้เหมาะกับความพร้อม","ครูรับรู้ข้อจำกัดและช่วยจัดงาน",{problem:3,social:2},"support"),
q("ล้อขิงต่อหน้าเพื่อน","ขิงเสียความมั่นใจและขอเว้นระยะ",{friend:-5,e:-3},"hurt"),
q("บอกว่าคุณยังไม่สะดวกช่วย","ขิงรับรู้ขอบเขตของคุณ",{selfcontrol:2},"neutral")],[sp("e",70,0,q("★ สังเกตว่าขิงกังวลส่วนไหนและช่วยซ้อมทีละขั้น","ขิงรู้สึกได้รับการเข้าใจและได้ฝึกโดยไม่ถูกบังคับ",{e:5,friend:4,confidence:2},"support"))]),
scene(15,"ขิงเลือกเส้นทางของตัวเอง",st=>st.vy_quiet_status==="hurt"?"ขิงยังจำตอนถูกล้อได้และมาบอกว่าคำพูดนั้นทำให้ไม่อยากขึ้นพูดอีก":"ขิงกลับมาเล่าว่าพบกิจกรรมที่ชอบและอยากให้คุณรู้ว่าตอนนี้สบายใจขึ้น",[
q("ฟังและยอมรับความรู้สึกของขิง","ขิงมีพื้นที่พูดเรื่องที่สำคัญ",{friend:4,e:3}),
q("ขอโทษหากเคยทำให้เสียใจ","คุณพยายามรับผิดชอบต่อคำพูดของตัวเอง",{i:3,responsibility:3}),
q("บอกว่าปัญหาของขิงไม่สำคัญ","ขิงเลือกไม่เล่าเรื่องส่วนตัวให้คุณอีก",{friend:-4},"end",{vyClosePerson:true}),
q("ชวนทำกิจกรรมที่ทั้งคู่สบายใจ","มิตรภาพไม่ต้องขึ้นอยู่กับความกล้าแสดงออก",{friend:4,h:3})])]
},
{key:"skip",gate:(st,t)=>st.fkConduct>=3||st.vyRisk>=2||t.discipline<=48,person:"ตั้ม",stages:[
scene(12,"คำชวนในเช้าวันเรียน","ตั้ม เพื่อนที่เพิ่งรู้จัก บอกว่าไม่อยากเข้าเรียนคาบแรกและชวนคุณขาดเรียนด้วยกัน",[
q("ไปด้วยเพราะไม่อยากเข้าเรียน","คุณขาดบทเรียนและโรงเรียนเริ่มบันทึกการขาดเรียน",{knowledge:-3,discipline:-4,h:2},"skip",{vyRisk:2}),
q("ไปโรงเรียนแต่ชวนตั้มคุยว่าทำไมไม่อยากเรียน","คุณได้ฟังเพื่อนโดยไม่ต้องขาดเรียน",{friend:3,e:2},"help"),
q("ขอครูช่วยถ้ามีปัญหาที่โรงเรียน","คุณหาทางออกโดยไม่ต้องรับภาระเองทั้งหมด",{problem:3,responsibility:2},"help"),
q("ไม่เข้าร่วมและไปเรียนตามปกติ","คุณรักษาเวลาเรียนของตัวเอง",{discipline:2})]),
scene(14,"สมุดบันทึกการเข้าเรียน",st=>st.vy_skip_status==="skip"?"ครูตรวจพบการขาดเรียนและบทเรียนที่คุณพลาด จึงนัดคุยกับคุณและผู้ปกครอง":"ตั้มที่เคยเล่าเรื่องไม่อยากเรียนมาขอคำแนะนำอีกครั้ง เพราะเริ่มมีปัญหาเรื่องการเข้าเรียน",[
q("เล่าสาเหตุจริงและขอแผนตามบทเรียน","ครูช่วยวางแผนชดเชยบทเรียนตามที่ขาด",{knowledge:4,discipline:3},"recover"),
q("คุยกับผู้ใหญ่เรื่องวิชาที่ไม่ถนัดและทางเรียนอื่น","คุณสำรวจทางเลือกโดยยังไม่ออกจากโรงเรียน",{problem:3,experience:3},"vocational"),
q("ปิดบังและไม่สนใจงานที่ค้าง","ความพร้อมเรียนลดลงและเรื่องยังไม่ถูกแก้",{knowledge:-4,discipline:-4,stress:4},"avoid",{vyRisk:2}),
q("ขอเวลาและกลับไปทำงานที่ค้างทีละส่วน","คุณเริ่มกลับมารักษาข้อตกลง",{discipline:3,knowledge:2},"recover")]),
scene(17,"ทางเลือกก่อนจบมัธยม",st=>st.vy_skip_status==="avoid"?"ครูแจ้งว่างานค้างและการขาดเรียนอาจกระทบความพร้อมจบ คุณต้องเลือกทางแก้ก่อนตัดสินใจอนาคต":"ครูแนะแนวชวนทบทวนทางเรียนต่อ การฝึกอาชีพ และงานที่เหมาะกับสิ่งที่คุณสนใจ",[
q("ขอแก้งานที่ค้างและเตรียมตัวเรียนต่อ","คุณเพิ่มความพร้อมแต่ยังต้องผ่านเงื่อนไขการเรียนจริง",{knowledge:5,discipline:4}),
q("สำรวจหลักสูตรสายอาชีพและทักษะที่อยากฝึก","คุณเพิ่มข้อมูลสำหรับการเลือกเส้นทางหลังเรียน",{skill:4,experience:3}),
q("ไม่แก้ปัญหาการเรียนตอนนี้","ความพร้อมลดลงและการสอบในอนาคตยากขึ้น",{knowledge:-4,discipline:-4}),
q("ขอความช่วยเหลือจากคนที่ไว้ใจและวางแผนทีละขั้น","คุณเริ่มแก้ข้อจำกัดตามความพร้อม",{problem:4,energy:3})])]
},
{key:"activities",gate:()=>true,person:"แป้งหอม",stages:[
scene(11,"หลังเวทีงานวันเด็ก","ครูเปิดรับอาสาช่วยงานวันเด็ก มีหน้าที่ดูแลฉาก เปิดเพลง และจัดคิว แป้งหอมเป็นนักเรียนที่มาช่วยงานด้วย",[
q("สมัครจัดฉากและทำของประกอบ","คุณเริ่มทำงานกับทีมโดยไม่ต้องขึ้นเวที",{creative:4,friend:2},"stage"),
q("สมัครช่วยจัดคิวและประสานงาน","คุณได้ฝึกจัดลำดับและคุยกับคนหลายกลุ่ม",{social:4,problem:2},"stage"),
q("ไปดูงานในฐานะผู้ชม","คุณยังสนุกได้โดยไม่รับภาระ",{h:3}),
q("ไม่เข้าร่วมงาน","คุณใช้เวลากับสิ่งอื่น",{h:2})]),
scene(13,"ไมค์ที่เงียบก่อนเริ่มงาน","ครูชวนทีมที่เคยช่วยงานมาทำกิจกรรมอีกครั้ง แต่ไมค์ตัวหลักไม่ทำงานและผู้แสดงกำลังรอ",[
q("แจ้งครูและช่วยหาวิธีใช้ไมค์สำรอง","ทีมแก้ปัญหาโดยไม่ต้องเสี่ยงกับอุปกรณ์ไฟฟ้า",{problem:4,reliable:3},"solved"),
q("ชวนทีมปรับลำดับการแสดง","กิจกรรมยังเดินหน้าได้ระหว่างรอผู้ใหญ่จัดการ",{social:3,problem:3},"solved"),
q("โทษคนที่ดูแลเสียงโดยไม่ตรวจ","ทีมเสียกำลังใจและความขัดแย้งเพิ่มขึ้น",{friend:-4,stress:3},"blame"),
q("ขอส่งหน้าที่ให้ครูแล้วพัก","คุณบอกข้อจำกัดและไม่ทำงานเกินความสามารถ",{energy:3})],[sp("creative",65,1,q("★ คิดรูปแบบการแสดงที่ไม่ต้องใช้ไมค์ชั่วคราว","ทีมปรับกิจกรรมและให้ผู้ใหญ่ตรวจความปลอดภัย",{creative:5,problem:4,confidence:2},"solved"))]),
scene(15,"คนที่อยู่หลังเวที",st=>st.vy_activities_status==="blame"?"แป้งหอมอยากคุยเรื่องที่ทีมเคยกล่าวโทษกันก่อนงาน":"แป้งหอมกับครูชวนทีมเก่ามาดูภาพงานที่เคยช่วยกันจัดและแบ่งปันสิ่งที่ได้เรียนรู้",[
q("ขอบคุณทุกคนที่ช่วยกันและรับผิดชอบส่วนของตัวเอง","ทีมรู้สึกว่าผลงานเป็นของทุกคน",{friend:4,responsibility:3}),
q("ชวนลองกิจกรรมสร้างสรรค์อื่นเมื่อมีเวลา","คุณต่อยอดความสนใจโดยไม่รับปากแทนทีม",{creative:4,network:2}),
q("อ้างว่าเป็นผลงานของคุณคนเดียว","เพื่อนที่ร่วมงานเสียความรู้สึก",{fair:-4,friend:-4}),
q("เก็บภาพไว้แล้วเลือกทำเรื่องอื่นต่อ","คุณมีความทรงจำดีๆ โดยไม่ต้องทำกิจกรรมเดิมตลอด",{h:4})])]
},
{key:"familychange",gate:(st,t,a,s)=>["busy","strict"].includes(s.origin?.home)||t.father<43||t.mother<43,stages:[
scene(8,"มื้อเย็นที่เงียบกว่าปกติ","คนที่บ้านมีเรื่องค่าใช้จ่ายและเวลางานให้คุยกัน ผู้ใหญ่เสียงดังขึ้นแต่ยืนยันว่าไม่ใช่ความผิดของคุณ",[
q("ถามผู้ใหญ่ที่ไว้ใจว่าเกิดอะไรขึ้น","คุณได้รับคำอธิบายตามวัยโดยไม่ต้องแก้ปัญหาผู้ใหญ่",{r:3,confidence:2},"talk"),
q("ไปเล่นในพื้นที่สงบและขอคนดูแลอยู่ใกล้ๆ","คุณได้พื้นที่ปลอดภัยและพักจากความตึงเครียด",{energy:3,stress:-2},"quiet"),
q("พยายามห้ามผู้ใหญ่จนรู้สึกเหนื่อย","ผู้ใหญ่รับรู้ว่าคุณกังวลและบอกว่าหน้าที่แก้เรื่องนี้เป็นของเขา",{stress:3,r:1},"worry"),
q("ขอเข้านอนก่อน","คุณพักโดยไม่ต้องรู้รายละเอียดทั้งหมด",{energy:3},"quiet")]),
scene(10,"การเปลี่ยนตารางของบ้าน","ผู้ใหญ่บอกว่าต้องปรับเวลารับส่งและดูแลคุณเพราะภาระงานเปลี่ยนไป พวกเขาให้คุณเสนอสิ่งที่อยากรักษาไว้",[
q("ขอรักษาเวลาพบเพื่อนและกิจกรรมที่ชอบ","ครอบครัวพยายามจัดเวลาตามที่ทำได้",{friend:3,r:3},"adapt"),
q("ขอให้ผู้ใหญ่แจ้งล่วงหน้าถ้าแผนเปลี่ยน","คุณมีความชัดเจนเรื่องกิจวัตรเพิ่มขึ้น",{security:3,r:2},"adapt"),
q("ไม่อยากคุยเพราะกลัวทุกอย่างเปลี่ยน","ผู้ใหญ่ให้เวลาและหาวิธีช่วยให้คุณปรับตัว",{stress:3},"worry"),
q("ขอคนที่ไว้ใจช่วยอธิบายแผน","คุณได้แรงสนับสนุนโดยไม่ต้องจัดการลำพัง",{problem:3,r:3},"adapt")]),
scene(13,"วันหยุดที่กลับมาคุยกัน","คนในบ้านชวนทบทวนว่าตารางและความสัมพันธ์ช่วงที่ผ่านมาเป็นอย่างไร คุณมีสิทธิเล่าว่าสิ่งไหนยังไม่โอเค",[
q("เล่าความรู้สึกจริงและขอเวลาร่วมกัน","ผู้ใหญ่ได้รับฟังสิ่งที่คุณต้องการ",{r:4,confidence:3}),
q("ชวนทำกิจกรรมง่ายๆ ที่บ้าน","ครอบครัวมีช่วงเวลาที่ดีโดยไม่ต้องใช้เงินมาก",{h:4,r:3}),
q("บอกว่ายังอยากได้พื้นที่ส่วนตัว","คุณรักษาขอบเขตโดยไม่ต้องรับผิดชอบปัญหาของผู้ใหญ่",{selfcontrol:3}),
q("ขอให้ผู้ใหญ่ที่ไว้ใจช่วยคุยเรื่องที่ค้าง","คุณไม่ต้องจัดการความขัดแย้งตามลำพัง",{problem:3,stress:-2})])]
}
];
const defs=new Map(arcs.map(a=>[a.key,a]));
const status=k=>`vy_${k}_status`,step=k=>`vy_${k}_step`;
const toChoice=(a,j,x)=>({label:x.label.replace(/^★ /,""),result:x.result,delta:x.delta,set:{[status(a.key)]:j===a.stages.length-1?"end":typeof x.next==="string"?x.next:"end",[step(a.key)]:j+1,...x.set}});
for(const a of arcs)for(const [j,z] of a.stages.entries())S.push({id:`varied_${a.key}_${j}`,age:z.age,order:88+j*.1,title:z.title,story:typeof z.story==="string"?z.story:"เรื่องต่อจากเหตุการณ์ที่คุณเลือก",cw:"variedyouth",vyKey:a.key,vyStage:j,custom:true,choices:z.choices.map(x=>toChoice(a,j,x))});
W.allowed=(e,st,s)=>{
 if(e.cw!=="variedyouth")return prev.allowed(e,st,s);
 const a=defs.get(e.vyKey),j=e.vyStage;
 if(j===0)return st[step(a.key)]===undefined&&a.gate(st,s.stats,e.age,s);
 return st[step(a.key)]===j&&st[status(a.key)]!=="end"&&(!a.keep||a.keep(st))&&(!a.person||!!st.people?.[a.person]);
};
W.story=(e,st)=>{if(e.cw!=="variedyouth")return prev.story(e,st);const z=defs.get(e.vyKey).stages[e.vyStage];return typeof z.story==="function"?z.story(st):z.story;};
W.choices=(e,st,s)=>{
 if(e.cw!=="variedyouth")return prev.choices(e,st,s);
 const a=defs.get(e.vyKey),j=e.vyStage,z=a.stages[j];
 const ordinary=z.choices.map(x=>toChoice(a,j,x));
 if(a.key==="crush"&&j===2&&["confess","respect"].includes(st.vy_crush_status)){
  const mutual=s.stats.social>=45&&s.stats.reliable>=40&&((s.seed??0)>>>0)%4!==0;
  ordinary[1]=toChoice(a,j,mutual?q("ถามเพลงว่าอยากลองคบกันไหม และยอมรับคำตอบของเธอ","เพลงบอกว่ารู้สึกดีเช่นกัน ทั้งคู่ตกลงลองคบกันโดยยังมีพื้นที่ของตัวเอง",{partner:5,h:3,confidence:2},"end",{relationship:"คบกัน",partnerName:"เพลง",teenBond:"เพลง",teenRelationship:"คบกัน",pastRomance:"ใช่",vySongDating:true}):q("ถามเพลงว่าอยากลองคบกันไหม และยอมรับคำตอบของเธอ","เพลงบอกว่ายังไม่ได้รู้สึกแบบเดียวกัน คุณได้รับคำตอบที่ชัดเจนและไม่ได้เริ่มคบกัน",{confidence:2,e:2},"end"));
 }
 const extras=z.special.filter(x=>s.stats[x.stat]>=x.min&&!(a.key==="games"&&j===2&&st.vy_games_status==="casual")&&!(a.key==="sports"&&j===1&&st.vy_sports_status!=="practice")).map(x=>({...toChoice(a,j,x.choice),special:true,baseIndex:x.base}));
 return [...ordinary,...extras];
};
W.after=(st,old,e,n,ch,item)=>{
 prev.after(st,old,e,n,ch,item);
 if(e.cw!=="variedyouth")return;
 const a=defs.get(e.vyKey),j=e.vyStage,p=a.person;
 if(ch.set?.vyRisk){st.vyRisk=(old.vyRisk||0)+ch.set.vyRisk;if(item.age<=12){st.fkConduct=Math.min(20,(st.fkConduct||0)+ch.set.vyRisk);st.fkIncidents=(st.fkIncidents||0)+1;}}
 if(j===0&&p&&st[status(a.key)]!=="end")st.people[p]={...(st.people[p]||{}),feeling:"รู้สึกดี",boundary:"เปิดใจ"};
 if(p&&ch.set?.vyClosePerson&&st.people[p])st.people[p]={...st.people[p],feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"};
 if(e.vyKey==="crush"&&j===1&&st[status(a.key)]==="pressure"&&st.people[p])st.people[p]={...st.people[p],feeling:"เว้นระยะ",boundary:"ไม่ติดต่อ"};
 if(e.vyKey==="crush"&&j===2&&st.vySongDating&&st.partnerName==="เพลง")st.people["เพลง"]={...(st.people["เพลง"]||{}),feeling:"รู้สึกดี",boundary:"เปิดใจ"};
 delete st.vyClosePerson;
};
// Preserve the study-habit IDs and academic deltas, but replace the eight identical prompts with concrete age-specific situations.
const habits=[
["ตารางสูตรคูณกับเพื่อนหน้าบ้าน","พรุ่งนี้ครูจะถามสูตรคูณ แต่เพื่อนชวนออกไปเล่นหน้าบ้านตอนเย็น",["ทบทวนสูตรคูณแล้วนอนตามเวลา","ฝึกโจทย์จนดึกเพื่อให้จำได้หมด","ฝึกสั้นๆ ก่อนออกไปเล่น","ออกไปเล่นเป็นหลัก"]],
["หนังสือสรุปก่อนสอบกลางภาค","ครูแจกหัวข้อสอบไว้ล่วงหน้า คุณมีเวลาหนึ่งสัปดาห์ และมีกิจกรรมที่อยากทำด้วย",["แบ่งหัวข้ออ่านวันละนิด","อ่านทุกหัวข้อจนดึกหลายคืน","อ่านหัวข้อสำคัญแล้วไปทำกิจกรรม","เลือกใช้เวลาไปกับกิจกรรมอื่น"]],
["วิชาที่เพิ่งเรียนในห้องใหม่","บทเรียนใหม่มีคำศัพท์ที่คุณยังไม่คุ้น ครูให้แบบฝึกหัดกลับมาลอง",["ทำแบบฝึกทีละวันและพักให้พอ","ฝึกเพิ่มหลายชุดจนดึก","ทำชุดหลักแล้วแบ่งเวลาเล่น","เก็บแบบฝึกไว้และทำสิ่งอื่นก่อน"]],
["การบ้านกลุ่มกับงานชมรม","สัปดาห์นี้มีทั้งบทเรียนและกิจกรรมของเพื่อน คุณต้องแบ่งเวลาที่มีอยู่",["จัดตารางทบทวนและรับผิดชอบงาน","ใช้เวลาส่วนใหญ่ทบทวนจนพักน้อย","ทำงานที่จำเป็นแล้วร่วมชมรม","ให้เวลากับกิจกรรมและเพื่อนเป็นหลัก"]],
["โจทย์ที่ครูจะเฉลยพรุ่งนี้","ครูให้โจทย์ฝึกก่อนเฉลยในห้อง เพื่อนบางคนยังไม่ได้เริ่ม",["ลองแก้เองตามเวลาแล้วนอน","ทำโจทย์เพิ่มเติมจนดึก","ทำโจทย์บางข้อแล้วพักไปทำสิ่งที่ชอบ","ไม่ฝึกเพิ่มในคืนนี้"]],
["คะแนนครั้งล่าสุด","ครูคืนข้อสอบพร้อมจุดที่ต้องแก้ คุณยังมีเวลาเตรียมสอบรอบถัดไป",["แก้ข้อที่ผิดและทบทวนสม่ำเสมอ","ฝึกทุกข้อจนดึก","แก้จุดสำคัญและแบ่งเวลาพัก","เลือกใช้เวลาว่างกับเรื่องอื่น"]],
["หนังสือจากรุ่นพี่","รุ่นพี่ให้แนวข้อสอบฝึกที่โรงเรียนอนุญาต คุณต้องเลือกว่าจะใช้เวลาเตรียมตัวแค่ไหน",["วางแผนทำตามหัวข้อทุกสัปดาห์","เร่งทำโจทย์หลายชุดจนพักน้อย","ทำเฉพาะส่วนที่ต้องฝึกและแบ่งเวลาพัก","เก็บแนวข้อสอบไว้ก่อน"]],
["เดือนสุดท้ายก่อนสมัครเรียนต่อ","เหลือเวลาทบทวนพื้นฐานก่อนการคัดเลือกตามเส้นทางที่คุณสนใจ ไม่ใช่ทุกคนจะเลือกมหาวิทยาลัย",["รักษาตารางเรียนและนอนให้พอ","เร่งอ่านเข้มจนดึก","ทบทวนส่วนจำเป็นและทำกิจกรรมอื่นด้วย","ใช้เวลากับทักษะและเรื่องอื่นที่สนใจ"]]
];
for(const [i,h] of habits.entries()){const e=S.find(e=>e.id==="youth_habit_"+(10+i));if(!e)continue;e.title=h[0];e.story=h[1];e.choices.forEach((x,n)=>{if(h[2][n])x.label=h[2][n];});}
w.VARIED_YOUTH={arcs};
})(window);


// One follow-up for a mutually chosen teenage relationship; no automatic romance.
(function(w){
const W=w.CAREER_WORLD,previous=W.allowed;
const c=(label,result,delta,set={})=>({label,result,delta,set});
w.STORY.push({id:"varied_song_future",age:19,order:89,title:"เพลงกับเส้นทางหลังโรงเรียน",story:"เพลงที่คุณตกลงคบกันเมื่ออายุสิบเจ็ดมีแผนชีวิตของตัวเอง ตอนนี้ทั้งคู่มีตารางและภาระใหม่ คุณจะตกลงวิธีรักษาความสัมพันธ์อย่างไร",cw:"songfuture",custom:true,choices:[
c("คุยกันเรื่องเวลาและแผนของทั้งสองคน","ทั้งคู่หาวิธีพบกันโดยไม่ต้องทิ้งเป้าหมายของตัวเอง",{partner:5,problem:3}),
c("ตกลงเว้นระยะเมื่อแต่ละคนมีภาระ","คุณรักษาความสัมพันธ์และพื้นที่ส่วนตัว",{partner:3,energy:2}),
c("ยืนยันให้เพลงเปลี่ยนแผนเพื่อให้ตรงกับคุณ","เพลงไม่สบายใจกับการถูกกำหนดอนาคตแทน",{partner:-6,stress:4}),
c("พูดคุยและตกลงจบความสัมพันธ์อย่างเคารพกัน","ทั้งคู่แยกเส้นทางโดยยังเก็บประสบการณ์ที่เคยมี",{partner:-3,selfcontrol:3},{relationship:"แยกทาง",partnerName:"",teenBond:"",teenRelationship:"",vySongDating:false})
]});
const choices=W.choices,story=W.story;
W.allowed=(e,st,s)=>e.cw==="songfuture"?st.vySongDating===true&&st.partnerName==="เพลง"&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship):previous(e,st,s);
W.choices=(e,st,s)=>e.cw==="songfuture"?e.choices:choices(e,st,s);
W.story=(e,st)=>e.cw==="songfuture"?e.story:story(e,st);
})(window);


// Context-aware scene quality, repeat protection and authored skill options.
(function qualityLife(w){
"use strict";
const W=w.CAREER_WORLD,F=w.LIFE_FREEDOM,M=w.LIFE_MERGED,L=w.LIFE_LATER;
const previous={allowed:W.allowed,after:W.after,story:W.story,choices:W.choices,specials:F.specials,mergedStory:M.story};
const jobKey=st=>[st.profession||st.mode||"none",st.professionSince??-1,st.careerHistory?.at(-1)?.age??-1].join("@");
const partnerKey=st=>(st.partnerName||"single")+"@"+(st.partnerSince??-1);
const childId=x=>x?x.name+"@"+x.born:"none";
const adults=(st,a)=>st.children?.filter(x=>a-x.born>=20)||[];
const chooseChild=(st,a,fn=()=>true)=>{const v=adults(st,a).filter(fn);return v.length?v[a%v.length]:null};
const childSchool=(st,a)=>{const v=st.children?.filter(x=>a-x.born>=5&&a-x.born<=17)||[];return v.length?v[a%v.length]:null};
const scope=(type,...v)=>[type,...v].join("|");
const num=(st,k)=>st.qSeen?.[k]||0;
const job=st=>W.by[st.profession]?.name||st.mode||"งาน";
const q=(label,result,delta={},set={})=>({label,result,delta,set});
function key(e,st){
 const a=e.age,j=jobKey(st),p=partnerKey(st);
 if(e.cw==="case")return scope("career-case",e.cwProfession);
 if(e.cw==="follow")return scope("career-follow",e.cwProfession,st.careerCaseAge);
 if(e.cw==="explore")return scope("career-explore",j,st.qCareerRequest||0);
 if(e.cw==="home"||e.cw==="family")return scope("career-"+e.cw,p,st.qBalanceAge??st.careerCaseAge??st.detailAge??-1);
 if(e.cw==="friend")return scope("career-friend",j,st.qFriendAge??st.careerCaseAge??st.detailAge??-1);
 if(e.cw==="money")return scope("training-money",st.careerPlan,st.trainingAge);
 if(e.cw==="adultx"){
  switch(e.ax){
   case "ordinary":case "lost":case "wealth":return scope("adult",e.ax);
   case "meet":case "task":case "progress":case "ethics":return scope("adult",e.ax,j);
   case "result":return scope("adult-result",j,st.axTaskAge);
   case "ethicsfollow":return scope("adult-ethicsfollow",j,st.axEthicsAge);
   case "reunion":return scope("adult-reunion",st.axContact,st.axStart);
   case "pair":return scope("adult-pair",p);
   case "pairfollow":return scope("adult-pairfollow",p,st.axPairAge);
   case "child":return scope("adult-child",childId(childSchool(st,a)));
   case "childfollow":return scope("adult-childfollow",st.axChildName,st.axChildBorn,st.axChildAge);
   case "biz":return scope("adult-biz",st.axBizAge??-1);
   case "bizfollow":return scope("adult-bizfollow",st.axBizAge,st.lateBusiness);
   case "bizcrisis":return scope("adult-bizcrisis",st.axBizAge,st.lateBusiness);
   default:return "";
  }
 }
 if(e.cw==="crossx"){
  switch(e.crossx){
   case "collision":return scope("cross-collision",j,childId(childSchool(st,a)));
   case "collisionfollow":return scope("cross-collisionfollow",st.cxChild,st.cxChildBorn,st.cxConflictAge);
   case "parent":return scope("cross-parent",st.parentsLost?.mother?"father":"mother");
   case "friend":return scope("cross-friend",st.cxFriend||Object.keys(st.people||{}).find(n=>n!==st.partnerName&&w.PEOPLE.privateOK(st,n)&&st.people[n].feeling==="รู้สึกดี")||"none");
   case "friendfollow":return scope("cross-friendfollow",st.cxFriend,st.cxFriendAge);
   case "intimacy":return scope("cross-intimacy",p);
   case "weekend":return scope("cross-weekend",p);
   case "petfollow":return scope("cross-petfollow",st.cxPetAge);
   default:return "";
  }
 }
 if(e.cw==="elderx"){
  switch(e.elderx){
   case "childvisit":return scope("elder-childvisit",childId(chooseChild(st,a)));
   case "childfollow":return scope("elder-childfollow",st.elChildTarget,st.elChildAge);
   case "grand":return scope("elder-grand",childId(chooseChild(st,a,x=>x.grand&&a-(x.firstGrand??a)>=6)));
   case "estate":return scope("elder-estate",childId(chooseChild(st,a)));
   case "estatefollow":return scope("elder-estatefollow",st.elEstateTarget,st.elEstateAge);
   case "carefollow":return scope("elder-carefollow",st.elCareAge,st.elCare);
   case "healthfollow":return scope("elder-healthfollow",st.elHealthAge);
   case "luxury":case "autonomy":case "legacy":return scope("elder",e.elderx);
   case "mentor":return scope("elder-mentor",j);
   case "friend":return scope("elder-friend",Object.keys(st.people||{}).filter(n=>n!==st.partnerName&&w.PEOPLE.privateOK(st,n)&&st.people[n].feeling==="รู้สึกดี").sort().join(","));
   default:return "";
  }
 }
 if(e.later){
  switch(e.later){
   case "project":case "leadteam":return scope("later",e.later,j,st.careerRank||0);
   case "workchoice":return scope("later-workchoice",j,st.lateWork||"working");
   case "bizgrowth":case "bizfix":return scope("later",e.later,st.axBizAge??-1,st.lateBusiness);
   case "luxury":case "community":case "clubdrama":case "clubtrip":case "communityaward":case "scamold":case "travelbig":case "wealthheirs":return scope("later",e.later);
   case "childdebt":case "childsuccess":{const v=adults(st,a);return scope("later",e.later,childId(v[a%Math.max(1,v.length)]));}
   case "grandstudy":return scope("later-grandstudy",childId(adults(st,a).find(x=>x.grand&&a-(x.firstGrand??a)>=6)));
   default:return "";
  }
 }
 if(e.merge){
  switch(e.merge){
   case "hobbyMenu":return scope("hobby-menu",st.hobbyId||"none",st.qHobbyRequest||0);
   case "hobbyPractice":return scope("hobby-practice",st.hobbyId,st.hobbyStart);
   case "hobbyTogether":return scope("hobby-together",st.hobbyId,p);
   case "hobbyCareer":return scope("hobby-career",st.hobbyId);
   case "partnerWork":case "partnerFuture":return scope("partner",e.merge,p,st.partnerJob);
   default:return "";
  }
 }
 if(e.flex==="reconsider")return scope("reconsider",st.pastRomance||"",st.partnerSince??-1,st.romanceOpen||"");
 if(e.flex==="marry")return scope("marry",p,st.qMarriageRequest||0);
 if(e.polish==="family_decision")return scope("family-decision",p);
 return "";
}
function cap(e){
 if(e.cw==="adultx"&&e.ax==="task")return 3;
 if(e.cw==="follow"||e.cw==="money"||e.cw==="adultx"&&e.ax==="result"||e.merge==="hobbyPractice")return 2;
 return 1;
}
W.allowed=(e,st,s)=>{
 const k=key(e,st);
 if(k&&num(st,k)>=cap(e))return false;
 return previous.allowed(e,st,s);
};
W.after=(st,old,e,n,ch,item)=>{
 previous.after(st,old,e,n,ch,item);
 const k=item.sceneKey||key(e,old);
 if(k)st.qSeen={...(st.qSeen||{}),[k]:num(old,k)+1};
 if(st.careerBalance&&!old.careerBalance)st.qBalanceAge=item.age;
 if(st.careerFriend&&!old.careerFriend)st.qFriendAge=item.age;
 if(e.cw==="adultx"&&e.ax==="pairfollow"&&n===2){st.axPair="";st.coupleLoop="ค้าง";}
 if(e.cw==="adultx"&&e.ax==="childfollow"&&n===2)st.axChild="";
 if(e.cw==="elderx"&&e.elderx==="childfollow"&&n===2)st.elChildIssue="";
};
const taskStories=[
 "ผู้เกี่ยวข้องส่งงานตัวอย่างมาให้ตรวจและแจ้งว่าต้องส่งตามเวลาที่ตกลงไว้ คุณพบว่าข้อมูลบางส่วนไม่ครบ ต้องตัดสินใจว่าจะขอข้อมูลหรือทำเท่าที่มี",
 "ก่อนส่งมอบงานรอบใหม่ ผู้เกี่ยวข้องเปลี่ยนรายละเอียดหลังตกลงกันไปแล้ว คุณต้องจัดการขอบเขตงานและแจ้งผลกระทบโดยไม่เสียคุณภาพ"
];
W.story=(e,st)=>{
 const k=key(e,st),n=num(st,k);
 if(e.cw==="adultx"&&e.ax==="task"&&n>0)return "ในบทบาท"+job(st)+" "+taskStories[Math.min(n-1,1)];
 if(e.cw==="adultx"&&e.ax==="result"&&n>0)return "หลังยังไม่ได้จัดการข้อเสนอแนะจากงานที่เริ่มเมื่ออายุ "+st.axTaskAge+" ปี ผู้เกี่ยวข้องขอข้อสรุปเป็นลายลักษณ์อักษรและกำหนดวันปิดงาน คุณต้องจัดการเรื่องที่ยังค้างให้ชัดเจน";
 if(e.cw==="follow"&&n>0)return "เรื่องจากงาน"+job(st)+" เมื่ออายุ "+st.careerCaseAge+" ปี ยังไม่ได้ข้อยุติ ผู้เกี่ยวข้องขอข้อสรุปและแจ้งว่าต้องส่งเรื่องต่อผู้รับผิดชอบหากไม่มีคำตอบ";
 if(e.cw==="money"&&n>0)return "ระหว่างเตรียมอาชีพ"+(W.by[st.careerPlan]?.name||"ที่เลือก")+" คุณต้องตัดสินใจว่าจะจัดค่าเดินทางและอุปกรณ์ฝึกที่ต้องใช้ในระยะที่เหลืออย่างไร";
 return previous.story(e,st);
};
W.choices=(e,st,s)=>{
 const base=previous.choices(e,st,s),k=key(e,st),n=num(st,k),a=e.age;
 if(e.cw==="adultx"&&e.ax==="task"&&n>0){
  const b={axTaskAge:a};
  return n===1?[
   q("ขอข้อมูลที่ขาดและตรวจความถูกต้องก่อนเริ่ม","ผู้เกี่ยวข้องส่งรายละเอียดเพิ่มและคุณรับงานตามข้อมูลจริง",{problem:4,skill:3,reliable:3},{...b,axTask:"care"}),
   q("ตกลงส่งเฉพาะส่วนที่มีข้อมูลครบก่อน","ขอบเขตชัดขึ้นและผู้เกี่ยวข้องรู้สิ่งที่ต้องรอ",{network:3,problem:3},{...b,axTask:"scope"}),
   q("เดาข้อมูลที่ขาดเพื่อส่งให้ทัน","งานส่งเร็วแต่มีจุดที่อาจผิดพลาด",{career:2,i:-3,reliable:-3},{...b,axTask:"rush"}),
   q("ขอปฏิเสธงานที่ข้อมูลไม่พอ","คุณไม่รับภาระโดยขาดข้อเท็จจริง",{selfcontrol:3,energy:2})
  ]:[
   q("ประเมินผลกระทบและตกลงกำหนดส่งใหม่","ผู้เกี่ยวข้องรับทราบเวลาและคุณตรวจงานได้ครบ",{problem:4,reliable:4},{...b,axTask:"care"}),
   q("แยกงานเพิ่มออกจากข้อตกลงเดิม","คุณจัดขอบเขตชัดเจนก่อนรับงานเพิ่ม",{career:3,confidence:3},{...b,axTask:"scope"}),
   q("รับทุกอย่างโดยไม่ปรับเวลา","คุณมีภาระมากขึ้นและคุณภาพเสี่ยงลดลง",{stress:5,energy:-4},{...b,axTask:"rush"}),
   q("ส่งมอบเฉพาะงานที่ตกลงไว้และไม่รับงานเพิ่ม","คุณรักษาคำพูดโดยไม่รับภาระใหม่",{reliable:3,energy:2})
  ];
 }
 if(e.cw==="adultx"&&e.ax==="result"&&n>0)return [
  q("ส่งรายการแก้ไขที่ทำได้พร้อมหลักฐาน","ผู้เกี่ยวข้องรับทราบสิ่งที่แก้และปิดรอบงานนี้",{responsibility:4,reliable:3,skill:2},{axTask:""}),
  q("ขอผู้รับผิดชอบร่วมตรวจงานและตกลงสิ่งที่ยังค้าง","เรื่องถูกส่งต่ออย่างชัดเจนและคุณรับผิดชอบส่วนของตัวเอง",{network:3,problem:4},{axTask:""}),
  q("ไม่ตอบและปล่อยให้เรื่องถูกส่งต่อ","งานรอบนี้จบโดยมีข้อร้องเรียนค้างและความเชื่อมั่นลดลง",{reliable:-6,career:-2,stress:4},{axTask:"",careerBalance:"ค้าง",careerFriend:"ค้าง"}),
  q("ชี้แจงข้อจำกัดและยุติภาระงานเพิ่ม","คุณปิดงานในส่วนที่รับผิดชอบโดยไม่รับงานใหม่",{selfcontrol:3,energy:3},{axTask:""})
 ];
 if(e.cw==="follow"&&n>0)return [
  q("ส่งข้อสรุปและเอกสารให้ผู้รับผิดชอบตรวจ","คุณรับผิดชอบเรื่องค้างและปิดรอบการติดตาม",{responsibility:4,reliable:4,problem:3},{careerCase:""}),
  q("ขอคนกลางจัดการข้อพิพาทที่ยังตกลงไม่ได้","เรื่องถูกส่งให้ผู้เกี่ยวข้องดำเนินต่อโดยไม่ต้องคุยเรื่องเดิมทุกปี",{fair:3,network:3},{careerCase:""}),
  q("ไม่ตอบจนผู้เกี่ยวข้องส่งเรื่องต่อ","คุณเสียความเชื่อมั่นและผลจากงานยังตามมากระทบชีวิต",{career:-4,reliable:-5,stress:4},{careerCase:"",careerBalance:"ค้าง",careerFriend:"ค้าง"}),
  q("ออกจากงานและส่งมอบข้อมูลที่ยังค้าง","คุณยุติบทบาทงานนี้และต้องตั้งหลักใหม่",{career:-3,experience:4},{careerCase:"",mode:"พักที่บ้าน",goal:"หางานใหม่"})
 ];
 if(e.cw==="money"&&n>0)return [
  q("ขอข้อมูลทุนหรือยืมอุปกรณ์จากสถานฝึก","คุณลดค่าใช้จ่ายโดยยังฝึกต่อได้",{problem:4,security:3}),
  q("รับงานเสริมช่วงที่ไม่ชนการฝึก","คุณได้รายได้จากงานเสริมตามกำลัง",{m:1200,skill:2,energy:-3}),
  s.stats.m>=1500?q("กันเงิน 1,500 บาทไว้สำหรับอุปกรณ์","คุณมีอุปกรณ์ฝึกตามแผนและเงินสดลดลง",{m:-1500,knowledge:3}):q("ขอใช้เครื่องมือที่สถานฝึกจัดให้","คุณหาทางฝึกต่อโดยไม่จ่ายเกินเงินสด",{problem:3,security:2}),
  q("พักแผนฝึกและสำรวจงานที่ทำได้ก่อน","คุณเลือกตั้งหลักโดยยังกลับมาฝึกได้ในอนาคต",{experience:3},{careerPlan:"",careerPhase:"",mode:"พักที่บ้าน",goal:"หางานใหม่"})
 ];
 return base;
};
M.story=(e,st)=>e.merge==="hobbyPractice"&&num(st,key(e,st))>0?"หลังเคยฝึก "+(st.hobby||"งานอดิเรก")+" มาระยะหนึ่ง คุณลองตั้งโจทย์เล็กที่ทำได้ในเวลาว่างและเลือกว่าอยากพัฒนาฝีมือหรือทำเพื่อความสุข":previous.mergedStory(e,st);
// These options are authored per incident, not a generic automatic score multiplier.
const annual={
 "year_5_1":["problem",35,0,"สังเกตรูปร่างแล้วแยกตัวต่อที่เข้ากัน","คุณพบวิธีประกอบชิ้นส่วนโดยไม่ฝืน",{problem:4,creative:3}],
 "year_8_1":["knowledge",25,0,"จัดดินสอเป็นกลุ่มเท่ากันแล้วคำนวณผลรวม","คุณแก้โจทย์ด้วยวิธีที่เร็วและอธิบายให้ครูฟังได้",{knowledge:4,problem:3}],
 "year_13_1":["social",65,0,"ทำแบบสำรวจเวลาในแชตแล้วเสนอแผนที่ทุกคนเลือกได้","กลุ่มตกลงเวลาโดยไม่ต้องกดดันคนที่เลือกต่างกัน",{social:4,problem:3,friend:3}],
 "year_14_0":["knowledge",55,0,"แยกโจทย์ที่พลาดเป็นประเภทแล้วฝึกเฉพาะจุด","คุณทบทวนได้ตรงจุดและยังมีเวลานอน",{knowledge:5,problem:4,energy:2}],
 "year_16_0":["creative",50,2,"ทดลองสร้างเกมตัวอย่างจากไอเดียของตัวเอง","ผู้สอนเห็นวิธีคิดและให้คำแนะนำเฉพาะงาน",{creative:5,skill:3}],
 "year_19_0":["problem",65,0,"อ่านกติกาและช่วยทีมจัดแผนเล่นหมากรอบแรก","คุณได้ใช้ไหวพริบและทำให้คนใหม่ร่วมเล่นได้ง่ายขึ้น",{problem:4,social:3,friend:2}],
 "year_23_1":["knowledge",60,0,"ตรวจเงื่อนไขทดลองใช้และหาค่าใช้จ่ายแฝงจากเอกสาร","คุณเห็นภาระที่ซ่อนอยู่ก่อนผูกข้อมูลชำระเงิน",{knowledge:4,security:4}],
 "year_29_1":["social",70,0,"อธิบายลำดับคิวอย่างชัดเจนโดยไม่ทำให้อีกฝ่ายเสียหน้า","คนขายและคนในคิวจัดลำดับใหม่อย่างสงบ",{fair:4,social:4,stress:-2}],
 "year_30_0":["physical",80,2,"เลือกวิ่งตามความพร้อมและรักษาจังหวะที่ปลอดภัย","คุณได้ออกกำลังตามกำลังที่สะสมมา",{physical:5,h:3}],
 "year_32_0":["skill",65,0,"ตรวจรายการซ่อมด้วยความรู้เรื่องชิ้นส่วนและถามจุดที่จำเป็น","คุณแยกงานซ่อมที่จำเป็นออกจากรายการที่ยังไม่ต้องทำ",{skill:4,problem:4,security:3}],
 "year_39_1":["knowledge",70,0,"ตรวจแหล่งข่าวต้นฉบับและเทียบวันที่จากหลักฐานหลายแห่ง","คุณพบว่าข่าวถูกนำกลับมาเผยแพร่โดยขาดบริบท",{knowledge:4,i:3,problem:3}],
 "year_43_0":["social",75,0,"สรุปข้อเสนอแต่ละฝ่ายและหาจุดที่ตกลงร่วมกันได้","วงประชุมลดการพูดแทรกและพิจารณาข้อเสนอจากข้อมูล",{fair:4,social:4,problem:3}],
 "year_50_1":["physical",78,0,"ใช้เส้นทางเดินที่เหมาะกับกำลังและออกแรงตามความพร้อม","คุณรักษาความคล่องตัวโดยไม่ฝืนร่างกาย",{physical:4,energy:2}],
 "year_53_1":["creative",70,2,"ออกแบบภาพจากแสงเงาที่สังเกตเองแล้วปรับองค์ประกอบ","คุณสร้างผลงานที่สะท้อนทักษะที่สะสมมา",{creative:5,skill:3}],
 "year_56_0":["problem",70,0,"จัดตารางเอกสารและตรวจยอดที่ครบกำหนดอย่างเป็นระบบ","คุณพบรายการที่ต้องติดตามก่อนเกิดภาระ",{problem:4,security:4}],
 "year_66_0":["knowledge",70,1,"ตรวจข้อเสนอผลตอบแทนกับข้อมูลผู้ให้บริการทางการและไม่โอนเงิน","คุณพบว่าเอกสารที่ผู้เสนอให้ยังยืนยันไม่ได้",{knowledge:4,security:5,i:2}],
 "year_73_1":["problem",70,0,"ตรวจที่มาของข้อความจากช่องทางทางการและช่วยเตือนคนอื่น","คุณไม่เปิดเผยข้อมูลและช่วยให้ผู้พบข้อความระวังตัว",{security:5,problem:4,e:2}],
 "year_84_0":["knowledge",70,0,"อ่านข้อกำหนดและจดข้อสงสัยเพื่อให้ผู้เชี่ยวชาญอิสระตรวจ","คุณรักษาสิทธิของตัวเองโดยไม่เซ็นเอกสารที่ไม่เข้าใจ",{security:5,knowledge:4,problem:3}],
 "year_93_1":["creative",70,2,"สร้างภาพลายใบไม้จากรายละเอียดที่เห็นและเลือกสีตามจินตนาการ","คุณได้ผลงานเล็กที่สะท้อนฝีมือของตัวเอง",{creative:5,h:3}],
 "year_99_1":["social",70,2,"ชวนคนที่สะดวกเลือกหนังหรือการ์ตูนคนละเรื่องแล้วคุยกัน","คุณได้แบ่งปันความสุขในวันนี้โดยไม่กดดันใคร",{h:5,r:4,social:2}]
};
F.specials=(e,st,s,base)=>{
 const result=previous.specials(e,st,s,base),t=s.stats;
 function add(stat,min,n,label,body,delta){
  const b=base.find((x,i)=>(x.baseIndex??i)===n);
  if(!b||!Number.isFinite(t[stat])||t[stat]<min)return;
  result.push({...b,baseIndex:n,special:true,label,result:body,delta:{...b.delta,...delta}});
 }
 const x=annual[e.id];if(x)add(...x);
 if(e.cw==="adultx"&&e.ax==="task")add("skill",70,0,"ใช้ประสบการณ์ตรวจจุดผิดพลาดก่อนรับงาน","คุณตรวจข้อจำกัดก่อนเริ่มและลดงานที่ต้องแก้ภายหลัง",{skill:5,problem:4,reliable:4});
 if(e.cw==="adultx"&&e.ax==="ethics")add("i",75,1,"บันทึกข้อเท็จจริงและแจ้งช่องทางที่รับผิดชอบโดยไม่เปิดเผยข้อมูลเกินจำเป็น","คุณรักษามาตรฐานและส่งข้อมูลให้ผู้เกี่ยวข้องตรวจสอบ",{i:5,fair:4,responsibility:4});
 if(e.cw==="adultx"&&e.ax==="progress")add("confidence",72,0,"นำหลักฐานผลงานมาเจรจาค่าตอบแทนตามขอบเขต","ผู้เกี่ยวข้องเห็นผลงานและพิจารณาข้อตกลงที่ชัดเจน",{career:8,confidence:4,reliable:3});
 if(e.cw==="crossx"&&e.crossx==="collision")add("problem",72,1,"จัดลำดับงานสำคัญและตกลงผู้ช่วยก่อนยืนยันเวลาไปหาลูก","คุณจัดการงานและรักษาคำพูดกับลูกตามข้อตกลง",{problem:5,child:5,reliable:3});
 if(e.cw==="elderx"&&e.elderx==="estate")add("knowledge",70,0,"จัดรายการทรัพย์สินและแยกคำถามที่จะให้ผู้เชี่ยวชาญตรวจ","คุณบันทึกเจตนาของตัวเองโดยไม่ต้องโอนทรัพย์สินให้ใคร",{security:5,fair:4,problem:3});
 if(e.cw==="elderx"&&e.elderx==="careplan"&&base[2])add("problem",70,2,"สำรวจจุดที่ทำกิจวัตรลำบากและจัดทางช่วยเฉพาะส่วน","คุณลดภาระตามความต้องการโดยไม่เสียความเป็นอิสระ",{problem:5,energy:4});
 if(e.later==="scamold")add("knowledge",75,0,"ตรวจสอบผู้ติดต่อจากช่องทางทางการโดยไม่เปิดเผยข้อมูลส่วนตัว","คุณพบว่าข้อเสนอไม่มีข้อมูลยืนยันและไม่ส่งทรัพย์สิน",{security:5,problem:4});
 return result;
};
w.LIFE_QUALITY={key,cap,annual};
})(window);


// Meaningful story quality gate: voluntary everyday scenes, preserve existing story IDs and caps.
(function meaningfulLife(w,ids){
"use strict";
const W=w.CAREER_WORLD,F=w.LIFE_FREEDOM,prev=W.allowed,Q=w.LIFE_QUALITY||{};
const optional=new Set(ids),byAge=new Map();
for(const e of w.STORY)if(optional.has(e.id)){if(!byAge.has(e.age))byAge.set(e.age,[]);byAge.get(e.age).push(e);}
W.allowed=(e,st,s)=>{
 if(optional.has(e.id)||e.cw==="adultx"&&e.ax==="ordinary")return false;
 if(e.cw==="elderx"&&e.elderx==="autonomy"&&s.stats.physical>=60&&s.stats.energy>=40)return false;
 return prev(e,st,s);
};
const options=(st,s,age)=>(byAge.get(age)||[]).filter(e=>!Object.hasOwn(s.answers,e.id)&&!s.history.some(x=>x.free?.patch?.optionalScene===e.id)).map(e=>{
 const base=e.choices;
 const choices=[...base,...(F.specials?.(e,st,s,base)||[])];
 return {id:e.id,title:e.title,story:e.story,actions:choices.map(c=>({key:"optional_"+e.id,title:(c.special?"★ ":"")+c.label,sceneTitle:e.title,result:c.result,delta:{...c.delta},patch:{optionalScene:e.id}})).filter(a=>F.valid(st,s,age,a))};
}).filter(e=>e.actions.length);
w.LIFE_QUALITY={...Q,options,optionalIds:ids.slice()};
})(window,["year_5_1","year_6_0","year_7_0","year_7_1","year_8_1","year_9_0","year_10_0","year_10_1","year_11_0","year_11_1","year_12_1","year_13_0","year_15_0","year_15_1","year_16_0","year_16_1","year_17_0","year_19_0","year_19_1","year_20_1","year_21_0","year_21_1","year_22_0","year_22_1","year_23_0","year_24_0","year_24_1","year_25_0","year_26_0","year_26_1","year_27_1","year_28_0","year_28_1","year_29_0","year_30_0","year_30_1","year_31_0","year_31_1","year_32_1","year_33_0","year_33_1","year_34_0","year_34_1","year_35_1","year_37_0","year_37_1","year_38_1","year_39_0","year_40_0","year_40_1","year_41_1","year_42_0","year_42_1","year_43_1","year_44_0","year_44_1","year_45_1","year_46_1","year_47_0","year_47_1","year_48_0","year_48_1","year_49_0","year_49_1","year_50_1","year_51_0","year_51_1","year_52_0","year_52_1","year_53_0","year_53_1","year_54_1","year_55_1","year_56_1","year_57_0","year_57_1","year_58_0","year_58_1","year_59_0","year_59_1","year_60_1","year_61_0","year_61_1","year_62_0","year_62_1","year_63_0","year_63_1","year_64_1","year_65_0","year_65_1","year_66_1","year_67_0","year_67_1","year_68_0","year_68_1","year_69_1","year_70_1","year_71_0","year_71_1","year_72_1","year_73_0","year_74_0","year_74_1","year_75_1","year_76_1","year_77_0","year_77_1","year_78_1","year_79_0","year_79_1","year_80_1","year_81_0","year_81_1","year_82_0","year_82_1","year_83_0","year_83_1","year_84_1","year_85_0","year_85_1","year_86_1","year_87_0","year_87_1","year_88_1","year_89_0","year_89_1","year_90_1","year_91_0","year_91_1","year_92_1","year_93_0","year_93_1","year_94_0","year_94_1","year_95_1","year_96_0","year_97_0","year_97_1","year_98_1","year_99_1"]);


// Let players reopen legitimate life opportunities on their own terms, not by repeated compulsory prompts.
(function(w){
"use strict";
const F=w.LIFE_FREEDOM,X=w.LIFE_FLEX,Q=w.LIFE_QUALITY,W=w.CAREER_WORLD;
const before={activities:F.activities,replay:F.replay,choiceFor:X.choiceFor,test:X.test};
F.activities=(st,s,age)=>{
 const base=before.activities(st,s,age);
 if(age<15||age>=100)return base;
 const request=(kind,title,result)=>({key:"request_"+kind,title,result,delta:{},patch:{qualityRequest:kind}});
 const a=[];
 if(age>=18&&!st.careerPlan&&!st.careerMenu&&!["training","foundation"].includes(st.careerPhase)&&!["applying","gap","student"].includes(st.youthStatus))a.push(request("career","ขอสำรวจเส้นทางอาชีพใหม่","คุณเปิดโอกาสสำรวจอาชีพเมื่อมีรอบที่เหมาะสม ยังไม่ได้ลาออกหรือสมัครงานใหม่"));
 if(!st.hobbyMenu)a.push(request("hobby","อยากลองงานอดิเรกใหม่","คุณเปิดโอกาสเลือกกิจกรรมใหม่ในรอบถัดไปโดยไม่ทิ้งความสนใจเดิมทันที"));
 if(age>=20&&st.partnerName&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!st.married)a.push(request("marriage","อยากคุยกับคนรักเรื่องอนาคตร่วมกัน","คุณเปิดโอกาสพูดคุยเรื่องแต่งงานเมื่อทั้งคู่พร้อม ยังไม่มีการตกลงแต่งงาน"));
 return [...base,...a.filter(x=>F.valid(st,s,age,x))];
};
F.replay=(st,item)=>{
 before.replay(st,item);
 const k=item.free?.patch?.qualityRequest;
 if(k==="career")st.qCareerRequest=(st.qCareerRequest||0)+1;
 if(k==="hobby")st.qHobbyRequest=(st.qHobbyRequest||0)+1;
 if(k==="marriage")st.qMarriageRequest=(st.qMarriageRequest||0)+1;
};
X.test=(req,st,s,e)=>{
 if(req==="@marriageReady"&&st.qMarriageRequest>0&&st.partnerName&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&e.age>(st.partnerSince??e.age))return true;
 return before.test(req,st,s,e);
};
X.choiceFor=(e,st)=>{
 const b=before.choiceFor(e,st);
 if(e.merge!=="hobbyPractice"||!(st.qSeen?.[Q.key(e,st)]>0))return b;
 const h=st.hobby||"กิจกรรมที่ชอบ";
 const texts=[
 ["เลือกทำ "+h+" ช่วงสั้นๆ โดยไม่ตั้งเป้าผลงาน","คุณรักษาความสุขจากงานอดิเรกโดยไม่ฝืนเวลา"],
 ["เลือกชิ้นงานหนึ่งที่ทำเสร็จได้และเก็บเป็นแฟ้มผลงาน","คุณสะสมหลักฐานการฝึกและเห็นความก้าวหน้าของตัวเอง"],
 ["ชวนคนที่สนใจร่วมทำกิจกรรมแล้วแบ่งหน้าที่","คุณได้ฝึกผ่านการแลกเปลี่ยนกับคนอื่น"],
 ["หยุดพักและเก็บอุปกรณ์ไว้จนกว่าจะอยากทำอีก","คุณรักษาพื้นที่สำหรับความสนใจอื่น"]
 ];
 return b.map((c,n)=>({...c,label:texts[n]?.[0]||c.label,result:texts[n]?.[1]||c.result}));
};
})(window);


// Rewrite shallow age-specific scenes without changing event IDs, timeline or optional scene policy.
(function(w){
"use strict";
const rows=[["year_9_1","ขนมถุงสุดท้าย","ร้านหน้าโรงเรียนเหลือขนมรสโปรดถุงเดียว คุณมีค่าขนมพอดี แต่เพื่อนทำเงินหล่นและยังไม่ได้กินอะไร รถรับกลับบ้านกำลังจะออก",[["ซื้อแล้วแบ่งกันบนรถ","เพื่อนดีใจ แม้คุณได้กินของโปรดเพียงครึ่งถุง",{"friend":4,"e":2,"h":1}],["ซื้อขนมอย่างอื่นที่แบ่งได้มากกว่า","ทั้งคู่ได้ขนมคนละชิ้นและทันขึ้นรถ",{"problem":3,"friend":2}],["ซื้อให้ตัวเองแล้วรีบขึ้นรถ","คุณได้กินของโปรด แต่เพื่อนเงียบไปตลอดทาง",{"h":3,"friend":-2}],["ให้เพื่อนซื้อแทน","เพื่อนได้กินก่อนขึ้นรถ คุณต้องรอกินที่บ้าน",{"sacrifice":3,"friend":3}]]],["year_19_1","คลิปที่เพื่อนอยากให้ลบ","กลุ่มเพื่อนตัดต่อคลิปตลกลงโซเชียล ช่วงที่มีคนลื่นล้มเรียกเสียงหัวเราะได้มาก แต่เจ้าตัวไม่อยากให้เผยแพร่ เพื่อนคนทำคลิปเสียดายยอดวิว",[["ขอให้ตัดฉากล้มออก","เจ้าตัวกลับมาร่วมถ่ายคลิปครั้งต่อไป กลุ่มเสียเวลาตัดต่อใหม่",{"i":3,"friend":3}],["คิดมุกทดแทนแล้วช่วยตัดต่อ","ยอดวิวไม่หวือหวาแต่กลุ่มชอบไอเดียใหม่ของคุณ",{"creative":4,"skill":2}],["สนับสนุนให้ลงคลิปเดิม","คลิปดังขึ้น แต่เจ้าตัวขอให้ลบและออกจากกลุ่มถ่ายคลิป",{"fame":4,"friend":-5,"i":-3}],["ถอนตัวจากคลิปโดยไม่ห้ามคนอื่น","คุณไม่ได้เครดิตและเพื่อนที่ถูกถ่ายรู้สึกว่าคุณไม่ได้ช่วยเขา",{"selfcontrol":2,"friend":-1}]]],["year_23_1","ทริปที่ถูกหักเงินซ้ำ","คุณกับคนรู้จักจองห้องพัก แอปขึ้นว่าจองไม่สำเร็จแต่เงินถูกหัก โรงแรมเหลือห้องสุดท้ายและคนร่วมทริปอยากให้จ่ายใหม่ทันที",[["โทรยืนยันกับโรงแรมก่อนจ่ายซ้ำ","โรงแรมพบรายการเดิมและยืนยันห้องให้",{"problem":4,"security":3}],["จ่ายใหม่แล้วเก็บหลักฐานทวงเงิน","ทริปไม่สะดุด แต่ต้องใช้เงินสำรองระหว่างรอคืนเงิน",{"stress":3,"security":-2}],["ให้เพื่อนหาที่พักอื่นระหว่างติดต่อแอป","ทั้งคู่เปลี่ยนแผนแต่ได้ห้องใกล้จุดเที่ยวและได้เงินคืนภายหลัง",{"friend":3,"problem":3}],["ยกเลิกทริปเพื่อไม่เสี่ยงเสียเงินเพิ่ม","คุณรักษาเงินไว้ แต่คนร่วมทริปผิดหวังที่ไม่ได้ไป",{"security":2,"friend":-2,"h":-2}]],["problem",60,0,"ตรวจเลขรายการชำระเทียบกับใบยืนยันและประสานโรงแรม","โรงแรมพบรายการที่ค้างและแก้การจองโดยไม่ต้องจ่ายซ้ำ",{"problem":5,"security":4}]],["year_27_0","เพื่อนที่ติดค้างระหว่างทาง","คนรู้จักที่นัดเดินทางไปด้วยกันโทรมาบอกว่ารถเสียระหว่างทาง คุณมีธุระสำคัญที่ต้องไปให้ทัน แต่จุดที่เขารอมีรถผ่านน้อย",[["ย้อนกลับไปรับและโทรเลื่อนธุระ","เขาไม่ต้องรอลำพัง แต่คุณพลาดเวลานัดเดิม",{"friend":4,"e":3,"stress":2}],["ช่วยหารถที่เชื่อถือได้ให้เขา","เขาถึงที่หมายช้าเล็กน้อย คุณยังรักษานัดได้",{"problem":4,"reliable":2}],["บอกให้เขาจัดการเองแล้วไปต่อ","คุณทันธุระ แต่เขาบอกว่าคราวหน้าจะไม่ฝากความหวังเรื่องเดินทางกับคุณ",{"friend":-4,"discipline":2}],["เลื่อนนัดของทั้งคู่แล้วหาทางกลับด้วยกัน","ทั้งคู่กลับได้อย่างสบายใจ แต่ต้องจัดนัดใหม่",{"h":2,"friend":2}]]],["year_30_1","กล้องเก่าที่มีภาพสำคัญ","คุณพบกล้องเก่าที่มีรูปจากหลายปีก่อน คนรับซื้อเสนอราคาดี แต่ขอรับกล้องทันทีโดยไม่รอให้คุณสำรองภาพ",[["ขอสำรองรูปก่อนแล้วค่อยขาย","ผู้ซื้อยอมรอ คุณได้เก็บภาพที่ไม่มีสำเนา",{"problem":3,"security":2}],["เก็บกล้องไว้ใช้ในวันพิเศษ","คุณพลาดรายได้แต่ได้กลับมาถ่ายภาพที่ชอบ",{"h":4,"creative":2}],["ขายทันทีเพราะราคาน่าสนใจ","คุณได้เงิน 1,500 บาท แต่รูปเก่าบางรูปไม่ได้เก็บไว้",{"m":1500,"h":-3}],["ขอร้านช่วยถ่ายโอนภาพก่อนประเมินราคา","คุณรอนานขึ้นแต่ได้ภาพครบและรู้ราคาที่เหมาะสม",{"knowledge":3,"security":3}]]],["year_35_0","โต๊ะอาหารที่ทุกคนถามถึงชีวิตคุณ","ในงานเลี้ยงญาติ คนหนึ่งนำชีวิตคุณไปเปรียบกับคนวัยเดียวกันต่อหน้าทุกคน แล้วเสนอว่าจะช่วยจัดการอนาคตให้หากคุณยอมทำตามแผนเขา",[["เล่าเป้าหมายของตัวเองโดยไม่รับข้อเสนอ","ญาติบางคนเข้าใจ คุณไม่ต้องรับเงื่อนไขที่ไม่ได้เลือก",{"confidence":4,"selfcontrol":2}],["ขอคุยส่วนตัวและฟังรายละเอียด","ข้อเสนอบางส่วนมีประโยชน์ แต่ต้องยอมให้เขามีส่วนตัดสินใจมากขึ้น",{"problem":3,"r":2}],["ตอบตกลงเพื่อไม่ให้ครอบครัวผิดหวัง","หลังงานเขาเริ่มโทรมาติดตามแผนที่คุณไม่ได้เลือกเอง",{"r":3,"stress":5}],["ขอให้หยุดเปรียบเทียบแล้วออกจากโต๊ะ","คำถามหยุดลง แต่ญาติบางคนเข้าใจว่าคุณไม่อยากพบพวกเขา",{"c":4,"r":-2}]]],["year_36_0","เงินทอนของร้านที่เพิ่งเปิด","ร้านอาหารเล็ก ๆ เพิ่งเปิด เจ้าของกำลังสอนพนักงานใหม่ คุณพบว่าบิลคิดรายการซ้ำ ขณะโต๊ะข้าง ๆ กำลังต่อว่าพนักงานเรื่องอื่น",[["ชี้รายการให้พนักงานดูเป็นการส่วนตัว","พนักงานแก้ยอดและเจ้าของพบว่าระบบตั้งค่าผิด",{"fair":3,"e":2,"problem":2}],["ขอให้เจ้าของตรวจบิลทุกโต๊ะ","หลายโต๊ะได้เงินคืน ร้านต้องหยุดรับออเดอร์ชั่วคราว",{"responsibility":3,"fair":3}],["โพสต์กล่าวหาว่าร้านโกงทันที","โพสต์ถูกแชร์ก่อนทราบสาเหตุ คุณต้องกลับมาแก้ข้อมูลภายหลัง",{"fame":2,"i":-4,"stress":3}],["ยอมจ่ายส่วนเกินแต่บอกให้แก้ระบบ","เจ้าของแก้ปัญหาให้ลูกค้าคนต่อไป คุณไม่ได้รับส่วนเกินคืน",{"sacrifice":2,"e":2}]]],["year_38_0","ไฟดับกลางงานเลี้ยงชุมชน","ไฟดับขณะงานเลี้ยงเล็ก ๆ กำลังเริ่ม อาหารจัดไว้แล้ว ผู้จัดไม่รู้ว่าจะรอไฟหรือเลิกงาน และมีผู้สูงวัยนั่งรออยู่ในบริเวณที่เริ่มมืด",[["ช่วยย้ายงานไปจุดที่มีแสง","งานกลับกลายเป็นวงสนทนาที่สนุกโดยไม่ต้องรอเครื่องเสียง",{"problem":4,"social":3}],["ติดต่อผู้รับผิดชอบไฟและแจ้งข่าวทุกคน","ผู้จัดเลื่อนช่วงแสดงได้โดยไม่ปล่อยให้คนรอโดยไม่มีข้อมูล",{"reliable":3,"knowledge":2}],["เสนอแจกอาหารกลับบ้าน","ทุกคนได้กลับก่อนมืดมาก แต่ผู้เตรียมการแสดงเสียดาย",{"responsibility":3,"h":-1}],["ขอตัวกลับไปทำธุระของตน","คุณไม่เสียเวลารอ ผู้จัดต้องหาคนช่วยงานเพิ่ม",{"energy":2,"social":-1}]]],["year_46_0","ร้านประจำที่อาจต้องปิด","เจ้าของอาคารประกาศขึ้นค่าเช่าร้านค้า ร้านประจำขอให้ลูกค้าช่วยลงชื่อเจรจา ขณะที่เจ้าของอาคารบอกว่าค่าซ่อมอาคารสูงขึ้นจริง",[["ช่วยเสนอให้ปรับค่าเช่าเป็นขั้น","บางร้านได้เวลาเตรียมตัว คุณต้องเสียเวลาหลายเย็นกับการเจรจา",{"social":4,"problem":4,"energy":-2}],["อุดหนุนร้านตามกำลัง","ร้านได้รายได้เพิ่ม แต่ปัญหาค่าเช่ายังไม่จบ",{"e":3,"h":2}],["ไม่ลงชื่อจนกว่าจะรู้ต้นทุนจริง","คุณไม่เข้าข้างใครโดยไม่มีข้อมูล ร้านประจำรู้สึกว่าคุณห่างออกไป",{"selfcontrol":3,"r":-1}],["ช่วยกระจายข่าวหาทำเลใหม่","ร้านเริ่มมีทางเลือก คุณอาจต้องเดินทางไกลขึ้นหากร้านย้าย",{"network":3,"problem":3}]]],["year_56_0","บิลค่ารักษาที่เรียกเก็บซ้ำ","หลังตรวจสุขภาพ คุณได้รับใบแจ้งยอดซึ่งมีรายการที่จ่ายไปแล้ว เจ้าหน้าที่ต้องตรวจระบบ แต่กำหนดชำระใกล้เข้ามา",[["ใช้ใบเสร็จขอพักการเรียกเก็บส่วนที่โต้แย้ง","ฝ่ายการเงินตรวจพบยอดซ้ำและส่งยอดแก้ไขก่อนกำหนด",{"security":4,"problem":4}],["จ่ายยอดใหม่ก่อนแล้วขอคืน","คุณไม่พลาดกำหนด แต่ต้องติดตามเงินที่จ่ายซ้ำอีกหลายครั้ง",{"stress":3,"security":-2}],["ขอฝ่ายดูแลสิทธิประสานงาน","ได้คนช่วยตรวจรายการ แต่ต้องรอคำตอบและส่งหลักฐานเพิ่มเติม",{"network":2,"patience":3}],["ปฏิเสธทั้งบิลโดยไม่แยกรายการ","ยอดที่ถูกต้องก็ยังค้างไปด้วยและต้องกลับมาแก้เพิ่ม",{"security":-3,"stress":4}]],["problem",70,0,"จับคู่วันรับบริการกับหลักฐานชำระเงินส่งให้ฝ่ายการเงิน","เจ้าหน้าที่ตรวจได้ตรงจุดและยกเลิกรายการซ้ำโดยไม่กระทบยอดอื่น",{"problem":5,"security":5}]],["year_69_0","ชื่อที่หายไปจากงานรวมรุ่น","คุณพบว่าเพื่อนเก่าคนหนึ่งไม่ได้อยู่ในรายชื่อผู้มางานรวมรุ่น ผู้จัดบอกว่าเคยมีปัญหากับเขา แต่เพื่อนในกลุ่มหลายคนยังอยากเจอเขา",[["ถามเหตุผลกับผู้จัดก่อนชวนใครเพิ่ม","คุณทราบว่าทั้งสองฝ่ายยังเข้าใจเรื่องเก่าไม่ตรงกันและตกลงแยกนัดพบภายหลัง",{"problem":3,"social":3}],["จัดนัดกาแฟอีกวันให้คนที่สมัครใจ","เพื่อนบางคนได้พบกันโดยไม่ต้องเผชิญหน้าคนที่ยังมีปัญหา",{"friend":4,"network":2}],["ชวนเขามางานโดยไม่บอกผู้จัด","เขาดีใจที่เจอเพื่อน แต่ผู้จัดไม่พอใจและงานตึงเครียด",{"friend":2,"reliable":-3,"stress":3}],["ไปงานตามเดิมโดยไม่แทรกแซง","คุณได้พบเพื่อนคนอื่น แต่คนที่ไม่ได้รับเชิญยังไม่ได้กลับมาพบกลุ่ม",{"h":2,"selfcontrol":2}]]],["year_70_0","ช่างที่ขอเงินก่อนเริ่มงาน","ช่างเสนอซ่อมหลังคาที่พักก่อนฤดูฝนและขอเงินล่วงหน้าเกือบทั้งหมด โดยบอกว่าต้องตกลงวันนี้ คุณเห็นบ้านข้าง ๆ ยังซ่อมไม่เสร็จแม้จ้างช่างรายเดียวกัน",[["ขอแบ่งจ่ายตามงวดที่ตรวจรับได้","ช่างยอมรับงวดแรกน้อยลงและคุณมีหลักฐานก่อนจ่ายเพิ่ม",{"security":4,"problem":3}],["หาช่างที่มีผลงานตรวจสอบได้แม้ต้องรอ","คุณต้องหาวิธีรับมือฝนระหว่างรอ แต่ไม่ต้องรับเงื่อนไขเสี่ยง",{"patience":3,"security":3}],["ตกลงเพราะกลัวฝนมาแล้วซ่อมไม่ทัน","ช่างเลื่อนวันเริ่มหลายครั้งและเงินที่จ่ายไปทำให้เปลี่ยนผู้รับเหมาลำบาก",{"security":-5,"stress":5}],["ซ่อมเฉพาะจุดเร่งด่วนก่อน","น้ำไม่รั่วจุดหลัก แต่ยังต้องวางแผนซ่อมเต็มรูปแบบภายหลัง",{"problem":3,"security":1}]]],["year_76_0","คนข้างบ้านที่หายไปสองวัน","เพื่อนบ้านที่เคยทักทายทุกเช้าไม่ปรากฏตัวสองวันแล้ว คนแถวนั้นคิดว่าเขาไปเที่ยว แต่คุณเห็นไฟบ้านเปิดอยู่ตลอด",[["ขอผู้ดูแลชุมชนช่วยตรวจสอบและติดต่อญาติ","พบว่าเขาไม่สบายและได้คนช่วยทัน ญาติขอบคุณที่คุณสังเกต",{"e":4,"responsibility":3,"network":2}],["ติดต่อญาติที่เขาเคยแนะนำ","ญาติจัดคนมาดูแลโดยคุณไม่ต้องเข้าไปในพื้นที่ส่วนตัว",{"problem":3,"r":3}],["เชื่อคนในละแวกและรออีกวัน","ภายหลังทราบว่าเขาต้องการความช่วยเหลือ โชคดีที่ญาติมาพบในวันถัดไป",{"e":-2,"stress":2}],["ชวนคนที่รู้จักเขาไปเคาะประตูด้วยกัน","ไม่มีเสียงตอบ พวกคุณจึงแจ้งผู้รับผิดชอบให้ตรวจสอบ",{"c":3,"social":3}]]],["year_78_0","ภาพเก่าที่พิพิธภัณฑ์อยากยืม","ผู้จัดนิทรรศการท้องถิ่นขอยืมภาพเก่าของคุณเพื่อจัดแสดง มีคนในภาพที่อาจไม่อยากให้เผยแพร่ และผู้จัดต้องการต้นฉบับภายในสัปดาห์นี้",[["ให้ใช้สำเนาเฉพาะภาพที่ได้รับอนุญาต","งานจัดแสดงได้และยังรักษาความเป็นส่วนตัวของคนในภาพ",{"i":3,"creative":3}],["ขอจัดแสดงโดยไม่ระบุชื่อบุคคล","คนดูได้เห็นบรรยากาศยุคเก่า แต่ต้องคัดบางภาพออก",{"problem":3,"fair":2}],["มอบต้นฉบับทั้งหมดทันที","งานได้ภาพจำนวนมาก แต่มีคนขอถอนภาพและคุณต้องช่วยแก้เรื่อง",{"fame":2,"stress":4,"i":-2}],["ไม่ให้ยืมภาพแต่ยินดีเล่าเรื่อง","นิทรรศการได้ข้อมูลจากคำบอกเล่า คุณยังเก็บภาพส่วนตัวไว้",{"experience":3,"selfcontrol":2}]]],["year_80_0","หนังสือมอบอำนาจที่ไม่ตรงกับคำพูด","คนรู้จักเสนอช่วยติดต่อหน่วยงานแทนคุณ เขาบอกว่าจะใช้หนังสือมอบอำนาจเพียงครั้งเดียว แต่ข้อความในเอกสารครอบคลุมการดำเนินการหลายเรื่อง",[["ขอเปลี่ยนเป็นการมอบอำนาจเฉพาะธุระ","คนช่วยนำเอกสารใหม่มาและคุณไม่ต้องเสียสิทธิเกินจำเป็น",{"security":5,"problem":3}],["ขอผู้เชี่ยวชาญอิสระตรวจเอกสาร","พบข้อที่กว้างเกินไป คุณยังไม่เซ็นจนกว่าจะเข้าใจ",{"knowledge":4,"security":4}],["เซ็นเพราะไว้ใจและอยากให้ธุระจบ","ธุระแรกเรียบร้อย แต่คุณต้องกลับมาจำกัดขอบเขตอำนาจภายหลัง",{"stress":5,"security":-5}],["ดำเนินเรื่องเองหรือขอเจ้าหน้าที่ช่วยเฉพาะจุด","ใช้เวลามากขึ้นแต่คุณยังตัดสินใจทุกขั้นตอนเอง",{"confidence":3,"energy":-2,"security":2}]],["knowledge",70,0,"ตรวจขอบเขตและวันสิ้นสุดก่อนให้ช่วยเฉพาะธุระ","คุณได้รับเอกสารฉบับจำกัดอำนาจที่ชัดเจนพร้อมสำเนา",{"knowledge":5,"security":5,"problem":3}]],["year_90_0","งานวันเกิดที่คนอื่นวางแผนแทนคุณ","คนสนิทจัดงานวันเกิดใหญ่โดยไม่ได้ถามคุณก่อน พวกเขาจองสถานที่แล้วและภูมิใจมาก แต่คุณอยากฉลองในรูปแบบสบาย ๆ",[["ขอปรับงานให้เล็กลง","คนจัดเสียดายแผนเดิมแต่ยอมปรับ คุณได้พบคนสำคัญในแบบที่ชอบ",{"r":4,"h":4}],["ไปงานใหญ่เพื่อให้ทุกคนมีความสุข","ทุกคนดีใจที่พบคุณ แต่คุณเหนื่อยและกลับก่อนงานจบ",{"r":3,"energy":-4}],["ยกเลิกงานแล้วนัดคนที่อยากเจอเอง","คุณได้วันเกิดตามใจ แต่บางคนผิดหวังกับเวลาและเงินที่ลงไป",{"confidence":3,"r":-2,"h":2}],["ขอจัดสองช่วงให้คนอื่นฉลองต่อหลังคุณกลับ","ผู้จัดยังใช้สถานที่ได้ คุณไม่ต้องฝืนอยู่จนหมดงาน",{"problem":4,"social":3}]]],["year_98_0","เสียงที่อยากให้คนรุ่นหลังได้ยิน","กลุ่มเยาวชนมาขอสัมภาษณ์ชีวิตของคุณเพื่อเก็บในหอจดหมายเหตุ พวกเขาอยากเผยแพร่คลิปทั้งหมด แต่บางความทรงจำเกี่ยวข้องกับคนอื่นที่ยังมีชีวิตอยู่",[["บันทึกเฉพาะเรื่องที่ยินดีเผยแพร่","เยาวชนได้เรื่องจริงโดยไม่เปิดเผยความเป็นส่วนตัวเกินจำเป็น",{"experience":4,"i":3,"respect":3}],["แบ่งส่วนเผยแพร่กับส่วนเก็บส่วนตัว","คุณฝากทั้งประสบการณ์สาธารณะและความทรงจำที่เลือกผู้ฟังเอง",{"creative":3,"security":3}],["เล่าทุกอย่างโดยไม่จำกัดการเผยแพร่","มีผู้เกี่ยวข้องขอให้ตัดบางช่วงเพราะกระทบครอบครัวเขา",{"fame":3,"stress":3,"r":-2}],["ไม่บันทึกแต่ยินดีให้เยาวชนมาคุย","คุณได้แบ่งปันเรื่องราวโดยไม่ต้องเผยแพร่ต่อ",{"social":4,"h":3}]]],["year_99_1","หนังเก่าที่ทำให้ทั้งห้องหัวเราะ","ศูนย์ชุมชนฉายหนังตลกเก่า แต่เครื่องเสียงเสียกลางเรื่อง เด็ก ๆ เริ่มงอแง คนจัดงานชวนคุณเล่าเรื่องสนุกสมัยก่อนระหว่างรอซ่อม",[["เล่าเรื่องตลกที่เคยเจอจริง","เด็ก ๆ หัวเราะจนลืมว่าเครื่องเสียและขอฟังอีกเรื่อง",{"social":4,"h":4}],["ชวนทุกคนคิดตอนจบของหนัง","คนต่างวัยแต่งตอนจบใหม่และหัวเราะกันทั้งห้อง",{"creative":4,"social":3}],["นั่งคุยกับคนที่อยู่ข้าง ๆ ระหว่างรอ","คุณได้สนทนาสบาย ๆ และดูหนังต่อเมื่อเครื่องซ่อมเสร็จ",{"h":3,"friend":2}],["กลับก่อนเมื่อเริ่มเหนื่อยและฝากคำอวยพร","คุณได้พักตามกำลัง คนจัดขอบคุณที่มาร่วมงาน",{"energy":3,"r":2}]],["social",70,0,"ชวนเด็ก ๆ เล่าเรื่องของตัวเองสลับกับเรื่องตลกของคุณ","งานที่เครื่องเสียงเสียกลับเป็นช่วงเวลาที่ทุกวัยจดจำ",{"social":5,"h":5,"r":3}]]];
const links={"year_69_0":[["year_41_0",[0,1],"คุณเคยติดตามข่าวงานรวมรุ่นมาก่อน ครั้งนี้จึงสนใจว่าใครหายไปจากรายชื่อ"]],"year_70_0":[["year_66_0",[0,1,2,3],"คุณเคยเจอข้อเสนอที่เร่งให้ตัดสินใจเรื่องเงินมาก่อน คราวนี้ข้อเสนอเกี่ยวกับที่พักของตัวเอง"]],"year_98_0":[["year_85_1",[0,1,2,3],"คุณเคยได้รับคำถามจากคนรุ่นใหม่เกี่ยวกับชีวิตสมัยก่อน ครั้งนี้มีคนอยากเก็บเรื่องราวของคุณไว้อย่างเป็นทางการ"]]};
const Q=w.LIFE_QUALITY, byId=new Map(w.STORY.map(e=>[e.id,e]));
for(const [id,title,story,choices,special] of rows){const e=byId.get(id);if(!e||!e.annual||e.choices.length!==choices.length)throw Error("Invalid age revision: "+id);Object.assign(e,{title,story,choices:choices.map(([label,result,delta])=>({label,result,delta}))});if(special)Q.annual[id]=special;else delete Q.annual[id];}
for(const [id,cross] of Object.entries(links)){const e=byId.get(id);if(e)e.cross=[...(e.cross||[]),...cross];}
const options=Q.options;Q.options=(st,s,age)=>options(st,s,age).map(e=>{const lead=(links[e.id]||[]).filter(([id,choices])=>choices.includes(s.answers[id])).map(x=>x[2]);return lead.length?{...e,story:[...lead,e.story].join("\n\n")}:e;});
Q.revisedIds=rows.map(x=>x[0]);
})(window);


// Teen story expansion: independent, state-gated arcs; saved choice data is replayed using careerSet.
(function teenStoriesExpansion(w){
"use strict";
const W=w.CAREER_WORLD, S=w.STORY, prev={allowed:W.allowed,story:W.story,choices:W.choices,after:W.after};
const arcs=[["science","study",[[13,"จดหมายเชิญที่ไม่ใช่ทุกคนจะได้","ครูเห็นแววด้านการเรียนของคุณและชวนแข่งวิทยาศาสตร์ระดับจังหวัด แต่ทีมขาดคนและต้องซ้อมหลังเลิกเรียน",[["ลงแข่งและจัดตารางซ้อมกับทีม","ครูให้คุณเข้าทีม คุณได้ลองทำโจทย์ที่ไม่มีคำตอบในหนังสือ",{"knowledge":4,"discipline":2},"team"],["ขอแข่งรายการเดี่ยวแทน","ครูส่งโจทย์คัดตัวรายบุคคลให้ คุณต้องรับผิดชอบผลงานเอง",{"confidence":3,"knowledge":2},"solo"],["ช่วยทีมเบื้องหลังโดยไม่ลงชื่อแข่ง","ทีมได้คนช่วยทดลอง คุณไม่ต้องรับแรงกดดันบนเวที",{"skill":3,"friend":2},"team"],["ปฏิเสธเพราะมีสิ่งอื่นที่อยากทำ","ครูรับคำตอบและไม่บังคับให้คุณต้องเป็นเด็กแข่งขัน",{"h":2},"end"]]],[15,"คืนก่อนการแข่งขัน","คืนก่อนส่งผลงาน เครื่องมือทดลองอ่านค่าผิด รุ่นพี่เสนอข้อมูลที่เขาเคยเก็บไว้ให้ใช้แทนโดยไม่บอกกรรมการ",[["ส่งเฉพาะผลที่วัดได้จริง","ผลงานไม่สวยเท่าทีมอื่น แต่กรรมการสนใจวิธีที่คุณอธิบายข้อผิดพลาด",{"problem":4,"i":3},"honest"],["ขอครูช่วยหาอุปกรณ์ทดแทนแล้วทดสอบใหม่","คุณเหนื่อยมากแต่ได้ผลทดลองของตัวเองก่อนส่ง",{"skill":4,"energy":-4},"honest"],["ใช้ข้อมูลรุ่นพี่แล้วเก็บเรื่องนี้ไว้","งานผ่านรอบแรก แต่กรรมการเรียกขอดูสมุดบันทึก",{"i":-5,"stress":4},"fake"],["ถอนผลงานก่อนตัดสิน","ทีมเสียใจที่พลาดโอกาส แต่คุณไม่ต้องรับรองข้อมูลที่ไม่จริง",{"friend":-2,"selfcontrol":3},"end"]],["knowledge",55,0,"แยกแหล่งความผิดพลาดและปรับการทดลองให้ตรวจซ้ำได้","กรรมการเห็นว่าคุณแก้ปัญหาภายใต้ข้อจำกัดได้ดีและชวนส่งผลงานต่อ",{"knowledge":5,"problem":5,"reliable":3},"honest"]],[17,"จดหมายจากมหาวิทยาลัย","มีโครงการเยาวชนเปิดรับผู้ที่เคยทำผลงานวิทยาศาสตร์ คุณมีโอกาสส่งผลงานเดิม แต่ต้องเปิดเผยประวัติที่เกิดขึ้นจริง",[["ส่งผลงานพร้อมอธิบายข้อผิดพลาดทั้งหมด","คุณได้สัมภาษณ์จากประสบการณ์จริง แม้ไม่ได้รับประกันว่าจะผ่าน",{"knowledge":4,"reliable":4},"end"],["สร้างผลงานชิ้นใหม่จากบทเรียนเดิม","คุณมีผลงานที่กล้าพูดได้เต็มปากและได้ฝึกอีกครั้ง",{"skill":5,"creative":3},"end"],["ใช้ประวัติเดิมโดยไม่พูดเรื่องที่เสียเปรียบ","เมื่อมีการสอบถามเพิ่มเติม คุณอธิบายได้ไม่ครบและเสียความน่าเชื่อถือ",{"ambition":2,"reliable":-4},"end"],["เลือกเส้นทางอื่นและเก็บประสบการณ์ไว้","คุณไม่จำเป็นต้องเดินสายวิทยาศาสตร์ตลอดชีวิตเพราะเคยลงแข่ง",{"experience":3,"h":2},"end"]],null,{"honest":"กรรมการยังจำวิธีที่คุณรับมือกับเครื่องมือเสียได้ และส่งข่าวโครงการเยาวชนมาให้ครู","fake":"การตรวจสมุดบันทึกครั้งนั้นทำให้เกิดข้อสงสัยเรื่องผลงาน คุณได้รับโอกาสส่งผลงานใหม่โดยต้องอธิบายประวัติเดิม"}]]],["esports","gaming",[[13,"ทีมเกมที่ไม่มีใครรู้จัก","ปอนด์ชวนคุณตั้งทีมลงแข่งเกมชุมชนออนไลน์ มีเพื่อนสี่คนแต่ขาดคนวางแผน ทุกคนอยากชนะทีมดังที่มักดูถูกมือใหม่",[["รับบทวางแผนและซ้อมกับทีม","เพื่อนเริ่มแบ่งหน้าที่และเรียกคุณมาช่วยแก้เกม",{"problem":4,"friend":3},"leader"],["ลงเล่นเป็นตัวสำรอง","คุณได้เห็นทีมจากหลายบทบาทและยังมีเวลาเรียน",{"skill":3,"friend":2},"player"],["สมัครลงแข่งเพื่อความสนุกไม่เน้นอันดับ","ทีมตกลงว่าจะไม่กดดันกันจนเกินไป",{"h":4,"social":2},"player"],["ไม่สมัครแต่ไปเชียร์เพื่อน","คุณยังสนุกกับบรรยากาศโดยไม่ต้องฝึกทุกคืน",{"friend":2,"h":2},"end"]]],[15,"คลิปที่ทำให้ทีมเกือบแตก","ทีมชนะคู่แข่งที่มีชื่อเสียง แต่คลิปสั้นที่ถูกตัดต่อทำให้ดูเหมือนปอนด์โกง ผู้จัดหยุดผลการแข่งขันและเพื่อนในทีมเริ่มโทษกันเอง",[["ส่งคลิปเต็มให้ผู้จัดตรวจและขอให้ทีมรอผล","ผู้จัดรับหลักฐาน ทีมยังอยู่ด้วยกันแม้ต้องพักแข่ง",{"fair":4,"problem":3},"loyal"],["คุยกับปอนด์เป็นส่วนตัวก่อนตัดสิน","เขายอมเล่าข้อผิดพลาดที่ทำโดยไม่ตั้งใจ ทีมมีข้อมูลครบขึ้น",{"friend":4,"patience":2},"loyal"],["โพสต์โทษปอนด์เพื่อรักษาชื่อของตัวเอง","คนติดตามคุณมากขึ้นชั่วคราว แต่ปอนด์ออกจากกลุ่ม",{"fame":3,"friend":-6,"i":-3},"split"],["ออกจากทีมเพราะไม่อยากรับแรงกดดัน","คุณได้พัก แต่ทีมต้องหาคนมาแทนก่อนแข่งรอบต่อไป",{"stress":-3,"friend":-2},"split"]],["problem",65,0,"เรียงหลักฐานจากคลิปเต็มและขอให้กรรมการตรวจตามกติกา","ผู้จัดยกเลิกข้อกล่าวหาที่ไม่มีหลักฐาน และแก้ผลการแข่งขันอย่างเป็นทางการ",{"problem":5,"fair":4,"respect":3},"loyal"]],[17,"คู่แข่งที่กลายเป็นคนชวนร่วมทีม","ทีมเกมที่เคยเป็นคู่แข่งยื่นข้อเสนอให้คุณร่วมงานถ่ายทอดการแข่งขันเยาวชน แต่มีรายชื่อปอนด์เกี่ยวข้องด้วย",[["ตกลงร่วมงานและแบ่งหน้าที่อย่างชัดเจน","คุณได้สัมผัสงานอีสปอร์ตนอกเหนือจากการลงแข่ง",{"skill":4,"network":4},"end"],["ชวนปอนด์คุยเรื่องเก่าก่อนตัดสินใจ","ทั้งคู่ได้พูดถึงสิ่งที่เกิดขึ้น แม้ไม่จำเป็นต้องกลับมาสนิท",{"friend":3,"confidence":3},"end"],["รับเฉพาะงานที่ไม่ต้องร่วมทีมเดิม","คุณรักษาพื้นที่ส่วนตัวและได้ประสบการณ์งานใหม่",{"career":2,"selfcontrol":3},"end"],["กลับไปเล่นเพื่อความสนุกไม่รับงาน","คุณรักษางานอดิเรกโดยไม่เปลี่ยนทุกอย่างเป็นการแข่งขัน",{"h":5,"energy":2},"end"]],null,{"loyal":"หลังวิกฤตคลิป ทีมกลับมาซ้อมได้อีกครั้ง ปอนด์ส่งข้อเสนอใหม่มาให้คุณดู","split":"หลังทีมแตก คุณกับปอนด์ไม่ได้เล่นด้วยกันมานาน จู่ ๆ ผู้จัดงานติดต่อคุณทั้งคู่"}]]],["festival","social",[[13,"วงดนตรีที่ขาดนักร้องก่อนขึ้นเวที","งานโรงเรียนกำลังจะเริ่ม นักร้องของวงเพื่อนเสียงหาย คนจัดกำลังมองหาคนแทน และคนทั้งสนามเริ่มปรบมือเรียก",[["ลองขึ้นร้องแทนแม้ยังไม่มั่นใจ","เสียงร้องไม่สมบูรณ์ แต่เพื่อนช่วยร้องและผู้ชมสนุกกับความเป็นกันเอง",{"c":4,"confidence":3},"stage"],["ช่วยคิดการแสดงแบบไม่ต้องมีนักร้อง","วงเปลี่ยนเป็นบรรเลงและชวนคนดูร้องตาม",{"creative":4,"problem":3},"crew"],["ไปชวนคนที่ร้องเก่งกว่าเข้ามาแทน","การแสดงรอดและคุณได้เพื่อนใหม่จากการประสานงาน",{"social":4,"network":2},"crew"],["อยู่เชียร์และปล่อยให้วงตัดสินใจเอง","คุณได้สนุกกับงานโดยไม่ต้องขึ้นเวที",{"h":3},"end"]]],[15,"คลิปหนึ่งคืนที่ทำให้มีคนจำได้ทั้งโรงเรียน","คลิปงานครั้งก่อนถูกนำกลับมาแชร์ มีคนชวนทีมทำโชว์ใหม่ แต่ผู้สนับสนุนอยากให้ตัดชื่อเพื่อนที่ช่วยงานเบื้องหลังออกจากโปสเตอร์",[["ยืนยันให้เครดิตทีมครบก่อนรับงาน","ผู้สนับสนุนยอมปรับโปสเตอร์ แต่ตัดงบตกแต่งบางส่วน",{"fair":4,"friend":3},"team"],["คุยกับเพื่อนแล้วเสนอแบ่งบทบาทบนโปสเตอร์","ทีมได้ชื่อในสื่อคนละส่วนและยังร่วมงานกันได้",{"social":4,"problem":3},"team"],["รับข้อเสนอและใช้ชื่อคุณคนเดียว","คุณได้รับความสนใจมากขึ้น แต่เพื่อนเบื้องหลังถอนตัว",{"fame":5,"friend":-5},"solo"],["ไม่รับโชว์เพราะไม่อยากเปลี่ยนกิจกรรมเป็นการแข่งขัน","ทีมพลาดโอกาสออกงาน แต่ยังมีเวลาให้สิ่งที่ชอบ",{"h":3,"selfcontrol":2},"end"]],["creative",55,1,"ออกแบบโปสเตอร์ใหม่ที่ให้พื้นที่ทั้งผู้แสดงและทีมเบื้องหลัง","ผู้สนับสนุนชอบแนวคิดและยอมให้ทีมมีเครดิตครบ",{"creative":5,"fair":4,"network":2},"team"]],[17,"งานเทศกาลนอกโรงเรียน","ผู้จัดงานท้องถิ่นชวนทีมเยาวชนมาทำโชว์จริง มีค่าตอบแทนและผู้ชมจากหลายโรงเรียน แต่ต้องซ้อมและรับผิดชอบเวลางาน",[["รับงานในขอบเขตที่ไม่ชนการเรียน","คุณได้รับค่าตอบแทน 800 บาทและได้รู้จักคนทำงานจริง",{"m":800,"skill":4,"network":3},"end"],["ขอช่วยเบื้องหลังและเรียนรู้การจัดงาน","คุณได้ฝึกแก้ปัญหาหน้างานและคนจัดจำคุณได้",{"problem":4,"career":2},"end"],["รับหลายหน้าที่เพื่อให้มีคนเห็นผลงาน","งานจบด้วยดีแต่คุณเหนื่อยและพลาดเวลาพัก",{"fame":4,"energy":-5,"stress":3},"end"],["ไปงานในฐานะผู้ชมกับเพื่อน","คุณได้ความสนุกโดยไม่รับภาระงานเพิ่ม",{"h":5,"friend":2},"end"]],null,{"team":"คนจัดจำได้ว่าทีมคุณเคยรักษาเครดิตของกันและกัน จึงส่งคำเชิญมาให้ทั้งทีม","solo":"เพื่อนบางคนยังติดใจเรื่องโปสเตอร์ ผู้จัดรายใหม่ต้องการทราบว่าจะทำงานร่วมกันได้หรือไม่"}]]],["rumor","any",[[14,"บัญชีนิรนามที่รู้เรื่องในห้องมากเกินไป","บัญชีลับเริ่มโพสต์เรื่องน่าอายของนักเรียนโดยไม่เปิดชื่อเจ้าของบัญชี วันนี้มีข้อความพาดพิงคุณและเพื่อนส่งมาถามว่าเป็นเรื่องจริงไหม",[["เก็บหลักฐานและขอให้ครูที่ไว้ใจช่วย","ครูเริ่มรับเรื่องโดยไม่ให้คุณต้องเผชิญหน้าคนเดียว",{"problem":3,"c":3},"report"],["ถามเพื่อนที่ถูกพาดพิงว่าอยากจัดการอย่างไร","เพื่อนบางคนยอมเล่าข้อมูลและร่วมกันหาทางออก",{"friend":4,"e":3},"friends"],["โพสต์ตอบโต้และกล่าวหาคนที่คุณสงสัย","ยอดแชร์เพิ่มขึ้น แต่คนที่ถูกกล่าวหาอาจไม่ใช่เจ้าของบัญชี",{"fame":2,"stress":5,"fair":-4},"revenge"],["ไม่ตอบโต้และปิดการแจ้งเตือน","คุณพักจากข่าวลือและยังไม่เปิดเผยข้อมูลเพิ่มเติม",{"stress":-2,"selfcontrol":3},"quiet"]]],[15,"คนส่งข่าวคือคนที่เคยนั่งข้างคุณ","ครูพบว่าคนหนึ่งในกลุ่มใกล้ตัวส่งข้อมูลให้บัญชีลับ เขาบอกว่าแค่คิดว่าเป็นเรื่องตลกและไม่ได้คาดว่าจะลุกลาม",[["ขอให้เขาแก้ข้อมูลที่เผยแพร่และรับผิดชอบ","เขายอมลบโพสต์ที่ควบคุมได้ แต่ความไว้ใจยังไม่กลับมาทันที",{"responsibility":4,"fair":3},"repair"],["ขอให้ครูจัดการและเว้นระยะจากเขา","เรื่องเข้าสู่กระบวนการของโรงเรียน คุณไม่ต้องอยู่ใกล้คนที่ทำให้ไม่สบายใจ",{"selfcontrol":4,"stress":-2},"distance"],["เปิดเผยความลับของเขากลับ","หลายคนหันมาวิจารณ์เขา แต่ความขัดแย้งในห้องยิ่งขยาย",{"i":-4,"friend":-3,"stress":4},"revenge"],["ยอมรับคำขอโทษแต่ไม่สัญญาจะกลับมาสนิท","เขารับรู้ว่าคำขอโทษไม่ได้ลบผลที่เกิดขึ้นทันที",{"e":3,"confidence":3},"repair"]],["social",68,0,"ให้คนกลางช่วยตกลงเรื่องการแก้ข้อมูลโดยไม่ประจานใครเพิ่ม","ผู้เกี่ยวข้องยอมแก้ข่าวต่อหน้าคนที่ได้รับข้อมูลผิดและหยุดการส่งต่อ",{"social":5,"fair":4,"reliable":2},"repair"]],[17,"ภาพเก่าที่ถูกส่งมาอีกครั้ง","ก่อนจบโรงเรียน มีคนส่งภาพจากบัญชีลับครั้งเก่ากลับเข้ากลุ่ม เพื่อนบางคนจำได้ว่าเคยเกิดอะไรขึ้นและกำลังรอท่าทีของคุณ",[["ขอให้หยุดแชร์และเก็บหลักฐานหากยังมีการคุกคาม","เพื่อนหลายคนช่วยกันหยุดการส่งต่อโดยไม่เปิดเรื่องส่วนตัวเพิ่ม",{"responsibility":4,"respect":3},"end"],["พูดถึงบทเรียนที่ได้โดยไม่ระบุชื่อคนทำ","กลุ่มรับฟังและคนที่เคยถูกพาดพิงรู้สึกว่ามีคนเข้าใจ",{"e":4,"social":3},"end"],["กลับไปเถียงเพื่อเอาชนะเรื่องเดิม","คนบางส่วนสนับสนุนคุณ แต่ความขัดแย้งที่เคยเงียบกลับมา",{"stress":5,"h":-2},"end"],["ออกจากกลุ่มและรักษาเฉพาะมิตรภาพที่ต้องการ","คุณเลือกเดินต่อโดยไม่ต้องให้คนทั้งห้องเห็นด้วย",{"selfcontrol":4,"h":2},"end"]],null,{"repair":"คนที่เคยส่งข่าวเคยขอโทษและช่วยแก้ข้อมูลแล้ว แต่ยังมีคนเก็บภาพเก่าไว้","distance":"คุณเว้นระยะจากคนที่ส่งข้อมูลมานานแล้ว วันนี้เรื่องเก่ากลับมาโดยไม่ทันตั้งตัว","revenge":"หลังจากต่างฝ่ายต่างเปิดเผยความลับกัน ห้องเรียนเคยแตกเป็นกลุ่ม วันนี้มีคนรื้อเรื่องนั้นขึ้นมาอีก"}]]],["debt","family",[[14,"ใบแจ้งหนี้ที่หล่นออกจากกระเป๋า","ขณะช่วยเก็บของที่บ้าน คุณพบใบแจ้งยอดค้างชำระ ผู้ใหญ่ที่บ้านรีบเก็บคืนและบอกว่าไม่ต้องกังวล แต่ช่วงหลังเริ่มเลี่ยงการพูดเรื่องค่าใช้จ่าย",[["ถามด้วยความเป็นห่วงและขอฟังเท่าที่บอกได้","ผู้ใหญ่ยอมเล่าว่ากำลังจัดการรายจ่ายและยืนยันว่าไม่ใช่หน้าที่ของคุณ",{"r":4,"confidence":2},"talk"],["บอกว่ายังอยากเรียนและขอให้ช่วยวางแผน","ผู้ใหญ่รับรู้สิ่งที่สำคัญกับคุณและตกลงทบทวนค่าเรียน",{"responsibility":3,"security":2},"plan"],["พยายามเก็บเงินและไม่กล้าขออะไรอีก","ที่บ้านสังเกตว่าคุณกังวลมากขึ้นและต้องอธิบายว่าไม่ต้องแบกหนี้แทน",{"stress":4,"discipline":2},"worry"],["ขอคุยกับญาติหรือครูที่ไว้ใจ","คุณได้คนช่วยรับฟังและยังไม่ต้องจัดการปัญหาผู้ใหญ่เอง",{"network":2,"stress":-2},"talk"]]],[16,"ทุนการศึกษาที่มีเงื่อนไข","ครูแจ้งว่ามีทุนช่วยค่าอุปกรณ์และค่าเดินทาง แต่ผู้สมัครต้องส่งข้อมูลรายได้ครอบครัวอย่างเป็นทางการ คุณกังวลว่าคนอื่นอาจรู้เรื่องที่บ้าน",[["สมัครผ่านช่องทางที่รักษาความเป็นส่วนตัว","ครูช่วยจัดเอกสารและคุณมีโอกาสได้รับการพิจารณา",{"problem":4,"security":3},"apply"],["ขอทุนประเภทผลงานหรือกิจกรรมแทน","ครูช่วยหาโครงการที่เหมาะกับความสนใจของคุณ",{"knowledge":3,"network":3},"apply"],["ไม่สมัครเพราะกลัวเพื่อนรู้","คุณรักษาความเป็นส่วนตัว แต่ต้องหาทางลดภาระค่าเรียนร่วมกับผู้ใหญ่",{"stress":3,"security":-2},"decline"],["คุยกับผู้ใหญ่ที่บ้านก่อนตัดสินใจ","ครอบครัวร่วมกันพิจารณาโดยไม่ผลักภาระมาให้คุณคนเดียว",{"r":4,"problem":2},"apply"]],["knowledge",50,0,"ตรวจเงื่อนไขทุนและขอให้ครูช่วยแยกเอกสารที่จำเป็น","คุณสมัครได้ครบโดยไม่ต้องเปิดเผยข้อมูลครอบครัวกับเพื่อนร่วมชั้น",{"knowledge":4,"security":4,"confidence":2},"apply"]],[17,"คำตอบก่อนเลือกทางหลังมัธยม","ใกล้จบมัธยม คุณกับผู้ใหญ่ที่บ้านต้องคุยเรื่องค่าเดินทาง ค่าเรียน และทางเลือกในปีหน้า ครูเสนอให้ช่วยหาทางที่เหมาะกับงบ",[["เปรียบเทียบทุนและเส้นทางที่สนใจพร้อมครอบครัว","คุณมีแผนค่าใช้จ่ายที่ชัดขึ้นก่อนตัดสินใจเส้นทางในเกม",{"problem":4,"security":3},"end"],["สำรวจสายอาชีพที่ฝึกงานและเรียนต่อได้","คุณเห็นทางเลือกนอกเหนือจากมหาวิทยาลัยและไม่ต้องรีบตัดสินใจตามคนอื่น",{"skill":4,"experience":3},"end"],["เลือกตามเพื่อนโดยยังไม่คุยเรื่องค่าใช้จ่าย","คุณตื่นเต้นกับเส้นทางใหม่ แต่เรื่องงบยังค้างอยู่",{"h":2,"stress":4},"end"],["ขอเวลาปรึกษาครูและผู้ใหญ่ก่อนเลือก","คุณมีข้อมูลเพิ่มโดยยังไม่ต้องผูกมัดอนาคต",{"patience":3,"network":2},"end"]],null,{"apply":"ครูแจ้งว่าคุณมีข้อมูลทุนให้ใช้ประกอบการวางแผน ไม่ว่าผลทุนจะเป็นอย่างไร คุณยังมีทางเลือกอื่น","decline":"คุณไม่ได้สมัครทุนครั้งก่อน แต่ครูยังพร้อมช่วยหาทางเลือกที่ไม่เปิดเผยข้อมูลเกินจำเป็น"}]]],["cash","explore",[[13,"โต๊ะขายขนมที่คนซื้อเกินคาด","เพื่อนชวนทำขนมไปขายในงานโรงเรียนที่อนุญาตให้ตั้งโต๊ะ ทั้งคู่ตกลงแบ่งกำไร แต่ยังไม่ตกลงว่าใครรับผิดชอบของเหลือ",[["ตกลงต้นทุนและส่วนแบ่งก่อนเริ่ม","ขายได้กำไรเล็กน้อย คุณได้รับ 150 บาทและได้รู้ต้นทุนจริง",{"m":150,"skill":3,"problem":2},"clear"],["ลองขายก่อนค่อยคุยส่วนแบ่ง","ขายหมดเร็วกว่าที่คิด แต่เพื่อนเริ่มถามว่าใครควรได้เงินมากกว่า",{"m":150,"stress":2},"unclear"],["ช่วยทำป้ายและโปรโมตแลกส่วนแบ่ง","คุณได้รับ 100 บาทและเพื่อนชมไอเดียที่ทำให้คนมาซื้อ",{"m":100,"creative":3,"social":2},"clear"],["ไปช่วยเชียร์แต่ไม่ร่วมลงทุน","คุณได้สนุกกับงานและไม่ต้องรับความเสี่ยงเรื่องเงิน",{"h":3,"friend":2},"end"]]],[15,"ร้านออนไลน์ที่ขอให้ใช้ชื่อคุณ","คนรู้จักจากงานโรงเรียนชวนช่วยขายของออนไลน์โดยบอกว่าจะให้ค่าตอบแทน แต่ขอใช้บัญชีของคุณรับเงินแทนและไม่ยอมอธิบายที่มาของสินค้า",[["ปฏิเสธการใช้บัญชีและบอกผู้ใหญ่ที่ไว้ใจ","ผู้ใหญ่ช่วยตรวจสอบข้อเสนอ คุณไม่ต้องรับภาระทางการเงินที่ไม่เข้าใจ",{"security":4,"problem":3},"safe"],["เสนอช่วยออกแบบสื่อแทนโดยไม่แตะเงินลูกค้า","อีกฝ่ายไม่สนใจข้อเสนอ คุณยังรักษาทักษะและขอบเขตตัวเองไว้",{"creative":3,"selfcontrol":3},"safe"],["ยอมให้ใช้บัญชีเพราะหวังค่าตอบแทน","มีคนทักมาทวงเงินที่คุณไม่รู้ที่มา ผู้ใหญ่ต้องเข้ามาช่วยตรวจสอบ",{"stress":6,"security":-5,"reliable":-3},"trouble"],["ขอให้ผู้ใหญ่ร่วมดูรายละเอียดก่อนตกลง","ข้อเสนอไม่ชัดเจนและอีกฝ่ายถอนคำชวนไป",{"problem":4,"r":2},"safe"]],["problem",58,0,"ตรวจสอบตัวตนและข้อตกลงกับผู้ใหญ่โดยไม่ส่งข้อมูลบัญชี","คุณพบข้อมูลที่ไม่สอดคล้องกันและยุติข้อเสนอได้ทัน",{"problem":5,"security":4,"i":2},"safe"]],[17,"งานแรกที่อยากให้พ่อแม่ภูมิใจ","ผู้จัดงานเยาวชนเปิดรับคนช่วยทำสื่อและดูแลโต๊ะขายของ มีข้อตกลงชัดเจนและค่าตอบแทนตามงาน คุณต้องเลือกว่าจะลองอีกครั้งหรือไม่",[["รับงานที่มีขอบเขตชัดเจนและผู้ใหญ่รับรู้","คุณได้เงิน 700 บาทจากงานที่ตรวจสอบได้และเริ่มมั่นใจในการหารายได้",{"m":700,"skill":4,"confidence":3},"end"],["ช่วยงานสั้น ๆ เพื่อเรียนรู้ก่อน","คุณได้ค่าตอบแทน 250 บาทและเห็นว่างานจริงต่างจากคำชวนลอย ๆ",{"m":250,"experience":4},"end"],["ขอให้เพื่อนร่วมงานช่วยกันตรวจข้อตกลง","ทั้งคู่เข้าใจหน้าที่ก่อนรับงานและยังมีเวลาเรียน",{"friend":3,"problem":4},"end"],["พักเรื่องงานไว้เพื่อเตรียมตัวจบมัธยม","คุณรักษาเวลาเรียนและยังมีโอกาสหารายได้ภายหลัง",{"energy":3,"discipline":2},"end"]],null,{"safe":"คุณเคยผ่านข้อเสนอที่ไม่ชัดเจนมาแล้ว คราวนี้ผู้จัดงานเปิดรายละเอียดให้ตรวจสอบก่อน","trouble":"ผู้ใหญ่ช่วยจัดการปัญหาบัญชีครั้งก่อนแล้ว คุณยังรู้สึกไม่มั่นใจเมื่อมีคนชวนทำงานอีกครั้ง"}]]],["sport","sport",[[14,"เส้นชัยที่ไม่มีใครรอ","การแข่งขันวิ่งของโรงเรียนกำลังตัดสินอันดับ เพื่อนร่วมทีมสะดุดล้มก่อนถึงเส้นชัย คุณกำลังอยู่ในอันดับที่มีโอกาสได้เหรียญ",[["แจ้งเจ้าหน้าที่แล้ววิ่งต่อเมื่อเห็นคนเข้าช่วย","เจ้าหน้าที่รับเรื่องทัน คุณยังมีโอกาสจบการแข่งขัน",{"physical":3,"responsibility":3},"medal"],["หยุดเรียกคนช่วยและอยู่จนเพื่อนปลอดภัย","คุณเสียอันดับ แต่เพื่อนได้รับการดูแลเร็วขึ้น",{"e":4,"friend":4},"help"],["วิ่งเข้าเส้นชัยก่อนแล้วกลับมาดู","คุณได้ลุ้นเหรียญ แต่เพื่อนรู้สึกผิดหวังที่คุณไม่ได้แจ้งใครระหว่างทาง",{"ambition":3,"friend":-2},"medal"],["ส่งสัญญาณให้ครูและชวนเพื่อนคนอื่นช่วย","คนดูแลเข้าถึงเพื่อนได้เร็วและคุณจบการแข่งขันตามกำลัง",{"problem":3,"social":3},"help"]],["physical",80,0,"ส่งสัญญาณให้เจ้าหน้าที่อย่างชัดเจนและรักษาจังหวะวิ่งโดยไม่ฝืน","เพื่อนได้รับการช่วยเหลือทันและคุณทำผลงานตามความสามารถ",{"physical":4,"problem":3,"respect":3},"medal"]],[15,"โค้ชจากอีกโรงเรียน","โค้ชจากโรงเรียนอื่นเห็นผลงานและชวนคุณไปคัดตัว แต่ทีมเดิมกำลังเตรียมแข่งครั้งสุดท้ายกับเพื่อนที่ฝึกมาด้วยกัน",[["คุยกับโค้ชทั้งสองฝ่ายเพื่อจัดเวลา","ทั้งสองฝ่ายยอมปรับตารางให้คุณลองคัดตัวโดยไม่ทิ้งทีมทันที",{"social":4,"problem":3},"try"],["เลือกแข่งกับทีมเดิมให้จบก่อน","เพื่อนดีใจที่คุณรักษาคำพูด แต่รอบคัดตัวอาจต้องรอปีถัดไป",{"friend":4,"reliable":3},"team"],["ไปคัดตัวโดยไม่บอกทีมเดิม","คุณได้โอกาสใหม่ แต่ทีมเดิมเสียคนและความไว้ใจลดลง",{"ambition":4,"friend":-4},"try"],["ปฏิเสธทั้งสองงานเพื่อพักจากการแข่งขัน","คุณมีเวลาฟื้นตัวและไม่ต้องเล่นกีฬาเพื่อพิสูจน์ตัวเอง",{"energy":4,"stress":-2},"end"]]],[17,"สนามสุดท้ายก่อนจบโรงเรียน","งานกีฬารวมโรงเรียนกำลังจะเริ่ม คุณมีโอกาสลงแข่งหรือช่วยดูแลนักกีฬารุ่นน้องที่เพิ่งเริ่มฝึก",[["ลงแข่งและตั้งเป้าตามความพร้อม","คุณได้ทดสอบตัวเองอีกครั้งโดยไม่ต้องฝืนเพื่อผลการแข่งขัน",{"physical":4,"confidence":3},"end"],["ช่วยรุ่นน้องวางแผนและให้กำลังใจ","รุ่นน้องจำคำแนะนำของคุณได้และทีมมีคนสืบต่อ",{"respect":4,"skill":3},"end"],["ขอทำทั้งสองอย่างโดยแบ่งเวลาชัดเจน","คุณได้ลงสนามและช่วยทีม แต่ต้องใช้พลังมากกว่าปกติ",{"physical":2,"network":3,"energy":-3},"end"],["ไปเชียร์และสนุกกับวันสุดท้าย","คุณได้ใช้เวลากับเพื่อนโดยไม่ต้องแข่งกับตัวเองตลอดเวลา",{"h":5,"friend":3},"end"]],null,{"try":"หลังจากเคยไปคัดตัวกับโค้ชอีกโรงเรียน คุณได้รับคำชวนให้กลับมาร่วมงานกีฬารวม","team":"ทีมเดิมยังจำได้ว่าคุณเลือกแข่งกับพวกเขาให้จบ รุ่นน้องจึงมาขอคำแนะนำ"}]]],["love","love",[[14,"จดหมายที่ไม่ได้ตั้งใจให้คุณอ่าน","ฟิล์ม เพื่อนที่ชอบทำงานศิลปะ ทำสมุดตกในห้องกิจกรรม คุณเห็นข้อความที่เขียนถึงคุณโดยบังเอิญ แต่ยังไม่รู้ว่าหมายถึงความรู้สึกแบบไหน",[["คืนสมุดโดยไม่พูดถึงข้อความ","ฟิล์มขอบคุณและชวนคุณคุยเรื่องงานศิลปะครั้งถัดไป",{"i":3,"friend":3},"respect"],["บอกว่าเผลอเห็นและขอโทษ","ฟิล์มอายเล็กน้อยแต่สบายใจที่คุณไม่ได้เอาไปเล่า",{"confidence":3,"reliable":3},"open"],["เอาไปเล่าให้เพื่อนสนิทฟัง","เรื่องเริ่มกระจาย ฟิล์มรู้สึกว่าพื้นที่ส่วนตัวถูกละเมิด",{"friend":-4,"i":-3},"gossip"],["คืนผ่านครูโดยไม่เข้าหาเป็นส่วนตัว","ฟิล์มได้สมุดคืนและคุณไม่ต้องเริ่มความสัมพันธ์ที่ไม่ต้องการ",{"selfcontrol":3},"end"]]],[16,"คำสารภาพในวันที่มีคนมองอยู่","ฟิล์มชวนคุยหลังงานโรงเรียน แต่เพื่อนหลายคนเริ่มส่งเสียงเชียร์และถ่ายคลิป คุณยังไม่แน่ใจว่าทั้งสองคนอยากเป็นมากกว่าเพื่อนหรือไม่",[["ชวนคุยเป็นส่วนตัวเมื่อทั้งคู่สบายใจ","ฟิล์มได้พูดความรู้สึกโดยไม่ต้องตอบต่อหน้าคนอื่น",{"social":3,"friend":4},"private"],["บอกว่ายังอยากรู้จักกันโดยไม่รีบคบ","ทั้งคู่ตกลงค่อย ๆ คุยและไม่รับแรงกดดันจากคนดู",{"patience":4,"friend":2},"private"],["ตอบรับต่อหน้าทุกคนเพราะบรรยากาศพาไป","คนดูเฮ แต่หลังงานฟิล์มบอกว่าอยากให้คุยกันเองมากกว่า",{"h":2,"stress":3},"pressure"],["บอกว่าไม่อยากให้เป็นคลิปและเดินออกจากกลุ่ม","คนดูหยุดตาม แต่ฟิล์มยังไม่รู้ว่าคุณรู้สึกอย่างไร",{"selfcontrol":3,"friend":-1},"private"]],["social",65,0,"ขอให้เพื่อนหยุดถ่ายและชวนฟิล์มไปคุยอย่างให้เกียรติ","ทั้งคู่ได้คุยโดยไม่ต้องรักษาหน้าต่อคนดูและยังรักษามิตรภาพไว้",{"social":5,"confidence":3,"friend":3},"private"]],[17,"ตั๋วรถเที่ยวสุดท้ายก่อนแยกโรงเรียน","ฟิล์มบอกว่าปีหน้าจะย้ายไปเรียนต่างจังหวัดและอยากพบคุณก่อนเดินทาง คุณเองก็มีแผนชีวิตที่ยังต้องเลือก",[["นัดพบเพื่อคุยและยอมรับว่าทั้งคู่มีเส้นทางของตัวเอง","คุณได้บอกสิ่งที่ค้างใจและตกลงไม่กดดันอนาคตกัน",{"friend":4,"h":3},"end"],["ชวนติดต่อกันต่อในฐานะคนที่รู้สึกดีต่อกัน","ทั้งคู่เก็บช่องทางติดต่อไว้โดยไม่สัญญาเกินความพร้อม",{"r":3,"confidence":2},"end"],["ขอให้เปลี่ยนแผนเรียนเพื่อจะได้อยู่ใกล้กัน","ฟิล์มไม่พร้อมเปลี่ยนอนาคตตามคุณ และบทสนทนาเต็มไปด้วยความผิดหวัง",{"stress":5,"friend":-3},"end"],["ฝากข้อความอวยพรและไม่ไปพบ","คุณเก็บความทรงจำไว้ในแบบที่สบายใจ แม้มีบางคำที่ไม่ได้พูดต่อหน้า",{"h":2,"selfcontrol":3},"end"]],null,{"private":"หลังจากคุยกันโดยไม่มีคนดู ฟิล์มยังติดต่อคุณอยู่และส่งข่าวเรื่องการย้ายโรงเรียน","pressure":"เหตุการณ์ที่เพื่อนเชียร์ต่อหน้าคนอื่นยังเป็นเรื่องที่ฟิล์มไม่สบายใจ วันนี้เขาขอคุยอีกครั้งก่อนเดินทาง"}]]],["missing","chance1",[[13,"โต๊ะว่างหลังวันหยุด","ต้น เพื่อนที่มักมาถึงโรงเรียนก่อนคุณ หายไปสามวันโดยไม่ลา คืนวันหนึ่งเขาส่งข้อความว่าอย่าบอกใครว่าเขาติดต่อมา แล้วถามว่าคุณจะเก็บความลับให้ได้ไหม",[["ถามว่าเขาปลอดภัยไหมและชวนติดต่อผู้ใหญ่ที่ไว้ใจ","ต้นยอมบอกว่ากลัวกลับบ้านและรับความช่วยเหลือจากครูโดยไม่ต้องเล่าให้ทั้งห้องรู้",{"e":4,"friend":3,"responsibility":2},"trust"],["คุยกับเขาต่อและขอให้ครูที่ไว้ใจช่วยประเมิน","ครูเริ่มประสานคนดูแลที่เหมาะสมโดยไม่เปิดเผยเรื่องส่วนตัวเกินจำเป็น",{"problem":4,"friend":2},"trust"],["สัญญาจะไม่บอกใครแม้ไม่รู้ว่าเขาปลอดภัยหรือไม่","ต้นขอบคุณ แต่คุณต้องรับความกังวลเพียงลำพังจนผู้ใหญ่พบว่าเขาต้องการความช่วยเหลือ",{"stress":5,"friend":2},"secret"],["ไม่ตอบเพราะไม่อยากเกี่ยวข้อง","คุณหลีกเลี่ยงเรื่องที่หนักเกินวัย แต่ภายหลังยังสงสัยว่าต้นเป็นอย่างไร",{"stress":2,"friend":-2},"distance"]]],[15,"คนที่กลับมาในชุดนักเรียนคนละสี","ต้นกลับมาเยี่ยมโรงเรียนเก่าพร้อมครูคนหนึ่ง เขาอยู่กับญาติและเรียนโรงเรียนใหม่แล้ว เพื่อนหลายคนถามเรื่องที่เกิดขึ้น แต่ต้นอยากให้ทุกคนจำเขาจากเรื่องอื่นมากกว่า",[["ชวนเขาไปกินข้าวและถามถึงโรงเรียนใหม่","ต้นเล่าเรื่องเพื่อนใหม่และชวนคุณติดต่อกันในฐานะเพื่อนธรรมดา",{"friend":4,"h":3},"reconnect"],["ช่วยเปลี่ยนเรื่องเมื่อคนอื่นเริ่มซักถาม","ต้นรู้สึกปลอดภัยและอยู่ร่วมงานได้นานขึ้น",{"e":3,"social":3},"reconnect"],["ถามต่อหน้าทุกคนว่าเกิดอะไรขึ้นกันแน่","ต้นเงียบและขอกลับก่อน คุณเพิ่งเข้าใจว่าความอยากรู้ของคนอื่นอาจเป็นภาระของเขา",{"friend":-4,"reliable":-2},"distant"],["ทักทายแล้วให้เขาเลือกเองว่าจะคุยหรือไม่","เขายิ้มและขอบคุณที่คุณไม่ได้บังคับให้กลับมาสนิททันที",{"patience":3,"friend":1},"distant"]],null,{"trust":"ต้นยังจำได้ว่าคุณไม่ได้ปล่อยให้เขาเผชิญเรื่องยากคนเดียว","secret":"ต้นบอกว่าตอนนั้นเขาก็ไม่รู้ว่าควรขอความช่วยเหลือจากใคร คุณจึงได้คุยกันถึงความลับครั้งนั้น","distance":"คุณไม่เคยตอบข้อความครั้งนั้นเลย วันนี้ต้นเดินเข้ามาทักก่อน"}],[17,"โปสการ์ดจากเมืองที่ไม่เคยไป","ก่อนจบมัธยม คุณได้รับโปสการ์ดจากต้น เขาเขียนว่าชีวิตเริ่มดีขึ้น และชวนพบกันในวันเปิดบ้านของโรงเรียนใหม่ ถ้าคุณยังอยากเจอเขา",[["ไปพบเขาและฉลองเรื่องดีที่เกิดขึ้น","คุณได้เห็นชีวิตอีกด้านของเพื่อนที่เคยหายไป และกลับมาด้วยความรู้สึกอุ่นใจ",{"friend":4,"h":5},"end"],["ส่งข้อความยินดีและนัดเมื่อสะดวกทั้งคู่","ต้นได้รับกำลังใจโดยไม่ต้องกังวลว่าคุณจะมาหรือไม่",{"r":3,"h":2},"end"],["เขียนขอโทษในสิ่งที่ค้างใจ","ต้นรับฟังและบอกว่าทั้งสองคนยังมีโอกาสเริ่มต้นใหม่ได้",{"i":3,"friend":3},"end"],["เก็บโปสการ์ดไว้โดยไม่ติดต่อกลับ","คุณยอมรับว่าบางคนผ่านเข้ามาเพียงช่วงหนึ่งของชีวิต",{"experience":3,"selfcontrol":2},"end"]]]]],["accusation","chance2",[[14,"เงินกองกลางหายไป","เงินสำหรับจัดงานห้องเรียนหายจากตู้เก็บของ คนหนึ่งบอกว่าเห็นคุณอยู่ใกล้ตู้หลังเลิกเรียน ครูจึงขอให้ทุกคนหยุดกล่าวหาและอยู่คุยกัน",[["เล่าสิ่งที่ทำจริงและขอให้ตรวจหลักฐานก่อน","ครูบันทึกคำชี้แจง คุณไม่ต้องยอมรับข้อกล่าวหาที่ไม่มีหลักฐาน",{"i":3,"problem":3},"evidence"],["ขอผู้ปกครองหรือครูอีกคนช่วยรับฟัง","การพูดคุยมีคนกลางและคุณรู้สึกปลอดภัยขึ้น",{"r":3,"confidence":2},"evidence"],["กล่าวหาคนที่คุณไม่ชอบกลับไป","ครูต้องตรวจข้อกล่าวหาเพิ่มและเพื่อนคนนั้นรู้สึกถูกใส่ร้าย",{"fair":-5,"friend":-3},"blame"],["เสนอให้ช่วยสมทบเงินเพราะอยากให้เรื่องจบ","คนบางคนเข้าใจผิดว่าคุณกำลังยอมรับผิด ครูเตือนให้แยกการช่วยเหลือออกจากข้อเท็จจริง",{"sacrifice":2,"stress":4},"pay"]],["problem",65,0,"เรียงเวลาที่เกี่ยวข้องและขอให้ครูตรวจสอบกับผู้เห็นเหตุการณ์","ครูพบว่าข้อมูลบางส่วนขัดกันและชะลอการกล่าวหาจนกว่าจะตรวจครบ",{"problem":5,"fair":4,"reliable":2},"evidence"]],[15,"คนที่ทุกคนเชื่อกลับเป็นคนที่ปิดบัง","ครูพบว่าเงินส่วนหนึ่งถูกนำไปใช้โดยผู้ดูแลกองกลางโดยไม่แจ้งห้อง เขายอมรับว่ากลัวเสียหน้าและขอให้คุณอย่าเล่าเรื่องนี้ต่อ",[["ให้ครูจัดการคืนเงินและชี้แจงกับผู้เกี่ยวข้อง","ห้องได้รับข้อมูลที่จำเป็นและเริ่มแก้ปัญหาโดยไม่ประจานเกินเหตุ",{"fair":4,"responsibility":3},"clear"],["ขอให้แก้ข่าวที่คนเคยกล่าวหาคุณก่อน","ครูชี้แจงว่าคุณไม่ได้เกี่ยวข้อง ความน่าเชื่อถือของคุณกลับคืนบางส่วน",{"confidence":4,"reliable":3},"clear"],["เรียกร้องให้เขาอับอายเหมือนที่คุณเคยเจอ","คนในห้องแบ่งฝ่าย เรื่องเงินถูกแก้แต่บรรยากาศไม่กลับมาเหมือนเดิม",{"stress":4,"e":-3},"revenge"],["ยอมให้ครูจัดการโดยไม่ขอร่วมคุยอีก","คุณรักษาระยะจากเรื่องนี้ แต่บางคนยังไม่รู้ว่าข้อกล่าวหาเดิมไม่จริง",{"selfcontrol":3,"h":2},"quiet"]]],[17,"คำขอโทษหน้าอาคารเรียน","คนที่เคยกล่าวหาคุณมาหาก่อนวันรับประกาศจบการศึกษา เขาบอกว่าอยากขอโทษเรื่องเงินกองกลางและชวนกลับมาเป็นเพื่อน",[["รับคำขอโทษและค่อย ๆ ดูว่าจะไว้ใจกันได้ไหม","ทั้งคู่เริ่มพูดคุยโดยไม่ต้องลืมเรื่องที่เคยเกิดขึ้น",{"friend":3,"patience":3},"end"],["รับคำขอโทษแต่ไม่กลับมาสนิท","เขายอมรับขอบเขต คุณไม่ต้องคืนความไว้ใจเพียงเพราะอีกฝ่ายขอโทษ",{"confidence":3,"selfcontrol":3},"end"],["บอกว่าคุณยังโกรธและไม่อยากคุย","คุณได้พูดความรู้สึกตามจริงและออกจากบทสนทนา",{"c":3,"stress":1},"end"],["ชวนเขาไปขอโทษคนอื่นที่เคยถูกกล่าวหาด้วย","เขาตกลงแก้เรื่องที่เคยทำกับคนอื่น แม้ยังต้องใช้เวลา",{"fair":4,"e":3},"end"]]]]],["mystery","chance3",[[13,"เทปเสียงในตู้เก็บของชมรม","ขณะช่วยเก็บอุปกรณ์งานโรงเรียน คุณพบเครื่องบันทึกเสียงเก่าที่มีข้อความว่า ถ้าได้ยินเสียงนี้ ให้ไปถามป้าขายขนมเรื่องห้องหมายเลขเจ็ด เพื่อนในชมรมเริ่มแต่งเรื่องผีทันที",[["นำเครื่องให้ครูชมรมแล้วลองถามประวัติ","ครูหัวเราะและบอกว่าห้องหมายเลขเจ็ดเคยเป็นห้องวิทยุ คุณได้เบาะแสใหม่",{"knowledge":3,"problem":3},"clue"],["ชวนเพื่อนถามป้าขายขนมตอนกลางวัน","ป้าจำเสียงในเครื่องได้และเล่าเรื่องรายการวิทยุของนักเรียนรุ่นก่อน",{"social":3,"friend":3},"clue"],["ทำคลิปเล่าเรื่องลึกลับโดยไม่ยืนยันข้อเท็จจริง","เพื่อนสนุกกับคลิป แต่ข่าวเรื่องผีเริ่มใหญ่เกินจริง",{"creative":3,"fame":2,"reliable":-2},"viral"],["ส่งของให้ครูแล้วกลับไปทำกิจกรรมเดิม","คุณไม่ได้ตามเรื่องต่อ แต่เพื่อนยังคุยกันสนุกในชมรม",{"h":2},"end"]]],[15,"เสียงสุดท้ายของรายการที่ถูกปิด","ครูพบม้วนบันทึกของชมรมวิทยุยุคเก่า เนื้อหาส่วนหนึ่งเป็นคำขอโทษของนักเรียนที่เคยทะเลาะกัน ป้าขายขนมยอมรับว่าตนเคยเป็นสมาชิกชมรม และอยากให้เรื่องนี้จบอย่างสวยงาม",[["ขออนุญาตทำสารคดีสั้นเกี่ยวกับชมรม","ป้าช่วยเล่าประวัติและให้คุณใช้เฉพาะส่วนที่ทุกคนอนุญาต",{"creative":4,"skill":3},"film"],["ชวนรุ่นเก่ากลับมาจัดรายการพิเศษ","ครูเริ่มติดต่อศิษย์เก่าและคุณได้ช่วยเตรียมรายการ",{"network":4,"social":3},"show"],["นำข้อความส่วนตัวไปทำคลิปดราม่า","คลิปเรียกยอดดู แต่ศิษย์เก่าขอให้หยุดเผยแพร่และครูต้องเข้ามาจัดการ",{"fame":3,"i":-4},"viral"],["คืนบันทึกให้เจ้าของและไม่เปิดเผยเรื่องส่วนตัว","ป้าขอบคุณที่คุณช่วยคืนความทรงจำโดยไม่สร้างเรื่องให้คนอื่น",{"e":4,"i":2},"quiet"]],["creative",55,0,"เสนอสารคดีสองช่วง เล่าเรื่องลึกลับก่อนเฉลยด้วยประวัติจริง","ทีมได้ผลงานที่สนุกและเคารพคนในเรื่อง ครูเสนอให้นำไปฉายในงานโรงเรียน",{"creative":5,"skill":4,"respect":2},"film"]],[17,"รายการวิทยุที่กลับมาหลังผ่านไปหลายปี","งานครบรอบโรงเรียนจัดมุมเล่าประวัติชมรมวิทยุ รุ่นพี่ที่เคยมีเสียงในเครื่องบันทึกมาร่วมงาน คุณได้เห็นคนที่เคยเป็นปริศนาอยู่ตรงหน้า",[["ชวนผู้เกี่ยวข้องเล่าเรื่องของตัวเองบนเวที","เรื่องที่เคยถูกแต่งเป็นตำนานกลายเป็นเสียงหัวเราะและความทรงจำของหลายรุ่น",{"social":4,"h":4},"end"],["ส่งผลงานเข้าประกวดสารคดีเยาวชน","คุณมีผลงานที่เกิดจากความอยากรู้จริงและได้ประสบการณ์ส่งงาน",{"creative":5,"skill":3},"end"],["ขอโทษเรื่องข่าวลือที่เคยปล่อยออกไป","ผู้เกี่ยวข้องรับฟังและให้โอกาสคุณเล่าความจริงใหม่",{"i":4,"reliable":3},"end"],["นั่งฟังรายการกับเพื่อนโดยไม่ต้องขึ้นเวที","คุณได้ความทรงจำแปลก ๆ ที่เริ่มจากของเก่าเพียงชิ้นเดียว",{"h":5,"friend":2},"end"]]]]],["flood","chance4",[[14,"ฝนคืนเดียวที่เปลี่ยนแผนทั้งโรงเรียน","หลังฝนตกหนัก โรงเรียนปิดเรียนชั่วคราวและชุมชนจัดจุดรับความช่วยเหลือ เพื่อนในห้องบางคนออกจากบ้านมาโดยมีเพียงกระเป๋าใบเดียว ครูเปิดรับอาสาช่วยงานที่ปลอดภัย",[["สมัครช่วยจัดของตามที่ครูมอบหมาย","ครูให้คุณช่วยในจุดรับของที่ปลอดภัย คุณได้พบเพื่อนที่ได้รับผลกระทบ",{"e":4,"responsibility":3},"volunteer"],["ชวนเพื่อนทำรายการสิ่งของที่ขาด","ทีมรวบรวมข้อมูลให้ผู้ใหญ่จัดของได้ตรงความต้องการ",{"problem":4,"friend":3},"organize"],["ช่วยประชาสัมพันธ์จากที่พัก","ข้อมูลจากหน่วยงานจริงถูกส่งถึงคนที่ต้องการบริจาคโดยไม่ต้องเข้าเขตเสี่ยง",{"social":3,"network":3},"organize"],["อยู่กับครอบครัวและช่วยดูแลตัวเอง","คุณไม่รับภาระที่เกินกำลังและทำตามคำแนะนำของผู้ใหญ่",{"security":2,"selfcontrol":3},"end"]]],[16,"เงินบริจาคที่ไม่มีใครอยากถามถึง","ทีมอาสาที่เคยทำงานด้วยกันกำลังจะจัดกิจกรรมช่วยชุมชนอีกครั้ง แต่มีคนสังเกตว่ายอดเงินบริจาคครั้งก่อนไม่ตรงกับรายงาน ผู้จัดคนหนึ่งกลัวว่าหากเปิดเรื่องจะไม่มีใครเชื่อใจทีมอีก",[["ขอให้ผู้ใหญ่ที่รับผิดชอบตรวจยอดอย่างเป็นทางการ","ทีมพักรับเงินชั่วคราวและเริ่มชี้แจงรายการที่คลาดเคลื่อน",{"fair":4,"responsibility":3},"audit"],["เสนอให้ใช้ระบบรับของแทนเงินจนกว่าจะตรวจเสร็จ","กิจกรรมยังเดินต่อได้โดยลดความเสี่ยงเรื่องเงิน",{"problem":4,"e":2},"audit"],["เงียบไว้เพราะกลัวงานอาสาเสียชื่อ","กิจกรรมเดินต่อแต่ความสงสัยเพิ่มขึ้น และคุณรู้สึกไม่สบายใจกับเรื่องที่ค้าง",{"stress":4,"i":-3},"hide"],["ถอนตัวแล้วแจ้งครูที่ไว้ใจเป็นส่วนตัว","คุณออกจากบทบาทที่ไม่มั่นใจและผู้ใหญ่รับเรื่องตรวจสอบ",{"selfcontrol":3,"reliable":3},"audit"]],["problem",70,0,"เสนอให้แยกบัญชีตามกิจกรรมและตรวจหลักฐานร่วมกับผู้ใหญ่","ทีมพบว่ารายการบางส่วนบันทึกผิด และตั้งระบบตรวจสอบใหม่ก่อนรับเงินอีกครั้ง",{"problem":5,"fair":4,"reliable":3},"audit"]],[17,"คนแปลกหน้าที่จำคุณได้","ในงานชุมชน มีคนมาทักว่าคุณเคยช่วยครอบครัวเขาหลังน้ำท่วม เขาชวนคุณไปดูบ้านที่ซ่อมเสร็จแล้วและขอบคุณแม้คุณจำเขาไม่ได้",[["ไปเยี่ยมพร้อมกลุ่มอาสา","คุณเห็นผลจากงานเล็ก ๆ ที่เคยทำ และเพื่อนร่วมทีมได้พบกันอีกครั้ง",{"h":5,"e":3,"friend":2},"end"],["ขอบคุณแล้วถามว่าชุมชนยังต้องการอะไร","คุณได้รู้ว่าการฟื้นตัวใช้เวลานานกว่าที่คิดและได้มุมมองใหม่",{"experience":4,"problem":2},"end"],["ชวนเขาเล่าเรื่องฟื้นตัวในงานโรงเรียนหากสมัครใจ","ผู้ฟังได้เห็นความช่วยเหลือผ่านเรื่องของคนจริงโดยไม่เปิดเผยเรื่องที่เขาไม่ต้องการ",{"social":4,"creative":3},"end"],["รับคำขอบคุณและกลับไปใช้ชีวิตตามแผน","คุณมีความทรงจำดีโดยไม่จำเป็นต้องเปลี่ยนชีวิตเป็นงานอาสาตลอดไป",{"h":4,"satisfaction":3},"end"]]]]]];
const defs=new Map(arcs.map(a=>[a[0],a]));
const state=(st,k)=>st.teenStories?.[k];
const gate=(kind,st,s)=>{const t=s.stats,a=s.answers||{},like=st.teenLike;switch(kind){case "study":return like==="เรียน"||a.teen_interest===1||t.knowledge>=30;case "gaming":return like==="สำรวจ"||a.teen_interest===3||["train","tired","tactical","casual","heavy"].includes(st.vy_games_status);case "social":return like==="ศิลปะ"||a.teen_interest===2||t.social>=60;case "family":return t.father<48||t.mother<48||t.security<42||["busy","strict"].includes(s.origin?.home);case "explore":return like==="สำรวจ"||a.teen_interest===3||t.ambition>=60;case "sport":return like==="กีฬา"||a.teen_interest===0||t.physical>=88;case "chance1":return ((s.seed??0)>>>0)%5===0||t.friend>=78;case "chance2":return ((s.seed??0)>>>0)%5===1;case "chance3":return ((s.seed??0)>>>0)%5===2||t.creative>=55;case "chance4":return ((s.seed??0)>>>0)%5===3;case "love":return !st.teenBond&&!["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&((s.seed??0)>>>0)%3!==1;default:return true;}};
const choice=(k,j,c,n,special=false)=>({label:c[0],result:c[1],delta:c[2],baseIndex:n,set:{teenStoryRoute:c[3],teenStoryStage:j+1},...(special?{special:true}:{})});
for(const [k,g,stages] of arcs)for(let j=0;j<stages.length;j++){const [age,title,story,choices]=stages[j];S.push({id:"teenarc_"+k+"_"+j,age,order:90+j*.1,title,story,cw:"teenstories",tsKey:k,tsStage:j,custom:true,choices:choices.map((c,n)=>choice(k,j,c,n))});}
W.allowed=(e,st,s)=>{if(e.cw!=="teenstories")return prev.allowed(e,st,s);const a=defs.get(e.tsKey),p=state(st,e.tsKey),j=e.tsStage;if(j===0)return !p&&gate(a[1],st,s);return p?.step===j&&p.route!=="end";};
W.story=(e,st)=>{if(e.cw!=="teenstories")return prev.story(e,st);const z=defs.get(e.tsKey)[2][e.tsStage],p=state(st,e.tsKey),lead=z[5]?.[p?.route];return lead?lead+"\n\n"+z[2]:z[2];};
W.choices=(e,st,s)=>{if(e.cw!=="teenstories")return prev.choices(e,st,s);const z=defs.get(e.tsKey)[2][e.tsStage],out=z[3].map((c,n)=>choice(e.tsKey,e.tsStage,c,n)),x=z[4];if(x&&s.stats[x[0]]>=x[1])out.push(choice(e.tsKey,e.tsStage,x.slice(3),x[2],true));return out;};
W.after=(st,old,e,n,ch,item)=>{prev.after(st,old,e,n,ch,item);if(e.cw!=="teenstories")return;const set=item.careerSet||ch.set||{};st.teenStories={...(old.teenStories||{}),[e.tsKey]:{step:set.teenStoryStage??e.tsStage+1,route:set.teenStoryRoute||"end"}};};
w.TEEN_STORIES={arcs};
})(window);


// Health trajectory and adult family-planning: deterministic per-save outcomes, no schema changes.
(function(w){
"use strict";
const W=w.CAREER_WORLD,F=w.LIFE_FLEX,L=w.LIFE,prev={allowed:W.allowed,story:W.story,choices:W.choices,after:W.after,risk:F.risk,death:F.death};
const types={heart:{name:"โรคหัวใจและหลอดเลือด",symptom:"แน่นหน้าอกหรือเหนื่อยผิดปกติขณะทำกิจวัตร",exam:"แพทย์ตรวจร่างกายและประเมินหัวใจ พบความผิดปกติที่ต้องติดตามและรักษา",severe:"อาการหัวใจและการไหลเวียนเลือดทรุดลง"},metabolic:{name:"เบาหวานและภาวะเมตาบอลิก",symptom:"อ่อนเพลีย กระหายน้ำ และน้ำหนักเปลี่ยนโดยไม่ตั้งใจ",exam:"แพทย์ตรวจเลือดและประเมินปัจจัยเสี่ยง พบภาวะน้ำตาลผิดปกติที่ต้องดูแล",severe:"เกิดภาวะแทรกซ้อนจากการควบคุมโรคไม่ได้"},exhaustion:{name:"ภาวะเจ็บป่วยที่สัมพันธ์กับความเครียดและการพักผ่อนไม่เพียงพอ",symptom:"ใจสั่น นอนไม่หลับและอ่อนเพลียจนกระทบงาน",exam:"แพทย์ประเมินอาการและตรวจหาสาเหตุอื่น พบว่าการพักผ่อนและภาระงานเป็นส่วนสำคัญของปัญหา",severe:"สุขภาพทรุดลงจนทำกิจวัตรและทำงานตามเดิมไม่ได้"},other:{name:"โรคเรื้อรังที่ต้องติดตาม",symptom:"มีอาการผิดปกติต่อเนื่องและทำกิจวัตรได้น้อยลง",exam:"แพทย์ตรวจเพิ่มเติมและพบโรคเรื้อรังที่จำเป็นต้องรักษาต่อเนื่อง",severe:"เกิดภาวะแทรกซ้อนจากโรคเรื้อรัง"}};
const roll=(s,a,salt)=>{let x=((s.seed??123456789)^Math.imul(a+1,2654435761)^Math.imul(salt,2246822519))>>>0;x^=x>>>16;x=Math.imul(x,2246822519);x^=x>>>13;x=Math.imul(x,3266489917);return ((x^(x>>>16))>>>0)/4294967296;};
const bound=(x,a,b)=>Math.max(a,Math.min(b,x));
const working=st=>["งานประจำ","งานประจำควบธุรกิจ","ธุรกิจ","อิสระ"].includes(st.mode)||!!st.profession&&st.lateWork!=="retired";
const partner=st=>!!st.partnerName&&["คบกัน","อยู่ด้วยกัน"].includes(st.relationship);
const health=(st)=>st.healthArc||{};
const riskFactors=(t,a,st={})=>{const p=t.physical??85,e=t.energy??80,z=t.stress??15;return bound((a>=40?.035:0)+(a>=60?.045:0)+Math.max(0,75-p)*.003+Math.max(0,55-e)*.002+Math.max(0,z-45)*.003+Math.max(0,(t.drinking??0)-25)*.002+Math.max(0,(t.substance??0)-15)*.003+(working(st)&&z>=65&&e<=40?.06:0),0,.75)};
const diagnose=(s,a)=>{const t=s.stats;if(t.substance>=35||t.drinking>=45)return "other";if(t.stress>=70&&t.energy<=35&&a<45)return "exhaustion";if(a>=35&&roll(s,a,12)<.6)return "heart";return a>=25?"metabolic":"other"};
const c=(label,result,delta={},set={},n)=>({label,result,delta,set,...(n===undefined?{}:{baseIndex:n})});
const add=(age,type,order,title)=>w.STORY.push({id:"healthstory_"+type+"_"+age,age,order,title,story:"เหตุการณ์ด้านสุขภาพ",cw:"healthstory",hsType:type,custom:true,choices:[0,1,2,3].map(n=>c("ทางเลือก "+(n+1),"ผลของการตัดสินใจ",{}, {},n))});
for(let a=18;a<=99;a++){add(a,"symptom",91,"ร่างกายเริ่มส่งสัญญาณ");add(a,"exam",91.1,"ผลตรวจที่เปลี่ยนแผนชีวิต");add(a,"follow",91.2,"ชีวิตหลังรู้ผลตรวจ");add(a,"crisis",98,"วันที่อาการทรุดลง");}
const childCount=st=>st.children?.length||0;
const familyAdd=(a,type,order,title)=>w.STORY.push({id:"adultfamily_"+type+"_"+a,age:a,order,title,story:"เหตุการณ์ครอบครัว",cw:"adultfamily",afType:type,custom:true,choices:[0,1,2,3].map(n=>c("ทางเลือก "+(n+1),"ผลของการตัดสินใจ",{}, {},n))});
for(let a=18;a<=49;a++){familyAdd(a,"intimacy",92,"คืนที่ทั้งสองคนต้องตัดสินใจร่วมกัน");familyAdd(a,"pregnancy",92.1,"ผลตรวจที่ไม่ได้อยู่ในแผน");familyAdd(a,"decision",92.2,"อนาคตของเราจะเป็นอย่างไร");}
for(let a=19;a<=55;a++){familyAdd(a,"birth",92.3,"วันที่ชีวิตอีกคนเริ่มต้น");familyAdd(a,"parent",92.4,"ชีวิตของคนเป็นพ่อ");}
const fa=st=>st.adultFamily||{};
W.allowed=(e,st,s)=>{
 if(e.cw==="healthstory"){const h=health(st),a=e.age,t=s.stats;
  if(e.hsType==="symptom")return !h.status&&a-(h.lastAge??-100)>=4&&riskFactors(t,a,st)>=.06&&(t.physical<=40||roll(s,a,41)<riskFactors(t,a,st));
  if(e.hsType==="exam")return (h.status==="symptom"&&h.age===a)||(h.status==="unexamined"&&a>h.age&&a-(h.lastAge??h.age)>=1);
  if(e.hsType==="follow")return ["diagnosed","delay","treated"].includes(h.status)&&a>h.age&&a-(h.lastAge??h.age)>=2;
  if(e.hsType==="crisis")return ["unexamined","delay","diagnosed","treated"].includes(h.status)&&a>=h.age&&(t.physical<=18||roll(s,a,42)<Math.min(.75,riskFactors(t,a,st)*(h.status==="treated"?.35:1.8)+(["delay","unexamined"].includes(h.status)?.12:0)))&&a-(h.crisisAge??-100)>=3;
 }
 if(e.cw==="adultfamily"){const h=fa(st),a=e.age,t=s.stats;
  if(e.afType==="intimacy")return partner(st)&&!["pending","pregnant","expecting"].includes(h.status)&&a-(h.lastAge??-100)>=4&&t.partner>=50&&roll(s,a,73)<.35;
  if(e.afType==="pregnancy")return h.status==="pending"&&h.age===a;
  if(e.afType==="decision")return h.status==="pregnant"&&h.age===a;
  if(e.afType==="birth")return h.status==="expecting"&&a>h.age;
  if(e.afType==="parent")return h.status==="born"&&a>h.age&&a-h.age<=3;
 }
 return prev.allowed(e,st,s);
};
W.story=(e,st)=>{if(e.cw==="healthstory"){const h=health(st),d=types[h.type]||types.other;
 if(e.hsType==="symptom")return (working(st)?"ภาระงานและความรับผิดชอบทำให้คุณพักไม่เต็มที่มาระยะหนึ่ง ":"ช่วงนี้คุณสังเกตความเปลี่ยนแปลงของร่างกาย ")+"คุณมีอาการผิดปกติที่รบกวนชีวิต คนใกล้ตัวสังเกตว่าคุณดูไม่เหมือนเดิม คุณจะจัดการอย่างไร";
 if(e.hsType==="exam")return d.symptom+" "+d.exam+" แพทย์เสนอแผนรักษาและติดตามตามภาวะของคุณ";
 if(e.hsType==="follow")return "หลังพบว่าเป็น"+d.name+" เมื่ออายุ "+h.age+" ปี "+(h.status==="treated"?"คุณเคยเริ่มดูแลตัวเอง แต่ยังต้องติดตามผล":"คุณยังดูแลอาการไม่เต็มที่และต้องตัดสินใจอีกครั้ง")+" งาน เงิน และคนรอบตัวอาจได้รับผลจากแผนรักษา";
 return d.severe+" คนใกล้ตัวหรือเจ้าหน้าที่แนะนำให้ได้รับการประเมินอย่างเร่งด่วน คุณต้องตัดสินใจเรื่องสุขภาพและภาระที่ยังค้าง";
 }
 if(e.cw==="adultfamily"){const h=fa(st),p=h.name||st.partnerName||"คนรัก";switch(e.afType){case "intimacy":return "คุณกับ "+st.partnerName+" ซึ่งทั้งคู่เป็นผู้ใหญ่ มีความใกล้ชิดกันมากขึ้น ทั้งสองคนมีโอกาสพูดถึงความพร้อม ความยินยอม และการป้องกันก่อนตัดสินใจว่าจะมีเพศสัมพันธ์หรือไม่";case "pregnancy":return p+" มาบอกว่าประจำเดือนขาดและผลตรวจตั้งครรภ์เป็นบวก เรื่องนี้ไม่ได้อยู่ในแผนเดิม ทั้งสองคนยังต้องตรวจยืนยันและคิดถึงอนาคต";case "decision":return "หลังทราบผลตรวจ "+p+" ต้องการคุยกับคุณและบุคลากรสุขภาพถึงทางเลือกที่เหมาะสม การตัดสินใจเกี่ยวกับร่างกายของเธอเป็นของเธอ คุณจะรับผิดชอบและให้การสนับสนุนอย่างไร";case "birth":return "หลังจาก "+p+" เลือกดำเนินการตั้งครรภ์ต่อและได้รับการดูแล ถึงเวลาที่ลูกของคุณเกิดแล้ว ชีวิตประจำวันและค่าใช้จ่ายกำลังจะเปลี่ยนไป";case "parent":return "ลูกยังเล็ก คุณต้องจัดเวลาเลี้ยงดูและค่าใช้จ่าย"+(partner(st)&&st.partnerName===p?" ร่วมกับ "+p:" แม้ชีวิตคู่กับ "+p+" อาจเปลี่ยนไป")+" ขณะเดียวกันคุณยังมีเส้นทางชีวิตของตัวเอง";}}
 return prev.story(e,st);
};
W.choices=(e,st,s)=>{
 if(e.cw==="healthstory"){const h=health(st),t=s.stats,a=e.age,typ=h.type||diagnose(s,a),cost=t.m>=2500?2500:0,care=cost?{m:-cost}:{};const save=(status,extra={})=>({healthRoute:status,healthType:typ,...extra});
 switch(e.hsType){
 case "symptom":return [c("นัดพบแพทย์เพื่อหาสาเหตุ","คุณได้เข้ารับการประเมินอาการแทนการเดาโรคด้วยตัวเอง",{responsibility:3,stress:-2},save("symptom"),0),c("ขอคนที่ไว้ใจช่วยจัดการนัดและภาระที่ค้าง","คุณได้รับความช่วยเหลือและเข้ารับการตรวจ",{r:3,energy:3},save("symptom"),1),c("พักก่อนและขอรับการตรวจเมื่ออาการไม่ดีขึ้น","คุณได้พักแต่ยังจำเป็นต้องประเมินสาเหตุ อาการกลับมารบกวนอีก",{energy:3,physical:-1},save("symptom"),2),c("ไม่สนใจอาการและทำสิ่งเดิมต่อ","อาการไม่ได้รับการประเมิน สุขภาพเริ่มแย่ลง",{physical:-7,stress:5},save("unexamined"),3)];
 case "exam":return [c(cost?"รับแผนรักษาและกันเงินไว้สำหรับการดูแล":"รับแผนรักษาและปรึกษาเรื่องสิทธิค่ารักษา","คุณเริ่มการรักษาและได้วันนัดติดตาม",{...care,physical:5,stress:-4,energy:3},save("treated"),0),c("ขอปรับเวลางานและเริ่มรักษาตามคำแนะนำ","คุณลดภาระบางอย่างเพื่อให้การดูแลสุขภาพเป็นไปได้จริง",{physical:6,energy:7,stress:-6,career:-1},save("treated"),1),c("ขอความเห็นเพิ่มเติมและติดตามผลตรวจตามนัด","คุณยังไม่ได้หยุดการดูแล แต่ขอข้อมูลเพิ่มเพื่อเลือกแผนที่เหมาะสม",{knowledge:2,problem:3,stress:-1},save("diagnosed"),2),c("เลื่อนการรักษาออกไปเพราะยังอยากทำงานตามเดิม","อาการยังไม่ได้รับการควบคุมและอาจเกิดภาวะแทรกซ้อน",{physical:-8,stress:4},save("delay"),3)];
 case "follow":return [c("ไปตามนัดและปรับพฤติกรรมตามแผนแพทย์","อาการดีขึ้นและแพทย์ยังติดตามโรคอย่างต่อเนื่อง",{...care,physical:8,energy:5,stress:-5},save("treated"),0),c("ขอคนใกล้ตัวช่วยดูแลกิจวัตรและรักษาต่อ","คุณได้รับแรงสนับสนุนและไม่ต้องฝืนร่างกายเท่าเดิม",{physical:6,r:4,energy:6},save("treated"),1),c("รักษาแต่ยังแบ่งเวลาให้สุขภาพไม่มากนัก","อาการบางส่วนดีขึ้นแต่ยังต้องติดตามและปรับภาระ",{physical:2,stress:1},save("diagnosed"),2),c("ขาดนัดและกลับไปใช้ชีวิตแบบเดิม","ความเสี่ยงเพิ่มขึ้นและร่างกายเริ่มรับภาระไม่ไหว",{physical:-9,energy:-5,stress:5},save("delay"),3)];
 case "crisis":return [c("เข้ารับการรักษาเร่งด่วนและทำตามแผนแพทย์","คุณได้รับการดูแลภาวะที่ทรุดลงและต้องพักฟื้น",{...care,physical:12,energy:6,stress:-5},save("treated",{healthCrisis:a}),0),c("ให้คนที่ไว้ใจช่วยประสานการรักษาและหยุดภาระชั่วคราว","คุณเข้าถึงการรักษาและลดภาระที่กระทบการฟื้นตัว",{physical:10,energy:8,r:3,career:-2},save("treated",{healthCrisis:a}),1),c("รับการประเมินแต่ยังไม่ยอมลดภาระงาน","แพทย์เตือนว่าการฟื้นตัวอาจไม่ดีหากยังฝืนร่างกาย",{physical:2,energy:-3,stress:3},save("diagnosed",{healthCrisis:a}),2),c("ปฏิเสธการดูแลแม้อาการทรุด","ภาวะเจ็บป่วยรุนแรงขึ้นและโอกาสเสียชีวิตในเกมเพิ่มสูง",{physical:-15,energy:-10,stress:8},save("delay",{healthCrisis:a}),3)];
 }
 }
 if(e.cw==="adultfamily"){const h=fa(st),a=e.age,p=h.name||st.partnerName||"คนรัก",set=(status,extra={})=>({adultFamilyStatus:status,adultFamilyName:p,...extra});switch(e.afType){
 case "intimacy":{const protectedPreg=roll(s,a,101)<.025,unprotectedPreg=roll(s,a,101)<.2;return [c("พูดคุยความพร้อมและมีเพศสัมพันธ์โดยป้องกัน","ทั้งคู่ตกลงด้วยความสมัครใจและใช้การป้องกัน เรื่องราวตัดผ่านช่วงเวลาส่วนตัว",{partner:3,knowledge:2},set(protectedPreg?"pending":"closed"),0),c("มีเพศสัมพันธ์โดยไม่ป้องกันเมื่อทั้งคู่ยินยอม","ทั้งคู่ใช้เวลาส่วนตัวร่วมกัน โดยมีความเสี่ยงตั้งครรภ์ไม่พร้อม",{partner:3,h:2,responsibility:-2},set(unprotectedPreg?"pending":"closed"),1),c("บอกว่ายังไม่พร้อมและเลือกไม่มีกิจกรรมทางเพศ","อีกฝ่ายรับฟังขอบเขตของคุณ ทั้งคู่ยังเลือกใช้เวลาด้วยกันได้",{selfcontrol:3,partner:2},set("closed"),2),c("คุยเรื่องอนาคตและเลื่อนการตัดสินใจ","ทั้งคู่ไม่ต้องเร่งเรื่องความใกล้ชิดก่อนที่จะพร้อม",{patience:3,partner:2},set("closed"),3)];}
 case "pregnancy":return [c("ไปตรวจยืนยันและรับฟังความรู้สึกของเธอ","ผลตรวจยืนยันการตั้งครรภ์ ทั้งคู่ได้ข้อมูลจากบุคลากรสุขภาพ",{responsibility:4,partner:3,stress:3},set("pregnant"),0),c("ขอเวลาตั้งหลักแล้วนัดไปพบแพทย์ด้วยกัน","คุณยอมรับว่าตกใจและยังให้การสนับสนุนเมื่อเธอต้องการ",{stress:4,partner:1},set("pregnant"),1),c("ขอให้ครอบครัวหรือคนที่เธอไว้ใจเข้ามาช่วยเมื่อเธออนุญาต","เธอมีแรงสนับสนุนเพิ่มเติมและสามารถตัดสินใจได้โดยมีข้อมูล",{r:3,responsibility:2},set("pregnant"),2),c("หลีกเลี่ยงบทสนทนาเพราะไม่รู้จะรับมืออย่างไร","เธอรู้สึกโดดเดี่ยวและความไว้ใจลดลง แต่ผลตรวจไม่ได้เปลี่ยนไป",{partner:-6,stress:6,responsibility:-4},set("pregnant"),3)];
 case "decision":{const wantsChild=roll(s,h.age??a,102)<.75;const outcome=wantsChild?"expecting":"closed";const description=wantsChild?"เธอเลือกตั้งครรภ์ต่อ":"เธอตัดสินใจไม่ตั้งครรภ์ต่อหลังรับข้อมูลและการดูแลที่เหมาะสม";return [c("รับฟังและสนับสนุนการตัดสินใจของเธอ พร้อมวางแผนความรับผิดชอบ",description+" คุณทั้งสองตกลงขอบเขตการช่วยเหลือร่วมกัน",{responsibility:5,partner:3},set(outcome),0),c("คุยเรื่องเงิน การเรียนหรืองาน และขอคำปรึกษาร่วมกัน",description+" และทั้งสองคนได้รับข้อมูลเพื่อจัดการภาระตามจริง",{problem:4,security:2},set(outcome),1),c("ยอมรับว่าไม่พร้อมเป็นคู่ชีวิต แต่ยังรับผิดชอบหน้าที่ตามจริง",description+" คุณไม่สัญญาเรื่องความสัมพันธ์ที่ทำไม่ได้ แต่ต้องรับผิดชอบสิ่งที่เกี่ยวข้อง",{i:3,responsibility:3,partner:-3},set(outcome),2),c("ถอนตัวและไม่ยอมพูดถึงความรับผิดชอบ",description+" เธอผิดหวังและต้องพึ่งแรงสนับสนุนจากทางอื่น เรื่องความรับผิดชอบยังคงอยู่",{partner:-8,responsibility:-6,stress:5},set(outcome),3)];}
 case "birth":return [c("ช่วยวางแผนเลี้ยงลูกและเข้ามารับผิดชอบ","ลูกเกิดแล้ว คุณเริ่มบทบาทผู้ปกครองด้วยความตั้งใจ",{child:5,responsibility:4,m:-1500,energy:-3},set("born",{adultFamilyAdd:true}),0),c("ขอแรงสนับสนุนจากครอบครัวและจัดตารางดูแล","ลูกเกิดแล้ว คนที่พร้อมช่วยเข้ามาแบ่งเบาภาระของครอบครัว",{child:4,r:4,m:-1000,energy:-2},set("born",{adultFamilyAdd:true}),1),c("จัดหน้าที่เลี้ยงดูและค่าใช้จ่ายแม้ไม่ได้อยู่ด้วยกัน","ลูกเกิดแล้ว คุณวางหน้าที่ที่มีต่อเด็กโดยไม่บังคับความสัมพันธ์กับอีกฝ่าย",{child:3,responsibility:4,m:-1500},set("born",{adultFamilyAdd:true}),2),c("ยังไม่เข้ามาช่วยเต็มที่","ลูกเกิดแล้ว ภาระส่วนใหญ่ตกกับคนดูแลคนอื่น แต่หน้าที่ของคุณไม่ได้หายไป",{child:-4,responsibility:-5,stress:4},set("born",{adultFamilyAdd:true}),3)];
 case "parent":return [c("แบ่งเวลาให้ลูกและจัดตารางงานใหม่","คุณมีเวลาดูแลลูกมากขึ้นแต่ต้องปรับแผนงานบางส่วน",{child:6,energy:-3,career:-1},set("closed"),0),c("หาทางดูแลร่วมกับผู้ปกครองหรือคนที่ตกลงช่วย","ลูกมีการดูแลที่สม่ำเสมอขึ้นและคุณยังเดินหน้าชีวิตได้",{child:4,r:3,problem:3},set("closed"),1),c("เน้นหารายได้แต่รักษาเวลาติดต่อและหน้าที่ของตน","คุณมีรายได้เพื่อช่วยลูก แต่เวลาที่อยู่ด้วยกันยังจำกัด",{career:3,m:800,child:1,energy:-4},set("closed"),2),c("ละเลยหน้าที่และใช้ชีวิตตามเดิม","ความผูกพันกับลูกลดลงและความขัดแย้งกับผู้ดูแลเพิ่มขึ้น",{child:-7,responsibility:-5,stress:4},set("closed"),3)];
 }}
 return prev.choices(e,st,s);
};
W.after=(st,old,e,n,ch,item)=>{prev.after(st,old,e,n,ch,item);const q=item.careerSet||ch.set||{};
 if(e.cw==="healthstory"){const h=health(old);st.healthArc={...h,status:q.healthRoute||"delay",type:q.healthType||h.type||"other",age:e.hsType==="symptom"?item.age:h.age??item.age,lastAge:item.age,...(q.healthCrisis!==undefined?{crisisAge:q.healthCrisis}:{})};}
 if(e.cw==="adultfamily"){const h=fa(old);st.adultFamily={...h,status:q.adultFamilyStatus||"closed",name:q.adultFamilyName||h.name||old.partnerName,age:["intimacy","birth"].includes(e.afType)?item.age:h.age??item.age,lastAge:item.age};if(q.adultFamilyAdd){const idx=childCount(st);st.children=[...(st.children||[]),{name:["ต้น","ข้าวหอม","ภู","นับดาว","ปลายฟ้า"][idx]||"ลูกคนที่ "+(idx+1),born:item.age,married:false,grand:0}];st.parent="มีลูก";st.parentSince??=item.age;}}
};
// The annual health check applies the health cost of accumulated stress and fatigue even in years without illness scenes.
w.LIFE_HEALTH={riskFactors,roll,annual(s,age,st){if(age<18)return;const t=s.stats,h=health(st),p=working(st),d={};let harm=0;if(p&&t.stress>=65&&t.energy<=45)harm+=3+Math.floor((t.stress-65)/15);if(t.energy<=20)harm+=2;if(t.stress>=85)harm+=2;if(t.drinking>=60)harm+=2;if(t.substance>=45)harm+=3;if(["delay","unexamined"].includes(h.status))harm+=4;else if(h.status==="diagnosed")harm+=1;else if(h.status==="treated")harm=Math.max(0,harm-2);if(age>=75&&t.physical<65)harm+=1;if(harm>0)d.physical=-Math.min(12,harm);if(h.status==="treated"&&t.energy>=50&&t.stress<=50&&t.physical<85)d.physical=(d.physical||0)+2;if(Object.keys(d).length){const changes=L.apply(t,d);if(Object.keys(changes).length)s.history.push({id:"healthyear_"+age,age,title:"สุขภาพสะสมประจำปี",label:"ผลจากสุขภาพ การพักผ่อน และการดูแลต่อเนื่อง",result:harm?"ร่างกายได้รับผลจากปัจจัยเสี่ยงสะสม":"การดูแลต่อเนื่องช่วยให้สภาพร่างกายดีขึ้น",changes,free:{kind:"health"}});}},risk(s,age,st={}){const r=prev.risk(s,age),h=health(st),t=s.stats,stress=Math.max(0,t.stress-65),fatigue=Math.max(0,40-t.energy),poor=Math.max(0,45-t.physical);let extra=stress*.0009+fatigue*.0012+poor*.0025+(["delay","unexamined"].includes(h.status)?.045:h.status==="diagnosed"?.012:0)+(h.crisisAge===age&&h.status==="delay"?.14:0);if(h.status==="treated")extra*=.45;return {chance:bound(r.chance+extra,0,.68),cause:["delay","unexamined"].includes(h.status)?"ภาวะแทรกซ้อนจากการเจ็บป่วยที่ยังไม่ได้รับการดูแล":extra>.035?"ภาวะสุขภาพทรุดจากปัจจัยเสี่ยงสะสม":r.cause};}};
F.risk=(s,a,st={})=>w.LIFE_HEALTH.risk(s,a,st);
F.death=(s,a,st={})=>{const r=F.risk(s,a,st);return roll(s,a,819)<r.chance?{age:a,cause:r.cause}:null;};
})(window);


// Distinct recurring characters. Teen meetings remain age-appropriate; adult partners have their own preferences.
(function(w){
"use strict";
const W=w.CAREER_WORLD,P=w.PEOPLE,F=w.LIFE_FREEDOM,S=w.STORY,prev={allowed:W.allowed,story:W.story,choices:W.choices,after:W.after,contact:F.contact};
const profiles=[["aim","อิ่ม",13,"creative",42,"เด็กชอบวาดการ์ตูน","สมุดการ์ตูนที่หล่นไว้","เธอวาดเรื่องตลกเกี่ยวกับโรงเรียนแต่ไม่กล้าให้ใครอ่าน","งานประกวดการ์ตูนที่เธอเกือบถอนตัว","เธอได้รับคำวิจารณ์แรงและชวนคุณไปส่งผลงานด้วยกัน"],["bai","ใบชา",13,"knowledge",22,"เด็กชอบวิทยาศาสตร์","ดาวที่หายไปจากแผนที่","เธอชวนคุณดูดาวในกิจกรรมโรงเรียนและพบว่าข้อมูลของทีมผิด","คำเชิญจากชมรมดาราศาสตร์","เธอได้โอกาสไปค่ายและอยากรู้ว่าคุณสนใจสิ่งเดียวกันจริงไหม"],["fern","เฟื่อง",14,"social",58,"เด็กกิจกรรมที่ชอบคุยกับทุกคน","ตู้เพลงในงานโรงเรียน","เธอชวนคุณจัดคิวเพลงให้เพื่อนที่กำลังทะเลาะกัน","วันงานที่เพื่อนลือว่าคุณสองคนคบกัน","เธอถามว่าจะรับมือข่าวลือโดยยังเคารพกันอย่างไร"],["namfon","ฝนใหม่",14,"physical",78,"นักแบดมินตัน","ไม้แบดที่ขาดก่อนแข่ง","เธอขอยืมไม้สำรองก่อนแข่งและชวนคุณซ้อมด้วย","คู่แข่งจากโรงเรียนอื่น","เธอได้รับคำชวนไปซ้อมอีกทีมและไม่อยากให้คุณรู้สึกว่าถูกทิ้ง"],["mali","มะลิ",15,"e",58,"เด็กชอบดูแลสัตว์","แมวที่ไม่มีเจ้าของ","เธอชวนคุณประสานผู้ใหญ่เพื่อหาบ้านให้แมวที่พบหน้าโรงเรียน","ข่าวจากบ้านใหม่ของแมว","เธออยากชวนคุณไปเยี่ยมแมวเมื่อเจ้าของใหม่อนุญาต"],["ploydao","พลอยดาว",15,"confidence",55,"เด็กสายการแสดง","บทละครที่ไม่มีคู่แสดง","เธอชวนซ้อมบทละครบนเวทีหลังนักแสดงถอนตัว","บทสุดท้ายก่อนปิดม่าน","เธอได้รับข้อเสนอให้แสดงต่อและอยากคุยว่าความสัมพันธ์ของคุณคืออะไร"],["tarn","ตาลหวาน",16,"skill",35,"เด็กชอบเขียนเกม","เกมที่เปิดแล้วค้าง","เธอสร้างเกมส่งประกวดแต่ติดปัญหาก่อนส่ง","คนทดสอบเกมกลุ่มแรก","เธอแก้เกมเสร็จแล้วและอยากชวนคุณทำโปรเจกต์ถัดไป"],["view","วิว",16,"i",58,"เด็กนิสัยตรงไปตรงมา","รูปที่เพื่อนแกล้งตัดต่อ","เธอขอให้คุณช่วยหยุดข่าวลือในกลุ่มโดยไม่ประจานใคร","คำขอโทษที่ไม่ต้องการคนดู","เธออยากรู้ว่าคุณจริงใจกับเธอแม้ไม่มีเพื่อนมองอยู่ไหม"],["praewa","แพรวา",17,"ambition",55,"เด็กมีแผนเรียนต่อชัดเจน","รถเที่ยวสุดท้ายวันเปิดบ้าน","เธอชวนไปงานเปิดบ้านแล้วพลาดรถตามแผน ทั้งคู่ต้องแจ้งผู้ใหญ่และจัดการเดินทาง","ใบตอบรับคนละจังหวัด","เธอได้โอกาสเรียนต่ออีกจังหวัดและไม่อยากให้ใครทิ้งอนาคตเพื่อเธอ"],["nicha","ณิชา",18,"knowledge",35,"นักศึกษาที่รักการอ่าน","หนังสือที่มีข้อความเขียนไว้","เธอพบข้อความในหนังสือมือสองและชวนตามหาที่มาผ่านร้านหนังสือ","ร้านหนังสือที่กำลังปิดกิจการ","เธอชวนจัดกิจกรรมอำลาร้านและถามว่าคุณจะอยากพบกันอีกหรือไม่"],["meena","มีนา",19,"creative",35,"นักออกแบบเสื้อผ้า","ตลาดนัดที่มีฝนตก","เธอขายเสื้อที่ออกแบบเองและต้องย้ายราวเสื้อก่อนเปียก","คำสั่งซื้อที่ใหญ่เกินกำลัง","เธอได้รับงานก้อนแรกและอยากคุยกับคนที่เข้าใจเป้าหมาย"],["jane","เจนจิรา",20,"problem",58,"นักศึกษาวิศวกรรม","รถที่เสียกลางกิจกรรม","เธอช่วยทีมจัดการอุปกรณ์ที่ขัดข้องก่อนเริ่มงาน","โครงการที่ต้องเลือกระหว่างสองทีม","เธอได้ข้อเสนอใหม่และอยากรู้ว่าคุณสนับสนุนความฝันของเธอได้ไหม"],["primrose","พริมโรส",20,"social",62,"คนชอบเดินทางและถ่ายภาพ","ภาพผิดคนในงานนิทรรศการ","เธอขอช่วยตามหาคนในภาพที่จัดแสดงผิดชื่อ","รูปถ่ายที่อยากเก็บไว้เอง","เธอชวนออกทริปถ่ายภาพและอยากให้ความสัมพันธ์ชัดเจน"],["fahmai","ฟ้าใหม่",21,"skill",38,"โปรแกรมเมอร์ฝึกงาน","โปรแกรมที่พังกลางงานเดโม","เธอประสานทีมเพื่อแก้ปัญหาก่อนลูกค้ามาถึง","ข้อเสนอจากบริษัทต่างเมือง","เธอมีโอกาสย้ายงานและอยากรู้ว่าคุณเคารพเส้นทางของเธอไหม"],["bua","บัวแก้ว",22,"e",60,"อาสาสมัครที่ชอบทำอาหาร","ครัวที่ขาดคนหนึ่งมือ","เธอชวนช่วยจัดอาหารในงานชุมชนที่คนมามากกว่าคาด","จดหมายขอบคุณจากคนแปลกหน้า","เธอได้รับคำขอบคุณและอยากฉลองความสำเร็จเล็กๆ กับคุณ"],["namwan","หวานใจ",22,"confidence",62,"นักดนตรีที่ไม่กลัวเวที","เพลงที่คนฟังร้องตาม","เธอชวนคุณไปดูการแสดงครั้งแรกที่ร้านเล็กๆ","คืนที่เธอปฏิเสธค่ายเพลง","เธอไม่อยากเสียสิทธิในผลงานและถามว่าคุณเข้าใจการตัดสินใจไหม"],["sai","ทรายทอง",23,"discipline",60,"นักวิ่งที่มีตารางชีวิตชัดเจน","เส้นทางวิ่งที่ปิดกะทันหัน","เธอชวนเปลี่ยนเส้นทางและเตรียมตัวแข่งด้วยกัน","ก่อนรายการวิ่งที่สำคัญที่สุด","เธออยากรักษาเวลาซ้อมโดยไม่ให้ความสัมพันธ์กลายเป็นภาระ"],["lin","ลินดา",24,"i",65,"นักบัญชีที่จริงจังเรื่องความซื่อสัตย์","ใบเสร็จที่ไม่ใช่ของร้าน","เธอพบยอดผิดในกิจกรรมสาธารณะและชวนตรวจสอบผ่านผู้จัด","ข้อเสนอที่ไม่อยากให้ใครรู้","เธอถามตรงๆ ว่าคุณจะเห็นด้วยไหมหากเธอปฏิเสธผลประโยชน์ที่ไม่ชอบธรรม"],["nune","นุ่นนภา",25,"security",45,"เจ้าของร้านขนมที่กำลังตั้งตัว","กล่องเค้กที่ลูกค้าจองซ้ำ","เธอต้องแก้ปัญหาคิวออเดอร์ก่อนร้านเปิด","วันที่ต้องเลือกขยายร้าน","เธอขอความเห็นเรื่องอนาคตธุรกิจโดยไม่อยากให้ใครสั่งแทน"],["kwan","ขวัญฤดี",25,"h",55,"คนรักชีวิตเรียบง่าย","มื้อเย็นที่ไฟดับ","เธอชวนจัดโต๊ะกินข้าวแบบง่ายๆ แทนการยกเลิกนัด","วันหยุดที่ไม่มีแผน","เธอชอบความสบายใจมากกว่าของแพงและถามถึงชีวิตที่คุณอยากมี"],["pimdao","พิมดาว",26,"ambition",67,"ผู้จัดการโครงการที่มีเป้าหมายสูง","งานเปิดตัวที่เกือบถูกยกเลิก","เธอประสานงานอย่างหนักเมื่อสถานที่จัดงานมีปัญหา","ตำแหน่งใหม่กับตารางชีวิตเดิม","เธอได้รับการเลื่อนตำแหน่งและอยากตกลงเวลาที่ให้กันได้จริง"],["jib","จิ๊บจ้อย",27,"social",65,"นักจัดรายการอารมณ์ดี","ไมค์ที่เปิดผิดจังหวะ","เธอหัวเราะกับความผิดพลาดในการจัดรายการและชวนคุณช่วยแก้บรรยากาศ","ข่าวลือหลังรายการสด","เธออยากให้แยกชีวิตสาธารณะกับชีวิตส่วนตัว"],["rose","โรสลิน",28,"m",25000,"นักลงทุนที่ชอบความมั่นคง","โต๊ะสัมมนาที่คนชอบอวดฐานะ","เธอถามคุณเกี่ยวกับเป้าหมายการเงินมากกว่ารถหรือยี่ห้อเสื้อผ้า","ข้อเสนอร่วมลงทุนก่อนตกลงคบ","เธอชวนคุยเรื่องขอบเขตการเงินและอยากรักษาความเป็นอิสระของทั้งสองคน"],["jan","จันทร์ฉาย",29,"reliable",62,"นักกฎหมายที่ให้ค่ากับความน่าเชื่อถือ","คำพูดที่ต้องมีหลักฐาน","เธอช่วยงานอบรมสิทธิชุมชนและชวนคุณคุยถึงความยุติธรรม","เรื่องส่วนตัวที่ไม่ควรเป็นข้อแลกเปลี่ยน","เธอต้องการมั่นใจว่าคุณจะไม่ใช้ความสนิทเป็นทางลัดในงาน"],["dara","ดาริน",30,"creative",48,"ช่างภาพที่ชอบความเป็นอิสระ","ภาพคู่ที่ไม่ได้ขออนุญาต","เธอพบว่ามีคนเผยแพร่ภาพงานของเธอโดยไม่ขอและอยากแก้เรื่องอย่างเป็นธรรม","นิทรรศการที่ไม่มีชื่อคนรัก","เธออยากรักษาพื้นที่ทำงานของตัวเองแม้มีความสัมพันธ์"],["mai","ไหมแก้ว",31,"r",55,"แม่เลี้ยงเดี่ยวที่มีชีวิตของตัวเอง","นัดกาแฟที่ต้องเลื่อนเพราะลูกป่วย","เธอขอโทษที่นัดเลื่อนและบอกตรงๆ ว่าลูกมีความสำคัญ","งานวันเกิดที่มีคนสำคัญหลายคน","เธออยากคุยว่าการคบกันจะไม่กดดันลูกหรือครอบครัวเดิมอย่างไร"],["gin","กิ่งฟ้า",32,"skill",55,"เจ้าของสตูดิโองานฝีมือ","ชิ้นงานที่ลูกค้าขอแก้ไม่หยุด","เธอชวนคุณดูงานที่ทำด้วยมือและเล่าว่าการตั้งขอบเขตยากแค่ไหน","คำชวนทำงานร่วมกัน","เธออยากแยกข้อตกลงงานออกจากความรู้สึกส่วนตัว"],["cream","ครีมมี่",33,"confidence",63,"พิธีกรที่ต้องรับมือสายตาคน","บัตรเชิญที่สื่ออยากถ่ายรูปคู่","เธอขอให้คุณตกลงเรื่องความเป็นส่วนตัวก่อนเข้างาน","บทสัมภาษณ์เรื่องคนสำคัญ","เธออยากรู้ว่าคุณรับมือชื่อเสียงโดยไม่ใช้ความสัมพันธ์เป็นเครื่องมือได้ไหม"],["or","อรอินทร์",34,"e",65,"ผู้ดูแลโครงการเพื่อชุมชน","กล่องบริจาคที่มีคนถามถึง","เธอชวนช่วยอธิบายรายการสิ่งของให้ชุมชน","คืนที่งานอาสาจบช้ากว่าที่คิด","เธออยากคุยถึงการมีเวลาร่วมกันโดยไม่ต้องทิ้งงานที่เชื่อ"],["mew","มิวสิริ",35,"patience",60,"คนที่เพิ่งผ่านการเลิกรา","โต๊ะกาแฟที่มีรูปเก่า","เธอเล่าว่ายังไม่พร้อมให้ใครรีบเข้ามาแทนความทรงจำเดิม","วันที่เธอกล้าทำแผนใหม่","เธอถามว่าคุณจะเปิดพื้นที่ให้กันโดยไม่เร่งความสัมพันธ์ได้ไหม"],["chom","ชมพูแพร",36,"problem",65,"วิศวกรที่ชอบแก้โจทย์ยาก","งานที่ต้องแก้ในวันหยุด","เธอมีปัญหางานที่ต้องประสานหลายฝ่ายและอยากได้คนที่เข้าใจเวลาส่วนตัว","แผนย้ายทีมครั้งใหญ่","เธอเลือกเส้นทางที่ไม่ตรงกับความคาดหวังของคนรอบตัว"],["waew","แววดาว",38,"fair",60,"ผู้ประกอบการที่ต้องการความยุติธรรม","คู่ค้าที่ขอเงื่อนไขพิเศษ","เธอไม่อยากใช้อำนาจหรือความสัมพันธ์เพื่อเอาเปรียบคนอื่น","คำชวนเข้าหุ้นจากคนสนิท","เธออยากตกลงขอบเขตธุรกิจก่อนคุยความสัมพันธ์"],["ploymay","เมษาพลอย",40,"h",58,"คนรักการเดินทางที่กลับมาทำสิ่งที่ชอบ","ตั๋วรถไฟที่เหลืออีกหนึ่งใบ","เธอชวนไปเที่ยวกลุ่มและถามว่าคุณชอบเดินทางแบบใด","เมืองที่อยากกลับไปอีกครั้ง","เธอชวนวางแผนทริปที่ต่างคนต่างรับผิดชอบได้"],["siri","สิริกานต์",42,"i",68,"ผู้บริหารที่จริงจังกับความสัมพันธ์","มื้อค่ำหลังประชุมใหญ่","เธอไม่อยากให้บทบาทในงานกำหนดคุณค่าของชีวิตส่วนตัว","คำถามที่ไม่เกี่ยวกับตำแหน่ง","เธออยากรู้ว่าหากวันหนึ่งไม่มีตำแหน่งแล้วคุณยังจะสนใจเธอไหม"],["ploynam","นทีพร",44,"r",60,"ผู้หญิงที่ให้ความสำคัญกับลูกและเพื่อน","โต๊ะอาหารที่ลูกขอเลือกเอง","เธอชวนพบในพื้นที่ที่ไม่กดดันครอบครัวของเธอ","วันรวมญาติที่ไม่ได้มีคำตอบง่าย","เธออยากคุยว่าความสัมพันธ์ใหม่จะไม่ทำให้คนในบ้านรู้สึกถูกแทนที่"],["fai","ฝ้ายคำ",46,"creative",55,"เจ้าของร้านเครื่องปั้นดินเผา","ชามที่แตกก่อนส่งงาน","เธอหัวเราะกับความผิดพลาดและชวนคุณทดลองปั้นชิ้นใหม่","งานแสดงชิ้นแรกหลังห่างหาย","เธออยากทำสิ่งที่รักโดยไม่ต้องพิสูจน์ความสำเร็จให้ใครดู"],["belle","เบลล์มณี",48,"security",52,"คนที่สร้างฐานะด้วยตัวเอง","ห้องพักที่ต้องตัดสินใจซ่อม","เธอเล่าว่าเคยมีปัญหาเรื่องเงินร่วมกับคนรักเก่าและตั้งกติกาชัดเจน","บัญชีที่อยากแยกไว้","เธออยากคบโดยไม่รวมทรัพย์สินเพียงเพราะรู้สึกดีต่อกัน"],["rin","รินทิพย์",50,"e",65,"ครูที่ชอบเรียนรู้สิ่งใหม่","ชั้นเรียนภาษาที่ไม่มีการสอบ","เธอชวนหัวเราะกับการออกเสียงผิดและแลกเปลี่ยนประสบการณ์","ทริปของเพื่อนร่วมชั้น","เธออยากมีคู่ที่พร้อมเรียนรู้โดยไม่กลัวเริ่มต้นใหม่"],["mon","มนต์ฟ้า",53,"knowledge",58,"นักเขียนที่รักพื้นที่ส่วนตัว","จดหมายที่ส่งถึงคนผิด","เธอเล่าเรื่องการเขียนและอยากให้คุณช่วยส่งคืนจดหมายโดยไม่เปิดอ่าน","หนังสือที่เธออยากตีพิมพ์","เธอต้องตัดสินใจว่าจะเผยเรื่องส่วนตัวมากแค่ไหน"],["ann","แอนนารี",56,"social",65,"คนที่กลับมาพบเพื่อนหลังลูกโต","งานรวมรุ่นที่มีคนจำผิด","เธอชวนคุยเรื่องชีวิตที่เปลี่ยนไปด้วยอารมณ์ขัน","งานเลี้ยงที่ไม่อยากไปคนเดียว","เธอถามว่าคุณพร้อมเป็นเพื่อนร่วมทางโดยไม่รีบสรุปความสัมพันธ์ไหม"],["daow","ดาวเดือน",60,"h",60,"คนชอบเต้นและออกงานชุมชน","รองเท้าเต้นคู่ใหม่","เธอชวนลองเต้นในงานที่เปิดรับทุกวัย","งานเต้นรำที่ลูกไม่เห็นด้วย","เธออยากรักษาสิทธิเลือกความสุขของตัวเองแม้ลูกห่วง"],["tawan","ตะวันฉาย",63,"physical",62,"นักเดินทางที่ดูแลสุขภาพ","สวนที่ดอกไม้บานช้ากว่าปกติ","เธอชวนเดินชมสวนตามกำลังและแบ่งเวลาพัก","ทริปที่ต้องปรับตามสุขภาพ","เธออยากมีเพื่อนร่วมทางที่ฟังกันและไม่ฝืนร่างกาย"],["panka","ปานแก้ว",66,"reliable",65,"เจ้าของกิจการที่วางมือบางส่วน","ร้านที่ส่งต่อให้คนรุ่นใหม่","เธอเล่าถึงความสุขจากการมีเวลาของตัวเอง","ข้อตกลงชีวิตที่ไม่เกี่ยวกับมรดก","เธออยากให้ความสัมพันธ์ใหม่แยกจากทรัพย์สินของลูกหลาน"],["bunnag","บุนนาค",69,"e",66,"อาสาสมัครที่มีชีวิตสังคมของตัวเอง","กลุ่มอ่านหนังสือใต้ต้นไม้","เธอชวนคุณร่วมวงเล่าเรื่องและฟังคนรุ่นใหม่","ข่าวที่ทำให้เพื่อนในชมรมเสียใจ","เธออยากได้คนที่ช่วยรับฟังโดยไม่พยายามตัดสินชีวิตคนอื่น"],["saeng","แสงเดือน",72,"patience",62,"คนที่เคยสูญเสียคู่ชีวิต","เพลงที่ยังฟังอยู่ทุกเช้า","เธอพูดถึงความทรงจำของคนรักเก่าและความสุขที่ยังหาได้","ภาพถ่ายคู่เก่าบนโต๊ะ","เธอถามว่าคุณรับความทรงจำในอดีตของเธอได้โดยไม่แข่งขันกับคนที่จากไปไหม"],["napa","นภาลัย",76,"r",60,"คนชอบพบครอบครัวแต่รักความเป็นอิสระ","มื้อเช้าในร้านประจำ","เธอชวนคุยถึงเรื่องลูกหลานและกิจกรรมที่อยากทำ","คำถามจากลูกหลานเรื่องคนรักใหม่","เธออยากตกลงว่าทั้งสองคนจะรักษาความเป็นอิสระและให้ครอบครัวค่อยๆ เข้าใจอย่างไร"],["thip","ทิพย์อรุณ",82,"e",60,"คนรักดนตรีและความทรงจำ","บทเพลงที่เล่นไม่จบ","เธอชวนฟังดนตรีในชมรมโดยไม่ต้องแสดงให้ใครดู","นัดฟังเพลงที่ไม่ต้องออกจากบ้าน","เธออยากปรับรูปแบบการพบกันตามสุขภาพและความสบายใจของทั้งคู่"]];
const by=new Map(profiles.map(x=>[x[0],x])),names=new Map(profiles.map(x=>[x[1],x]));
const paired=st=>["คบกัน","อยู่ด้วยกัน"].includes(st.relationship)&&!!st.partnerName;
const seen=(st,k)=>st.womenStories?.[k];
const score=(p,s)=>s.stats[p[3]]??0;
const roll=(s,a,k)=>w.LIFE_HEALTH.roll(s,a,k);
const c=(label,result,delta,set,n)=>({label,result,delta,set,baseIndex:n});
for(const [k,name,age,stat,min,person,title,story,title2,story2] of profiles){for(let j=0;j<2;j++)S.push({id:"woman_"+k+"_"+j,age:age+j,order:89.4+j*.1,title:j?title2:title,story:j?story2:story,cw:"womanstory",womanKey:k,womanStage:j,custom:true,choices:[0,1,2,3].map(n=>c("ทางเลือก "+(n+1),"ผลการตัดสินใจ",{}, {},n))});}
W.allowed=(e,st,s)=>{if(e.cw!=="womanstory")return prev.allowed(e,st,s);const p=by.get(e.womanKey),h=seen(st,p[0]),a=e.age;if(!e.womanStage){const i=profiles.indexOf(p);return !h&&!st.people?.[p[1]]&&(score(p,s)>=p[4]||roll(s,a,1400+i)<.38)&&roll(s,a,1500+i)<.78;}return h?.step===1&&["friend","interest"].includes(h.route)&&!!st.people?.[p[1]]&&P.privateOK(st,p[1]);};
W.story=(e,st)=>{if(e.cw!=="womanstory")return prev.story(e,st);const p=by.get(e.womanKey),h=seen(st,p[0]);return e.womanStage?p[1]+" "+p[9]+(h?.route==="interest"?" เธอจำได้ว่าคุณเคยตั้งใจทำความรู้จักเธอ":" ทั้งคู่เคยรู้จักกันในฐานะเพื่อน"):(p[1]+" เป็น"+p[5]+" "+p[7]+" คุณมีโอกาสรู้จักเธอจากเหตุการณ์นี้");};
W.choices=(e,st,s)=>{if(e.cw!=="womanstory")return prev.choices(e,st,s);const p=by.get(e.womanKey),name=p[1],teen=e.age<18,h=seen(st,p[0]),can=score(p,s)>=p[4],available=!paired(st)&&!st.teenBond,offer=can&&available&&h?.route==="interest",set=(route,more={})=>({womanRoute:route,womanName:name,...more});if(!e.womanStage){return [c("ร่วมกิจกรรมและทำความรู้จัก "+name,"คุณได้พูดคุยกับเธอจากเรื่องที่เธอสนใจ"+(can?" เธอรู้สึกว่าคุณมีสิ่งที่เข้ากันได้":" แต่ยังต้องใช้เวลารู้จักกัน"),{social:3,friend:2},set(available?"interest":"friend"),0),c("ทำความรู้จักกันแบบเพื่อน","เธอยินดีแลกเปลี่ยนเรื่องราวโดยไม่ต้องพัฒนาเป็นคนรัก",{friend:3,network:1},set("friend"),1),c("ช่วยเฉพาะเรื่องที่กำลังเกิดขึ้นแล้วขอตัว","เธอขอบคุณ แต่ทั้งคู่ยังไม่ได้ตกลงติดต่อกันต่อ",{experience:2,e:1},set("end"),2),c("ไม่เข้าร่วมและใช้เวลาตามแผนเดิม","คุณไม่ได้เปิดเรื่องนี้ต่อและมีสิทธิเลือกความสนใจของตัวเอง",{selfcontrol:2,h:1},set("end"),3)];}
const first=offer?c("ถามว่าเธออยากลองคบกันไหม",name+" บอกว่ารู้สึกดีเช่นกัน ทั้งคู่ตกลงลองคบโดยให้เกียรติพื้นที่ของกันและกัน",{partner:5,h:3,confidence:2},set("partner",{womanPartner:true}),0):available?c("บอกความรู้สึกตรงๆ และถามว่าเธอคิดอย่างไร",name+" บอกว่ายังไม่ได้รู้สึกแบบเดียวกัน คุณได้รับคำตอบโดยไม่ต้องเดา",{confidence:2,e:2},set("friend"),0):c("รักษาขอบเขตและไม่ให้ความหวังเกินเพื่อน","ทั้งคู่รับรู้ขอบเขตความสัมพันธ์และไม่กดดันกัน",{i:3,friend:3},set("friend"),0);
return [first,c("ชวนคุยและสนับสนุนสิ่งที่เธออยากทำโดยไม่เร่งสถานะ","เธอรู้สึกว่าคุณให้พื้นที่กับชีวิตของเธอ ทั้งคู่ยังติดต่อกันได้",{friend:4,social:2},set("friend"),1),c("บอกว่าอยากรักษาระยะและไปใช้ชีวิตตามทางของตัวเอง","เธอรับคำตอบและทั้งคู่ไม่ต้องฝืนรักษาความสนิท",{selfcontrol:3,h:1},set("end"),2),c("พยายามให้เธอเปลี่ยนแผนตามใจคุณ","เธอรู้สึกกดดันและเลือกเว้นระยะจากคุณ",{friend:-4,respect:-3},set("blocked"),3)];};
W.after=(st,old,e,n,ch,item)=>{prev.after(st,old,e,n,ch,item);if(e.cw!=="womanstory")return;const p=by.get(e.womanKey),q=item.careerSet||ch.set||{},route=q.womanRoute||"end",name=p[1];st.womenStories={...(old.womenStories||{}),[p[0]]:{step:e.womanStage+1,route}};if(route!=="end"||st.people?.[name]){st.people={...st.people,[name]:{...(st.people?.[name]||{}),feeling:route==="blocked"?"เว้นระยะ":"รู้สึกดี",boundary:route==="blocked"||route==="end"?"ไม่ติดต่อ":route==="friend"?"เพื่อนเท่านั้น":"เปิดใจ",affinity:route==="partner"?78:route==="interest"?65:route==="friend"?55:25}};}if(q.womanPartner){st.relationship="คบกัน";st.partnerName=name;st.pastRomance="ใช่";st.candidate="";if(item.age<18){st.teenBond=name;st.teenRelationship="คบกัน";}}};
F.contact=(st,s,a,name,type)=>{const p=names.get(name);if(!p||type!=="ask")return prev.contact(st,s,a,name,type);if(a<20||paired(st)||!P.privateOK(st,name)||st.people?.[name]?.boundary==="เพื่อนเท่านั้น"||F.affinity(st.people[name])<65||F.charm(s.stats)<72)return null;const accept=score(p,s)>=p[4]&&F.affinity(st.people[name])>=70;const action={key:"contact_"+name+"_ask",person:name,title:"★ ขอ "+name+" เป็นแฟน",result:accept?name+" ตอบตกลงด้วยความสมัครใจและทั้งคู่เริ่มคบกัน":name+" บอกว่ายังไม่พร้อม คุณเคารพคำตอบ",delta:accept?{partner:6,confidence:3}:{confidence:2,patience:2},patch:{contact:name,kind:accept?"partner":"declined",affinity:accept?8:0}};return F.valid(st,s,a,action)?action:null;};
w.WOMEN_STORIES={profiles};
})(window);
