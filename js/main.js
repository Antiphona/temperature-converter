//** Convert Celsius to Fahrenheit */
document.querySelector('#convertC2F').addEventListener('click', convertC2F)

function convertC2F() {
    const c2F = document.querySelector('#c2FInput').value
    const c2FResult = c2F * 9 / 5 + 32

    document.querySelector('#c2FOutput').innerText = `${+parseFloat(c2FResult.toFixed(2))} °F`
}

//**Convert Fahrenheit to Celsius */
document.querySelector('#convertF2C').addEventListener('click', convertF2C)

function convertF2C() {
    const f2C = document.querySelector('#f2CInput').value
    const f2CResult = (f2C - 32) * 5 / 9

    document.querySelector('#f2COutput').innerText = `${+parseFloat(f2CResult.toFixed(2))} °C`
}