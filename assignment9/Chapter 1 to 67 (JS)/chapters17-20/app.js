function task1() {
    let mulArray = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1],
    ];
}

function task2() {
    let mulArray = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1],
    ];
    for (let i = 0; i < mulArray.length; i++) {
        document.write(mulArray[i].join(' ') + '<br>');
    }
}

function task3() {
    for (let i = 1; i < 11; i++) {
        document.write(i + '<br>');
    }
}

function task4() {
    let num = +prompt('Enter a number to show its table');
    let len = +prompt('Enter a length of table');
    document.write('Multiplication table of ');
    document.write(num);
    document.write('<br>');
    document.write('Length ');
    document.write(len);
    document.write('<br>');
    document.write('<br>');

    for (let i = 1; i < len + 1; i++) {
        document.write(num);
        document.write(' x ');
        document.write(i);
        document.write(' = ');
        document.write(num * i);
        document.write('<br>');
    }
}

function task7() {
    let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    let input = prompt('Enter order');
    alert(A.includes(input));
}

function task10() {
    let num = 5;
    let mul = 0;
    let i = 1;
    do {
        mul = num * i;
        document.write(mul);
        document.write(',');
        i++;
    } while (mul < 100);
}
