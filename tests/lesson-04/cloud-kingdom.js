// Bài 1
let playerName = "Mario";
let currentLives = 3;
const coins = [
    {"level": 1, "total": 25},
    {"level": 2, "total": 30},
    {"level": 3, "total": 45}
];

let tongCoin = 0;
for (let i = 0; i < coins.length; i++) {
    tongCoin += coins[i].total;
}
console.log(tongCoin);

let giaTriTrungBinh = tongCoin/3
console.log(giaTriTrungBinh);

let phanDu = tongCoin % 3;
console.log(phanDu);
