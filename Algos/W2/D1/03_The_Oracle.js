// Using the following array, write a function that will answer all of our questions by 
// randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "This is the way"
];

function theOracleForetelleth(){
    // Your code here
    var random = Math.random();

    var randomIndex = random * lifesAnswers.length;

    randomIndex = Math.floor(randomIndex);

    return lifesAnswers[randomIndex];
}

console.log("The oracle says: " + theOracleForetelleth());