// CHAPTER 38-44

// QUESTION 1

// function powerCalc(a, b) {
//     res = 1;
//     for (let i = 1; i <= b; i++) {
//         res = res * a;
//     }
//     return a+"^"+b+" is: "+res;
// }
// document.write(powerCalc(2,2));

// QUESTION 2

// function yearDeterminer(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return year+" is a leap year!";
//     } else {
//         return year+" is not a leap year";
//     }
// }
// document.write(yearDeterminer(2016));

// QUESTION 3

// function area(a,b,c)
// {
//     let s=(a+b+c)/2;
//     return "The area of the triangle is: "+(s*(s-a)*(s-b)*(s-c));
// }
// document.write(area(2,2,2));

// QUESTION 4

// function mainFunction(m1,m2,m3)
// {
//     function avgFunc(m1,m2,m3)
//     {
//         return (m1+m2+m3)/3;
//     }
//     function percFunc(m1,m2,m3)
//     {
//         return (m1+m2+m3)/3;
//     }
//     document.write("The average marks are: "+avgFunc(m1,m2,m3));
//     document.write("<br>The percentage of marks is: "+percFunc(m1,m2,m3)+"%");
// }
// mainFunction(70,70,70);

// QUESTION 5

// function cIndexOf(text,c)
// {
//     let a=0;
//     for (let i=0; i<text.length;i++)
//     {
//         if (text[i]==c)
//         {
//             return "The index of "+c+" in "+text+" is "+i;
//         }
//     }
// }
// document.write(cIndexOf("Hello",'e'));

// QUESTION 6

// function deleteVowels(text){

//     return "Original Text: "+text+"<br>"+text.replaceAll(/[aeiouAEIOU]/g,"");

// }

// document.write(deleteVowels("Pakistan Zindabad"));

// QUESTION 7

// function vowelDetector(text){
//     text = text.toLowerCase();
//     let count = 0;
//     let a=[];

//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         switch (currentChar + nextChar) {
//             case 'aa':
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
        
//             case 'ea':
//             case 'ee':
//             case 'ei':
//             case 'eo':
//             case 'eu':
            
//             case 'ia':
//             case 'ie':
//             case 'ii':
//             case 'io':
//             case 'iu':

//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'oo':
//             case 'ou':

//             case 'ua':
//             case 'ue':
//             case 'ui':
//             case 'uo':
//             case 'uu':
//                 a[i]=currentChar + nextChar;

//                 break;
//         }
//     }
//     a = a.filter(function (item) {
//         return item !== undefined;
//     });
//     return "Text: "+text+"<br>Such occurrences are: "+a;
// }

// document.write(vowelDetector("Please read this application and give me gratuity"));

// QUESTION 8


//  let d = +prompt("Enter distance in km: ");
//  function calcMDistance(d)
//  {
//     return (d*1000)+" meters";
//  }
//  function calcCDistance(d)
//  {
//     return (d*100000)+" centimeters";
//  }
//  function calcFDistance(d)
//  {
//     return (d*3280.84)+" feet";
//  }
//  function calcIDistance(d)
//  {
//     return (d*39370.1)+" inches";
//  }
//  document.write("<br>"+calcCDistance(12));
//  document.write("<br>"+calcMDistance(12));
//  document.write("<br>"+calcIDistance(12));
//  document.write("<br>"+calcFDistance(12));

// QUESTION 9

// function overTimeCalculator(hrs)
// {
// let hrPay=20;
// let extraHrs=0;
// if (hrs>40)
// extraHrs=hrs-40;
// return "Total overtime hours: "+extraHrs+"<br>Overtime pay is: "+(extraHrs*12)+"RS";
// }
// document.write(overTimeCalculator(47));

// QUESTION 10

// function currentNoteDenominations() {
//     let r = 0, rC = 0, rCash = 0;
//     let input = +prompt("Enter amount you wish to withdraw: ");
//     if (input % 100 === 0) {
//         return "You will have " + (input / 100) + " 100 currency notes for " + input + " Rs";
//     }
//     if (input % 100 !== 0) {
//         r = Math.floor((input / 100));
//         rc = input - (r * 100);
//         if (rc % 50 === 0) {
//             return "You will have " + r + " 100 currency notes & " + (rc / 50) + " 50 currency note for " + input + " Rs";
//         }
//         else if (rc % 50 !== 0) {
//             rCash = rc - (50 * (Math.floor(rc / 50)));
//             return "You will have " + r + " 100 currency notes & " + (Math.floor(rc / 50)) + " 50 currency note & " + rCash / 10 + " 10 currency note for " + input + " Rs";

//         }
//     }
// }

// document.write(currentNoteDenominations());