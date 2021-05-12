function task1() {
    let date = new Date();
    alert(date);
}

function task2() {
    let date = new Date();

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    alert('Current Month:  ' + monthNames[date.getMonth()]);
}

function task3() {
    let date = new Date();

    alert('Today is :  ' + date.toString().split(' ')[0]);
}

function task4() {
    let date = new Date();

    if (
        date.toString().split(' ')[0] === 'Sat' ||
        date.toString().split(' ')[0] === 'Sun'
    ) {
        alert('Its Fun day');
    }
}

function task5() {
    let date = new Date();

    if (+date.getDay() < 16) {
        alert('First Fifteen days of month');
    } else {
        alert('Last days of month');
    }
}

function task6() {
    let date = new Date();

    document.write('Current Date: ' + date);
    document.write('<br>');
    document.write('ms till 1 jan 1970: ' + date.getTime());
    document.write('<br>');
    document.write('minutes till 1 jan 1970: ' + date.getTime() / (60 * 1000));
}

function task7() {
    let date = new Date();

    if (date.getHours() < 12) {
        alert('Its AM');
    } else {
        alert('Its PM');
    }
}

function task8() {
    let date = new Date(2020, 12, 31);

    alert('Later Date: ' + date);
}

function task9() {
    let date = new Date();
    let ram = new Date(2015, 6, 18);

    alert(Math.floor((date - ram) / (1000 * 60 * 60 * 24)));
}

function task10() {
    let date = new Date();
    let ram = new Date(2015);

    alert(date - ram);
}

function task11() {
    let date = new Date();

    let newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDay(),
        date.getHours() + 1,
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );

    document.write('Current: ' + newDate);
    document.write('<br>');
    document.write('1 hour ago: ' + date);
}

function task12() {
    let date = new Date();

    let newDate = new Date(
        date.getFullYear() - 100,
        date.getMonth(),
        date.getDay(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    );

    document.write('Current: ' + date);
    document.write('<br>');
    document.write('100 years back: ' + newDate);
}

function task13() {
    let age = +prompt('Enter Age');
    let date = new Date();

    document.write(
        'Your age is ' +
            age +
            '<br>' +
            'Your Birth year is ' +
            (date.getFullYear() - age)
    );
}

function task14() {
    let name = 'Fahad';
    let date = new Date();
    let unit = 410;
    let per = 16;
    let late = 350;

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    document.write('K-Elecric Bill');
    document.write('<br>');
    document.write('Customer Name : ' + name);
    document.write('<br>');
    document.write('Month: ' + monthNames[date.getMonth()]);
    document.write('<br>');
    document.write('Number of Units: ' + unit);
    document.write('<br>');
    document.write('Charges per unit: ' + per);
    document.write('<br>');
    document.write('<br>');
    document.write('Net Amout in due date: ' + unit * per);
    document.write('<br>');
    document.write('Late payment Surcharge: ' + late);
    document.write('<br>');
    document.write('Ammout after due date: ' + (unit * per + late));
    document.write('<br>');
}
