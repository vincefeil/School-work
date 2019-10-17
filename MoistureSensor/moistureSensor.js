input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.showNumber(moisture_reading)
    basic.pause(1000)
    basic.clearScreen()
})
