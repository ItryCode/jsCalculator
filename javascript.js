//variable declaration go here
let num1=""
let num2=""
let op=''
let result='';
let display=document.querySelector('.display');
const buttons=document.querySelectorAll('button')


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        if (buttons[i].classList.contains('operand')){
            inputOperand(buttons[i].value)
            
        }
        else if(buttons[i].classList.contains('operator')){
            inputOperator(buttons[i].value)
        }
        else if(buttons[i].classList.contains('btn-dec')){
            inputDecimal(buttons[i].value)
        }
        else if(buttons[i].classList.contains('equal')){
            if(result!=''){
                equalOperator(a=result,b=num2,operators=op)
            }
            else{
                equalOperator(a=num1,b=num2,operators=op)
            }
        }
        else if(buttons[i].classList.contains('clear')){
            clearDisplay()
        }
    })
}







function inputOperand(operand){

if(operand=='.'){
    if(display.textContent==num1 && num1.includes(operand)){
        return
        
    }
    if(display.textContent==num2 && num2.includes(operand)){
        return
    }
   
}
if(display.textContent=='' && num1===''){
    num1+=operand;
     display.innerHTML=operand;
}
else if(display.textContent==num1){
    num1+=operand;
    display.innerHTML+=operand;
}
else if(num1!="" && op!='' && result!=''){
    console.log('result')
    num2='';
    num2+=operand;
    display.innerHTML+=operand;
}
else if(display.textContent=='+' || display.textContent=='-' || display.textContent=='*' || display.textContent=='/')
{
    display.innerHTML='';
    display.innerHTML+=operand;
    num2=display.innerHTML;
}
else{
        num2+=operand;
        display.innerHTML+=operand;
        
}
}


function inputOperator(operator){
    if(op===''){
        if(display.textContent==num1 || display.textContent==num2){
            display.textContent=''

            op=operator
            display.textContent=operator
        }
    }
    else{
        display.textContent=''
        op=operator
        display.textContent=operator

    }    

}

function inputDecimal(decimal){

    display.textContent+=`${decimal}`;
}

function clearDisplay(){
    display.textContent="";
    num1='';
    num2='';
    op='';
    result='';
}

function equalOperator(a,b,operators){
    calculate(a,b,operators)
}
// let sum=10
// let total=0
// function buttonsAdd(){
//     for(let i=0;i<=9;i++){
//         buttons[i]=document.querySelector('.btn'+i)
//         buttons[i].addEventListener('click',()=>{
//             display.innerHTML+=`${buttons[i].value}`;})
//             num1+=`${buttons[i].value}`
//         }
    
// }

// buttonsAdd();



// btnAdd.addEventListener('onclick',()=>{
//         num2=display.textContent;
//         calculate(num1,num2,)
//     }
// );
// btnSub.addEventListener('onclick',()=> {return ope='-'});
// btnMul.addEventListener('onclick',()=>{return ope='*'});
// btnDiv.addEventListener('onclick',()=>{return ope='/'});









//calculation functions go here

function add(a,b){
    sum=Number(a)+Number(b);
    display.innerHTML=`${sum}`
    result=sum
    console.log('hello')
}

function subtract(a,b){
    sub=Number(a)-Number(b);
    result=sub;
    display.innerHTML=`${sub}`
}

function multiplty(a,b){
    mul=Number(a)*Number(b);
    result=mul
    display.innerHTML=`${mul}`
}

function divide(a,b){
    div=Number(a)/Number(b);
    result=
    display.innerHTML=`${div}`
}

function calculate(a,b,op){
    if(op=="+"){
        return add(a,b)
    }
    else if(op=="-"){
        return subtract(a,b)
    }
    else if(op=="*"){
        return multiplty(a,b)
    }
    else if(op=="/"){
        return divide(a,b)
    }
    else{
        
    }
}   



