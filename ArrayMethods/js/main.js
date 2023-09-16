//push() adds elements to the end of an array
// const items = [2, 4, 3, 6, 4, 4];
// let arrayMine = [];
// arrayMine.push(items);

// console.log(arrayMine);
// arrayMine.push(...items); //adds the individual elements in the array called "items"
// console.log(arrayMine); //[Array(6), 2, 4, 3, 6, 4, 4]

//unshift() adds to the begining of an array
// items.unshift(5);
// console.log(items); // [5, 2, 4, 3, 6, 4, 4]

//shift() removes the first letter from an array

//pop() removes fromthe end of an array
// let lastItem = items.pop();
// console.log(lastItem);

//splice() removes, replaces and inserts.
//returns removed elements as an array
// let theArr = ["where", "is", "my", "train"];
// let splicedReplaced = theArr.splice(0, 2, "this"); //removes two element starting from index 0 and replaces it with 'this'
// console.log(splicedReplaced); //['where']
// console.log(theArr);
// let spliced = theArr.splice(0, 1); //starting from index 0, removes 1 element

//slice() copies from start to end(exclusive) and creates an array
//it does not change the original array
// let sliceArray = [1, 2, 4, 5, 3, 2];
// let slicedArray = sliceArray.slice(1, 3);
// console.log(slicedArray); //[2,4] it does not include elemet t index 3 because the end index is exclusive
// console.log(sliceArray); //[2,4] it does not include elemet t index 3 because the end index is exclusive
// console.log(sliceArray.slice(-4)); //[4,5,3,2] takes from the end, four  elements

// //concat
// let conArray = sliceArray.concat(slicedArray);
// console.log(conArray); //[1, 2, 4, 5, 3, 2, 2, 4] add all individual elemnets and creates a new array
// console.log(conArray.concat([10, 11], [12, 14])); //[1, 2, 4, 5, 3, 2, 2, 4, 10, 11, 12, 14]

// //forEach: loops over every element. is allowed three parameters
// let iterateArray = [2, 5, 7, 3, 5];

// iterateArray.forEach((element, index, array) => {
//   console.log((element = element + 3));
//   array[index] = element;
// });

// console.log(iterateArray);

//indexOf/lastIndexOf/includes
// let sliceArray = [1, 2, 4, 5, 3, 2];
// console.log(sliceArray.indexOf(2)); //1 (the index of the elemet '2')
// console.log(sliceArray.lastIndexOf(2)); //5 (the index of the last '2' elemet)
// console.log(sliceArray.includes(2)); //true

// let theSplice = sliceArray.splice(0); //removes everything from the original array and leave an empty array
// console.log(sliceArray);

//find/findIndex/findLastIndex
// let userData = [
//   {
//     id: 1,
//     name: "alex",
//     age: 23,
//   },
//   {
//     id: 2,
//     name: "alexand",
//     age: 23,
//   },
//   {
//     id: 3,
//     name: "flexer",
//     age: 23,
//   },
// ];

// let user = userData.find((item) => item.id == 1); //once an item is found, it stops searching
// console.log(user);
// let userIndex = userData.findIndex((item) => item.id == 1);
// console.log(userIndex); //once an item is found, it stops searching and returns the index it was found at

// //filter. filter gathers all the instances where the condition is true
// let userFiltered = userData.filter((item) => item.id > 1); //returns an arry of the filtered items and stores it in the variable
// console.log(userFiltered);

// console.log(Array.isArray(userFiltered));

// //map. calls a function for each element and returns an array of the result

// let theArr = ["where", "is", "my", "train"];
// let theArrMap = theArr.map((item) => item[0]);
// console.log(theArrMap); //['w', 'i', 'm', 't']
// let theArrMaped = theArr
//   .filter((item) => item.length > 2) //creates an array with all elements that have more than 2 characters
//   .map((item) => item[0]); //creates an array from the characters at idex 0 from the foltered array
// console.log(theArrMaped);

// let userDataMap = userData.map((item) => item.id);
// console.log(userDataMap); // [1, 2, 3] the id values of the objects within userData

