let moisture_reading: number = 0
// bar gragh display function
function display () {
    // if takes the value in moisture_reading, remaps it
    // to 0-4, rounds to a whole number then compairs it
    // to an integer and displays the corresponding bar
    // graph if it equals 0 it clears the screen
    if (Math.round(Math.map(moisture_reading, 0, 815, 0, 4)) == 4) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 815, 0, 4)) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 815, 0, 4)) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 815, 0, 4)) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
    } else {
        basic.clearScreen()
    }
}
// on button A pressed and released turns on pin 12
// for 1 second which turns on the sensor. pin 0 reads
// the sensor and writes the data into the variable
// moisture_reading. then pin 12 is turned off
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
})
// every 15 seconds it turns on pin 12 for 1 second
// which turns on the sensor. pin 0 reads the sensor
// and writes the data into the variable
// moisture_reading. then pin 12 is turned off
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
    basic.pause(2000)
    serial.writeNumber(moisture_reading)//sends data to serial terminal for calibration reading
})
