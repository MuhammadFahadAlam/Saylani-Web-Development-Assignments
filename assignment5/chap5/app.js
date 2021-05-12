function task1(num1, num2){
    sum = num1 + num2;
    document.write('Sum of '+ num1 + ' and ' + num2 + ' is ' + sum);
}

function mul(num1, num2){
    mul = num1 + num2;
    document.write('Multiplication of '+ num1 + ' and ' + num2 + ' is ' + mul);
}

function div(num1, num2){
    div = num1 + num2;
    document.write('Division of '+ num1 + ' and ' + num2 + ' is ' + div);
}

function mod(num1, num2){
    mod = num1 + num2;
    document.write('Modulus of '+ num1 + ' and ' + num2 + ' is ' + mod);
}

function task3(){
    let number;

    let line1 = document.createElement('p');
    let line1Node = document.createTextNode('Value after variable declaration is:'+ number);

    line1.appendChild(line1Node);
    document.body.append(line1);

    number = 5;

    let line2 = document.createElement('p');
    let line2Node = document.createTextNode('Initial value is:'+ number);

    line2.appendChild(line2Node);
    document.body.append(line2);

    number ++;

    let line3 = document.createElement('p');
    let line3Node = document.createTextNode('Value after increment is:'+ number);

    line3.appendChild(line3Node);
    document.body.append(line3);

    number += 7;
    
    let line4 = document.createElement('p');
    let line4Node = document.createTextNode('Value after addition is:'+ number);

    line4.appendChild(line4Node);
    document.body.append(line4);

    number --;

    let line5 = document.createElement('p');
    let line5Node = document.createTextNode('Value after decrement is:'+ number);

    line5.appendChild(line5Node);
    document.body.append(line5);

    number %= 3;

    let line6 = document.createElement('p');
    let line6Node = document.createTextNode('The remainder is:'+ number);

    line6.appendChild(line6Node);
    document.body.append(line6);

    let butGroup = document.getElementById('alertButGroup');
    butGroup.style.display = 'none';
}

function task4(){
    let ticketPrice = 600;
    let cost = ticketPrice * 5;

    document.write("Total cost to buy 5 ticket to a movie is "+ cost +"PKR" );
}

function task5(){
    let num = 4;
    document.write("Table of " + num + '<br>' + num + " x 1 = " + num * 1+ '<br>' + num + " x 2 = " + num * 2+ '<br>' + num + " x 3 = " + num * 3+ '<br>' + num + " x 4 = " + num * 4+ '<br>' + num + " x 5 = " + num * 5+ '<br>' + num + " x 6 = " + num * 6+ '<br>' + num + " x 7 = " + num * 7+ '<br>' + num + " x 8 = " + num * 8+ '<br>' + num + " x 9 = " + num * 9+ '<br>' + num + " x 10 = " + num * 10);
}

function task6(){
    let cel = 25;
    let fah = (cel*9/5)+32;

    let fah2 = 70;
    let cel2 = (fah2-32)*5/9;

    document.write(cel+"oC is "+fah +"oF" +"<br>" +fah2+"oF is "+cel2 +"oC");
}

function task7(){
    let item1 = 650;
    let num1 = 3;
    let item2 = 100;
    let num2 = 7;
    let ship = 100;

    cost = item1*num1 + item2*num2 + ship;

    document.write("Price of item 1 is "+ item1 + "<br>" + "Quantity of item1 is "+num1+"<br>"+"Price of item 2 is "+ item2 + "<br>" + "Quantity of item2 is "+num2+"<br>" + "Shipping charges "+ ship+"<br><br>"+ "Total cost of your order is "+ cost );
}

function task8() {
    let total = 980;
    let obt = 804;
    let percent = (obt/total)*100;
    
    document.write("Marks Sheet<br><br>Total marks: "+total+"<br>"+"Marks Obtained: "+obt+"<br>Percentage: "+percent);
}

function task9(){
    document.write("Currency in PKR<br><br>Total currency in PKR: "+ (10*104.80 + 25*28))
}

function task10() {
    let num = 6;

    num = (num+5)*10/2;
}

function task11() {
    let cur = 2016;
    let birth = 1992;

    let age = cur - birth;

    document.write("Age Calculator<br><br>Current Year: "+cur+"<br>Birth Year: "+birth+"<br>Your Age is: "+ age);
}

function task12() {
    let rad = 20;
    let cir = 2 * 22/7 * rad;
    let area = 22/7 * rad**2;

    document.write("The Geometrizer<br><br>Radius of a circle: "+rad+"<br>The circumference is: "+cir+"<br>The area is: "+area);
}

function task13() {
    let snack = "chocolate chip";
    let age = 15;
    let maxAge = 65;
    let amount = 3;
    let total = amount * (maxAge - age);

    document.write("The Lifetime Supply Calculator<br><br>Favourite Snack: "+snack+"<br>Current age: "+age+"<br>Estimated Maximum Age: "+maxAge+"<br>Amount of snacks per day: "+amount+"<br>You will need "+total+" chocolate chip to last you until the ripe old age of 65");
}