const cardNumberInput = document.getElementById('cardNumber');
const identifyBtn = document.getElementById('identifyBtn');
const resultDiv = document.getElementById('result');

function identificarBandeira(numero) {
  const num = numero.replace(/\s|-/g, '');

  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(num)) {
    return 'Visa';
  } else if (/^5[1-5][0-9]{14}$/.test(num)) {
    return 'MasterCard';
  } else if (/^3[47][0-9]{13}$/.test(num)) {
    return 'American Express';
  } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(num)) {
    return 'Discover';
  } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(num)) {
    return 'Diners Club';
  } else if (/^35[0-9]{14}$/.test(num)) {
    return 'JCB';
  } else {
    return 'Bandeira não identificada';
  }
}

identifyBtn.addEventListener('click', () => {
  const numero = cardNumberInput.value;

  if (!numero) {
    resultDiv.textContent = 'Por favor, insira o número do cartão.';
    return;
  }

  const bandeira = identificarBandeira(numero);
  resultDiv.textContent = `Bandeira do cartão: ${bandeira}`;
});
