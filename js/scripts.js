// السؤال الأول
// 1
const myName = "نانسي";

// 2
let myAge = 16;

// 3 and 4
console.log("أنا " + myName + " وعمري " + myAge);

// 5 and 6
console.log(5 * myAge);

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let myHobbies = ["الرسم", "الرماية", "الجري", "السباحة"];

// 2
myHobbies[4] = 26;
myHobbies.push(26);
console.log(myHobbies.length);

// 3
myHobbies.pop();
console.log(myHobbies);

// 4
let student = {
  track: "برمجة المواقع",
  language: "JavaScript 🔥",
};

// 5
// student["الأساتذة المساعدين"] = ["Nancy", "Moudhi", "Rahaf", "Hussain"];
student["الأساتذة المساعدين"] = ["نانسي", "موضي", "رهف", "حسين"];

// 6
console.log(student.track);

// 7
console.log(student["الأساتذة المساعدين"][0]);

// console results => console.png
