// function displayData(){
//     alert(`Welcome to Javascript :`);
// }


// function displayData()
// {
//     let username = document.getElementById("name").value;
//         let email = document.getElementById("email").value;
//         let password = document.getElementById("password").value;

//         alert(`Welcome ${username} your email is ${email} and password is : ${password}`);

// }

//parameterized function
// function displayData(name, age, salary){
// alert(`Welcome ${name} your age is ${age} years with salary ${salary}`);
// }

// let names =prompt("Enter you name : ");
// let age =prompt("Enter your age : ");
// let salry =prompt("Enter your salary : ");

// displayData(names,age, salary);

// const data = function()
// {
//     let emp_id = document.getElementById("name").value;
//     let emp_name = document.getElementById("email").value;
//     let department = document.getElementById("password").value;
// document.writeln(`EmpId : ${emp_id} Emp_name : ${emp_name} and Department is ${department}`);

// }


//     let emp_id = document.getElementById("name").value;
//     let emp_name = document.getElementById("email").value;
//     let department = document.getElementById("password").value;
//  data(emp_id,emp_name,department);

//arrow function 
const data = (x,y) => x +y;
console.log(data(25,28));

let arr =[20,30,40,50,60,12,15,28,98];

//console.log(typeof(arr));
//arr.push("jacascript");

//console.log(arr);

arr.unshift("React JS");
console.log(arr);

arr.shift();
console.log(arr);


arr.pop();
console.log(arr);

let arr1 = [20,30,40,50,60,12,15,28,98];

const result = arr1.map(n => n ** 2);
console.log(result);

let arr2 = [20,30,40,50,60,12,15,28,98];
const result2 =arr2.map(n => n % 2 == 0);
console.log(result2)