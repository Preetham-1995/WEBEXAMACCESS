let OTP = "";
const questions = [
    {
        question: "[1] What is the orange part of an egg called?",
        options: ["A) Yolk", "B) Shell", "C) Albumen", "D) Chalaza"],
        answer: 'A'
    },
    {
        question: "[2] How many legs do insects have?",
        options: ["A) Four", "B) Six", "C) Eight", "D) Ten"],
        answer: 'B'
    },
    {
        question: "[3] What is a baby kangaroo called?",
        options: ["A) Cub", "B) Pup", "C) Joey", "D) Calf"],
        answer: 'C'
    },
    {
        question: "[4] What is the closest planet to the Sun?",
        options: ["A) Venus", "B) Mars", "C) Mercury", "D) Earth"],
        answer: 'C'
    },
    {
        question: "[5] In which country can you find the Eiffel Tower?",
        options: ["A) Italy", "B) France", "C) Spain", "D) Germany"],
        answer: 'B'
    },
    {
        question: "[6] How many days are there in a year?",
        options: ["A) 365", "B) 364", "C) 366", "D) 367"],
        answer: 'A'
    },
    {
        question: "[7] How many players are in a soccer team?",
        options: ["A) 9", "B) 11", "C) 10", "D) 12"],
        answer: 'B'
    },
    {
        question: "[8] Where do polar bears live?",
        options: ["A) Antarctica", "B) Arctic", "C) Greenland", "D) Iceland"],
        answer: 'B'
    },
    {
        question: "[9] Which is faster, light or sound?",
        options: ["A) Light", "B) Sound"],
        answer: 'A'
    },
    {
        question: "[10] How many letters are in the English alphabet?",
        options: ["A) 24", "B) 25", "C) 27", "D) 26"],
        answer: 'D'
    },
];

const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const step4 = document.querySelector(".step4");
const emailAddress = document.getElementById("emailAddress");
const inputs = document.querySelectorAll(".otp-group input");
const nextButton = document.querySelector(".nextButton");
const verifyButton = document.querySelector(".verifyButton");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

window.addEventListener("load", () => {
    emailjs.init({
        publicKey: "_tEijHvC-1SMrTmxf",
      });
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");
});

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    nextButton.classList.toggle("disable", !re.test(email));
};

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

inputs.forEach((input, index) => {
    input.addEventListener("keyup", function(e) {
        if (this.value.length >= 1) {
            e.target.value = e.target.value.substr(0, 1); // Limit input to 1 character

            // Move to the next input if it exists
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }

        // Check if all inputs are filled to enable the verify button
        if (Array.from(inputs).every(input => input.value !== "")) {
            verifyButton.classList.remove("disable");
        } else {
            verifyButton.classList.add("disable");
        }
    });

    // Optionally handle backspace to move focus to the previous input
    input.addEventListener("keydown", function(e) {
        if (e.key === "Backspace" && this.value === "") {
            if (index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});


const serviceID="service_3f2pkfz";
const templateID="template_xq2hce8";

nextButton.addEventListener("click", () => {
    OTP = generateOTP();
    nextButton.innerHTML="Sending...";
    let templateParameter={
        from_name:"Preetham's Community",
        OTP:OTP,
        message:"Please Find out the attached file",
        reply_to:emailAddress.value,
    }
    emailjs.send(serviceID, templateID, templateParameter).then(
        (res) => {
            console.log(res);
            nextButton.innerHTML="Next &rarr";
            step1.style.display="none";
            step2.style.display="block";
            step3.style.display="none";
        },
        (err) =>{
            console.log(err);
        }
        );
        });
        
verifyButton.addEventListener("click", () => {
    let values = Array.from(inputs).map(input => input.value).join('');
    if (OTP == values) {
        step2.style.display = "none";
        step3.style.display = "block";
        document.getElementById("startQuizButton").style.display = "block";
    } else {
        alert("Incorrect OTP!");
    }
});

const loadQuiz = () => {
    quizContainer.innerHTML = ""; 
    questions.forEach((q, index) => {
        const questionHTML = `
            <div class="quiz-item">
                <h4 class="quiz-question">${q.question}</h4>
                <div class="quiz-options">
                    ${q.options.map(option => `
                        <div class="quiz-option">
                            <label>
                                <input type="radio" name="q${index}" value="${option[0]}"> ${option}
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        quizContainer.innerHTML += questionHTML;
    });
};
document.getElementById("startQuizButton").addEventListener("click", () => {
    step3.style.display = "none";
    step4.style.display = "block"; 
    loadQuiz(); 
});
document.getElementById("startQuizButton").addEventListener("click", () => {
    step3.style.display = "none";
    step4.style.display = "block"; 
    loadQuiz(); 
});
document.getElementById("startQuizAgain").addEventListener("click", () => {
    step4.style.display = "block"; 
    loadQuiz(); 
});
document.getElementById("submitQuiz").addEventListener("click", () => {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    const totalQuestions = questions.length;
    const totalMarks = 100;
    const marks = (score / totalQuestions) * totalMarks;
    const percentage = (score / totalQuestions) * 100;
    const resultWindow = window.open("", "_blank");
    resultWindow.document.write(`
        <head>
            <link rel="stylesheet" href="first.css" />
        </head>
        <body>
            <div class="result-window">
                <h2>Quiz Results</h2>
                <p>The total marks are: ${totalMarks}</p>
                <p>Your marks are: ${marks.toFixed(1)}</p>
                <p>Total questions: ${totalQuestions}</p>
                <p>Your correct answers: ${score}</p>
                <p>Your wrong answers: ${totalQuestions - score}</p>
                <p>Your percentage: ${percentage.toFixed(1)}%</p>
            </div>
        </body>
    `);
    
    resultWindow.document.close();
});



