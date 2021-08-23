const counterValueRef = document.querySelector("#value");
let counterValue = counterValueRef.textContent;
console.log(counterValueRef);
const decrementButtonRef = document.querySelectorAll("#counter button")[0];
console.log(decrementButtonRef);
const incrementButtonRef = document.querySelectorAll("#counter button")[1];
console.log(incrementButtonRef);
incrementButtonRef.addEventListener("click", increment);

function increment() {
    console.log("клик +1");
    const numOfCounterValueRef = Number(counterValueRef.textContent); // преобразование строки в число
    counterValueRef.textContent = numOfCounterValueRef + 1;
    console.log(`counterValue: ${counterValue}`);
    return counterValue;
}
decrementButtonRef.addEventListener("click", decrement);

function decrement() {
    console.log("клик -1");
    counterValueRef.textContent -= 1;
    console.log(`counterValue: ${counterValue}`);
    return counterValue;
}