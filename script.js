const questions = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(option);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function selectAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  clearInterval(timer);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function startTimer() {
  timeLeft = 15;
  document.getElementById("timer").textContent = "Time Left: " + timeLeft + "s";

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = "Time Left: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function showResult() {
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  document.getElementById("finalScore").textContent =
    "You scored " + score + " out of " + questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("resultBox").style.display = "none";
  loadQuestion();
}

loadQuestion();
