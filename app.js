//password generator
const button = document.querySelector("button")
let xhr = new XMLHttpRequest()
button.onclick = (e) => {
    e.preventDefault()
    //get parameters
    let length = document.getElementById("length").value
    let digits = document.getElementById("digits")
    let capital = document.getElementById("capital")
    let ordinary = document.getElementById("ordinary")
    let uniqueness = document.getElementById("uniqueness")

    try{
        if(length == "") throw "Write password length"
        if(digits.checked == false &&
            capital.checked == false &&
            uniqueness.checked == false &&
            ordinary.checked == false) throw "Choose parameters"
    }
    catch(err) {
        alert(err)
    }

    if(digits.checked) 
        digits = "on"
    else
        digits = "off"
    
    if(capital.checked) 
        capital = "on"
    else
        capital = "off"

    if(uniqueness.checked)
        uniqueness = "on"
    else
        uniqueness = "off"

    if(ordinary.checked)
        ordinary = "on"
    else
        ordinary = "off"


    
    let num_req = `https://www.random.org/strings/?num=1&len=${length}&digits=${digits}&upperalpha=${capital}&loweralpha=${ordinary}&unique=${uniqueness}&format=plain&rnd=new`
    function RandomOrg() {
        xhr.open('POST', num_req)
        xhr.onerror = function(e){alert("error")}
        xhr.onload = function(){
            document.getElementById("output").innerHTML = this.responseText
        }
        xhr.send()
    }
    RandomOrg()
}


//chooseWinner
const button1 = document.querySelector("#button")
let text, players, winners, num_req1, textnode

function createElem(text) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`Player ${text} won`));
    ul.appendChild(li);
}

button1.onclick = () => {
    players = document.querySelector("#Players").value
    num_req1 = `https://www.random.org/integers/?num=1&min=1&max=${players}&col=1&base=10&format=plain&rnd=new`
    try {
        if(players == "") throw "Is empty"
        getRandomNumber()
        button1.classList.add("block")
    }
    catch(err) {
        alert(err)
    }
}

function getRandomNumber() {
    xhr.open('POST', num_req1)
    xhr.onerror = function(e){alert("error")}
    xhr.onload = function(){
        createElem(this.responseText)
    }
    xhr.send()
}
