//chapter#1
//q1
alertt("welcome to my webpage");
//q2
alert(" Error! Please enter a valid password.");
//q3
alert(" Welcome to js Land..\n Happy Coding!");
//q4
alert("welcome to Js land \n Prevent this page from creating additional dialogs");
console.log(" Hello.. i can run Js through my web browser console");

//chapter#2
//q1
var userName;

//q2 
var firstName="Anglee";
var lastName="Arif";
myName= firstName + lastName;
console.log(myName);
//q3
var message="Helloo World";
alert(message);
//Q4
var name= "Jhone Doe";
alert(name);

var age= 15;
alert(age);

var job= " Certified mobile  Application Development";
alert(job);
//q5
var food= "pizza\n pizz\n piz\n pi\n p";
alert(food);
 //q6
 var name= "angleearif";
 var link="gmail.com";
 var char= "@";
 var email= name+ char + link;
 alert("my email address is:" +email);
//q7
var book=" A better way to learn javascript";
alert("I am  trying to learn from the book"+book);

//q9
var design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ;
alert(design);

//chapter#3
//q1
var age= 20;
myAge=" i am "+ age + " " + "years old";
alert(myAge);
//Q2
alert ("you have visisted this page 14 times");
//q3
var birthyear= 2003;
var type= typeof(birthyear);
document.write("Data type of my birthyear is" + " "+ type);
//q4
var visitorsName= "John Doe";
var productTitle=" XYZ Clothing Store";
var quantity= 5;
document.write( "<br>" + visitorsName +" " + "orderd" + quantity + "T-shirt(s) on" + productTitle);

//chapter#4 legal and illegal variables
//q1
//var num1,num2, num3;

//q3
// illegal variables
 //var 2num;
 //var -result;
//var int;
// var goat 1;
// var double;

//q2
//legal variables
// var num1;
// var _result;
// var birthMonth;
// var $myBalance;
// var $my_emailAddress;
document.write("<br>  Rules for naming JS variables");
document.write(" <br>  Variables names can only contain number, $ and _ For example: $my_1stVariable")
document.write("<br> Variables must begin with a letter. $ or _ . For example $name, _name or name ");
document.write("<br> Variable names are case sensitive");
document.write("<br> Variable names should not be JS keywords");

//chapter#5 Maths Expressions
//q1
var num1= 12;
var num2= 10;
var sum= num1+ num2;
console.log("sum of" +" " + num1 + " " + "and" +" "+ num2 +" " + "is" + " " + sum );

//q2 for subtarction
var num1= 12;
var num2= 10;
var res= num1-num2;
console.log("difference of"+" "+ num1 + " " + "and"+" " + num2+ " " + " is" +" "+ res);

//q2 for multiplication
var num1= 12;
var num2= 10;
var res= num1*num2;
console.log("product of"+" "+ num1 + " " + "and"+" " + num2+ " " + " is" +" " + res);

//q2 divisoin
var num1=24;
var num2=2;
var result= num1/num2;
console.log("Quotient of" + " " + num1 + " " + "and" + " " + num2 +" " + "is" +" "+ result);

//q2 modulus
var num1=27;
var num2=2;
var rem= num1 % num2;
console.log("Remainder of" + " " + num1 + " " + "and" + " " + num2 +" " + "is"+" " + rem);

//q3
var value_1;
console.log("Variable after variable decalaration is undefined");
value_1= 8;
console.log("intial number:" + value_1);
 var increment_value= ++value_1;
 console.log(" value after increment is :" + increment_value);
 var sum= increment_value+7;
 console.log(" Value after addition is :" + sum);
 var decrement_value = --sum;
 console.log(" Value after decrement is:" + decrement_value);
 var rem= decrement_value % 3;
 console.log("The remainder is:" + rem);

 //q4
 var cost_of_ticket= 600;
 var totalCost= cost_of_ticket * 5;
 console.log(" Total cost to buy 5 tickets to movie is"+" " + totalCost + "PKR");

 //Q5
 var num=4;
 for(i=1; i<=10;i++){
 console.log(num + "*" + i + "=" + num*i);
 }

//q6
//conversion nof celsius into farenheit
var temp_celsius= 40;
var temp_farenheit;
temp_farenheit= (temp_celsius* 9/5) + 32;
console.log(temp_celsius+ "C" + " "+ "is" +" "+ temp_farenheit +"F");
  
//conversion of farenhiet into celsius
var temp_farenheit2= 104; 
var temp_celsius2;
temp_celsius2= (temp_farenheit2-32)*5/9;
console.log(temp_farenheit2 +"F" + " " + "is" + " "+ temp_celsius2 +"C");

//Q7
var item1=100;
console.log("Price if item 1 is"+" "+ item1);
var quantityItem1= 4;
console.log("Quantity of item 1 is:"+ " "+ quantityItem1);
var item2 =150;
console.log("Price of item 2 is" + " "+ item2);
var quantityItem2= 3;
console.log("Quantity of item 2 is" + " " + quantityItem2)
var shippingCharges = 100;
console.log("Shipping charges:" +" " + shippingCharges);
var total= (item1*quantityItem1)+(item2*quantityItem2)+100;
console.log("total cost of your order is:" + total);

//q8
var totalMarks= 100;
console.log("Total Marks:"+" " + totalMarks);
var marksObtained= 70;
console.log("Marks Obtained:" + " "+ marksObtained);
var per= (marksObtained*100)/ totalMarks;
console.log("Percentage:"+ " "+ per + "%");

//q9
var pkr= (10* 104.80)+ (25 * 28);
console.log("Total currency in PKR:" +" "+ pkr)
 
//q10
var number= 6;
var res= (number+5)*10/ 2;
console.log("result:" +" "+ res);

//q11
var current_year= 2023;
console.log("Current Year:"+" "+ current_year);
var birthYear= 2003;
console.log("Birth Year:"+" "+ birthYear);
var age= current_year - birthYear;
console.log("Your Age is:"+ " "+ age);

//q12
var radius= 15;
console.log("Radius of a ciurcle:"+ " "+ radius);
var pi=3.147;
var circumference= 2*pi*radius;
console.log("The circumference of the circle is"+" "+ circumference);
 var area= pi*(radius*radius);
 console.log("Area of the circle is:"+ " "+ area);

 //q13
 var snack= "chips";
 console.log("Favourite Snack:"+ " "+ snack);
 var currentAge= 20;
 console.log("Current Age:"+" "+currentAge);
 var maximumAge= 60;
 console.log (" Estimated Maximum Age:"+ " " + maximumAge);
 var amount_per_day= 5;
 console.log("Amount of snacks per day:"+ "  "+amount_per_day);
 var total_for_life= (maximumAge - currentAge) * amount_per_day;
 console.log("You will need" +" "+ total_for_life +" " +  snack+ " " + "to last until the ripe old age of" +" "+ maximumAge);  





