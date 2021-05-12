function task1() {
    let first = prompt('Enter First Name: ');
    let last = prompt('Enter Last Name: ');

    alert('Welcome! ' + first + ' ' + last);
}

function task2() {
    let mob = prompt('Your favorite mobile phone : ');

    document.write('My favorite phone is: ');
    document.write(mob);
    document.write('<br>');
    document.write('Length of String: ');
    document.write(mob.length);
}

function task3() {
    let pak = 'Pakistani';

    let index = pak.indexOf('n');

    document.write('String ' + pak + '<br>' + "Index of 'n' : " + index);
}

function task4() {
    let st = 'Hello World';

    let index = st.lastIndexOf('l');

    document.write('String ' + st + '<br>' + "Last Index of 'l' : " + index);
}

function task5() {
    let pak = 'Pakistani';

    let val = pak[3];

    document.write('String ' + pak + '<br>' + 'Character at index 3 : ' + val);
}

function task6() {
    let first = prompt('Enter First Name: ');
    let last = prompt('Enter Last Name: ');

    alert('Welcome! ' + first.concat(' ' + last));
}

function task7() {
    let hyd = 'Hyderabad';

    let isl = hyd.replace('Hyder', 'Islam');

    document.write('City: ' + hyd + '<br>' + 'After Replacement : ' + isl);
}

function task8() {
    let msg =
        'Ali and Sami are best friends. They play cricket and football together';

    let ms = msg.split('and').join('&');

    document.write(ms);
}

function task9() {
    let st = '472';

    let val = +st;

    document.write('Value: ' + st + '<br>Type: ' + typeof st + '<br>');

    document.write('Value: ' + val + '<br>Type: ' + typeof val);
}

function task10() {
    let inp = prompt('User Input :');

    let upper = inp.toUpperCase();

    document.write('User input: ' + inp);
    document.write('<br>');
    document.write('UPPER CASE: ' + upper);
}

function task11() {
    let inp = prompt('User Input :');

    let upper = inp.charAt(0).toUpperCase() + inp.slice(1);

    document.write('User input: ' + inp);
    document.write('<br>');
    document.write('UPPER CASE: ' + upper);
}

function task12() {
    let num = 33.36;

    let st = num.toString().replace('.', '');

    document.write('Number: ' + num);
    document.write('<br>');
    document.write('Result: ' + st);
}

function task13() {
    let name = prompt('Enter Username');

    if (
        name.includes('!') ||
        name.includes(',') ||
        name.includes('.') ||
        name.includes('@')
    ) {
        alert('Please enter a valid username');
    }
}

function task14() {
    let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    let ord = prompt('Welcome to ABC Bakery , What do u want: ');

    if (A.includes(ord.toLowerCase())) {
        alert('Available');
    } else {
        alert('Not Available');
    }
}

function task15() {
    let pass = prompt('Enter Password');

    if (/[^[a-zA-Z]a-zA-Z0-9]/.test(pass)) {
        alert('Enter valid password');
    } else {
        if (pass.length() < 7) {
            alert('Enter valid password');
        }
    }
}

function task16() {
    let uni = 'University of Karachi';

    let arr = uni.split('');

    arr.forEach(function (item, index) {
        document.write(item + '<br>');
    });
}

function task17() {
    let inp = 'Pakistan';

    document.write(
        'User Input: ' +
            inp +
            '<br>' +
            'Last character of input: ' +
            inp.charAt(inp.length - 1)
    );
}
