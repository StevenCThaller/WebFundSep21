function d6() {
    var roll = Math.random();

    roll *= 6;

    roll = Math.floor(roll) + 1;

    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
