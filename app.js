  // Function to append values to the display
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        // Function to clear the display
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        // Function to delete the last character
        function backspace() {
            let display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }

        // Function to calculate the result
        function calculate() {
            try {
                let result = eval(document.getElementById('display').value);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

        // Listen for keyboard events
        document.addEventListener('keydown', function(event) {
            const key = event.key;

            if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '(' || key === ')') {
                appendToDisplay(key);
            } else if (key === 'Backspace') {
                backspace();
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'c' || key === 'C') {
                clearDisplay();
            }
        });

