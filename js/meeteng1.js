// const userInfo = Number(prompt("Введіть число від 0 до 60"));

// // if (userInfo >= 0 && userInfo <= 15) {
// //   alert("Ваше число знаходиться в 1-й чверті");
// // } else if (userInfo >= 16 && userInfo <= 30) {
// //   alert("Ваше число знаходиться в 2-й чверті");
// // } else if (userInfo >= 31 && userInfo <= 45) {
// //   alert("Ваше число знаходиться в 3-й чверті");
// // } else if (userInfo >= 46 && userInfo <= 60) {
// //   alert("Ваше число знаходиться в 4-й чверті");
// // } else if (isNaN(userInfo)) {
// //   alert("Введіть будь-ласка, число");
// // } else {
// //   alert("Ваші дані не валідні");
// // }
// console.log(typeof userInfo);
// console.log(userInfo);
let userInput = Number(prompt("Введіть число більше 100"));
let check;

//   alert("Please enter number");

do {
  //   if (isNaN(userInput) || userInput < 100) {
  //     check = true;
  //     userInput = Number(prompt("ваші дані не валідні"));
  //   } else {
  //     check = false;
  //     alert("You enter 100???");
  //   }
  if (userInput > 100) {
    check = false;
    alert("You enter 100???");
  } else if (isNaN(userInput)) {
    check = true;
    userInput = Number(prompt("це не число"));
  } else {
    check = true;
    userInput = Number(prompt("ваші дані не валіднi"));
  }
} while (check);
