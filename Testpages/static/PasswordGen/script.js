//  generate random password
function generate(){

	// set password length/complexity
	let complexity = document.getElementById("slider").value;

	//possible password gen values
	let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	let password= "";

	//create for loop to choice password characters
	for(var i = 0; i<= complexity; i++){
		password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
	}

	//add password to textbox
	document.getElementById("display").value = password;

	// add password to previously gen password section
	document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25"

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

	if(document.getElementById("slider").value > 0){
		document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
	}
	else{
		document.getElementById("length").innerHTML = "Length: 1";
	}
}

//fucntion to copy password to clipboard
function copyPassword(){

	document.getElementById("display").select();

	document.execCommand("Copy")

	alert("You copied something, how awesome! ༼ つ ಥ_ಥ ༽つ");
}