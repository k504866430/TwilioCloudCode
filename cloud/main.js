
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// Require and initialize the Twilio module with your credentials
var client = require('twilio')('ACc95a47829cccb6b23af5f8d41b10b754', '283568208505cb21574393eba1c8f825');

// verify phone number
Parse.Cloud.define("verifyMobile", function(request, response){
    var randomCode = Math.floor(Math.random()*90000) + 10000;
    // Send an SMS message
    client.sendSms({
        to: request.params.mobile,
        from: '+15712527750',
        body: 'Hey Ninjadad! Enter '+randomCode+' to verify.'
      }, function(err, responseData) {
        if (err) {
          console.log(err);
          response.error(err);
        } else {
          console.log(responseData.from);
          console.log(responseData.body);
          response.success(randomCode);
        }
      }
    );
});
