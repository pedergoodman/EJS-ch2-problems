console.log('JS Loops Practice');


// Triangle loop
console.log('Triangle Loop');
let triangle = ''
for (let i = 1; i < 8; i++) {
    triangle += '#'
    console.log(triangle);
}


// FizzBuzz challenge
/* 
goal
print numbers in sequence
if the number is divisible by 3 and not 5, print 'Fizz'
if the number is divisible by 5 and not 3, print 'Buzz'
if the number is divisible by 5 AND 3, print 'FizzBuzz'
otherwise just print the number
*/


//FizzBuzz v1

for (let i = 1; i <=100 ; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz:', i);
    } else if (i % 3 === 0) {
        console.log('Fizz:', i);
    } else if (i % 5 === 0) {
        console.log('Buzz:', i);
    } else {
        console.log(i);
    }
}

// FizzBuzz more efficient (Corey's suggestion)

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizBuzz:", i);
        } else {
            console.log('Fizz:', i);
        }
    } else if (i % 5 === 0) {
        console.log('Buzz:', i);
    } else {
    console.log(i);
    }
}



// Chessboard 
/* 
GOAL
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters should 
form a chessboard.

Should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/


let chessboard = '' // variable string wil be assigned to
let size = 12 // area of 'chessboard

for (let l = 1; l <= size; l++) { // handles each line
  for (let i = 1; i <= size; i++) { // handles each char w/in line
  	if (l%2 !== 0){ // checks for line odd
      if (i%2 !== 0){ // checks for character count odd
          chessboard += " ";
      } else {
          chessboard += "#"
      }
    } else if  (l%2 === 0){ // checks for line even
      if (i%2 !== 0){ // checks for character count even
          chessboard += "#";
      } else {
          chessboard += " "
      }
    }
  } 

  chessboard += '\n' 

}
console.log(chessboard)