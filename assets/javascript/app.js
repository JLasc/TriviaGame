
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
sixth: ["Mance Raydar", "Littlefinger", "Bowfinger", "Crast"], /* answer: Mance Raydar */
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

//Page hooks
var triviaTimer = $(".trivia-timer");
var triviaQuestion = $(".trivia-question");
var triviaAnswer = $(".trivia-answers");
var startButton = $("#startbtn");


function quickkey () {
    nextAnswer();
    nextQuestion();    
};

//Functions
function start () {
    startButton.hide();
    $("#startimg").hide();
    triviaQuestion.text(firstQuestion);
    answersPrint(firstAnswer);
    triviaTimer.text(timeRemaining);
    questionInterval = setInterval(countdown, 1000);
};


var answersPrint = function (ans) {
    triviaAnswer.empty()
    for (i = 0; i < ans.length; i++){
        newLine = $("<p>")
        newButton = $("<button>").text(ans[i]).addClass("btn btn-secondary btn-lg").attr("type", "button").attr("value", ans[i]);
        triviaAnswer.append(newLine, newButton);
    }
};

var nextAnswer = function () {
    var temp1 = Object.values(answerObj); // Turns answer-object keys into an array of arrays
    answerIndex = temp1.indexOf(firstAnswer); //Finds what index the firstAnswer-array is in - returns 0 index
    newAnswer = Object.values(answerObj)[answerIndex + 1]; //delivers the new answer index for the next question
    answersPrint(newAnswer); //runs answerPrint function on newAnswer
    firstAnswer = newAnswer // assigns firstAnswer equal to newAnswer to repeat next set of answers
};

var nextQuestion = function() {
    var temp = Object.values(questionObj); //Turns question-object keys into array with string-values
    indexValue = temp.indexOf(firstQuestion); //Finds question in temp array and gives index - returns 0 at start 
    newQuestion = Object.values(questionObj)[indexValue + 1]; //increments index by 1 for next question
    triviaQuestion.text(newQuestion); // prints new question on the screen
    firstQuestion = newQuestion //Assigns new question to firstQuestion variable. This will bring up new question automatically.
};

var reset = function() {

};

var countdown = function() {    
    timeRemaining -= 1;
    triviaTimer.text(timeRemaining);
    if (timeRemaining == 0) {
        clearInterval(questionInterval);
    }
}




//Click events -- add later, will return undefined with doc.ready commented
startButton.click(start);





/* });  */