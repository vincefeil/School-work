basic.forever(function () {
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

})
