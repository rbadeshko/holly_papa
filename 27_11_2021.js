let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {}
  switch (card) {
    case 10: count--; break
    case "J":
    case "Q": 
    case "K": 
    case "A": count--; break    
    
  }
  if (count <= 0 ){
    return count + " Hold";
  }
  return count + " Bet";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');