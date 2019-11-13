basic.forever(function () {
    let inValue = pins.i2cReadNumber(0x3D, NumberFormat.Int8LE, false)
    basic.showNumber(inValue)
    basic.showString("H")
}) 
