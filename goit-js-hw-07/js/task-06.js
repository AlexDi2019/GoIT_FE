const inputRef = document.querySelector(" input, #validation-input");
console.log(inputRef);
const attributeLengthInputRef = Number(inputRef.getAttribute("data-length"));
console.log(attributeLengthInputRef);
inputRef.addEventListener("blur", (event) => {
    console.log(event.target.value.length);
    event.target.value.length !== attributeLengthInputRef ?
        inputRef.classList.add("invalid") :
        inputRef.classList.replace("invalid", "valid");
});