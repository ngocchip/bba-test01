// // Bài 1
// // Tạo ra mảng mới
// const creatCharacters = [
//     { name: "Linh", level: 2, health: 1000 }
// ];
// const charactersPowerUp = creatCharacters.map(character =>
// ({
//     name: character.name.toLocaleUpperCase(),
//     level: character.level * 2,
//     health: character.health * 3
// }));

// console.log(charactersPowerUp);

// // Lọc ra các phần tử có health > 1000
// const creatCharacters = [
//     { name: "Linh", level: 2, health: 2000 },
//     { name: "Hoa", level: 2, health: 3000 },
//     { name: "Nhi", level: 3, health: 1000 }
// ];

// const possibleWinners = creatCharacters.filter(character => character.health > 1000);
// console.log(possibleWinners);


// Bài 2
// Sắp xếp score từ cao đến thấp
const printLeaderboard = [
    { name: "Mario", score: 1000 },
    { name: "Alex", score: 2000 },
    { name: "Haha", score: 500 },
    { name: "Phong", score: 800 },
    { name: "Yoshi", score: 850 }
];
printLeaderboard.sort((a, b) => b.score - a.score);
console.log(printLeaderboard);

// In ra bảng xếp hạng với vị trí 1, 2, 3 thêm icon huy chương phía trước
printLeaderboard.forEach((player, index) => {
    let medal = "";
    if (index === 0) medal = "🥇 1.";
    else if (index === 1) medal = "🥈 2.";
    else if (index === 2) medal = "🥉 3."
    else medal = `${index + 1}.`;

    console.log(`${medal}${player.name} - ${player.score}`);
});
