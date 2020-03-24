const {TRIES_LIMIT} = process.env;

exports.handler = (event, context, callback) => {
  console.log('trigger');

  // Limit of tries is reached
  if (event.request.session && event.request.session.length >= TRIES_LIMIT) {
    console.log('limit ot tries is reached');
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
    // successful answer during a try within the defined limit
  } else if (
    event.request.session &&
    event.request.session.some(({challengeResult}) => challengeResult)
  ) {
    console.log('successful passing');
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
    // initiating custom auth flow
  } else if (!event.request.session || !event.request.session.length) {
    console.log('initiating');
    event.response.challengeName = 'CUSTOM_CHALLENGE';
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
  } else {
    // failure case
    console.log('failure');
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }

  console.log(event);

  callback(null, event);
};
