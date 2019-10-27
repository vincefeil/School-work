//on button A pressed and released turns on pin 12 for 1 second which turns on
//the sensor. pin 0 reads the sensor and writes the data into the variable
//moisture_reading. then pin 12 is turned off
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
})
//every 15 seconds it turns on pin 12 for 1 second which turns on
//the sensor. pin 0 reads the sensor and writes the data into the variable
//moisture_reading. then pin 12 is turned off
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
    basic.pause(15000)
})

