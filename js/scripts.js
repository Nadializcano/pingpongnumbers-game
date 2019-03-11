function pingPong (number){
   var numbersToShow = [];
   for (var i = 1; i <= number; i +=1){
       if(i % 15 === 0){
           numbersToShow.push("pingpong");
       }
       else if(i % 5 === 0){
           numbersToShow.push("pong");
       }
       else if(i % 3 === 0){
           numbersToShow.push("ping");
       }
       else{
           numbersToShow.push(i);
       }
   }
   return numbersToShow
}
