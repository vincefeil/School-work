input.onButtonPressed(Button.B, function () {
    arrowTime = 0
    dotTime = 0
    dotTimeI = 0
    LineTime = 0
    SquareTime = 0
    time = 0
    ArrowTimeI = 0
    SquareTimeI = 0
    RandomDotTimeI = 0
    LineTimeI = 0
})
input.onButtonPressed(Button.A, function () {
    F = 1
    F2 = 0
    arrowTime = 2000
    dotTime = 2000
    LineTime = 2000
    SquareTime = 2000
    time = 2000
    SquareTimeI = 0
    dotTimeI = 0
    LineTimeI = 0
    ArrowTimeI = 0
    RandomDotTimeI = 0

    while (LineTime > 0) {
        if (F == 1) {
            C = 225
            if (N == 0) {
                N = 255
            }
            basic.pause(LineSpeed)
            N = 0
            if (NE == 0) {
                NE = 255
            }
            basic.pause(LineSpeed)
            NE = 0
            if (E == 0) {
                E = 255
            }
            basic.pause(LineSpeed)
            E = 0
            if (SE == 0) {
                SE = 255
            }
            basic.pause(LineSpeed)
            SE = 0
            if (S == 0) {
                S = 255
            }
            basic.pause(LineSpeed)
            S = 0
            if (SW == 0) {
                SW = 255
            }
            basic.pause(LineSpeed)
            SW = 0
            if (W == 0) {
                W = 255
            }
            basic.pause(LineSpeed)
            W = 0
            if (NW == 0) {
                NW = 255
            }
            basic.pause(LineSpeed)
            NW = 0
            LineTime += -500
        }
    }
    basic.clearScreen()
    C = 0
    bouncingDots()
    arrows()
    randomdots()
    BlinkingSquares()
})
function arrows() {
    while (arrowTime > 0) {
        for (let xindex0 = 0; xindex0 <= 4; xindex0++) {
            led.plot(xindex0, 0)
            led.plot(xindex1, 1)
            led.plot(xindex2, 2)
            led.plot(xindex3, 3)
            led.plot(xindex4, 4)
            xindex1 += 1
            xindex2 += 1
            xindex3 += 1
            xindex4 += 1
            basic.pause(200)
            basic.clearScreen()
            if (xindex1 > 4) {
                xindex1 = 0
            }
            if (xindex2 > 4) {
                xindex2 = 0
            }
            if (xindex3 > 4) {
                xindex3 = 0
            }
            if (xindex4 > 4) {
                xindex4 = 0
            }
        }
        arrowTime += -500
    }
}
function randomdots() {
    while (time > 0) {
        time += -500
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
    }
    basic.clearScreen()
}
function BlinkingSquares() {
    while (SquareTime > 0) {
        // this group plots the outside square pauses for 1/2
        // second and clears the screen
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
        // this group plots the middle square pauses for 1/2
        // second and clears the screen
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
        // this plots the inner led pauses for 1/2 second then
        // clears the screen
        led.plot(2, 2)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        // this repeats the second square to make it appear
        // the squares go in and then out
        for (let index52 = 1; index52 <= 3; index52++) {







            led.plot(1, index52)







        }
        for (let index62 = 2; index62 <= 3; index62++) {







            led.plot(index62, 3)







        }
        for (let index72 = 3; index72 >= 1; index72 += -1) {







            led.plot(3, index72)







        }
        for (let index82 = 3; index82 >= 1; index82 += -1) {







            led.plot(index82, 1)







        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        SquareTime += -500
    }
}
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
}
input.onGesture(Gesture.Shake, function () {
    F = 1
    arrowTime = 0
    dotTime = 0
    dotTimeI = 0
    LineTime = 0
    SquareTime = 0
    time = 0
    ArrowTimeI = 2000
    SquareTimeI = 0
    RandomDotTimeI = 0
    LineTimeI = 0
    arrowsI()
})
function bouncingDots() {
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
let xindex44 = 0
let xindex4 = 0
let NW = 0
let W = 0
let SW = 0
let S = 0
let SE = 0
let E = 0
let NE = 0
let N = 0
let C = 0
let SquareTimeI = 0
let ArrowTimeI = 0
let xindex33 = 0
let xindex22 = 0
let xindex11 = 0
let F = 0
let F2 = 0
let LineSpeed = 0
let LineTime = 0
let xdot1 = 0
let dotTime = 0
let ydot2 = 0
let xdot2 = 0
let ydot1 = 0
let time = 0
let blink = 0
let SquareTime = 0
let arrowTime = 0
let xindex3 = 0
let xindex2 = 0
let xindex1 = 0
let xindex02 = 0
let xindex022 = 0
xindex1 = 1
xindex2 = 2
xindex3 = 1
arrowTime = 2000
SquareTime = 2000
blink = 100
time = 2000
ydot1 = 4
// set up variables for dot2
xdot2 = 4
ydot2 = 4
dotTime = 2000
// initial display of variables
led.plot(xdot1, ydot1)
led.plot(xdot2, ydot2)
LineTime = 2000
LineSpeed = 200
F = 0
xindex11 = 1
xindex22 = 2
xindex33 = 1
ArrowTimeI = 5000
F = 0
SquareTimeI = 0
F = 0
basic.forever(function () {
    if (LineTime > 0) {
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
    }
    if (LineTimeI > 0) {
        basic.pause(200)
        led.plotBrightness(2, 2, CI)
        led.plotBrightness(0, 0, NWI)
        led.plotBrightness(1, 1, NWI)
        led.plotBrightness(2, 0, NI)
        led.plotBrightness(2, 1, NI)
        led.plotBrightness(4, 0, NEI)
        led.plotBrightness(3, 1, NEI)
        led.plotBrightness(4, 2, EI)
        led.plotBrightness(3, 2, EI)
        led.plotBrightness(4, 4, SE)
        led.plotBrightness(3, 3, SE)
        led.plotBrightness(2, 4, SI)
        led.plotBrightness(2, 3, SI)
        led.plotBrightness(0, 4, SWI)
        led.plotBrightness(1, 3, SWI)
        led.plotBrightness(0, 2, WI)
        led.plotBrightness(1, 2, WI)
    }

})
input.onGesture(Gesture.ScreenDown, function () {
    F = 1
    SquareTimeI = 2000
    SquareTime = 0
    LineTime = 0
    dotTimeI = 0
    BlinkingSquaresI()
})
function BlinkingSquaresI() {
    while (SquareTimeI > 0) {
        if (F == 1) {
            // this group plots the outside square pauses for 1/2
            // second and clears the screen
            for (let indexI = 0; indexI <= 4; indexI++) {
                led.plot(0, indexI)
            }
            for (let index2I = 1; index2I <= 4; index2I++) {



                led.plot(index2I, 4)



            }
            for (let index3I = 3; index3I >= 0; index3I += -1) {



                led.plot(4, index3I)



            }
            for (let index4I = 3; index4I >= 0; index4I += -1) {



                led.plot(index4I, 0)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this group plots the middle square pauses for 1/2
            // second and clears the screen
            for (let index5I = 1; index5I <= 3; index5I++) {



                led.plot(1, index5I)



            }
            for (let index6I = 2; index6I <= 3; index6I++) {



                led.plot(index6I, 3)



            }
            for (let index7I = 3; index7I >= 1; index7I += -1) {



                led.plot(3, index7I)



            }
            for (let index8I = 3; index8I >= 1; index8I += -1) {



                led.plot(index8I, 1)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this plots the inner led pauses for 1/2 second then
            // clears the screen
            led.plot(2, 2)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this repeats the second square to make it appear
            // the squares go in and then out
            for (let index52I = 1; index52I <= 3; index52I++) {



                led.plot(1, index52I)



            }
            for (let index62I = 2; index62I <= 3; index62I++) {



                led.plot(index62I, 3)



            }
            for (let index72 = 3; index72 >= 1; index72 += -1) {



                led.plot(3, index72)



            }
            for (let index82 = 3; index82 >= 1; index82 += -1) {



                led.plot(index82, 1)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            SquareTimeI += -500
        }
    }
    basic.clearScreen()
}


SquareTimeI = 2000
F = 0

input.onGesture(Gesture.TiltLeft, function () {
    F = 1
    dotTimeI = 2000
    arrowTime = 0
    dotTime = 0
    LineTime = 0
    SquareTime = 0
    time = 0
    ArrowTimeI = 0
    SquareTimeI = 0

    bouncingDotsI()
})
function bouncingDotsI() {
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
F = 0
ydot1I = 4
// set up variables for dot2
xdot2I = 4
ydot2I = 4
dotTimeI = 2000
// initial display of variables
led.plot(xdot1I, ydot1I)
led.plot(xdot2I, ydot2I)
input.onGesture(Gesture.TiltRight, function () {
    F = 1
    blinkI = 100
    RandomDotTimeI = 2000
    randomdotsI()
})
function randomdotsI() {
    while (RandomDotTimeI > 0) {
        if (F == 1) {
            RandomDotTimeI += -500
            led.plotBrightness(0, 0, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(1, 0, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(2, 0, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(3, 0, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(4, 0, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(0, 1, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(1, 1, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(2, 1, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(3, 1, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(4, 1, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(0, 2, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(1, 2, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(2, 2, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(3, 2, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(4, 2, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(0, 3, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(1, 3, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(2, 3, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(3, 3, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(4, 3, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(0, 4, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(1, 4, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(2, 4, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(3, 4, Math.randomRange(0, 225))
            basic.pause(blinkI)
            led.plotBrightness(4, 4, Math.randomRange(0, 225))
            basic.pause(blinkI)
        }
    }
    basic.clearScreen()
}
let RandomDotTimeI = 0
let blinkI = 0
F2 = 0
F = 0
blinkI = 100
RandomDotTimeI = 2000
let NWI = 0
let WI = 0
let SWI = 0
let SI = 0
let EI = 0
let NEI = 0
let NI = 0
let CI = 0
let LineSpeedI = 0
let LineTimeI = 0
LineTimeI = 2000
LineSpeedI = 200
input.onGesture(Gesture.ThreeG, function () {
    LineTimeI = 2000
    LineSpeedI = 200
    // arrowTime = 0 dotTime = 0 LineTime = 0 SquareTime =
    // 0 time = 0
    F = 1
    F2 = 1
    while (LineTimeI > 0) {
        if (F2 == 0) {
            LineTimeI = 0
        }
        if (F == 1) {
            CI = 225
            if (NI == 0) {
                NI = 255
            }
            basic.pause(LineSpeedI)
            NI = 0
            if (NEI == 0) {
                NEI = 255
            }
            basic.pause(LineSpeedI)
            NEI = 0
            if (EI == 0) {
                EI = 255
            }
            basic.pause(LineSpeedI)
            EI = 0
            if (SE == 0) {
                SE = 255
            }
            basic.pause(LineSpeedI)
            SE = 0
            if (SI == 0) {
                SI = 255
            }
            basic.pause(LineSpeedI)
            SI = 0
            if (SWI == 0) {
                SWI = 255
            }
            basic.pause(LineSpeedI)
            SWI = 0
            if (WI == 0) {
                WI = 255
            }
            basic.pause(LineSpeedI)
            WI = 0
            if (NWI == 0) {
                NWI = 255
            }
            basic.pause(LineSpeedI)
            NWI = 0
            LineTimeI += -500
        }
    }
    basic.clearScreen()
    CI = 0
})
