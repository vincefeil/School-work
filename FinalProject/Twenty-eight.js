//pressing and releasing button A calls the function "arrowsI"
input.onButtonPressed(Button.A, function () {
    arrowsI()
})
//the function turns on and off select
function arrowsI() {
    while (ArrowTimeI > 0) {
        if (F == 1) {
            for (let xindex00 = 0; xindex00 <= 4; xindex00++) {
                led.plot(xindex00, 0)
                led.plot(xindex11, 1)
                led.plot(xindex22, 2)
                led.plot(xindex33, 3)
                led.plot(xindex44, 4)
                xindex11 += 1
                xindex22 += 1
                xindex33 += 1
                xindex44 += 1
                basic.pause(200)
                basic.clearScreen()
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
            ArrowTimeI += -500
        }
    }
    basic.clearScreen()
    xindex11 = 1
    xindex22 = 2
    xindex33 = 1
    ArrowTimeI = 5000
    F = 1
}

//turn three LEDs on and off in sequence
led.enable(true)//turn off on board display
pins.digitalWritePin(DigitalPin.P12, 0)//set all LEDs to off
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)//turn on first LED
    basic.pause(1000)//pause for 1/2 second
    pins.digitalWritePin(DigitalPin.P8, 1)//turn on second LED
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 1)//turn on third LED
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P16, 0)//turn off third LED
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 0)//turn off second LED
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P12, 0)//turn off first LED
    basic.pause(1000)

})
let xindex44 = 0
let F = 0
let ArrowTimeI = 0
let xindex33 = 0
let xindex22 = 0
let xindex11 = 0
let xindex022 = 0
xindex11 = 1
xindex22 = 2
xindex33 = 1
ArrowTimeI = 5000
F = 1
