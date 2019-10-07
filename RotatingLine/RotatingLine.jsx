input.onGesture(Gesture.TiltRight, function () {
    LineTimeI = 2000
    LineSpeedI = 200
    //arrowTime = 0 
    //dotTime = 0 
    //LineTime = 0 
    //SquareTime =
    // 0 time = 0
    F = 1
    while (LineTimeI > 0) {
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
input.onButtonPressed(Button.B, function () {
    // arrowTime = 0 dotTime = 0
    LineTimeI = 0
})
let NWI = 0
let WI = 0
let SWI = 0
let SI = 0
let SE = 0
let EI = 0
let NEI = 0
let NI = 0
let CI = 0
let F = 0
let LineSpeedI = 0
let LineTimeI = 0
LineTimeI = 2000
LineSpeedI = 200

basic.forever(function () {
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
})
