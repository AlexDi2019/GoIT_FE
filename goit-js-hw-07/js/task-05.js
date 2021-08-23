// const refs = {
// userName: document.querySelector(`#name-output`),
// input: document.querySelector(`#name-input`),
// };
// refs.input.addEventListener(`input`, (event) => {
// event.currentTarget.value.trim() === "" ?
// (refs.userName.textContent = "незнакомец"):
// (refs.userName.textContent = event.currentTarget.value);
// });

const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInput);

function onInput(event) {
    event.currentTarget.value ?
        textEl.textContent = event.currentTarget.value :
        textEl.textContent = 'Незнакомец'
};