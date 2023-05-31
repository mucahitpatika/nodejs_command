const arguments = process.argv;
let circleArea = (radius) => {
    return Math.PI * radius * radius;
}
console.log("Yarıçapı " + arguments[2] + " olan dairenin alanı: " + circleArea(arguments[2]));
