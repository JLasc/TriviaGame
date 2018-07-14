
/* $( document ).ready(function() { */

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
first: ["Little Mix", "Littlefinger", "Olenna Tyrell", "Rene Artois"], /* answer: Littlefinger */
second: ["Tully", "Tarth", "Gibb", "Utichi"], /* answer: Tarth */
third: ["The Unthanks", "The Unjust", "The Unsullied", "The Undertones"], /* answer: The Unsullied */
fourth: ['"Hear me roar"', '"A Lannister always pays his debts"', '"None so fierce"', '"Never knowingly undersold"'], /* answer: Lannister always pays debts */
fifth: ["Mirri Maz Duur", "Khal Drogo", "Maris Piper", "Septa Mordane"], /* answer: Mirri Maz Duur */
sixth: ["Mance Rayder", "Littlefinger", "Bowfinger", "Crast"], /* answer: Mance Raydar */
seventh: ["Bran Stark", "Lord Varys", "Cersei Lannister", "Portmeirion"], /* answer: Bran Stark */
eight: ["Cersei Lannister", "Margaery Tyrell", "Olenna Tyrell", "Jarvis Thribb"], /* answer: Olenna Tyrell */
ninth: ["Grey Wind", "Graham", "Ghost", "Gargamel"], /* answer: Ghost */
tenth: ["Kardashian", "Targaryen", "Tully", "Martell"] /* answer: Targaryen */
};

//Global Variables --------------------------------------------------------------------
var firstQuestion = Object.values(questionObj)[0];
var firstAnswer = Object.values(answerObj)[0];
var timeRemaining = 15;
var correctGuess = 0;
var wrongGuess = 0;
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
function triviaNext () {
    timeRemaining = 16; // 16 accounts for the 1 seconds delay in showing.
    nextAnswer();
    nextQuestion();
    imageHolder.empty();
    $(".answerbtn").click(logic)    
};


function start () {
    startButton.hide();
    imageHolder.empty();
    triviaQuestion.text(firstQuestion);
    answersPrint(firstAnswer);
    triviaTimer.text(timeRemaining);
    questionInterval = setInterval(countdown, 1000);
    $(".answerbtn").click(logic)
};


var answersPrint = function (ans) {
    triviaAnswer.empty()
    for (i = 0; i < ans.length; i++){
        newLine = $("<p>")
        newButton = $("<button>").text(ans[i]).addClass("btn btn-secondary btn-lg answerbtn").attr("type", "button").attr("value", ans[i]);
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

var nextQuestion = function() {
    var temp = Object.values(questionObj); //Turns question-object keys into array with string-values
    indexValue = temp.indexOf(firstQuestion); //Finds question in temp array and gives index - returns 0 at start 
    newQuestion = Object.values(questionObj)[indexValue + 1]; //increments index by 1 for next question
    triviaQuestion.text(newQuestion); // prints new question on the screen
    firstQuestion = newQuestion //Assigns new question to firstQuestion variable. This will bring up new question automatically.
    questionInterval = setInterval(countdown, 1000);
};

var imageMaker = function(a) {
    newImg = $("<img>");
    newImg.attr("src", a);
    newImg.addClass("image-size");
    imageHolder.append(newImg);
};

var countdown = function() {  
    timeRemaining -= 1;
    triviaTimer.text(timeRemaining);  
    if (timeRemaining == 0) {
        clearInterval(questionInterval);
        noAnswer();
    }
}

var noAnswer = function() {
    noAnswer = triviaQuestion.text();
    if (noAnswer === questionObj.first){
        console.log("potato")
    }
}

//Click events & Logic  --------------------------------------------------------------------
startButton.click(start)

function logic() {

    var answer = ($(this).attr("value"))

    //Who materminded the plot to kill King Joffrey?
    if (answer === "Littlefinger") {
        imageMaker("./assets/images/littlefinger/littlefinger.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/littlefinger/littlefinger.jpg");
        triviaQuestion.html("The correct answer is <b>Littlefinger</b>");
        setTimeout(triviaNext, 3000);
    };

    //"What is Brienne's real surname?"
    if (answer === "Tarth") {
        imageMaker("./assets/images/tarth/brienne.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/tarth/brienne.jpg");
        triviaQuestion.html("The correct answer is <b>Tarth!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"Grey Worm is the leader of which group?"
    if (answer === "The Unsullied") {
        imageMaker("./assets/images/unsullied/unsullied.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/unsullied/unsullied.gif");
        triviaQuestion.html("The correct answer is <b>The Unsullied!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"What is the official Lannister family motto?"
    if (answer === '"A Lannister always pays his debts"') {
        imageMaker("./assets/images/lannistermotto/lannisterdebt.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/lannistermotto/lannisterdebt.gif");
        triviaQuestion.html("The correct answer is <b>'A Lannister always pays his debts'!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"Who was burned alive on Drogo's funeral pyre?"
    if (answer === 'Mirri Maz Duur') {
        imageMaker("./assets/images/mirri/mirri.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/mirri/mirri.gif");
        triviaQuestion.html("The correct answer is <b>Mirri Maz Duur!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"Who said, 'Of all the ways to kill you, poison would be the last'?"
    if (answer === "Mance Raydar") {
        imageMaker("./assets/images/mancerayder/mance.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/mancerader/mance.jpg");
        triviaQuestion.html("The correct answer is <b>Mance Rayder!</b>");
        setTimeout(triviaNext, 3000);
    };


    //"Who said, 'Hush, Hodor! No more Hodoring!"
    if (answer === "Bran Stark") {
        imageMaker("./assets/images/hushhodor/hushhodor.gif");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/hushhodor/hushhodor.gif");
        triviaQuestion.html("The correct answer is <b>Bran Stark!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"How is 'The Queen of Thorns' more commonly known?"
    if (answer === "Olenna Tyrell") {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("The correct answer is <b>Olenna Tyrell!</b>");
        setTimeout(triviaNext, 3000);
    };


    //"What is the name of Jon Snow's Direwolf?"
    if (answer === "Olenna Tyrell") {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/queenthorns/olenna.jpg");
        triviaQuestion.html("The correct answer is <b>Olenna Tyrell!</b>");
        setTimeout(triviaNext, 3000);
    };

    //"Which family does this crest belong to?"
    if (answer === "Targaryen") {
        imageMaker("./assets/images/targaryen/dany.jpg");
        triviaQuestion.html("<b>You guessed correctly!</b>");
        triviaTimer.empty()
        clearInterval(questionInterval)
        setTimeout(triviaNext, 3000);
    } else {
        imageMaker("./assets/images/targaryen/dany.jpg");
        triviaQuestion.html("The correct answer is <b>Targaryen!</b>");
        setTimeout(triviaNext, 3000);
    };


}


/* });  */