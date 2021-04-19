/*
 * Create the function factorial here
 */
function factorial(n){
    for(var i=0; i<= n; i++){
    if(n == 0)
    return 1;
    else
    return n* factorial(n-1);
    }
}