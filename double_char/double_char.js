function doubleChar(str) {
    return str.split("").map((item) => {return item += item;}).join('');
  }
  let str = "String_! .";
  console.log(doubleChar(str));