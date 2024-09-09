
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
    let monthNow = today.getMonth() + 1; // JavaScript months are 0-based
    let yearNow = today.getFullYear();

    function calculateAge() {
        const validDay = validateDay();
        const validMonth = validateMonth();
        const validYear = validateYear();
        
        if (validDay && validMonth && validYear) {
            let ageYears = yearNow - yearValue;
            let ageMonths = monthNow - monthValue;
            let ageDays = dayNow - dayValue;

            if (ageDays < 0) {
                ageDays += daysInMonth(monthNow - 1, yearNow);
                ageMonths--;
            }

            if (ageMonths < 0) {
                ageMonths += 12;
                ageYears--;
            }

            yearOutput.innerText = ageYears;
            monthOutput.innerText = ageMonths;
            dayOutput.innerText = ageDays;
        }   
    };

    function validateDay() {
        let daysInMonth = getDaysInMonth(monthValue, yearValue);

        if (dayInput.value === '') {
            setError(0, 'This field is required');
            return false;
        } else if (dayValue > daysInMonth || dayValue < 1) {
            setError(0, `Must be a valid day for the month (${daysInMonth} days)`);
            return false;
        } else {
            clearError(0);
            return true;
        }
    }

    function validateMonth() {
        if (monthInput.value === '') {
            setError(1, 'This field is required');
            return false;
        } else if (monthValue > 12 || monthValue < 1) {
            setError(1, 'Must be a valid month (1-12)');
            return false;
        } else {
            clearError(1);
            return true;
        }
    }

    function validateYear() {
        if (yearInput.value === '') {
            setError(2, 'This field is required');
            return false;
        } else if (yearValue > yearNow || yearValue < 1900) { // assuming age should be reasonable
            setError(2, 'Year must be in the past');
            return false;
        } else {
            clearError(2);
            return true;
        }
    }

    function setError(index, message) {
        smalls[index].innerText = message;
        labels[index].classList.add('error');
        inputs[index].classList.add('error');
    }

    function clearError(index) {
        smalls[index].innerText = '';
        labels[index].classList.remove('error');
        inputs[index].classList.remove('error');
    }

    function getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    calculateAge();
});
