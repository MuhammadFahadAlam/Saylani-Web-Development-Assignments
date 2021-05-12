function task1() {
    let char = toString(prompt('Enter Character'));
    let code = char.charCodeAt();
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
        alert('Character is Letter');
    } else {
        alert('Character is Number');
    }
}

function task2() {
    let num1 = +prompt('Enter First Number');
    let num2 = +prompt('Enter Second Number');
    if (num1 > num2) {
        alert('Number 1 is Greater');
    } else if (num1 < num2) {
        alert('Number 2 is Greater');
    } else {
        alert('Number 1 and 2 are Equal');
    }
}

function task3() {
    let num = +prompt('Enter Number');
    if (num > 0) {
        alert('Positive');
    } else if (num < 0) {
        alert('Negative');
    } else {
        alert('Zero');
    }
}

function task4() {
    let char = prompt('Enter a Letter');
    let vowels = ['a','e','i','o','u'];
    let flag = vowels.includes(char);
    if (flag) {
        alert('Vowel');
    } 
    else {
        alert('Not Vowel');
    }
}

function task5() {
    let pass = "myPassword123"
    let input = prompt("Enter Password");
    if (input === ""){
        alert("Please enter your password");
    }
    else if (input === pass){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect!")
    }
}

function task7() {
    let time = +prompt("Enter Time in 24 format");
    if (time >= 0000 && time < 1200){
        alert("Good Morning!");
    }
    else if (time >= 1200 && time < 1700){
        alert("Good Afternoon!");
    }
    else if (time >= 1700 && time < 2100){
        alert("Good Evening!");
    }
    else{
        alert("Good night!");
    }
}