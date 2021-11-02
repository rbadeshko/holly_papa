maskify = (cc) => {
    return cc.slice(1 , -4).replace( /. /g , '#') + cc.slice(-4);
}
let cardN = "1234123412348765"
console.log(maskify(cardN));