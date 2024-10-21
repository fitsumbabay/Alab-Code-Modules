export function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

export function average(numbers) {
  const sum = sumArray(numbers);
  return sum / numbers.length;
}

export function longerStrings(arr) {
  let long1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1.push(arr[i].length);
    }
  }
  return long1;
}

export function printNumbers(n) {
  if (n <= 0) {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}
