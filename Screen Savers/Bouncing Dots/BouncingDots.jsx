function bouncingDots () {
    while (dotTime > 0) {
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
        dotTime += -500
    }
}
let xdot1 = 0
let dotTime = 0
let ydot2 = 0
let xdot2 = 0
let ydot1 = 0
ydot1 = 4
// set up variables for dot2
xdot2 = 4
ydot2 = 4
dotTime = 2000
// initial display of variables
led.plot(xdot1, ydot1)
led.plot(xdot2, ydot2)
