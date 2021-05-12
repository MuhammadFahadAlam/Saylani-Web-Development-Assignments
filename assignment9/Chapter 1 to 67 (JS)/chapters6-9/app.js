function task1() {
    let a = 10;
    document.write('Result:<br>');
    document.write('The value of a is: ' + a);
    document.write('<br>...........................<br><br>');
    document.write('<br>The value of ++a is: ' + ++a);
    document.write('<br>The value of a is: ' + a);
    document.write('<br><br>The value of a++ is: ' + a++);
    document.write('<br>The value of a is: ' + a);
    document.write('<br><br>The value of --a is: ' + --a);
    document.write('<br>The value of a is: ' + a);
    document.write('<br><br>The value of a-- is: ' + a--);
    document.write('<br>The value of a is: ' + a);
}

function task2() {
    let a = 2;
    let b = 1;
    let result = --a - --b + ++b + b--;
    document.write('a is ' + a);
    document.write('<br>');
    document.write('b is ' + b);
    document.write('<br>');
    document.write('result is ' + result);
}

function task3() {
    let name = prompt('Input your name');
    alert('Welcome ' + name);
}

function task5() {
    let num = +prompt('Enter number to generate Table');
    if (num == 0) {
        num = 5;
    }

    document.write(
        'Table of ' +
            num +
            '<br>' +
            num +
            ' x 1 = ' +
            num * 1 +
            '<br>' +
            num +
            ' x 2 = ' +
            num * 2 +
            '<br>' +
            num +
            ' x 3 = ' +
            num * 3 +
            '<br>' +
            num +
            ' x 4 = ' +
            num * 4 +
            '<br>' +
            num +
            ' x 5 = ' +
            num * 5 +
            '<br>' +
            num +
            ' x 6 = ' +
            num * 6 +
            '<br>' +
            num +
            ' x 7 = ' +
            num * 7 +
            '<br>' +
            num +
            ' x 8 = ' +
            num * 8 +
            '<br>' +
            num +
            ' x 9 = ' +
            num * 9 +
            '<br>' +
            num +
            ' x 10 = ' +
            num * 10
    );
}

function task6() {
    let eng = 'English';
    let math = 'Math';
    let urdu = 'Urdu';

    let total = 100;

    let engMark = +prompt('Enter English Marks');
    let mathMark = +prompt('Enter Math Marks');
    let urduMark = +prompt('Enter Urdu Marks');

    let ttotal = total * 3;
    let tobt = engMark + mathMark + urduMark;

    let engPer = (engMark / total) * 100;
    let mathPer = (mathMark / total) * 100;
    let urduPer = (urduMark / total) * 100;

    let tper = (engPer + mathPer + urduPer)/3;

    let table = document.createElement('table');

    let tr1 = document.createElement('tr');

    let td1_1 = document.createElement('th');
    let t1_1 = document.createTextNode("Subject");
    td1_1.appendChild(t1_1);

    let td1_2 = document.createElement('th');
    let t1_2 = document.createTextNode("Total Marks");
    td1_2.appendChild(t1_2);

    let td1_3 = document.createElement('th');
    let t1_3 = document.createTextNode("Obtained");
    td1_3.appendChild(t1_3);

    let td1_4 = document.createElement('th');
    let t1_4 = document.createTextNode("Percentage");
    td1_4.appendChild(t1_4);

    let tr2 = document.createElement('tr');

    let td2_1 = document.createElement('td');
    let t2_1 = document.createTextNode(eng);
    td2_1.appendChild(t2_1);

    let td2_2 = document.createElement('td');
    let t2_2 = document.createTextNode(total);
    td2_2.appendChild(t2_2);

    let td2_3 = document.createElement('td');
    let t2_3 = document.createTextNode(engMark);
    td2_3.appendChild(t2_3);

    let td2_4 = document.createElement('td');
    let t2_4 = document.createTextNode(engPer);
    td2_4.appendChild(t2_4);

    let tr3 = document.createElement('tr');

    let td3_1 = document.createElement('td');
    let t3_1 = document.createTextNode(math);
    td3_1.appendChild(t3_1);

    let td3_2 = document.createElement('td');
    let t3_2 = document.createTextNode(total);
    td3_2.appendChild(t3_2);

    let td3_3 = document.createElement('td');
    let t3_3 = document.createTextNode(mathMark);
    td3_3.appendChild(t3_3);

    let td3_4 = document.createElement('td');
    let t3_4 = document.createTextNode(mathPer);
    td3_4.appendChild(t3_4);

    let tr4 = document.createElement('tr');

    let td4_1 = document.createElement('td');
    let t4_1 = document.createTextNode(urdu);
    td4_1.appendChild(t4_1);

    let td4_2 = document.createElement('td');
    let t4_2 = document.createTextNode(total);
    td4_2.appendChild(t4_2);

    let td4_3 = document.createElement('td');
    let t4_3 = document.createTextNode(urduMark);
    td4_3.appendChild(t4_3);

    let td4_4 = document.createElement('td');
    let t4_4 = document.createTextNode(urduPer);
    td4_4.appendChild(t4_4);

    let tr5 = document.createElement('tr');
    tr5.style.fontWeight = 'bold';

    let td5_1 = document.createElement('td');
    let t5_1 = document.createTextNode("");
    td5_1.appendChild(t5_1);

    let td5_2 = document.createElement('td');
    let t5_2 = document.createTextNode(ttotal);
    td5_2.appendChild(t5_2);

    let td5_3 = document.createElement('td');
    let t5_3 = document.createTextNode(tobt);
    td5_3.appendChild(t5_3);

    let td5_4 = document.createElement('td');
    let t5_4 = document.createTextNode(tper+"%");
    td5_4.appendChild(t5_4);
    
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    tr1.appendChild(td1_3);
    tr1.appendChild(td1_4);

    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    tr2.appendChild(td2_3);
    tr2.appendChild(td2_4);

    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    tr3.appendChild(td3_3);
    tr3.appendChild(td3_4);

    tr4.appendChild(td4_1);
    tr4.appendChild(td4_2);
    tr4.appendChild(td4_3);
    tr4.appendChild(td4_4);

    tr5.appendChild(td5_1);
    tr5.appendChild(td5_2);
    tr5.appendChild(td5_3);
    tr5.appendChild(td5_4);

    table.append(tr1);
    table.append(tr2);
    table.append(tr3);
    table.append(tr4);
    table.append(tr5);

    document.body.appendChild(table);
}
