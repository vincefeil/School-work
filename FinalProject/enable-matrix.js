// turn three LEDs and the center LED in the matrix on and off in sequence
led.enable(true)//enables the LED matrix to display something
//set all GPIO pins to 0 start with all external LEDs off
pins.digitalWritePin(DigitalPin.P12, 0)//GPIO P12
pins.digitalWritePin(DigitalPin.P8, 0)//GPIO P8
pins.digitalWritePin(DigitalPin.P16, 0)//GPOI P16
//run the following code for ever
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)//turns on the LED conected to P12
    basic.pause(500)//pause for 500ms
    pins.digitalWritePin(DigitalPin.P8, 1)//turns on the LED conected to P8
    basic.pause(500)//pause for 500ms
    pins.digitalWritePin(DigitalPin.P16, 1)//turns on the LED conected to P16
    basic.pause(500)//pause for 500ms
    pins.digitalWritePin(DigitalPin.P16, 0)//turns on the LED conected to P12
    basic.pause(500)//pause for 500ms
    pins.digitalWritePin(DigitalPin.P8, 0)//turns on the LED conected to P8
    basic.pause(500)//pause for 500ms
    pins.digitalWritePin(DigitalPin.P12, 0)//turns on the LED conected to P16
    basic.pause(500)//pause for 500ms
    led.plot(2, 2)//turn on the center LED in the matrix
    basic.pause(500)//pause for 500ms
    led.unplot(2, 2)//turn off the center LED
})
