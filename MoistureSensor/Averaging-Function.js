function Average() {
    let lowReading3 = 0
    let lowReading2 = 0
    let lowReading1 = 0
    lowAverage = (lowReading1 + (lowReading2 + lowReading3)) / 3
    basic.showNumber(lowAverage)
    serial.writeNumber(lowAverage)
    hiReading1 = 1
    hiReading2 = 1
    hiReading3 = 1
    hiAverage = (hiReading1 + (hiReading2 + hiReading3)) / 3
    basic.showNumber(hiAverage)
    serial.writeNumber(hiAverage)
}
let hiAverage = 0
let hiReading3 = 0
let hiReading2 = 0
let hiReading1 = 0
let lowAverage = 0
Average()
basic.clearScreen()
