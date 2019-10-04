let NW = 0
let N = 255
let NE = 0
let E = 0
let SW = 0
let S = 0
let SE = 0
let W = 0
let A = false

input.onButtonPressed(Button.A, function(){
    if (true) {
        A = false
    } else {
        A = true
    }
})

basic.forever(function () {
    led.plotBrightness(2, 2, 255)

    led.plotBrightness(0, 0, NW)
    led.plotBrightness(1, 1, NW)

    led.plotBrightness(2, 0, N)
    led.plotBrightness(2, 1, N)

    led.plotBrightness(4, 0, NE)
    led.plotBrightness(3, 1, NE)

    led.plotBrightness(4, 2, E)
    led.plotBrightness(3, 2, E)

    led.plotBrightness(4, 4, SW)
    led.plotBrightness(3, 3, SW)

    led.plotBrightness(2, 4, S)
    led.plotBrightness(2, 3, S)

    led.plotBrightness(0, 4, SE)
    led.plotBrightness(1, 3, SE)

    led.plotBrightness(0, 2, W)
    led.plotBrightness(1, 2, W)

})
