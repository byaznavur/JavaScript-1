# JavaScript-1

## Mavzular: (JS ga kirish, Variables, Data Types)

- JS nima ?
- JS qanday ishlaydi va JSni HTML ga bog'lash
- Variables - var, let, const
- Data Types
- Primiteve - string, number, boolean, null, undefined, bigIn, symbols
- Non Primiteve - object, arrray, functions
- null vs undefined
- alert(), prompt(), confirm(), document.write(), innerHTML, Template literal
- matematik operatorlar

Ajoyib, har bir mavzuni bosqichma-bosqich ko'rib chiqamiz. Keling, boshlashdan oldin, JavaScriptni qanday ishlashini va HTMLga qanday bog'lanishini ko'rib chiqamiz.

### 1. JavaScript nima?

JavaScript — bu veb-sahifalarni interaktiv qilish uchun ishlatiladigan dasturlash tili. JavaScript yordamida sahifadagi elementlarga dinamik xatti-harakatlar qo'shishingiz, foydalanuvchi bilan o'zaro aloqalarni amalga oshirishingiz, va ko'plab boshqa funksiyalarni bajarishingiz mumkin.

### 2. JavaScript qanday ishlaydi va HTMLga qanday bog'lanadi?

JavaScript kodini HTML fayliga `<script>` tegidan foydalanib kiritish mumkin. Ushbu teg HTML hujjati ichida yoki `<head>` yoki `<body>` qismlarida joylashishi mumkin. JavaScript kodini HTML bilan bog'lashning ikki asosiy usuli mavjud:

- **Inline JavaScript**: Bevosita HTML tegida yozish.

  ```html
  <script>
    alert("Salom, dunyo!");
  </script>
  ```

- **Tashqi JavaScript fayli**: JavaScript kodini alohida `.js` faylga yozish va HTML faylida shu faylni ulash.

  ```html
  <script src="script.js"></script>
  ```

  `script.js` fayli:

  ```javascript
  alert("Salom, dunyo!");
  ```

### 3. O'zgaruvchilar (Variables) - `var`, `let`, `const`

- **`var`**: Eski usulda o'zgaruvchilarni e'lon qilish uchun ishlatiladi. `var` bilan e'lon qilingan o'zgaruvchilar global yoki funksion doirada mavjud bo'ladi.

  ```javascript
  var name = "Ali";
  console.log(name); // Ali
  ```

- **`let`**: Blok doirasidagi o'zgaruvchilarni e'lon qilish uchun ishlatiladi. `let` o'zgaruvchilari faqat u joylashgan blok ichida mavjud bo'ladi.

  ```javascript
  let age = 25;
  if (true) {
    let age = 30;
    console.log(age); // 30
  }
  console.log(age); // 25
  ```

- **`const`**: Doimiy qiymatlarni e'lon qilish uchun ishlatiladi. `const` bilan e'lon qilingan o'zgaruvchilar qiymatini o'zgartirish mumkin emas.
  ```javascript
  const pi = 3.14;
  console.log(pi); // 3.14
  ```

### 4. Ma'lumot turlari (Data Types)

JavaScriptda ma'lumot turlari ikki toifaga bo'linadi: primitiv va no-primitiv.

#### Primitiv turlar

- **String**: Matnli ma'lumotlar.

  ```javascript
  let name = "Ali";
  ```

- **Number**: Raqamli ma'lumotlar.

  ```javascript
  let age = 25;
  ```

- **Boolean**: Haqiqat (true) yoki yolg'on (false) qiymatlari.

  ```javascript
  let isStudent = true;
  ```

- **Null**: Bo'sh yoki aniqlanmagan qiymat.

  ```javascript
  let emptyValue = null;
  ```

- **Undefined**: Qiymat tayinlanmagan o'zgaruvchi.

  ```javascript
  let notDefined;
  console.log(notDefined); // undefined
  ```

- **BigInt**: Juda katta raqamlar uchun ishlatiladi.

  ```javascript
  let bigNumber = 1234567890123456789012345678901234567890n;
  ```

- **Symbol**: Unikal va o'zgarishsiz qiymatlarni yaratish uchun ishlatiladi.
  ```javascript
  let sym = Symbol("description");
  ```

#### No-primitiv turlar

- **Object**: Klaviatura-qiymat juftliklarini saqlash uchun ishlatiladi.

  ```javascript
  let person = {
    name: "Ali",
    age: 25,
  };
  ```

- **Array**: Tartiblangan ma'lumotlar to'plamini saqlash uchun ishlatiladi.

  ```javascript
  let numbers = [1, 2, 3, 4];
  ```

- **Function**: Kod bloklarini qayta ishlatish uchun ishlatiladi.
  ```javascript
  function greet(name) {
    return `Salom, ${name}!`;
  }
  ```

### 5. `null` vs `undefined`

- **`null`**: Aniqroq bo'sh qiymat. O'zgaruvchiga aniq bo'sh qiymat tayinlanadi.

  ```javascript
  let emptyValue = null;
  ```

- **`undefined`**: O'zgaruvchi qiymatsiz qoldirilgan bo'lsa yoki mavjud bo'lmagan xususiyatga murojaat qilingan bo'lsa qaytadi.
  ```javascript
  let notDefined;
  console.log(notDefined); // undefined
  ```

