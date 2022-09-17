// Dom Selected

const loan =document.querySelector("select")
const maturity =document.querySelector("#Maturity")
const price = document.querySelector("#Price")
const calc = document.getElementById("calc")
const clean = document.getElementById("clean")
const container1 = document.querySelector(".container1")
const pri =document.querySelector("#pri")
const mat =document.querySelector("#mat")
const sum =document.querySelector("#sum")
const interest = document.querySelector("#int")
const amo = document.querySelector("#amo")
const lo =document.querySelector("#lo")




calc.addEventListener("click", function() {

    if(!maturity.value || !price.value ) {
        alert("Please enter maturity and amount information")
    }else {
        container1.classList.remove("hidden")
        
        pri.textContent= price.value;
        mat.textContent = maturity.value
        let a = interest.textContent * Math.pow((1 + interest.textContent), mat.textContent)
        let b = Math.pow(1 + interest.textContent, mat.textContent) -1
        let c = (pri.textContent * (a / b)).toFixed(2)
        sum.textContent = c
        amo.textContent = (c / mat.textContent).toFixed(2);

       
    
        
        
        
    }
})

clean.addEventListener("click", function () {
    maturity.value = ""
    price.value = ""
    container1.classList.add("hidden")
})