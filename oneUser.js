const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Testing for the third time!', 
         from: process.env.TWILIO_NUMBER,       
         to: '+639178581320' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();