function reverseString(s) {
    try{
        let array = s.split("");
        array.reverse();
         s = array.join("");
        console.log(s);
    }catch(err){
        console.log(err.message);
        console.log(s);
    }
    
}