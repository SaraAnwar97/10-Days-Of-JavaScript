 function action(e) {
                /*Set btn to whichever exists. */
                var btn = e.target; // e.srcElement;
               
                /* Get the clicked element's innerHTML */
                var res = document.getElementById('res');
                var content =  document.getElementById(btn.id).innerHTML;
     switch(content){
         case '1':
         case '0':
         case '+':
         case '-':
         case '*':
         case '/':
             res.innerHTML += content;
             break;
         case 'C':
             res.innerHTML = "";
             break;
        case '=':
            var expression = res.innerHTML;
            var nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivalents
            expression = expression.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerHTML = Math.floor(eval(expression).toString(2));
            break;
     }
 };
     
     var buttons = document.getElementsByTagName('button');
     for (let button of buttons) {
      button.onclick = action;
            };
            
        /* OR
        Set each button to call action(e) when clicked 
            document.getElementById('btn0').onclick = action;
            document.getElementById('btn1').onclick = action;
            document.getElementById('btnSum').onclick = action;
            document.getElementById('btnSub').onclick = action;
            document.getElementById('btnMul').onclick = action;
            document.getElementById('btnDiv').onclick = action;
            document.getElementById('btnClr').onclick = action;
            document.getElementById('btnEql').onclick = action;*/




