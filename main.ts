let randomfood = [randint(0, 4,), randint(0, 4)];
    
    
    if (randomfood === [0,2]) {
        let randomfood = [randint(0, 4,), randint(0, 4)];

    }


function startGame() {
led.toggle(0,2);
led.toggle(randomfood[0], randomfood[1]);


}


startGame();