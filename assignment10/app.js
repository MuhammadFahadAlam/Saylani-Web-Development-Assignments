/*

    Edit by clicking on text

    Check by clicking on radio button

    add by bottom button

*/

let today = new Date();

let dateNow = today.getDate();
let monthNow = today.getMonth();
let yearNow = today.getFullYear();
let dayNow = today.getDay();

let monthName = [
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
let dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

let date = document.getElementById('date');
let month = document.getElementById('month');
let year = document.getElementById('year');
let day = document.getElementById('day');

date.innerHTML = dateNow;
month.innerHTML = monthName[monthNow];
year.innerHTML = yearNow;
day.innerHTML = dayName[dayNow];

function addItem() {
    let todoList = document.getElementsByClassName('list');

    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');

    let todo = document.createElement('div');
    todo.setAttribute('class', 'todo');

    let para = document.createElement('p');
    para.innerHTML = 'Dummy';

    todo.appendChild(para);

    let todoBut = document.createElement('div');
    todoBut.setAttribute('class', 'todoBut');

    let button = document.createElement('button');
    button.setAttribute('type', 'button');

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-check');
    icon.setAttribute('aria-hidden', 'true');

    button.appendChild(icon);

    todoBut.appendChild(button);

    newRow.appendChild(todo);
    newRow.appendChild(todoBut);

    todoList[0].appendChild(newRow);
}

function addItemField() {
    let todoList = document.getElementsByClassName('list');

    let newRow = document.createElement('div');
    newRow.setAttribute('class', 'row');

    let todo = document.createElement('div');
    todo.setAttribute('class', 'todo');

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '28');
    input.setAttribute('class', 'field');

    todo.appendChild(input);

    let todoBut = document.createElement('div');
    todoBut.setAttribute('class', 'todoBut');

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.addEventListener('click', function (e) {
        if (icon.classList.contains('fa-plus')) {
            let para = document.createElement('p');
            para.setAttribute('class', 'paragraph');
            para.innerHTML = input.value;
            para.addEventListener('click', function parara(e) {
                let target = e.currentTarget;
                console.log(target.parentNode);

                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('maxlength', '28');
                input.setAttribute('class', 'field');
                input.value = target.innerHTML;

                let parent = target.parentNode;

                let but =
                    e.currentTarget.parentNode.parentNode.children[1].firstChild
                        .firstChild;
                console.log(but);

                target.remove();

                parent.appendChild(input);
                input.focus();

                input.addEventListener('focusout', function (e) {
                    let para = document.createElement('p');
                    para.setAttribute('class', 'paragraph');
                    para.innerHTML = input.value;
                    para.addEventListener('click', parara);

                    let target = e.currentTarget;

                    let parent = target.parentNode;
                    target.remove();
                    parent.appendChild(para);
                });
            });

            input.remove();
            todo.appendChild(para);

            icon.classList.remove('fa-plus');
        } else {
            if (icon.classList.contains('fa-check')) {
                icon.classList.remove('fa-check');
                let para =
                    e.currentTarget.parentNode.parentNode.firstChild.firstChild;
                para.style.color = 'black';
                para.style.textDecoration = 'none';
            } else {
                let para =
                    e.currentTarget.parentNode.parentNode.firstChild.firstChild;
                para.style.color = 'gray';
                para.style.textDecoration = 'line-through';
                icon.classList.add('fa-check');
            }
        }
    });

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa fa-plus');
    icon.setAttribute('aria-hidden', 'true');

    button.appendChild(icon);

    todoBut.appendChild(button);

    newRow.appendChild(todo);
    newRow.appendChild(todoBut);

    todoList[0].appendChild(newRow);

    input.focus();
}
