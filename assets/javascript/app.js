$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'In which movie would you hear the song Hakuna Mutana?',
	possibleAnswers : ['A. Beauty and the Beast',
				 'B. Cinderella',
				 'C. Lion King',
				 'D. Hercules'],
	flags : [false, false, true, false],
	answer : 'C. Lion King'
};

var q2 = {
	question: 'In which television show would you find characters named Fred, Doris, and Arnold?',
	possibleAnswers: ['A. Petticoat Junction',
				 'B. Green Acres',
				 'C. Beverly Hillbillies',
				 'D. All in the Family'],
	flags : [false, true, false, false],
	answer : 'B. Green Acres'
};

var q3 = {
	question : 'Which comic strip was written by Charles Schulz?',
	possibleAnswers : ['A. Beetle Bailey',
				 'B. Peanuts',
				 'C. Garfield',
				 'D. Blondie'],
	flags : [false, true, false, false],
	answer : 'B. Peanuts'
};

var q4 = {
	question : 'Which type of scientist studies and forecasts the weather?',
	possibleAnswers : ['A. Meteorlogist',
				 'B. Astronomer',
				 'C. Astrologist',
				 'D. Biologist'],
	flags : [true, false, false, false],
	answer : 'A. Meteorlogist'
};

var q5 = {
	question : 'What color would you get if you mixed red and yellow together?',
	possibleAnswers : ['A. Gray',
				 'B. Orange',
				 'C. Pink',
				 'D. Deeper shade of yellow'],
	flags : [false, true, false, false],
	answer : 'B. Orange'
};

var q6 = {
	question : 'Which American fast food franchise serves Reeses Peanut Butter Cup blizzards?',
	possibleAnswers : ['A. Dairy Queen',
				 'B. Baskin Robbins',
				 'C. Wendys',
				 'D. McDonalds'],
	flags : [true, false, false, false],
	answer : 'A. Dairy Queen'
};

var q7 = {
	question : 'What school is attended in the Disney Channel Series, Girl Meets World?',
	possibleAnswers : ['A. Vintage High School',
				 'B. Peyton Middle School',
				 'C. John Quincy Adams Middle School',
				 'D. Washington High School'],
	flags : [false, false, true, false],
	answer : 'C. John Quincy Adams Middle School'
};

var q8 = {
	question : 'What is the name of the dog in Garfield?',
	possibleAnswers : ['A. Tyson',
				 'B. Odie',
				 'C. Oliver',
				 'D. Fred'],
	flags : [false, true, false, false],
	answer : 'B. Odie'
};

var q9 = {
	question : 'What is the worlds longest river?',
	possibleAnswers : ['A. Congo River',
				 'B. Mississippi River',
				 'C. Nile River',
				 'D. Amazon River'],
	flags : [false, false, false, true],
	answer : 'D. Amazon'
};

var q10 = {
	question : 'What is the diameter of the Earth?',
	possibleAnswers : ['A. 9,762 Miles',
				  'B. 8,000 Miles',
				  'C. 9,000 Miles',
				  'D. 7,652 Miles'],
	flags : [false, true, false, false],
	answer : 'B. 8,000 Miles'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});