input.onGesture(Gesture.TiltLeft, function () {
    F = 1
    bouncingDots()
})
function bouncingDots () {
    while (dotTimeI > 0) {
        if (F == 1) {
            if (xdot1I == 0) {
                while (xdot1I < 4) {
                    led.unplot(xdot1I, ydot1I)
                    xdot1I += 1
                    ydot1I += -1
                    // initial display of variables
                    led.plot(xdot1I, ydot1I)
                    basic.pause(200)
                }
            }
            if (xdot1I == 4) {
                while (xdot1I > 0) {
                    led.unplot(xdot1I, ydot1I)
                    xdot1I += -1
                    ydot1I += 1
                    // initial display of variables
                    led.plot(xdot1I, ydot1I)
                    basic.pause(200)
                }
            }
            if (xdot2I == 0) {
                while (xdot2I < 4) {
                    led.unplot(xdot2I, ydot2I)
                    xdot2I += 1
                    ydot2I += 1
                    // initial display of variables
                    led.plot(xdot2I, ydot2I)
                    basic.pause(200)
                }
            }
            if (xdot2I == 4) {
                while (xdot2I > 0) {
                    led.unplot(xdot2I, ydot2I)
                    xdot2I += -1
                    ydot2I += -1
                    // initial display of variables
                    led.plot(xdot2I, ydot2I)
                    basic.pause(200)
                }
            }
            dotTimeI += -500
        }
    }
    basic.clearScreen()
}
let xdot1I = 0
let dotTimeI = 0
let ydot2I = 0
let xdot2I = 0
let ydot1I = 0
let F = 0
F = 0
ydot1I = 4
// set up variables for dot2
xdot2I = 4
ydot2I = 4
dotTimeI = 2000
// initial display of variables
led.plot(xdot1I, ydot1I)
led.plot(xdot2I, ydot2I)
