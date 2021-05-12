function task1() {
    let student = [];
}

function task2() {
    let student = Array();
}

function task3() {
    let strArray = ["a","b","c"];
}

function task4() {
    let numArray = [1, 2, 3];
}

function task5() {
    let bolArray = [true, false];
}

function task6() {
    let mixArray = ["a",1,false];
}

function task7() {
    let qual = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
    document.write("Qualifications: <br><br>");
    qual.forEach( element => document.write(element+"<br>"));
}

function task8() {
    let name = ['Micheal', 'John', 'Tony'];
    let score = [320, 230, 480];
    for (let i = 0; i < name.length ; i++){
        document.write("Score of "+ name[i] + " is "+ score[i]+". Percentage: " + (score[i]/500)*100 + "%<br>");
    }
}

function task10() {
    let score = [];
    for (let i = 0; i < 4; i++ ){
        let num = +prompt("Enter Score");
        score.push(num);
    }
    alert("Score of Students : "+ score+ "\nOrdered Scores of Students : " + score.sort(function func(a, b) {
        return a-b;
    }));
}

function task11() {
    let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    let selectedCities = cities.slice(2,4);
    alert(selectedCities);    
}

function task12() {
    let arr = ["This", "is", "my", "cat"];
    let str = arr.join(" ");
    alert(str);
}

function task15() {
    let qual = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
    document.write("Manufacturers: <br><br>");
    qual.forEach( element => document.write(element+"<br>"));
}