let NW = 0
let N = 0
let NE = 0
let E = 0
let SW = 0
let S = 0
let SE = 0
let W = 0
let C = 0
let A = 0
let time = 200

input.onButtonPressed(Button.A, function () {
    if (A == 0) {
        A = 1
    } else {
        A = 0
    }
    while (A == 1) {
        C = 225

        if (N == 0) {
            N = 255
        }
        basic.pause(time)
        N = 0

        if (NE == 0) {
            NE = 255
        }
        basic.pause(time)
        NE = 0

        if (E == 0) {
            E = 255
        }
        basic.pause(time)
        E = 0

        if (SE == 0) {
            SE = 255
        }
        basic.pause(time)
        SE = 0

        if (S == 0) {
            S = 255
        }
        basic.pause(time)
        S = 0

        if (SW == 0) {
            SW = 255
        }
        basic.pause(time)
        SW = 0

        if (W == 0) {
            W = 255
        }
        basic.pause(time)
        W = 0

        if (NW == 0) {
            NW = 255
        }
        basic.pause(time)
        NW = 0


    }
})

basic.forever(function () {

    basic.pause(200)
    led.plotBrightness(2, 2, C)

    led.plotBrightness(0, 0, NW)
    led.plotBrightness(1, 1, NW)

    led.plotBrightness(2, 0, N)
    led.plotBrightness(2, 1, N)

    led.plotBrightness(4, 0, NE)
    led.plotBrightness(3, 1, NE)

    led.plotBrightness(4, 2, E)
    led.plotBrightness(3, 2, E)

    led.plotBrightness(4, 4, SE)
    led.plotBrightness(3, 3, SE)

    led.plotBrightness(2, 4, S)
    led.plotBrightness(2, 3, S)

    led.plotBrightness(0, 4, SW)
    led.plotBrightness(1, 3, SW)

    led.plotBrightness(0, 2, W)
    led.plotBrightness(1, 2, W)

})
