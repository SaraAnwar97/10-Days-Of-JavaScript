function getLetter(s) {
    let letter;
    var i=0;
    switch(s[i]){
        case("a" || "e" || "i" || "u" || "o"):
        letter = "A";
        break;
        case("b" || "c" || "d" || "f" || "g"):
        letter = "B";
        break;
        case("h" || "j" || "k" || "l" || "m"):
        letter = "C";
        break;
        default:
        letter = "D";
        
    }
    // Write your code here
    
    return letter;
}