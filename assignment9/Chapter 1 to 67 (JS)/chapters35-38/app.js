function task1() {
    let date = new Date();

    document.write(date);
}

function task2() {
    let first = prompt('Enter Firstname ');
    let last = prompt('Enter Lastname ');
    alert('Welcome! ' + first + ' ' + last);
}

function task3() {
    let num1 = +prompt('Enter First num ');
    let num2 = +prompt('Enter Last num ');
    alert(num1 + num2);
    return num1 + num2;
}

function task4(num1, num2, op) {
    let result;
    if (op === '+') {
        result = num1 + num2;
    }
    if (op === '-') {
        result = num1 - num2;
    }
    if (op === 'x') {
        result = num1 * num2;
    }
    if (op === '/') {
        result = num1 / num2;
    }
    if (op === '%') {
        result = num1 % num2;
    }
    alert(num1 + ' ' + op + ' ' + num2 + ' = ' + result);
}

function task5(num) {
    alert('Square of ' + num + ' is ' + num * num);
}

function task6(num) {
    let factorial = 1;
    for (let i = 2; i < num + 1; i++) {
        factorial *= i;
    }
    alert('factorial of ' + num + ' is ' + factorial);
}

function task7(start, end) {
    for (let i = start; i < end + 1; i++) {
        document.write(i + '<br>');
    }
}

function calculateHypotenuse(b, p) {
    function calculateSquare(num) {
        return num * num;
    }

    let h = (calculateSquare(b) + calculateSquare(p)) ** (1 / 2);
    alert('Hypotenuse: ' + h);
}

function task9(w, h) {
    let a = w * h;
    alert('Area is ' + a);
}

function task10(st) {
    let strarr = st.split('');
    let strrevarr = strarr.reverse();

    if (strarr === strrevarr) {
        alert("String '" + st + "' is Palindrome.");
    } else {
        alert('no');
    }
}

function task11(st) {
    let strarr = st.split(' ');

    strarr.forEach(function (word, i) {
        strarr[i] = word[0].toUpperCase() + word.slice(1);
    });

    alert('Original: ' + st + '\n' + 'Reversed: ' + strarr.join(' '));
}

function task12(st) {
    let arr = st.split(' ');
    let largest = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largest.length) {
            largest = arr[i];
        }
    }

    alert('In String: ' + st + '\nLargest Word is : ' + largest);
}

function task13(str, le) {
    let count = 0;
    let arr = str.split('');
    arr.forEach((element) => {
        if (element === le) {
            count++;
        }
    });

    alert("'" + le + "' in " + str + ' occur ' + count + ' times.');
}

function task14(rad) {
    function calCircumference(rad) {
        let circum = 2 * Math.PI * rad;
        return circum;
    }

    function calcArea(rad) {
        let area = Math.PI * rad ** 2;
        return area;
    }

    alert(
        'Circumference is ' +
            calCircumference(rad) +
            '\n' +
            'Area is ' +
            calcArea(rad)
    );
}
