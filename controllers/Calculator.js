// ?Actions Button
const BUTTON_PLUS = document.getElementById('ButtonPlus'),
    BUTTON_MINUS = document.getElementById('ButtonMinus'),
    BUTTON_SLASH = document.getElementById('ButtonSlash'),
    BUTTON_TIMES = document.getElementById('ButtonTimes'),
    BUTTON_EQUALS = document.getElementById('ButtonEqual'),
    BUTTON_DELETE = document.getElementById('ButtonDelete'),
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

BUTTON_DELETE.addEventListener('click', ()=>{
    VALUE_CALCULATOR.value = input.value.slice(0, -1);
});

const addValue = (value, typeAct) => {
    VALUE_CALCULATOR.value += (value);
    OPERATIONS = 'ACTION';
    stateInput(typeAct);
}

const stateInput = (typeAct) => {
    switch (typeAct) {
        case 'ACTION':
            BUTTON_MINUS.disabled = true;
            BUTTON_PLUS.disabled = true;
            BUTTON_SLASH.disabled = true;
            BUTTON_TIMES.disabled = true;
            break;
        case 'NUMBER':
            BUTTON_MINUS.disabled = false;
            BUTTON_PLUS.disabled = false;
            BUTTON_SLASH.disabled = false;
            BUTTON_TIMES.disabled = false;
            break;
        default:
            break;
    }
}

const input = VALUE_CALCULATOR;

function procesar() {
    const r = calcularOperacion(input.value);

    if (r.error) {
        console.error(r.error);
        input.value = r.error;
    } else {
        input.value = r.resultado;
    }
}


function calcularOperacion(input) {
    const expresion = input.trim();

    // 1. Validar caracteres permitidos
    if (!/^[0-9+\-*/().\s]+$/.test(expresion)) {
        return { error: "Caracteres no permitidos" };
    }

    // 2. Validar que no haya operadores duplicados
    if (/[\+\-\*\/]{2,}/.test(expresion)) {
        return { error: "Sintaxis inválida: operadores repetidos" };
    }

    // 3. Validar que no empiece o termine con operador
    if (/^[+\/*]/.test(expresion) || /[+\-*/]$/.test(expresion)) {
        return { error: "Sintaxis inválida al inicio o final" };
    }

    // 4. Intentar evaluar de forma segura
    try {
        const resultado = Function(`"use strict"; return (${expresion})`)();
        if (isNaN(resultado)) return { error: "Operación inválida" };
        return { resultado };
    } catch (e) {
        return { error: "Error en la sintaxis del problema" };
    }
}