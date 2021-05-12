function dataOut() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');

    let place = document.getElementById('place');

    place.innerHTML =
        'Name: ' +
        name.value +
        '<br>Email: ' +
        email.value +
        '<br>Password: ' +
        pass.value;
}

function moreCont() {
    let content = document.querySelector('.more');
    let but = document.querySelector('.moreBut');

    content.innerHTML =
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nam, aliquid animi iure dolorem consectetur totam, perspiciatis eius iusto doloremque soluta sequi natus molestias dicta quas quo explicabo labore voluptatem.';
    but.style.display = 'none';
}

function showForm() {
    let form = document.getElementById('RowForm');
    form.style.display = 'flex';
}

function addRow() {
    let name = document.getElementById('inputName');
    let clas = document.getElementById('inputClass');
    let per = document.getElementById('inputPerformance');

    let form = document.getElementById('RowForm');

    let table = document.getElementById('myTable');
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = name.value;
    cell2.innerHTML = clas.value;
    cell3.innerHTML = per.value;
    cell4.innerHTML =
        '<td>' +
        "<button type='button' id='edit'>Edit</button>" +
        "<button type='button' id='delete'>Delete</button>" +
        '</td>';

    form.style.display = 'none';
}

let deleteButs = document.querySelectorAll('#delete');

for (const but of deleteButs) {
    but.addEventListener('click', function (e) {
        e.currentTarget.parentNode.parentNode.remove();
    });
}

let editButs = document.querySelectorAll('#edit');

for (const ebut of editButs) {
    ebut.addEventListener('click', function (e) {
        let thatRow = e.currentTarget.parentNode.parentNode;
        let cell = thatRow.childNodes;

        let nameEdit = cell[1].innerHTML;
        let clasEdit = cell[3].innerHTML;
        let perEdit = cell[5].innerHTML;

        //console.log(cell[7].innerHTML);

        thatRow.remove();
        let form = document.getElementById('RowForm');

        let name = document.getElementById('inputName');
        let clas = document.getElementById('inputClass');
        let per = document.getElementById('inputPerformance');

        name.value = nameEdit;
        clas.value = clasEdit;
        per.value = perEdit;

        form.style.display = 'flex';

        let button = form.childNodes[13];
        button.addEventListener('click', function () {
            cell[1].innerHTML = name.value;
            cell[3].innerHTML = clas.value;
            cell[5].innerHTML = per.value;
            cell[7].innerHTML =
                "<button type='button' id='edit'>Edit</button>" +
                "<button type='button' id='delete'>Delete</button>";
        });
    });
}
