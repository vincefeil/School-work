function Average() {
    //while (Cal1 == 6) {
    //Adds the three low readings taken from calibration and divides by three to get an average
    lowAverage = (lowReading1 + (lowReading2 + lowReading3)) / 3
    //basic.showNumber(lowAverage)//Shows the value lowAverage
    serial.writeNumber(lowAverage)//Serial display of lowAverage
    //hiReading1 = 1
    //hiReading2 = 1
    //hiReading3 = 1
    //Adds the three hi readings taken from calibration and divides by three to get an average
    hiAverage = (hiReading1 + (hiReading2 + hiReading3)) / 3
    //basic.showNumber(hiAverage)//Shows the value hiAverage
    serial.writeNumber(hiAverage)//Serial display of hiAverage
    //basic.clearScreen()

}
//}
input.onButtonPressed(Button.B, function () {
    Cal1 = 0
    setup()
})
function setup() {
    while (Cal1 < 6) {
        if (Cal1 == 0) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 1
                pins.digitalWritePin(DigitalPin.P12, 1)
                lowReading1 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(1)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 1) {
            if (Cal1) {
                Cal1 = 2
                pins.digitalWritePin(DigitalPin.P12, 1)
                lowReading2 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(2)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 2) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 3
                pins.digitalWritePin(DigitalPin.P12, 1)
                lowReading3 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(3)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 3) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 4
                pins.digitalWritePin(DigitalPin.P12, 1)
                hiReading1 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(1)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 4) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 5
                pins.digitalWritePin(DigitalPin.P12, 1)
                hiReading2 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(2)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 5) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 6
                pins.digitalWritePin(DigitalPin.P12, 1)
                hiReading3 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(3)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 6) {
            basic.showString("Calibration Done")
            Average()
        }
    }
}
// bar gragh display function
function display() {
    // if takes the value in moisture_reading, remaps it
    // to 0-4, rounds to a whole number then compairs it
    // to an integer and displays the corresponding bar
    // graph if it equals 0 it clears the screen
    if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 4) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 1) {
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
    basic.pause(15000)
    serial.writeNumber(moisture_reading)
})
let Cal1 = 0
let lowReading3: number = 0
let lowReading2: number = 0
let lowReading1: number = 0
let hiReading3: number = 0
let hiReading2: number = 0
let hiReading1: number = 0
let hiAverage: number = 0
let lowAverage: number = 0
let moisture_reading: number = 0
setup()

