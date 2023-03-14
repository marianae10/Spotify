//-----assigning html ID's to javascript variables----//
const form = document.getElementById('form');
const email = document.getElementById('email-input');
const email2 = document.getElementById('email-input2');
const password = document.getElementById('password-input');
const name = document.getElementById('name-input')
const month = document.getElementById('month');
const day = document.getElementById('day');
const year = document.getElementById('year');
const gender = document.querySelectorAll('input[name="gender"]');

const emailError = document.getElementById('emailError');
const emailError2 = document.getElementById('emailError2');
const passwordError = document.getElementById('passwordError');
const nameError = document.getElementById('nameError');
const monthError = document.getElementById('monthError');
const dayError = document.getElementById('dayError');
const yearError = document.getElementById('yearError');
const genderError = document.getElementById('genderError');


//------VALIDATOR FUNCTION--------//

function handleValidator (element, validator, errormessage, blankMessage, wrongFormatMessage) {
	if(element.value === "") {
			errormessage.innerHTML = "⚠ " + blankMessage;
			errormessage.style.display = "block";
			element.style.border = "2px solid red";
			return;
	}
	if(validator === false) {
		errormessage.innerHTML = " ⚠" + wrongFormatMessage;
		errormessage.style.display = "block";
		element.style.border = "2px solid red";
		return;
	}


};

function lostFocus(element, errormessage) {
	 errormessage.style.display = "none";
	 element.style.border = "2px solid black";
	 return;
}

function checkIfEmail() {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isEmail = emailRegex.test(email.value);
		return isEmail;
	}

//------------check if email blank-----------//
email.addEventListener('blur', function(){	 
	handleValidator(email, checkIfEmail(), emailError, "You need to enter your email.", "This email is invalid. Make sure it's written like example@email.com")
});
email.addEventListener("focus", function() {
	lostFocus(email, emailError)
});


//------------check if EMAIL2 blank-----------//
email2.addEventListener('blur', function(){
	handleValidator(email2, (email.value === email2.value), emailError2, "You need to confirm your email.", "The email address don't match");
});
email2.addEventListener("focus", function() {
 lostFocus(email2, emailError2)
});


//-------------check if PASSWORD is blank--------------------//
password.addEventListener('blur', function(){
	handleValidator(password,(password.value.length >= 8), passwordError, "You need to enter a password", "Your password is too short");
});
password.addEventListener("focus", function() {
	lostFocus(password, passwordError)
});


//-------------check if NAME is blank--------------------//
name.addEventListener('blur', function(){
	handleValidator(name, true, nameError, "Enter a name for you profile", "");
});
name.addEventListener("focus", function() {
	lostFocus(name, nameError)
});


//-------------check if MONTH is blank--------------------//
month.addEventListener('blur', function(){
	handleValidator(month, true, monthError, "Select your birth month", "");
});
month.addEventListener("focus", function() {
	lostFocus(month, monthError)
});


//-------------check if DAY is blank--------------------//
day.addEventListener('blur', function(){
	handleValidator(day, (day.value <= 31 ), dayError,  "Enter a valid day", "Enter a valid day of the month");
});
day.addEventListener("input", function() {
	day.value = day.value.replace(/[^0-9]/g, '');
})
day.addEventListener("focus", function() {
	lostFocus(day, dayError)
});


//-------------check if YEAR is blank--------------------//
year.addEventListener('blur', function(){

	  handleValidator(year, (year.value.length === 4 && year.value >= 1900), yearError,"Enter a valid year","Enter a valid year");
});
year.addEventListener("input", function() {
	year.value = year.value.replace(/[^0-9]/g, '');
})
year.addEventListener("focus", function() {
	lostFocus(year, yearError)
});



//-------------check if GENDER is blank--------------------//

function isNoRadioButtonSelected(groupName) {
  var radios = groupName;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return false; // At least one radio button is selected
    }
  }
  return true; // No radio button is selected
}

function hideGenderError() {
	genderError.style.display = "none";
}


//-------------FORM SUBMISSION--------------------//

form.addEventListener("submit", function (e) {
	e.preventDefault();

	handleValidator(email, checkIfEmail(), emailError, "You need to enter your email.", "This email is invalid. Make sure it's written like example@email.com");
	handleValidator(email2, (email.value === email2.value), emailError2, "You need to confirm your email.", "The email address don't match");
	handleValidator(password,(password.value.length >= 8), passwordError, "You need to enter a password", "Your password is too short");
	handleValidator(name, true, nameError, "Enter a name for you profile", "");
	handleValidator(month, true, monthError, "Select your birth month", "");
	handleValidator(day, (day.value <= 31 ), dayError,  "Enter a valid day", "Enter a valid day of the month");
	handleValidator(year, (year.value.length === 4 && year.value >= 1900), yearError,"Enter a valid year","Enter a valid year");

	if(isNoRadioButtonSelected(gender) === true) {
		genderError.style.display = "block";
		genderError.innerHTML = "⚠ Please select your gender."
	} 

});
