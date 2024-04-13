"use strict";

let first_digit="", second_digit="", operation="", counter = 0;

function click_digit(digit){
    if (operation==""){
        first_digit+=digit
        document.getElementById('display').textContent = first_digit;
    }
    else{
        second_digit+=digit
        document.getElementById('display').textContent = second_digit;
    }
}

function click_operation(value){
    if(value=="C"){
        first_digit=second_digit=operation=""
        document.getElementById('display').textContent = "0"
    }
    else if(value=='='){
        first_digit = result(first_digit, second_digit, operation)
        second_digit=operation=""
        counter=0
    }
    else if(value=='<-'){
        if (operation==""){
            first_digit = first_digit.slice(0, -1)
            first_digit.length==0 ? document.getElementById('display').textContent = 0:document.getElementById('display').textContent =first_digit;
        }
        else{
            second_digit = second_digit.slice(0, -1)
            second_digit.length==0 ? document.getElementById('display').textContent = 0:document.getElementById('display').textContent =second_digit;
        }
    }
    else {
        if(first_digit == "" && value=="-") {   
        first_digit="-"
        return
        }
        if((operation == "*" || operation == "/" || operation == "%")&& value=="-") {   
            second_digit="-"
            return
            }

        counter++
        if (counter>1){
            first_digit = result(first_digit,second_digit, operation)
            second_digit=""
        }
        if(value!=operation){
            operation=value
        }
    }
}

function result(first_digit, second_digit, operation){
    let result;
    if (operation == '+') {
        result = Number(first_digit) + Number(second_digit);
    } 
    else if (operation == '-') {
        result = Number(first_digit) - Number(second_digit);
    } 
    else if (operation == '*') {
        result = Number(first_digit) * Number(second_digit);
    } 
    else if (operation == '/') {
        if (second_digit == "0" || second_digit == "") {
            document.getElementById('display').textContent = "Error";
            return { first_digit: '', second_digit: '', operation: '' };
        } 
        else {
            result = Number(first_digit) / Number(second_digit);
        }
    }
    else if (operation == '%') {
        if (second_digit == "0") {
            document.getElementById('display').textContent = "Error";
            return 0;
        } 
        else {
            result = Number(first_digit) % Number(second_digit);
        }
    }
    document.getElementById('display').textContent = result;
    return result;
}
