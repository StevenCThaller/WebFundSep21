// Ok, that was a little bit tedious and kind of felt like wrangling 
// hyperactive kittens.

// There must be an easier way, right?
var taco = { // curly braces means object
    name: "Jonathan's \"NOT ENOUGH CHEESE\" taco",
    shellDensity: "soft",
    shellIngredient: "flour", 
    protein: "chicken",
    hasCheese: true,
    hasSourCream: false,
    hasGuac: true,
    hasSalsa: true,
    veggies: [
        "cilantro",
        "onion",
        "radish"
    ]
}


function printTacoInfo(theTaco) {
    console.log(theTaco.name + " Ingredients")
    console.log("Shell Density: " + theTaco.shellDensity);
    console.log("Shell Ingredient: " + theTaco.shellIngredient);
    console.log("Protein: " + theTaco.protein);
    console.log("Cheese: " + theTaco.hasCheese);
    console.log("Sour Cream: " + theTaco.hasSourCream);
    console.log("Salsa: " + theTaco.hasSalsa);
    console.log("Guac: " + theTaco.hasGuac);
    console.log("Veggies: ");
    for(var i = 0; i < theTaco.veggies.length; i++){
        console.log("\t" + theTaco.veggies[i]);
    }
}

printTacoInfo(taco);

