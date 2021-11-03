function doubleChar(str) {
    return str.split("").map( item => { item + item }).join('');
  }
  let str = "String_! .ASD";
  console.log(doubleChar(str));