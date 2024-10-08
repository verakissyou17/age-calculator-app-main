const ageForm = document.getElementById('ageForm');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const smalls = document.querySelectorAll('small');
const dayOutput = document.getElementById('dayOutput');
const monthOutput = document.getElementById('monthOutput');
const yearOutput = document.getElementById('yearOutput');




ageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const yearValue = Number(yearInput.value);
    const monthValue = Number(monthInput.value);
    const dayValue = Number(dayInput.value);

    const today = new Date();
    let dayNow = today.getDate();
    let monthNow = today.getMonth() + 1;
    let yearNow = today.getFullYear();

    function calculateAge() {
        const days = validateDay();
        const month = validateMonth();
        const year = validateYear();
        if (days || month || year) {
            if (dayValue > dayNow) {
                dayNow += days;
                monthNow -= 1;
                console.log(days);
            }
    
            if (monthValue > monthNow) {
                monthNow += 12;
                yearNow -= 1;
            }
    
            yearOutput.innerText = yearNow - yearValue;
            monthOutput.innerText = monthNow - monthValue;
            dayOutput.innerText = dayNow - dayValue;
        }   
    };

    calculateAge();

    function validateDay() {
        let days = 0;
    
        switch (monthValue) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                console.log(days);
                if (dayInput.value === '') {
                    smalls[0].innerText = 'This field is required';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else if (dayValue > 31 || dayValue < 0) {
                    smalls[0].innerText = 'Must be a valid day';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else {
                    smalls[0].innerText = '';
                    labels[0].classList.remove('error');
                    inputs[0].classList.remove('error');
                    dayOutput.classList.add('play', 'success');
                    dayInput.value = '';
                }
                break;
            case 2:
                if (yearValue % 4 === 0 && yearValue % 100 !== 0 || yearValue % 400 === 0) {
                    days = 29;
                    console.log(days);
                    if (dayInput.value === '') {
                        smalls[0].innerText = 'This field is required';
                        labels[0].classList.add('error');
                        inputs[0].classList.add('error');
                        dayOutput.innerText = '--';
                    } else if (dayValue > days || dayValue < 0) {
                        smalls[0].innerText = `February has ${days} days`;
                        labels[0].classList.add('error');
                        inputs[0].classList.add('error');
                        dayOutput.innerText = '--';
                    } else {
                        smalls[0].innerText = '';
                        labels[0].classList.remove('error');
                        inputs[0].classList.remove('error');
                        dayOutput.classList.add('play', 'success');
                        dayInput.value = '';
                    }
                } else {
                    days = 28;
                    console.log(days);
                    if (dayInput.value === '') {
                        smalls[0].innerText = 'This field is required';
                        labels[0].classList.add('error');
                        inputs[0].classList.add('error');
                        dayOutput.innerText = '--';
                    } else if (dayValue > days || dayValue < 0) {
                        smalls[0].innerText = `February has ${days} days`;
                        labels[0].classList.add('error');
                        inputs[0].classList.add('error');
                        dayOutput.innerText = '--';
                    } else {
                        smalls[0].innerText = '';
                        labels[0].classList.remove('error');
                        inputs[0].classList.remove('error');
                        dayOutput.classList.add('play', 'success');
                        dayInput.value = '';    
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                console.log(days);
                if (dayInput.value === '') {
                    smalls[0].innerText = 'This field is required';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else if (dayValue > days || dayValue < 0) {
                    smalls[0].innerText = 'Must be a valid day';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else {
                    smalls[0].innerText = '';
                    labels[0].classList.remove('error');
                    inputs[0].classList.remove('error');
                    dayOutput.classList.add('play', 'success');
                    dayInput.value = '';
                }
                break;
            default: {
                days = dayValue;
                console.log(days);
                if (dayInput.value === '') {
                    smalls[0].innerText = 'This field is required';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                    dayOutput.innerText = '--';
                } else if (dayValue > days || dayValue < 0) {
                    smalls[0].innerText = 'Must be a valid day';
                    labels[0].classList.add('error');
                    inputs[0].classList.add('error');
                } else {
                    smalls[0].innerText = '';
                    labels[0].classList.remove('error');
                    inputs[0].classList.remove('error');
                    dayOutput.classList.add('play', 'success');
                    dayInput.value = '';
                }
                break;
            }
        };
        return days;
    };
    
    function validateMonth() {
        if (monthInput.value === '') {
            smalls[1].innerText = 'This field is required';
            labels[1].classList.add('error');
            inputs[1].classList.add('error');
            monthOutput.innerText = '--';
        } else if (monthValue > 12 || monthValue < 0) {
            smalls[1].innerText = 'Must be a valid month';
            labels[1].classList.add('error');
            inputs[1].classList.add('error');
            monthOutput.innerText = '--';
        } else {
            smalls[1].innerText = '';
            labels[1].classList.remove('error');
            inputs[1].classList.remove('error');
            monthOutput.classList.add('play', 'success');
            monthInput.value = '';
        }
    };
    
    function validateYear() {
        if (yearInput.value === '') {
            smalls[2].innerText = 'This field is required';
            labels[2].classList.add('error');
            inputs[2].classList.add('error');
            yearOutput.innerText = '--';
        } else if (yearValue > yearNow || yearValue < 0) {
            smalls[2].innerText = 'Must be in the past';
            labels[2].classList.add('error');
            inputs[2].classList.add('error');
            yearOutput.innerText = '--';
        } else {
            smalls[2].innerText = '';
            labels[2].classList.remove('error');
            inputs[2].classList.remove('error');
            yearOutput.classList.add('play', 'success');
            yearInput.value = '';
        }
    };
}); 
