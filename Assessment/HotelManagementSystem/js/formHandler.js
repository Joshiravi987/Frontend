class CustomerFormHandler {

constructor(){

this.form = document.getElementById("guestForm");
this.message = document.getElementById("message");

/* Form Submit Event */

this.form.addEventListener("submit",(e)=>{

e.preventDefault();

this.handleSubmit();

});

}


/* Collect Data + Submit */

handleSubmit(){

let data = {

name: document.getElementById("name").value.trim(),
phone: document.getElementById("phone").value.trim(),
email: document.getElementById("email").value.trim(),
address: document.getElementById("address").value.trim(),
aadhar: document.getElementById("aadhar").value.trim(),
checkin: document.getElementById("checkin").value,
checkout: document.getElementById("checkout").value,
adults: document.getElementById("adults").value,
purpose: document.getElementById("purpose").value.trim()

};

let validationResult = this.validateForm(data);

if(validationResult !== "success"){

this.showMessage(validationResult,"danger");

return;

}

/* Save Data */

this.saveToLocalStorage(data);

/* Success Message */

this.showMessage("Guest Registered Successfully","success");

/* Clear Form */

this.clearForm();

}


/* Validation */

validateForm(data){

if(data.name.length < 3){

return "Name must be at least 3 characters";

}

if(!/^\d{10}$/.test(data.phone)){

return "Phone must be exactly 10 digits";

}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(data.email)){

return "Invalid Email Format";

}

if(data.address === ""){

return "Address is required";

}

if(!/^\d{12}$/.test(data.aadhar)){

return "Aadhar must be 12 digits";

}

let today = new Date().toISOString().split("T")[0];

if(data.checkin < today){

return "Check-in must be future date";

}

if(data.checkout < data.checkin){

return "Checkout must be after Checkin";

}

if(data.adults <= 0){

return "Number of adults must be greater than 0";

}

if(data.purpose.length < 5){

return "Purpose of visit required";

}

return "success";

}


/* Save Data to LocalStorage */

saveToLocalStorage(data){

let records = JSON.parse(localStorage.getItem("guests")) || [];

records.push(data);

localStorage.setItem("guests",JSON.stringify(records));

}


/* Show UI Message */

showMessage(msg,type){

this.message.innerHTML =

`<div class="alert alert-${type}">
${msg}
</div>`;

}


/* Clear Form */

clearForm(){

this.form.reset();

}

}


/* Initialize */

new CustomerFormHandler();