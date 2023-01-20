
const buttons = document.querySelectorAll('#buttons button');

const display = document.querySelector('#display');

for (let button of buttons) {
  button.addEventListener('click', function() {
   
    const buttonText = this.textContent;
    
    if (['+', '-', '*', '/'].indexOf(buttonText) !== -1) {
    
      display.value += ` ${buttonText} `;
    } else if (buttonText === 'C') {
    
      display.value = '';
    } else if (buttonText === 'CE') {
     
      display.value = display.value.substring(0, display.value.length - 1);
    } else if (buttonText === '=') {
      
      display.value = eval(display.value);
    } else {
      
      display.value += buttonText;
    }
  });
}


document.addEventListener('keydown', function(event) {
 
  if (event.keyCode === 8) {
   
    display.value = display.value.substring(0, display.value.length - 1);
  }
});

document.addEventListener('keydown', function(event) {
    // get the key code of the key pressed
    const keyCode = event.keyCode;
    // check if the key pressed is a number or operator
    if (keyCode >= 48 && keyCode <= 57) {
      // if the key pressed is a number, add the number to the display
      display.value += (keyCode - 48);
    } else if (keyCode === 107 || keyCode === 187) {
      // if the key pressed is the "+" key, add the "+" operator to the display
      display.value += ' + ';
    } else if (keyCode === 109 || keyCode === 189) {
      // if the key pressed is the "-" key, add the "-" operator to the display
      display.value += ' - ';
    } else if (keyCode === 106) {
      // if the key pressed is the "*" key, add the "*" operator to the display
      display.value += ' * ';
    } else if (keyCode === 111) {
      // if the key pressed is the "/" key, add the "/" operator to the display
      display.value += ' / ';
    }
    else if (keyCode === 13) {
        // if the key pressed is the "enter" key, evaluate the expression and update the display
        display.value = eval(display.value);
      } else if (keyCode === 57 && event.shiftKey === true) {
        // if the key pressed is the "(" key, add "(" to the display
        display.value += '(';
      } else if (keyCode === 48 && event.shiftKey === true) {
        // if the key pressed is the ")" key, add ")" to the display
        display.value += ')';
      } else if (['+', '-', '*', '/', '.'].indexOf(event.key) !== -1) {
        // if the key pressed is an operator, prevent the default behavior
        event.preventDefault();
      }
    });
  