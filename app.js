// function get (a,b) {
//     for(let i = a; i<=b; i++){
//         if(i % 2 !== 0){
//             console.log(i);
            
//         }
//     }
// }

// // get(1, 20);




// function toq (a,b){
//     for(let i = a; i<=b; i++){
//         if (i % 2 !==0){
//             console.log(i);
            
//         }
//     }
// }

// toq(1, 100)

// ======================================================================

    // 1        Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini qaytarib bersin
//  function sum(x,y) {
//   return x + y
//  }
//  console.log(sum(5, 2));
//  console.log(sum(-3, -6));
//  console.log(sum(7, 3));
 
//  ============================================================

// 2      Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

// function toSekunds(minutes) {
// return (minutes * 60)
// }

// console.log(toSekunds(5));
// console.log(toSekunds(3));
// console.log(toSekunds(2));
 
// ============================================================================

// 3    Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

// function nextInteger(int) {
//   return int + 1;
// }

// console.log(nextInteger(0));   // 1
// console.log(nextInteger(9));   // 10
// console.log(nextInteger(-3));  // -2

// ============================================================================

// 4      .Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// function uchburchakYuzi(asos, balandlik) {
// return (asos * balandlik) /2
// }

// console.log(uchburchakYuzi(3, 2) ) // 3;
// console.log(uchburchakYuzi(7, 4));   // 14
// console.log(uchburchakYuzi(10, 10)); // 50

// ==================================================================

// 5            Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.


// function ageToDays(age) {
// return 
// }

// console.log(ageToDays(65));
// console.log(ageToDays(0));
// console.log(ageToDays(20));

//  ==================================================================

//  6     Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
// function kub (kb){
//     return kb * kb * kb
// }
// console.log(kub(3)); // 27
// console.log(kub(5));  // 125
// console.log(kub(10)); // 1000

// ========================================================================

//    8        .Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

//     function power(x,y) {
// return x * y
// }
// console.log(power(230, 10)); // 2300
// console.log(power(110, 3)); // 330
// console.log(power(480, 20)); // 9600

//  ========================================================================

// 9   Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

// function hourToSekunds(hour) {
// return hour * 3600
// }

// console.log(hourToSekunds(2));// 7200
// console.log(hourToSekunds(10)); // 36000
// console.log(hourToSekunds(24)); // 86400


// ========================================================================================================================================











// 1           Shunday bir function yozingki, u string qabul qiladi va boshidagi hamda oxiridagi bo'sh joylarni olib tashlab, barcha harflarni kichik harfga o'tkazsin.

// function tozalash(matn) {
//   return matn.trim().toLowerCase();
// }

// console.log(tozalash("   SALOM DUNYO   "));
// console.log(tozalash("   HeLLo   ")); 

//===============================================================================================

//  2  Shunday bir function yozingki, u string qabul qiladi va email ichida '@' va '.' belgilar borligini tekshirib, valid yoki invalid ekanligini qaytarsin.

 
// function emailTekshir(email) {
//   if (email.includes("@") && email.includes(".")) {
//     return "valid";
//   } else {
//     return "invalid";
//   }
// }

// console.log(emailTekshir("test@gmail.com"));  //  valid
// console.log(emailTekshir("salom@mail"));      //  invalid
// console.log(emailTekshir("hello.com"));     // invalid
 
// ===============================================================================================

// 3      Shunday bir function yozingki, u string qabul qiladi va undagi so'zlar sonini aniqlasin.

// function sozlarSoni(matn) {
//   return matn.trim().split(/\s+/).length;
// }

// console.log(sozlarSoni("Salom dunyo"));    // 2
// console.log(sozlarSoni("Men JavaScript organyapman"));  // 3
// console.log(sozlarSoni("   Bugun havo yaxshi   "));   // 4

// =======================================================================================

// 4    Shunday bir function yozingki, u string qabul qiladi va uning birinchi harfini katta harfga o'tkazib qaytarsin.

// function birinchiHarfKatta(matn) {
//   return matn.charAt(0).toUpperCase() + matn.slice(1);
// }

