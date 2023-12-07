const container = document.querySelector(".container");
const containerQuiz = document.querySelector(".quiz__container");
const containerControlBtn = document.querySelector(".control__btns");

const questionElement = document.querySelector(".quiz__question");
const answerElementsContainer = document.querySelector(
  ".quiz__answers__elements"
);

const btnStart = document.querySelector(".btn__start");
const btnNext = document.querySelector(".btn__next");

let shuffleQuestions, currentQuestionIndex;

const questions = [
  {
    question: "Is Js Hard?",
    answers: [
      { text: "Yes", correct: true },
      { text: "Very Hard", correct: false },
      { text: "No", correct: false },
      { text: "Very Easy", correct: false },
    ],
  },
  {
    question: "Is learning JS worth it?",
    answers: [
      { text: "Maybe", correct: false },
      { text: "No", correct: false },
      { text: "Definitely", correct: true },
      { text: "Not that much", correct: false },
    ],
  },
  {
    question: "Which of the following helps us to understand JS better?",
    answers: [
      { text: "Taking small breaks", correct: false },
      { text: "Learning sake of completion", correct: false },
      { text: "Theory Based Learning", correct: false },
      { text: "Project Based Learning", correct: true },
    ],
  },
];

const startQuiz = function () {
  btnStart.classList.add("hidden");
  containerQuiz.classList.remove("hidden");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
};

const setNextQuestion = function () {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
};

const resetState = function () {
  clearStatusClass(document.body);
  btnNext.classList.add("hidden");
  while (answerElementsContainer.firstChild) {
    answerElementsContainer.removeChild(answerElementsContainer.firstChild);
  }
};

const showQuestion = function (question) {
  questionElement.innerText = question.question;
  question.answers.forEach((option) => {
    const btn = document.createElement("button");
    btn.classList.add("quiz__options");
    btn.innerText = option.text;

    if (option.correct) {
      btn.dataset.correct = option.correct;
    }

    btn.addEventListener("click", selectAnswer);
    answerElementsContainer.appendChild(btn);
  });
};

const selectAnswer = function (e) {
  const btn = e.target;
  const correct = btn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerElementsContainer.children).forEach((btnOpt) => {
    setStatusClass(btnOpt, btnOpt.dataset.correct);
    console.log(btnOpt, btnOpt.dataset.correct);
  });

  if (questions.length > currentQuestionIndex + 1) {
    btnNext.classList.remove("hidden");
  } else {
    btnStart.innerText = "Restart";
    btnStart.classList.remove("hidden");
  }
};

const setStatusClass = function (element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
};

const clearStatusClass = function (element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
};

btnStart.addEventListener("click", startQuiz);
btnNext.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
