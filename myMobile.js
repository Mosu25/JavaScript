const mobile = require('./classDemo');

const myMobile = new mobile.MOB();
myMobile.makeCall(); //Calling someone...
console.log(myMobile.phoneModel); // OnePlus
console.log(myMobile.getUnlockPin); // 1234
console.log(myMobile.sendSMS(99)); // sending message...99