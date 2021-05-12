let imagePath = [
    './images/others/1.jpg',
    './images/others/2.jpg',
    './images/others/3.jpg',
    './images/others/4.png',
    './images/others/5.jpg',
    './images/others/6.jpg',
    './images/others/7.png',
    './images/others/8.jpg',
    './images/others/9.jpg',
    './images/others/10.jpg',
    './images/others/11.jpg',
    './images/others/12.jpg',
    './images/others/13.jpg',
    './images/others/14.png',
    './images/others/15.jpg',
];

let main = document.getElementById('task1');

imagePath.forEach((image) => {
    let img = new Image();
    img.src = image;
    img.classList.add('format');
    img.addEventListener('click', function () {
        let modal = document.getElementById('modal');
        modal.classList.add('modal-open');
        modal.classList.remove('modal-close');
        modal.style.display = 'block';
        let imgTag = modal.childNodes[2];
        imgTag.src = image;
    });
    main.appendChild(img);
});

function onClosedImagModal() {
    let modal = document.getElementById('modal');
    modal.classList.add('modal-close');
    modal.classList.remove('modal-open');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 550);
}

function zoomIn() {
    let txt = document.getElementById('content');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = currentSize + 10 + 'px';
}

function zoomOut() {
    let txt = document.getElementById('content');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = currentSize - 10 + 'px';
}
