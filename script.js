/////////// first class section////////////
//firstClass-count, firstClass-increase ,  firstClass-decrease


////////// economy class section /////////
//economy-count, economy-increase , economy-decrease


////////// sub total section//////////////
// sub-total, vat, total

let totalFirstClassTicket = 0;
let totalEconomyClassTicket = 0;

const firstClassInput = document.getElementById('firstClass-count');
const economyClassInput = document.getElementById('economy-count');



function ticketCounter(ticketInput, isIncreased) {

    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = 0;
    let ticketUnitPrice = 0;
    const category = ticketInput.name;

    if (isIncreased == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    } else if (isIncreased == true && ticketCount > 0) {
        ticketNewCount = ticketCount + 1;
    }
    ticketInput.value = ticketNewCount;

    if (category == 'first-class') {
        totalFirstClassTicket = ticketNewCount;
    }

    else if (ticketInput.name == 'economy') {
        totalEconomyClassTicket = ticketNewCount;
    }

    calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket);

}

function calculateTicketPrice(totalFirstClassTicket, totalEconomyClassTicket) {

    const subTotal = (totalFirstClassTicket * 150) + (totalEconomyClassTicket * 100);
    const vat = Math.round(subTotal * .10);
    const total = subTotal + vat;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;

}


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

