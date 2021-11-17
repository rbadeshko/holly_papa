function isValidWalk(walk) {
    if (walk.length > 10) {return false}
    let point = [5, 5];
    let way_point = [5, 5];
  
    walk.forEach((i) => {
      if (i === "n") {
        way_point[0] += 1;
      }
      if (i === "s") {
        way_point[0] -= 1;
      }
      if (i === "e") {
        way_point[1] += 1;
      }
      if (i === "w") {
        way_point[1] -= 1;
      }
    });
    console.log(way_point);
    console.log(walk);
    if (point[0] === way_point[0] && point[1] === way_point[1]) {
      return true;
    }
    return false;
    //
  }