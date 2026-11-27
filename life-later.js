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
