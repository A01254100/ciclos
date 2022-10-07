input.onButtonPressed(Button.A, function () {
    for (let Contador = 0; Contador <= 10; Contador++) {
        basic.showNumber(Contador)
    }
    Caras()
})
input.onButtonPressed(Button.AB, function () {
    Contador = 1
    while (Contador <= 10) {
        basic.showNumber(Contador)
        Contador += 2
    }
    Caras()
})
input.onButtonPressed(Button.B, function () {
    Contador = 2
    while (Contador <= 10) {
        basic.showNumber(Contador)
        Contador += 2
    }
    Caras()
})
function Caras () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
let Contador = 0
let Aleatorio = randint(5, 10)
basic.showNumber(Aleatorio)
for (let Contador = 0; Contador <= Aleatorio; Contador++) {
    basic.showNumber(Aleatorio)
    for (let index = 0; index < Contador; index++) {
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
