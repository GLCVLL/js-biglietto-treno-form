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

// ADD KM PRICE

let kmPrice = 0.21;


// GET DATA FROM USER

buttonS.addEventListener('click', function(){
    // RECUPERO VALORE
    const name = inputN.value;
    const kms = inputK.value;
    const age = inputA.value;
})
