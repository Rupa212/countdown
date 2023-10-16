const Title = document.getElementById("title");
let currValue = 0;
const btnDecrement = document.getElementById("decrement");
const btnIncreament = document.getElementById("increament");
const btnReset = document.getElementById("reset");


btnIncreament.addEventListener("click",()=>{
    currValue+=1;
    Title.textContent=currValue;
});

btnDecrement.addEventListener("click",()=>{
    currValue-=1;
    Title.textContent=currValue;
});

btnReset.addEventListener("click",()=>{
    currValue=0;
    Title.textContent=currValue;
});