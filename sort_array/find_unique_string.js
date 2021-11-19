//l6
const findUniq2 = (arr) => {
    let newArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(""));
    console.log(newArr);
    //console.log(newArr.indexOf(newArr[3]));
    for ( let i = 0; i < newArr.length; i++ ) { 
      if ( newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i]) ) return arr[i] }
  };