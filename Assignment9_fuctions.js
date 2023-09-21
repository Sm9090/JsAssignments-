// functions

function sum(a,b){
    console.log(sum)

}
var sum = 4 +6


// calculator by arguments
function Calculate(num1 ,num2 ,op) {
    switch(op){
        case '-' : alert(num1 - num2); break
        case '+' : alert(num1 + num2); break
        case '*' : alert(num1 * num2); break
        case '/' : alert(num1 / num2); break
        default: alert('Invalid Operator!') 
    }
    
}

Calculate(8 ,9 ,'*')

// calculator numbers by argument  operator by user input
function calculate(num1 ,num2 ) {
    var Operator=prompt('Enter Operator!')
    switch(Operator){
        case '-' : alert(num1 - num2); break
        case '+' : alert(num1 + num2); break
        case '*' : alert(num1 * num2); break
        case '/' : alert(num1 / num2); break
        default: alert('Invalid Operator!') 
    }
    
}

function Fractions(n) {
    var answer = 1
    if(n==0 || n==1){
        return answer
    }
    else if (n > 1){
        for(i=n; i >= 1; i--){
            answer *= i
        }
        return answer ;
    }
        else{
        return'number has to be positve'
        } 
}
console.log( 'Fraction of '+ n + ' is ' + answer)



function createLoop(firstNum ,secondNum) {
    
    
    for(i=firstNum; i <= secondNum; i++)
        console.log(i)
    
}
var firstNum = prompt('Enter first number')
    var secondNum = prompt('Enter second number')


function calculateHypotenuse() { 
    var base = prompt('Enter Base Value')
    var perpendicular = prompt('Enter Perpendicular Value')
    function calculateSquare(value) {
        return value * value
        
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return hypotenuse
    
    
}

function adder(base /*, num1, …, numN */) {
    base = Number(base);
    for (let i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
  }



var name = ['Pastry','Cookie','biscuits','eggs']

function length(arg) {
    
    for (let i = 0; i < arg.length; i++){
        console.log(i)
    }
    return arg
}

function largeNum(arg) {
    var largeNum = arg[0] 
    for(i=0; i < arg.length; i++){
        if(arg[i] > largeNum ){
            largeNum = arg[i] 
            
        }
    }
    return largeNum + ' is greater' 
}


function sum(){
    Plus = 0
    for (let i = 0; i < num.length; i++) {
        debugger
        Plus += num[i]
    }
    return Plus
}

function type(inner) {
    return typeof inner
    
}

function Power() {
    var number = prompt('Enter A number')
    var power = prompt('Enter power of number')
        var Ca = number * number
        var answer = Ca * number
        if(power == 2) {
            return Ca
        }
        else if(power == 3){
            return answer
        }
    else if(power == 4) {
       return  answer * number
        
    }
}

// reversee function 
function reversee(arg1) {
    var name = ''
    
    for (let i = arg1.length - 1 ; i >= 0 ;i--){
        
    name += arg1[i]    
    } 
    return name
}

reversee('Sameer')


function Reverse(arg){
    
    var rev1 = ''
    for (i = arg.length -1 ;i >= 0 ; i-- ){
        debugger
        rev1 +=  arg
    var convert = rev1.split('')    
        
    }
    return convert
    
}

// find vowel in thwe given name 

function countVowel(text) {
    var find = 0
    for(i=0 ; i < text.length ; i++){
        if(text[i] === 'a' || text[i] === 'e' ||text[i] === 'i' || text[i] === 'o'  || text[i] === 'u'){
            find++
            
        }
        
    }
    return find
}
console.log(countVowel('Sameer'))


//Palindrome

function isPalindrome(text){
    
    if(text === reversee(text)){
        console.log('Yes It is Palindrome')
    }
    else{
        console.log('Yes it is not palindrome')
    }
}