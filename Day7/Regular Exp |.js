function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).+\1$/;
    // ^ : Matches beginning of input,
    // ([aeiou]) : Matches any of the characters in the brackets and stores the matched value(group capturing)
    // . :  matches any character:
    // + : stipulates that the captured character must followed by 1 or more occurrences of any character.
    // \1 : matches to previously stored match
    // $ : Matches end of input 
       /*
     * Do not remove the return statement
     */
    return re;
}