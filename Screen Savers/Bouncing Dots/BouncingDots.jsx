input.onButtonPressed(Button.A, function () {
    if (A) {
        A = false
    } else {
        A = true
    }
})
let A = false
let B = false
let AB = false
A = false
// set up variables for dot1
let xdot1 = 0
let ydot1 = 4
// set up variables for dot2
let xdot2 = 4
let ydot2 = 4
// initial display of variables
led.plot(xdot1, ydot1)
led.plot(xdot2, ydot2)
// sets up the funtions to run in the background
basic.forever(function () {
    while (A) {
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
})
