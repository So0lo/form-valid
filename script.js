const btnReg = document.getElementById(`userSubmit`);
const inputs = document.querySelectorAll(`input`);
const form = document.getElementById(`register`);
const body = document.querySelector(`body`);

function createModal (textP) {
    body.insertAdjacentHTML('afterbegin', `
        <div class="bg-modal">
            <div class="modal">
                <p></p>
                <button>Ok</button>
            </div>
        </div>
        `);
        const modal = document.getElementsByClassName(`modal`)[0];
        modal.style.border = '3px solid red';

        const p = modal.querySelector(`p`);
        p.textContent = textP;

        const btnMod = modal.querySelector(`button`);
        btnMod.addEventListener(`click`, () => {
            document.getElementsByClassName(`bg-modal`)[0].remove();
        });
}

function formSubmit () {
    if (!/^[a-zA-Zа-яА-Я ]*$/.test(inputs[0].value)) {
        createModal('В имени должны быть только буквы');
        inputs[0].classList.add(`error`);
        return false;
    } else if (inputs[0].value.length === 0) {
        createModal('Поле пустое');
        inputs[0].classList.add(`error`);
        return false;
    }
    if (inputs[1].value !== inputs[2].value) {
        createModal(`Пароли должны совпадать`);
        inputs[1].classList.add(`error`);
        inputs[2].classList.add(`error`);
        return false;
    } else if (inputs[1].value.length < 6) {  
        createModal('В пароле должно быть более 6 символов');
        inputs[1].classList.add(`error`);
        return false;
    } else if (!/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(inputs[1].value)) {
        createModal('Пароль должен состоять минимум из одной буквы, цифры и специального символа');
        inputs[1].classList.add(`error`);
        return false;
    }
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputs[3].value)) {
        createModal('Неправильный ввод email');
        inputs[3].classList.add(`error`);
        return false;
    } else if (inputs[3].value.length === 0) {
        createModal('Поле пустое');
        inputs[3].classList.add(`error`);
        return false;
    }
    return true;
}

form.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`error`)) {
        e.target.classList.remove(`error`);
    }
});

form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    if (formSubmit()) {
        form.submit();
    };
})

