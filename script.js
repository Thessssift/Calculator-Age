
const output_year = document.querySelector(".output-year");
const output_mounth = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".img-button");
// INPUT ELEMENTS
let isvalidday = false;
let isvalidmonth = false;
let isvalidyear = false;
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#Month");
const input_year = document.querySelector("#year");
// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

//stating //


input_day.addEventListener("input", (e) => {

    const inputValue = parseInt(input_day.value);
    const fixedElements = document.querySelectorAll('.fixed-color-day');
    
    if ( inputValue < 1 || inputValue > 31 || isNaN(inputValue)  ) {
        const validElements = document.querySelectorAll('.valid-color-day');
        error_day.textContent = "Enter a valid date";
        isvalidday = false;
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-day");
            element.classList.add("error-color-day");
        });
        validElements.forEach(element => {
            element.classList.remove("valid-color-day");
            element.classList.add("error-color-day");
        });
    }else {
        error_day.textContent = "Check";
        const errorElements = document.querySelectorAll('.error-color-day');
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-day");
            element.classList.add("valid-color-day");
        });
        errorElements.forEach(element => {
            element.classList.remove("error-color-day");
            element.classList.add("valid-color-day");
        });
        isvalidday = true;
    }
    });


input_month.addEventListener("input", (e) => {

    const inputValue = parseInt(input_month.value);
    const fixedElements = document.querySelectorAll('.fixed-color-month');
    
    if ( inputValue < 1 || inputValue > 12 || isNaN(inputValue)  ) {
        const validElements = document.querySelectorAll('.valid-color-month');
        error_month.textContent = "Enter a valid date";
        isvalidmonth = false;
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-month");
            element.classList.add("error-color-month");
        });
        validElements.forEach(element => {
            element.classList.remove("valid-color-month");
            element.classList.add("error-color-month");
        });
    }else {
        error_month.textContent = "Check";
        const errorElements = document.querySelectorAll('.error-color-month');
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-month");
            element.classList.add("valid-color-month");
        });
        errorElements.forEach(element => {
            element.classList.remove("error-color-month");
            element.classList.add("valid-color-month");
        });
        isvalidmonth = true;
    }
    });

input_year.addEventListener("input", (e) => {
    const inputValue = parseInt(input_year.value);
    const fixedElements = document.querySelectorAll('.fixed-color-year');
    
    if ( inputValue < 0 || inputValue > 2024 || isNaN(inputValue)  ) {
        const validElements = document.querySelectorAll('.valid-color-year');
        error_year.textContent = "Enter a valid date";
        isvalidyear = false ; 
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-year");
            element.classList.add("error-color-year");
        });
        validElements.forEach(element => {
            element.classList.remove("valid-color-year");
            element.classList.add("error-color-year");
        });
    }else {
        error_year.textContent = "Check";
        const errorElements = document.querySelectorAll('.error-color-year');
        fixedElements.forEach(element => {
            element.classList.remove("fixed-color-year");
            element.classList.add("valid-color-year");
        });
        errorElements.forEach(element => {
            element.classList.remove("error-color-year");
            element.classList.add("valid-color-year");
        });
        isvalidyear = true ; 
    }
});

function actualformated(){
    var today = new Date();
    // Get the day of the month
    var dd = today.getDate();
    
    // Get the month (adding 1 because months are zero-based)
    var mm = today.getMonth() + 1;
    
    // Get the year
    var yyyy = today.getFullYear();
    
    var nowformated = [yyyy, mm, dd];
    return nowformated;
}

submit_btn.addEventListener('click',calculate);

function calculate(){
    var birth = [input_year.value, input_month.value, input_day.value];
    var naw = actualformated();
    var Diff_year = naw[0] - parseInt(birth[0]);
    var Diff_month = naw[1] - parseInt(birth[1]);
    var Diff_day = naw[2] - parseInt(birth[2]);
    if ( parseInt(birth[1])> naw[1] ) {
        Diff_year = Diff_year - 1;
        Diff_month = Diff_month + 12;
    }
    if ( Diff_day < 0 && Diff_month  !== 0   ) {
        Diff_day = Diff_day + 31;
        Diff_month = Diff_month -1 ;
    }    
    if ( Diff_month  === 0   ) {
        Diff_day = Diff_day + 30;
    }
    if ( (isvalidyear) && (isvalidday) && (isvalidmonth) ) {
        output_day.textContent = Diff_day ;
        output_mounth.textContent = Diff_month;
        output_year.textContent = Diff_year;
    }
};