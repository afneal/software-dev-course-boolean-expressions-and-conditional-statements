/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasPistol = true;

console.log("Your merchant ship has crashed and you have washed up on the beach next to a forest."+
  "All you have is a water-logged flintlock pistol."+
  "There are shipping crates nearby, but they are guarded by angry crabs.");
const choice = readline.question("Do you go to the 'crates' or do you make your way to the 'forest'?");

if (choice === "crates" && hasPistol) {
  console.log("You run to the crates, pistol-whipping crabs along the way, and you manage to grab a single crate.");
} else if (choice === "forest") {
  console.log("The crabs look scary so you head into the forest."+
    "The forest is too large without a map so you " +
    "get lost and wander aimlessly until you perish from starvation.");
} 

if (choice === "forest"){
  let gameOver = true;
    if (gameOver === true){
      console.log("GAME OVER");
    }
} else if (choice === "crates" && !gameOver){
  console.log("You open the crate and find something called an iPhone, a package of crumpets that "+
  "seem to belong to an elf named Keebler "+ "and a torch. You decide to head into the forest. There is a crossroads, on the 'left' is a steep hill surrounded by trees"+
" and on the 'right' is a muddy well-worn trail.");
  } 

const hasMap = true;

const secondChoice = readline.question("Which way will you go?");
if (secondChoice === "left" && hasMap) {
      console.log("You climb the steep hill using your map to find a village on the other side.");
}   else if (secondChoice === "right") {
      console.log("The route you have chosen is a merchant route frequented by bandits."+
    "Tragically, you are robbed of all your belongings.");
        
}


console.log("You eventually arrive in the village and stop by the local inn."+
  "You see a lone elf at a table.");
  
const choice3 = readline.question("Should you approach him, 'yes' or 'no'?");
  if (choice3 === "no"){
    console.log("You decide to keep to yourself since he could be a shady character."+
      "You choose to sit at a table by yourself until an adventurer arrives someday to take you out with them.")
    }else if (choice3 === "yes"){
      console.log("You approach Shegolas and introduce yourself");
    }  
if (choice3 === "yes" && secondChoice === "left"){
  console.log("Shegolas sees your Keebler crumpets and becomes excited."+
    "Seems they were made for elves like him."+
    "He is happy to be your friend and buys you an ale in exchange for a crumpet"+
    "You spend the night chatting with Shegolas about trolls and orcs and live happily ever after");
}
else if (choice3==="yes" && secondChoice === "right"){
  console.log("You attempt to be friends with Shegolas but you have no treasures to offer him since "+
    "your belongings were stolen. He wants nothing to do with you so you find an empty table and cry to yourself");

}

  //You approach him and ask his name."+
  //"He says his name is Shegolas. You would like to be friends with him but you have no coins to buy him an ale");

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/