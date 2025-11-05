let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let suffix = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let ord = (i + 1) + (i + 1 === 1 ? suffix[1] : i + 1 === 2 ? suffix[2] : i + 1 === 3 ? suffix[3] : suffix[0]);
    console.log(`${ord} choice is ${color[i]}.`);
}
