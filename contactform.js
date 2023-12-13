let form = document.contact_form;
let fullname = form.fullname;
    email = form.email;
    phone=form.phone;
    gender=form.gender;
    address=form.address;
    message=form.message;

 let span = document.createElement("span");
     span.classList.add('error');
     email.parentElement.append(span);
     phone.parentElement.append(span);
     

form.addEventListener("submit",function(e){
    if(fullname.value == ""){
        document.write("Please fill the form");
        e.preventDefault();
    }
})     