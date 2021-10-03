
// Take Data from HTML

let counter = document.querySelector("#counter");

let increase_btn = document.querySelector("#increase-btn");
let decrease_btn = document.querySelector("#decrease-btn");
let reset_btn = document.querySelector("#reset-btn");


counter.textContent = 0;

increase_btn.addEventListener('click', increaseCount);
decrease_btn.addEventListener('click', decreaseCount);
reset_btn.addEventListener('click', resetCount);


function increaseCount() {
    counter.textContent++;
}

function decreaseCount() {
    if(counter.textContent == 0 )
        alert('Counter is at 0.')
    else
        counter.textContent--;

}

function resetCount() {

    if(counter.textContent == 0)
        alert("Counter is already at 0;")
    else {
        counter.textContent = 0;
    }
}

