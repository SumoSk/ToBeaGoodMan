window.CAREER_CATALOG=[
  {
    "id": "doctor",
    "name": "แพทย์",
    "group": "สุขภาพ",
    "years": 6,
    "req": "science",
    "level": 35,
    "story": "คนไข้รอจำนวนมากแต่เคสตรงหน้าต้องประเมินเพิ่ม",
    "choices": [
      {
        "label": "ประเมินอย่างรอบคอบ",
        "result": "คิวช้าลงแต่ข้อมูลชัดขึ้น",
        "delta": {
          "responsibility": 4,
          "knowledge": 3
        }
      },
      {
        "label": "ขอทีมช่วยจัดคิว",
        "result": "ภาระกระจายและดูแลต่อเนื่อง",
        "delta": {
          "problem": 4,
          "network": 3
        }
      },
      {
        "label": "รีบรับปากผลที่ยังไม่รู้",
        "result": "ผู้ป่วยร้องเรียนและต้องแก้ความเข้าใจ",
        "delta": {
          "i": -5,
          "stress": 7
        }
      },
      {
        "label": "ปรับตารางให้เหมาะกับกำลัง",
        "result": "รายได้ไม่เพิ่มแต่มีเวลาพัก",
        "delta": {
          "energy": 4,
          "career": -1
        }
      }
    ]
  },
  {
    "id": "nurse",
    "name": "พยาบาล",
    "group": "สุขภาพ",
    "years": 4,
    "req": "science",
    "level": 25,
    "story": "เพื่อนร่วมเวรลาป่วยตรงวันที่คุณมีนัดสำคัญ",
    "choices": [
      {
        "label": "ประสานจัดเวรทดแทน",
        "result": "ทีมมีแผนดูแลต่อเนื่อง",
        "delta": {
          "problem": 4,
          "responsibility": 4
        }
      },
      {
        "label": "ช่วยเท่าที่ไหว",
        "result": "เพื่อนขอบคุณแต่คุณเลื่อนนัด",
        "delta": {
          "friend": 4,
          "energy": -4
        }
      },
      {
        "label": "รับทุกเวร",
        "result": "ความเหนื่อยกระทบชีวิต",
        "delta": {
          "stress": 8,
          "energy": -8
        }
      },
      {
        "label": "ส่งมอบงานแล้วรักษาวันพัก",
        "result": "คุณได้พักและทีมมีผู้ดูแลต่อ",
        "delta": {
          "selfcontrol": 4,
          "h": 3
        }
      }
    ]
  },
  {
    "id": "pharm",
    "name": "เภสัชกร",
    "group": "สุขภาพ",
    "years": 6,
    "req": "science",
    "level": 30,
    "story": "ร้านอยากปิดยอดขายแต่ข้อมูลผู้รับบริการไม่ครบ",
    "choices": [
      {
        "label": "ประเมินและส่งต่อเมื่อจำเป็น",
        "result": "ร้านเสียยอดแต่รักษามาตรฐาน",
        "delta": {
          "i": 5,
          "reliable": 4
        }
      },
      {
        "label": "ปรึกษาผู้ร่วมวิชาชีพ",
        "result": "ได้ข้อมูลเพิ่ม",
        "delta": {
          "knowledge": 4,
          "problem": 3
        }
      },
      {
        "label": "ขายโดยละเลยข้อกังวล",
        "result": "เกิดข้อร้องเรียน",
        "delta": {
          "i": -6,
          "reliable": -6,
          "stress": 4
        }
      },
      {
        "label": "เสนอปรับขั้นตอนบริการ",
        "result": "ทีมทำงานรอบคอบขึ้น",
        "delta": {
          "skill": 4,
          "career": 3
        }
      }
    ]
  },
  {
    "id": "dent",
    "name": "ทันตแพทย์",
    "group": "สุขภาพ",
    "years": 6,
    "req": "science",
    "level": 32,
    "story": "คนไข้คาดหวังผลและราคาที่แน่นอนก่อนประเมิน",
    "choices": [
      {
        "label": "อธิบายข้อจำกัด",
        "result": "คนไข้เลือกตามความพร้อม",
        "delta": {
          "i": 4,
          "respect": 4
        }
      },
      {
        "label": "ปรึกษาทีม",
        "result": "แผนรอบคอบขึ้น",
        "delta": {
          "knowledge": 4,
          "problem": 4
        }
      },
      {
        "label": "รับประกันเกินจริง",
        "result": "เกิดความผิดหวัง",
        "delta": {
          "reliable": -6,
          "stress": 6
        }
      },
      {
        "label": "ให้เวลากลับไปคิด",
        "result": "ไม่กดดันคนไข้",
        "delta": {
          "e": 4,
          "selfcontrol": 3
        }
      }
    ]
  },
  {
    "id": "engineer",
    "name": "วิศวกร",
    "group": "เทคโนโลยี",
    "years": 4,
    "req": "science",
    "level": 28,
    "story": "โครงการใกล้ส่งแต่พบปัญหาคุณภาพ",
    "choices": [
      {
        "label": "หยุดตรวจสอบ",
        "result": "งานช้าลงแต่ลดความเสี่ยง",
        "delta": {
          "responsibility": 5,
          "reliable": 4
        }
      },
      {
        "label": "ปรับขอบเขตกับทีม",
        "result": "มีแผนใหม่",
        "delta": {
          "problem": 5,
          "career": 3
        }
      },
      {
        "label": "ข้ามการตรวจเพื่อโบนัส",
        "result": "เกิดข้อบกพร่องและถูกสอบทาน",
        "delta": {
          "i": -6,
          "stress": 6,
          "reliable": -5
        }
      },
      {
        "label": "ขอผู้มีคุณสมบัติช่วยตรวจ",
        "result": "ได้ข้อมูลเพิ่ม",
        "delta": {
          "knowledge": 4,
          "fair": 3
        }
      }
    ]
  },
  {
    "id": "architect",
    "name": "สถาปนิก",
    "group": "เทคโนโลยี",
    "years": 5,
    "req": "portfolio",
    "level": 27,
    "story": "ลูกค้าอยากแก้แบบบ้านให้ประหยัดแต่ยังไม่ได้ตรวจข้อจำกัด",
    "choices": [
      {
        "label": "เสนอแบบที่เหมาะสม",
        "result": "ลูกค้าเห็นทางเลือก",
        "delta": {
          "creative": 5,
          "problem": 3
        }
      },
      {
        "label": "ประสานผู้เชี่ยวชาญ",
        "result": "ได้ข้อมูลเพิ่ม",
        "delta": {
          "network": 3,
          "responsibility": 4
        }
      },
      {
        "label": "รับปากก่อนตรวจ",
        "result": "ต้องแก้แบบซ้ำ",
        "delta": {
          "reliable": -5,
          "stress": 5
        }
      },
      {
        "label": "ตกลงงบและขอบเขตใหม่",
        "result": "ทุกฝ่ายเข้าใจตรงกัน",
        "delta": {
          "i": 3,
          "skill": 4
        }
      }
    ]
  },
  {
    "id": "software",
    "name": "โปรแกรมเมอร์",
    "group": "เทคโนโลยี",
    "years": 2,
    "req": "skill",
    "level": 18,
    "story": "ลูกค้าอยากเปิดระบบทั้งที่ยังมีบั๊ก",
    "choices": [
      {
        "label": "ทดสอบก่อนเปิด",
        "result": "พบปัญหาก่อนกระทบผู้ใช้",
        "delta": {
          "skill": 5,
          "responsibility": 4
        }
      },
      {
        "label": "ปรับกำหนดส่ง",
        "result": "ลูกค้าได้แผนชัดเจน",
        "delta": {
          "i": 3,
          "reliable": 4
        }
      },
      {
        "label": "เปิดทั้งที่ยังไม่พร้อม",
        "result": "เกิดปัญหาและงานแก้ซ้ำ",
        "delta": {
          "stress": 6,
          "reliable": -5
        }
      },
      {
        "label": "ขอเพื่อนตรวจโค้ด",
        "result": "ทีมลดงานซ้ำ",
        "delta": {
          "network": 3,
          "problem": 5
        }
      }
    ]
  },
  {
    "id": "account",
    "name": "นักบัญชี",
    "group": "เทคโนโลยี",
    "years": 4,
    "req": "study",
    "level": 23,
    "story": "นายจ้างอยากได้ตัวเลขที่ไม่ตรงกับเอกสาร",
    "choices": [
      {
        "label": "ยืนยันข้อมูลจริง",
        "result": "งานตรวจสอบได้",
        "delta": {
          "i": 6,
          "reliable": 4
        }
      },
      {
        "label": "ปรึกษามาตรฐานงาน",
        "result": "ได้แนวทางจัดการ",
        "delta": {
          "knowledge": 4,
          "problem": 3
        }
      },
      {
        "label": "ยอมบิดเบือน",
        "result": "ความเสี่ยงถูกตรวจสอบเพิ่มขึ้น",
        "delta": {
          "i": -8,
          "reliable": -6,
          "stress": 5
        }
      },
      {
        "label": "ถอนตัวตามข้อตกลง",
        "result": "เสียรายได้แต่รักษามาตรฐาน",
        "delta": {
          "m": -1500,
          "fair": 4
        }
      }
    ]
  },
  {
    "id": "chef",
    "name": "เชฟ",
    "group": "ฝีมือ",
    "years": 1,
    "req": "skill",
    "level": 17,
    "story": "วัตถุดิบมีปัญหาในวันที่ลูกค้าเยอะ",
    "choices": [
      {
        "label": "หยุดใช้ของที่ไม่เหมาะ",
        "result": "ลูกค้ารอแต่ปลอดภัย",
        "delta": {
          "responsibility": 5,
          "reliable": 4
        }
      },
      {
        "label": "หาเมนูทดแทน",
        "result": "ครัวจัดคิวใหม่",
        "delta": {
          "problem": 4,
          "skill": 3
        }
      },
      {
        "label": "ฝืนใช้",
        "result": "เกิดข้อร้องเรียน",
        "delta": {
          "i": -5,
          "reliable": -6,
          "stress": 4
        }
      },
      {
        "label": "ลดเมนูชั่วคราว",
        "result": "ครัวทำงานตามกำลัง",
        "delta": {
          "selfcontrol": 4,
          "energy": 3
        }
      }
    ]
  },
  {
    "id": "farmer",
    "name": "เกษตรกร",
    "group": "ฝีมือ",
    "years": 1,
    "req": "skill",
    "level": 16,
    "story": "อากาศเปลี่ยน ผลผลิตต่ำกว่าแผน",
    "choices": [
      {
        "label": "แจ้งคนซื้อและตกลงใหม่",
        "result": "คู่ค้าเข้าใจข้อจำกัด",
        "delta": {
          "i": 3,
          "reliable": 4
        }
      },
      {
        "label": "ปรับแผนกับคนมีประสบการณ์",
        "result": "ได้บทเรียนรอบหน้า",
        "delta": {
          "knowledge": 4,
          "skill": 4
        }
      },
      {
        "label": "รับปากเกินพร้อม",
        "result": "ต้นทุนและความเครียดเพิ่ม",
        "delta": {
          "stress": 6,
          "reliable": -4
        }
      },
      {
        "label": "หารายได้เสริม",
        "result": "มีทางเลือกมากขึ้น",
        "delta": {
          "problem": 4,
          "network": 3
        }
      }
    ]
  },
  {
    "id": "mechanic",
    "name": "ช่างยนต์",
    "group": "ฝีมือ",
    "years": 1,
    "req": "skill",
    "level": 17,
    "story": "ลูกค้ารีบใช้รถแต่พบข้อกังวลเพิ่มเติม",
    "choices": [
      {
        "label": "อธิบายผลตรวจ",
        "result": "ลูกค้าเลือกตามข้อมูล",
        "delta": {
          "i": 4,
          "skill": 3
        }
      },
      {
        "label": "ขอช่างช่วยตรวจ",
        "result": "งานได้การตรวจเพิ่ม",
        "delta": {
          "problem": 4,
          "network": 3
        }
      },
      {
        "label": "ข้ามการตรวจ",
        "result": "ลูกค้ากลับมาร้องเรียน",
        "delta": {
          "responsibility": -5,
          "reliable": -5
        }
      },
      {
        "label": "แจ้งเวลาตามจริง",
        "result": "ขอบเขตชัดเจน",
        "delta": {
          "reliable": 4,
          "patience": 3
        }
      }
    ]
  },
  {
    "id": "logistics",
    "name": "งานโลจิสติกส์",
    "group": "ฝีมือ",
    "years": 1,
    "req": "skill",
    "level": 16,
    "story": "ตารางจัดส่งแน่นและคนในทีมเหนื่อย",
    "choices": [
      {
        "label": "จัดลำดับโดยคำนึงถึงความปลอดภัย",
        "result": "ทีมปรับแผน",
        "delta": {
          "problem": 5,
          "responsibility": 4
        }
      },
      {
        "label": "ขอคนช่วย",
        "result": "ภาระกระจาย",
        "delta": {
          "network": 3,
          "energy": 3
        }
      },
      {
        "label": "กดดันทีมให้ฝืน",
        "result": "ปัญหาสะสม",
        "delta": {
          "stress": 6,
          "fair": -4
        }
      },
      {
        "label": "เจรจาเงื่อนไขลูกค้า",
        "result": "ทีมมีเวลาจัดการ",
        "delta": {
          "i": 3,
          "reliable": 4
        }
      }
    ]
  },
  {
    "id": "teacher",
    "name": "ครู",
    "group": "สร้างสรรค์",
    "years": 4,
    "req": "study",
    "level": 24,
    "story": "เด็กบางคนเรียนไม่ทัน อีกกลุ่มอยากเรียนเพิ่ม",
    "choices": [
      {
        "label": "ออกแบบกิจกรรมหลายระดับ",
        "result": "เด็กเรียนตามความพร้อม",
        "delta": {
          "creative": 4,
          "e": 4
        }
      },
      {
        "label": "ชวนทีมครูทบทวน",
        "result": "ได้แนวทางใหม่",
        "delta": {
          "knowledge": 4,
          "network": 3
        }
      },
      {
        "label": "เปรียบเทียบเด็ก",
        "result": "เด็กไม่กล้าถาม",
        "delta": {
          "e": -5,
          "respect": -4
        }
      },
      {
        "label": "จัดเวลาติดตาม",
        "result": "เด็กบอกความต้องการได้",
        "delta": {
          "patience": 4,
          "responsibility": 3
        }
      }
    ]
  },
  {
    "id": "photo",
    "name": "ช่างภาพ",
    "group": "สร้างสรรค์",
    "years": 1,
    "req": "portfolio",
    "level": 15,
    "story": "ลูกค้าอยากเผยแพร่ภาพคนอื่นโดยยังไม่ได้อนุญาต",
    "choices": [
      {
        "label": "ขออนุญาต",
        "result": "เจ้าของภาพมีสิทธิเลือก",
        "delta": {
          "i": 4,
          "reliable": 3
        }
      },
      {
        "label": "เสนอภาพอื่น",
        "result": "ได้สื่อที่เหมาะสม",
        "delta": {
          "creative": 5,
          "problem": 3
        }
      },
      {
        "label": "เผยแพร่เพื่อกระแส",
        "result": "เกิดข้อร้องเรียน",
        "delta": {
          "i": -6,
          "reliable": -5,
          "fame": 2
        }
      },
      {
        "label": "รับเฉพาะงานที่ตกลงได้",
        "result": "เสียรายได้บางส่วน",
        "delta": {
          "selfcontrol": 4,
          "respect": 3
        }
      }
    ]
  },
  {
    "id": "music",
    "name": "นักดนตรี",
    "group": "สร้างสรรค์",
    "years": 1,
    "req": "portfolio",
    "level": 16,
    "story": "วงได้งานใหญ่แต่เพื่อนติดภาระที่บ้าน",
    "choices": [
      {
        "label": "ปรับตารางร่วมกัน",
        "result": "วงเห็นแผนเดียวกัน",
        "delta": {
          "problem": 4,
          "friend": 4
        }
      },
      {
        "label": "หาคนช่วยตามข้อตกลง",
        "result": "วงแบ่งงานได้",
        "delta": {
          "network": 4,
          "skill": 3
        }
      },
      {
        "label": "กดดันให้เพื่อนทิ้งภาระ",
        "result": "เพื่อนคิดจะออก",
        "delta": {
          "friend": -5,
          "stress": 5
        }
      },
      {
        "label": "ลดงานเพื่อรักษาวง",
        "result": "รายได้น้อยลงแต่มีเวลาฝึก",
        "delta": {
          "energy": 4,
          "selfcontrol": 3
        }
      }
    ]
  },
  {
    "id": "game",
    "name": "นักพัฒนาเกม",
    "group": "สร้างสรรค์",
    "years": 2,
    "req": "portfolio",
    "level": 18,
    "story": "ผู้เล่นรายงานบั๊กจำนวนมากขณะที่ทีมอยากเพิ่มฟีเจอร์",
    "choices": [
      {
        "label": "แก้บั๊กก่อน",
        "result": "เกมเสถียรขึ้น",
        "delta": {
          "skill": 5,
          "reliable": 4
        }
      },
      {
        "label": "แบ่งงานแก้และทดลอง",
        "result": "สองด้านเดินหน้าตามกำลัง",
        "delta": {
          "problem": 5,
          "career": 3
        }
      },
      {
        "label": "เพิ่มฟีเจอร์กลบเสียงบ่น",
        "result": "บั๊กยังอยู่และทีมเหนื่อย",
        "delta": {
          "stress": 6,
          "reliable": -4
        }
      },
      {
        "label": "แจ้งข้อจำกัดและรับฟัง",
        "result": "ผู้เล่นเห็นแผนชัดเจน",
        "delta": {
          "i": 3,
          "respect": 4
        }
      }
    ]
  },
  {
    "id": "lawyer",
    "name": "ทนายความ",
    "group": "ยุติธรรม",
    "years": 4,
    "req": "study",
    "level": 25,
    "story": "ลูกค้ากดดันให้นำเสนอเรื่องขัดข้อเท็จจริง",
    "choices": [
      {
        "label": "ยืนยันกระบวนการถูกต้อง",
        "result": "ลูกค้าต้องปรับความคาดหวัง",
        "delta": {
          "i": 5,
          "reliable": 4
        }
      },
      {
        "label": "ปรึกษาข้อกำหนดวิชาชีพ",
        "result": "ได้แนวทางรับมือ",
        "delta": {
          "knowledge": 4,
          "problem": 3
        }
      },
      {
        "label": "ยอมบิดเบือน",
        "result": "ความเสี่ยงวิชาชีพเพิ่ม",
        "delta": {
          "i": -8,
          "stress": 6
        }
      },
      {
        "label": "ถอนตัวตามขั้นตอน",
        "result": "รายได้หายแต่รักษาขอบเขต",
        "delta": {
          "m": -2000,
          "fair": 4
        }
      }
    ]
  },
  {
    "id": "police",
    "name": "ตำรวจ",
    "group": "ยุติธรรม",
    "years": 2,
    "req": "fitness",
    "level": 24,
    "story": "คนรู้จักขอสิทธิพิเศษที่ขัดกับหน้าที่",
    "choices": [
      {
        "label": "ชี้แจงช่องทางปกติ",
        "result": "ทุกคนได้รับการปฏิบัติตามกติกา",
        "delta": {
          "fair": 5,
          "i": 4
        }
      },
      {
        "label": "ขอผู้รับผิดชอบอื่นดูแล",
        "result": "ลดผลประโยชน์ทับซ้อน",
        "delta": {
          "responsibility": 4,
          "reliable": 3
        }
      },
      {
        "label": "ใช้อำนาจเอื้อคนรู้จัก",
        "result": "เกิดข้อร้องเรียน",
        "delta": {
          "i": -7,
          "fair": -6
        }
      },
      {
        "label": "รับฟังในฐานะเพื่อน",
        "result": "มิตรภาพยังมีขอบเขต",
        "delta": {
          "friend": 3,
          "selfcontrol": 4
        }
      }
    ]
  },
  {
    "id": "judge",
    "name": "ผู้พิพากษา",
    "group": "ยุติธรรม",
    "years": 9,
    "req": "law",
    "level": 40,
    "story": "คดีถูกสังคมกดดันให้ตัดสินตามกระแส",
    "choices": [
      {
        "label": "ยึดข้อเท็จจริงและกฎหมาย",
        "result": "การพิจารณาอยู่ในกระบวนการ",
        "delta": {
          "fair": 6,
          "i": 4
        }
      },
      {
        "label": "ตรวจผลประโยชน์ทับซ้อน",
        "result": "ข้อกังวลได้รับการจัดการ",
        "delta": {
          "responsibility": 5,
          "reliable": 4
        }
      },
      {
        "label": "ปล่อยให้กระแสมีอิทธิพล",
        "result": "ความเป็นกลางถูกตั้งคำถาม",
        "delta": {
          "fair": -7,
          "stress": 6
        }
      },
      {
        "label": "ศึกษาประเด็นเพิ่มเติม",
        "result": "เหตุผลรอบคอบขึ้น",
        "delta": {
          "knowledge": 5,
          "patience": 3
        }
      }
    ]
  },
  {
    "id": "civil",
    "name": "ข้าราชการ",
    "group": "ยุติธรรม",
    "years": 3,
    "req": "study",
    "level": 22,
    "story": "ประชาชนรอนานและคนรู้จักขอแซงคิว",
    "choices": [
      {
        "label": "จัดคิวตามหลักเกณฑ์",
        "result": "คนได้รับบริการอย่างเป็นธรรม",
        "delta": {
          "fair": 5,
          "responsibility": 3
        }
      },
      {
        "label": "เสนอปรับระบบคิว",
        "result": "บริการคล่องขึ้น",
        "delta": {
          "problem": 4,
          "skill": 3
        }
      },
      {
        "label": "ให้คนรู้จักแซง",
        "result": "คนอื่นร้องเรียน",
        "delta": {
          "fair": -6,
          "reliable": -4
        }
      },
      {
        "label": "ขอทีมช่วยแบ่งงาน",
        "result": "ภาระลดลง",
        "delta": {
          "network": 3,
          "energy": 3
        }
      }
    ]
  }
];
