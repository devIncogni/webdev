function sumOfTripledEvens(array = []) {
  let sum = 0;
  array.forEach((number) => {
    if (number % 2 === 0) {
      sum += number;
    } else {
      sum += 0;
    }
  });
  return sum * 3;
}

function sumOfTripledEvensFilterMapReduce(array = []) {
  return array
    .filter((number) => (number % 2 == 0 ? true : false))
    .map((number) => number * 3)
    .reduce((sum, number) => {
      sum += number;
      return sum;
    }, 0);
}

console.log(sumOfTripledEvens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  sumOfTripledEvensFilterMapReduce([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

