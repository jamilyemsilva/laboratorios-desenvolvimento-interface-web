const btnCounter =
    document.querySelector("#incrementBtn");

const totalRotule = 
    document.querySelector("#total");

const btnReset =
    document.querySelector("#reset");

let counter = 0;

function addMoreOneTheCounter(){
    counter++;
    totalRotule.textContent = counter;
    localStorage.setItem("counter", counter);
}

function loadDates(){
    counter= Number(localStorage.getItem("counter"));
    totalRotule.textContent = counter;
}

function reset(){
    localStorage.clear();
    counter = 0;
    totalRotule.textContent = counter;
}

// events
window.addEventListener("load", loadDates);
btnCounter.addEventListener("click", addMoreOneTheCounter);
btnReset.addEventListener("click", reset);