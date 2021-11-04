const createPhoneNumber = (numbers) => {
    let s = numbers.join("");
    return "(" + s.slice(0, 3) + ") " + s.slice(3, 6) + "-" + s.slice(-4);
  };