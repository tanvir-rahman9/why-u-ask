const decreaseBtn = document.getElementById("de");
const resetBtn = document.getElementById("re");
const increaseBtn = document.getElementById("in");

const countLable = document.getElementById("Hi");

let count = 0;


increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;

}


resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;

}