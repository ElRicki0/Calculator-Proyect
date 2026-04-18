// ? Numbers Button
const BUTTON_1 = document.getElementById('Button1'),
    BUTTON_2 = document.getElementById('Button2'),
    BUTTON_3 = document.getElementById('Button3'),
    BUTTON_4 = document.getElementById('Button4'),
    BUTTON_5 = document.getElementById('Button5'),
    BUTTON_6 = document.getElementById('Button6'),
    BUTTON_7 = document.getElementById('Button7'),
    BUTTON_8 = document.getElementById('Button8'),
    BUTTON_9 = document.getElementById('Button9'),
    BUTTON_0 = document.getElementById('Button0')
// ?Actions Button
const BUTTON_PLUS = document.getElementById('ButtonPlus'),
    BUTTON_MINUS = document.getElementById('ButtonMinus'),
    BUTTON_SLASH = document.getElementById('ButtonSlash'),
    BUTTON_TIMES = document.getElementById('ButtonTimes'),
    BUTTON_EQUALS = document.getElementById('ButtonEqual'),
    BUTTON_TRASH = document.getElementById('ButtonTrash');
// ? value calculator  
const VALUE_CALCULATOR = document.getElementById('valueCalculator');

// ? calculator operations
let MATH_VALUE1,
    MATH_VALUE2,
    FINAL_VALUE,
    OPERATIONS = null;

BUTTON_TRASH.addEventListener('click', () => {
    VALUE_CALCULATOR.value = "";
    MATH_VALUE1 = 0;
    MATH_VALUE2 = 0;
});

BUTTON_1.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 1
});

BUTTON_2.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 2
});

BUTTON_3.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 3
});

BUTTON_4.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 4
});

BUTTON_5.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 5
});

BUTTON_6.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 6
});

BUTTON_7.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 7
});

BUTTON_8.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 8
});

BUTTON_9.addEventListener('click', () => {
    ClearInput();
    VALUE_CALCULATOR.value += 9
});

BUTTON_0.addEventListener('click', () => {
    VALUE_CALCULATOR.value += 0
});

BUTTON_PLUS.addEventListener('click', () => {
    MATH_VALUE1 = Number(VALUE_CALCULATOR.value);
    VALUE_CALCULATOR.value = "";
    OPERATIONS = "PLUS"
    BUTTON_MINUS.disabled = true;
    BUTTON_PLUS.disabled = true;
    BUTTON_SLASH.disabled = true;
    BUTTON_TIMES.disabled = true;
});

BUTTON_MINUS.addEventListener('click', () => {
    MATH_VALUE1 = Number(VALUE_CALCULATOR.value);
    VALUE_CALCULATOR.value = "";
    OPERATIONS = "MINUS"

});

BUTTON_SLASH.addEventListener('click', () => {
    MATH_VALUE1 = Number(VALUE_CALCULATOR.value);
    VALUE_CALCULATOR.value = "";
    OPERATIONS = "SLASH"

});

BUTTON_TIMES.addEventListener('click', () => {
    MATH_VALUE1 = Number(VALUE_CALCULATOR.value);
    VALUE_CALCULATOR.value = "";
    OPERATIONS = "TIMES"

});

BUTTON_EQUALS.addEventListener('click', () => {
    switch (OPERATIONS) {
        case "PLUS":
            MATH_VALUE2 = Number(VALUE_CALCULATOR.value);
            VALUE_CALCULATOR.value = MATH_VALUE1 + MATH_VALUE2;
            MATH_VALUE1 = 0;
            MATH_VALUE2 = 0;
            console.log('ADD operation')
            OPERATIONS = "EQUALS"
            BUTTON_MINUS.disabled = false;
            BUTTON_PLUS.disabled = false;
            BUTTON_SLASH.disabled = false;
            BUTTON_TIMES.disabled = false;
            break;
        case "MINUS":
            MATH_VALUE2 = Number(VALUE_CALCULATOR.value);
            VALUE_CALCULATOR.value = MATH_VALUE1 - MATH_VALUE2;
            MATH_VALUE1 = 0;
            MATH_VALUE2 = 0;
            console.log('MINUS OPERATION')
            OPERATIONS = "EQUALS"
            BUTTON_MINUS.disabled = false;
            BUTTON_PLUS.disabled = false;
            BUTTON_SLASH.disabled = false;
            BUTTON_TIMES.disabled = false;
            break;

        case "TIMES":
            MATH_VALUE2 = Number(VALUE_CALCULATOR.value);
            VALUE_CALCULATOR.value = MATH_VALUE1 * MATH_VALUE2;
            MATH_VALUE1 = 0;
            MATH_VALUE2 = 0;
            console.log('TIMES operation')
            OPERATIONS = "EQUALS"
            BUTTON_MINUS.disabled = false;
            BUTTON_PLUS.disabled = false;
            BUTTON_SLASH.disabled = false;
            BUTTON_TIMES.disabled = false;
            break;

        case "SLASH":
            MATH_VALUE2 = Number(VALUE_CALCULATOR.value);
            VALUE_CALCULATOR.value = MATH_VALUE1 / MATH_VALUE2;
            MATH_VALUE1 = 0;
            MATH_VALUE2 = 0;
            console.log('SLASH operation')
            OPERATIONS = "EQUALS"
            BUTTON_MINUS.disabled = false;
            BUTTON_PLUS.disabled = false;
            BUTTON_SLASH.disabled = false;
            BUTTON_TIMES.disabled = false;
            break;
        default:
            VALUE_CALCULATOR.value = "FATAL ERROR JAJA QUE PUSI"
            break;
    }
    MATH_VALUE2 = Number(VALUE_CALCULATOR.value);
    VALUE_CALCULATOR.value = MATH_VALUE1 + MATH_VALUE2;
});

const ClearInput = () => {
    if (OPERATIONS == 'EQUALS') {
        VALUE_CALCULATOR.value = ""
        OPERATIONS = null
    }
};