import { sumArray, average, longerStrings, printNumbers } from "./utilities.js";
import {
  sortByAge,
  filterByAge,
  incrementByAge,
  copyAndIncrement,
} from "./dataOpration.js";
import { manageMap } from "./mapOprations.js";

// Example usage
let numbers = [2, 5, 7, 8, 9, 4];
let total = sumArray(numbers);
console.log(total);

let avg = average(numbers);
console.log(avg);

let strings = ["say", "hello", "in", "the", "morning"];
let longStrings = longerStrings(strings);
console.log(longStrings);

printNumbers(10);

const people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
  { id: "48", name: "Barry", occupation: "Runner", age: 25 },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: "7", name: "Bilbo", occupation: "None", age: 111 },
];

let sortedPeople = sortByAge(people);
console.log(sortedPeople);

let filteredPeople = filterByAge(sortedPeople, 50);
console.log(filteredPeople);

manageMap();

let incrementedAges = incrementByAge(sortedPeople, 25);
console.log(incrementedAges);
//console.log(sortedPeople);

let copiedAndIncremented = copyAndIncrement(sortedPeople);
console.log(copiedAndIncremented);
