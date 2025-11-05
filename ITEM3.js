let height = 5;
for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < height; j++) {
        row += (j === i || j === height - i - 1) ? "*" : " ";
    }
    console.log(row);
}
