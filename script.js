const ageForm  = document.getElementById('ageForm');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const smalls = document.querySelectorAll('small');
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
const dayOutput = document.getElementById('dayOutput');
const monthOutput = document.getElementById('monthOutput');
const yearOutput = document.getElementById('yearOutput');

const today = new Date();
const dayDate = today.getDate();
const monthDate = today.getMonth() + 1;
const yearDate = today.getFullYear();
let yearAge = '';

ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(day.value === '' || month.value === '' || year.value === '') {
        labels.forEach(label => {
            label.classList.add('error');
        });
       inputs.forEach(input => {
        input.classList.add('error');
       }); 
       smalls.forEach(small => {
        small.innerText = 'This field is required';
       });
    } else if(day.value > 31 && month.value > 12 && year.value > yearDate) {
       labels[0].classList.add = 'error';
       labels[3].classList.add = 'error';
        errorDay.innerText = 'Must be a valid day';
        errorYear.innerText = 'Must be in the past';
    } else {
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

      
    }
});