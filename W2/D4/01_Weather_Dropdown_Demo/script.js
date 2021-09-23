function changeUnits(el) {
    var unitSelected = el.value;
    var tempsToChange = document.querySelectorAll(".temp");

    if(unitSelected === "F") {
        convertTempsCtoF(tempsToChange);
    } else {
        convertTempsFtoC(tempsToChange);
    }
}

function convertTempsCtoF(temps){
    for(var i = 0; i < temps.length; i++) {
        var el = temps[i];
        var temp = el.innerText;

        el.innerText = ( (temp * (9/5)) + 32);
    }
}

function convertTempsFtoC(temps){
    for(var i = 0; i < temps.length; i++) {
        var el = temps[i];
        var temp = el.innerText;
        
        el.innerText = ( (temp - 32) * (5 / 9) );
    }
}
