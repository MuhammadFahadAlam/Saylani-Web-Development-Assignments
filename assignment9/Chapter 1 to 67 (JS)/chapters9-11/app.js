function task1() {
    let city = prompt("Enter City name");
    if (city === "Karachi" || city ==="karachi"){
        alert("Welcome to city of lights");
    }
}

function task2() {
    let gender = prompt("Enter Gender");
    if (gender === "Male" || gender === "male"){
        alert(" Good Morning Ma'am");
    }
    else if (gender === "Female" || gender === "female"){
        alert(" Good Morning Ma'am");
    }
}

function task3() {
    let color = prompt("Enter signal color");
    if (color === 'Red'){
        alert("Must Stop");
    }
    else if (color === 'Yellow'){
        alert("Ready to move");
    }
    else if (color === 'Green'){
        alert("Move now");
    }
}

function task4() {
    let fuel = prompt("Input remaining fuel");
    if (fuel < 0.25){
        alert("Please refill the fuel in your car");
    }
}

function task6() {
    let sub1 = +prompt("Marks of subject1");
    let sub2 = +prompt("Marks of subject1");
    let sub3 = +prompt("Marks of subject3");

    let total = 300;
    let tobt = sub1 + sub2 + sub3;
    let per = (tobt/total)*100;

    let grade = "Fail";
    let remark = "Sorry";

    if (per >= 80){
    let grade = "A-one";
    let remark = "Excellent";
    }
    else if (per >= 70){
        let grade = "A";
        let remark = "Good";
    }
    else if (per >= 60){
        let grade = "B";
        let remark = "You need to improve";
    }

    document.write("Marks Sheet<br><br><br>");
    document.write("Total marks:"+total+ "<br>");
    document.write("Marks Obtained:"+tobt+ "<br>");
    document.write("Percentage:"+per+"%"+ "<br>");
    document.write("Grade:"+grade+ "<br>");
    document.write("Remarks:"+remark+ "<br>");

}

function task7() {
    let secret = Math.floor(Math.random()*10);
    
    let guess = +prompt("Guess the number");

    if (guess === secret){
        alert("Bingo! Correct answer");
    }
    else if (guess + 1 === secret){
        alert("Close enough to the correct answer");
    }
}

function task8() {
    let num = +prompt("Enter number to check if it is divisible by 3");
    if (num%3 === 0){
        alert("Divisible by 3");
    }
}

function task9() {
    let num = +prompt("Enter number");
    if (num%2 === 0){
        alert("even");
    }
    else{
        alert("odd");
    }
}

function task10() {
    let tem = +prompt("Enter Temperature");
    if (tem > 40){
        alert("It is too hot outside.");
    }
    else if (tem > 30){
        alert("The Weather today is Normal.");
    }
    else if (tem > 20){
        alert("Today’s Weather is cool");
    }
    else if (tem > 10){
        alert("OMG! Today’s weather is so Cool.");
    }
}

function task11() {
    let num1 = +prompt("First Number");
    let num2 = +prompt("Second Number");
    let op = prompt("Operation");
    if (op === "+"){
        alert(num1+num2);
    }
    else if (op === "-"){
        alert(num1-num2);
    }
    else if (op === "*"){
        alert(num1*num2);
    }
    else if (op === "/"){
        alert(num1/num2);
    }
    else if (op === "%"){
        alert(num1%num2);
    }
}
