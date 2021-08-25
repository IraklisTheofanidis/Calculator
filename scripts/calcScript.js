function add(a,b) {
	
    if(result!=0){
        result=a+b;
        resultWithOutEqualsButton(a,b);
    }
    else{
        result=a+b;
        equals();
    }
}

function sub(a,b) {

	if(result!=0){
        result=a-b;
        resultWithOutEqualsButton(a,b);
    }
    else{
        result=a-b;
        equals();
    }  
}
function power(a) {
    
    firstNumber=Math.pow(a,2);
    result=firstNumber;
    document.getElementById("result").textContent=result;
    document.getElementById("typed").textContent ="sqr("+firstNumber+")";
}

function multiply(a,b) {
	if(result!=0){
        result=a*b;
        resultWithOutEqualsButton(a,b);
    }
    else{
        result=a*b;
        equals();
    }
}

function divide(a,b) {
	if(result!=0){
        result=a/b;
        resultWithOutEqualsButton(a,b);
    }
    else{
        result=a/b;
        equals();
    } 
}

function modulus(a,b) {
	if(result!=0){
        result=a%b;
        resultWithOutEqualsButton(a,b);
    }
    else{
        result=a%b;
        equals();
    }
}

function reset(){
    firstNumber="";
    secondNumber="";
    result=0;
    document.getElementById("result").textContent=0;
    document.getElementById("typed").textContent="";
}

function resultWithOutEqualsButton(a,b){
    document.getElementById("typed").textContent=a+operator+b;
    firstNumber=result;
    secondNumber="";  
    document.getElementById("result").textContent=result;
}

function equals(){
    document.getElementById("typed").textContent =firstNumber + operator + secondNumber;
    checkOperator();
    document.getElementById("result").textContent=result;
    firstNumber=result;
    secondNumber="";
}

function checkNumbers(){
    if(operator=="pow"){    
        power(firstNumber);
    }
    else{     
        document.getElementById("typed").textContent =firstNumber+" " + operator;       
        if(firstNumber!=0 && secondNumber!=0){
            checkOperator();
        }
    }
}

function checkOperator(){
    
    switch(operator) {
        case "+": add(firstNumber,secondNumber);
            break;
        case "-": sub(firstNumber,secondNumber);
            break;
        case "*": multiply(firstNumber,secondNumber);
            break;
        case "/": divide(firstNumber,secondNumber);
            break;
          case "%": modulus(firstNumber,secondNumber);
            break;    
        case "del":alert(operator);
            break;
        default: alert("oups");
      }
}
let firstNumber="";
let secondNumber="";
let operator="";
let result=0;
let givenOperator=false;

let buttons =document.getElementsByClassName("btn");
for (let i = 0, length = buttons.length; i < length; i++) {
    let button = buttons[i];
    button.addEventListener('click', function() { 
    text=button.id;   
    if(isNaN(text)){
       
        if(text=="="){  equals();}
        else if(text=="c"){ reset();}

        else{
            givenOperator=true;
            if(operator!=""){               
                checkNumbers();
                operator=text;
            }
            else{
               operator=text;
                checkNumbers();
            }
        }
    }
    else{
        givenOperator=false;
            if(firstNumber==0){ 
                
                    document.getElementById("result").textContent = button.textContent;
                    document.getElementById("typed").textContent = button.textContent;
                    firstNumber= parseFloat(document.getElementById("result").textContent);
                  //  document.getElementById("typed").textContent =firstNumber+" " + operator;
                
            }
            else if(operator==""){
                document.getElementById("result").textContent =  firstNumber + button.textContent;
                firstNumber=parseFloat(document.getElementById("result").textContent);
                
            }
            else if(!givenOperator){
                document.getElementById("result").textContent =secondNumber+ button.textContent;
                secondNumber= parseFloat(document.getElementById("result").textContent);
            }
        
    }
    });
}