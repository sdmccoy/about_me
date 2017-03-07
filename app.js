'use strict';

var question1 = 'Do you want to play a game of memory?';
var answer1 = prompt(question1);
if (answer1.toLowerCase() === 'y' || answer1.toLowerCase() === 'yes') {
  var responseYes1 = alert('Superb! Hopefully you read my bio!');
  console.log(question1 + ': ' + answer1);
}
else if (answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no') {
  var responseNo1 = alert('Sad panda, come back later when you\'re not scared.');
  console.log(question1 + ': ' + answer1);
}
else {
  var responseNA1 = alert('Woah their tiger, try using english.');
  console.log(question1 + ': ' + answer1);
}

var question2 = 'Is my last name MacCoy?';
var answer2 = prompt(question2);
if (answer2.toLowerCase() === 'y' || answer2.toLowerCase() === 'yes') {
  var responseYes2 = alert('Superb! Hopefully you read my bio!');
  console.log(question2 + ': ' + answer2);
}
else if (answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
  var responseNo2 = alert('Sad panda, come back later when you\'re not scared.');
  console.log(question2 + ': ' + answer2);
}
else {
  var responseNA2 = alert('Woah their tiger, try using english.');
  console.log(question2 + ': ' + answer2);
}
