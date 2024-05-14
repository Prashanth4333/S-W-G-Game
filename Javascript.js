function ran() {
    const values = ["s", "w", "g"];
   const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
function win(score){
    if(score>=2){
        console.log("You Won 💪")
    }
    else{
        console.log("Computer Won 💪")
    }
}
let attempts= 0
let score = 0
console.log("  Snake 🐍, Water 🌊, Gun 🔫 Challenge 💪\n")
console.log("                 Note:-      ")
console.log("  ••• snake [s], water [w], gun [g] •••\n")
do{
let v = prompt("Enter the Choice - ")
let comp = ran();
attempts++
if(v==comp){
    console.log("Draw 😕")
}
else if(v=="g" && comp == "s"){
    console.log("You Win.. 🔫 kills 🐍\n")
    score++
}
else if(v=="s" && comp == "w"){
    console.log("You Win.. 🐍 drinks 💦\n")
    score++
}
else if(v=="w" && comp == "g"){
    console.log("You Win.. 💦 damage 🔫\n")
    score++
}
else{
    console.log("Loose 👎")
}
}
while(attempts<3)
 win(score)

