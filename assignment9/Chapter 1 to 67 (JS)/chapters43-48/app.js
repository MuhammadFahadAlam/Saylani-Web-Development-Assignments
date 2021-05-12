// Task 1

let link = document.querySelector('#getAlert');
link.addEventListener('click', () => {
    alert('Here is the Alert u wanted');
});

// Task 2

let images = document.querySelectorAll('#clickimg');
for (const image of images) {
    image.addEventListener('click', () => {
        alert('Thanks for clicking');
    });
}

// Task 3

let buts = document.querySelectorAll('button');
console.log(buts);
for (const but of buts) {
    but.addEventListener('click', function (e) {
        e.currentTarget.parentNode.parentNode.remove();
    });
}

// Task 4

let imag = document.querySelector('#imgHover');
imag.addEventListener('mouseover', function () {
    this.src = 'images/img2.PNG';
});

imag.addEventListener('mouseout', function () {
    this.src = 'images/img1.PNG';
});

// Task 5

function inc() {
    document.querySelector('#count').innerHTML = +(document.querySelector('#count').innerHTML) + 1;
};

function dec() {
    document.querySelector('#count').innerHTML = +(document.querySelector('#count').innerHTML) - 1;
};
