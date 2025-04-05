const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    
    if(display.value === "1+2"){
        return display.value = "go away"
    } else if (display.value === "2x3") {
         return display.value = "U r annoying"
    } else if (display.value === "10+1") {
        return display.value = "Onety-One"
   }
    else {
    try {
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "R u dumb?"
    }}
}

