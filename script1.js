
 // script.js
const questions = [
    {
      question: "Which is NOT a JavaScript data type?",
      answers: [
        { text: "string", correct: false },
        { text: "boolean", correct: false },
        { text: "object", correct: false },
        { text: "integer", correct: true },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
      ],
    },
    {
      question: "Which function is used to serialize an object into a JSON string in JavaScript?",
      answers: [
        { text: "JSON.stringify()", correct: true },
        { text: "JSON.parse()", correct: false },
        { text: "JSON.objectify()", correct: false },
        { text: "JSON.serialize()", correct: false },
      ],
    },
    {
      question: " Which array method is used to iterate through every element of an array?",
      answers: [
        { text: "forEach()", correct: false },
        { text: "map()", correct: false },
        { text: "filter()", correct: false },
        { text: "All of the above", correct: true},
      ],
    },
    {
      question: "Inside which HTML element do we put JavaScript?",
      answers: [
        { text: "<js>", correct: false },
        { text: "<javascript>", correct: false },
        { text: "<script>", correct: true },
        { text: "<code>", correct: false },
      ],
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  
  function startQuiz() {
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answersEl.appendChild(button);
    });
  }
  
  function resetState() {
    nextBtn.style.display = "none";
    while (answersEl.firstChild) {
      answersEl.removeChild(answersEl.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    // Disable all buttons after selection
    Array.from(answersEl.children).forEach((button) => {
      if (button.dataset.correct) {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  
    nextBtn.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionEl.textContent = `You scored ${score} out of ${questions.length}!`;
    nextBtn.textContent = "Restart";
    nextBtn.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      currentQuestionIndex = 0;
      score = 0;
      nextBtn.textContent = "Next";
      startQuiz();
    }
  });
  
  startQuiz();
   






// we need to add questions now

// const questions = [
//     {
//       question: "Inside which HTML element do we put the JavaScript?",
//       answers: [
//         { text: "javascript", correct: false },
//         { text: "<scripting>", correct: false },
//         { text: "js", correct: false },
//         { text: "<script>", correct: true }
//       ]
//     },
//     {
//       question: "What is the purpose of JavaScript in web development?",
//       answers: [
//         { text: "To structure web pages", correct: false },
//         { text: "To style web pages", correct: false },
//         { text: "To add interactivity and dynamic content to web pages", correct: true },
//         { text: "<script>", correct: false }
//       ]
//     },
//     {
//       question: "What is the output of the following code? console.log(typeof null);",
//       answers: [
//         { text: "null", correct: false },
//         { text: "undefined", correct: false },
//         { text: "object", correct: true }
//       ]
//     }
//     {
//         question: " Which of the following is NOT a valid JavaScript data type?"
//         answers: [
//             { text: "string", correct: false },
//             { text: "boolean", correct: false },
//             { text: "object", correct: false },
//             { text: "integer", correct: true }
//         ]
        
//     }
//   ];

             

//         // now we will add varibales to the answer button and all which is in h2 we getted that by id 
//         const questionElement=document.getElementById("question");
//         const answerButtons=document.getElementById("answer-buttons");
//         const answerButton=document.getElementById("nextbtn");

//         // we will store the varibale for now question index & score because when  ever we wil start the quiz ,quesyion no and the
// let currentQuestionIndex=0;
// let score=0;

// //   whwn we will start the quiz everything will be in zero
// function startQuiz(){     
//     currentQuestionIndex=0;
//     score=0;
//     nextButton.innerHTML="next"; //we are adding this coz chnage the text to restart or reply 
//     showWQuestion(); // display the question
// }

// function showWQuestion(){
//     resetstate();
//     let currentQuestion = questions[currentQuestionIndex]; // 0 , 1 
//     let questionNo=currentQuestionIndex + 1;
//     questionElement.innerHTML =questionNo + " ." + currentQuestion.
//     question;


// // to display the asnswers 

// currentQuestion.answers.forEach(answer=>{ //
//     const button=document.createElement("button");
//     button.innerHTML= answer.text;
//     button.classList.add("btn"); 
//     answerButtons.appendChild(button); 
//     if(answers.correct){
//         button.dataset.correct=answers.correct
//     }
//     button.addEventListener("click",selectanswers);
//     // display the div in asnwer button
// });
// }



// function resetstate(){
//     nextButton.style.display="none";
//     while(answerbuttons.firstchild){
//         answerbuttons.removechild(answerButtons.firstChild)
//     }
// }

// function selectanswers(){
//     const selectBtn=e.target;
//     const iscorrect = selectedBtn.dataset.correct ==="true";
//     if(iscorrect){
//         selectBtn.classList.add("correct");
//     }else{
//         selectBtn.classList.add("incorrect");
//     }
// }
// startQuiz();




    