//pressing and releasing button A calls the function "arrowsI"
input.onButtonPressed(Button.A, function () {
    arrowsI()
})
//the function turns on and off select making it look like arrows are crossing the screen
function arrowsI() {
    while (ArrowTimeI > 0) { //while function is used as a timer when the variable ArrowTimeI reaches 0 it exits the function
        
            for (let xindex00 = 0; xindex00 <= 4; xindex00++) { //using the for loop to set up limits on the top row of the LEDs. This 
                                                                //makes it start over on the left when it reaches the right side of display
                led.plot(xindex00, 0)//using plot and Variables to move the arrows accross the screen. The Y value is constant position
                led.plot(xindex11, 1)//is determined by the X variable
                led.plot(xindex22, 2)
                led.plot(xindex33, 3)
                led.plot(xindex44, 4)
                xindex11 += 1// adding 1 to the x variable makes the dots change posotion from left to right
                xindex22 += 1
                xindex33 += 1
                xindex44 += 1
                basic.pause(200)//pause to let user see the results
                basic.clearScreen()//clear screen removes the previous plots. if not done the screen would fill up and not look like
                                    //moving arrows
                //these if statements track the movement of the four lower rows and reset the variables to 0 when the reach the last column
                if (xindex11 > 4) {
                    xindex11 = 0
                }
                if (xindex22 > 4) {
                    xindex22 = 0
                }
                if (xindex33 > 4) {
                    xindex33 = 0
                }
                if (xindex44 > 4) {
                    xindex44 = 0
                }
            }
            ArrowTimeI += -500//subtracts 500ms from the timing variable
        
    }
    basic.clearScreen()//clears the screen at the end of the running time
    //resets the variables so the function can start again when the A button is pressed.
    xindex11 = 1
    xindex22 = 2
    xindex33 = 1
    ArrowTimeI = 5000
    
}

//turn three LEDs on and off in sequence
led.enable(true)//turn off on board display
pins.digitalWritePin(DigitalPin.P12, 0)//set all LEDs to off
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)//turn on first LED
    basic.pause(500)//pause for 1/2 second
    pins.digitalWritePin(DigitalPin.P8, 1)//turn on second LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P16, 1)//turn on third LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P16, 0)//turn off third LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)//turn off second LED
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P12, 0)//turn off first LED
    basic.pause(500)

})
let xindex44: number = 0
let ArrowTimeI: number = 0
let xindex33: number = 0
let xindex22: number = 0
let xindex11: number = 0
let xindex022: number = 0
xindex11 = 1
xindex22 = 2
xindex33 = 1
ArrowTimeI = 5000

