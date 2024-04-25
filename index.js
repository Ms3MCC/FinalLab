
var  noOfFuns= document.querySelectorAll(".fun").length;

for(var i=0;i<noOfFuns;i++){
    console.log(i);
    document.querySelectorAll(".fun")[i].addEventListener("click",handleClick);
}

function handleClick(){

    var buttonInnerHTML =this.innerHTML;
    var a =parseInt(prompt("Enter First Number:"));
    var b= parseInt(prompt("Enter Second Number:"));


    switch(buttonInnerHTML){
        case "Sum":
            alert("Sum of Two Numbers is "+sum(a,b));
            break;

        case "Multiply":
            alert("Product of Two Numbers is "+mul(a,b));
            break;

        case "Subtract":
            alert("Differnce of Two Numbers is "+sub(a,b));
            break;

        case "Divide":
            alert("Division of Two Numbers is "+div(a,b));
            break;

    }

}

function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function sub(a,b){
    return a-b;
}
