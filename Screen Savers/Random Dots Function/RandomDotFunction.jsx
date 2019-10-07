function randomdotsI () {
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
blinkI = 100
RandomDotTimeI = 2000

