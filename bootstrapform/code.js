
// FUNCTION 1: Validate the email addresses
function checkEmail() {

    // Get the values entered by the user
    var email = document.getElementById("email").value.trim();
    var confirmEmail = document.getElementById("confirm").value.trim();

    // Get the error message elements
    var emailError = document.getElementById("email-error");
    var confirmError = document.getElementById("confirm-error");

    // Clear any previous messages
    emailError.innerHTML = "";
    confirmError.innerHTML = "";

    // Reset the email message color
    emailError.style.color = "red";

    // Check whether the first email field is empty
    if (email == "") {
        emailError.innerHTML = "Please fill in this field.";
    }

    // Check whether the confirmation field is empty
    if (confirmEmail == "") {
        confirmError.innerHTML = "Please fill in this field.";
    }

    // Compare the email addresses only if both are filled in
    if (email != "" && confirmEmail != "") {

        // Check whether the email addresses match
        if (email != confirmEmail) {
            confirmError.innerHTML = "Email does not match.";
        } else {
            // Display a success message if the addresses match
            emailError.style.color = "green";
            emailError.innerHTML = "Email addresses match!";
        }
    }
}


// FUNCTION 2: Create the pizza order
function pizzaOrder() {

    // Start creating the order summary
    var output = "<h3>Pizza Order</h3>";

    // Store the selected pizza size
    var size = "";

    // Determine which pizza size was selected
    if (document.getElementById("small").checked) {
        size = "Small";
    } else if (document.getElementById("medium").checked) {
        size = "Medium";
    } else if (document.getElementById("large").checked) {
        size = "Large";
    }

    // Require the customer to choose a size
    if (size == "") {
        output += "<p>Please select a pizza size.</p>";
        document.getElementById("output").innerHTML = output;
        return;
    }

    // Add the selected size to the order summary
    output += "<p>Size: " + size + "</p>";

    // Create an array to store selected toppings
    var toppings = [];

    // Check whether pepperoni was selected
    if (document.getElementById("pepperoni").checked) {
        toppings.push("Pepperoni");

        // Show the pepperoni message
        document.getElementById("pepperoni-topping")
            .style.display = "block";
    } else {
        // Hide the message when pepperoni is not selected
        document.getElementById("pepperoni-topping")
            .style.display = "none";
    }

    // Check whether sausage was selected
    if (document.getElementById("sausage").checked) {
        toppings.push("Sausage");
    }

    // Check whether mushrooms were selected
    if (document.getElementById("mushrooms").checked) {
        toppings.push("Mushrooms");
    }

    // Display the selected toppings
    if (toppings.length > 0) {
        output += "<p>Toppings: " + toppings.join(", ") + "</p>";
    } else {
        output += "<p>Toppings: None</p>";
    }

    // Display the completed order on the webpage
    document.getElementById("output").innerHTML = output;
}


// Connect the email form to the email validation function
document.getElementById("email-form").addEventListener("submit", function(event) {
    // Stop the form from reloading the webpage
    event.preventDefault();

    // Run the email validation function
    checkEmail();
});


// Connect the pizza form to the pizza order function
document.getElementById("pizza-form").addEventListener("submit", function(event) {
    // Stop the form from reloading the webpage
    event.preventDefault();

    // Create and display the pizza order
    pizzaOrder();
});
