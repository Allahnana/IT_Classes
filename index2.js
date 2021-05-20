//console.log(5 == 5)
//console.log(5 == 5)
//console.log(5 === 6)
//console.log(5 > 5)
//console.log( 5 <= 5)

     //AND.
// x and y | result
//true and true | true
//true and false | false
//false and false | false
//false and true | false

var age = 15
var gender = "m"

if (age >= 18 && gender == "m") {
    console.log ("You can play PS5 cos you are "  +  age +  " years old")// double quotation
    //console.log (`You can join the game cos you are ${age} years old`) // backtick
}else if(age < 18 && age > 10){
 console.log("you can play PS4 cos you are " + age + "years old")
}else {
    console.log("You can go and play at home ")
}