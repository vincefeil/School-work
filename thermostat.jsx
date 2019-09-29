input.onButtonPressed(Button.A, function () {
    Des_Temp += 1
    basic.showString("" + Des_Temp)
})
input.onButtonPressed(Button.B, function () {
    Des_Temp += -1
    basic.showString("" + Des_Temp)
})
let Des_Temp = 0
Des_Temp = 22
basic.forever(function () {
    basic.showString("" + input.temperature())
    if (input.temperature() < Des_Temp) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showString("H")
        basic.pause(1000)
        basic.showString("H")
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (input.temperature() > Des_Temp) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("C")
        basic.pause(1000)
        basic.showString("C")
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    while (input.buttonIsPressed(Button.AB)) {
        basic.showString("" + Des_Temp)
    }
})
