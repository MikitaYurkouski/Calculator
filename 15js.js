var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");



var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var input3 = document.getElementById("number3");

function getNumber1(){
    return Number(input1.value);
}
function getNumber2(){
    return Number(input2.value);
}




function makeOperation (operationCode){
    if(operationCode === "+"){
        var result = getNumber1() + getNumber2();
    } else if(operationCode === "-") {
        var result = getNumber1() - getNumber2();
    } else if(operationCode === "*") {
        var result = getNumber1() * getNumber2();
    } else if(operationCode === "/") {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert("operation is unknown");
    }
    
    window.alert(result);

}

function onButtonPlusClick() {
    //console.log ("onButtonPlussClick");


   makeOperation("+");
}
function onButtonMinusClick() {
   //console.log ("onButtonMinusClick");
   
   makeOperation("-");
}
function onButtonMultiplyClick() {
    //console.log ("onButtonMultiplyClick");                   

    makeOperation("*");                                          // var number1 = Number(input1.value);
                                                                   //  var number2 = Number(input2.value);

                                                                    //  var summ = number1 * number2;
                                                                    //window.alert(summ);
}
function onButtonDevideClick() {
    //console.log ("onButtonDevideClick");
    
    makeOperation("/");
}


buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);




// var buttonSqrt = document.getElementById("buttonSqrt");

// function getNumber3(){
//     return Number (input3.value);
// }

// // else if(operationCode === "number3"){
// //     var result = getNumber3();
// //    }

// function onButtonSqrtClick(){
//     //makeOperation(Math.sqrt());
//    var summ =Math.sqrt();
//    window.alert(summ);
// }
// buttonSqrt.addEventListener("click", onButtonSqrtClick);