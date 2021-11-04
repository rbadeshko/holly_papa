//5kyu
const humanReadable = (sec) => {
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
  };