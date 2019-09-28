input.onGesture(Gesture.Shake, function () {
    coinAheads = Math.randomBoolean()
    coinBheads = Math.randomBoolean()
    if (coinAheads == coinBheads) {
        playerAscore += 1
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            `)
        basic.pause(100)
    } else {
        playerBscore += 1
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
let coinBheads = false
let coinAheads = false
coinAheads = false
coinBheads = false
let playerAscore = 0
let playerBscore = 0
basic.showLeds(`
    . # . . .
    # # # . .
    . # . # .
    . . # # #
    . . . # .
    `)
