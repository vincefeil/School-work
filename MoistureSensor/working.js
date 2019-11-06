function Average() {
    while (Cal1 == 6) {
        //Adds the three low readings taken from calibration and divides by three to get an average
        lowAverage = (lowReading1 + (lowReading2 + lowReading3)) / 3
        basic.showNumber(lowAverage)//Shows the value lowAverage
        serial.writeNumber(lowAverage)//Serial display of lowAverage
        //hiReading1 = 1
        //hiReading2 = 1
        //hiReading3 = 1
        //Adds the three hi readings taken from calibration and divides by three to get an average
        hiAverage = (hiReading1 + (hiReading2 + hiReading3)) / 3
        basic.showNumber(hiAverage)//Shows the value hiAverage
        serial.writeNumber(hiAverage)//Serial display of hiAverage

    }
}
input.onButtonPressed(Button.B, function () {
    Cal1 = 0
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
let Cal1 = 0
let lowReading3: number = 0
let lowReading2: number = 0
let lowReading1: number = 0
let hiReading3: number = 0
let hiReading2: number = 0
let hiReading1: number = 0
let hiAverage = 0
let lowAverage = 0
setup()