### 6. Funksiyalar (`alert()`, `prompt()`, `confirm()`, `document.write()`, `innerHTML`, Template literals)

- **`alert()`**: Foydalanuvchiga xabar ko'rsatadi.

  ```javascript
  alert("Salom, dunyo!");
  ```

- **`prompt()`**: Foydalanuvchidan matn kiritishni so'raydi.

  ```javascript
  let name = prompt("Ismingiz nima?");
  alert("Salom, " + name);
  ```

- **`confirm()`**: Foydalanuvchidan tasdiqlashni so'raydi (Ha/Yo'q).

  ```javascript
  let isConfirmed = confirm("Siz roziysizmi?");
  ```

- **`document.write()`**: Hujjatga matn qo'shadi (Ko'p hollarda tavsiya etilmaydi).

  ```javascript
  document.write("Salom, dunyo!");
  ```

- **`innerHTML`**: HTML elementlarining ichki tarkibini o'zgartiradi.

  ```javascript
  document.getElementById("myElement").innerHTML = "Yangi matn";
  ```

- **Template literals**: Ma'lumotlarni o'zgaruvchilar bilan birlashtirish imkonini beradi.
  ```javascript
  let name = "Ali";
  let greeting = `Salom, ${name}!`;
  ```

### 7. Matematik operatorlar

- **Qo'shish (`+`)**:

  ```javascript
  let sum = 5 + 3; // 8
  ```

- **Ayirish (`-`)**:

  ```javascript
  let difference = 5 - 3; // 2
  ```

- **Ko'paytirish (`*`)**:

  ```javascript
  let product = 5 * 3; // 15
  ```

- **Bo'lish (`/`)**:

  ```javascript
  let quotient = 15 / 3; // 5
  ```

- **Qoldiq olish (`%`)**:

  ```javascript
  let remainder = 5 % 3; // 2
  ```

- **Ko'rsatkich (`**`)\*\*:
  ```javascript
  let power = 2 ** 3; // 8
  ```

Keling, eng muhim bo‘limlardan boshlaymiz. Dastlabki bosqich sifatida, o‘zgaruvchilar (`var`, `let`, `const`) va ma'lumot turlarini ko‘rib chiqamiz.

### 1. O'zgaruvchilar

#### Nazariya:

- **`var`**: Dasturda eski usulda ishlatilgan, lekin hozirda `let` va `const`ning o‘rnini bosishi tavsiya etiladi. `var` o‘zgaruvchilari funksional doirada yoki global doirada mavjud bo‘ladi.
- **`let`**: Blok doirasida o‘zgaruvchi yaratadi. `let` bilan e'lon qilingan o‘zgaruvchilar faqat ular joylashgan blok ichida mavjud bo‘ladi.
- **`const`**: Doimiy qiymatlarni yaratish uchun ishlatiladi. `const` bilan e'lon qilingan o‘zgaruvchilar qiymatini o‘zgartirish mumkin emas.

#### Amaliy mashqlar:

1. **`var` ishlatish:**

   ```javascript
   var name = "Ali";
   console.log(name); // Ali

   if (true) {
     var name = "Vali"; // Bu `name` o'zgaruvchisi global bo'ladi
     console.log(name); // Vali
   }
   console.log(name); // Vali
   ```

2. **`let` ishlatish:**

   ```javascript
   let age = 25;
   console.log(age); // 25

   if (true) {
     let age = 30; // Bu `age` o'zgaruvchisi faqat shu blok ichida mavjud
     console.log(age); // 30
   }
   console.log(age); // 25
   ```

3. **`const` ishlatish:**

   ```javascript
   const pi = 3.14;
   console.log(pi); // 3.14

   // Pi qiymatini o'zgartirishga harakat qilish
   // pi = 3.14159; // Bu xato beradi
   ```

### 2. Ma'lumot turlari

#### Nazariya:

- **Primiteve turlar**: To‘g‘ridan-to‘g‘ri qiymatlarni saqlaydi (string, number, boolean, null, undefined, bigint, symbol).
- **Non-primitiv turlar**: Ma'lumotlarni tuzilmada saqlaydi (object, array, function).

#### Amaliy mashqlar:

1. **Primitiv turlar:**

   ```javascript
   let name = "Ali"; // String
   let age = 25; // Number
   let isStudent = true; // Boolean
   let emptyValue = null; // Null
   let notDefined; // Undefined
   let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
   let uniqueSymbol = Symbol("description"); // Symbol

   console.log(name); // Ali
   console.log(age); // 25
   console.log(isStudent); // true
   console.log(emptyValue); // null
   console.log(notDefined); // undefined
   console.log(bigNumber); // 1234567890123456789012345678901234567890n
   console.log(uniqueSymbol); // Symbol(description)
   ```

2. **Non-primitiv turlar:**

   ```javascript
   // Object
   let person = {
     name: "Ali",
     age: 25,
   };
   console.log(person.name); // Ali
   console.log(person.age); // 25

   // Array
   let numbers = [1, 2, 3, 4];
   console.log(numbers[0]); // 1
   console.log(numbers.length); // 4

   // Function
   function greet(name) {
     return `Salom, ${name}!`;
   }
   console.log(greet("Ali")); // Salom, Ali!
   ```
