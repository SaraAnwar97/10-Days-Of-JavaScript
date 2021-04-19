var btn5 = document.getElementById("btn5");
var btn1 = document.getElementById("btn1");  
var btn2 = document.getElementById("btn2");  
var btn3 = document.getElementById("btn3");  
var btn4 = document.getElementById("btn4");  
var btn6 = document.getElementById("btn6");  
var btn7 = document.getElementById("btn7");  
var btn8 = document.getElementById("btn8"); 
var btn9 = document.getElementById("btn9");  
 btn5.onclick = function() {
     let temp = btn1.innerHTML;
     btn1.innerHTML = btn4.innerHTML;
     btn4.innerHTML = btn7.innerHTML;
     btn7.innerHTML = btn8.innerHTML;
     btn8.innerHTML = btn9.innerHTML;
     btn9.innerHTML = btn6.innerHTML;
     btn6.innerHTML = btn3.innerHTML;
     btn3.innerHTML = btn2.innerHTML;
     btn2.innerHTML = temp;
 };
// Another solution

/*let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.onclick=function() {
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
}
*/