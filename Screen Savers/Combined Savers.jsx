input.onButtonPressed(Button.A, function () {
    A = 1
    F = 1
})
input.onButtonPressed(Button.B, function () {
    A = 2
})
let F = 0
let A = 0
A = 0
F = 0
basic.forever(function () {
    if (F == 1) {
        if (A == 1) {
            basic.showNumber(1)
        } else if (A == 2) {
            for (let index2t = 0; index2t <= 1; index2t++) {
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
            }
            A = 0
        } else {
            basic.showNumber(0)
        }
    }
})
