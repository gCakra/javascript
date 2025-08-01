// alert(1 + 1);
// console.log("hello world");

// console.log("sebelum pembanding");

// if (1 + 1 === 3) {
//     console.log("benar");
// }

// console.log("sesudah pembanding");

//let angka = Math.random();
//console.log(angka);

//if (angka >= 0.5) {
//  console.log("angka lebih besar dari lima");
//}

//if (angka <= 0.5) {
//  console.log("angka lebih kecil dari lima");
//}

// const hari = prompt("isi hari").toLowerCase();

// if (hari === "senin") {
//   console.log("selamat bekerja");
// } else if (hari === "sabtu") {
//   console.log("semoga jangan cepat berlalu");
// } else {
//   console.log("biasa saja");
// }

// const nilai = "80";

// if (nilai < 50) {
//   console.log("Nilai E");
// } else if (nilai < 70) {
//   console.log("Nilai D");
// } else if (nilai < 80) {
//   console.log("Nilai C");
// } else if (nilai < 90) {
//   console.log("Nilai B");
// } else {
//   console.log("Nilai A");
// }

const password = prompt("buat password");

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('password valid');
  }else {
    console.log('password tidak boleh mengandung spasi');
  }
}else {
  console.log('password kurang dari 6');
}