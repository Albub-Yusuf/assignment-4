/////////// first class section////////////
//firstClass-count, firstClass-increase ,  firstClass-decrease


////////// economy class section /////////
//economy-count, economy-increase , economy-decrease


////////// sub total section//////////////
// sub-total, vat, total

let totalFirstClassTicket = 0;
let totalEconomyClassTicket = 0;
let subTotal = 0;
let vat = 0;
let total = 0;

const firstClassInput = document.getElementById('firstClass-count');
const economyClassInput = document.getElementById('economy-count');



function ticketCounter(ticketInput, isIncreased) {

    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    let ticketUnitPrice = 0;
    const category = ticketInput.name;

    if (isIncreased == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    } else if (isIncreased == true && ticketCount >= 0) {
        ticketNewCount = ticketCount + 1;
    }
    ticketInput.value = ticketNewCount;

    if (category == 'first-class') {
        totalFirstClassTicket = ticketNewCount;
    }

    else if (ticketInput.name == 'economy') {
        totalEconomyClassTicket = ticketNewCount;
    }

    //calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

}

function calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket) {

    subTotal = (totalFirstClassTicket * 150) + (totalEconomyClassTicket * 100);
    vat = Math.round(subTotal * .10);
    total = subTotal + vat;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;

}


document.getElementById('firstClass-increase').addEventListener('click', function () {

    ticketCounter(firstClassInput, true);
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

});


document.getElementById('firstClass-decrease').addEventListener('click', function () {

    ticketCounter(firstClassInput, false);
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

});



document.getElementById('economy-increase').addEventListener('click', function () {

    ticketCounter(economyClassInput, true);
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);


});


document.getElementById('economy-decrease').addEventListener('click', function () {

    ticketCounter(economyClassInput, false);
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);


});

document.getElementById('book-now').addEventListener('click', function () {

    document.getElementById('bookingForm').style.display = "none";
    document.getElementById('content').style.display = "none";
    document.getElementById('book-now').style.display = "none";
    document.getElementById('booking-confirm').style.display = "block";
    document.getElementById('back').style.display = "block";
    document.getElementById("custom").style.gridTemplateColumns = "4fr";
  

    const tft = totalFirstClassTicket;
    const tet = totalEconomyClassTicket;


    document.getElementById('first-class-input-value').value = "$150 " + " X " + totalFirstClassTicket;
    document.getElementById('economy-class-input-value').value = "$100 " + " X " + totalEconomyClassTicket;



    document.getElementById('first-class-total-ticket').innerText = totalFirstClassTicket * 150;
    document.getElementById('economy-class-total-ticket').innerText =  totalEconomyClassTicket * 100;

    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

    console.log('f1 = ' + tft + " & eco = " + tet);
    calculateTicketPrice(tft, tet);
    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);
    console.log('subtotal = '+ subTotal + 'vat = ' + vat + 'total = '+ total);
    document.getElementById('sub-total1').innerText = subTotal;
    document.getElementById('vat1').innerText = vat;
    document.getElementById('total1').innerText = total;


});

document.getElementById('back').addEventListener('click',function(){
    document.getElementById('bookingForm').style.display = "block";
    document.getElementById('content').style.display = "block";
    document.getElementById('book-now').style.display = "block";
    document.getElementById('booking-confirm').style.display = "none";
    document.getElementById('back').style.display = "none";
    document.getElementById("custom").style.gridTemplateColumns = "2fr 3fr";
    
});

 

