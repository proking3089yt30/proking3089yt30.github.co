// Get the input element
const input = document.getElementById("input");

// Get all the buttons
const buttons = document.querySelectorAll("button");

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Get the button id
        const id = this.id;

        // Get the current input value
        const value = input.value;

        // Switch cases for different buttons
        switch (id) {
            case "clear":
                // Clear the input
                input.value = "";
                break;
            case "backspace":
                // Remove the last character from the input
                input.value = value.slice(0, -1);
                break;
            case "equal":
                // Evaluate the input expression
                try {
                    input.value = eval(value);
                } catch (error) {
                    // If there is an error, show "Invalid"
                    input.value = "Invalid";
                }
                break;
            default:
                // Append the button value to the input
                input.value += this.textContent;
                break;
        }
    });
});
