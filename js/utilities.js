// Set element inntertext by element ID
function setELementTextByID(elementID, value) {
  const elementInnterTextID = document.getElementById(elementID);
  elementInnterTextID.innerText = value;
}

// Hide ELement by ID

function hideELementByID(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add('hidden');
}

// Change button backgroud color
function changeButtonBG(btn) {
  btn.classList.remove('bg-[#F7F8F8]');
  btn.classList.add('bg-[#1DD100]');
}

// Add booked seats to checkout table
function createElement(seatNumber) {
  const newTr = document.createElement('tr');
  const newTd = document.createElement('td');
  const newTd2 = document.createElement('td');
  const newTd3 = document.createElement('td');
  newTd.innerText = seatNumber;
  newTd2.innerText = 'Economoy';
  newTd3.innerText = '550';
  newTr.appendChild(newTd);
  newTr.appendChild(newTd2);
  newTr.appendChild(newTd3);
  document.getElementById('table_body').prepend(newTr);
}

// Enable Apply button if cupon code is valid and hide input if code reedem succesfully

const inputElement = document.getElementById('cupon_input');
const applyButton = document.getElementById('cupon_submit');

// Test

applyButton.addEventListener('click', function () {
  console.log('btn clicked');

  if (seatBooked.length > 3) {
    if (inputElement.value === 'NEW15') {
      applyButton.addEventListener('click', function () {
        discountedPrice = totalPrice - (totalPrice * 15) / 100;
        setELementTextByID('grand_total', discountedPrice);

        //   Add discount info to new child
        let newDiscountText = document.getElementById('discount_price_text');
        newDiscountText.innerText = `You got ${totalPrice - discountedPrice} taka discount`;
        hideELementByID('form');
      });
    } else if (inputElement.value === 'Couple 20') {
      applyButton.addEventListener('click', function () {
        discountedPrice = totalPrice - (totalPrice * 20) / 100;
        setELementTextByID('grand_total', discountedPrice);
        //   Add discount info to new child
        let newDiscountText = document.getElementById('discount_price_text');
        newDiscountText.innerText = `You got ${totalPrice - discountedPrice} taka discount`;
        hideELementByID('form');
      });
    } else {
      alert('Please enter valid cupon');
    }
  } else {
    alert('Please book 4 ticket to get discount');
    inputElement.value = '';
  }
});

// Test

// inputElement.addEventListener('keyup', function () {
//   if (seatBooked.length == 4) {
//     if (inputElement.value === 'NEW15') {
//       applyButton.addEventListener('click', function () {
//         discountedPrice = totalPrice - (totalPrice * 15) / 100;
//         setELementTextByID('grand_total', discountedPrice);
//         //   Add discount info to new child
//         let newDiscountText = document.getElementById('discount_price_text');
//         newDiscountText.innerText = `You got ${totalPrice - discountedPrice} taka discount`;
//         hideELementByID('form');
//       });
//     } else if (inputElement.value === 'Couple 20') {
//       applyButton.addEventListener('click', function () {
//         discountedPrice = totalPrice - (totalPrice * 20) / 100;
//         setELementTextByID('grand_total', discountedPrice);
//         //   Add discount info to new child
//         let newDiscountText = document.getElementById('discount_price_text');
//         newDiscountText.innerText = `You got ${totalPrice - discountedPrice} taka discount`;
//         hideELementByID('form');
//       });
//     }
//   } else {
//     alert('Please book 4 ticket to get discount');
//     inputElement.value = '';
//   }
// });

// Disable from next button untill phone number is entered
const formNext = document.getElementById('form_next');
const phoneInput = document.getElementById('phone_number');

phoneInput.addEventListener('keyup', function (event) {
  if (seatBooked.length > 0) {
    if (phoneInput.value.length > 0) {
      formNext.disabled = false;
    } else {
      formNext.disabled = true;
    }
  }
});
