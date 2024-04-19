const ageForm  = document.getElementById('ageForm');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const smalls = document.querySelectorAll('small');
const dayOutput = document.getElementById('dayOutput');
const monthOutput = document.getElementById('monthOutput');
const yearOutput = document.getElementById('yearOutput');

const today = new Date();
const dayNow = today.getDate();
const monthNow = today.getMonth() + 1;
const yearNow = today.getFullYear();

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
const yearValue = Number(yearInput.value);
const dayValue = Number(dayInput.value);
const monthValue = Number(monthInput.value);

    function leapYear(year)
{
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

const result = leapYear(Number(yearValue));
console.log(result);

    if(dayValue === '' || monthValue === '' || yearValue === '') {
        labels.forEach(label => {
            label.classList.add('error');
        });
       inputs.forEach(input => {
        input.classList.add('error');
       }); 
       smalls.forEach(small => {
        small.innerText = 'This field is required';
       });
    } else if(dayValue > 31 || monthValue > 12 || yearValue > yearNow) {
        labels.forEach(label => {
            label.classList.add('error');
        });
        inputs.forEach(input => {
            input.classList.add('error');
        });
       smalls[0].innerText = 'Must be a valid day';
       smalls[1].innerText = 'Must be a valid month';
       smalls[2].innerText = 'Must be in the past';
    } else if(monthValue === 2 && dayValue > 28 && result === false) {
        labels.forEach(label => {
            label.classList.add('error');
        });
        inputs.forEach(input => {
            input.classList.add('error');
        });
       smalls[0].innerText = 'This month has only 28 days';
    } else if(dayValue > 30 && monthValue % 2 === 0) {
        labels.forEach(label => {
            label.classList.add('error');
        });
        inputs.forEach(input => {
            input.classList.add('error');
        });
       smalls[0].innerText = 'This month has only 30 days';
    } 
     else {
        labels.forEach(label => {
            label.classList.remove('error');
        });
        inputs.forEach(input => {
            input.classList.remove('error');
            input.value = '';
        });
        smalls.forEach(small => {
            small.innerText = '';
        }); 

        let yearAge = 0;
        yearAge = yearNow - yearValue;
        yearOutput.innerHTML = yearAge;
        console.log(yearAge)
        yearOutput.classList.add('success');

        let monthAge = 0;
        monthAge = yearAge * 12;
        monthOutput.innerHTML = monthAge;
        monthOutput.classList.add('success');

        let daysAge = 0; 
        daysAge = yearAge * 365;
        dayOutput.innerHTML = daysAge;
        dayOutput.classList.add('success');  
    }
}); 




