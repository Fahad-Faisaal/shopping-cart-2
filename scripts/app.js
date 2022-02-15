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
  productPrice.innerText = +productInput.value * price;
}

// event handlers
document.getElementById('phone-plus').addEventListener('click', function () {
  updateInput('phone', 1219, false)
});

document.getElementById('phone-minus').addEventListener('click', function () {
  updateInput('phone', 1219, true);
});

document.getElementById('case-plus').addEventListener('click', function () {
  updateInput('case', 59, false)
});

document.getElementById('case-minus').addEventListener('click', function () {
  updateInput('case', 59, true);
});