//sort(fn). takes in a function as an arguement and changes the original array
// let arraySort = [2, 5, 3, 6, 4, 56, 7, 4, 33, 10];
// arraySort.sort((a, b) => b - a); //[56, 33, 10, 7, 6, 5, 4, 4, 3, 2]decreasing order
// arraySort.sort((a, b) => a - b); // [2, 3, 4, 4, 5, 6, 7, 10, 33, 56] increasing order
// console.log(arraySort);

//reverse. flips the contents of the array. changes the original array
// arraySort.reverse();
// console.log(arraySort); //[56, 33, 10, 7, 6, 5, 4, 4, 3, 2]

//split and join
//splits the string into parts using the delimiter.
//e.g array.split('o') will split the string at every point it sees an 'o'
//it does not change the original string so you have to store the result in another variable
// theArr = "where is my train";
// let theWords = theArr.split("is");
// let theWord = theArr.split("i");

// console.log(theWord); //["where ", "s my tra", "n"];
// console.log(theWords); //["where ", " my train"];

// let oneArray = theArr.split(""); //splits the string with every entity as an element in an array
// console.log(oneArray); //['w', 'h', 'e', 'r', 'e', ' ', 'i', 's', ' ', 'm', 'y', ' ', 't', 'r', 'a', 'i', 'n']
// let oneArrayOrder = theArr.split("", 10); //splits but picks only 10 elemts to put in the new array
// console.log(oneArrayOrder); //['w', 'h', 'e', 'r', 'e', ' ', 'i', 's', ' ', 'm']
// let anArray = ["w", "h", "e", "r", "e", " ", "i", "s", " ", "m"];
// let joinIt = anArray.join(); //joins with commas
// let joinThem = anArray.join(""); //joins without commas
// console.log(joinIt);
// let myWord = "what have tou done";
// console.log(myWord.split());

// //reduce/reduceRight
// let arrayReduce = [2, 5, 3, 6, 4, 56, 7, 4, 33, 10];
// let result = arrayReduce.reduce((sum, current) => sum * current, 0);
// console.log(result);

//EXERCISES

// function caramalize(str) {
//   splitString = str
//     .split("-")
//     .map((item, index) =>
//       index === 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join("");
//   console.log(splitString);
// }

// //caramalize("background-color"); //backgroundColor
// caramalize("background-color");

//FILTER RANGE
let array = [2, 5, 7, 3, 45, 6, 8]; //indexes are (0,1,2,3,4,5,6)
// function filterRange(arr, a, b) {
//   console.log(arr.filter((item) => item >= a && item <= b));
// }

let numSquared = (nums) => nums.map((num) => num ** 2);
console.log(numSquared(array));

// filterRange(array, 2, 10);
//using forEach
function filterInPlace1(arr, a, b) {
  arr.forEach((item, index) => {
    if (item < a || item > b) {
      arr.splice(index, 1);
    }
  });
}

filterInPlace1(array, 2, 10);
console.log(array);
//using for loop
function filterInPlace2(arr, a, b) {
  for (let i = 0; i < arr.length - 1; i++) {
    value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
    }
  }
}
filterInPlace2(array, 2, 10);
console.log(array);

//SORT IN DECREASING ORDER
// let arraySort = [5, 2, 1, -10, 8];
// console.log(arraySort.sort((a, b) => b - a));

//COPY AND SORT
//copy and sort, leave original array unchanged+
// let arrayOfWords = ["HTML", "Javascript", "CSS", "Bomo", "bomo"];
// function copySorted(arr) {
//   copyArray = arr.slice(0).sort((a, b) => a.localeCompare(b)); //can be 'slice()' as well
//   return copyArray;
// }
// console.log(arrayOfWords);
// console.log(copySorted(arrayOfWords));

//REDO
//camelCase
//bagel-fries-and-coke --> bagelFriesAndCoke

let string = "bagel-fries-and-coke";

function camelCase(str) {
  //[bagel,fries,and,coke]
  //[bagel,Fries,And,Coke]
  //
  camelString = str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
  return camelString;
}

console.log(camelCase(string));

