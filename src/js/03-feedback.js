import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEY_FORM_INPUT = 'feedback-form-state';


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputData, 500));

function onInputData() {
    const { elements: { email, message } } = form;
    if (email && message) {
        const dataForm = { email: email.value, message: message.value };
        localStorage.setItem(KEY_FORM_INPUT, JSON.stringify(dataForm));
    }
}

function showData() {
    const dataForm = JSON.parse(localStorage.getItem(KEY_FORM_INPUT));
    if (dataForm) {
        const { elements: { email, message } } = form;
        if (email && message) {
            email.value = dataForm.email;
            message.value = dataForm.message;
        }
        console.log(dataForm);
    }
}

document.addEventListener('DOMContentLoaded', showData);

function onFormSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, message } } = form;
    if (email && message) {
        const emailTrim = email.value.trim();
        const messageTrim = message.value.trim();
        if (emailTrim === "" || messageTrim === "") {
            alert("Заповніть всі поля");
            return;
        }
        const outputData = { email: emailTrim, message: messageTrim };
        console.log(outputData);
        evt.currentTarget.reset();
        localStorage.removeItem(KEY_FORM_INPUT);
    }
}