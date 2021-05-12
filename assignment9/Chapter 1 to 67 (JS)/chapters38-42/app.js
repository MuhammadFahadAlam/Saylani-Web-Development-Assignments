function power(a, b) {
    let value = a ** b;
    alert(a + ' raised to power ' + b + ' is equal to ' + value);
}

function task1() {
    let a = +prompt('Enter number');
    let b = +prompt('Enter power');
    power(a, b);
}

function task2() {
    let year = +prompt('Enter Year to check f it is Leap Year');
    if (year % 4 === 0) {
        alert(year + ' is Leap Year');
    } else {
        alert(year + ' is not Leap year');
    }
}

function findS(a, b, c) {
    return (a + b + c) / 2;
}

function Area(a, b, c) {
    let s = findS(a, b, c);
    let area = s * (s - a) * (s - b) * (s - c);
    alert('Area is ' + area);
}

function task3() {
    let a = +prompt('Enter a');
    let b = +prompt('Enter b');
    let c = +prompt('Enter c');

    Area(a, b, c);
}

function Average(a, b, c) {
    return (a + b + c) / 3;
}

function Percentage(a, total) {
    return (a / total) * 100;
}

function task4() {
    let total = +prompt('Enter max marks of subjects');
    let a = +prompt('Enter marks of subject 1');
    let b = +prompt('Enter marks of subject 2');
    let c = +prompt('Enter marks of subject 3');

    function mainFunction(a, b, c) {
        alert('Average Marks Obtained : ' + Average(a, b, c) + ' marks');
        alert('Percentage in Subject 1 : ' + Percentage(a, total) + '%');
        alert('Percentage in Subject 2 : ' + Percentage(b, total) + '%');
        alert('Percentage in Subject 3 : ' + Percentage(c, total) + '%');
        alert('Percentage Overall : ' + Percentage(a + b + c, 3 * total) + '%');
    }

    mainFunction(a, b, c);
}

function IndexOf(str, char) {
    let arr = Array.from(str);
    let indices = [];
    arr.forEach((element, index) => {
        if (element === char) {
            indices.push(index);
        }
    });

    alert('Found on index : ' + indices);
}

function task5() {
    let str = prompt('Enter String');
    let char = prompt('Character to find in String');
    IndexOf(str, char);
}

function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let length = vowels.length;

    vowels.forEach((element) => {
        str = str.split(element).join('');
    });
    alert(str);
}

function task6() {
    let str = prompt('Enter String to remove vowels');
    removeVowels(str);
}

function task7() {
    let str = prompt('Enter String');
    let count = 0;

    for (let i = 0; i < str.length - 1; i++) {
        let letters = str[i] + str[i + 1];

        switch (letters) {
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu': {
                count++;
            }
        }
    }
    alert(count);
}

function toM(dis) {
    return dis * 1000;
}

function toF(dis) {
    return dis * 3280.84;
}

function toI(dis) {
    return dis * 39370.1;
}

function toCm(dis) {
    return dis * 100000;
}

function task8() {
    let dis = +prompt('Enter distance in kilometer');
    alert('Distance in meters : ' + toM(dis));
    alert('Distance in feet : ' + toF(dis));
    alert('Distance in inches : ' + toI(dis));
    alert('Distance in centimeters : ' + toCm(dis));
}

function calculateOvertime(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate;
    }
    return 0;
}

function task9() {
    let hours = +prompt('Enter Hours of work');
    let rate = 12;

    alert('Overtime pay is : ' + calculateOvertime(rate, hours));
}

function cashier(amount) {
    let hund = 0;
    let fift = 0;
    let tens = 0;

    while (amount >= 100) {
        amount -= 100;
        hund++;
    }
    while (amount >= 50) {
        amount -= 50;
        fift++;
    }
    while (amount >= 10) {
        amount -= 10;
        tens++;
    }

    alert(
        'you will have ' +
            hund +
            ' hundred notes ' +
            fift +
            ' fifty notes ' +
            tens +
            ' ten notes'
    );
}

function task10() {
    let amount = +prompt('Enter amount');

    cashier(amount);
}
