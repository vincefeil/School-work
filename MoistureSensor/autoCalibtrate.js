input.onButtonPressed(Button.A, function () {
    low1 = sensorReading
    basic.pause(100)
    low2 = sensorReading
    basic.pause(100)
    low3 = sensorReading
    basic.pause(100)
    low = [low1, low2, low3]
    lowDone = true
})
let low: number[] = []
let low3 = 0
let low2 = 0
let sensorReading = 0
let low1 = 0
let lowDone = false
lowDone = false
basic.forever(function () {
    if (lowDone) {
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
    sensorReading = pins.analogReadPin(AnalogPin.P0)
})
