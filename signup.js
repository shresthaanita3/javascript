let form = document.signup_form;
let fullname = form.fullname,
    email = form.email;
// Event: element.addEventListener("event", callback_func())

//Form event: submit
form.addEventListener("submit", function(e) {
    if(fullname.value == ''){
        console.log("Fullname is empty.")
        e.preventDefault();
    }

    if(email.value == ''){
        console.log("Email is empty.")
        e.preventDefault();
    }
});


console.log(Array());
console.log(Object());


//Keyboard event
email.addEventListener("keyup", function() {
    console.log(this.value);
    if(this.value.indexof("@") == -1){
        console.log("At least one'@' symbol is required.");
    } else if(this.value.indexof(".") != this.value.lastIndexof("@")){
        console.log("More than one '@' symbol is not allowed.");
    } else{
        console.log("OK");
    }
});
