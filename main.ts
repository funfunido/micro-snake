let playerPosition = [0, 2];

let randomfood = [randint(0, 4,), randint(0, 4)];


if (randomfood === [playerPosition[0], playerPosition[1]]) {
    let randomfood = [randint(0, 4,), randint(0, 4)];

}


function startGame() {
    led.toggle(playerPosition[0], playerPosition[1]);
    led.toggle(randomfood[0], randomfood[1]);


}


startGame();