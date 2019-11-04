//Lights an LED on a bread board and on the Micro-Bit
//initial variable and pin setup
let buttonPressed = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    
    if (pins.analogReadPin(AnalogPin.P0) > 700) {
        if (buttonPressed == 0) {
            buttonPressed += 1
            if (buttonPressed == 1) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                led.plot(2, 2)
            }
        }
    } else {
        if (buttonPressed == 1) {
            buttonPressed += -1
            if (buttonPressed == 0) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                led.unplot(2, 2)
            }
        }
    }
})

