//var student = {
   // fName : 'Longson',
   // lName : 'Dogo son',
  //  age : 27,
   // address : 'Federal Lowcost',
   // height : 17,
   // wife : 'zombie',
   // fullName : function(){
  //      return this.fName + ' ' + this.lName;
 //   }
//}

//console.log(`the boys name is ${student.fName} and he is ${student.age} years old`); //string interpolation
//console.log(student.fullName());  // Printing Student Fullname

//console.log(student); //Printing out everthing

//console.log(Object.values(student));

//console.log(Object.keys(student));  //Printing out the keys in Array form


// var student = {

//     name : {
//         surname: 'Black Kamaroo',
//         fName : 'Ahmad',
//     },

//     address :{
//         no: 90,
//         street : 'Longson',
//     },

//     age : 22,

    
// };

// student.name.fName = 'Liman';

// //console.log(student.name.surname, student.name.fName); // Printing out Name and Surname
// //student.address.street = "Rantiya";  // Overidding the address.
// console.log(student.name.fName); 


var students = [
    {
        id : 1,
        name : 'ZABSON',
        age : 24,
    },
    {
        id : 2,
        name : 'LONGSON',
        age : 17,
    },
];

console.log(students.filter((student) => student.id == 1));
//console.log(students);

// for(let student of students){
//     console.log(student.name)
// };