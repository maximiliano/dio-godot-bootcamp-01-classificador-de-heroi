let name = "John Doe";
let xp = 1000;
let rank = null;

function gradeHero() {
  if (xp <= 1000) {
    rank = "Iron";
  } else if (xp >= 1001 && xp <= 2000) {
    rank = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    rank = "Silver";
  } else if (xp >= 5001 && xp <= 7000) {
    rank = "Gold";
  } else if (xp >= 7001 && xp <= 8000) {
    rank = "Platinum";
  } else if (xp >= 8001 && xp <= 9000) {
    rank = "Mithril";
  } else if (xp >= 9001 && xp <= 10000) {
    rank = "Immortal";
  } else if (xp >= 10001) {
    rank = "Radiant";
  }

  const grade = `The hero <${name}> is Rank ${rank}!`;
  console.log("=".repeat(grade.length));
  console.log(grade);
  console.log("=".repeat(grade.length));
}

if (process.argv.length === 2) {
  // We've got no arguments, just use default ones
  gradeHero();
  console.log("You can also pass your own hero name and xp!");
  console.log('Like this: classify.js "Grok the Dwarf" 3000');
} else if (process.argv.length === 4) {
  // We've got 2 arguments: name and xp
  name = process.argv[2];
  xp = process.argv[3];
  gradeHero();
} else {
  // We've got an invalid number of arguments
  console.log("Heeey, you should pass two arguments: Hero Name and XP");
  console.log('Like this: classify.js "Grok the Dwarf" 3000');
}
