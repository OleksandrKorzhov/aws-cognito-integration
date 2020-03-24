const {
  TWILIO_ACCOUNT_ID,
  TWILLIO_AUTH_TOKEN,
  FROM_PHONE_NUMBER,
  SMS_AGENT = 'SNS',
} = process.env;

const AWS = require('aws-sdk');
const chance = new require('chance')();

exports.handler = async (event, context, callback) => {
  console.log('Trigger create auth challenge');

  if (event.request.challengeName === 'CUSTOM_CHALLENGE') {
    event.response.publicChallengeParameters = {
      challengeType: 'otp_code',
    };

    const secretOtp = chance.integer({min: 10000, max: 99999});
    const targetPhone = event.request.userAttributes.phone_number;

    event.response.privateChallengeParameters = {
      answer: secretOtp,
    };

    event.response.challengeMetadata = 'SMS_PASSWORDLESS';

    switch (SMS_AGENT) {
      case 'TWILIO':
        console.log('start sending SMS');
        require('twilio')(
          TWILIO_ACCOUNT_ID,
          TWILLIO_AUTH_TOKEN,
        ).messages.create({
          from: FROM_PHONE_NUMBER,
          // to: event.request.userAttributes.phone_number,
          to: targetPhone,
          body: secretOtp,
        });
        break;
      case 'SNS':
        await new AWS.SNS({apiVersion: '2010-03-31'})
          .publish({
            Message: `Your secret OTP: ${secretOtp}`,
            PhoneNumber: targetPhone,
          })
          .promise();
        break;
    }
  }

  console.log(SMS_AGENT);
  console.log(event);
  console.log(context);

  callback(null, event);
};
