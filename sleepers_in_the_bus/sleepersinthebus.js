const number = (busStops) => {
    let summ = 0;
    busStops.forEach((e, i) => {
      e.forEach((item, j) => {
        if (j == 0) {
          summ += item;
        } else {
          summ -= item;
        }
      });
    });
    return summ;
  };