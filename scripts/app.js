// helping functions
function updateInput (product, price, isDecreasing) {
  const productInput = document.getElementById(`${product}-input`);
  const productInputValue = +productInput.value;
  const productPrice = document.getElementById(`${product}-price`);

  if (isDecreasing) {
    if (productInputValue > 0) productInput.value = productInputValue - 1;
  }
  else {
    productInput.value = productInputValue + 1;
  }
  const totalPrice = +productInput.value * price;
  productPrice.innerText = totalPrice;
  return totalPrice;
}

function getPrice (product, price) {
  const productInput = document.getElementById(`${product}-input`);
  const productPrice = +productInput.value * price ;
  return productPrice;
}

function calculateTotal () {
  const phonePrice = getPrice('phone', 1219) ;
  const casePrice = getPrice('case', 59); 
  const subTotal = phonePrice + casePrice;
  const tax = (subTotal * 10) / 100;
  const total = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-amount').innerText = total;
}

// event handlers
document.getElementById('phone-plus').addEventListener('click', function () {
  updateInput('phone', 1219, false);
  calculateTotal()
});

document.getElementById('phone-minus').addEventListener('click', function () {
  updateInput('phone', 1219, true);
  calculateTotal()
});

document.getElementById('case-plus').addEventListener('click', function () {
  updateInput('case', 59, false);
  calculateTotal()
});

document.getElementById('case-minus').addEventListener('click', function () {
  updateInput('case', 59, true);
  calculateTotal()
});