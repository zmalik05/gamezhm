export const criteria = [
  {
    description: "Primes",
    array: [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],
  },
  {
    description: "Multiples of 6",
    array: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96],
  },
  {
    description: "Multiples of 7",
    array: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98],
  },
];

export function getRandomNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

export function hasMatchingNumber(numbers, criterion) {
  return numbers.some((number) => criterion.includes(number));
}

export function selectCriterion() {
  let rno = Math.random();
  let num_criteria = criteria.length;
  let ind = Math.floor(rno * num_criteria);
  // console.log("Ind: ", rno, rno * num_criteria, ind);
  return criteria[ind];
}

export function generateNumbers(criterion) {
  let numbers;
  do {
    numbers = getRandomNumbers(12, 1, 99);
  } while (!hasMatchingNumber(numbers, criterion.array));
  return numbers;
}
