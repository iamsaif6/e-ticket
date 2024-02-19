// Make an array to store the click value
const seatBooked = [];
let totalPrice = 0;
const perSeatPrice = 550;
let discountedPrice = 0;

function book(event) {
  if (seatBooked.length <= 3) {
    if (seatBooked.length > 2) {
      applyButton.disabled = false;
    } else {
      applyButton.disabled = true;
    }
    // Fetch button information by THIS keyword
    const clickedButton = event;
    // Disable click function once the seat is booked
    clickedButton.removeAttribute('onclick');
    //   Change the button color
    changeButtonBG(clickedButton);
    //   Push the clicked button name to an arrray
    const seatName = clickedButton.innerText;
    seatBooked.push(seatName);
    // Set the booking number to display
    setELementTextByID('seat_left', 40 - seatBooked.length);
    setELementTextByID('seat_booked', seatBooked.length);
    // Add selected seat to checkout table
    createElement(seatName);
    // add seat price to Total Price and grand total price
    totalPrice = totalPrice + perSeatPrice;
    setELementTextByID('total_price', totalPrice);
    setELementTextByID('grand_total', totalPrice);

    // ----------

    //-----------
  } else {
    alert(`You've booked the max number of ticket`);
  }
}
