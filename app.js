// Chapter No 38 to 42;
// Question No 01;
// var a = +prompt('Enter your first value')
// var b = +prompt('Enter your second value')
// function power(a ,b) {
// 	var result = 1;
// 	if(b == undefined)
// 		b = 2;
// 	for(var i=1; i<=b; i++) {
// 		result = result * a;
// 	}
// 	return result;
// }
// document.write(power(a,b));


// Question No 02;

// var a = prompt('Enter any year');
// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// document.write(leapyear(a));


// Question No 03;

// var side1 = +prompt('Enter side 1');
// var side2 = +prompt('Enter side 2');
// var side3 = +prompt('Enter side 3');
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// document.write(area)


// Question No 04;

// var students = +prompt('Enter numbers');
// var Avgmarks = 0;
// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }
// document.write("Average grade: " + (Avgmarks)/students.length);
// if (avg < 60){
//             document.write("Grade : F");
//           }
//         else if (avg < 70) {
//             document.write("Grade : D");
//                   }
//         else if (avg < 80)
//              {
//                 document.write("Grade : C");
//         } else if (avg < 90) {
//             document.write("Grade : B");
//         } else if (avg < 100) {
//             document.write("Grade : A");
// }


// Question No 07;

// function vowel_count(str1)
// {
// var vowel_list = 'aeiouAEIOU';
// var vcount = 0;
// for(var x = 0; x < str1.length ; x++)
// {
// if (vowel_list.indexOf(str1[x]) !== -1)
// {
//     vcount += 1;
// }
// }
// return vcount;
// }
// console.log(vowel_count("Web and mobile"));


// Question No 08;

// var a = +prompt('Enter your value in KM')
// var km = a * 1000;
// document.write( 'THE DISTANCE IN METERS'+ " " + " " +km.toFixed(1) + " meters" + "<br>");
// var f = a *3280.84;
// document.write( 'THE DISTANCE IN FEET'+ " " + " " + f.toFixed(1) + " feet"  + "<br>");
// var inch = a * 39370.08;
// document.write( 'THE DISTANCE IN INCHES'+ " " + " " +inch.toFixed(1) + "inches"  + "<br>");
// var cent = a *   1000 * 100;
// document.write( 'THE DISTANCE IN CENTIMETERS'+ " " + " " +cent.toFixed(1) + "centimeters" + "<br>");


// Question No 09;

// var time = +prompt('Write down your overtime hours')
// document.write('Your over time pay is' + ' ' + (time*12))
