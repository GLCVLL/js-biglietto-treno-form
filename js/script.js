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


// ADD KM PRICE

let kmPrice = 0.21;

// DISCOUNT

let discount = null


// GET DATA FROM USER

buttonS.addEventListener('click', function(){
    // RECUPERO VALORE
    const name = inputN.value;
    const kms = inputK.value;
    const age = inputA.value;

    //CHANGE DISPLAY

    myTicket.style.display = 'flex';

// calculating ticket price based on km

    let price = kmPrice * kms;
    console.log(price);

    // calculating discount

    if(age >= 65) discount = 40;
    else if(age <= 18) discount = 20;
});

