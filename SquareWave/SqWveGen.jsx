//set a variable frequ to vary the frequency of the wave out 
//on start 500ms
let frequ = 0
frequ = 500

//set pin0 low for time frequ then high for time frequ
//do it for ever
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(frequ)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(frequ)
})

//when A and B are pressed show the value of frequ
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(frequ / 100)
})

//when A is pressed increase frequ by 100ms
input.onButtonPressed(Button.A, function () {
    frequ += 100
})

//when B is pressed decrease frequ by 100ms
input.onButtonPressed(Button.B, function () {
    frequ += -100
})