const functions = require("firebase-functions");


// http one

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  response.send(number.toString());
});


exports.order = functions.https.onRequest((request, response) => {
  const numbers = "Bhathiya";
  const numberss = "Prasad";
  response.send(numbers + numberss);
});


exports.customer = functions.https.onRequest((request, response) => {
  const number1 = 12;
  const number2 = 15;
  const result = number1 + number2;
  response.send(result.toString());
});

