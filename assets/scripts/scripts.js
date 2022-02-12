var on = false;
var dark = false;
const calcONClass = 'calcON';
const darkModeClass = 'dark-mode';
const TITLE = document.getElementById('pageTitle');
const MODEBTN = document.getElementById('mode');
const ONOFF = document.getElementById('onoff');
const DISPLAY = document.getElementById('display');
const BODY = document.getElementById('body');
const CALCULATOR = document.getElementById('calculator');

document.getElementById('onoff').innerHTML = "OFF";
document.getElementById('mode').innerHTML = "OFF";

function darkMode() {
  if (dark == false && document.getElementById('mode').click){
    dark = !dark;
    document.getElementById('mode').innerHTML = "ON";
    BODY.classList.toggle(darkModeClass);
    CALCULATOR.classList.toggle(darkModeClass);
    MODEBTN.classList.toggle(calcONClass);
  } else if (dark != false && document.getElementById('mode').click){
    dark = !dark;
    document.getElementById('mode').textContent = "OFF";
    BODY.classList.remove(darkModeClass);
    CALCULATOR.classList.remove(darkModeClass);
    MODEBTN.classList.remove(calcONClass)
  }
}

function onOff(){
  if (on == false && document.getElementById('onoff').click) {
    on = !on;
    document.getElementById('onoff').innerHTML = "ON";
    ONOFF.classList.toggle(calcONClass);
    DISPLAY.classList.toggle(calcONClass);
    TITLE.classList.toggle(calcONClass);
  } else if (on != false && document.getElementById('onoff').click) {
    on = !on;
    document.getElementById('onoff').innerHTML = "OFF";
    document.getElementById('display').innerHTML = '';
    ONOFF.classList.remove(calcONClass);
    DISPLAY.classList.remove(calcONClass);
    TITLE.classList.remove(calcONClass);
    }
  }
  
function clean() {
  if (on === true) {
  document.getElementById('display').innerHTML = " ";
  }
  return;
}

function insert(num){
  if (on === true) {
        let number = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = number + num;
  return;
  }
}

function backspace() {
  if (on === true) {
    let display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length - 1)
  return;
  }
}

function calc(){
  if (on === true) {
    let display = document.getElementById('display').innerHTML;
    if (display){
      document.getElementById('display').innerHTML = eval(display)
    }
  }
  return;
}
