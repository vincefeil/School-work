function Average() {
    
    //Adds the three low readings taken from setup and divides by three to get an average
    lowAverage = (lowReading1 + (lowReading2 + lowReading3)) / 3
    //Adds the three hi readings taken from setup and divides by three to get an average
    hiAverage = (hiReading1 + (hiReading2 + hiReading3)) / 3
}

//Pressing A and B together restarts calibration
input.onButtonPressed(Button.AB, function () {
    Cal1 = 0
    setup()
})
//setup function has the user take three low readings and three high readings and places them in six veriables
function setup() {
    while (Cal1 < 6) {//Cal1 tracks the setup routine. if less than 6 it is not complete and the fuction continues to run
        if (Cal1 == 0) {//executes the following if Cal1 = 0
            if (input.buttonIsPressed(Button.A)) {//executes the following if button A is pressed
                Cal1 = 1//changes Cal1 to = 1
                pins.digitalWritePin(DigitalPin.P12, 1)//Turns on the moisture sensor connected to pin 12
                lowReading1 = pins.analogReadPin(AnalogPin.P0)//takes a reading from pin o and stores it in lowReading1 variable.
                basic.showNumber(1)//shows the number 1 to tell the user it has taken the first low reading
                pins.digitalWritePin(DigitalPin.P12, 0)//turns off the moisture sensor
                basic.pause(1000)//pauses for 1 second so the user can see the display
                basic.clearScreen()//clears the screen for the next display
            }
            //shows the down arrow telling the user it is waiting to take a low reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 1) {//executes the following if Cal1 = 1
            if (input.buttonIsPressed(Button.A)) {//executes the following if button A is pressed
                Cal1 = 2//changes Cal1 to = 2
                pins.digitalWritePin(DigitalPin.P12, 1)//Turns on the moisture sensor connected to pin 12
                lowReading2 = pins.analogReadPin(AnalogPin.P0)//takes a reading from pin o and stores it in lowReading2 variable.
                basic.showNumber(2)//shows the number 2 to tell the user it has taken the second low reading
                pins.digitalWritePin(DigitalPin.P12, 0)//turns off the moisture sensor
                basic.pause(1000)//pauses for 1 second so the user can see the display
                basic.clearScreen()//clears the screen for the next display
            }
            //shows the down arrow telling the user it is waiting to take a low reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 2) { //executes the following if Cal1 = 2
            if (input.buttonIsPressed(Button.A)) { //executes the following if button A is pressed
                Cal1 = 3 //changes Cal1 to = 3
                pins.digitalWritePin(DigitalPin.P12, 1) //Turns on the moisture sensor connected to pin 12
                lowReading3 = pins.analogReadPin(AnalogPin.P0) //takes a reading from pin o and stores it in lowReading3 variable.
                basic.showNumber(3) //shows the number 3 to tell the user it has taken the third low reading
                pins.digitalWritePin(DigitalPin.P12, 0) //turns off the moisture sensor
                basic.pause(1000) //pauses for 1 second so the user can see the display
                basic.clearScreen() //clears the screen for the next display
            }
            //shows the down arrow telling the user it is waiting to take a low reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 3) { //executes the following if Cal1 = 3
            if (input.buttonIsPressed(Button.A)) { //executes the following if button A is pressed
                Cal1 = 4 //changes Cal1 to = 4
                pins.digitalWritePin(DigitalPin.P12, 1) //Turns on the moisture sensor connected to pin 12
                hiReading1 = pins.analogReadPin(AnalogPin.P0) //takes a reading from pin o and stores it in hiReading1 variable.
                basic.showNumber(1) //shows the number 1 to tell the user it has taken the first high reading
                pins.digitalWritePin(DigitalPin.P12, 0) //turns off the moisture sensor
                basic.pause(1000) //pauses for 1 second so the user can see the display
                basic.clearScreen() //clears the screen for the next display
            }
            //shows the up arrow telling the user it is waiting to take a high reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 4) { //executes the following if Cal1 = 4
            if (input.buttonIsPressed(Button.A)) { //executes the following if button A is pressed
                Cal1 = 5 //changes Cal1 to = 5
                pins.digitalWritePin(DigitalPin.P12, 1) //Turns on the moisture sensor connected to pin 12
                hiReading2 = pins.analogReadPin(AnalogPin.P0) //takes a reading from pin o and stores it in hiReading2 variable.
                basic.showNumber(2) //shows the number 2 to tell the user it has taken the second high reading
                pins.digitalWritePin(DigitalPin.P12, 0) //turns off the moisture sensor
                basic.pause(1000) //pauses for 1 second so the user can see the display
                basic.clearScreen() //clears the screen for the next display
            }
            //shows the up arrow telling the user it is waiting to take a high reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 5) { //executes the following if Cal1 = 5
            if (input.buttonIsPressed(Button.A)) { //executes the following if button A is pressed
                Cal1 = 6 //changes Cal1 to = 6
                pins.digitalWritePin(DigitalPin.P12, 1) //Turns on the moisture sensor connected to pin 12
                hiReading3 = pins.analogReadPin(AnalogPin.P0) //takes a reading from pin o and stores it in hiReading2 variable.
                basic.showNumber(3) //shows the number 3 to tell the user it has taken the third high reading
                pins.digitalWritePin(DigitalPin.P12, 0) //turns off the moisture sensor
                basic.pause(1000) //pauses for 1 second so the user can see the display
                basic.clearScreen()//clears the screen for the next display
            }
            //shows the up arrow telling the user it is waiting to take a high reading. User must press A to activate.
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 6) { //executes the following if Cal1 = 6
            basic.showString("Calibration Done") //Displays Calibration done 
            Average() //Calls the averaging function
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
// moisture_reading. then pin 12 is turned off and the display function is called
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
})
// every 2 seconds it turns on pin 12 for 1 second
// which turns on the sensor. pin 0 reads the sensor
// and writes the data into the variable
// moisture_reading. then pin 12 is turned off and the display function is called
basic.forever(function () {
    while (Cal1 == 6) {
        //basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(1000)
        moisture_reading = pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        display()
        basic.pause(2000)
        //serial.writeNumber(moisture_reading)
    }

})
//setting up variables
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
//calling setup function to do initial calibration. 
setup()


