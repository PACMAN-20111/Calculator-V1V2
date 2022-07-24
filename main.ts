input.onButtonPressed(Button.A, function () {
    _1 += 1
})
input.onButtonPressed(Button.AB, function () {
    _1 = 0
})
input.onButtonPressed(Button.B, function () {
    _1 += -1
})
let _1 = 0
_1 = 0
basic.forever(function () {
    basic.showNumber(_1)
})
