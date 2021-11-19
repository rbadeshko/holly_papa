const findUniq = (arr) => {
    let x = arr.sort((a, b) => a - b);
    if (x[0] === x[1]) {
      return x[x.length-1]
    } else {
      return x[0];
    }
  };
  //REFACTORED 

  const findUniq2 = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr.pop() : arr[0];
  };

