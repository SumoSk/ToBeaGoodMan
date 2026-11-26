window.CAREER_EXTRA=[
  {
    "id": "vet",
    "name": "สัตวแพทย์",
    "group": "สุขภาพเพิ่มเติม",
    "years": 6,
    "req": "science",
    "level": 32,
    "pay": 6800,
    "kind": "สุขภาพ",
    "burden": "เคสสัตว์ฉุกเฉินและนัดตรวจ",
    "story": "เจ้าของสัตว์มีงบจำกัด",
    "choices": [
      {
        "label": "อธิบายทางเลือกตามการประเมิน",
        "result": "เจ้าของเข้าใจค่าใช้จ่ายและเลือกแผนที่รับไหว",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ปรึกษาทีม",
        "result": "ทีมช่วยพิจารณาทางเลือกดูแลสัตว์ตามข้อมูล",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากเกินจริง",
        "result": "เจ้าของคาดหวังผลที่รับประกันไม่ได้และกลับมาร้องเรียน",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "i": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ให้เวลาตัดสินใจ",
        "result": "เจ้าของได้ปรึกษาครอบครัวก่อนเลือก",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "สัตว์กลับมาติดตามในวันหยุด",
    "secondChoices": [
      {
        "label": "จัดคิวตามความจำเป็น",
        "result": "เจ้าของได้เวลาติดตามที่เหมาะกับอาการ",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ประสานทีมรับช่วง",
        "result": "เพื่อนสัตวแพทย์รับช่วงและคุณได้พัก",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับทุกนัดจนหมดแรง",
        "result": "คิวติดตามเต็มจนคุณยกเลิกแผนส่วนตัว",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ตกลงเวลาติดต่อ",
        "result": "เจ้าของทราบช่องทางติดต่อเมื่อมีเรื่องจำเป็น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "physio",
    "name": "นักกายภาพบำบัด",
    "group": "สุขภาพเพิ่มเติม",
    "years": 4,
    "req": "science",
    "level": 27,
    "pay": 4400,
    "kind": "สุขภาพ",
    "burden": "นัดฟื้นฟู",
    "story": "ผู้รับบริการท้อเพราะผลไม่ตามหวัง",
    "choices": [
      {
        "label": "ทบทวนเป้าหมาย",
        "result": "ผู้รับบริการเห็นเป้าหมายย่อยที่ทำได้จริง",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ปรึกษาทีม",
        "result": "ทีมช่วยทบทวนข้อจำกัดและความก้าวหน้า",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับประกันผล",
        "result": "เมื่อผลไม่ตามที่รับปาก ผู้รับบริการเสียความเชื่อมั่น",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "i": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ฟังความกังวล",
        "result": "เขากล้าบอกว่าการฝึกส่วนใดทำให้ท้อ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ชุมชนชวนจัดโครงการฟื้นฟู",
    "secondChoices": [
      {
        "label": "สำรวจความต้องการ",
        "result": "ชุมชนระบุความต้องการและโครงการมีขอบเขตชัด",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ร่วมตามกำลัง",
        "result": "คุณรับผิดชอบส่วนหนึ่งโดยมีทีมช่วย",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับงานเกินพร้อม",
        "result": "งานชุมชนเบียดคิวเดิมและเวลาพัก",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "i": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ส่งต่อทีม",
        "result": "ทีมอื่นรับงานส่วนที่คุณไม่พร้อม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "medtech",
    "name": "นักเทคนิคการแพทย์",
    "group": "สุขภาพเพิ่มเติม",
    "years": 4,
    "req": "science",
    "level": 28,
    "pay": 4500,
    "kind": "สุขภาพ",
    "burden": "งานตรวจวิเคราะห์",
    "story": "ข้อมูลตัวอย่างส่งตรวจไม่ตรงกัน",
    "choices": [
      {
        "label": "ตรวจสอบตามขั้นตอน",
        "result": "ข้อมูลตัวอย่างได้รับการยืนยันก่อนรายงานผล",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ประสานทีม",
        "result": "หน่วยส่งตรวจช่วยตรวจข้อมูลที่ไม่ตรง",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ข้ามข้อสงสัย",
        "result": "ผลที่ยังไม่ยืนยันสร้างปัญหาให้ทีมต้องตรวจซ้ำ",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "i": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอแบ่งงาน",
        "result": "ทีมแบ่งคิวเพื่อลดความผิดพลาด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เครื่องมือมีปัญหาช่วงคิวแน่น",
    "secondChoices": [
      {
        "label": "แจ้งผู้รับผิดชอบ",
        "result": "ผู้รับผิดชอบประเมินเครื่องมือและหยุดงานส่วนที่มีปัญหา",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "จัดแผนสำรอง",
        "result": "ตัวอย่างถูกจัดการผ่านระบบสำรองที่เหมาะสม",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ฝืนทำต่อ",
        "result": "เกิดความล่าช้าและงานต้องได้รับการทบทวนเพิ่ม",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "แจ้งเวลาตามจริง",
        "result": "ผู้ส่งตรวจได้เวลารอใหม่ตามจริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "psych",
    "name": "นักจิตวิทยา",
    "group": "สุขภาพเพิ่มเติม",
    "years": 4,
    "req": "study",
    "level": 28,
    "pay": 4300,
    "kind": "สุขภาพ",
    "burden": "นัดและขอบเขตงาน",
    "story": "ผู้รับบริการอยากให้ตอบข้อความตลอดเวลา",
    "choices": [
      {
        "label": "อธิบายขอบเขต",
        "result": "ผู้รับบริการเข้าใจเวลานัดและช่องทางช่วยเหลือ",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ปรึกษาทีมวิชาชีพ",
        "result": "ทีมช่วยกำหนดขอบเขตที่เหมาะกับการดูแล",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากดูแลทุกเวลา",
        "result": "ข้อความนอกเวลาสะสมจนคุณเริ่มพักไม่พอ",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "i": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทบทวนข้อตกลง",
        "result": "ทั้งสองฝ่ายเข้าใจข้อตกลงในการติดต่อ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เริ่มเหนื่อยจากการรับฟังปัญหา",
    "secondChoices": [
      {
        "label": "จัดเวลาพัก",
        "result": "คุณมีเวลาฟื้นพลังระหว่างนัด",
        "delta": {
          "responsibility": 4,
          "knowledge": 3,
          "reliable": 3
        }
      },
      {
        "label": "ปรับภาระ",
        "result": "จำนวนงานลดลงและจัดการเคสได้รอบคอบขึ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เก็บความเหนื่อยลำพัง",
        "result": "ความเหนื่อยสะสมโดยไม่มีใครรู้ว่าคุณต้องการความช่วยเหลือ",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ทำกิจกรรมผ่อนคลาย",
        "result": "กิจกรรมนอกงานช่วยให้คุณกลับมามีพื้นที่ส่วนตัว",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "pilot",
    "name": "นักบิน",
    "group": "การบินและท่องเที่ยว",
    "years": 3,
    "req": "fitness",
    "level": 38,
    "pay": 10500,
    "kind": "บริการ",
    "burden": "ตารางบินและพัก",
    "story": "ตารางบินเปลี่ยนและทีมกังวลความพร้อม",
    "choices": [
      {
        "label": "แจ้งตามขั้นตอน",
        "result": "ทีมได้รับข้อมูลความพร้อมก่อนตัดสินใจจัดหน้าที่",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ประสานผู้รับผิดชอบ",
        "result": "ผู้รับผิดชอบช่วยจัดตารางที่เหมาะกับข้อจำกัด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนรับหน้าที่",
        "result": "คุณเหนื่อยสะสมและทีมต้องกลับมาทบทวนความพร้อม",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "รักษาเวลาพัก",
        "result": "คุณพักตามแผนโดยไม่ฝืนหน้าที่เกินกำลัง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เดินทางตรงนัดครอบครัว",
    "secondChoices": [
      {
        "label": "ตกลงนัดใหม่",
        "result": "คนที่บ้านปรับนัดได้ก่อนคุณเดินทาง",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ใช้วันพักร่วมกัน",
        "result": "ครอบครัวได้ใช้เวลาร่วมกันในวันพัก",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "เลื่อนโดยไม่แจ้ง",
        "result": "คนที่รอเสียความรู้สึกเพราะไม่ทราบแผน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทบทวนตาราง",
        "result": "คุณเริ่มเห็นตารางงานที่เข้ากับชีวิตมากกว่า",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "cabin",
    "name": "พนักงานต้อนรับบนเครื่องบิน",
    "group": "การบินและท่องเที่ยว",
    "years": 1,
    "req": "skill",
    "level": 24,
    "pay": 4900,
    "kind": "บริการ",
    "burden": "เวลาบินและบริการ",
    "story": "ผู้โดยสารไม่พอใจที่นั่ง",
    "choices": [
      {
        "label": "เสนอทางเลือกตามกติกา",
        "result": "ผู้โดยสารได้รับทางเลือกที่ทำได้ภายใต้กติกา",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอหัวหน้าช่วย",
        "result": "หัวหน้าช่วยจัดการข้อร้องเรียนโดยไม่รบกวนผู้โดยสารอื่น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "โต้เถียง",
        "result": "บรรยากาศบนเครื่องตึงขึ้นและเกิดคำร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "อธิบายข้อจำกัด",
        "result": "ผู้โดยสารเข้าใจเหตุที่ยังเปลี่ยนที่นั่งไม่ได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "บินชนวันสำคัญ",
    "secondChoices": [
      {
        "label": "วางแผนพบกันใหม่",
        "result": "คนสำคัญมีนัดใหม่ที่ทั้งคู่สะดวก",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอแลกกะตามกติกา",
        "result": "ทีมพิจารณาการแลกกะตามข้อตกลง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับงานเพิ่มจนไม่พัก",
        "result": "รายได้เพิ่มขึ้นแต่แทบไม่มีเวลาฟื้นพลัง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "รักษาวันพัก",
        "result": "คุณรักษาวันพักและกลับไปทำงานอย่างพร้อมขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "airtech",
    "name": "ช่างอากาศยาน",
    "group": "การบินและท่องเที่ยว",
    "years": 3,
    "req": "science",
    "level": 30,
    "pay": 6100,
    "kind": "โครงการ",
    "burden": "รอบตรวจและซ่อม",
    "story": "พบข้อสงสัยก่อนส่งมอบ",
    "choices": [
      {
        "label": "ตรวจตามขั้นตอน",
        "result": "ข้อสงสัยถูกบันทึกและตรวจสอบก่อนส่งงาน",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ขอผู้มีคุณสมบัติช่วย",
        "result": "ผู้มีคุณสมบัติช่วยประเมินส่วนที่ยังไม่ชัด",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "มองข้ามเพื่อทันเวลา",
        "result": "งานต้องถูกตรวจสอบซ้ำและความน่าเชื่อถือของทีมลดลง",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับแผนส่ง",
        "result": "ผู้เกี่ยวข้องได้รับกำหนดส่งใหม่ที่เป็นจริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ต้องอบรมเพิ่มพร้อมงานเดิม",
    "secondChoices": [
      {
        "label": "จัดแผนกับหัวหน้า",
        "result": "หัวหน้าแบ่งเวลาอบรมออกจากงานประจำ",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "แบ่งเวลาฝึก",
        "result": "คุณสะสมความชำนาญโดยไม่เสียเวลาพักทั้งหมด",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับทุกอย่างจนหมดแรง",
        "result": "ทั้งงานซ่อมและการอบรมได้รับผลจากความเหนื่อย",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "เลื่อนตามพร้อม",
        "result": "คุณได้รอบอบรมที่เหมาะกับภาระงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "guide",
    "name": "มัคคุเทศก์",
    "group": "การบินและท่องเที่ยว",
    "years": 1,
    "req": "skill",
    "level": 22,
    "pay": 3500,
    "kind": "บริการ",
    "burden": "ทริปและนัดลูกค้า",
    "story": "ลูกค้าอยากเปลี่ยนแผนกะทันหัน",
    "choices": [
      {
        "label": "ตกลงตามงบเวลา",
        "result": "ลูกค้าเลือกแผนใหม่ที่อยู่ในเวลาและงบ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ประสานผู้ให้บริการ",
        "result": "ผู้ให้บริการช่วยยืนยันความพร้อมก่อนปรับทริป",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับปากเกินจริง",
        "result": "ทริปไม่เป็นตามที่รับปากและลูกค้าไม่พอใจ",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ชี้แจงข้อจำกัด",
        "result": "กลุ่มเข้าใจเหตุที่บางจุดไปไม่ได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าอยากรู้เรื่องชุมชน",
    "secondChoices": [
      {
        "label": "เชิญคนท้องถิ่นตามสมัครใจ",
        "result": "คนท้องถิ่นมีโอกาสเล่าเรื่องของตนด้วยความสมัครใจ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ศึกษาข้อมูล",
        "result": "คุณได้ข้อมูลที่ถูกต้องขึ้นก่อนนำเที่ยว",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "แต่งเรื่องให้ตื่นเต้น",
        "result": "นักท่องเที่ยวได้รับข้อมูลคลาดเคลื่อนและตั้งคำถามภายหลัง",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เคารพพื้นที่",
        "result": "กลุ่มได้เที่ยวโดยไม่รบกวนวิถีชุมชน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "banker",
    "name": "พนักงานธนาคาร",
    "group": "การเงิน",
    "years": 3,
    "req": "study",
    "level": 25,
    "pay": 4400,
    "kind": "โครงการ",
    "burden": "เป้ายอดและบริการ",
    "story": "ลูกค้าไม่เข้าใจภาระผลิตภัณฑ์",
    "choices": [
      {
        "label": "อธิบายต้นทุนและความเสี่ยง",
        "result": "ลูกค้าเข้าใจภาระและเลือกได้ว่าต้องการสมัครหรือไม่",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ให้เวลาตรวจข้อมูล",
        "result": "ลูกค้ามีเวลาทบทวนเอกสารก่อนผูกพัน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "กดดันเพื่อยอด",
        "result": "เกิดข้อร้องเรียนเมื่อภาระไม่ตรงที่ลูกค้าเข้าใจ",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ส่งต่อเจ้าหน้าที่ที่เหมาะ",
        "result": "เจ้าหน้าที่ที่เหมาะสมช่วยตอบข้อสงสัย",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทีมได้เป้ายอดใหม่",
    "secondChoices": [
      {
        "label": "วางแผนตามความต้องการลูกค้า",
        "result": "ทีมวางเป้าที่ไม่ต้องฝืนความต้องการลูกค้า",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "คุยขอบเขตหัวหน้า",
        "result": "หัวหน้าได้เห็นข้อจำกัดที่ทีมกำลังเผชิญ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เร่งยอดไม่สนผลกระทบ",
        "result": "ยอดระยะสั้นเพิ่มแต่ข้อร้องเรียนเริ่มตามมา",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษามาตรฐาน",
        "result": "คุณรักษาความน่าเชื่อถือแม้ผลงานไม่พุ่งทันที",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "analyst",
    "name": "นักวิเคราะห์การเงิน",
    "group": "การเงิน",
    "years": 4,
    "req": "study",
    "level": 32,
    "pay": 5900,
    "kind": "โครงการ",
    "burden": "รายงานและข้อมูล",
    "story": "ข้อมูลใหม่ขัดข้อสรุปเดิม",
    "choices": [
      {
        "label": "ทบทวนสมมติฐาน",
        "result": "รายงานใหม่สะท้อนหลักฐานที่เปลี่ยนไป",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ขอทีมตรวจทาน",
        "result": "เพื่อนช่วยจับจุดที่สมมติฐานเดิมไม่รองรับ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ปิดข้อมูล",
        "result": "คนใช้รายงานตัดสินใจจากข้อมูลไม่ครบและกลับมาทักท้วง",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอหลายกรณี",
        "result": "ผู้รับรายงานเห็นผลลัพธ์ได้หลายกรณี",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้บริหารอยากได้ข้อสรุปแน่นอน",
    "secondChoices": [
      {
        "label": "อธิบายความไม่แน่นอน",
        "result": "ผู้บริหารเข้าใจว่าข้อมูลยังไม่รองรับคำตอบเดียว",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "เปรียบเทียบสมมติฐาน",
        "result": "ทีมเห็นว่าข้อสรุปไวต่อเงื่อนไขใด",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากเกินข้อมูล",
        "result": "ผลไม่ตรงที่รับปากและคุณต้องชี้แจงรายงาน",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอเวลาตรวจเพิ่ม",
        "result": "คุณได้ข้อมูลเพิ่มก่อนส่งข้อสรุป",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "trader",
    "name": "เทรดเดอร์",
    "group": "การเงิน",
    "years": 1,
    "req": "study",
    "level": 28,
    "pay": 3500,
    "kind": "ธุรกิจ",
    "burden": "รายได้ผันผวน",
    "story": "ผลซื้อขายจำลองขาดทุน",
    "choices": [
      {
        "label": "หยุดทบทวนภาระ",
        "result": "คุณหยุดเพิ่มภาระและกลับมาดูความเสียหายในเกม",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "บันทึกบทเรียน",
        "result": "บันทึกช่วยให้เห็นพฤติกรรมที่ทำให้ตัดสินใจผิด",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ไล่เอาคืนจนขาดทุนเพิ่ม",
        "result": "เงินในเกมลดลงอีกและความเครียดเพิ่ม",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "พักกิจกรรม",
        "result": "คุณหยุดซื้อขายชั่วคราวและมีเวลาคิด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "คนรักถามเรื่องเงินที่ใช้ไป",
    "secondChoices": [
      {
        "label": "เปิดเผยยอดและตกลงงบ",
        "result": "คนรักรู้ยอดที่แท้จริงและร่วมวางขอบเขต",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "แยกเงินจำเป็น",
        "result": "รายจ่ายจำเป็นไม่ต้องถูกนำไปใช้ในกิจกรรม",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ปิดบังความเสียหาย",
        "result": "คนรักพบตัวเลขที่ไม่ตรงกันและเสียความไว้ใจ",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "พักกิจกรรม",
        "result": "ทั้งคู่ได้พักจากการพูดเรื่องผลซื้อขาย",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "investor",
    "name": "ผู้จัดการทรัพย์สินตนเอง",
    "group": "การเงิน",
    "years": 2,
    "req": "study",
    "level": 30,
    "pay": 4100,
    "kind": "ธุรกิจ",
    "burden": "รายได้ไม่แน่นอน",
    "story": "ทรัพย์สินในเกมมูลค่าลด",
    "choices": [
      {
        "label": "ทบทวนเงินสำรอง",
        "result": "เงินสำรองได้รับการจัดลำดับก่อนแผนอื่น",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "คุยครอบครัว",
        "result": "ครอบครัวเข้าใจภาระที่เปลี่ยนและปรับค่าใช้จ่ายร่วมกัน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ปกปิดผลขาดทุน",
        "result": "ความเสียหายที่ซ่อนไว้กระทบแผนการเงินของบ้าน",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "ลดภาระ",
        "result": "คุณลดภาระที่ยังไม่ต้องรับทันที",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "เพื่อนชวนโครงการข้อมูลไม่ครบ",
    "secondChoices": [
      {
        "label": "ขอข้อมูลก่อน",
        "result": "เพื่อนส่งข้อมูลเพิ่มก่อนที่คุณจะตัดสินใจ",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ปฏิเสธสุภาพ",
        "result": "มิตรภาพไม่ต้องแลกกับการรับข้อเสนอ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับเพราะเกรงใจ",
        "result": "เงินสำรองลดจากโครงการที่ยังไม่ชัดเจน",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "แยกมิตรภาพจากเงิน",
        "result": "เพื่อนเข้าใจว่าการลงทุนเป็นคนละเรื่องกับความสนิท",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "ai",
    "name": "นักพัฒนา AI",
    "group": "ดิจิทัล",
    "years": 3,
    "req": "skill",
    "level": 35,
    "pay": 6800,
    "kind": "โครงการ",
    "burden": "ทดสอบและส่งงาน",
    "story": "ระบบให้ผลคลาดเคลื่อนกับผู้ใช้บางกลุ่ม",
    "choices": [
      {
        "label": "ตรวจข้อมูลและข้อจำกัด",
        "result": "ทีมพบขอบเขตที่ระบบยังให้ผลไม่เหมาะสมและแก้ไข",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ขอผู้เชี่ยวชาญทบทวน",
        "result": "ผู้เชี่ยวชาญช่วยทบทวนกรณีที่ทีมมองข้าม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ปล่อยผ่าน",
        "result": "ผู้ใช้ได้รับผลคลาดเคลื่อนและทีมต้องแก้ปัญหาภายหลัง",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับขอบเขตใช้",
        "result": "ผู้ใช้ได้รับคำอธิบายว่าใช้ระบบทำอะไรได้บ้าง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้บริหารอยากเพิ่มฟีเจอร์ก่อนแก้ปัญหา",
    "secondChoices": [
      {
        "label": "แสดงผลทดสอบ",
        "result": "ผลทดสอบช่วยให้ผู้บริหารเห็นเหตุที่ต้องแก้ก่อน",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "แบ่งทีมทดลองและแก้ไข",
        "result": "ทีมทดลองของใหม่โดยไม่ละเลยปัญหาเดิม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกฟีเจอร์จนทีมล้า",
        "result": "งานใหม่ซ้อนจนทีมพักไม่พอและงานแก้ล่าช้า",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "สื่อสารข้อจำกัด",
        "result": "ผู้ใช้รู้ข้อจำกัดโดยไม่คาดหวังเกินจริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "webdesign",
    "name": "นักออกแบบเว็บไซต์",
    "group": "ดิจิทัล",
    "years": 1,
    "req": "portfolio",
    "level": 23,
    "pay": 4200,
    "kind": "โครงการ",
    "burden": "แก้แบบลูกค้า",
    "story": "ลูกค้าอยากใส่ข้อมูลจนเว็บอ่านยาก",
    "choices": [
      {
        "label": "เสนอแบบเปรียบเทียบ",
        "result": "ลูกค้าเห็นว่าการจัดลำดับข้อมูลทำให้เว็บอ่านง่ายขึ้น",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ทดสอบกับผู้ใช้",
        "result": "ผลทดสอบชี้จุดที่ผู้ใช้หาเมนูไม่เจอ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ทำตามแม้รู้ว่ามีปัญหา",
        "result": "หน้าเว็บแน่นและลูกค้ากลับมาขอแก้อีก",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงขอบเขต",
        "result": "ทุกฝ่ายรู้ว่าข้อมูลใดควรอยู่หน้าแรก",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าขอแก้นอกข้อตกลงหลายครั้ง",
    "secondChoices": [
      {
        "label": "อธิบายขอบเขตราคา",
        "result": "ลูกค้าเข้าใจว่างานเพิ่มมีต้นทุนและเวลา",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "เสนอแก้จุดสำคัญ",
        "result": "จุดสำคัญได้รับการแก้โดยไม่รื้อทั้งหมด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกอย่างจนหมดแรง",
        "result": "งานแก้กินเวลาจนคุณเลื่อนงานรายอื่น",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "นัดสรุปงาน",
        "result": "ทั้งคู่มีขอบเขตงานและวันจบที่ตรงกัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "data",
    "name": "นักวิเคราะห์ข้อมูล",
    "group": "ดิจิทัล",
    "years": 3,
    "req": "study",
    "level": 30,
    "pay": 5500,
    "kind": "โครงการ",
    "burden": "รายงานและคุณภาพข้อมูล",
    "story": "ชุดข้อมูลมีค่าหาย",
    "choices": [
      {
        "label": "ตรวจคุณภาพก่อน",
        "result": "รายงานระบุข้อมูลที่ขาดแทนการสรุปเกินหลักฐาน",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "รายงานพร้อมข้อจำกัด",
        "result": "คนอ่านเข้าใจข้อจำกัดของชุดข้อมูล",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เดาตัวเลขให้ครบ",
        "result": "ตัวเลขที่เดาทำให้รายงานคลาดเคลื่อนและต้องแก้ไข",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอข้อมูลเพิ่ม",
        "result": "เจ้าของข้อมูลช่วยเติมส่วนที่ตรวจสอบได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทีมตีความกราฟผิด",
    "secondChoices": [
      {
        "label": "อธิบายความหมาย",
        "result": "ทีมเข้าใจว่ากราฟแสดงอะไรและไม่ได้แสดงอะไร",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ปรับภาพให้อ่านง่าย",
        "result": "กราฟใหม่อ่านง่ายขึ้นและลดการตีความผิด",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ตำหนิผู้ใช้",
        "result": "ผู้ใช้ไม่กล้าถามและความเข้าใจผิดยังอยู่",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "จัดคู่มือร่วมกัน",
        "result": "คู่มือช่วยให้ทุกทีมใช้ความหมายเดียวกัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "cyber",
    "name": "นักดูแลความปลอดภัยไซเบอร์",
    "group": "ดิจิทัล",
    "years": 3,
    "req": "skill",
    "level": 33,
    "pay": 6200,
    "kind": "โครงการ",
    "burden": "เฝ้าระวังและตรวจสอบ",
    "story": "พบสัญญาณผิดปกติ",
    "choices": [
      {
        "label": "แจ้งตามแผนรับเหตุ",
        "result": "ทีมเริ่มตรวจสอบเหตุผ่านช่องทางที่รับผิดชอบ",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ประสานผู้รับผิดชอบ",
        "result": "ผู้ดูแลระบบช่วยประเมินขอบเขตเหตุ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ปกปิดเหตุ",
        "result": "เหตุที่ถูกปิดบังทำให้การจัดการล่าช้าและถูกตรวจสอบ",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "บันทึกข้อเท็จจริง",
        "result": "ทีมมีข้อมูลสำหรับทบทวนเหตุอย่างเป็นระบบ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "งานเฝ้าระวังกินเวลาพัก",
    "secondChoices": [
      {
        "label": "จัดเวรและแบ่งหน้าที่",
        "result": "งานเฝ้าระวังถูกแบ่งตามช่วงเวลา",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ทบทวนระบบแจ้งเตือน",
        "result": "ระบบแจ้งเตือนลดภาระที่ไม่จำเป็น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกเรื่องคนเดียว",
        "result": "คุณเหนื่อยจนเริ่มรับมือการแจ้งเตือนไม่ไหว",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ส่งมอบงานชัดเจน",
        "result": "ทีมรับช่วงงานโดยทราบข้อมูลที่จำเป็น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "singer",
    "name": "นักร้อง",
    "group": "บันเทิง",
    "years": 1,
    "req": "portfolio",
    "level": 24,
    "pay": 3500,
    "kind": "สร้างสรรค์",
    "burden": "งานแสดงและซ้อม",
    "story": "ผู้จัดอยากให้ร้องแนวไม่ถนัด",
    "choices": [
      {
        "label": "ตกลงเพลงตามพร้อม",
        "result": "ผู้จัดงานเลือกเพลงที่เหมาะกับเสียงและการแสดง",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ทดลองซ้อม",
        "result": "การซ้อมช่วยให้คุณรู้ข้อจำกัดก่อนขึ้นเวที",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับงานไม่เตรียมตัว",
        "result": "การแสดงไม่เป็นตามที่หวังและผู้จัดขอทบทวนงาน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับรายการเพลง",
        "result": "รายการเพลงใหม่เหมาะกับงานมากขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "คนชวนทำเพลงแต่สิทธิไม่ชัด",
    "secondChoices": [
      {
        "label": "ตกลงสิทธิและเครดิต",
        "result": "ทั้งคู่รู้ว่าใครมีสิทธิและเครดิตส่วนใด",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ทดลองงานสั้น",
        "result": "งานทดลองช่วยดูว่าทำเพลงร่วมกันได้ดีไหม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทันทีเพราะอยากดัง",
        "result": "ข้อขัดแย้งเรื่องสิทธิเริ่มตามมาหลังรับงาน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รอข้อเสนอชัด",
        "result": "คุณรักษาผลงานของตัวเองไว้จนกว่าข้อเสนอชัด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "actor_pro",
    "name": "นักแสดง",
    "group": "บันเทิง",
    "years": 1,
    "req": "portfolio",
    "level": 25,
    "pay": 3900,
    "kind": "สร้างสรรค์",
    "burden": "ออดิชันและถ่ายทำ",
    "story": "บทใหม่มีฉากที่ไม่สบายใจ",
    "choices": [
      {
        "label": "คุยขอบเขตก่อน",
        "result": "ทีมทราบขอบเขตที่คุณยินยอมก่อนเริ่มถ่าย",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอปรับการนำเสนอ",
        "result": "ผู้กำกับพิจารณาวิธีนำเสนอฉากแบบอื่น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนเพราะกลัวเสียงาน",
        "result": "คุณเครียดจากการรับบทที่ยังไม่สบายใจ",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ปฏิเสธตามพร้อม",
        "result": "คุณเสียโอกาสหนึ่งแต่รักษาขอบเขตของตัวเอง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "งานถ่ายเลื่อนหลายวัน",
    "secondChoices": [
      {
        "label": "ประสานตาราง",
        "result": "ทีมถ่ายทำรู้ว่านัดใดต้องปรับ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "รักษานัดสำคัญ",
        "result": "คนสำคัญได้รับเวลาแม้กำหนดถ่ายเปลี่ยน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับงานซ้อนจนผิดนัด",
        "result": "งานซ้อนทำให้คุณผิดนัดและทีมเสียความเชื่อใจ",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ฝึกบทรอ",
        "result": "เวลารอถูกใช้ฝึกบทโดยไม่เพิ่มภาระงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "model",
    "name": "นายแบบและนางแบบ",
    "group": "บันเทิง",
    "years": 1,
    "req": "portfolio",
    "level": 22,
    "pay": 3300,
    "kind": "สร้างสรรค์",
    "burden": "ถ่ายแบบและคัดเลือก",
    "story": "ทีมขอเปลี่ยนขอบเขตหน้างาน",
    "choices": [
      {
        "label": "ยืนยันข้อตกลง",
        "result": "ทีมกลับไปยืนยันข้อตกลงก่อนถ่ายต่อ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอเวลาพิจารณา",
        "result": "คุณได้เวลาคิดโดยไม่ต้องตอบตกลงทันที",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ยอมทั้งที่ไม่สบายใจ",
        "result": "คุณรู้สึกเสียใจที่ไม่ได้รักษาขอบเขตของตัวเอง",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอรูปแบบอื่น",
        "result": "ทีมเลือกแบบถ่ายที่ทุกฝ่ายสบายใจ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "คำวิจารณ์รูปลักษณ์กระทบใจ",
    "secondChoices": [
      {
        "label": "แยกงานจากคุณค่าตนเอง",
        "result": "คำวิจารณ์ไม่ต้องกำหนดคุณค่าทั้งหมดของคุณ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "คุยคนไว้ใจ",
        "result": "คนใกล้ตัวรับฟังและช่วยให้คุณเห็นมุมอื่น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "เปรียบเทียบกับทุกคน",
        "result": "ความมั่นใจลดลงจากการเปรียบเทียบตลอดเวลา",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เลือกงานตามขอบเขต",
        "result": "คุณเลือกงานที่เหมาะกับความพร้อมของตัวเอง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "creator",
    "name": "ครีเอเตอร์และยูทูบเบอร์",
    "group": "บันเทิง",
    "years": 1,
    "req": "portfolio",
    "level": 23,
    "pay": 3500,
    "kind": "สร้างสรรค์",
    "burden": "เนื้อหาและรายได้ผันผวน",
    "story": "คลิปดังแต่คนในคลิปยังไม่อนุญาตให้ใช้ต่อ",
    "choices": [
      {
        "label": "ขออนุญาต",
        "result": "คนในคลิปได้เลือกว่าจะให้เผยแพร่ต่อหรือไม่",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ตัดส่วนที่ไม่ควรเผยแพร่",
        "result": "เนื้อหายังเล่าเรื่องได้โดยไม่เปิดเผยส่วนที่ไม่ควร",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ใช้ต่อเพื่อยอดวิว",
        "result": "ยอดวิวเพิ่มแต่เกิดคำร้องเรียนจากคนในคลิป",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทำเนื้อหาใหม่",
        "result": "คุณได้สร้างเนื้อหาใหม่ที่เคารพคนอื่น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "แบรนด์เสนอจ้างแต่ข้อมูลคลาดเคลื่อน",
    "secondChoices": [
      {
        "label": "ขอแก้ให้ตรงจริง",
        "result": "แบรนด์ได้รับข้อความที่ตรงกับข้อมูลมากขึ้น",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "เปิดเผยโฆษณา",
        "result": "ผู้ชมรู้ว่าส่วนใดเป็นงานโฆษณา",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกเงื่อนไขเพื่อเงิน",
        "result": "ค่าจ้างเพิ่มแต่ความน่าเชื่อถือเริ่มถูกตั้งคำถาม",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปฏิเสธงาน",
        "result": "คุณเสียรายได้ก้อนหนึ่งแต่รักษาความไว้ใจผู้ชม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "footballer",
    "name": "นักฟุตบอลอาชีพ",
    "group": "กีฬา",
    "years": 2,
    "req": "fitness",
    "level": 25,
    "pay": 4500,
    "kind": "สร้างสรรค์",
    "burden": "ซ้อมและแข่ง",
    "story": "โค้ชเสนอให้แข่งทั้งที่กังวลร่างกาย",
    "choices": [
      {
        "label": "ขอประเมินความพร้อม",
        "result": "ทีมประเมินว่าคุณพร้อมลงสนามหรือควรพัก",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "คุยบทบาททีม",
        "result": "โค้ชเห็นบทบาทที่คุณทำได้โดยไม่ฝืน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนแข่ง",
        "result": "ร่างกายเหนื่อยและการฝึกครั้งถัดไปได้รับผลกระทบ",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "พักและสนับสนุนเพื่อน",
        "result": "เพื่อนได้ลงเล่นและคุณมีเวลาฟื้นตัว",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทีมมีผู้เล่นใหม่ตำแหน่งเดียวกัน",
    "secondChoices": [
      {
        "label": "แข่งขันอย่างเป็นธรรม",
        "result": "ทีมเห็นการแข่งขันเพื่อพัฒนาฝีมืออย่างเป็นธรรม",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "แบ่งประสบการณ์",
        "result": "ผู้เล่นใหม่ได้เรียนรู้และคุณได้ทบทวนทักษะตัวเอง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กดดันคู่แข่ง",
        "result": "บรรยากาศทีมเสียและเพื่อนร่วมทีมเว้นระยะ",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทบทวนเป้าหมาย",
        "result": "คุณเริ่มวางแผนว่าต้องการเล่นต่อในบทบาทใด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "boxer",
    "name": "นักมวยอาชีพ",
    "group": "กีฬา",
    "years": 2,
    "req": "fitness",
    "level": 24,
    "pay": 3800,
    "kind": "สร้างสรรค์",
    "burden": "ฝึกและแข่งขัน",
    "story": "ข้อเสนอแข่งเร็วกว่าที่เตรียม",
    "choices": [
      {
        "label": "ประเมินกับทีม",
        "result": "ทีมช่วยประเมินความพร้อมก่อนรับการแข่งขัน",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอเวลาฝึก",
        "result": "คุณมีเวลาเตรียมตัวมากขึ้นโดยไม่ฝืนตาราง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับเพราะกลัวเสียโอกาส",
        "result": "ภาระฝึกและแข่งเร็วเกินแผนทำให้คุณเหนื่อยสะสม",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "พักการแข่งขัน",
        "result": "คุณพลาดรายการหนึ่งแต่รักษาความพร้อม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ครอบครัวกังวลสุขภาพ",
    "secondChoices": [
      {
        "label": "คุยเป้าหมายและความเสี่ยง",
        "result": "ครอบครัวได้เข้าใจเป้าหมายและความกังวลของคุณ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "จัดแผนพัก",
        "result": "คุณจัดเวลาพักและดูแลตัวเองได้จริง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ไม่รับฟังใคร",
        "result": "คนในบ้านรู้สึกว่าความห่วงใยถูกปฏิเสธ",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "พิจารณาบทบาทสอน",
        "result": "คุณเริ่มสนใจบทบาทสอนเมื่อถึงเวลาที่เหมาะ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "esport",
    "name": "นักกีฬาอีสปอร์ต",
    "group": "กีฬา",
    "years": 1,
    "req": "skill",
    "level": 30,
    "pay": 3800,
    "kind": "สร้างสรรค์",
    "burden": "ซ้อมและแข่ง",
    "story": "ทีมแพ้และโทษกัน",
    "choices": [
      {
        "label": "ทบทวนการเล่น",
        "result": "ทีมเห็นจุดที่ต้องแก้โดยไม่โยนความผิดให้คนเดียว",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ฝึกจุดอ่อน",
        "result": "ทักษะส่วนที่ยังอ่อนดีขึ้นจากการฝึก",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กล่าวโทษเพื่อน",
        "result": "เพื่อนร่วมทีมเสียความไว้ใจและการประสานงานแย่ลง",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "พักก่อนคุย",
        "result": "ทีมกลับมาคุยเมื่ออารมณ์สงบขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ตารางซ้อมกินเวลานอน",
    "secondChoices": [
      {
        "label": "ปรับตาราง",
        "result": "ตารางใหม่ช่วยให้ทีมฝึกได้โดยยังนอนพอ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ฝึกเฉพาะจุด",
        "result": "คุณฝึกจุดสำคัญแทนการเพิ่มชั่วโมงอย่างเดียว",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ซ้อมทั้งคืนต่อเนื่อง",
        "result": "ความเหนื่อยทำให้สมาธิและชีวิตประจำวันแย่ลง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ทำกิจกรรมอื่นวันพัก",
        "result": "คุณมีพื้นที่พักนอกการแข่งขัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "coach",
    "name": "ผู้ฝึกสอนกีฬา",
    "group": "กีฬา",
    "years": 2,
    "req": "skill",
    "level": 27,
    "pay": 3800,
    "kind": "การศึกษา",
    "burden": "ฝึกและดูแลทีม",
    "story": "นักกีฬาพร้อมต่างกัน",
    "choices": [
      {
        "label": "วางแผนรายคน",
        "result": "นักกีฬาได้ฝึกตามความพร้อมของตัวเอง",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ปรึกษาทีม",
        "result": "ทีมสนับสนุนช่วยจัดแผนที่เหมาะกับแต่ละคน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "เปรียบเทียบกดดัน",
        "result": "นักกีฬาบางคนไม่กล้าบอกข้อจำกัดของตัวเอง",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ฟังเป้าหมายแต่ละคน",
        "result": "คุณเข้าใจว่าแต่ละคนต้องการอะไรจากกีฬา",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้ปกครองคาดหวังชัยชนะ",
    "secondChoices": [
      {
        "label": "อธิบายเป้าหมายระยะยาว",
        "result": "ผู้ปกครองเห็นความก้าวหน้าที่ไม่ใช่แค่ผลแข่ง",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "คุยแผนตามวัย",
        "result": "แผนฝึกสะท้อนวัยและกำลังของนักกีฬา",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับปากชัยชนะ",
        "result": "ผู้ปกครองคาดหวังชัยชนะและกดดันทีมมากขึ้น",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษาขอบเขต",
        "result": "คุณรักษาความปลอดภัยและความสนุกในการฝึก",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "restaurant",
    "name": "เจ้าของร้านอาหาร",
    "group": "ธุรกิจ",
    "years": 1,
    "req": "skill",
    "level": 25,
    "pay": 4300,
    "kind": "ธุรกิจ",
    "burden": "ยอดขาย ค่าเช่า ทีม",
    "story": "ยอดขายไม่พอค่าใช้จ่าย",
    "choices": [
      {
        "label": "เปิดข้อมูลกับทีม",
        "result": "ทีมรู้สถานการณ์ค่าใช้จ่ายและร่วมกันหาทางออก",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ทดลองปรับเมนู",
        "result": "เมนูทดลองให้ข้อมูลยอดขายก่อนลงทุนเพิ่ม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ผลักภาระให้พนักงาน",
        "result": "พนักงานรู้สึกถูกผลักภาระและเริ่มไม่ไว้ใจร้าน",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ลดขนาดกิจการ",
        "result": "ค่าใช้จ่ายลดลงโดยปรับขนาดตามรายได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ลูกค้าอยากให้เปิดสาขา",
    "secondChoices": [
      {
        "label": "ประเมินต้นทุน",
        "result": "คุณเห็นต้นทุนสาขาใหม่ก่อนตัดสินใจ",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ทดลองขายเล็ก",
        "result": "การขายทดลองช่วยประเมินความต้องการลูกค้า",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ขยายทันทีเกินงบ",
        "result": "เงินสำรองลดลงและสาขาเดิมเริ่มรับภาระ",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "รักษาร้านเดิม",
        "result": "ร้านเดิมได้เวลาปรับปรุงและรักษาฐานลูกค้า",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "clinic",
    "name": "ผู้บริหารกิจการคลินิก",
    "group": "ธุรกิจ",
    "years": 3,
    "req": "study",
    "level": 35,
    "pay": 6400,
    "kind": "ธุรกิจ",
    "burden": "บริหารและมาตรฐาน",
    "story": "ทีมขายอยากตั้งเป้ากดดันผู้รับบริการ",
    "choices": [
      {
        "label": "กำหนดมาตรฐานบริการ",
        "result": "ทีมได้รับเป้าหมายที่ไม่กดดันผู้รับบริการ",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "หารือทีมวิชาชีพ",
        "result": "ผู้รับผิดชอบวิชาชีพและบัญชีช่วยกำหนดขอบเขต",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เร่งยอดไม่สนผลกระทบ",
        "result": "ข้อร้องเรียนเพิ่มและบุคลากรเริ่มเสียความเชื่อมั่น",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "แยกหน้าที่ธุรกิจกับวิชาชีพ",
        "result": "บทบาทบริหารกับการดูแลผู้รับบริการชัดเจนขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ค่าใช้จ่ายเพิ่มคิวนัดไม่แน่นอน",
    "secondChoices": [
      {
        "label": "ทบทวนงบรักษามาตรฐาน",
        "result": "คลินิกเห็นต้นทุนที่ปรับได้โดยไม่ลดมาตรฐาน",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "จัดคิวและกำลังคน",
        "result": "คิวนัดและกำลังคนเริ่มสมดุลขึ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เพิ่มภาระทุกคนเพื่อยอด",
        "result": "ภาระงานเพิ่มจนทีมเหนื่อยและคุณภาพบริการตก",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "วางแผนกับผู้รับผิดชอบ",
        "result": "ผู้เกี่ยวข้องได้แผนรับมือที่ชัดเจน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "hotelowner",
    "name": "เจ้าของกิจการที่พัก",
    "group": "ธุรกิจ",
    "years": 2,
    "req": "study",
    "level": 26,
    "pay": 4700,
    "kind": "ธุรกิจ",
    "burden": "อัตราเข้าพักและทีม",
    "story": "รายได้ลดนอกฤดู",
    "choices": [
      {
        "label": "วางงบกับทีม",
        "result": "ทีมเห็นเงินสำรองและภาระช่วงนอกฤดู",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ทดลองบริการ",
        "result": "บริการทดลองช่วยให้รู้ความต้องการแขก",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ลดคุณภาพไม่แจ้ง",
        "result": "แขกพบว่าบริการไม่ตรงที่ตกลงและร้องเรียน",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับเวลาตามข้อตกลง",
        "result": "พนักงานทราบตารางใหม่ตามข้อตกลง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ห้องจองไม่พอ",
    "secondChoices": [
      {
        "label": "ประสานทางเลือก",
        "result": "แขกได้ที่พักทางเลือกหรือการจัดการตามข้อตกลง",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ตรวจระบบจอง",
        "result": "ระบบจองได้รับการตรวจเพื่อป้องกันเหตุซ้ำ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ปฏิเสธความรับผิดชอบ",
        "result": "แขกไม่พอใจและความน่าเชื่อถือที่พักลดลง",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอทีมดูแลแขก",
        "result": "ทีมช่วยดูแลแขกจนได้ข้อสรุป",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "manager",
    "name": "ผู้จัดการธุรกิจ",
    "group": "ธุรกิจ",
    "years": 3,
    "req": "study",
    "level": 30,
    "pay": 6200,
    "kind": "ธุรกิจ",
    "burden": "เป้าหมายและคน",
    "story": "ทีมทำยอดไม่ถึงและมีภาระส่วนตัว",
    "choices": [
      {
        "label": "ประเมินสาเหตุ",
        "result": "ทีมระบุสาเหตุที่ยอดไม่ถึงและแบ่งปัญหาได้",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ปรับเป้าตามข้อมูล",
        "result": "เป้าหมายใหม่สอดคล้องกับข้อมูลและกำลังคน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "กดดันโดยไม่ฟัง",
        "result": "คนในทีมเครียดและไม่กล้ารายงานปัญหา",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ฝึกและแบ่งงาน",
        "result": "พนักงานได้ฝึกทักษะและแบ่งงานเหมาะขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ข้อเสนอเลื่อนตำแหน่งเพิ่มภาระ",
    "secondChoices": [
      {
        "label": "ตรวจขอบเขตและค่าตอบแทน",
        "result": "คุณเห็นค่าตอบแทนเทียบกับหน้าที่จริง",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "คุยคนสำคัญ",
        "result": "คนสำคัญได้ร่วมคิดถึงผลต่อชีวิต",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับทุกหน้าที่จนไม่พัก",
        "result": "ตำแหน่งใหม่กินเวลาพักมากกว่าที่คาด",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "รักษาตำแหน่งเดิม",
        "result": "คุณรักษาตารางเดิมและยังมีโอกาสเติบโตภายหลัง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "hotel",
    "name": "พนักงานโรงแรม",
    "group": "บริการสำนักงาน",
    "years": 1,
    "req": "skill",
    "level": 18,
    "pay": 3000,
    "kind": "บริการ",
    "burden": "กะต้อนรับ",
    "story": "แขกมาถึงก่อนห้องพร้อม",
    "choices": [
      {
        "label": "อธิบายและเสนอพื้นที่พัก",
        "result": "แขกได้พักระหว่างรอห้องโดยทราบเวลาตามจริง",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ประสานแม่บ้าน",
        "result": "แม่บ้านช่วยยืนยันว่าห้องใดพร้อมโดยไม่ถูกเร่งเกินกำลัง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับปากห้องที่ยังไม่พร้อม",
        "result": "แขกต้องรอนานกว่าที่รับปากและร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอหัวหน้าช่วย",
        "result": "หัวหน้าช่วยหาทางจัดการตามขอบเขตบริการ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "แขกฝากชมเพื่อนร่วมทีม",
    "secondChoices": [
      {
        "label": "ส่งต่อคำชมครบ",
        "result": "เพื่อนร่วมงานได้รับเครดิตจากคำชม",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ทบทวนบริการ",
        "result": "ทีมเห็นวิธีบริการที่ทำให้แขกประทับใจ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับเครดิตคนเดียว",
        "result": "เพื่อนเสียความรู้สึกเมื่อคุณรับเครดิตคนเดียว",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษามาตรฐาน",
        "result": "บริการที่ดีได้รับการรักษาในกะต่อไป",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "barista",
    "name": "บาริสต้า",
    "group": "บริการสำนักงาน",
    "years": 1,
    "req": "skill",
    "level": 17,
    "pay": 2800,
    "kind": "บริการ",
    "burden": "กะร้านและคิว",
    "story": "เครื่องดื่มไม่ตรงรายการ",
    "choices": [
      {
        "label": "ตรวจรายการและแก้ไข",
        "result": "ลูกค้าได้รับเครื่องดื่มตามรายการและทีมแก้ข้อผิดพลาด",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอทีมรับคิว",
        "result": "เพื่อนช่วยรับคิวระหว่างที่คุณแก้รายการ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "โต้เถียงลูกค้า",
        "result": "ลูกค้าไม่พอใจและบรรยากาศหน้าร้านตึงขึ้น",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "แจ้งเวลาจริง",
        "result": "ลูกค้าทราบว่าต้องรออีกเท่าไร",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เพื่อนชวนทดลองเมนู",
    "secondChoices": [
      {
        "label": "ทดลองบันทึกผล",
        "result": "คุณได้สูตรทดลองและข้อมูลรสชาติ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "แบ่งเวลาพัก",
        "result": "กิจกรรมไม่ทำให้วันพักทั้งหมดหายไป",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ใช้ของร้านโดยไม่ตกลง",
        "result": "ร้านต้องทบทวนการใช้วัตถุดิบที่ไม่ได้ตกลงกัน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขออนุญาต",
        "result": "ทีมให้ขอบเขตทดลองเมนูที่ชัดเจน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "sales",
    "name": "พนักงานขาย",
    "group": "บริการสำนักงาน",
    "years": 1,
    "req": "skill",
    "level": 18,
    "pay": 3200,
    "kind": "บริการ",
    "burden": "ยอดขายและลูกค้า",
    "story": "หัวหน้าเร่งปิดยอดทั้งที่ลูกค้าลังเล",
    "choices": [
      {
        "label": "อธิบายข้อดีข้อจำกัด",
        "result": "ลูกค้าเห็นทั้งข้อดีและข้อจำกัดก่อนเลือกซื้อ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ถามความต้องการ",
        "result": "คุณทราบความต้องการจริงแทนการเร่งปิดยอด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กดดันให้ซื้อ",
        "result": "ลูกค้าเสียความเชื่อมั่นและอาจกลับมาร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ให้เวลากลับไปคิด",
        "result": "ลูกค้าได้เวลาคิดโดยไม่ถูกกดดัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เพื่อนทำยอดสูงกว่า",
    "secondChoices": [
      {
        "label": "แลกเปลี่ยนทักษะ",
        "result": "เพื่อนแบ่งปันวิธีทำงานและคุณได้ฝึกทักษะ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ตั้งเป้าตามผลงาน",
        "result": "คุณเห็นความก้าวหน้าจากผลงานของตัวเอง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "แย่งลูกค้าเพื่อน",
        "result": "เกิดข้อพิพาทเรื่องลูกค้าในทีม",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทบทวนความเหมาะงาน",
        "result": "คุณทบทวนว่าต้องการทำงานขายรูปแบบใด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "secretary",
    "name": "เลขานุการ",
    "group": "บริการสำนักงาน",
    "years": 1,
    "req": "skill",
    "level": 22,
    "pay": 3300,
    "kind": "โครงการ",
    "burden": "ตารางนัดและประสาน",
    "story": "ผู้บริหารสองคนขอนัดเวลาเดียวกัน",
    "choices": [
      {
        "label": "ตรวจลำดับสำคัญ",
        "result": "ผู้บริหารทราบข้อขัดกันของตารางและเลือกนัดสำคัญ",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "เสนอเวลาทางเลือก",
        "result": "ทั้งสองนัดได้รับทางเลือกที่ไม่ชนกัน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับปากทั้งสอง",
        "result": "ผู้บริหารคนหนึ่งเสียเวลารอเพราะไม่ได้รับแจ้ง",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอผู้รับผิดชอบตัดสิน",
        "result": "ผู้มีอำนาจตัดสินใจช่วยจัดลำดับหน้าที่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "เอกสารส่วนตัวปะปนกับงาน",
    "secondChoices": [
      {
        "label": "แยกและแจ้งผู้เกี่ยวข้อง",
        "result": "เอกสารกลับไปอยู่กับผู้ที่รับผิดชอบ",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ตรวจระบบจัดเก็บ",
        "result": "ทีมแก้จุดที่ทำให้เอกสารปะปนกัน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "นำไปเล่าต่อ",
        "result": "ข้อมูลส่วนตัวถูกเล่าต่อและความไว้ใจลดลง",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษาขอบเขตข้อมูล",
        "result": "ข้อมูลที่ไม่เกี่ยวข้องกับหน้าที่ไม่ถูกเผยแพร่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "electrician",
    "name": "ช่างไฟฟ้า",
    "group": "ช่างและความงาม",
    "years": 2,
    "req": "skill",
    "level": 25,
    "pay": 3600,
    "kind": "บริการ",
    "burden": "ติดตั้งและความปลอดภัย",
    "story": "ลูกค้าเร่งทั้งที่ต้องตรวจความพร้อม",
    "choices": [
      {
        "label": "ตรวจตามมาตรฐาน",
        "result": "งานได้รับการตรวจตามขั้นตอนก่อนส่งคืนลูกค้า",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอช่างที่มีคุณสมบัติช่วย",
        "result": "ช่างที่มีคุณสมบัติช่วยประเมินงานส่วนที่ยังไม่ชัด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ข้ามการตรวจ",
        "result": "งานต้องตรวจซ้ำและลูกค้าเสียความเชื่อใจ",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงเวลาใหม่",
        "result": "ลูกค้ารับทราบเวลาที่จำเป็นในการทำงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "หลายบ้านเรียกซ่อมพร้อมกัน",
    "secondChoices": [
      {
        "label": "จัดคิวตามจำเป็น",
        "result": "ลูกค้าแต่ละรายได้รับคิวตามความจำเป็น",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "แบ่งงานทีม",
        "result": "ทีมแบ่งงานโดยไม่ต้องรับทุกบ้านคนเดียว",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกงานจนผิดนัด",
        "result": "คุณผิดนัดและต้องกลับมาเจรจากับลูกค้าหลายราย",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ปฏิเสธงานเกินกำลัง",
        "result": "คุณลดคิวให้สอดคล้องกับกำลังทำงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "barber",
    "name": "ช่างตัดผม",
    "group": "ช่างและความงาม",
    "years": 1,
    "req": "skill",
    "level": 19,
    "pay": 3100,
    "kind": "บริการ",
    "burden": "คิวลูกค้า",
    "story": "ลูกค้าอธิบายทรงไม่ชัด",
    "choices": [
      {
        "label": "ทบทวนแบบอ้างอิง",
        "result": "ลูกค้าเห็นแบบทรงผมก่อนเริ่มตัด",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ถามความต้องการ",
        "result": "คุณเข้าใจความยาวและรูปทรงที่ลูกค้าต้องการ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ทำตามที่คิดเอง",
        "result": "ผลไม่ตรงใจลูกค้าและต้องจัดการข้อร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอให้ลูกค้าเลือก",
        "result": "ลูกค้าได้เลือกทรงที่เหมาะกับตัวเอง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าชวนเปิดร้าน",
    "secondChoices": [
      {
        "label": "สำรวจต้นทุนทำเล",
        "result": "คุณเห็นค่าเช่าและจำนวนลูกค้าที่ต้องมี",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ทดลองงานตามข้อตกลง",
        "result": "งานทดลองให้ข้อมูลก่อนตัดสินใจเปิดร้าน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ลงทุนเกินงบ",
        "result": "เงินสำรองลดและร้านยังไม่มีลูกค้าตามหวัง",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "รักษางานเดิม",
        "result": "คุณมีรายได้เดิมและเวลาพัฒนาฝีมือเพิ่ม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "makeup",
    "name": "ช่างแต่งหน้า",
    "group": "ช่างและความงาม",
    "years": 1,
    "req": "portfolio",
    "level": 20,
    "pay": 3300,
    "kind": "สร้างสรรค์",
    "burden": "นัดถ่ายและงานพิธี",
    "story": "ลูกค้ากังวลสไตล์วันสำคัญ",
    "choices": [
      {
        "label": "ถามความต้องการ",
        "result": "ลูกค้าได้อธิบายสไตล์และข้อกังวลก่อนแต่ง",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ทดลองแบบ",
        "result": "แบบทดลองช่วยให้ทั้งคู่เห็นภาพตรงกัน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กดดันตามสไตล์ตัวเอง",
        "result": "ลูกค้าไม่มั่นใจในลุคและรู้สึกไม่ได้รับฟัง",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอทางเลือก",
        "result": "ลูกค้าเลือกสไตล์ที่สบายใจในวันสำคัญ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทีมอยากใช้ภาพลูกค้าโปรโมต",
    "secondChoices": [
      {
        "label": "ขออนุญาต",
        "result": "เจ้าของภาพได้กำหนดขอบเขตการเผยแพร่",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ถ่ายเฉพาะที่ตกลง",
        "result": "ทีมได้สื่อที่อยู่ในข้อตกลง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "เผยแพร่ไม่ขอ",
        "result": "ลูกค้าร้องเรียนว่าไม่ได้อนุญาตใช้ภาพ",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เก็บผลงานส่วนตัว",
        "result": "ผลงานยังเก็บไว้ทบทวนฝีมือได้โดยไม่เผยแพร่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "tattoo",
    "name": "ช่างสัก",
    "group": "ช่างและความงาม",
    "years": 2,
    "req": "portfolio",
    "level": 25,
    "pay": 3500,
    "kind": "สร้างสรรค์",
    "burden": "นัดและมาตรฐานงาน",
    "story": "ลูกค้าเปลี่ยนใจเรื่องแบบ",
    "choices": [
      {
        "label": "ให้เวลาทบทวน",
        "result": "ลูกค้าได้คิดต่อก่อนยืนยันงานที่มีผลระยะยาว",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ปรับตามข้อตกลง",
        "result": "แบบใหม่ได้รับการตกลงก่อนเริ่ม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กดดันเพราะเสียเวลา",
        "result": "ลูกค้ารู้สึกถูกกดดันและความเชื่อใจลดลง",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เลื่อนเมื่อไม่พร้อม",
        "result": "การเลื่อนนัดช่วยให้ลูกค้าไม่ต้องฝืนตัดสินใจ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "คิวแน่นต้องรักษามาตรฐาน",
    "secondChoices": [
      {
        "label": "ลดคิวตามกำลัง",
        "result": "คิวลดลงเพื่อรักษาคุณภาพและความพร้อม",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอทีมจัดนัด",
        "result": "ทีมช่วยจัดนัดตามเวลาที่ทำได้จริง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "เร่งจนละเลยข้อกำหนด",
        "result": "การเร่งงานทำให้ร้านต้องทบทวนมาตรฐานและข้อร้องเรียน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "วางแผนพัก",
        "result": "คุณรักษาเวลาพักและการจัดเตรียมงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "soldier",
    "name": "ทหาร",
    "group": "งานสาธารณะ",
    "years": 2,
    "req": "fitness",
    "level": 26,
    "pay": 3800,
    "kind": "ยุติธรรม",
    "burden": "ฝึกและหน้าที่",
    "story": "เพื่อนในหน่วยมีปัญหาส่วนตัว",
    "choices": [
      {
        "label": "แจ้งช่องทางช่วยเหลือ",
        "result": "เพื่อนรู้ช่องทางขอความช่วยเหลือที่เกี่ยวข้อง",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "รับฟังอย่างเคารพ",
        "result": "เพื่อนได้พูดโดยไม่ถูกเปิดเผยเรื่องส่วนตัว",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ล้อเลียนต่อหน้าคนอื่น",
        "result": "เพื่อนไม่กล้าขอความช่วยเหลือและทีมเสียความไว้ใจ",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ประสานผู้รับผิดชอบ",
        "result": "ผู้รับผิดชอบได้ข้อมูลเพื่อช่วยจัดการตามหน้าที่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "หน้าที่เปลี่ยนกระทบนัดบ้าน",
    "secondChoices": [
      {
        "label": "แจ้งคนสำคัญ",
        "result": "คนสำคัญทราบล่วงหน้าว่าต้องปรับนัด",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ขอปรับตามช่องทาง",
        "result": "ตารางได้รับการพิจารณาตามข้อกำหนด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "หายไปไม่สื่อสาร",
        "result": "คนที่บ้านกังวลและรู้สึกถูกละเลย",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "วางแผนวันพัก",
        "result": "คุณมีแผนใช้วันพักกับคนสำคัญ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "politician",
    "name": "นักการเมืองในเกม",
    "group": "งานสาธารณะ",
    "years": 3,
    "req": "study",
    "level": 32,
    "pay": 5300,
    "kind": "ยุติธรรม",
    "burden": "งานสาธารณะ",
    "story": "ประชาชนต้องการต่างกันและงบจำกัด",
    "choices": [
      {
        "label": "เปิดเกณฑ์รับฟังทุกฝ่าย",
        "result": "ประชาชนเห็นเกณฑ์การจัดลำดับงบที่ตรวจสอบได้",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ขอข้อมูลผลกระทบ",
        "result": "ข้อมูลผลกระทบช่วยให้แผนตรงปัญหามากขึ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากทุกฝ่ายทั้งที่ทำไม่ได้",
        "result": "คำสัญญาเกินงบสร้างความผิดหวังในชุมชน",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอแผนตรวจสอบได้",
        "result": "ประชาชนมีแผนที่ติดตามได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "คนรู้จักขอสิทธิพิเศษ",
    "secondChoices": [
      {
        "label": "แนะนำช่องทางปกติ",
        "result": "คนรู้จักได้รับช่องทางเดียวกับคนทั่วไป",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "เปิดเผยความเกี่ยวข้อง",
        "result": "ความเกี่ยวข้องส่วนตัวได้รับการจัดการอย่างเปิดเผย",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เอื้อคนรู้จัก",
        "result": "ความเป็นธรรมถูกตั้งคำถามและเกิดข้อร้องเรียน",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอผู้รับผิดชอบอื่นดูแล",
        "result": "ผู้รับผิดชอบอื่นพิจารณาเรื่องโดยไม่ต้องอาศัยความสนิท",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "mayor",
    "name": "นายกเทศมนตรีในเกม",
    "group": "งานสาธารณะ",
    "years": 3,
    "req": "study",
    "level": 34,
    "pay": 5400,
    "kind": "ยุติธรรม",
    "burden": "งบเมืองและชุมชน",
    "story": "ชุมชนขอปรับถนนและสวนแต่งบไม่พอ",
    "choices": [
      {
        "label": "เปิดข้อมูลจัดลำดับ",
        "result": "ชุมชนเห็นเหตุผลว่าโครงการใดควรทำก่อน",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ฟังผู้ได้รับผลกระทบ",
        "result": "คนที่ได้รับผลกระทบได้เสนอข้อกังวลก่อนตัดสิน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เลือกพื้นที่คนสนิท",
        "result": "พื้นที่อื่นร้องเรียนว่าไม่ได้รับการพิจารณาอย่างเป็นธรรม",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทดลองแผนเล็ก",
        "result": "เมืองได้ข้อมูลจากแผนทดลองก่อนใช้งบก้อนใหญ่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "โครงการล่าช้าประชาชนถาม",
    "secondChoices": [
      {
        "label": "แจ้งเหตุและแผนจริง",
        "result": "ประชาชนรู้เหตุล่าช้าและแผนถัดไป",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ตรวจอุปสรรคกับทีม",
        "result": "ทีมเห็นอุปสรรคที่ทำให้โครงการไม่คืบ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ปิดข่าวเพื่อภาพลักษณ์",
        "result": "ข่าวที่ปิดไว้กลับมาทำลายความไว้ใจ",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เปิดรับข้อเสนอ",
        "result": "ชุมชนมีช่องทางแจ้งปัญหาและติดตาม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "diplomat",
    "name": "นักการทูต",
    "group": "งานสาธารณะ",
    "years": 4,
    "req": "study",
    "level": 35,
    "pay": 6200,
    "kind": "ยุติธรรม",
    "burden": "ประสานและย้ายประเทศ",
    "story": "ประชุมเข้าใจผิดจากภาษา",
    "choices": [
      {
        "label": "ทบทวนความหมาย",
        "result": "ผู้ร่วมประชุมเข้าใจถ้อยคำและเจตนาตรงกันมากขึ้น",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ประสานผู้ช่วยภาษา",
        "result": "ผู้ช่วยภาษาช่วยตรวจความหมายที่คลาดเคลื่อน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "สรุปแทนอีกฝ่าย",
        "result": "เกิดความเข้าใจผิดและต้องกลับมาอธิบายใหม่",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รอข้อมูลชัด",
        "result": "ทั้งสองฝ่ายยังไม่ผูกพันกับข้อสรุปที่ไม่ชัด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ข้อเสนอไปต่างประเทศ",
    "secondChoices": [
      {
        "label": "ศึกษาภารกิจคุยคนสำคัญ",
        "result": "คนสำคัญเข้าใจระยะเวลาและผลของการย้าย",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "วางแผนย้าย",
        "result": "คุณมีแผนที่พักและการจัดการชีวิตเมื่อย้าย",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับทันทีไม่คุย",
        "result": "คนใกล้ตัวรู้สึกว่าต้องเปลี่ยนชีวิตโดยไม่มีส่วนร่วม",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ทบทวนทางเลือก",
        "result": "คุณได้ทบทวนทางเลือกก่อนรับภารกิจ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "online",
    "name": "พ่อค้าแม่ค้าออนไลน์",
    "group": "อาชีพอิสระ",
    "years": 1,
    "req": "skill",
    "level": 18,
    "pay": 3400,
    "kind": "ธุรกิจ",
    "burden": "ยอดสั่งและส่งของ",
    "story": "ยอดสั่งเกินของที่มี",
    "choices": [
      {
        "label": "แจ้งจำนวนจริง",
        "result": "ลูกค้ารู้จำนวนสินค้าที่ส่งได้จริง",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ประสานผู้ส่ง",
        "result": "ผู้ส่งสินค้าช่วยยืนยันกำหนดส่ง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับยอดทั้งที่ส่งไม่ได้",
        "result": "ออเดอร์ค้างและลูกค้าเริ่มขอคืนเงิน",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "หยุดรับชั่วคราว",
        "result": "ร้านหยุดรับยอดจนจัดการของเดิมได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ลูกค้ารีวิวไม่ดีขอคืน",
    "secondChoices": [
      {
        "label": "ตรวจข้อตกลง",
        "result": "ข้อร้องเรียนได้รับการพิจารณาตามข้อตกลง",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ปรับคำอธิบาย",
        "result": "รายละเอียดสินค้าชัดขึ้นและลดความเข้าใจผิด",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ตอบโต้ด้วยอารมณ์",
        "result": "การโต้ตอบทำให้ลูกค้าไม่อยากกลับมาซื้อ",
        "delta": {
          "m": -1200,
          "stress": 5,
          "security": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "จัดการคืนตามข้อตกลง",
        "result": "การคืนสินค้าช่วยจบข้อพิพาทตามเงื่อนไข",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "writer",
    "name": "นักเขียน",
    "group": "อาชีพอิสระ",
    "years": 1,
    "req": "portfolio",
    "level": 21,
    "pay": 3000,
    "kind": "สร้างสรรค์",
    "burden": "กำหนดส่งและรายได้",
    "story": "สำนักพิมพ์ขอแก้ตอนจบที่รัก",
    "choices": [
      {
        "label": "หารือเหตุผล",
        "result": "คุณกับบรรณาธิการเข้าใจเหตุผลที่อยากรักษาตอนจบ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ลองร่างหลายแบบ",
        "result": "ร่างหลายแบบช่วยเห็นทางเลือกก่อนตัดสิน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ยอมจนไม่ชอบงาน",
        "result": "คุณไม่พอใจกับงานที่ออกมาและหมดแรงเขียน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษาขอบเขตสัญญา",
        "result": "ขอบเขตการแก้งานชัดเจนตามข้อตกลง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้อ่านวิจารณ์แรง",
    "secondChoices": [
      {
        "label": "แยกข้อเสนอที่ใช้ได้",
        "result": "คุณได้ข้อเสนอที่นำไปปรับงานได้จริง",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "คุยเพื่อนนักเขียน",
        "result": "เพื่อนนักเขียนช่วยให้คุณมองคำวิจารณ์อีกด้าน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "โต้เถียงทุกคน",
        "result": "การโต้เถียงกินเวลาและกระทบความสัมพันธ์กับผู้อ่าน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "พักแล้วเขียนต่อ",
        "result": "คุณกลับมาเขียนเมื่อพร้อมแทนการตอบทุกความเห็น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "rider",
    "name": "ไรเดอร์ส่งอาหาร",
    "group": "อาชีพอิสระ",
    "years": 1,
    "req": "skill",
    "level": 15,
    "pay": 2600,
    "kind": "บริการ",
    "burden": "เวลาและเดินทาง",
    "story": "ฝนตกแต่ลูกค้าเร่ง",
    "choices": [
      {
        "label": "แจ้งเวลาและรักษาความปลอดภัย",
        "result": "ลูกค้าทราบเวลาที่เปลี่ยนและคุณไม่ต้องฝืนเดินทาง",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "พักจนพร้อม",
        "result": "คุณพักจนสภาพเหมาะกับการทำงานต่อ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนทำเวลาจนเหนื่อย",
        "result": "ความเหนื่อยและความเสี่ยงกระทบการรับงานถัดไป",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ประสานร้าน",
        "result": "ร้านและลูกค้าได้รับข้อมูลตามช่องทางที่เหมาะสม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ค่าเดินทางเพิ่มรายได้ลด",
    "secondChoices": [
      {
        "label": "บันทึกต้นทุน",
        "result": "คุณเห็นรายได้หลังหักค่าเดินทางจริง",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ปรับเวลารับงาน",
        "result": "เวลารับงานเริ่มเหมาะกับกำลังและต้นทุน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับงานเพิ่มไม่พัก",
        "result": "รายได้เพิ่มบางส่วนแต่ร่างกายพักไม่พอ",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "หางานเสริม",
        "result": "คุณเห็นทางเลือกหารายได้อื่นโดยไม่ต้องรับทุกงาน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "taxi",
    "name": "คนขับแท็กซี่",
    "group": "อาชีพอิสระ",
    "years": 1,
    "req": "skill",
    "level": 17,
    "pay": 2900,
    "kind": "บริการ",
    "burden": "ชั่วโมงเดินทาง",
    "story": "ผู้โดยสารกังวลเส้นทางและค่าโดยสาร",
    "choices": [
      {
        "label": "อธิบายตามกติกา",
        "result": "ผู้โดยสารเข้าใจค่าโดยสารและเส้นทางตามกติกา",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ถามเส้นทางที่ต้องการ",
        "result": "ทั้งคู่ตกลงเส้นทางก่อนเดินทางต่อ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "โต้เถียง",
        "result": "บรรยากาศในรถตึงขึ้นและเกิดข้อร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "หยุดสื่อสารให้ชัด",
        "result": "การสื่อสารชัดขึ้นโดยไม่ต้องโต้เถียง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทำงานหลายวันพักไม่พอ",
    "secondChoices": [
      {
        "label": "กำหนดเวลาพัก",
        "result": "คุณได้พักก่อนเริ่มงานรอบถัดไป",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "จัดงบตามรายได้",
        "result": "งบรายวันสะท้อนรายได้ที่เกิดขึ้นจริง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ขับต่อทั้งที่เหนื่อย",
        "result": "ความเหนื่อยทำให้คุณต้องพักงานมากขึ้นภายหลัง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "พักสำรวจงานอื่น",
        "result": "คุณมีเวลาเรียนรู้ทางเลือกงานอื่น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "researcher",
    "name": "นักวิจัย",
    "group": "วิทยาศาสตร์และการศึกษา",
    "years": 4,
    "req": "science",
    "level": 35,
    "pay": 5200,
    "kind": "การศึกษา",
    "burden": "ทดลองและรายงาน",
    "story": "ผลทดลองไม่สนับสนุนสมมติฐาน",
    "choices": [
      {
        "label": "รายงานตามจริง",
        "result": "ผลการทดลองถูกรายงานตามที่พบและช่วยตั้งคำถามใหม่",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ขอทีมตรวจทาน",
        "result": "ทีมตรวจวิธีและข้อมูลก่อนสรุป",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เลือกแสดงแต่ผลที่ชอบ",
        "result": "การคัดเลือกเฉพาะผลที่ชอบทำให้ข้อสรุปถูกทักท้วง",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับคำถาม",
        "result": "โครงการได้คำถามที่เหมาะกับหลักฐานเพิ่มขึ้น",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ทุนวิจัยใกล้หมด",
    "secondChoices": [
      {
        "label": "จัดลำดับทดลอง",
        "result": "ทรัพยากรถูกใช้กับการทดลองที่จำเป็นก่อน",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "หารือผู้ให้ทุน",
        "result": "ผู้ให้ทุนทราบข้อจำกัดและแผนใหม่",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากผลเกินข้อมูล",
        "result": "ความคาดหวังเกินข้อมูลกดดันทีมและความน่าเชื่อถือ",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ลดขอบเขต",
        "result": "คุณปรับขนาดงานให้เหมาะกับทุน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "lecturer",
    "name": "อาจารย์มหาวิทยาลัย",
    "group": "วิทยาศาสตร์และการศึกษา",
    "years": 5,
    "req": "study",
    "level": 40,
    "pay": 5500,
    "kind": "การศึกษา",
    "burden": "สอนและวิจัย",
    "story": "นักศึกษาขอคำแนะนำอนาคต",
    "choices": [
      {
        "label": "ฟังเป้าหมาย",
        "result": "นักศึกษาได้เล่าเป้าหมายของตัวเองก่อนรับคำแนะนำ",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "แนะนำหลายทาง",
        "result": "เขาเห็นเส้นทางมากกว่าหนึ่งทางโดยไม่ต้องเลือกตามคุณ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "บังคับตามความคิดตน",
        "result": "นักศึกษารู้สึกว่าความสนใจไม่ได้รับการเคารพ",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "นัดคุยเมื่อพร้อม",
        "result": "ทั้งคู่มีเวลาคุยโดยไม่เบียดงานสอน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "งานสอนชนงานวิจัย",
    "secondChoices": [
      {
        "label": "แบ่งเวลาแจ้งทีม",
        "result": "ทีมทราบกำหนดงานและแบ่งเวลาได้ชัดขึ้น",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ขอปรับภาระ",
        "result": "ภาระบางส่วนได้รับการปรับตามความพร้อม",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ทำทุกอย่างจนหมดแรง",
        "result": "งานสอนและวิจัยเริ่มได้รับผลจากความเหนื่อย",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "รักษาเวลาพัก",
        "result": "คุณรักษาช่วงพักและกลับมาทำงานได้ตามแผน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "translator",
    "name": "นักแปล",
    "group": "วิทยาศาสตร์และการศึกษา",
    "years": 2,
    "req": "study",
    "level": 28,
    "pay": 3700,
    "kind": "สร้างสรรค์",
    "burden": "ภาษาและกำหนดส่ง",
    "story": "ต้นฉบับกำกวม",
    "choices": [
      {
        "label": "ถามเจ้าของข้อความ",
        "result": "เจ้าของข้อความช่วยยืนยันความหมายที่ต้องการ",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ตรวจบริบท",
        "result": "บริบทเพิ่มเติมลดความกำกวมของคำแปล",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เดาความหมายไม่แจ้ง",
        "result": "คำแปลคลาดเคลื่อนและลูกค้าขอให้แก้ใหม่",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอคำแปลหลายแบบ",
        "result": "ลูกค้าเห็นตัวเลือกพร้อมเหตุผลต่างกัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าขอเร็วกว่าเดิม",
    "secondChoices": [
      {
        "label": "ปรับขอบเขต",
        "result": "กำหนดส่งใหม่สอดคล้องกับปริมาณงาน",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "แบ่งงานตามตกลง",
        "result": "ผู้ร่วมงานช่วยแบ่งภาระตามข้อตกลง",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากแล้วผิดนัด",
        "result": "การรับปากเกินกำลังทำให้ผิดนัด",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงกำหนดใหม่",
        "result": "ทั้งคู่มีวันส่งที่ตกลงกันได้จริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "librarian",
    "name": "บรรณารักษ์",
    "group": "วิทยาศาสตร์และการศึกษา",
    "years": 3,
    "req": "study",
    "level": 25,
    "pay": 3200,
    "kind": "การศึกษา",
    "burden": "ข้อมูลและผู้ใช้",
    "story": "ผู้ใช้หาเอกสารสำคัญไม่พบ",
    "choices": [
      {
        "label": "ช่วยค้น",
        "result": "ผู้ใช้พบข้อมูลที่ช่วยเริ่มค้นหาเอกสาร",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ประสานแหล่งอื่น",
        "result": "แหล่งอื่นช่วยตรวจว่ามีเอกสารที่ต้องการไหม",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ตำหนิผู้ใช้",
        "result": "ผู้ใช้ไม่อยากกลับมาขอความช่วยเหลืออีก",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "แนะนำวิธีค้น",
        "result": "ผู้ใช้เรียนรู้วิธีค้นด้วยตัวเอง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ชุมชนอยากจัดกิจกรรมอ่าน",
    "secondChoices": [
      {
        "label": "สำรวจความสนใจ",
        "result": "ชุมชนได้เสนอประเภทกิจกรรมที่อยากเข้าร่วม",
        "delta": {
          "knowledge": 4,
          "e": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ชวนอาสา",
        "result": "อาสาสมัครช่วยให้กิจกรรมทำได้ตามกำลัง",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "จัดใหญ่เกินทรัพยากร",
        "result": "ทรัพยากรไม่พอและกิจกรรมต้องถูกลดขนาด",
        "delta": {
          "respect": -4,
          "reliable": -4,
          "stress": 4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เริ่มกิจกรรมเล็ก",
        "result": "กิจกรรมเล็กเริ่มได้จริงและเก็บบทเรียนสำหรับรอบต่อไป",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "builder",
    "name": "ช่างก่อสร้าง",
    "group": "อุตสาหกรรม",
    "years": 1,
    "req": "skill",
    "level": 19,
    "pay": 3200,
    "kind": "บริการ",
    "burden": "หน้างานและกำหนดส่ง",
    "story": "ฝนทำให้แผนหน้างานเปลี่ยน",
    "choices": [
      {
        "label": "จัดงานตามความปลอดภัย",
        "result": "หน้างานถูกจัดใหม่ตามสภาพที่เหมาะสม",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ประสานหัวหน้า",
        "result": "หัวหน้าทีมช่วยกำหนดงานที่ทำต่อได้",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนทำทั้งที่ไม่พร้อม",
        "result": "การฝืนทำงานเพิ่มความเหนื่อยและความเสี่ยงของทีม",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "แจ้งกำหนดใหม่",
        "result": "ลูกค้ารับทราบกำหนดส่งที่ปรับแล้ว",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าเพิ่มงานนอกแบบ",
    "secondChoices": [
      {
        "label": "ตรวจขอบเขต",
        "result": "งานเพิ่มเติมได้รับการแยกจากแบบเดิม",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "เสนอราคาใหม่",
        "result": "ลูกค้าเห็นราคาที่สะท้อนขอบเขตงานใหม่",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับฟรีจนขาดทุน",
        "result": "ต้นทุนที่ไม่ได้ตกลงทำให้รายได้สุทธิลด",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "ขอเวลาพิจารณา",
        "result": "คุณได้เวลาตรวจงานเพิ่มก่อนรับปาก",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "factory",
    "name": "พนักงานโรงงาน",
    "group": "อุตสาหกรรม",
    "years": 1,
    "req": "skill",
    "level": 15,
    "pay": 3000,
    "kind": "บริการ",
    "burden": "กะผลิตและคุณภาพ",
    "story": "สายผลิตพบสินค้าผิดปกติ",
    "choices": [
      {
        "label": "แจ้งตรวจตามขั้นตอน",
        "result": "สินค้าที่ผิดปกติได้รับการแยกตรวจตามขั้นตอน",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอทีมช่วย",
        "result": "ทีมช่วยหาสาเหตุโดยไม่หยุดงานเกินจำเป็น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ปล่อยผ่านเพื่อยอด",
        "result": "สินค้าไม่ตรงเกณฑ์และเกิดงานแก้ภายหลัง",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "บันทึกปัญหา",
        "result": "ข้อมูลปัญหาช่วยให้ทีมป้องกันเหตุซ้ำ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ข้อเสนอทำงานล่วงเวลา",
    "secondChoices": [
      {
        "label": "ประเมินกำลังรายได้",
        "result": "คุณเห็นค่าตอบแทนเทียบกับกำลังของตัวเอง",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ตกลงกะ",
        "result": "ทีมแบ่งกะตามความพร้อมและข้อตกลง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกกะจนหมดแรง",
        "result": "ความเหนื่อยสะสมจนคุณไม่มีเวลาส่วนตัว",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "พักตามแผน",
        "result": "คุณรักษาเวลาพักตามแผน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "welder",
    "name": "ช่างเชื่อม",
    "group": "อุตสาหกรรม",
    "years": 2,
    "req": "skill",
    "level": 23,
    "pay": 3900,
    "kind": "บริการ",
    "burden": "งานฝีมือและหน้างาน",
    "story": "ชิ้นงานต้องตรวจเพิ่ม",
    "choices": [
      {
        "label": "ตรวจตามมาตรฐาน",
        "result": "ชิ้นงานได้รับการตรวจตามมาตรฐานก่อนส่งต่อ",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอช่างอาวุโสช่วย",
        "result": "ช่างอาวุโสช่วยทบทวนส่วนที่คุณยังไม่มั่นใจ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ข้ามการตรวจ",
        "result": "ชิ้นงานต้องกลับมาแก้และความน่าเชื่อถือลดลง",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงเวลาใหม่",
        "result": "ผู้ว่าจ้างได้รับเวลาที่จำเป็นต่อการตรวจ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "โอกาสอบรมเพิ่มเติม",
    "secondChoices": [
      {
        "label": "สมัครตามพร้อม",
        "result": "คุณได้โอกาสฝึกทักษะเพิ่มเติม",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอแบ่งเวลาฝึก",
        "result": "ทีมช่วยจัดเวลาอบรมไม่ให้กระทบงานหลัก",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับภาระเกิน",
        "result": "ภาระฝึกและงานซ้อนจนคุณเริ่มหมดแรง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ฝึกในงานเดิม",
        "result": "คุณฝึกจากงานเดิมโดยมีขอบเขตที่เหมาะสม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "quality",
    "name": "เจ้าหน้าที่ควบคุมคุณภาพ",
    "group": "อุตสาหกรรม",
    "years": 2,
    "req": "study",
    "level": 24,
    "pay": 4100,
    "kind": "โครงการ",
    "burden": "ตรวจและรายงาน",
    "story": "ฝ่ายผลิตอยากปล่อยสินค้าไม่ผ่าน",
    "choices": [
      {
        "label": "ยืนยันเกณฑ์และบันทึก",
        "result": "สินค้าที่ไม่ผ่านถูกจัดการตามเกณฑ์และบันทึกไว้",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ประสานผู้รับผิดชอบ",
        "result": "ผู้รับผิดชอบร่วมประเมินก่อนตัดสินใจ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "อนุมัติเพื่อไม่ขัดใจ",
        "result": "ลูกค้าได้รับสินค้าที่มีปัญหาและกลับมาร้องเรียน",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอทบทวนข้อมูล",
        "result": "ทีมทบทวนข้อมูลก่อนอนุมัติ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ลูกค้าร้องเรียน",
    "secondChoices": [
      {
        "label": "ตรวจสาเหตุร่วมกัน",
        "result": "สาเหตุข้อร้องเรียนได้รับการตรวจร่วมกัน",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ปรับระบบติดตาม",
        "result": "การติดตามสินค้าช่วยลดปัญหาซ้ำ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "โยนความผิด",
        "result": "ทีมเสียความไว้ใจและปัญหายังไม่ได้รับการแก้",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "แจ้งแผนแก้ไข",
        "result": "ลูกค้าได้ข้อมูลแผนจัดการตามข้อเท็จจริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "firefighter",
    "name": "นักดับเพลิง",
    "group": "ดูแลและช่วยเหลือ",
    "years": 2,
    "req": "fitness",
    "level": 25,
    "pay": 3700,
    "kind": "ยุติธรรม",
    "burden": "เวรและงานฉุกเฉิน",
    "story": "ทีมต้องประเมินความพร้อมหลังงานหนัก",
    "choices": [
      {
        "label": "แจ้งสภาพจริง",
        "result": "ทีมทราบข้อจำกัดของคุณหลังงานหนัก",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "ประสานผู้รับผิดชอบ",
        "result": "ผู้รับผิดชอบช่วยจัดภาระตามความพร้อม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนรับหน้าที่",
        "result": "คุณเหนื่อยสะสมและต้องทบทวนความพร้อมอีกครั้ง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "พักตามขั้นตอน",
        "result": "คุณได้พักตามขั้นตอนก่อนกลับไปทำหน้าที่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ครอบครัวกังวลความเสี่ยง",
    "secondChoices": [
      {
        "label": "ฟังและอธิบายขอบเขต",
        "result": "ครอบครัวได้พูดถึงความกังวลโดยไม่ถูกปัดตก",
        "delta": {
          "fair": 4,
          "i": 3,
          "responsibility": 3
        }
      },
      {
        "label": "จัดแผนติดต่อ",
        "result": "คนที่บ้านรู้ว่าจะติดต่อหรือรับข่าวทางไหน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ปฏิเสธการพูดคุย",
        "result": "ความกังวลของครอบครัวกลายเป็นความห่างเหิน",
        "delta": {
          "i": -5,
          "fair": -5,
          "reliable": -4
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอเวลาคิด",
        "result": "คุณมีเวลาคิดก่อนกลับมาคุยกับคนสำคัญ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "caregiver",
    "name": "ผู้ดูแลผู้สูงอายุ",
    "group": "ดูแลและช่วยเหลือ",
    "years": 1,
    "req": "skill",
    "level": 20,
    "pay": 2900,
    "kind": "บ้าน",
    "burden": "เวลาและภาระดูแล",
    "story": "ผู้รับการดูแลอยากตัดสินใจเอง",
    "choices": [
      {
        "label": "เคารพความต้องการ",
        "result": "ผู้รับการดูแลยังมีส่วนเลือกในชีวิตของตัวเอง",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "ปรึกษาทีมดูแล",
        "result": "ทีมช่วยประเมินวิธีสนับสนุนโดยเคารพความต้องการ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ตัดสินใจแทนทุกเรื่อง",
        "result": "ผู้รับการดูแลรู้สึกสูญเสียสิทธิเลือกและไม่ไว้ใจ",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอทางเลือก",
        "result": "เขาเห็นทางเลือกที่เหมาะกับความพร้อม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ภาระดูแลกระทบเวลาส่วนตัว",
    "secondChoices": [
      {
        "label": "ขอแบ่งหน้าที่",
        "result": "คนในทีมแบ่งภาระตามกำลัง",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "จัดเวลาพัก",
        "result": "คุณมีเวลาพักที่ไม่รบกวนความต่อเนื่องของการดูแล",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ทำทุกอย่างคนเดียว",
        "result": "ความเหนื่อยสะสมจนคุณเริ่มจัดการภาระไม่ไหว",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับตามกำลัง",
        "result": "แผนดูแลได้รับการปรับให้ทำได้จริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "socialworker",
    "name": "นักสังคมสงเคราะห์",
    "group": "ดูแลและช่วยเหลือ",
    "years": 4,
    "req": "study",
    "level": 28,
    "pay": 3700,
    "kind": "บ้าน",
    "burden": "ประสานความช่วยเหลือ",
    "story": "ครอบครัวต้องการความช่วยเหลือหลายด้าน",
    "choices": [
      {
        "label": "ฟังประเมินความต้องการ",
        "result": "ครอบครัวได้ระบุเรื่องที่จำเป็นก่อนและเห็นทางเลือก",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "ประสานหน่วยงาน",
        "result": "หน่วยงานที่เกี่ยวข้องช่วยจัดการคนละส่วน",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับปากเกินทรัพยากร",
        "result": "ครอบครัวคาดหวังสิ่งที่คุณไม่มีทรัพยากรจัดให้",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "จัดลำดับจำเป็น",
        "result": "เรื่องเร่งด่วนได้รับการจัดลำดับก่อน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้รับบริการติดต่อนอกเวลา",
    "secondChoices": [
      {
        "label": "แจ้งช่องทางเหมาะสม",
        "result": "ผู้รับบริการรู้ช่องทางที่ใช้ได้ในช่วงนอกเวลา",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "ประสานทีม",
        "result": "ทีมรับช่วงตามหน้าที่โดยไม่ทิ้งผู้รับบริการ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "รับทุกเรื่องคนเดียว",
        "result": "คุณเริ่มไม่มีเวลาพักเพราะต้องรับทุกเรื่องคนเดียว",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษาขอบเขต",
        "result": "ขอบเขตการติดต่อชัดขึ้นโดยยังมีช่องทางช่วยเหลือ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "ngo",
    "name": "เจ้าหน้าที่มูลนิธิ",
    "group": "ดูแลและช่วยเหลือ",
    "years": 2,
    "req": "study",
    "level": 23,
    "pay": 3100,
    "kind": "บ้าน",
    "burden": "โครงการชุมชนและงบ",
    "story": "งบไม่พอทุกกิจกรรม",
    "choices": [
      {
        "label": "เปิดข้อมูลชุมชน",
        "result": "ชุมชนเห็นข้อจำกัดของงบและร่วมกำหนดเป้าหมาย",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "ขอความร่วมมือ",
        "result": "ความร่วมมือช่วยให้โครงการทำได้โดยไม่เพิ่มภาระเกินงบ",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เลือกเฉพาะคนสนิท",
        "result": "คนในชุมชนตั้งคำถามเรื่องความเป็นธรรม",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เริ่มกิจกรรมจำเป็น",
        "result": "กิจกรรมจำเป็นเริ่มก่อนตามทรัพยากรที่มี",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ผู้สนับสนุนขอใช้ภาพผู้รับความช่วยเหลือ",
    "secondChoices": [
      {
        "label": "ขอความยินยอม",
        "result": "ผู้รับความช่วยเหลือได้สิทธิเลือกว่าจะให้ใช้ภาพไหม",
        "delta": {
          "e": 4,
          "responsibility": 3,
          "r": 3
        }
      },
      {
        "label": "ใช้ข้อมูลไม่ระบุตัว",
        "result": "ผู้สนับสนุนได้รับข้อมูลโดยไม่เปิดเผยตัวบุคคล",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "เผยแพร่ไม่ขอ",
        "result": "ผู้เกี่ยวข้องร้องเรียนว่าเรื่องส่วนตัวถูกนำไปใช้",
        "delta": {
          "stress": 5,
          "e": -4,
          "r": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "รักษาศักดิ์ศรี",
        "result": "การรายงานผลงานไม่ต้องแลกกับศักดิ์ศรีของผู้รับบริการ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "designer",
    "name": "กราฟิกดีไซเนอร์",
    "group": "ศิลปะออกแบบ",
    "years": 1,
    "req": "portfolio",
    "level": 23,
    "pay": 3800,
    "kind": "สร้างสรรค์",
    "burden": "ออกแบบและแก้แบบ",
    "story": "ลูกค้าอยากใช้แบบคล้ายคนอื่น",
    "choices": [
      {
        "label": "เสนอแนวต้นฉบับ",
        "result": "ลูกค้าได้แนวทางที่มีเอกลักษณ์ของตัวเอง",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "อธิบายข้อจำกัดสิทธิ",
        "result": "ลูกค้าเข้าใจขอบเขตสิทธิของผลงานก่อนอนุมัติ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ลอกแบบส่งเร็ว",
        "result": "เจ้าของผลงานตั้งคำถามและคุณต้องกลับมาแก้งาน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับโจทย์",
        "result": "โจทย์ใหม่ชัดขึ้นและออกแบบต่อได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "แก้หลายรอบเกินขอบเขต",
    "secondChoices": [
      {
        "label": "ตกลงขอบเขต",
        "result": "ลูกค้าเข้าใจงานที่อยู่ในข้อตกลงเดิม",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "จัดลำดับจุดแก้",
        "result": "ทีมแก้ส่วนสำคัญโดยไม่รื้อทั้งชิ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกงานจนหมดแรง",
        "result": "งานแก้ต่อเนื่องกินเวลาพักและงานรายอื่น",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "กำหนดวันส่ง",
        "result": "ทุกฝ่ายเห็นวันส่งและจำนวนรอบแก้ตรงกัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "illustrator",
    "name": "นักวาดภาพประกอบ",
    "group": "ศิลปะออกแบบ",
    "years": 1,
    "req": "portfolio",
    "level": 23,
    "pay": 3400,
    "kind": "สร้างสรรค์",
    "burden": "งานภาพและส่งงาน",
    "story": "ลูกค้าเปลี่ยนสไตล์หลังเริ่มงาน",
    "choices": [
      {
        "label": "หารือปรับตามตกลง",
        "result": "สไตล์ใหม่ได้รับการหารือก่อนเปลี่ยนงานที่ทำไว้",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "เสนอร่างทดลอง",
        "result": "ร่างทดลองช่วยให้ลูกค้าเห็นทิศทางก่อนแก้เต็มชิ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ยอมแก้ฟรีทุกอย่าง",
        "result": "เวลาทำงานเพิ่มโดยไม่มีค่าตอบแทนตามภาระ",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงงานเพิ่ม",
        "result": "งานเพิ่มได้รับข้อตกลงใหม่ก่อนเริ่ม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "มีคนใช้ภาพโดยไม่ขอ",
    "secondChoices": [
      {
        "label": "ติดต่อชี้แจงสิทธิ",
        "result": "ผู้ใช้ภาพได้รับคำชี้แจงเรื่องสิทธิและขอบเขต",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอคำแนะนำ",
        "result": "คุณเห็นช่องทางจัดการข้อพิพาทที่เหมาะสม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ประจานไม่ตรวจข้อเท็จจริง",
        "result": "การประจานก่อนตรวจข้อมูลทำให้เกิดความขัดแย้งเพิ่ม",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เก็บหลักฐาน",
        "result": "คุณเก็บข้อมูลเพื่อพิจารณาวิธีจัดการต่อ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "fashion",
    "name": "นักออกแบบแฟชั่น",
    "group": "ศิลปะออกแบบ",
    "years": 2,
    "req": "portfolio",
    "level": 25,
    "pay": 3900,
    "kind": "สร้างสรรค์",
    "burden": "คอลเลกชันและต้นทุน",
    "story": "วัสดุเกินงบ",
    "choices": [
      {
        "label": "ทดลองวัสดุอื่น",
        "result": "วัสดุทางเลือกช่วยรักษารูปแบบในงบที่มี",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ปรับแบบตามต้นทุน",
        "result": "แบบใหม่สอดคล้องกับต้นทุนมากขึ้น",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "สั่งเกินเงินสำรอง",
        "result": "เงินสำรองลดลงก่อนที่ผลงานจะสร้างรายได้",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "ลดจำนวนชิ้น",
        "result": "จำนวนชิ้นงานลดลงแต่คุณรักษาคุณภาพที่ทำได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "งานแสดงใกล้ถึงทีมยังไม่พร้อม",
    "secondChoices": [
      {
        "label": "จัดลำดับงาน",
        "result": "ทีมรู้ว่างานใดจำเป็นก่อนวันแสดง",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอคนช่วย",
        "result": "คนช่วยรับงานบางส่วนและทีมมีเวลาทบทวน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กดดันจนทีมหมดแรง",
        "result": "ความเหนื่อยทำให้ทีมเริ่มผิดพลาดและขัดแย้ง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ลดขอบเขต",
        "result": "งานแสดงมีขอบเขตที่ทำได้ทัน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "editor",
    "name": "นักตัดต่อวิดีโอ",
    "group": "ศิลปะออกแบบ",
    "years": 1,
    "req": "portfolio",
    "level": 22,
    "pay": 3900,
    "kind": "สร้างสรรค์",
    "burden": "ไฟล์งานและส่งงาน",
    "story": "ลูกค้าอยากตัดเรื่องเกินจริง",
    "choices": [
      {
        "label": "เสนอวิธีเล่าตรงข้อมูล",
        "result": "ลูกค้าได้วิดีโอที่เล่าเรื่องโดยไม่บิดความหมาย",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอทบทวนเนื้อหา",
        "result": "ทีมตรวจบริบทของภาพและคำพูดก่อนเผยแพร่",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ตัดให้เข้าใจผิด",
        "result": "ผู้ชมเข้าใจเรื่องผิดและลูกค้าต้องจัดการข้อร้องเรียน",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปฏิเสธส่วนไม่เหมาะ",
        "result": "คุณรักษาขอบเขตงานที่ไม่ทำให้ผู้ชมเข้าใจผิด",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ไฟล์สำคัญมีปัญหาก่อนส่ง",
    "secondChoices": [
      {
        "label": "แจ้งและตรวจสำรอง",
        "result": "ลูกค้ารู้ปัญหาไฟล์ก่อนถึงกำหนด",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอทีมช่วยตามขั้นตอน",
        "result": "ทีมช่วยตรวจไฟล์สำรองตามขั้นตอน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ปิดบังจนเลยกำหนด",
        "result": "ลูกค้าเสียความไว้ใจเมื่อรู้ว่างานไม่พร้อม",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงวันส่งใหม่",
        "result": "ทั้งคู่ตกลงกำหนดส่งใหม่ตามความพร้อม",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "fisher",
    "name": "ชาวประมง",
    "group": "เกษตรและอาหาร",
    "years": 1,
    "req": "skill",
    "level": 19,
    "pay": 2800,
    "kind": "ธุรกิจ",
    "burden": "ฤดูกาลและอากาศ",
    "story": "สภาพอากาศไม่เหมาะแผนงาน",
    "choices": [
      {
        "label": "ประเมินและเลื่อน",
        "result": "คุณปรับแผนตามสภาพอากาศและรักษาความพร้อม",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "ประสานคนในพื้นที่",
        "result": "คนในพื้นที่ช่วยประเมินความไม่แน่นอน",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ฝืนออกไปทั้งที่กังวล",
        "result": "การฝืนออกงานเพิ่มความเหนื่อยและความเสี่ยง",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "ทบทวนรายจ่าย",
        "result": "คุณทบทวนค่าใช้จ่ายในวันที่ทำงานไม่ได้",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ],
    "second": "ผลผลิตไม่แน่นอนรายได้ลด",
    "secondChoices": [
      {
        "label": "จัดงบสำรอง",
        "result": "เงินสำรองถูกจัดไว้สำหรับรายจ่ายจำเป็น",
        "delta": {
          "security": 4,
          "problem": 4,
          "knowledge": 2
        }
      },
      {
        "label": "หางานเสริม",
        "result": "รายได้เสริมช่วยแบ่งเบาภาระช่วงผลผลิตต่ำ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "กู้เกินกำลัง",
        "result": "หนี้เพิ่มและครอบครัวต้องปรับงบอีกครั้ง",
        "delta": {
          "m": -2500,
          "security": -4,
          "stress": 5
        },
        "set": {
          "detailFlag": "money"
        }
      },
      {
        "label": "ปรับแผนครอบครัว",
        "result": "คนในบ้านได้ร่วมเลือกแผนตามรายได้จริง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "security": 2
        }
      }
    ]
  },
  {
    "id": "baker",
    "name": "คนทำขนม",
    "group": "เกษตรและอาหาร",
    "years": 1,
    "req": "skill",
    "level": 18,
    "pay": 3100,
    "kind": "บริการ",
    "burden": "ผลิตและคำสั่งซื้อ",
    "story": "ออเดอร์งานเลี้ยงใหญ่เกินกำลัง",
    "choices": [
      {
        "label": "ตกลงจำนวนที่ทำได้",
        "result": "ลูกค้าได้รับจำนวนขนมที่คุณทำได้ตามเวลา",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ขอทีมช่วย",
        "result": "ทีมช่วยแบ่งงานตามความพร้อม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับหมดจนผิดนัด",
        "result": "งานเลี้ยงได้ของไม่ครบและคุณต้องรับผิดชอบ",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "เสนอวันส่งใหม่",
        "result": "ลูกค้าได้ทางเลือกกำหนดส่งที่ชัดเจน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "ต้นทุนวัตถุดิบเพิ่ม",
    "secondChoices": [
      {
        "label": "คำนวณราคาใหม่",
        "result": "ราคาที่เสนอสะท้อนต้นทุนจริงมากขึ้น",
        "delta": {
          "social": 3,
          "reliable": 4,
          "problem": 3
        }
      },
      {
        "label": "ทดลองเมนูอื่น",
        "result": "เมนูทดลองช่วยลดต้นทุนโดยรักษาคุณภาพ",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ลดคุณภาพไม่แจ้ง",
        "result": "ลูกค้าพบว่าขนมไม่ตรงมาตรฐานเดิมและร้องเรียน",
        "delta": {
          "reliable": -4,
          "stress": 5,
          "respect": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับปริมาณชัดเจน",
        "result": "ขนาดและราคาที่เปลี่ยนได้รับการแจ้งก่อนซื้อ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "foodtech",
    "name": "นักเทคโนโลยีอาหาร",
    "group": "เกษตรและอาหาร",
    "years": 4,
    "req": "science",
    "level": 28,
    "pay": 4700,
    "kind": "โครงการ",
    "burden": "ทดสอบและพัฒนาผลิตภัณฑ์",
    "story": "ผลทดสอบไม่ตรงเป้า",
    "choices": [
      {
        "label": "ทบทวนข้อมูล",
        "result": "ทีมเห็นผลทดสอบจริงและวางแผนปรับผลิตภัณฑ์",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "ขอทีมตรวจสอบ",
        "result": "ผู้ร่วมงานตรวจผลและข้อจำกัดก่อนสรุป",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ข้ามผลไม่ผ่าน",
        "result": "สินค้าไม่ผ่านเกณฑ์และต้องกลับมาทบทวนงาน",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ปรับกำหนดส่ง",
        "result": "ผู้เกี่ยวข้องได้กำหนดส่งที่สะท้อนงานทดสอบ",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "การตลาดอยากกล่าวอ้างเกินข้อมูล",
    "secondChoices": [
      {
        "label": "อธิบายข้อจำกัด",
        "result": "การตลาดเข้าใจว่าข้อมูลรองรับข้อความใดได้บ้าง",
        "delta": {
          "problem": 5,
          "skill": 3,
          "reliable": 2
        }
      },
      {
        "label": "เสนอข้อความตรวจสอบได้",
        "result": "ทีมได้ข้อความที่ตรวจสอบได้ก่อนนำไปใช้",
        "delta": {
          "skill": 3,
          "network": 3,
          "knowledge": 3
        }
      },
      {
        "label": "ยอมเพื่อยอด",
        "result": "คำกล่าวอ้างเกินข้อมูลทำให้เกิดข้อร้องเรียน",
        "delta": {
          "reliable": -5,
          "stress": 5,
          "career": -2
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ขอผู้รับผิดชอบพิจารณา",
        "result": "ผู้รับผิดชอบร่วมพิจารณาขอบเขตอย่างชัดเจน",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  },
  {
    "id": "florist",
    "name": "นักจัดดอกไม้",
    "group": "เกษตรและอาหาร",
    "years": 1,
    "req": "portfolio",
    "level": 18,
    "pay": 2900,
    "kind": "สร้างสรรค์",
    "burden": "งานพิธีและวัตถุดิบ",
    "story": "ดอกไม้ตามแบบมาไม่ทัน",
    "choices": [
      {
        "label": "เสนอแบบทดแทน",
        "result": "ลูกค้าเลือกดอกไม้ทดแทนก่อนจัดงาน",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ประสานร้านอื่น",
        "result": "ร้านอื่นช่วยยืนยันว่ามีวัตถุดิบที่เหมาะไหม",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "ส่งต่างจากตกลงไม่แจ้ง",
        "result": "ลูกค้าผิดหวังเมื่อแบบหน้างานไม่ตรงที่ตกลง",
        "delta": {
          "stress": 5,
          "reliable": -4,
          "h": -3
        },
        "set": {
          "detailFlag": "conflict"
        }
      },
      {
        "label": "ตกลงราคาใหม่",
        "result": "ทั้งคู่ตกลงค่าใช้จ่ายตามแบบใหม่",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ],
    "second": "งานใหญ่ชนวันพัก",
    "secondChoices": [
      {
        "label": "กำหนดจำนวนรับได้",
        "result": "คุณรับงานในจำนวนที่รักษาคุณภาพได้",
        "delta": {
          "creative": 4,
          "skill": 3,
          "confidence": 2
        }
      },
      {
        "label": "ขอเพื่อนช่วย",
        "result": "เพื่อนช่วยแบ่งงานตามที่ตกลง",
        "delta": {
          "skill": 3,
          "network": 3,
          "problem": 3
        }
      },
      {
        "label": "รับทุกงานจนผิดนัด",
        "result": "งานบางส่วนส่งช้าและลูกค้าเสียความเชื่อใจ",
        "delta": {
          "stress": 7,
          "energy": -6,
          "physical": -2
        },
        "set": {
          "detailFlag": "time"
        }
      },
      {
        "label": "พักตามแผน",
        "result": "คุณรักษาวันพักและจัดคิวงานใหม่ตามกำลัง",
        "delta": {
          "selfcontrol": 3,
          "patience": 3,
          "energy": 2
        }
      }
    ]
  }
];
window.CAREER_CATALOG.push(...window.CAREER_EXTRA);
