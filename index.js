var readlineSync = require("readline-sync");
console.log("Hello Guy's")
var user = readlineSync.question("What is Your Name :");
console.log("Welcome " + user + " to Do You Know Ahsan");
var userAsk = readlineSync.question("Please give the Reply : ");
var useranswer = "Yes"
var score = 0;

if (userAsk.toUpperCase() === useranswer.toUpperCase()) {
  console.log("Ok! Are You a Marvel Fan! if You are a Marvel Fan, Can I Ask Some Question " + user);
  var userAsks = readlineSync.question("Please give the Reply : ");
} else {
  console.log("Ok! You are not interested! Thank You !")
}
if (userAsks.toUpperCase() === useranswer.toUpperCase()) {
  console.log("Proceed Now ! ")
  var response = readlineSync.question("Write ENTER to start Question : ");
} else {
  console.log("Sorry You Selected Wrong Key!")
}


var questions = [{
  question: "What is Commonly Name of Thor Odinson : ",
  answer: "Thor"
},
{
  question: "God of Thunder, is a fictional character portrayed by : ",
  answer: "Chris Hemsworth"
},
{
  question: "What is Full Name of Chris Hemsworth : ",
  answer: "Christopher Hemsworth AM"
},
{
  question: "Who is Thor Married To : ",
  answer: "Elsa Pataky"
},
{
  question: "What is Thor weapon Name : ",
  answer: "Mjolnir"
}
];

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your Answer is Right!");
    score = score + 2;
  } else {
    console.log("Your Answer is Wrong!");
    score = score - 1;
  }
}
if (response == "ENTER") {
  console.log("Now You are Ready!");
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    game(currentQuestion.question, currentQuestion.answer);
    console.log("Right Answer is : " + currentQuestion.answer)
  }
} else {
  console.log("Your Choice is wrong !")
}

console.log("---------------------------------------------");
console.log("-----------------Question End----------------");
console.log("---------------------------------------------");

var scoreAsk = readlineSync.question("Do You want to know your Total Score, Please Give the Reply : ");
var scoreAnswer = "Yes";
if (scoreAsk.toUpperCase() == scoreAnswer.toUpperCase()) {
  console.log("Your Total Score is : " + score);
  console.log("--------------                  ------------");

}

if (score > 4) {
  console.log("YAY !! Congrats " + user + " ! You Passed and Your Total Score is : " + score);
} else {
  console.log("Sorry! You Failed! and Your Total Score is : " + score);
}

var highScore = [
  {
    id: "First",
    name: "Sumedh Nikalje",
    score: 10
  },
  {
    id: "Second",
    name: "Dheeraj Tiwari",
    score: 10
  },
]
console.log("---------------------------------------------");

var highName = readlineSync.question("Do You Know Current High Score Name, So You Give the reply : ");
var answersss = "Yes"

if (highName.toUpperCase() == answersss.toUpperCase()) {
  console.log("Current High Score Name is given Below ---")
  for (var i = 0; i < highScore.length; i++) {
    var highScores = highScore[i];
    console.log(highScores.id + " High Score Name is : " + highScores.name);
    console.log("High Score is : " + highScores.score);
    console.log("-------------------------");
  }

}
var newhighName = readlineSync.question("Do You Know New High Score Name, So You Give the reply : ");
var newanswersss = "Yes"

if (newhighName.toUpperCase() == newanswersss.toUpperCase()) {
  if (score > 8) {
    console.log("New High Score Name is : " + user);
    console.log("New High Score is : " + score);
  }
}

console.log("----------------------------------------------");
console.log("--------------                         -------");
console.log("-------------- !! Thank You !! ----------------");
console.log("--------------                         -------");
console.log("----------------------------------------------");