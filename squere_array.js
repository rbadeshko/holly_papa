const squareSum = (numbers) => {
    let sum = 0;
    numbers.forEach((i) => {
      sum += i * i;
    });
    return sum;
  };
  squareSum([1, 2, 3]);