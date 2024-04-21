const ageForm  = document.getElementById('ageForm');
let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const smalls = document.querySelectorAll('small');
const dayOutput = document.getElementById('dayOutput');
const monthOutput = document.getElementById('monthOutput');
const yearOutput = document.getElementById('yearOutput');

const yearValue = Number(yearInput.value);
const monthValue = Number(monthInput.value);
const dayValue = Number(dayInput.value);

const today = new Date();
let dayNow = today.getDate();
let monthNow = today.getMonth() + 1;
let yearNow = today.getFullYear();

let days = 0;

function validateYear () {
    if(yearInput.value === '') {
        smalls[2].innerText = 'This field is required';
        labels[2].classList.add('error');
        inputs[2].classList.add('error');
        yearOutput.innerText = '--';
    } else if (yearValue > yearNow) {
        smalls[2].innerText = 'Must be in the past';
        labels[2].classList.add('error');
        inputs[2].classList.add('error');
        yearOutput.innerText = '--';
    } else {
        smalls[1].innerText = '';
        labels[1].classList.remove('error');
        inputs[2].classList.remove('error');
        yearOutput.innerText = yearNow - yearValue;
        yearOutput.classList.add('success');
        calculateAge(days);
    }
};

 function validateMonth () {
    if(monthInput.value === '') {
        smalls[1].innerText = 'This field is required';
        labels[1].classList.add('error');
        inputs[1].classList.add('error');
        monthOutput.innerText = '--';
    } else if (monthValue > 12){
        smalls[1].innerText = 'Must be a valid month';
        labels[1].classList.add('error');
        inputs[1].classList.add('error');
        monthOutput.innerText = '--';
    } else {
        smalls[1].innerText = '';
        labels[1].classList.remove('error');
        inputs[1].classList.remove('error'); 
        monthOutput.innerText = monthNow - monthValue;
        monthOutput.classList.add('success');
        calculateAge(days);
    }
};

function validateDay() {

    if(dayInput.value === '') {
        smalls[0].innerText = 'This field is required';
        labels[0].classList.add('error');
        inputs[0].classList.add('error');
        dayOutput.innerText = '--';
    } else if(dayValue > 31) {
        smalls[0].innerText = 'Must be a valid day';
        labels[0].classList.add('error');
        inputs[0].classList.add('error');  
        dayOutput.innerText = '--';     
    } else {
        smalls[1].innerText = '';
        labels[1].classList.remove('error');
        inputs[0].classList.remove('error');
        dayOutput.innerText = dayNow - dayValue;
        dayOutput.classList.add('success');
        calculateAge(days);
    }

    switch(monthValue) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10: 
        case 12: 
            days = 31;
                if(dayValue > days) {
                smalls[0].innerText = 'Must be a valid day';
                labels[0].classList.add('error');
                inputs[0].classList.add('error');
                dayOutput.innerText = '--';
            } else {               
                smalls[0].innerText = '';
                labels[0].classList.remove('error');
                inputs[0].classList.remove('error');
                dayOutput.innerText = dayNow - dayValue;
                dayOutput.classList.add('success');
                calculateAge(days);
            }
        break; 
        case 2: 
            if(yearValue % 4 === 0 && yearValue % 100 !== 0 || yearValue % 400 === 0) {
                days = 29;
                if(dayValue > days) {
                    smalls[0].innerText = `February has ${days} days`;
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else {
                    smalls[0].innerText = '';
                    labels[0].classList.remove('error');
                    inputs[0].classList.remove('error');
                    dayOutput.innerText = dayNow - dayValue;
                    dayOutput.classList.add('success');
                    calculateAge(days);
                } 
            } else {
                days = 28;
                if(dayValue > days) {
                    smalls[0].innerText = `February has ${days} days`;
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else {
                    smalls[0].innerText = '';
                    labels[0].classList.remove('error');
                    inputs[0].classList.remove('error');
                    dayOutput.innerText = dayNow - dayValue;
                    dayOutput.classList.add('success');
                    calculateAge(days);
                }  
            }       
        break;
        case 4:
        case 6:
        case 9:
        case 11: 
            days = 30;
            if(dayValue > days) {
                smalls[0].innerText = 'Must be a valid day';
                labels[0].classList.add('error');
                inputs[0].classList.add('error');
                dayOutput.innerText = '--';
            } else {
                smalls[0].innerText = '';
                labels[0].classList.remove('error');
                inputs[0].classList.remove('error');
                dayOutput.innerText = dayNow - dayValue;
                dayOutput.classList.add('success');
                calculateAge(days);
            }
        break;
    };
};

function calculateAge(days) {
    if(dayValue > dayNow) {
        dayNow += days;
        monthNow--;
    }

    if(monthValue > monthNow) {
        monthNow = monthNow + 12;
        yearNow--;   
        }
}

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateDay();
    validateMonth();
    validateYear();
}); 




