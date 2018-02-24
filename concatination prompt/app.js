// No 1
// var x = prompt("Enter your name");
// alert("Hi " + x);


// No 2
// var x =  +prompt("enter any Number for generate table", "5")
// for (var i = x; i < x+1;i++){
//     for(var j = 1; j<=10;j++){
//         document.write(i + " x " + j + " = " + (i*j) + "<br>");
//     }
// }

// No 3
// var x = prompt("enter your city name");
// if(x === "karachi"){
//     alert("welcome to the city of light");
// } 
// else{
//     alert("wellcome to " + x);
// }


// No 4
// var x = prompt("enter your gender");
// if(x=== "male"){
//     alert("Good morning Sir");
// }
// else if(x === "female"){
//     alert("Good morning Ma'am");
// }


// No 5
// var x = prompt("enter color of road");
// if(x === "red"){
//     alert("Stop your vehicles");
// } 
// else if(x === "yellow"){
//     alert("vehicle should get ready to move");
    
// }
// else if(x === "green"){
//     alert("GO Go Go ");
// }


// No 6
// var x = +prompt("enter your current age");
// var y = +prompt("enter max age");
// if(x <= y){
//     alert("wellcome");
// }



// No 7
// var x = +prompt("enter your current fuel in litre");
// if(x < 0.25){
//     alert("Refill your fuel");
// }



// No 8
//  var x = +prompt("enter marks in subject 1");
//  var y = +prompt("enter marks in subject 2");
//  var z = +prompt("enter marks in subject 3");
//  var tot = x + y + z;
//  var per =  (tot/ 300)*100;
//  if(per >= 80){
//     document.write("total marks is " + tot+ "<br>");
//     document.write("percentage is " + per+ "%<br>");
//      document.write("A- one grade<br>Excellent");
//  }
//  else if(per >= 70 || per < 80){
//     document.write("total marks is " + tot+ "<br>");
//     document.write("percentage is " + per+ "%<br>");
//      document.write("A grade\ngood");
//  }

//  else if(per >= 60 || per < 70){
//     document.write("total marks is " + tot+ "<br>");
//     document.write("percentage is " + per+ "%<br>");
//      document.write("B grade\nKeep work hard");
//  }
//  else{
//     document.write("total marks is " + tot+ "<br>");
//     document.write("percentage is " + per+ "%<br>");
//      document.write("fail\nSorry");
//  }



// No 9
// var nameOf1 = prompt("enter name of item 1");
// var pr1 = +prompt("enter price of item 1");
// var q1 = +prompt("enter qty");
// var nameOf2 = prompt("Enter name of item 2");
// var pr2 = +prompt("enter price of item 2");
// var q2 = +prompt("enter qty");
// var ship = 200;
// var amnt1 = pr1*q1;
// var amnt2 = pr2*q2;
// var total = ship + amnt1 + amnt2;
// var y;
// if(total > 2000){
//     var x = (10/100)*total;
//      y = total-x;
//      document.write("item ----- qty .......amount<br><br>");
// document.write(nameOf1 +"------"+q1+"-----"+amnt1+"<br>");
// document.write(nameOf2 +"------"+q2+"------"+amnt2+"<br>");
// document.write("total amount.......... "+ total+"<br>");

// document.write("total amount with 10% disc...... "+ y);

// }
// else {
//     y = total;
//     document.write("item .... qty .......amount<br><br>");
// document.write(nameOf1 +"----"+q1+"-----"+amnt1+"<br>");
// document.write(nameOf2 +"-----"+q2+"-----"+amnt2+"<br>");
// document.write("total amount.........."+ y);
// }



// No 10
// var x = 3;
// var y = +prompt("enter lucky Number");
// if(y === x){
//     alert("Bingo!");
// }
// else if(y === (x+1) || y ===(x-1)){
//     alert("you are near at your luck");
// }





// No 11
// var x = +prompt("Enter any number");
// if(x % 3 === 0){
//     alert("the Number is divisible by 3");
// }


// No 12
// var t1 = prompt("enter team 1 name"); 
// var x = +prompt("Enter Team 1 scores");
// var t2 = prompt("enter team 2 name");
// var y = +prompt("Enter team 2 scores");
// if(x === y){
//     alert("match tied");
// }
// else if(x > y){
//     alert(t1 + " Won !");
// }
// else if(x < y){
//     alert(t2 + " Won !");
// }



// No 13
// var x = +prompt("Enter any number");
// if(x % 2 === 0){
//     alert("the Number is even");
// }
// else{
//     alert("Odd number");
// }



// No 14
// var x = Number(prompt("enter any Number"));
// var w = prompt("press operation");
// var y = Number(prompt("enter any operation"));
// if (w === "+") {
//     var ans = x + y;
//     alert(x + "+" + y + "=" + ans);
    
// }
// else if (w === "*") {
    
//     var ans = x * y;
//     alert(x + "*" + y + "=" + ans);
    
// }    
// else if (w === "-") {
//     var ans = x - y;
//     alert(x + "-" + y + "=" + ans);
    
// }
// else if (w === "/") {
//     var ans = x / y;
//     alert(x + "/" + y + "=" + ans);
// }
// else if (w === "%") {
//     var ans = num1 % num2;
//     alert(num1 + "%" + num2 + "=" + ans);
// }
// else 
// {
//     alert("scintific Error");
// } 


// No 15

// var t = prompt("enter temperature");
// if(t > 40){
//     alert("it to hot");
// }
// else if(t > 30 && t < 40)
// {
//     alert("weather is normal");
// }
// else if(t > 20 && t < 30)
// {
//     alert("weather is cool");
// }

// else if(t < 20)
// {
//     alert("OMG weather is too cool");
// }




