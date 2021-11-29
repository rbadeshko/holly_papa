const formatDuration = (sec) => {
    let result = "";
    let ArrRes = [];
    sec === 0 || sec < 0 ? (result = "now") : (result = "");
    let y = Math.trunc(sec / 31536000, 10);
    if (y === 1) {
      y = "1 year";
      ArrRes.push(y);
    } else if (y > 1) {
      y = y + " years";
      ArrRes.push(y);
    }
    let d = parseInt((sec / 86400) % 365, 10);
    if (d === 1) {
      d = "1 day";
      ArrRes.push(d);
    } else if (d > 1) {
      d = d + " days";
      ArrRes.push(d);
    }
    let h = parseInt((sec / 3600) % 24, 10);
    if (h === 1) {
      h = "1 hour";
      ArrRes.push(h);
    } else if (h > 1) {
      h = h + " hours";
      ArrRes.push(h);
    }
    let m = parseInt((sec / 60) % 60, 10);
    if (m === 1) {
      m = "1 minute";
      ArrRes.push(m);
    } else if (m > 1) {
      m = m + " minutes";
      ArrRes.push(m);
    }
    let s = parseInt(sec % 60, 10);
    if (s === 1) {
      s = "1 second";
      ArrRes.push(s);
    } else if (s > 1) {
      s = s + " seconds";
      ArrRes.push(s);
    }
  
    console.log(ArrRes);
    for (let i = 0; i <= ArrRes.length - 1; i++) {
      result += ArrRes[i];
      //console.log(ArrRes[i]);
      if (ArrRes.length - 2 === i) {
        result += " and ";
      } else if (ArrRes.length - 1 === i) {
        console.log(result);
        return result;
      } else {
        result += ", ";
      }
    }
  
    return result;
  };
  formatDuration(15731091);
  