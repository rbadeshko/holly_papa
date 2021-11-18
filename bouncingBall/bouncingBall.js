//l6
function bouncingBall(h,  bounce,  window) {
    /*
    let num = 1;
    if (h > 0 && bounce > 0 && bounce < 1 && h > window) {
      for (let i = 0; i < 10; i++) {
        if (h * bounce > window) {
          h *= bounce;
          num += 2;
        }
      }
  
      console.log(num);
      return num;
    }
    return -1;
    //console.log();
    */
   let num = -1;
   if ( bounce > 0 && bounce < 1) while ( h > window){ num += 2; h *= bounce}
   return num
  }