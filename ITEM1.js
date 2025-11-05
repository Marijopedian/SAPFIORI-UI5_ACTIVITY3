function numberToWords(num) {
    if (num < 1 || num > 999) return "Number out of range";

    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    let words = "";

    if (num >= 100) {
        words += ones[Math.floor(num / 100)] + " Hundred ";
        num %= 100;
    }

    if (num >= 20) {
        words += tens[Math.floor(num / 10)] + " ";
        num %= 10;
    } else if (num >= 10) {
        words += teens[num - 10] + " ";
        num = 0;
    }

    if (num > 0) {
        words += ones[num];
    }

    return words.trim();
}

console.log(numberToWords(789)); // Seven Hundred Eighty Nine
