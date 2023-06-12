let copyButton = document.getElementById('copy');
let pixKeyInput = document.getElementById('keypix');
const price = document.getElementById('price');
const imgQr = document.getElementById('imgQr');

// ADICIONE O PREÇO DO SEU PRODUTO
price.textContent = '20.00';

// MUDAR IMAGEM DO QRCODE
// OBS: AO MUDAR A IMAGEM QRcode CERTIFIQUE-SE DE MUDAR TAMBÉM O NOME DO ARQUIVO PRA RENDERIZAR!
imgQr.innerHTML = `<img src="../banc/images/Untitled.svg" alt="QRcode">`;

// ADICIONE SUA CHAVE PIX NO VALUE
pixKeyInput.value = `gGWJSBAJQQBAHWJWVAHJH`;

// FUNÇÃO DE COPIAR
copyButton.addEventListener('click', function(ev) {
  const button = ev.currentTarget;

  if (button.innerText === 'Copiar') {
    button.innerText = `Copiado!`;
    navigator.clipboard.writeText(pixKeyInput.value);
    button.classList.add('copied');
  } else {
    button.innerText = `Copiar`;
    button.classList.remove('copied');
  }
});