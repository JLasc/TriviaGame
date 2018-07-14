$( document ).ready(function() {

//Question & Answer Objects --------------------------------------------------------------------
var questionObj = {
    first: "Who masterminded the plot to kill King Joffrey?",
    second: "What is Brienne's real surname?",
    third: "Grey Worm is the leader of which group?",
    fourth: "What is the official Lannister family motto?",
    fifth: "Who was burned alive on Drogo's funeral pyre?",
    sixth: "Who said, 'Of all the ways to kill you, poison would be the last'?",
    seventh: "Who said, 'Hush, Hodor! No more Hodoring!",
    eigth: "How is 'The Queen of Thorns' more commonly known?",
    ninth: "What is the name of Jon Snow's Direwolf?",
    tenth: "Which family does this crest belong to?"
};

var answerObj = {
    first: ["Little Mix", "Littlefinger", "Rob Stark", "Rene Artois"],
    /* answer: Littlefinger */
    second: ["Tully", "Tarth", "Gibb", "Utichi"],
    /* answer: Tarth */
    third: ["The Unthanks", "The Unjust", "The Unsullied", "The Undertones"],
    /* answer: The Unsullied */
    fourth: ['"Hear me roar"', '"A Lannister always pays his debts"', '"None so fierce"', '"Never knowingly undersold"'],
    /* answer: Lannister always pays debts */
    fifth: ["Mirri Maz Duur", "Khal Drogo", "Maris Piper", "Septa Mordane"],
    /* answer: Mirri Maz Duur */
    sixth: ["Mance Rayder", "Elia Martel", "Bowfinger", "Crast"],
    /* answer: Mance Raydar */
    seventh: ["Bran Stark", "Lord Varys", "Cersei Lannister", "Portmeirion"],
    /* answer: Bran Stark */
    eight: ["Cersei Lannister", "Margaery Tyrell", "Olenna Tyrell", "Jarvis Thribb"],
    /* answer: Olenna Tyrell */
    ninth: ["Grey Wind", "Graham", "Ghost", "Gargamel"],
    /* answer: Ghost */
    tenth: ["Kardashian", "Targaryen", "Tully", "Martell"]
    /* answer: Targaryen */
};

//Global Variables --------------------------------------------------------------------
var firstQuestion = Object.values(questionObj)[0];
var firstAnswer = Object.values(answerObj)[0];
var timeRemaining = 10;
var correctGuess = 0;
var wrongGuess = 0;
var nullAnswer = 0;
var questionInterval;
var newAnswer;
var newQuestion;



//Page hooks --------------------------------------------------------------------
var triviaTimer = $(".trivia-timer");
var triviaQuestion = $(".trivia-question");
var triviaAnswer = $(".trivia-answers");
var startButton = $("#startbtn");
var imageHolder = $("#image-holder");
var winLose = $("#win-lose");

//Functions --------------------------------------------------------------------
function triviaNext() {
    timeRemaining = 11; // reset to 16 which accounts for the 1 seconds delay in displaying.
    nextAnswer();
    nextQuestion();
    imageHolder.empty();
    triviaTimer.empty();
    $(".answerbtn").click(logic);
};


function start() {
    imageHolder.empty();
    startButton.slideUp();
    triviaQuestion.text(firstQuestion);
    answersPrint(firstAnswer);
    triviaTimer.text(timeRemaining);
    questionInterval = setInterval(countdown, 1000);
    $(".answerbtn").click(logic);
};


var answersPrint = function (ans) {
    triviaAnswer.empty()
    for (i = 0; i < ans.length; i++) {
        newLine = $("<p>");
        newButton = $("<button>").text(ans[i]).addClass("btn btn-primary btn-lg answerbtn").attr("type", "button").attr("value", ans[i]);
        triviaAnswer.append(newLine, newButton);
    }
};

var nextAnswer = function () {
    var temp1 = Object.values(answerObj); // Turns answer-object keys into an array of arrays
    answerIndex = temp1.indexOf(firstAnswer); //Finds what index the firstAnswer-array is in - returns 0 index
    newAnswer = Object.values(answerObj)[answerIndex + 1]; //adds +1 for the new answer index for the next question
    answersPrint(newAnswer); //runs answerPrint function on newAnswer
    firstAnswer = newAnswer // assigns firstAnswer equal to newAnswer to repeat next set of answers
};

var nextQuestion = function () {
    var temp = Object.values(questionObj); //Turns question-object keys into array with string-values
    indexValue = temp.indexOf(firstQuestion); //Finds question in temp array and gives index - returns 0 at start 
    newQuestion = Object.values(questionObj)[indexValue + 1]; //increments index by 1 for next question
    triviaQuestion.text(newQuestion); // prints new question on the screen
    firstQuestion = newQuestion //Assigns new question to firstQuestion variable. This will bring up new question automatically.
    questionInterval = setInterval(countdown, 1000);
};

var imageMaker = function (a) {
    newImg = $("<img>");
    newImg.attr("src", a);
    newImg.addClass("image-size");
    imageHolder.append(newImg);
};

function noAnswer() {
    currentQuestion = triviaQuestion.text();
    triviaAnswer.empty();
    switch (currentQuestion) {
        case questionObj.first:
            imageMaker("./assets/images/littlefinger/littlefinger.jpg");
            triviaQuestion.html("The correct answer is <b>Littlefinger.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            triviaAnswer.empty();
            break;
        case questionObj.second:
            imageMaker("./assets/images/tarth/brienne.jpg");
            triviaQuestion.html("The correct answer is <b>Tarth.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.third:
            imageMaker("./assets/images/unsullied/unsullied.gif");
            triviaQuestion.html("The correct answer is <b>The Unsullied.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.fourth:
            imageMaker("./assets/images/lannistermotto/lannisterdebt.gif");
            triviaQuestion.html("The correct answer is <b>'A Lannister always pays his debts'</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.fifth:
            imageMaker("./assets/images/mirri/mirri.gif");
            triviaQuestion.html("The correct answer is <b>Mirri Maz Duur.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.sixth:
            imageMaker("./assets/images/mancerayder/mance.jpg");
            triviaQuestion.html("The correct answer is <b>Mance Rayder.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.seventh:
            imageMaker("./assets/images/hushhodor/hushhodor.gif");
            triviaQuestion.html("The correct answer is <b>Bran Stark.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.eigth:
            imageMaker("./assets/images/queenthorns/olenna.jpg");
            triviaQuestion.html("The correct answer is <b>Olenna Tyrell.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.ninth:
            imageMaker("./assets/images/jondirewolf/ghost.gif");
            triviaQuestion.html("The correct answer is <b>Ghost.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            break;
        case questionObj.tenth:
            imageMaker("./assets/images/targaryen/dany.jpg");
            triviaQuestion.html("The correct answer is <b>Targaryen.</b>");
            setTimeout(triviaNext, 3000);
            nullAnswer += 1;
            triviaTimer.html("<b>Time's up!</b>");
            showScore()
            break;
    }
}

var countdown = function () {
    timeRemaining -= 1;
    triviaTimer.text(timeRemaining);
    if (timeRemaining == 0) {
        clearInterval(questionInterval);
        noAnswer();
    }
}

function showScore() {
    startButton.show();
    triviaTimer.empty();
    triviaQuestion.empty();
    triviaAnswer.empty();
    firstQuestion = Object.values(questionObj)[0];
    firstAnswer = Object.values(answerObj)[0];
    timeRemaining = 10;


    score =
        "<p>Correct Answers: " + correctGuess + "</p>" +
        "<p>Wrong Answers: " + wrongGuess + "</p>" +
        "<p>No Answer: " + nullAnswer + "</p>";
    triviaTimer.html(score)

};





//Click events & Logic  --------------------------------------------------------------------
startButton.click(start)

function logic() {

    var answer = ($(this).attr("value"));
    var questionCheck = triviaQuestion.text();

    //Who materminded the plot to kill King Joffrey?
    if (answer === "Littlefinger") {
        triviaAnswer.empty();
        imageMaker("./assets/images/littlefinger/littlefinger.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval);
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
    } else if ((answer !== "Littlefinger") && (questionCheck === questionObj.first)) {
        triviaAnswer.empty();
        imageMaker("./assets/images/littlefinger/littlefinger.jpg");
        triviaQuestion.html("The correct answer is <b>Littlefinger.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
    };

    //"What is Brienne's real surname?"
    if (answer === "Tarth") {
        triviaAnswer.empty();
        imageMaker("./assets/images/tarth/brienne.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval);
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
    } else if ((answer !== "Tarth") && (questionCheck === questionObj.second)) {
        imageMaker("./assets/images/tarth/brienne.jpg");
        triviaQuestion.html("The correct answer is <b>Tarth.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"Grey Worm is the leader of which group?"
    if (answer === "The Unsullied") {
        imageMaker("./assets/images/unsullied/unsullied.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval);
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "The Unsullied") && (questionCheck === questionObj.third)) {
        imageMaker("./assets/images/unsullied/unsullied.gif");
        triviaQuestion.html("The correct answer is <b>The Unsullied.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"What is the official Lannister family motto?"

    if (answer === '"A Lannister always pays his debts"') {
        imageMaker("./assets/images/lannistermotto/lannisterdebt.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval);
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== '"A Lannister always pays his debts"') && (questionCheck === questionObj.fourth)) {
        imageMaker("./assets/images/lannistermotto/lannisterdebt.gif");
        triviaQuestion.html("The correct answer is <b>'A Lannister always pays his debts'</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"Who was burned alive on Drogo's funeral pyre?"
    if (answer === 'Mirri Maz Duur') {
        imageMaker("./assets/images/mirri/mirri.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "Mirri Maz Duur") && (questionCheck === questionObj.fifth)) {
        imageMaker("./assets/images/mirri/mirri.gif");
        triviaQuestion.html("The correct answer is <b>Mirri Maz Duur.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"Who said, 'Of all the ways to kill you, poison would be the last'?"
    if (answer === "Mance Rayder") {
        imageMaker("./assets/images/mancerayder/mance.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "Mance Rayder") && (questionCheck === questionObj.sixth)) {
        imageMaker("./assets/images/mancerayder/mance.jpg");
        triviaQuestion.html("The correct answer is <b>Mance Rayder.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };


    //"Who said, 'Hush, Hodor! No more Hodoring!"

    if (answer === "Bran Stark") {
        imageMaker("./assets/images/hushhodor/hushhodor.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "Bran Stark") && (questionCheck === questionObj.seventh)) {
        imageMaker("./assets/images/hushhodor/hushhodor.gif");
        triviaQuestion.html("The correct answer is <b>Bran Stark.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"How is 'The Queen of Thorns' more commonly known?"
    if (answer === "Olenna Tyrell") {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "Olenna Tyrell") && (questionCheck === questionObj.eigth)) {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("The correct answer is <b>Olenna Tyrell.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"What is the name of Jon Snow's Direwolf?"
    if (answer === "Ghost") {
        imageMaker("./assets/images/jondirewolf/ghost.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
        correctGuess += 1;
        triviaAnswer.empty();
    } else if ((answer !== "Ghost") && (questionCheck === questionObj.ninth)) {
        imageMaker("./assets/images/jondirewolf/ghost.gif");
        triviaQuestion.html("The correct answer is <b>Ghost.</b>");
        setTimeout(triviaNext, 3000);
        clearInterval(questionInterval);
        wrongGuess += 1;
        triviaAnswer.empty();
    };

    //"Which family does the Dragon crest belong to?"
    if (answer === "Targaryen") {
        imageMaker("./assets/images/targaryen/dany.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        clearInterval(questionInterval)
        correctGuess += 1;
        triviaAnswer.empty();
        showScore();
    } else if ((answer !== "Targaryen") && (questionCheck === questionObj.tenth)) {
        imageMaker("./assets/images/targaryen/dany.jpg");
        triviaQuestion.html("The correct answer is <b>Targaryen.</b>");
        wrongGuess += 1;
        clearInterval(questionInterval);
        triviaAnswer.empty();
        showScore();
    };

}


  
}); 


/* This starts the particle JS - this was copy and paste */

particlesJS("particles-js", {
    particles: {
      number: {
        value: 592,
        density: { enable: true, value_area: 1815.039575754227 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);