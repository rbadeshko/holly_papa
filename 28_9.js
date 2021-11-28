function checkObj(obj, checkProp) {
    // Only change code below this line
    if(!obj.hasOwnProperty(checkProp)){
      //console.log(obj.hasOwnProperty(checkProp))
       return "Not Found";
    }
    //console.log(checkProp)
    console.log(obj[checkProp])
    return obj.[checkProp];
    // Only change code above this line
  }