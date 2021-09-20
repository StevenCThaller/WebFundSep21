// LET'S MAKE SOME TACOS!
// We'll need some ingredients!

// Jonathan-the-taco-expert Taco
var tacoShellDensity = 'soft';
var tacoShellIngredient = 'flour';
var tacoProtein = 'chicken';
var tacoHasCheese = true; // there needs to be a super boolean apparently, because we need WAY more cheese
var tacoHasSourCream = false;
var tacoHasGuac = true; // that's $0.50 extra, just so you know.
var tacoHasSalsa = true;
var tacoVeggies = [
    'cilantro',
    'onion',
    'radish'
];

console.log("Taco Ingredients")
console.log("Shell Density: " + tacoShellDensity);
console.log("Shell Ingredient: " + tacoShellIngredient);
console.log("Protein: " + tacoProtein);
console.log("Cheese: " + tacoHasCheese);
console.log("Sour Cream: " + tacoHasSourCream);
console.log("Salsa: " + tacoHasSalsa);
console.log("Guac: " + tacoHasGuac);
console.log("Veggies: ");
for(var i = 0; i < tacoVeggies.length; i++){
    console.log("\t" + tacoVeggies[i]);
}