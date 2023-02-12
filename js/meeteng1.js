// const userInfo = Number(prompt("Введіть число від 0 до 60"));

// if (userInfo >= 0 && userInfo <= 15) {
//   alert("Ваше число знаходиться в 1-й чверті");
// } else if (userInfo >= 16 && userInfo <= 30) {
//   alert("Ваше число знаходиться в 2-й чверті");
// } else if (userInfo >= 31 && userInfo <= 45) {
//   alert("Ваше число знаходиться в 3-й чверті");
// } else if (userInfo >= 46 && userInfo <= 60) {
//   alert("Ваше число знаходиться в 4-й чверті");
// } else if (isNaN(userInfo)) {
//   alert("Введіть будь-ласка, число");
// } else {
//   alert("Ваші дані не валідні");
// }
// console.log(typeof userInfo);
// console.log(userInfo);

// let userInput = Number(prompt("Введіть число більше 100"));
// let check;

// do {

//   if (userInput > 100) {
//     check = false;
//     alert("You enter 100???");
//   } else if (isNaN(userInput)) {
//     check = true;
//     userInput = Number(prompt("це не число"));
//   } else {
//     check = true;
//     userInput = Number(prompt("ваші дані не валіднi"));
//   }
// } while (check);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let userIteration = Number(prompt("Введіть кількість ітерацій"));
// let total = 0;
// if (!isNaN(userIteration)) {
//   for (let i = 0; i < userIteration; i++) {
//     let userInput = Number(prompt("Введіть число"));
//     if (isNaN(userInput)) {
//       continue;
//     } else {
//       total += userInput;
//     }
//   }
// } else {
//   alert("Ви ввели невалідні дані.Повторіть");
//   userInput = Number(prompt("Введіть число"));
// }

// const maxNumber < 25;
// while (userInput < maxNumber) {
//   if (userInput > 25) {
//     check = false;
//     alert("Введіть менше число");
//   }
//   console.log(userInput);
//   userInput += 1;
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// const big = [];
// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log([i]); // 18, 29, 34
// }
// console.log(big.push[i]);

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage);
//  function (array, delimiter) {
//   let string;
//   array = "hange code below this line";
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   console.log(string);
// };

//

// let total = 0;

// // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//   total = Number(order) + i;
// }
// // Change code above this line
// console.log;

// let total = 0;
// let order = [12, 85, 37, 4];

// // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
// // Change code above this line

// console.log(total);

// let string = "The quick brown fox jumped over the lazy dog";
// console.log(string.split(" "));
// let longWord = 0;
// for (let i = 0; i < string.split(" "); i++) {
//   console.log(i);
// }
// let string = "The quick brown fox jumped over the lazy dog";
// const arrStr = string.split(" ");
// console.log(arrStr);
// // let wordLength = 0;
// let longWord;

// // for (let i = 0; i < arrStr.length; i += 1) {
// //   wordLength = arrStr[0].length;
// //   console.log(wordLength);
// //   if (arrStr[i].length > wordLength) {
// //     longestWord = arrStr[i];
// //     console.log(longestWord);
// //   }
// // }

// let string = "The quick brown fox jumped over the lazy dog";
// // Change code below this line
// const wordStr = string.split(" ");

// let longWord = wordStr[0];

// for (let i = 0; i <= wordStr.length - 1; i += 1) {
//   if (wordStr[i].length > longWord.length) {
//     longWord = wordStr[i];
//   }
// }
// console.log(longWord);

// // Change code above this line
// function findLongestWord(string) {
//   // Change code below this line
//   const array = string.split(" ");
//   let longer = array[0];
//   for (let i = 1; i <= array.length - 1; i += 1) {
//     if (array[i].length > longer.length) {
//       longer = array[i];
//     }
//   }
//   return longer;
//   // Change code above this line
// }

// let numbers(min, max);
// min = 3;
// max = 8;
// console.log(numbers);
// // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
// // // Change code above this line
// const string1 = [1, 2, 3];
// const string2 = [0, 2, 4];
// const klonNumber = [0];
// // const string3 = string1.push(string2);

// // for (let i = 0; i === i; i += 1) {
// //   klonNumber.push(string3[i]);
// // }

// // for (string1 of string2) {
// //   if (string1 === string2) {
// //     klonNumber.push(string1);
// //   }
// // }

// console.log(klonNumber.push(string1));

// // for (const character of string) {
// //   console.log(character);
// // }
// const price = 200;
// let balance = 1000;
// if (balance >= price) {
//   console.log("ok");
//   balance -= price;
//   console.log(`qqqqqqqqqqqqqqqqqqqqqqqqqqq ${balance} qqqqqqqqqqqqq`);
// } else {
//   console.log(`vvvvvvvvvvvvvvv ${balance}vvvvvvvvvvvvvvvvvvvvvvv`);
// }
// console.log(`операція завершина`);
// const friends = ["mango", "kivi", "poly", "ajax"];

// for (let i = 0; i < friends.length; i += 1) {
//   friends[2] += "-1";
// }
// console.table(friends);
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);

// const aptTags = apartment.tags;
// // Change code above this line
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];

// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys.length);
// console.log(values);
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// function countProps(object) {
//   object = {
//     name: "Mango",
//     age: 2,
//   };

//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount.push(key);
//     }
//   }

// Change code above this line
// }
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let color of colors) {
//   hexColors.push(color.hex);

//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   getName(a) {
//     console.log("АГА це плейлыст", a);
//   },
//   addTrc(track) {
//     this.tracks.push(track);
//   },
// };
// console.log(playlist);
// playlist.getName();

// playlist.addTrc("новий трек");
// console.log(playlist);
// function chekString(string) {
//   let isCheck;
//   if (string && 0) {
//     isCheck = false;
//   } else {
//     isCheck = true;
//   }
//   return isCheck;
// }

let x = ["1", "2", "3", "4"];

console.log(x.push("wer"));

const numbers = [];
numbers.push(2);
console.log(numbers);
