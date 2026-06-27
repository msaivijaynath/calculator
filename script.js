let input = document.querySelector("#input")
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
        if(expression.length >= 15) return;

        expression += "*"
        input.value = expression
    }
    else{
        if(expression.length >= 15) return;
        expression += dets.target.innerText
        input.value = expression
    }
})