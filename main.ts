basic.showString("Micro:Snake")


//Sets player position and a random food position
let playerPosition/*: [number, number]*/ = [0, 2];
let randomfood/*: [number, number]*/ = [randint(0, 4), randint(0, 4)];


// Makes sure the player position and random food can't be the same
if (randomfood[0] === playerPosition[0] && randomfood[1] === playerPosition[1]) {
    randomfood = [randint(0, 4), randint(0, 4)];
}


//Refreshes the screen based on the current playerPosition and food
function refreshScreen() {
    basic.clearScreen()
    led.toggle(playerPosition[0], playerPosition[1]);
    
    led.toggle(randomfood[0], randomfood[1]);
}


// starts game by refreshing screen, so it actually toggles the pixels
refreshScreen();


// up button functionality by changing the y by -1
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


// down button by changing the y by +1
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


// right button by changing the x by 1
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


// left button by changing the x by -1
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


//this is irrelevant
//let exampleTuple: [number, number] = [5, 6]
//let value: number = (exampleTuple as any[])[0]