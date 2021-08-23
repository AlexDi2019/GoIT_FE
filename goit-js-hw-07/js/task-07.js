// const inputRangeEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// const changeFontSizeText = inputRangeEl.addEventListener("input", onChangeSizeText);

// function onChangeSizeText(event) {
//     const fontSize = Number(event.currentTarget.value)
//     textEl.setAttribute("style", `font-size: ${fontSize}`)
// };
// слово просто исчезает и появляется, размер не меняется...
const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    textControl: document.querySelector('#text'),
};

console.log(refs);

function calculate(event) {
    const newFontSize = Number(event.currentTarget.value);
    console.log(newFontSize);

    refs.textControl.style.fontSize = `${newFontSize}px`;

}

refs.fontSizeInput.addEventListener('input', calculate);