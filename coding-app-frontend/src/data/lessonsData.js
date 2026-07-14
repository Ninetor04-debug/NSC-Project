export const lessons = [
  {
    id: 1,
    title: "ทำความรู้จักกับ Python",
    pdf: "/pdf/python-introduction.pdf",
    duration: 20,
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "ภาษา Python จัดอยู่ในระดับภาษาใด",
        options: [
          "ภาษาระดับต่ำ",
          "ภาษาระดับกลาง",
          "ภาษาระดับสูง",
          "ภาษาเครื่อง"
        ],
        answer: 2,
      },
      {
        id: 2,
        type: "choice",
        question: "ประโยชน์ของภาษา Python คืออะไร",
        options: [
          "ใช้สำหรับการพัฒนาเว็บไซต์",
          "ใช้วิเคราะห์ข้อมูล สร้างเว็บไซต์ พัฒนา AI และเขียนโปรแกรมได้",
          "ใช้สำหรับการสร้างเกม",
          "ถูกทุกข้อ",
        ],
        answer: 1,
      },
      {
        id: 3,
        type: "choice",
        question: "ใครคือผู้สร้างภาษา Python",
        options: [
          "Brendan Eich",
          "Dennis Ritchie",
          "Rasmus Lerdorf",
          "Guido van Rossum",
        ],
        answer: 3,
      },
      {
        id: 4,
        type: "choice",
        question: "ภาษา Python เปิดตัวครั้งแรกในปีใด",
        options: [
          "1990",
          "1991",
          "1995",
          "1998",
        ],
        answer: 1,
      },
      {
        id: 5,
        type: "choice",
        question: "ข้อใดเป็นจุดเด่นของภาษา Python",
        options: [
          "มีความเร็วในการประมวลผลสูงที่สุดเมื่อเทียบกับภาษาอื่น ๆ เช่น C หรือ C++",
          "มีไวยากรณ์ที่เรียบง่าย ไม่ซับซ้อน และอ่านเข้าใจได้คล้ายภาษาอังกฤษ",
          "บังคับให้ผู้เขียนต้องใส่เครื่องหมายเซมิโคลอน ( ; ) ท้ายประโยคเสมอ",
          "เป็นระบบปิด (Closed-source) ที่ต้องซื้อลิขสิทธิ์อย่างเป็นทางการจากผู้พัฒนาเท่านั้น",
        ],
        answer: 1,
      },
      {
        id: 6,
        type: "choice",
        question: "นามสกุลไฟล์ของ Python คืออะไร",
        options: [
          ".py",
          ".js",
          ".cpp",
          ".php",
        ],
        answer: 0,
      },
      {
        id: 7,
        type: "choice",
        question: "ข้อใดเป็นการประกาศตัวแปรใน Python ที่ถูกต้อง",
        options: [
          "x := 10",
          "var x = 10",
          "int x = 10",
          "x = 10",
        ],
        answer: 3,
      },
      {
        id: 8,
        type: "choice",
        question: "คำสั่งใดเป็นการแสดงผลข้อความในภาษา Python",
        options: [
          "print()",
          "printf()",
          "console.log()",
          "echo()",
        ],
        answer: 0,
      },
      {
        id: 10,
        type: "choice",
        question: "ข้อใดอธิบายความแตกต่างระหว่างภาษา Python กับภาษาเครื่องได้ถูกต้องที่สุด",
        options: [
          "ภาษา Python เป็นเลขฐานสอง (0 กับ 1) ส่วนภาษาเครื่องใช้ตัวอักษรภาษาอังกฤษ",
          "ภาษา Python มนุษย์อ่านและเข้าใจได้ง่ายกว่า ส่วนภาษาเครื่องเป็นสิ่งที่คอมพิวเตอร์เข้าใจได้ทันทีโดยไม่ต้องแปล",
          "ภาษา Python ทำงานได้เร็วกว่าภาษาเครื่องหลายเท่า",
          "ทั้งสองภาษาไม่มีความแตกต่างกันเลย สามารถใช้แทนกันได้ทุกกรณี",
        ],
        answer: 1,
      }
    ]
  },
  {
    id: 2,
    title: "ตัวแปร",
    pdf: "/pdf/variable (1).pdf",
    duration: 15,
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "ข้อใดเป็นการประกาศตัวแปรใน Python ที่ถูกต้อง",
        options: [
          "x = 10",
          "int x = 10",
          "var x = 10",
          "let x = 10",
        ],
        answer: 0,
      },
      {
        id: 2,
        type: "choice",
        question: "ตัวแปรใน Python ใช้สำหรับอะไร",
        options: [
          "เก็บข้อมูล",
          "ลบโปรแกรม",
          "ติดตั้ง Python",
          "สร้างโฟลเดอร์",
        ],
        answer: 0,
      },
      {
        id: 3,
        type: "choice",
        question: "ข้อใดเป็นชื่อตัวแปรที่ถูกต้อง",
        options: [
          "2name",
          "my_name",
          "my-name",
          "my name",
        ],
        answer: 1,
      },
      {
        id: 4,
        type: "choice",
        question: "ข้อใดสามารถใช้เป็นชื่อตัวแปรได้",
        options: [
          "student1",
          "for",
          "class",
          "if",
        ],
        answer: 0,
      },
      {
        id: 5,
        type: "choice",
        question: "ข้อใดเป็นการกำหนดค่าตัวแปรข้อความ",
        options: [
          "name = 'Python'",
          "string name = 'Python'",
          "text name = 'Python'",
          "var name : 'Python'",
        ],
        answer: 0,
      },
      {
        id: 6,
        type: "choice",
        question: "เครื่องหมายใดในภาษา Python ที่ใช้สำหรับการกำหนดค่าให้กับตัวแปร",
        options: [
          "เครื่องหมายเท่ากับ ( = )",
          "เครื่องหมายโคลอน ( : )",
          "เครื่องหมายเท่ากับสองตัว ( == )",
          "เครื่องหมายลูกศร ( <- )",
        ],
        answer: 0,
      },
      {
        id: 7,
        type: "choice",
        question: "ชื่อตัวแปรในข้อใดต่อไปนี้ ไม่สามารถใช้งานได้",
        options: [
          "my_class",
          "name",
          "if",
          "print_data",
        ],
        answer: 2,
      },
      {
        id: 8,
        type: "choice",
        question: "หากกำหนด x = 10 แล้วคำสั่ง print(x) จะแสดงผลเป็นอะไร",
        options: [
          "x",
          "10",
          "x = 10",
          "Error",
        ],
        answer: 1,
      },
      {
        id: 9,
        type: "choice",
        question: "กำหนด a = 10 และ b = 20 ผลลัพธ์ของ print(a+b) คืออะไร",
        options: [
          "1020",
          "Error",
          "10 20",
          "30",
        ],
        answer: 3,
      },
      {
        id: 10,
        type: "choice",
        question: "หากกำหนด age = 15 แล้วคำสั่ง print(age) จะแสดงผลเป็นอะไร",
        options: [
          "15",
          "age = 15",
          "age",
          "(age)"
        ],
        answer: 0,
      }
    ],
  },
  {
    id: 3,
    title: "ชนิดข้อมูลพื้นฐาน",
    pdf: "/pdf/basic_variable.pdf",
    duration: 20,
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "ข้อใดเป็นชนิดข้อมูลจำนวนเต็ม (Integer) ในภาษา Python",
        options: [
          "3.14",
          "100",
          "\"100\"",
          "True",
        ],
        answer: 1,
      },
      {
        id: 2,
        type: "choice",
        question: "ข้อใดเป็นชนิดข้อมูลจำนวนจริง (Float)",
        options: [
          "50",
          "\"3.14\"",
          "3.14",
          "False",
        ],
        answer: 2,
      },
      {
        id: 3,
        type: "choice",
        question: "ข้อใดเป็นชนิดข้อมูลข้อความ (String)",
        options: [
          "\"Python\"",
          "100",
          "5.5",
          "True",
        ],
        answer: 0,
      },
      {
        id: 4,
        type: "choice",
        question: "ข้อใดเป็นชนิดข้อมูลตรรกะ (Boolean)",
        options: [
          "\"True\"",
          "1",
          "True",
          "3.14",
        ],
        answer: 2,
      },
      {
        id: 5,
        type: "choice",
        question: "คำสั่งใดใช้ตรวจสอบชนิดข้อมูลของตัวแปร",
        options: [
          "check()",
          "typeof()",
          "type()",
          "data()",
        ],
        answer: 2,
      },
      {
        id: 6,
        type: "choice",
        question: "หากกำหนด age = 18 แล้ว type(age) จะได้ผลลัพธ์เป็นอะไร",
        options: [
          "str",
          "float",
          "int",
          "bool",
        ],
        answer: 2,
      },
      {
        id: 7,
        type: "choice",
        question: "หากกำหนด price = 99.99 แล้วตัวแปร price มีชนิดข้อมูลใด",
        options: [
          "int",
          "str",
          "float",
          "bool",
        ],
        answer: 2,
      },
      {
        id: 8,
        type: "choice",
        question: "หากกำหนด name = \"Alice\" แล้วตัวแปร name มีชนิดข้อมูลใด",
        options: [
          "str",
          "int",
          "float",
          "bool",
        ],
        answer: 0,
      },
      {
        id: 9,
        type: "choice",
        question: "ข้อใดเป็นการกำหนดค่าตัวแปรชนิด Boolean ที่ถูกต้อง",
        options: [
          "status = True",
          "status = \"True\"",
          "status = 1.0",
          "status = '1'",
        ],
        answer: 0,
      },
      {
        id: 10,
        type: "choice",
        question: "ข้อใดกล่าวถูกต้องเกี่ยวกับชนิดข้อมูลในภาษา Python",
        options: [
          "String ใช้เก็บข้อความ",
          "Integer ใช้เก็บข้อความ",
          "Boolean ใช้เก็บเลขทศนิยม",
          "Float ใช้เก็บค่า True และ False",
        ],
        answer: 0,
      }
    ]
  },
  {
    id: 4,
    title: "การแปลงชนิดข้อมูล",
    pdf: "/pdf/python_data.pdf",
    duration: 15,
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "การแปลงชนิดข้อมูลในภาษา Python เรียกว่าอะไร",
        options: [
          "Type Conversion",
          "Data Delete",
          "Variable Loop",
          "Code Change",
        ],
        answer: 0,
      },
      {
        id: 2,
        type: "choice",
        question: "คำสั่งใดใช้แปลงข้อมูลให้เป็นจำนวนเต็ม (Integer)",
        options: [
          "str()",
          "int()",
          "float()",
          "bool()",
        ],
        answer: 1,
      },
      {
        id: 3,
        type: "choice",
        question: "คำสั่งใดใช้แปลงข้อมูลให้เป็นข้อความ (String)",
        options: [
          "text()",
          "string()",
          "str()",
          "char()",
        ],
        answer: 2,
      },
      {
        id: 4,
        type: "choice",
        question: "ผลลัพธ์ของ int(\"50\") คืออะไร",
        options: [
          "\"50\"",
          "50",
          "50.0",
          "Error",
        ],
        answer: 1,
      },
      {
        id: 5,
        type: "choice",
        question: "ผลลัพธ์ของ float(10) คืออะไร",
        options: [
          "10",
          "\"10\"",
          "10.0",
          "Error",
        ],
        answer: 2,
      },
      {
        id: 6,
        type: "choice",
        question: "หากต้องการนำค่าจาก input() ไปคำนวณ ต้องใช้คำสั่งใด",
        options: [
          "str()",
          "int()",
          "print()",
          "type()",
        ],
        answer: 1,
      },
      {
        id: 7,
        type: "choice",
        question: "ผลลัพธ์ของ str(123) คืออะไร",
        options: [
          "123",
          "\"123\"",
          "123.0",
          "Error",
        ],
        answer: 1,
      },
      {
        id: 8,
        type: "choice",
        question: "ข้อใดเป็นการแปลงข้อความเป็นจำนวนทศนิยมที่ถูกต้อง",
        options: [
          "float(\"3.14\")",
          "int(\"3.14\")",
          "str(3.14)",
          "bool(\"3.14\")",
        ],
        answer: 0,
      },
      {
        id: 9,
        type: "choice",
        question: "ผลลัพธ์ของ int(5.9) คืออะไร",
        options: [
          "5.9",
          "6",
          "5",
          "Error",
        ],
        answer: 2,
      },
      {
        id: 10,
        type: "choice",
        question: "ข้อใดกล่าวถูกต้องเกี่ยวกับการแปลงชนิดข้อมูลใน Python",
        options: [
          "สามารถเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่งได้",
          "Python ไม่สามารถเปลี่ยนชนิดข้อมูลได้",
          "ใช้เฉพาะกับข้อมูลข้อความเท่านั้น",
          "ใช้ได้เฉพาะกับตัวเลขจำนวนเต็ม",
        ],
        answer: 0,
      }
    ]
  },
  { 
    id: 5, 
    title: "ตัวดำเนินการทางคณิตศาสตร์", 
    pdf: "/pdf/maths_python.pdf", 
    duration: 20, 
    exerciseType: "fill",
    exercises: [
      {
        id: 1,
        code: [
          { type: "text", value: "x = 10\ny = 3\nprint(x " },
          { type: "blank", id: "b1", answer: "%" },
          { type: "text", value: " y)  # หารเอาเศษ" },
        ],
        options: ["%", "//", "**", "/"],
      },
      {
        id: 2,
        code: [
          { type: "text", value: "result = 2 " },
          { type: "blank", id: "b1", answer: "**" },
          { type: "text", value: " 3\nprint(result)  # ยกกำลัง" },
        ],
        options: ["**", "^", "*", "%%"],
      },
      {
        id: 3,
        code: [
          { type: "text", value: "a = 17\nb = 5\nprint(a " },
          { type: "blank", id: "b1", answer: "//" },
          { type: "text", value: " b)  # หารแบบปัดเศษทิ้ง" },
        ],
        options: ["//", "%", "/", "**"],
      },
      {
        id: 4,
        code : [
          { type: "text", value: "x = 10\ny = 3\nprint(x " },
          { type: "blank", id: "b1", answer: "%" },
          { type: "text", value: " y)  # หาเศษจากการหาร (Modulus)" },
        ],
        options: ["%", "//", "/", "**"],
      },
      {
        id: 5,
        code : [
          { type: "text", value: "base = 5\npower = 3\nprint(base " },
          { type: "blank", id: "b1", answer: "**" },
          { type: "text", value: " power)  # การยกกำลัง (5 กำลัง 3)" },
        ],
        options: ["**", "*", "%", "//"],
      },
      {
        id: 6,
        code: [
          { type: "text", value: "price = 100\ndiscount = 15\ntotal = price " },
          { type: "blank", id: "b1", answer: "-" },
          { type: "text", value: " discount  # คำนวณราคาส่วนลด" },
        ],
        options: ["-", "+", "/", "*"],
      },
      {
        id: 7,
        code: [
          { type: "text", value: "width = 5\nheight = 4\narea = width " },
          { type: "blank", id: "b1", answer: "*" },
          { type: "text", value: " height  # คำนวณพื้นที่สี่เหลี่ยม (กว้าง คูณ สูง)" },
        ],
        options: ["*", "**", "+", "%"],
      },
      {
        id: 8,
        code: [
          { type: "text", value: "total_money = 500\nfriends = 4\nshare = total_money " },
          { type: "blank", id: "b1", answer: "/" },
          { type: "text", value: " friends  # หารเพื่อให้ได้ผลลัพธ์เป็นทศนิยม (Float)" },
        ],
        options: ["/", "//", "%", "*"],
      },
      {
        id: 9,
        code: [
          { type: "text", value: "score = 85\nbonus = 5\nfinal_score = score " },
          { type: "blank", id: "b1", answer: "+" },
          { type: "text", value: " bonus  # รวมคะแนนโบนัสเพิ่ม" },
        ],
        options: ["+", "-", "*", "/"],
      },
      {
        id: 10,
        code:[
          { type: "text", value: "a = 20\nb = 6\nprint(a " },
          { type: "blank", id: "b1", answer: "//" },
          { type: "text", value: " b)  # หารเอาส่วน (ปัดเศษทิ้ง ผลลัพธ์คือ 3)" },
        ],
        options: ["//", "%", "/", "**"],
      }
    ] 
  },
  { 
    id: 6, 
    title: "ตัวดำเนินการเปรียบเทียบ", 
    pdf: "/pdf/python_compare.pdf",
    duration: 15, 
    exerciseType: "fill",
    exercises: [
      {
        id: 1,
        code: [
          { type: "text", value: "x = 5\ny = 5\nprint(x " },
          { type: "blank", id: "b1", answer: "==" },
          { type: "text", value: " y)  # ตรวจสอบว่าเท่ากันหรือไม่" },
        ],
        options: ["==", "=", "!=", "==="],
      },
      {
        id: 2,
        code: [
          { type: "text", value: "a = 3\nb = 7\nprint(a " },
          { type: "blank", id: "b1", answer: "!=" },
          { type: "text", value: " b)  # ตรวจสอบว่าไม่เท่ากัน" },
        ],
        options: ["!=", "==", ">=", "<="],
      },
      {
        id: 3,
        code: [
          { type: "text", value: "score = 10\nprint(score " },
          { type: "blank", id: "b1", answer: ">=" },
          { type: "text", value: " 10)  # มากกว่าหรือเท่ากับ" },
        ],
        options: [">=", ">", "<=", "=="],
      },
      {
        id: 4,
        code: [
          { type: "text", value: "x = 10\ny = 10\nprint(x " },
          { type: "blank", id: "b1", answer: "==" },
          { type: "text", value: " y)  # ตรวจสอบว่า x เท่ากับ y หรือไม่ (ผลลัพธ์เป็น True)" },
        ],
        options: ["==", "=", "!=", "<="],
      },
      {
        id: 5,
        code: [
          { type: "text", value: "age = 18\nprint(age " },
          { type: "blank", id: "b1", answer: ">=" },
          { type: "text", value: " 18)  # ตรวจสอบว่าอายุมากกว่าหรือเท่ากับ 18 ปีเพื่อเช็กสิทธิ์" },
        ],
        options: [">=", ">", "=>", "=="],
      },
      {
        id: 6,
        code: [
          { type: "text", value: "user_input = \"admin\"\nstored_role = \"member\"\nprint(user_input " },
          { type: "blank", id: "b1", answer: "!=" },
          { type: "text", value: " stored_role)  # ตรวจสอบว่าข้อมูลไม่ตรงกัน (ผลลัพธ์เป็น True)" },
        ],
        options: ["!=", "==", "<>", "not"],
      },
      {
        id: 7,
        code: [
          { type: "text", value: "score = 49\nprint(score " },
          { type: "blank", id: "b1", answer: "<" },
          { type: "text", value: " 50)  # ตรวจสอบว่าคะแนนน้อยกว่าเกณฑ์ขั้นต่ำ (ผลลัพธ์เป็น True)" },
        ],
        options: ["<", "<=", ">", "=="],        
      },
      {
        id: 8,
        code: [
          { type: "text", value: "items_in_cart = 5\nmax_limit = 5\nprint(items_in_cart " },
          { type: "blank", id: "b1", answer: "<=" },
          { type: "text", value: " max_limit)  # ตรวจสอบว่าสินค้าไม่เกินจำนวนที่จำกัด" },
        ],
        options: ["<=", "<", "=<", "!="],
      },
      {
        id: 9,
        code: [
          { type: "text", value: "temperature = 38.5\nprint(temperature " },
          { type: "blank", id: "b1", answer: ">" },
          { type: "text", value: " 37.5)  # ตรวจสอบว่าอุณหภูมิร่างกายสูงกว่าเกณฑ์ปกติ (เริ่มมีไข้)" },
        ],        
        options: [">", ">=", "<", "=="],
      },
      {
        id: 10,
        code: [
          { type: "text", value: "is_active = True\nprint(is_active " },
          { type: "blank", id: "b1", answer: "==" },
          { type: "text", value: " True)  # เปรียบเทียบสถานะเปิดใช้งานกับค่าบูลีน" },
        ],
        options: ["==", "=", "is", "!="],
      }
    ] 
  },
  { 
    id: 7, 
    title: "ตัวดำเนินการบูลีน", 
    pdf: "/pdf/boolean_variable.pdf",
    duration: 15, 
    exerciseType: "fill",
    exercises: [
      {
        id: 1,
        code: [
          { type: "text", value: "a = True\nb = False\nprint(a " },
          { type: "blank", id: "b1", answer: "and" },
          { type: "text", value: " b)  # ต้องเป็น True ทั้งคู่ ถึงจะได้ True" },
        ],
        options: ["and", "or", "not", "xor"],
      },
      {
        id: 2,
        code: [
          { type: "text", value: "flag = True\nprint(" },
          { type: "blank", id: "b1", answer: "not" },
          { type: "text", value: " flag)  # กลับค่าความจริง" },
        ],
        options: ["not", "and", "or", "!"],
      },
      {
        id: 3,
        code: [
          { type: "text", value: "x = 5 > 3\ny = 2 > 10\nprint(x " },
          { type: "blank", id: "b1", answer: "or" },
          { type: "text", value: " y)  # จริงแค่ด้านใดด้านหนึ่งก็พอ" },
        ],
        options: ["or", "and", "not", "=="],
      },
    ] 
  },
  { 
    id: 8, 
    title: "การทำงานแบบมีเงื่อนไข (if-else)",
    pdf: "/pdf/if-else.pdf", 
    duration: 25, 
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "หากมีหลายเงื่อนไขให้ตรวจสอบต่อจาก if ใน Python จะใช้คำสั่งใด",
        options: [
          "else if",
          "elseif",
          "elif",
          "if else"
        ],
        answer: 2
      },
      {
        id: 2,
        type: "choice",
        question: "สัญลักษณ์ใดที่ต้องใส่ไว้ท้ายประโยคหลังคำสั่ง if, elif หรือ else เสมอ",
        options: [
          "เครื่องหมายเซมิโคลอน ( ; )",
          "เครื่องหมายโคลอน ( : )",
          "เครื่องหมายจุลภาค ( , )",
          "เครื่องหมายจุด ( . )"
        ],
        answer: 1
      },
      {
        id: 3,
        type: "choice",
        question: "Python ใช้สิ่งใดในการกำหนดขอบเขตบล็อกคำสั่งภายใน if",
        options: [
          "วงเล็บปีกกา { }",
          "วงเล็บโค้ง ( )",
          "การย่อหน้า (Indentation / Tab หรือ Space)",
          "คำสำคัญ end"
        ],
        answer: 2
      },
      {
        id: 4,
        type: "choice",
        question: "หากต้องการตรวจสอบเงื่อนไขเพิ่มเติมเมื่อเงื่อนไขแรกใน if เป็นเท็จ ต้องใช้คำสั่งใดต่อ",
        options: [
          "else if",
          "elseif",
          "elif",
          "if else"
        ],
        answer: 2
      },
      {
        id: 5,
        type: "choice",
        question: "คำสั่ง else จะทำงานเมื่อใด",
        options: [
          "ทำงานเมื่อเงื่อนไขทั้งหมดก่อนหน้านี้เป็นเท็จ (False)",
          "ทำงานเมื่อเงื่อนไขก่อนหน้านี้เป็นจริง (True)",
          "ทำงานพร้อมกับคำสั่ง if เสมอ",
          "ทำงานเมื่อโปรแกรมเกิดข้อผิดพลาด (Error)"
        ],
        answer: 0
      },
      {
        id: 6,
        type: "choice",
        question: "หากต้องการให้บล็อกเงื่อนไขทำงานเมื่อเงื่อนไขทั้งสองฝั่ง 'เป็นจริงพร้อมกัน' ต้องใช้ตัวดำเนินการตรรกศาสตร์ใด",
        options: [
          "or",
          "not",
          "and",
          "&&"
        ],
        answer: 2       
      },
      {
        id: 7,
        type: "choice",
        question: "หากต้องการให้บล็อกเงื่อนไขทำงานขอแค่มีเงื่อนไขใดเงื่อนไขหนึ่ง 'เป็นจริงเพียงอย่างเดียว' ต้องใช้คำสั่งใด",
        options: [
          "and",
          "or",
          "not",
          "||"
        ],
        answer: 1        
      },
      {
        id: 8,
        type: "choice",
        question: "ตัวดำเนินการตรรกศาสตร์ใดใช้สำหรับ 'กลับค่า' จากจริงเป็นเท็จ หรือจากเท็จเป็นจริง",
        options: [
          "not",
          "and",
          "or",
          "!"
        ],
        answer: 0        
      },
      {
        id: 9,
        type: "choice",
        question: "ในภาษา Python สิ่งใดใช้สำหรับบอกว่าโค้ดบรรทัดใดอยู่ภายใต้บล็อกของคำสั่ง if-else",
        options: [
          "การใส่เครื่องหมายปีกกา { } ครอบโค้ด",
          "การย่อหน้า (Indentation) หรือการเคาะช่องว่างเข้าด้านใน",
          "การใส่เครื่องหมายวงเล็บ ( ) ครอบโค้ด",
          "การพิมพ์คำสั่ง end ไว้ท้ายบล็อก"
        ],
        answer: 1        
      },
      {
        id: 10,
        type: "choice",
        question: "สมมติให้ x = 5 โค้ดต่อไปนี้จะแสดงผลลัพธ์อย่างไร\nif x > 10:\n    print('A')\nelif x == 5:\n    print('B')\nelse:\n    print('C')",
        options: [
          "แสดงคำว่า A",
          "แสดงคำว่า B",
          "แสดงคำว่า C",
          "ไม่แสดงผลลัพธ์ใดๆ เลย"
        ],
        answer: 1        
      }
    ] 
  },
  { 
    id: 9, 
    title: "การทำงานแบบวนซ้ำ (while loop)",
    pdf: "/pdf/while loop.pdf", 
    duration: 25, 
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "while loop จะทำงานซ้ำไปเรื่อย ๆ เมื่อเงื่อนไขเป็นอย่างไร",
        options: [
          "เป็น True",
          "เป็น False",
          "เป็นศูนย์",
          "เกิด Error"
        ],
        answer: 0
      },
      {
        id: 2,
        type: "choice",
        question: "หากต้องการจบลูปหรือออกจากลูปทันทีก่อนกำหนด ต้องใช้คำสั่งใด",
        options: [
          "continue",
          "stop",
          "exit",
          "break"
        ],
        answer: 3
      },
      {
        id: 3,
        type: "choice",
        question: "หากลูปทำงานไม่สิ้นสุด (Infinite Loop) สาเหตุเกิดจากอะไร",
        options: [
          "เงื่อนไขของ while เป็น False ตั้งแต่เริ่ม",
          "เงื่อนไขของ while เป็น True เสมอและไม่มีการเปลี่ยนค่าตัวแปรในลูป",
          "ใช้คำสั่ง break ไวเกินไป",
          "พิมพ์คำว่า while ผิด"
        ],
        answer: 1
      },
      {
        id: 4,
        type: "choice",
        question: "คำสั่ง while loop จะทำงานซ้ำซ้อนไปเรื่อยๆ ตราบใดที่เงื่อนไขที่กำหนดเป็นอย่างไร",
        options: [
          "เป็นจริง (True)",
          "เป็นเท็จ (False)",
          "เป็นศูนย์ (Zero)",
          "ไม่มีข้อถูก"
        ],
        answer: 0
      },
      {
        id: 5,
        type: "choice",
        question: "หากต้องการสั่งให้โปรแกรม 'กระโดดออกจากลูปทันที' โดยไม่สนใจเงื่อนไขของ while ต้องใช้คำสั่งใด",
        options: [
          "continue",
          "exit",
          "break",
          "stop"
        ], 
        answer: 2
      },
      {
        id: 6,
        type: "choice",
        question: "คำสั่งใดใช้สำหรับ 'ข้ามโค้ดที่เหลือในรอบปัจจุบัน' แล้วย้อนกลับไปเริ่มเช็กเงื่อนไขเพื่อทำรอบถัดไปทันที",
        options: [
          "break",
          "continue",
          "pass",
          "skip"
        ],
        answer: 1        
      },
      {
        id: 7,
        type: "choice",
        question: "ข้อใดคือสาเหตุหลักที่ทำให้เกิด 'ลูปไม่สิ้นสุด (Infinite Loop)' ในการใช้ while",
        options: [
          "ลืมพิมพ์เครื่องหมายโคลอน ( : ) ไว้ท้าย while",
          "เงื่อนไขของ while เป็น True เสมอ และไม่มีการเปลี่ยนแปลงค่าตัวแปรเงื่อนไขในบล็อก",
          "ตั้งค่าเริ่มต้นของตัวแปรมากเกินไป",
          "ใช้คำสั่ง print ภายในลูปบ่อยเกินไป"
        ],
        answer: 1        
      },
      {
        id: 8,
        type: "choice",
        question: "สมมติให้ x = 1 โค้ดต่อไปนี้จะพิมพ์คำว่า 'Hello' ออกมาทั้งหมดกี่รอบ\nwhile x < 4:\n    print('Hello')\n    x += 1",
        options: [
          "2 รอบ",
          "3 รอบ",
          "4 รอบ",
          "ทำงานไม่สิ้นสุด (Infinite Loop)"
        ],
        answer: 1        
      },
      {
        id: 9,
        type: "choice",
        question: "สมมติโค้ดต่อไปนี้:\nx = 5\nwhile x > 0:\n    print(x)\nโค้ดนี้จะส่งผลอย่างไรกับคอมพิวเตอร์",
        options: [
          "พิมพ์เลข 5, 4, 3, 2, 1 แล้วหยุดทำงาน",
          "โปรแกรมจะไม่ทำงานเลยเนื่องจากเงื่อนไขผิดพลาด",
          "เกิด Infinite Loop พิมพ์เลข 5 ซ้ำๆ ไม่หยุด เพราะ x ไม่เคยลดค่าลง",
          "พิมพ์เลข 5 ออกมาตัวเดียวแล้วจบโปรแกรม"
        ],
        answer: 2       
      },
      {
        id: 10,
        type: "choice",
        question: "สมมติโค้ดต่อไปนี้ ผลลัพธ์บนหน้าจอจะเป็นเลขอะไร\ni = 1\nwhile i <= 5:\n    if i == 3:\n        break\n    print(i)\n    i += 1",
        options: [
          "1, 2",
          "1, 2, 3",
          "1, 2, 4, 5",
          "3"
        ],
        answer: 0        
      }
    ] 
  },
  { 
    id: 10, 
    title: "การทำงานแบบวนซ้ำ (for loop)",
    pdf: "/pdf/for loop.pdf", 
    duration: 25, 
    exerciseType: "choice",
    exercises: [
      {
        id: 1,
        type: "choice",
        question: "ฟังก์ชันใดมักถูกนำมาใช้ร่วมกับ for loop เพื่อกำหนดรอบการทำงานด้วยตัวเลข",
        options: [
          "length()",
          "range()",
          "loop()",
          "count()"
        ],
        answer: 1
      },
      {
        id: 2,
        type: "choice",
        question: "คำสั่ง range(5) จะสร้างชุดตัวเลขใดขึ้นมา",
        options: [
          "1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4",
          "1, 2, 3, 4"
        ],
        answer: 2
      },
      {
        id: 3,
        type: "choice",
        question: "หากใช้คำสั่ง continue ภายในลูป จะเกิดอะไรขึ้น",
        options: [
          "ออกจากลูปทันที",
          "ข้ามโค้ดที่เหลือในรอบนั้น แล้วไปเริ่มต้นรอบถัดไปทันที",
          "หยุดการทำงานของโปรแกรมทั้งหมด",
          "ทำซ้ำโค้ดบรรทัดเดิมอีกรอบ"
        ],
        answer: 1
      },
      {
        id: 4,
        type: "choice",
        question: "คำสั่ง range(1, 6) ใน Python จะสร้างชุดตัวเลขใดขึ้นมาสำหรับการวนลูป",
        options: [
          "1, 2, 3, 4, 5, 6",
          "1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4, 5",
          "1, 3, 5"
        ],
        answer: 1       
      },
      {
        id: 5,
        type: "choice",
        question: "หากต้องการให้ for loop วนถอยหลัง โดยเริ่มจาก 10 ลงไปจนถึง 1 โค้ดในข้อใดเขียนได้ถูกต้อง",
        options: [
          "for i in range(10, 1):",
          "for i in range(10, 0, -1):",
          "for i in range(1, 11, -1):",
          "for i in range(10, 1, -1):"
        ],
        answer: 1
      },      
      {
        id: 6,
        type: "choice",
        question: "สมมติให้ fruits = ['apple', 'banana', 'cherry'] ข้อใดคือการใช้ for loop เพื่อพิมพ์สมาชิกทุกตัวใน List ออกมา",
        options: [
          "for i in range(fruits): print(i)",
          "for x in fruits: print(x)",
          "while fruits: print(fruits)",
          "for x = 1 to 3 in fruits: print(x)"
        ],
        answer: 1
      },
      {
        id: 7,
        type: "choice",
        question: "สมมติโค้ดต่อไปนี้ จะพิมพ์คำว่า 'Python' ออกมาทั้งหมดกี่บรรทัด\nfor i in range(2, 8, 2):\n    print('Python')",
        options: [
          "3 บรรทัด",
          "4 บรรทัด",
          "6 บรรทัด",
          "8 บรรทัด"
        ],
        answer: 0
      },
      {
        id: 8,
        type: "choice",
        question: "สมมติโค้ดต่อไปนี้ ผลลัพธ์รวมของตัวแปร total บนหน้าจอจะเป็นเลขอะไร\ntotal = 0\nfor x in range(1, 4):\n    total += x\nprint(total)",
        options: [
          "3",
          "4",
          "6",
          "10"
        ],
        answer: 2
      },
      {
        id: 9,
        type: "choice",
        question: "เมื่อรันโค้ดต่อไปนี้ ผลลัพธ์ที่ได้บนหน้าจอจะเป็นอย่างไร\nfor letter in 'IT':\n    print(letter)",
        options: [
          "พิมพ์คำว่า IT ในบรรทัดเดียวกัน",
          "พิมพ์ตัวอักษร I และ T แยกกันคนละบรรทัด",
          "เกิดข้อผิดพลาด (Error) เนื่องจากวนลูปบนข้อความไม่ได้",
          "พิมพ์ตัวอักษร T แล้วตามด้วย I"
        ],
        answer: 1
      },
      {
        id: 10,
        type: "choice",
        question: "สมมติโค้ดต่อไปนี้ ผลลัพธ์สุดท้ายจะแสดงเลขอะไรบ้าง\nfor i in range(1, 5):\n    if i == 3:\n        continue\n    print(i, end=' ')",
        options: [
          "1 2",
          "1 2 4 5",
          "1 2 4",
          "3"
        ],
        answer: 2
      },
    ] 
  }
];