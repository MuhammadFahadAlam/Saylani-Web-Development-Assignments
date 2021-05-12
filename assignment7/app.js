let screen = document.getElementById('screen');

function addOnScreen( x ){
    screen.value += x;
}

function clearScreen(){
    screen.value = '';
}

function calculate(){
    screen.value = screen.value.replace("x", "*");
    screen.value = eval(screen.value);
}