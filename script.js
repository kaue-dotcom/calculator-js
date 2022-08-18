var input = document.getElementById('input'),
   number = document.querySelectorAll('.numbers div'),
   operator = document.querySelectorAll('.operators div'),
   result = document.getElementById('result'),
   clear = document.getElementById('clear'),
   remove = document.getElementById('remove'),
   resultDisplayed = false;

   clear.onclick = function() {
      input.innerHTML = "";
   }

   function apagar(){
      var characters = input.innerHTML;
      var valueCharacters = characters.substr(-1);
      var removeString = characters.replace(valueCharacters, "")
      input.innerHTML = removeString
   }

   for (var i = 0; i < number.length; i++) {
      number[i].addEventListener("click", function(e) {
         /* var operatorCharacters = input.innerHTML;
         var valueOperator = operatorCharacters.substr(-1);
         var replaceOperator = operatorCharacters.replace(valueOperator, e.target.innerHTML)

         switch (valueOperator){
            case "*":
               input.innerHTML = replaceOperator
            break;
            case "-":
               input.innerHTML = replaceOperator
            break;
         case "+":
            input.innerHTML = replaceOperator
            break;
         case "/":
            input.innerHTML = replaceOperator
            break;
         } */
         

         if(e.target.innerHTML == "C"){
            input.innerHTML = "";
         }else{
            input.innerHTML += e.target.innerHTML;
         }
      });
   }

   for (var i = 0; i < operator.length; i++) {
      operator[i].addEventListener("click", function(e) {
         
         input.innerHTML += e.target.innerHTML;
      });
   }

   result.onclick = function() {
      var firstCharacter = input.innerHTML;
      var valueCharacter = firstCharacter.substr(-1);
      
      switch(valueCharacter){
         case "*":
            $('#message').fadeIn(1000);
            setTimeout(function() { 
               $('#message').fadeOut(1000); 
            }, 5000);
            break;
            case "-":
               $('#message').fadeIn(1000);
               setTimeout(function() { 
                  $('#message').fadeOut(1000); 
               }, 5000);
            break;
         case "+":
            $('#message').fadeIn(1000);
            setTimeout(function() { 
               $('#message').fadeOut(1000); 
            }, 5000);
            break;
         case "/":
            $('#message').fadeIn(1000);
            setTimeout(function() { 
               $('#message').fadeOut(1000); 
            }, 5000);
            break;
         default:
            var equacao = input.innerHTML;
            input.innerHTML = eval(equacao);
            break;
      }
   }