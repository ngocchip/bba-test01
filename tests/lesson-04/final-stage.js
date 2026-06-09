function findPairsDivisibleBy17() {
    let pairs = [];
    for (let i = 1; i <= 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                pairs.push([i, j]);
            }
        }
    }
    console.log(pairs);
    console.log(`Tổng cộng: ${pairs.length} cặp`);
}

findPairsDivisibleBy17();
