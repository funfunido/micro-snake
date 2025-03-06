//basic.showString("Micro:Snake")

let playerPosition/*: [number, number]*/ = [0, 2];
let randomfood/*: [number, number]*/ = [randint(0, 4), randint(0, 4)];



if (randomfood[0] === playerPosition[0] && randomfood[1] === playerPosition[1]) {
    randomfood = [randint(0, 4), randint(0, 4)];
}



function refreshScreen() {
    led.toggle(playerPosition[0], playerPosition[1]);
    led.toggle(randomfood[0], randomfood[1]);
}

refreshScreen();



input.onButtonPressed(Button.B, function () {
    playerPosition[0] = (playerPosition[0] + 1) /*% 5*/;
    refreshScreen();

});

//let exampleTuple: [number, number] = [5, 6]
//let value: number = (exampleTuple as any[])[0]