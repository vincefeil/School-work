function unlock () {
    lockCount = 0
    basic.showString("U")
    basic.pause(2000)
}
let lockCount = 0
lockCount = 0
basic.forever(function () {
    if (lockCount < 2000) {
        while (input.buttonIsPressed(Button.A)) {
            if (lockCount >= 2000) {
                unlock()
            } else {
                lockCount += 1
            }
        }
        basic.showString("L")
    }
})
