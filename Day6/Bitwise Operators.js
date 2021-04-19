function getMaxLessThanK(n,k){
    var max = 0;
    for(let i=1; i<= n; i++){
     for( let j=i+1; j<= n; j++){
         var temp = i & j;
         if(temp > max && temp < k)
         max = temp;
     }
    }
    return max;
}