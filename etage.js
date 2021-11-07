const elevatorDistance = (array) => {
    let etage = 0;
    for (let i = 0; i < array.length - 1; i++) {
      //etage += Math.pow(Math.pow(array[i] - array[i + 1], 2), 0.5);
      etage += Math.abs(array[i] - array[i + 1]) // new code
    }
    return etage;
    
  };