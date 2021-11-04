const number = (busStops) => {
    return busStops.reduce((top, arr) => top + arr[0] - arr[1], 0);
  };