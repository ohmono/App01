const buttonElm = document.querySelector('button');
const inputElm = document.querySelector('input');
const listElm = document.querySelector('ul');

buttonElm.addEventListener('click', () => {
    const valor = inputElm.value;
    const listaItemElm = document.createElement('li');
    listaItemElm.textContent = valor;
    listElm.appendChild(listaItemElm);
    inputElm.value = '';
});