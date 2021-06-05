var students = [
    {
        id : 1,
        firstname : 'Auwal',
        surname : 'Yobe',
        age : 30,
        address : 'Fillin sukuwa',
},

{
    id : 2,
    firstname : 'Abdullahi',
    surname : 'chindo',
    age : 20,
    address : 'Federal Lowcost',
},

{
            id : 3,
            firstname : 'Sadiq',
            surname : 'Abdulaziz',
            age : 24,
            address : 'Duala',
},
{
            id : 4,
            firstname : 'Ahmad',
            surname : 'Liman',
            age : 17,
            address : 'Nepa',
},

{
        id : 5,
        firstname : 'Abdulhadi',
        surname : 'Usman',
        age : 15,
        address : 'Fillin Sukuwa',
},
{
            id : 6,
            firstname : 'Kunle',
            surname : 'Arowosegbe',
            age : 23,
            address : 'Tudun Wada',
},

{
        id : 7,
        firstname : 'David',
        surname : 'Mbaya',
        age : 24,
        address : 'Rayfield',
},

{
        id : 8,
        firstname : 'Favour',
        surname : 'Didan',
        age : 18,
        address : 'Ring Road',
},

{
    id : 9,
    firstname : 'Femi',
    surname : 'Joseph',
    age : 25,
    address : 'West of Mines',
},

{
    id : 10,
    firstname : 'Weng',
    surname : 'Ibrahim',
    age : 24,
    address : 'Angwan Rukuba',
},

{
    id : 11,
    firstname : 'Chioma',
    surname : 'Ekwe',
    age : 19,
    address : 'Rantiya',
},

{
    id : 12,
    firstname : 'Manasseh',
    surname : 'Andy',
    age : 29,
    address : 'Minna',
},

];

//  console.log(students.filter((student) => student.id == 1));

                    //Returns Only The First Name...........

//   for(let student of students){
//        console.log(student.firstname)};

   
                       //Filter The Oldest......

        //  console.log(students.filter((student) => student.age == 30)); 

                           
        
                        //Average age 

         const AverageAge = (arr = []) => { 
                const { sum, count } = arr.reduce((acc, val) => {    
                                    
                    let { sum, count } = acc;
                    sum += val.age; count++;   
                                  
                         return { sum, count };
                     },
                         {sum: 0, count: 0});  
                                
         return (sum / (count || 1)); };
                            
         console.log(AverageAge(students));

    