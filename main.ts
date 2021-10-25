basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && (input.buttonIsPressed(Button.B) && input.temperature() > 25)) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Sad)
    }
})
