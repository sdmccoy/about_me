'use strict';

// var questionName = 'What is your name?';
// var userName = prompt(questionName );
// console.log(questionName + ': ' + userName);
// alert('Howdy ' + userName + '!');

// var question1 = 'Do you want to play a game of memory?';
// var answer1 = prompt(question1);
// if (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes') {
//   var responseYes1 = alert('Superb! Hopefully you read my bio!');
//   console.log(question1 + ': ' + answer1);
// }
// else if (answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no') {
//   var responseNo1 = alert('Sad panda, come back later when you\'re not scared.');
//   console.log(question1 + ': ' + answer1);
// }
// else {
//   var responseNA1 = alert('Woah there, tiger; try using english.');
//   console.log(question1 + ': ' + answer1);
// }
//
// var question2 = 'Is my last name MacCoy?';
// var answer2 = prompt(question2);
// if (answer2.toLowerCase() === 'y' || answer2.toLowerCase() === 'yes') {
//   var responseYes2 = alert('Incorrect, it\'s McCoy, attention to detail is important!');
//   console.log(question2 + ': ' + answer2);
// }
// else if (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
//   var responseNo2 = alert('Who ever thought answering \'no\' could feel so right.');
//   console.log(question2 + ': ' + answer2);
// }
// else {
//   var responseNA2 = alert('Woah there, tiger; try using english.');
//   console.log(question2 + ': ' + answer2);
// }
//
// var question3 = 'Did I attend two colleges?';
// var answer3 = prompt(question3);
// if (answer3.toLowerCase() === 'y' || answer3.toLowerCase() === 'yes') {
//   var responseYes3 = alert('Bingo! Technically 3 but you didn\'t know that.');
//   console.log(question3 + ': ' + answer3);
// }
// else if (answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no') {
//   var responseNo3 = alert('Wrong; maybe alzheimers is setting in.');
//   console.log(question3 + ': ' + answer3);
// }
// else {
//   var responseNA3 = alert('Woah there, tiger; try using english.');
//   console.log(question3 + ': ' + answer3);
// }
//
// var question4 = 'Did I mention I\'m back in school again?';
// var answer4 = prompt(question4);
// if (answer4.toLowerCase() === 'y' || answer4.toLowerCase() === 'yes') {
//   console.log(question5 + ': ' + answer5);
//   var responseYes4 = alert('Correct! You must have gone to school for being so smart.');
//   console.log(question4 + ': ' + answer4);
// }
// else if (answer4.toLowerCase() === 'n' || answer4.toLowerCase() === 'no') {
//   var responseNo4 = alert('Wah wah; I would see a dr. for your memory.');
//   console.log(question4 + ': ' + answer4);
// }
// else {
//   var responseNA4 = alert('Woah there, tiger; try using english.');
//   console.log(question4 + ': ' + answer4);
// }
//
// var question5 = 'Is my nickname Dingo?';
// var answer5 = prompt(question5);
// if (answer5.toLowerCase() === 'y' || answer5.toLowerCase() === 'yes') {
//   var responseYes5 = alert('Correct! You must know voodoo because I never mentioned that.');
//   console.log(question5 + ': ' + answer5);
// }
// else if (answer5.toLowerCase() === 'n' || answer5.toLowerCase() === 'no') {
//   var responseNo5 = alert('Wrong but I won\'t fault you because I never mentioned it.');
//   console.log(question5 + ': ' + answer5);
// }
// else {
//   var responseNA5 = alert('Woah there, tiger; try using english.');
// }

// var attempts1 = 1;
// while (attempts1 <= 4) {
//   var testLog = console.log(question6 + ': ' + answer6);
//   var question6 = 'Hey ' + userName + '! Guess how many outdoor sports I do?';
//   var answer6 = prompt(question6);
//   if (answer6 > 10) {
//     alert('Ouch, that\'s too high.');
//     testLog;
//     attempts1++;
//   } else if (answer6 < 10) {
//     alert('Too low. I\'m not that lazy.');
//     testLog;
//     attempts1++;
//   } else {
//     alert('Bingo! You\'re a ninja.');
//     testLog; //*this doesnt work yet
//     break;
//   }}

var newArray1 = ['kiteboarding', 'climbing', 'skiing', 'canyoning'];
for (var i = 0; i < 6; i++) {
  var question7 = 'Take a guess at one of those outdoor sports.';
  var answer7 = prompt(question7);
  if (newArray1.includes(answer7.toLowerCase())) {
    alert('Wow, you\'re correct! Here\'s all of the possible answers: ' + newArray1);
    console.log(question7 + ': ' + answer7);
    break;
  } else {
    alert('incorrect answer');
  }
}
