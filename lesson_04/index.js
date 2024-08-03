var my_name = "John";
var my_age = 25;

my_age = my_age + "";

console.log(my_age === "25");
console.log(my_age === 25);

console.log("Phu", "Nguyen");

// doi tuong

// dog(con cho), cat(con meo)
// name, age, color, weight, height

var student = {
  id: 1,
  full_name: "John",
  age: 25,
  className: "A1",

  // method: phương thức, property: thuộc tính
  sayHello: function () {
    console.log("John hello ai do");
  },
};

var student_2 = {
  id: 2,
  full_name: "David",
  age: 25,
  className: "A1",

  // method: phương thức, property: thuộc tính
  sayHello: function () {
    console.log("David hello ai do");
  },
};

var student_3 = {
  id: 3,
  full_name: "Rio",
  age: 25,
  className: "A2",

  // method: phương thức, property: thuộc tính
  sayHello: function () {
    console.log("David hello ai do");
  },
};

// danh sach: mảng(array)

var students = [student, student_2, student_3];

// tìm ra học sinh có id = 2

var student_found = students.find((item) => item.id === 3);
console.log(student_found);

// tim ra tat ca hoc sinh co className = A1
var students_found = students.filter((item) => item.className === "A2");
console.log(students_found);
