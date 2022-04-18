// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh:
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
let stars = "";
for (let i = 0; i <= n; i++) {
  for (let j = n; j > i; j--) {
    stars += "*";
  }
  stars += "\n";
}
console.log(stars);
