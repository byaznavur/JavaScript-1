// Parametr ish kuni ish kuni bo'lsa, to'g'ri bo'ladi va biz ta'tilda bo'lsak, ta'til parametri to'g'ri bo'ladi. Agar ish kuni bo'lmasa yoki ta'tilda bo'lsak, biz uxlaymiz. Agar biz uxlasak haqiqatga qayting.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
  // Hafta kuni emas yoki ta'tilda bo‘lsak, uxlash mumkin
  return !weekday || vacation;
}

// Misollar:
console.log(sleepIn(true, true)); // true
console.log(sleepIn(true, false)); // false
console.log(sleepIn(false, true)); // true
