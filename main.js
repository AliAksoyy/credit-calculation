// Dom Selected

const loan =document.querySelectorAll("option")
const maturity =document.querySelector("#Maturity")
const price = document.querySelector("#Price")
const calc = document.getElementById("calc")
const clean = document.getElementById("clean")
const container1 = document.querySelector(".container1")
const pri =document.querySelector("#pri")
const mat =document.querySelector("#mat")
const sum =document.querySelector("#sum")
const interest = document.querySelector("#int")



calc.addEventListener("click", function() {
    if(!maturity.value || !price.value) {
        alert("Please enter maturity and amount information")
    }else {
        container1.classList.remove("hidden")
        pri.textContent= price.value;
        mat.textContent = maturity.value
         
        
    }
})