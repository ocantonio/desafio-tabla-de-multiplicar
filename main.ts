input.onButtonPressed(Button.A, function () {
    num1 = Math.constrain(num1, 0, 10)
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num1 * num2)
    num1 = 0
    num2 = 0
})
input.onButtonPressed(Button.B, function () {
    num2 = Math.constrain(num2, 0, 10)
    num2 += 1
    basic.showNumber(num2)
})
let num2 = 0
let num1 = 0
basic.clearScreen()
num1 = 0
num2 = 0
basic.forever(function () {
    if (num1 == 10) {
        num1 = 0
        if (num2 == 10) {
            num2 = 0
        }
    }
})
