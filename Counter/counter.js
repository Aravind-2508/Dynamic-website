let counterElement = document.getElementById("counterValue");
function onIncrement(){
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter)+1;
    counterElement.textContent = updatedCounter;
    if (updatedCounter>0){
        counterElement.style.color="green";
    }
    else if (updatedCounter<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    
}
function onDecrement(){
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter)-1;
    counterElement.textContent = updatedCounter;
    if (updatedCounter>0){
        counterElement.style.color="green";
    }
    else if (updatedCounter<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    
}
function onReset(){
    let previousCounter = 0 ;
    counterElement.textContent= previousCounter;
    counterElement.style.color="black";
}