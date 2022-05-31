function createStudent(studentName, studentHeight) {
    return {
        name: studentName,
        height: studentHeight
    }
}
alert("Варіант 3.Прізвище студента, його зріст. Виведіть під таблицею  прізвище студента, який має найнижчий зріст.");
let  newStudent = [],  studentList= [];
let count = prompt("Введіть кількість прізвищ студентів, яких хочете ввести: ");

for (let i = 0; i < count; i++) {
    let str = prompt("Введіть прізвище студента та його зріст в сантиметрах через пробел: ");

    newStudent = str.split(" ");
    newStudent[1] = parseInt(newStudent[1]);
    let student = createStudent(newStudent[0],newStudent[1]);

    studentList.push(student);
}

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('body').appendChild(table);

let startRow = document.createElement('tr');
let headOne = document.createElement('th');
headOne.innerHTML = "№";
startRow.appendChild(headOne);
let headTwo = document.createElement('th');
headTwo.innerHTML = "Прізвище студента";
startRow.appendChild(headTwo);
let headThree = document.createElement('th');
headThree.innerHTML = "Зріст студента";
startRow.appendChild(headThree);

thead.appendChild(startRow);

let min = studentList[0].height;
let indexMin = 0;

for (let i = 0; i < count; i++) {
    let row = document.createElement('tr');
    let rowNumberStudent = document.createElement('td');
    rowNumberStudent.innerHTML = i + 1;
    row.appendChild(rowNumberStudent);

    let rowNameStudent = document.createElement('td');
    rowNameStudent.innerHTML = studentList[i].name;
    row.appendChild(rowNameStudent);

    let rowHeightStudent = document.createElement('td');
    rowHeightStudent.innerHTML = studentList[i].height;
    row.appendChild(rowHeightStudent);

    tbody.appendChild(row);

    if (studentList[i].height < min) {
        min = studentList[i].height;
        indexMin = i;
    }  

}

document.write(`Студент ${studentList[indexMin].name} самий маленький з ростом ${studentList[indexMin].height} СМ`);

