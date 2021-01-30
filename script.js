//variable declared for counting number of tickets and 
let totalFirstClassTicket = 0;
let totalEconomyClassTicket = 0;

//variable declared for grabbing ticket counter value
const firstClassInput = document.getElementById('firstClass-count');
const economyClassInput = document.getElementById('economy-count');


//function for counting total number of tickets
function ticketCounter(ticketInput, isIncreased) {

    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    let ticketUnitPrice = 0;
    const category = ticketInput.name;

    //conditions for checking add or subtract tickets & restrict given negative inputs
    if (isIncreased == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    } else if (isIncreased == true && ticketCount >= 0) {
        ticketNewCount = ticketCount + 1;
    }
    ticketInput.value = ticketNewCount;

    //conditions for checking tickets category whether it's first-class or economy-class
    if (category == 'first-class') {
        totalFirstClassTicket = ticketNewCount;
    }

    else if (ticketInput.name == 'economy') {
        totalEconomyClassTicket = ticketNewCount;
    }

    //calling calculateTicketPrice function for calculate total ticket price
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

}

//function for calculate ticket price
function calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket) {

    //calculate sub-total, vat & total price
    const subTotal = (totalFirstClassTicket * 150) + (totalEconomyClassTicket * 100);
    const vat = Math.round(subTotal * .10);
    const total = subTotal + vat;

    //set subtotal, vat & total price values in calculation section
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;

}


//Ticket increase and decrease events for plus and minus buttons 
document.getElementById('firstClass-increase').addEventListener('click', function () {

    ticketCounter(firstClassInput, true);

});


document.getElementById('firstClass-decrease').addEventListener('click', function () {

    ticketCounter(firstClassInput, false);

});



document.getElementById('economy-increase').addEventListener('click', function () {

    ticketCounter(economyClassInput, true);


});


document.getElementById('economy-decrease').addEventListener('click', function () {

    ticketCounter(economyClassInput, false);


});

// Bonus Content Code showing Booking Details
document.getElementById('book-now').addEventListener('click', function () {

    //Grab input value from Booking form
    const destinationFrom = document.getElementById('flying-from').value;
    const destinationTo = document.getElementById('flying-to').value;
    const departureDate = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    //set the input values
    document.getElementById('destination-from').value = destinationFrom;
    document.getElementById('destination-to').value = destinationTo;
    document.getElementById('departure-date').value = departureDate;
    document.getElementById('return-date').value = returnDate;

    //Hiding the booking-form, booking-content and book now button
    document.getElementById('bookingForm').style.display = "none";
    document.getElementById('content').style.display = "none";
    document.getElementById('book-now').style.display = "none";

    //changing style to show the hidden div & button
    document.getElementById('booking-confirm').style.display = "block";
    document.getElementById('back').style.display = "block";
    document.getElementById("custom").style.gridTemplateColumns = "4fr";
    document.getElementById('custom').style.margin = "100px auto";

    //display number of tickets purchased
    document.getElementById('first-class-input-value').value = "$150 " + " X " + totalFirstClassTicket;
    document.getElementById('economy-class-input-value').value = "$100 " + " X " + totalEconomyClassTicket;


    //display total price of first-class & economy class tickets individually
    document.getElementById('first-class-total-ticket').innerText = totalFirstClassTicket * 150;
    document.getElementById('economy-class-total-ticket').innerText = totalEconomyClassTicket * 100;

});

//Back button activities
document.getElementById('back').addEventListener('click', function () {

    window.location.href = window.location.href;

});



