function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    var r = readLine();
    var area = PI * Math.pow(r,2);
    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}