// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML
  const quantityValue = quantity.value

  const subtotal = product.querySelector('.subtotal span')

  const subtotalValue = priceValue*quantityValue;
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');

  let total = 0;

  for( let i = 0; i < allProducts.length; i +=1){
    total += updateSubtotal(allProducts[i]);
  }

  document.querySelector('#total-value span').innerHTML = total;
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {

  const row = event.target.parentNode.parentNode;

  const parent = row.parentNode;

  parent.removeChild(row)
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn-remove');

  for(let removeButton of removeButtons){
    removeButton.addEventListener('click', removeProduct)
  }

  //... your code goes here
});