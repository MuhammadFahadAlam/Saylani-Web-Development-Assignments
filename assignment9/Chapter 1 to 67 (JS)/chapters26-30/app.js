function task1() {
    let num = +prompt('Enter +ve number: ');

    document.write('number: ' + num);
    document.write('<br>');
    document.write('round off: ' + Math.round(num));
    document.write('<br>');
    document.write('floor : ' + Math.floor(num));
    document.write('<br>');
    document.write('ceil: ' + Math.ceil(num));
}

function task2() {
    let num = prompt('Enter -ve number: ');

    document.write('number: ' + num);
    document.write('<br>');
    document.write('round off: ' + Math.round(num));
    document.write('<br>');
    document.write('floor : ' + Math.floor(num));
    document.write('<br>');
    document.write('ceil: ' + Math.ceil(num));
}

function task3() {
    let num = +prompt('enter no: ');

    document.write('The absolute value of ');
    document.write(num);
    document.write(' is ');
    document.write(Math.abs(num));
}

function task4() {
    let num = Math.ceil(Math.random() * Math.floor(6));

    document.write('random dice value : ' + num);
}

function task5() {
    let num = Math.ceil(Math.random() * Math.floor(2));

    let dic = { 1: 'Tails', 2: 'Heads' };

    document.write(num + '<br>');
    document.write('random coin value : ' + dic[num]);
}

function task6() {
    let num = Math.ceil(Math.random() * Math.floor(100));

    document.write('random value b/w 1 and 100 : ' + num);
}

function task7() {
    let wei = prompt('Enter weight in kg: ');

    document.write('weight: ' + wei);
}

function task8_part(ran) {
    let result = 0;

    while (result === 0) {
        let num = +prompt('Enter guess number: ');

        if (num === ran) {
            alert('Congrats');
            result = 1;
        } else {
            let con = confirm('Try again');

            if (con) {
                result = 0;
            } else {
                result = 1;
            }
        }
    }
}

function task8() {
    let ran = Math.ceil(Math.random() * Math.floor(10));
    task8_part(ran);
}
