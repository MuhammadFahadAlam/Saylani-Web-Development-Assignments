///  Task 1

let element_with_id_main_content = document.getElementById('main-content');

let children = element_with_id_main_content.childNodes;

let element_with_class_render = document.querySelectorAll('.render');
let show = document.getElementById('show');
element_with_class_render.forEach((element) => {
    document.write(element.innerHTML);
});

let first = document.getElementById('first-name');
first.value = 'Muhammad Fahad';

let last = document.getElementById('last-name');
last.value = 'Alam';
let email = document.getElementById('email');
email.value = 'alamfahad13665@gmail.com';

/// Task 2

let element_with_id_form_content = document.getElementById('form-content');
let type1 = element_with_id_form_content.nodeType;
document.write(
    '<br><br><br>Nodetype of element with id form content is : ' + type1
);

let element_with_id_lastName = document.getElementById('lastName');
let type2 = element_with_id_lastName.nodeType;
document.write(
    '<br><br><br>Nodetype of element with id lastName is : ' + type2
);
let child = element_with_id_lastName.childNodes;
let type3 = child[0].nodeType;
document.write(
    '<br><br><br>Nodetype of child element of id lastName is : ' + type3
);

element_with_id_lastName.childNodes[0].textContent = 'Last Name : _Alam_';
let firstChild = element_with_id_main_content.childNodes[0];
let length = element_with_id_main_content.childNodes.length;
let lastChild = element_with_id_main_content.childNodes[length - 1];
document.write(
    '<br><br><br>First Child of main-content : ' + firstChild.innerHTML
);
document.write(
    '<br><br><br>Last Child of main-content : ' + lastChild.innerHTML
);

let siblingNext = element_with_id_lastName.nextSibling;
document.write('<br><br><br>Next sibling of lastName : ' + siblingNext);
let siblingPrev = element_with_id_lastName.previousSibling;
document.write('<br><br><br>Prev sibling of lastName : ' + siblingPrev);

let element_with_id_email = document.getElementById('email');
let itsParent = element_with_id_email.parentElement;
document.write('<br><br><br>Parent of Email: ' + itsParent);
let type4 = element_with_id_email.nodeType;
document.write('<br><br><br>Nodetype of email is : ' + type4);
