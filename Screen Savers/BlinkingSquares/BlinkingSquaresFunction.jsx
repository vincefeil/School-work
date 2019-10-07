function BlinkingSquares () {
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
let SquareTime = 0
SquareTime = 2000
