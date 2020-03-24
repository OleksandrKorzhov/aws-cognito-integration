exports.handler = (event, context, callback) => {
  console.log('Trigger verify auth challenge');

  event.response.answerCorrect =
    event.request.privateChallengeParameters.answer ===
    event.request.challengeAnswer;

  console.log(event);

  callback(null, event);
};
