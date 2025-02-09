const h = 5

for (let i = 1; i <= h; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}