// // Test
// console.log(birinchiHarfKatta("salom")); // Salom
// console.log(birinchiHarfKatta("dunyo")); // Dunyo
// console.log(birinchiHarfKatta("javascript")); // Javascript

// ==========================================================================================

// 5   Shunday bir function yozingki, u string qabul qiladi va uni palindrome ekanligini tekshirsin.

// function palindromeTekshir(matn) {
//   let teskari = matn.split("").reverse().join("");

//   if (matn === teskari) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromeTekshir("alla"));   // true
// console.log(palindromeTekshir("radar"));  // true
// console.log(palindromeTekshir("salom"));  // false

// ========================================================================================

// 6   Shunday bir function yozingki, u string qabul qiladi va eng uzun so'zni aniqlab qaytarsin.

// function engUzunSoz(matn) {
//   const sozlar = matn.split(" ");
//   let engUzun = "";

//   for (let i = 0; i < sozlar.length; i++) {
//     if (sozlar[i].length > engUzun.length) {
//       engUzun = sozlar[i];
//     }
//   }

//   return engUzun;
// }

// console.log(engUzunSoz("Salom dunyo"));                // "Salom"
// console.log(engUzunSoz("Men JavaScript organyapman")); // "JavaScript"
// console.log(engUzunSoz("Bugun havo juda yaxshi"));     // "yaxshi"

// ===================================================================================

// 7   Shunday bir function yozingki, u string qabul qiladi va har bir harf nechta marta qatnashganini object ko'rinishida qaytarsin.

// function harfSanash(matn) {
//   let natija = {};

//   // Kichik harfga o'giramiz va bo'shliqlarni o'chiramiz
//   let tozaMatn = matn.toLowerCase().replace(/ /g, "");

//   for (let i = 0; i < tozaMatn.length; i++) {
//     let harf = tozaMatn[i];
//     if (natija[harf]) {
//       natija[harf]++;   // harf mavjud bo'lsa, +1
//     } else {
//       natija[harf] = 1; // agar harf yoq bolsa, 1 dan boshlaydi
//     }
//   }
//   return natija;
// }

// console.log(harfSanash("Alla"));       // { a: 2, l: 2 }
// console.log(harfSanash("Salom Olam")); // { s:1, a:2, l:2, o:2, m:1 }

// ==============================================================================

// 8   Shunday bir function yozingki, u string (telefon raqam) qabul qiladi va faqat oxirgi 4 ta raqamni ko'rsatib, qolganini '*' bilan yashirsin

// function telefonYashir(raqam) {
//   let oxirgi = raqam.slice(-4);              // oxirgi 4 ta raqam
//   let yashirin = "*".repeat(raqam.length - 4); // qolganlarni * bilan toldiradi
//   return yashirin + oxirgi;
// }

// console.log(telefonYashir("910443693")); // ********3693
// console.log(telefonYashir("901234567"));    // *****4567
// console.log(telefonYashir("12345678"));     // ****5678            // ohirgi raqamni oladi

// ===========================================================================================

// 9   Shunday bir function yozingki, u string qabul qiladi va uni camelCase formatga o'tkazsin.

// function camelCase(matn) {
//   let sozlar = matn.toLowerCase().split(" ");
  
//   for (let i = 1; i < sozlar.length; i++) {
//     sozlar[i] = sozlar[i][0].toUpperCase() + sozlar[i].slice(1);
//   }
  
//   return sozlar.join("");
// }

// console.log(camelCase("salom dunyo"));     // "salom Dunyo"
// console.log(camelCase("men java script o'rganaman")); // "menJava Script O'rganaman"
// console.log(camelCase("bu oddiy misol"));     // "bu Oddiy Misol"

// ===============================================================================================

// 10  Shunday bir function yozingki, u string qabul qiladi va uni URL slug formatga o'tkazsin (kichik harf, probellar o'rniga '-').  BONUS: Shunday bir function yozingki, u string qabul qiladi va undagi takrorlanmagan birinchi belgini topib qaytarsin.

// function slugYasash(matn) {
//   return matn.trim().toLowerCase().split(" ").join("-");
// }

