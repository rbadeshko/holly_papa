//5kyu
const humanReadable = (sec) => {
    /*
    let h, m, s;
    if (sec / 3600 >= 1) {
      if (Math.floor(sec / 3600) > 99) {
        h = 99;
      } else {
        h = Math.floor(sec / 3600);
      }
      m = Math.floor((sec - h * 3600) / 60);
      s = Math.floor(sec - h * 3600 - m * 60);
    } else {
      h = 0;
      m = Math.floor(sec / 60);
      s = Math.floor(sec - m * 60);
    }
    return output =
      h.toString().padStart(2, 0) +
      ":" +
      m.toString().padStart(2, 0) +
      ":" +
      s.toString().padStart(2, 0);
    */
   // new perfect code

    let h = parseInt(sec / 3600).toString().padStart(2, 0);
    let m = parseInt((sec / 60) % 60).toString().padStart(2, 0);
    let s = parseInt(sec % 60).toString().padStart(2, 0);
    
    return output = h + ":" + m + ":" + s;
};
4 years, 68 days, 3 hours and 4 minutes
4 years, 68 days and 4 minutes