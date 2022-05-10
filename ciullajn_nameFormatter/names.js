// This script concatenates two strings together to format a name.

// Function called when the form is submitted.
// Function formats the text and returns false.
function formatNames() {
	// TODO Declare a variable for storing the formatted name:
    let fName;
	let lName;

    // TODO Get a reference to the form values (hint: use document.getElementById)
	fName = document.getElementById('firstName').value;
	lName = document.getElementById('lastName').value;

	// TODO Create variables to hold the uppercase initial of each name
	let fNamecap;
	let lNamecap;

	fNamecap = fName.charAt(0).toUpperCase(); 
	lNamecap = lName.charAt(0).toUpperCase();

	fName = fNamecap + fName.slice(1);
	lName = lNamecap + lName.slice(1);

	// TODO Create the formatted name (hint: use string concatenation)
	let formattedName;
	formattedName = lName + ", " + fName; 

	// TODO Display the formatted name
    document.getElementById('result').value = formattedName;

	return false;
} 

function init() {
   if (document && document.getElementById) {
      document.getElementById('theForm').onsubmit = formatNames;
   }
}

window.onload = init;