// console.log(slugYasash("Salom Dunyo"));          // salom-dunyo
// console.log(slugYasash("JavaScript Darslari"));  // javascript-darslari
// console.log(slugYasash("Frontend Developer"));   // frontend-developer        // - shu hiziq ni qoshadi

// ==============================================================================================

// 11  Shunday bir function yozingki, u string qabul qiladi va uni to'liq katta harflarga o'tkazib qaytarsin.

// function toUpperText(str) {
//   return str.toUpperCase();
// }

// console.log(toUpperText("salom dunyo")); // SALOM DUNYO
// console.log(toUpperText("javascript"));  // JAVASCRIPT     // kichkina yizuvni kotta harf qlib beradi

// ==============================================================================================

// 12   Shunday bir function yozingki, u string qabul qiladi va uni to'liq kichik harflarga o'tkazib qaytarsin.

// function toLowerText(str) {
//   return str.toLowerCase();
// }

// console.log(toLowerText("SALOM DUNYO")); // salom dunyo
// console.log(toLowerText("JavaScript"));  // javascript

// ===========================================================================================

// 13   Shunday bir function yozingki, u string qabul qiladi va uning uzunligini (length) qaytarsin

// function getLength(str) {
//   return str.length;
// }

// console.log(getLength("salom"));      // 5
// console.log(getLength("javascript")); // 10

// ======================================================================================

// 14   Shunday bir function yozingki, u string qabul qiladi va unda nechta 'a' harfi borligini qaytarsin

// function aHarfSanash(matn) {
//   let son = 0;
  
//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i].toLowerCase() === "a") {
//       son++;
//     }
//   }
  
//   return son;
// }

// console.log(aHarfSanash("salom dunyo"));   // 1
// console.log(aHarfSanash("Ananas"));        // 3
// console.log(aHarfSanash("JavaScript"));    // 2
// console.log(aHarfSanash("bbbb"));          // 0

// =========================================================================================

// 15   Shunday bir function yozingki, u string qabul qiladi va agar string ichida 'js' so'zi bo'lsa true, bo'lmasa false qaytarsin.

// function hasJS(str) {
//   return str.includes("js");
// }

// console.log(hasJS("javascript")); // false
// console.log(hasJS("I love js"));  // true
// console.log(hasJS("JS is fun"));  // false

// ==========================================================================================

// 16  Shunday bir function yozingki, u string qabul qiladi va uning oxirgi belgisini qaytarsin

// function getLastChar(str) {
//   return str[str.length - 1];
// }

// console.log(getLastChar("salom"));      // m
// console.log(getLastChar("javascript")); // t   // ohirgi harf ni oladi

// =======================================================================================

// 17    Shunday bir function yozingki, u string qabul qiladi va uning birinchi 3 ta belgisini qaytarsin

// function getFirst3(str) {
//     return str.slice(0, 3);
// }

// console.log(getFirst3("salom"));      // sal
// console.log(getFirst3("javascript")); // jav
// console.log(getFirst3("hi"));         // hi  //boshidagi 3 ta harf ni oladi

// =====================================================================================

// 18  Shunday bir function yozingki, u string qabul qiladi va undagi barcha probellarni olib tashlab qaytarsin

// function removeSpaces(str) {
//   return str.replaceAll(" ", "");
// }

// console.log(removeSpaces("salom dunyo")); // salomdunyo
// console.log(removeSpaces(" j a v a "));  // java          // orasidagi joyni yoq qiladi

// 19  Shunday bir function yozingki, u string qabul qiladi va har bir belgini orasiga '-' qo'yib qaytarsin.

// function addDashes(str) {
//   return str.split("").join("-");
// }

// console.log(addDashes("salom")); // s-a-l-o-m
// console.log(addDashes("js"));    // j-s

// ========================================================================================

// 20  Shunday bir function yozingki, u string qabul qiladi va agar string bo'sh bo'lsa 'empty', aks holda 'not empty' qaytarsin.

function checkEmpty(str) {
  return str === "" ? "empty" : "not empty";
}

console.log(checkEmpty(""));      // empty    // true
console.log(checkEmpty("salom")); // not empty    //folse



