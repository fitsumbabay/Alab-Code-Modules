
export function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

export function filterByAge(arr, age) {
  return arr.filter((person) => person.age >= age);
}

export function incrementByAge(arr, age) {
  const person = arr.find((s) => s.age === age);
  let sumAge = 0;
  if (person) {
    sumAge = person.age++;
  }
  return sumAge;
}

export function copyAndIncrement(arr) {
  let newArr = arr.map((person) => {
    return { ...person, age: person.age + 1 };
  });
  return newArr;
}