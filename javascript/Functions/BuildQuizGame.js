// 1. Create questions array
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean in the world?",
    choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is 5 × 6?",
    choices: ["30", "25", "20"],
    answer: "30"
  },
  {
    category: "Sports",
    question: "Which country won the 2018 FIFA World Cup?",
    choices: ["France", "Brazil", "Germany"],
    answer: "France"
  }
];

// 2. getRandomQuestion function
function getRandomQuestion(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// 3. getRandomComputerChoice function
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// 4. getResults function
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// Example run
const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
