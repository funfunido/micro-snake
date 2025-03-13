basic.showString("Micro:Snake")

let playerPosition/*: [number, number]*/ = [0, 2];
let randomfood/*: [number, number]*/ = [randint(0, 4), randint(0, 4)];



if (randomfood[0] === playerPosition[0] && randomfood[1] === playerPosition[1]) {
    randomfood = [randint(0, 4), randint(0, 4)];
}



function refreshScreen() {
    basic.clearScreen()
    led.toggle(playerPosition[0], playerPosition[1]);
    
    led.toggle(randomfood[0], randomfood[1]);
}

refreshScreen();

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    if (playerPosition[1] === 0) {
        playerPosition[1] = 4;
        refreshScreen();
    }
    else {
        playerPosition[1] = (playerPosition[1] - 1);
        refreshScreen();
    }

})



input.onPinPressed(TouchPin.P2, function() {
    if (playerPosition[1] === 4) {
        playerPosition[1] = 0;
        refreshScreen();
    }
    else {
        playerPosition[1] = (playerPosition[1] + 1);
        refreshScreen();
    }

})
input.onButtonPressed(Button.B, function () {
    if (playerPosition[0] === 4) {
        playerPosition[0] = 0;
        refreshScreen();
    }
    else {
        playerPosition[0] = (playerPosition[0] + 1);
        refreshScreen();
    }
});



input.onButtonPressed(Button.A, function () {
    if (playerPosition[0] === 0) {
        playerPosition[0] = 4;
        refreshScreen();
    }
    else {
        playerPosition[0] = (playerPosition[0] - 1);
        refreshScreen();
    }
});

//let exampleTuple: [number, number] = [5, 6]
//let value: number = (exampleTuple as any[])[0]