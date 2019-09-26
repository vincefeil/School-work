input.onButtonPressed(Button.A, function () {
    A = 1
})
input.onButtonPressed(Button.B, function () {
    B = 1
})
let B = 0
let A = 0
basic.showString("Hello!")
basic.forever(function () {
    while (A == 1) {
        for (let index = 0; index <= 4; index++) {
            led.plot(Math.constrain(index, 0, 4), 2)
            basic.pause(100)
            led.unplot(Math.constrain(index, 0, 4), 2)
            basic.pause(100)
        }
        for (let index = 0; index <= 4; index++) {
            led.plot(2, Math.constrain(index, 0, 4))
            basic.pause(100)
            led.unplot(2, Math.constrain(index, 0, 4))
            basic.pause(100)
        }
    }
    while (B == 1) {
        for (let index = 0; index <= 4; index++) {
            led.plot(Math.constrain(index, 0, 4), Math.constrain(index, 0, 4))
            basic.pause(100)
            led.unplot(Math.constrain(index, 0, 4), Math.constrain(index, 0, 4))
            basic.pause(100)
        }
    }
})