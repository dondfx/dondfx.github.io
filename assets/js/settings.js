function addTextInputs() {
    var container = document.getElementById('dynamicInputs');

    for (let i = 0; i < 20; i++) {
        var input = document.createElement('input');
        input.type = 'text';
		input.className = 'dynamic-input';
        input.style.margin = '0 0.5em'; // Ensures 1em gap between inputs
        container.appendChild(input);
    }
}

// Call the function to add the inputs when the page loads
window.onload = addTextInputs;