var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;


for (var i = 0; i < scores.length; i++) {
  if ( (scores[i] >= 50) && (scores[i] <= 60) ) {
    gradeF += 1;
  } else if ((scores[i] >= 61) && (scores[i] <= 70)) {
    gradeD += 1;
  } else if ((scores[i] >=71) && (scores[i] <= 80)) {
    gradeC += 1;
  } else if ((scores[i] >= 81) && (scores[i] <= 90)) {
    gradeB += 1;
  } else if ((scores[i] >= 91) && (scores[i] <= 100)) {
    gradeA += 1;
  }
}

newScores = scores.sort(function(a, b) {
  return a - b
})



console.log("There were " + gradeF + " F's in the class")
console.log("There were " + gradeD + " D's in the class")
console.log("There were " + gradeC + " C's in the class")
console.log("There were " + gradeB + " B's in the class")
console.log("There were " + gradeA + " A's in the class")

console.log("The lowest score was a " + newScores[0])
console.log("The highest score was a " + newScores[11])
