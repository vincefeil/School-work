function arrows () {
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
let xindex4 = 0
let arrowTime = 0
let xindex3 = 0
let xindex2 = 0
let xindex1 = 0
let xindex02 = 0
xindex1 = 1
xindex2 = 2
xindex3 = 1
arrowTime = 2000
