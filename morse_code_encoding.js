decodeMorse = (morseCode) => {
    return letter2 = morseCode.trim().split('  ').map( item => { //whole sentense, three spaces in MorceCode === one normal space between words
      return item.split(" ").map(item2 => { //Every Words
        return MORSE_CODE[item2] //Every Letter
      }).join('')
    }).join(" ");
  //console.log(letter2);   
  }