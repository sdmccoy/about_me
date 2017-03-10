'use strict';

var counter = 0;
var questionName = 'What is your name?';
var userName = prompt(questionName);
console.log(questionName + ': ' + userName);

var questionPrompt = ['Do you want to play a game of memory?', 'Is my last name MacCoy?', 'Did I attend two colleges?', 'Did I mention I\'m back in school again?', 'Is my nickname Dingo?'];
var responseYes = ['Superb! Hopefully you read my bio!', 'Incorrect, it\'s McCoy, attention to detail is important!', 'Bingo! Technically 3 but you didn\'t know that.', 'Correct! You must have gone to school for being so smart.', 'Correct! You must know voodoo because I never mentioned that.'];
var responseNo = ['Sad panda, come back later when you\'re not scared.', 'Who ever thought answering \'no\' could feel so right.', 'Wrong; maybe alzheimers is setting in.', 'Wah wah; I would see a dr. for your memory.', 'Wrong but I won\'t fault you because I never mentioned it.'];
var userScore = [[1,0],[0,1],[1,0],[1,0],[1,0]];

function question1(){
  for (var i = 0; i < questionPrompt.length; i++) {
    var answer = prompt(questionPrompt[i]);
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      alert(responseYes[i]);
      console.log(questionPrompt[i] + ': ' + answer);
      counter += userScore[i][0];
    }
    else if (answer.toLowerCase() === 'n' || answer.toLowerCase() === 'no') {
      alert(responseNo[i]);
      console.log(questionPrompt[i] + ': ' + answer);
      counter += userScore[i][1];
    }
    else {
      alert('Woah there, tiger; try using english.');
      console.log(questionPrompt[i] + ': ' + answer);
    }
  }
}
question1();

function question6(){
  var attempts1 = 1;
  while (attempts1 <= 4) {
    var question6 = 'Hey ' + userName + '! Guess how many outdoor sports I do?';
    var answer6 = prompt(question6);
    if (answer6 > 10) {
      alert('Ouch, that\'s too high.');
      console.log(question6 + ': ' + answer6);
      attempts1++;
    } else if (answer6 < 10) {
      alert('Too low. I\'m not that lazy.');
      console.log(question6 + ': ' + answer6);
      attempts1++;
    } else if (parseInt(answer6) === 10) {
      alert('Bingo! You\'re a ninja.');
      console.log(question6 + ': ' + answer6);
      counter++;
      break;
    }
  }
}
question6();

function question7(){
  var newArray1 = ['kiteboarding', 'climbing', 'skiing', 'canyoning'];
  for (var i = 0; i < 6; i++) {
    var question7 = 'Take a guess at one of those outdoor sports.';
    var answer7 = prompt(question7);
    if (newArray1.includes(answer7.toLowerCase())) {
      alert('Wow, you\'re correct!');
      console.log(question7 + ': ' + answer7);
      counter++;
      break;
    } else {
      alert('Sorry, try again.');
      console.log(question7 + ': ' + answer7);
    }
  }
  alert('Here\'s all of the possible answers: ' + newArray1);
}
question7();

if (counter > 5) {
  alert(counter + ' out of 7! ' + userName + ' is a smart cookie!');
} else if (counter < 3) {
  alert('Ouch, only ' + counter + ' out of 7. ' + userName + ' , go back to school.');
} else {
  alert(counter + ' out of 7. Mediocre at best, ' + userName + '.');
}
