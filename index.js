// 1. Filter numbers more than 10
const nums = [12, 5, 20, 8, 15, 30];
const filteredNums = nums.filter((num) => num > 10);
console.log(filteredNums);

// 2. Filter strings containing the letter 'o'
const words = ["hello", "world", "apple", "orange", "banana"];
const wordsWithO = words.filter((word) => word.includes("o"));
console.log(wordsWithO);

// 3. Filter prime numbers
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

// 4. Filter numbers not multiples of 3
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notMultiplesOfThree = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notMultiplesOfThree);

// 5. Filter numbers not divisible by both 2 and 3
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notDivisibleBy2And3 = numbs.filter(
  (num) => !(num % 2 === 0 && num % 3 === 0)
);
console.log(notDivisibleBy2And3);

// 6. Filter uppercase strings
const wordsUpper = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];
const uppercaseWords = wordsUpper.filter((word) => word === word.toUpperCase());
console.log(uppercaseWords);

// 7. Filter strings that do not end with 'y'
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];
const notEndingWithY = wordsY.filter((word) => !word.endsWith("y"));
console.log(notEndingWithY);

// 8. Filter numbers that are multiples of both 2 and 3
const numsMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf2And3 = numsMultiples.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log(multiplesOf2And3);

// 9. Filter strings containing both 'y' and 'u'
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];
const wordsWithYAndU = feelingWords.filter(
  (word) => word.includes("y") && word.includes("u")
);
console.log(wordsWithYAndU);

// 10. Filter numbers that are multiples of 5 or 3
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf5Or3 = newNums.filter((num) => num % 5 === 0 || num % 3 === 0);
console.log(multiplesOf5Or3);
