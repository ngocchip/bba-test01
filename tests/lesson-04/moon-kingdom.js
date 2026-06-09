// Bài 1
// Tạo ra mảng mới
const characters = [
    { name: "Linh", level: 2, health: 2000 },
    { name: "Hoa", level: 2, health: 3000 },
    { name: "Nhi", level: 3, health: 1000 }
];
const charactersPowerUp = characters.map(characters => ({
    name: characters.name.toLocaleUpperCase(),
    level: characters.level * 2,
    health: characters.health * 3
}));

console.log(charactersPowerUp);

// Lọc ra các phần tử có health > 1000
const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
console.log(possibleWinners);


// Bài 2
const players = [
    { name: "Mario", score: 1000 },
    { name: "Alex", score: 2000 },
    { name: "Haha", score: 500 },
    { name: "Phong", score: 800 },
    { name: "Yoshi", score: 850 }
];
function printLeaderboard() {
    // Sắp xếp 
    players.sort((a, b) => b.score - a.score);

    // In ra bảng xếp hạng với vị trí 1, 2, 3 thêm icon huy chương phía trước
    players.forEach((player, index) => {
        let medal = "";
        if (index === 0) medal = "🥇 1.";
        else if (index === 1) medal = "🥈 2.";
        else if (index === 2) medal = "🥉 3."
        else medal = `${index + 1}.`;

        console.log(`${medal}${player.name} - ${player.score}`);
    });
}
printLeaderboard();


