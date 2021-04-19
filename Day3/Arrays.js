function getSecondLargest(nums) {
    //duplicates removed
    const distinct = [...new Set(nums)];
    // Complete the function
   const distinctSorted = distinct.sort(function(a,b){return a-b;} );
    //console.log(distinctSorted);
   return distinctSorted[distinctSorted.length-2];
    
}