let input = document.querySelector("#input")
let display = document.querySelector("#display")
let buttons = document.querySelector(".buttons")
let expression = ""

buttons.addEventListener("click",function(dets){
    if(dets.target.tagName !== "BUTTON") return;
    if(dets.target.innerText == "="){
        try{

            let results= eval(expression)
            expression = results.toString()
            input.value = expression
        }
        catch{
            input.value = "Error"
            expression = ""
        }
    }
    else if(dets.target.innerText == "C"){
        input.value = ""
        expression = ""
    }
    else if(dets.target.innerText == "X"){
        expression += "*"
        input.value = expression
    }
    else{
        expression += dets.target.innerText
        input.value = expression
    }
})