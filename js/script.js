console.log('JS OK');

const inputN = document.getElementById('name');
console.log(inputN);

const inputK = document.getElementById('kms');
console.log(inputK);

const inputA = document.getElementById('age');
console.log(inputA);

const buttonS = document.getElementById('send');
console.log(buttonS);

const buttonC = document.getElementById('cancel');
console.log(buttonC);

const paragraph = document.getElementById('name-message');
console.log(paragraph);

const myTicket = document.querySelector('.my-ticket');
console.log(myTicket);

const ticketField = document.getElementById('ticket-price');
const cabElement = document.getElementById('cab');
const pnrElement = document.getElementById('pnr');

// ADD KM PRICE

const kmPrice = 0.21;

// GET DATA FROM USER

buttonS.addEventListener('click', function(){
    // RECUPERO VALORE
    const name = inputN.value.trim();
    const kms = parseInt(inputK.value);
    const age = parseInt(inputA.value);

    //CHANGE DISPLAY

    myTicket.style.display = 'flex';

    paragraph.innerText = name;

// calculating ticket price based on km

    let price = kmPrice * kms;
    console.log(price);

    // calculating discount

    let discount = 0;

    if(age >= 65) discount = 40;
    else if(age <= 18) discount = 20;

    if (discount) {
        price -= (price * discount) / 100;
    }

    // randomized cab

    const cab = Math.floor(Math.random() * 12) + 1;

    //randomized pnr

    const pnr = Math.floor(Math.random() * (100000 - 90000)) + 90000;

    //print elements on th ticket

    ticketField.innerText = '€' + price.toFixed(2);
    cabElement.innerText = cab;
    pnrElement.innerText = pnr;
});

