class Mobile {

    phoneModel = "OnePlus"
    #unlockPin = 1234  //# refer the variable as private

    makeCall() {
        console.log("Calling someone...");
    }

    sendSMS(phonenumber) {
        console.log("sending message..." + phonenumber);
    }

    get getUnlockPin() {
        return this.#unlockPin;
    }

    set setUnlockPin(value){
        this.#unlockPin = value;
    }

}
exports.MOB = Mobile;

// const myMobile = new Mobile();
// myMobile.makeCall(); // Calling someone...
// myMobile.sendSMS(99); // sending message...
// console.log(myMobile.phoneModel) // accessing variables //output: OnePlus
// // console.log(myMobile.getUnlockPin()) // without using get.. output: 1234 private variable if we need access using methods 
// myMobile.setUnlockPin = 4321
// myMobile.getUnlockPin;
// console.log(myMobile.getUnlockPin) // with using get

