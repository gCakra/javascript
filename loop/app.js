// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i <= 10000; i *= 10) {
//     console.log(i);
// }

//const animals = ["dog", "cat", "bird", "fish"];

// for (let i = 0; i < animals.length; i++) {
// console.log(i + 1, animals[i]);
// }

// const studentRow = [
//   ["john", "dean", "jim"],
//   ["jane", "jill", "jane"],
//   ["jill", "jane", "june"],
// ];
//
// for (i = 0; i < studentRow.length; i++) {
//   console.log(`murid jam ke ${i + 1}`);
//   row = studentRow[i];
//   for (j = 0; j < row.length; j++) {
//     console.log(`  ${j + 1}. ${row[j]}`);
//   }
// }

// let pilihan = "abcd";

// for (i = 1; i <= 10; i++) {
//   console.log(`${i}. soal nomor ${i}`);
//   for (j = 0; j < pilihan.length; j++) {
//     console.log(`  ${pilihan[j]}. Pilihan jawaban`);
//   }
// }

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// const password = "peokmendem";

// let guest = prompt("masukan password");
// while (password !== guest) {
//   guest = prompt("masukan password");
// }
// alert("password benar");

let maximum = parseInt(prompt("masukan batas angka"));

while (!maximum) {
  maximum = parseInt(prompt("masukan batas angka"));
}

const targetNum = Math.floor(Math.random() * maximum + 1);

let guess = parseInt(prompt("masukan angka"));

while (guess !== targetNum) {
  if (guess < targetNum) {
    guess = parseInt(prompt("angka terlalu kecil"));
  } else if (guess > targetNum) {
    guess = parseInt(prompt("angka terlalu besar"));
  }
}

alert("angka benar");