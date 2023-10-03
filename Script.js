var input = ''

function getNum(num){
    input += num
    var inputElement = document.getElementById('Input')
    inputElement.value = input
}

function calculate(){
    var inputElement = document.getElementById('Input')
    var Value = inputElement.value
    // console.log(Value)
    var result = eval(Value)
    inputElement.value = result
    // input = result5
}

function cls(){
    var inputElement = document.getElementById('Input')
    inputElement.value = ''

}

function del(){
    var inputElement = document.getElementById('Input')
    inputElement.value = inputElement.value.slice(0, -1)

}
