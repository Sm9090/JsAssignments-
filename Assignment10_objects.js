// Q1: Write a program to create student Object and use properties that are as given

var studentData = {
    name: 'Sameer',
    age: 21,
    rollNo: 128997
}

studentData = JSON.stringify(studentData, '', 1) //json method converts anything in to string(this method have name , replace ,space) 

alert(studentData)


    // Q2: Write a program to check if student is eligible for Module A class, following fields use in Student Object

    // using ternanry Operators 


    (studentData.age < 20 ? 'Yes You are eligible for Class A Module ' : 'You are not eligble for Class A module')


// Q3: Write a program to create two student Mark sheet, and check the conditions as given in question


var Student_One = {
    Student_Name: 'Zia Khan',
    Student_ID: J30052425300,
    Subject_HTML: 80,
    Student_CSS: 90,
    Student_JAVASCRIPT: 90,
    Student_BOOTSTRAP: 70,
    Total_Marks: 400
}

var Student_Two = {
    Student_Name: 'Zia Khan',
    Student_ID: J30052425300,
    Subject_HTML: 60,
    Student_CSS: 70,
    Student_JAVASCRIPT: 65,
    Student_BOOTSTRAP: 85,
    Total_Marks: 400
}



// Show the percentage for both and check the condition, if Student_One’s percentage > Student_Two then eligible for scholarship 

// first i create function for take Percentage of both students 
function calculate(arg1, arg2, arg3, arg4, Totalmarks) {
    var sum = arg1 + arg2 + arg3 + arg4
    var Percentage = sum / Totalmarks * 100
    return Percentage + '%'
}


var percentageOfStudent1 = calculate(Student_One.Student_BOOTSTRAP, Student_One.Student_CSS, Student_One.Student_JAVASCRIPT, Student_One.Subject_HTML, 400)

var percentageOfStudent2 = calculate(Student_Two.Student_BOOTSTRAP, Student_Two.Student_CSS, Student_Two.Student_JAVASCRIPT, Student_Two.Subject_HTML, 400)

if (percentageOfStudent2 === percentageOfStudent1) {
    console.log(percentageOfStudent2)
    console.log(Student_Two.Student_Name + ' You are  eligble for schlorship')
}
else {
    console.log(percentageOfStudent2)
    console.log(Student_Two.Student_Name + ' You are not eligble for schlorship')
}

// Q4. Copy this array to your code
// var arr = [
// {name: 'Asher', age: 22},
// {name: 'Zubair', age: 20},
// {name: 'Kashif', age: 23},
// {name: 'Wasif', age: 17},
// {name: 'Hanzala', age: 28}
// ]
// i) Replace the 3rd index with {name: 'Siddiq', age: 23}
// ii) Push {name: 'Umair', age: '23'} from the end
// iii) Remove the first element
// iv) Add a field createdAt: new Date() with each through loop.


var arr = [ 
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]
arr.splice(3, 1, { name: 'Siddiq', age: 23 }) // condition 1 answer
arr.push({ name: 'Umair', age: 23 }) // condition 2 answer
arr.shift() //conditon 3 answer
console.log(arr)
var i = 0
do {
    var a = new Date()
    var conv = JSON.stringify(arr[i],null,0)
    i++
console.log(conv + ' ' + a)    
} while (i < arr.length)


// Q5. Using above array
// I want an array consisting only those names whose ages are between 18 to 28 and their names consist of letter 'f'. Then convert the output array to string. For e.g. ['Asher', 'Zubair'] to 'Asher', 'Zubair'.


var arr = [ 
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]

var Age = [] 

for(i= 0 ; i < arr.length; i++ ){
    debugger
    if(arr[i].age >= 18 && arr[i].age <= 28 ){ 
        if(arr[i].name.indexOf('f') != -1){
       Age = arr[i]
            console.log(Age.name.toString())
            
    }
}
}
//  _____________________________________________

/*Q6.These are two arrays
var students = [
{
_id: 'std1'
name: 'Bill Gates',
age: 30
},
{
_id: 'std2'
name: 'Steve Jobs',
age: 30
},
{
_id: 'std3'
name: 'Suzanne Collins',
age: 30
}];

var courses = [
{
name: 'Maths',
std_id: ['std3', 'std1']
},
{
name: 'Computer Science',
std_id: ['std3', 'std2']
},
{
name: 'Commerce',
std_id: ['std1']
},
]
Expected Output Get an array consisting of student name and student Id with courses (array) */


var students = [
    {
    _id: 'std1',
    name: 'Bill Gates',
    age: 30
    },
    {
    _id: 'std2',
    name: 'Steve Jobs',
    age: 30
    },
    {
    _id: 'std3',
    name: 'Suzanne Collins',
    age: 30
    }];


var courses = [
    {
    name: 'Maths',
    std_id: ['std3', 'std1']
    },
    {
    name: 'Computer Science',
    std_id: ['std3', 'std2']
    },
    {
    name: 'Commerce',
    std_id: ['std1']
    },
    ]

for(var i = 0 ; i < students.length; i++){
    var newObject = students[i].Courses = []
    for(var j = 0 ; j < courses.length; j++){
        if(students[i]._id.includes(courses[j].std_id)){
            newObject.push(courses[j].name)
        }
    }
}


var children = [
    {name : 'Pappu' , Parents : ['p1','p2']},
    {name : 'Aslam' , Parents : ['p3' , 'p4']},
    {name : 'Nattu' , Parents : ['p1' , 'p5']},
    
]

var Parents =[
    {_id : 'p1' , name : 'Chotu'},
    {_id : 'p2' , name : 'Choti'},
    {_id : 'p3' , name : 'Bholu'},
    {_id : 'p4' , name : 'Bholi'},
    {_id : 'p5' , name : 'Kokan Bhen'},

]


for(var i = 0 ; i < children.length ; i++){
    children[i].parentName = []
    for(var j = 0 ; j < Parents.length ; j++ ){
        if(children[i].Parents.includes(Parents[j]._id)){
            children[i].parentName.push(Parents[j].name)
        }
    }
}
delete children.Parents
console.log(children)


   var universities = [
{
_id: 'uni1',
name: 'Iqra University'
},
{
_id: 'uni2',
name: 'SSUET'
},
{
_id: 'uni3',
name: 'Bahria'
}];

var courses = [
{
name: 'Maths',
uni_id: ['uni1', 'uni3']
},
{
name: 'Computer Science',
uni_id: ['uni2', 'uni1']
},
{
name: 'Commerce',
uni_id: ['uni3']
},
]


for(var i = 0 ; i < courses.length ; i++){
    var newArray = courses[i]
    newArray.uniNames = []
    for(var j = 0 ; j < universities.length; j++){
        if(newArray.uni_id.includes(universities[j]._id)){
            newArray.uniNames.push(universities[j].name)
            
            
        }
    }
}
delete courses.uni_id
console.log(courses )