/*
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken); 

client.notify.services(notifyServiceSid)
    .notifications.create({
        toBinding: JSON.stringify({
            binding_type:'sms', address: process.env.NUMBER_REX,
            binding_type:'sms', address: process.env.NUMBER_JIAN,
            binding_type: 'sms', address: process.env.NUMBER_MIE
        }),
        body: 'Sample2: Testing Bulk Messaging for All Users'
    })
    .then(notifications => console.log(notifications.sid))
    .catch(error => console.log(error));
*/
/*
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken); 
const body = "Bulk Messaging Incoming!"

const bindingOpts = {
  identity: '00000001', // We recommend using a GUID or other anonymized identifier for Identity.
  bindingType: 'sms',
  address: '+639178581320',
};

client.notify.services(notifyServiceSid)
  .bindings.create(bindingOpts, body)
  .then(binding => console.log(binding.sid))
  .catch(error => console.log(error))
  .done();
*/

// multipack.js
const twilio = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const body = 'Test1: This is a sample for Bulk messaging!';
const numbers = [process.env.NUMBER_REX, process.env.NUMBER_MIE, process.env.NUMBER_JIAN];

Promise.all(
  numbers.map(number => {
    return twilio.messages.create({
      to: number,
      from: process.env.TWILIO_MESSAGING_SERVICE_SID,
      body: body
    });
  })
)
  .then(messages => {
    console.log('Bulk Messages sent!');
  })
  .catch(err => console.error(err));
