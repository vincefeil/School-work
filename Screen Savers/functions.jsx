let motion = 0
let blink = 0
input.onButtonPressed(Button.A, function () {
    blinkingSquare()
})
function blinkingSquare () {
    motion = 1
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
            for (let index9 = 0; index9 <= 4; index9++) {
                led.plot(0, index9)
            }
            for (let index22 = 1; index22 <= 4; index22++) {
                led.plot(index22, 4)
            }
for (let index32 = 3; index32 >= 0; index32 += -1) {
                led.plot(4, index32)
            }
for (let index42 = 3; index42 >= 0; index42 += -1) {
                led.plot(index42, 0)
            }
basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            blink = 100
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
}
input.onButtonPressed(Button.B, function () {
    motion = 0
})
