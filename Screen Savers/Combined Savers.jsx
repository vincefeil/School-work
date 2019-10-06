let motion = 0
// set up variables for dot1
let xdot1 = 0
let ydot1 = 4
// set up variables for dot2
let xdot2 = 4
let ydot2 = 4
// initial display of variables
led.plot(xdot1, ydot1)
led.plot(xdot2, ydot2)

input.onButtonPressed(Button.B, function () {
    motion = 0

})

input.onButtonPressed(Button.A, function () {
    motion = 1
})
basic.forever(function () {

    for (let index1t = 0; index1t <= 3; index1t++) {

        if (motion == 1) {


            for (let index = 0; index <= 4; index++) {
                led.plot(0, index)
            }
            for (let index2 = 1; index2 <= 4; index2++) {
                led.plot(index2, 4)
            }
            for (let index3 = 3; index3 >= 0; index3 += -1) {
                led.plot(4, index3)
            }
            for (let index4 = 3; index4 >= 0; index4 += -1) {
                led.plot(index4, 0)
            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)

            for (let index5 = 1; index5 <= 3; index5++) {
                led.plot(1, index5)
            }
            for (let index6 = 2; index6 <= 3; index6++) {
                led.plot(index6, 3)
            }
            for (let index7 = 3; index7 >= 1; index7 += -1) {
                led.plot(3, index7)
            }
            for (let index8 = 3; index8 >= 1; index8 += -1) {
                led.plot(index8, 1)
            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            led.plot(2, 2)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)

            for (let index5 = 1; index5 <= 3; index5++) {
                led.plot(1, index5)
            }
            for (let index6 = 2; index6 <= 3; index6++) {
                led.plot(index6, 3)
            }
            for (let index7 = 3; index7 >= 1; index7 += -1) {
                led.plot(3, index7)
            }
            for (let index8 = 3; index8 >= 1; index8 += -1) {
                led.plot(index8, 1)
            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)

            for (let index = 0; index <= 4; index++) {
                led.plot(0, index)
            }
            for (let index2 = 1; index2 <= 4; index2++) {
                led.plot(index2, 4)
            }
            for (let index3 = 3; index3 >= 0; index3 += -1) {
                led.plot(4, index3)
            }
            for (let index4 = 3; index4 >= 0; index4 += -1) {
                led.plot(index4, 0)
            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)



            let blink = 100

            led.plotBrightness(0, 0, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(1, 0, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(2, 0, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(3, 0, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(4, 0, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(0, 1, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(1, 1, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(2, 1, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(3, 1, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(4, 1, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(0, 2, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(1, 2, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(2, 2, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(3, 2, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(4, 2, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(0, 3, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(1, 3, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(2, 3, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(3, 3, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(4, 3, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(0, 4, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(1, 4, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(2, 4, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(3, 4, Math.randomRange(0, 225))
            basic.pause(blink)
            led.plotBrightness(4, 4, Math.randomRange(0, 225))
            basic.pause(blink)
            basic.clearScreen()

            if (motion = 1) {
                if (xdot1 == 0) {

                    while (xdot1 < 4) {
                        led.unplot(xdot1, ydot1)
                        xdot1 += 1
                        ydot1 += -1
                        // initial display of variables
                        led.plot(xdot1, ydot1)
                        basic.pause(200)
                    }
                }
                if (xdot1 == 4) {
                    while (xdot1 > 0) {
                        led.unplot(xdot1, ydot1)
                        xdot1 += -1
                        ydot1 += 1
                        // initial display of variables
                        led.plot(xdot1, ydot1)
                        basic.pause(200)
                    }
                }
                if (xdot2 == 0) {

                    while (xdot2 < 4) {
                        led.unplot(xdot2, ydot2)
                        xdot2 += 1
                        ydot2 += 1
                        // initial display of variables
                        led.plot(xdot2, ydot2)
                        basic.pause(200)
                    }
                }
                if (xdot2 == 4) {
                    while (xdot2 > 0) {
                        led.unplot(xdot2, ydot2)
                        xdot2 += -1
                        ydot2 += -1
                        // initial display of variables
                        led.plot(xdot2, ydot2)
                        basic.pause(200)
                    }
                }
            }

        }
        basic.clearScreen()


    }




})
 