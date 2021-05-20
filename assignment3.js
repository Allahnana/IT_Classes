/*var age = 18;



if (age >= 18){
    console.log("You can be admitted into the University.")
} else  {
    age < 18
    console.log("You are still young to be admitted.")
}*/


var age_1 = 34;
var age_2 = 13;

if (age_1 == age_2 && age_1 && age_2 >= 18  ){
    console.log(" The both of you can be admitted into the University")
}else if (age_1 < 18 && age_2 < 18 ){
    console.log("You can be admitted into the University if you are above 18 years")
}else if (age_1 == age_2 && age_1 && age_2 < 18  ){
    console.log(" The both of you are too young to be admitted into the University")
}else if (age_1 >= 18 && age_2 < 18){
    console.log("age_1, you can be admitted into the University")
}else if (age_2 >= 18 && age_1 < 18){
    console.log("age_2, you can be admitted into the University")
}