//FILTER RANGE
//create a function that gets the numbers from an array that are greater than a but less than b
let filterArray = [2, 3, 1, 2, 4, 7, 4, 6, 4, 3, 2, 8, 9, 7, 5];
function filterRange(arr, a, b) {
  filteredArray = arr.filter((item) => item > a && item < b);
  return filteredArray;
}

console.log(filterRange(filterArray, 2, 5));

//create a function that removes from the originl array a range of numbers
function filterInPlace(arr, a, b) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterInPlace(filterArray, 2, 5);
console.log(filterArray);

//MAP TO NAMES
class CreateObjectToMap {
  constructor(name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;
  }
  sayThis() {
    return `you are ${this.name} and you are ${this.age} years old`;
  }
}

let john = new CreateObjectToMap("John", 25, "black");
let pete = new CreateObjectToMap("Pete", 30);
let mary = new CreateObjectToMap("Mary", 28);

let users = [john, pete, mary];

let names = users.map((item) => item.name);
console.log(names);
console.log(pete.sayThis());
console.log(john);

//MAP TO OBJECTS
//with an array of user objects, create anothe array from it with id and fullname(name and surname together)

let marc = { name: "Marc", surname: "Trente", id: 1 };
let priti = { name: "Priti", surname: "Manav", id: 2 };
let lily = { name: "Lily", surname: "Cole", id: 3 };

let them = [marc, priti, lily];

let themMapped = them.map((item) => ({
  fullname: item.name + " " + item.surname,
  id: item.id,
}));
console.log(themMapped[0]);

//SORT USERS BY AGE
//sort objects of an array by their age property

let arrayObject = [john, pete, mary];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arrayObject));

//SHUFFLE AN ARRAY
//write function that shuffles elements of an array randomly

//math.random on the positions of each element
function getRandomArray(arr) {
  randomArrayNum = [];
  for (let i = 0; i < arr.length; i++) {
    randomNum = Math.floor(Math.random() * arr.length);
    // if (!randomArrayNum.includes(randomNum)) {
    //   randomArrayNum.push(randomNum);
    // } else i--; //creates an array of unique numbers
    randomArrayNum.push(randomNum);
  }
  console.log(randomArrayNum);
  return randomArrayNum;
} //it still works without the if statement

function assignIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    storedElement = arr[i];
    arr[i] = arr[randomArrayNum[i]];
    arr[randomArrayNum[i]] = storedElement;
  }
  return arr;
}

function shuffleThis(arr) {
  randomArray = getRandomArray(arr);

  return assignIndex(arr);
}

console.log(shuffleThis([50, 40, 34, 67, 29]));

//Fisher-Yates Method of shuffling an array
function shuffleMeFisher(array) {
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

let theArray = [50, 40, 34, 67, 29];
function shuffleMe(theArray) {
  let shuffleTheArray = [];
  for (let i = 0; i < 2100000; i++) {
    // console.log(shuffleMeFisher(theArray));
    let shuffleArray = Array.from(shuffleMeFisher(theArray));
    // console.log(shuffleArray);
    shuffleTheArray.push(shuffleArray);
  }
  return shuffleTheArray;
}

// console.log(shuffleMe(theArray));

// //CHECKING FOR PROBABILITY
let arrayInstances = shuffleMe(theArray).reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(arrayInstances);

// //GET AVERGAE AGE FROM ARRAY OF OBJECTS
// function getAverageAge(array) {
//   num = array.reduce((sum, curr) => sum + curr.age, 0) / array.length;
//   return num.toFixed(2);
// }

// console.log(getAverageAge(users));

//CREATE ARRAY FROM UNIQUE ELEMENTS
let someString = [
  "hare",
  "krishna",
  "hare",
  "krishna",
  "hare",
  "krishna",
  "12:l0",
];
function uniqueStringItems(arr) {
  //using Objects
  // arrayObjects = arr.reduce((obj, key) => {
  //   if (!obj[key]) {
  //     obj[key] = 0;
  //   }
  //   obj[key]++;
  //   return obj;
  // }, {});
  // objKeys = Object.keys(arrayObjects);
  // return objKeys;

  //Using Array Loops
  uniqueArray = [];
  for (let item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}

console.log(uniqueStringItems(someString));
