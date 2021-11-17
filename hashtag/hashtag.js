const generateHashtag = (str) => {
    if (str.length === 0 || str.replace(/\s/g, "").length === 0) {
      return false
    }
    let result = str
      .trim()
      .split(" ")
      .map((item) => {
        return item.slice(0, 1).toString().toUpperCase() + item.slice(1);
      })
      .join("");
    if (result.length >= 140) {
      return false;
    }
    if (result.length = 0 ){
      return false
    }
    return '#' + result;
  };