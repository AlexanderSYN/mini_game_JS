let images = ["svg/dice-01.svg",
              "svg/dice-02.svg",
              "svg/dice-03.svg",
              "svg/dice-04.svg",
              "svg/dice-05.svg",
              "svg/dice-06.svg"];
let dice = document.querySelectorAll("img");

var money = 1000;
var game;
var chancev;
var summ;

var donate = document.getElementById('donate');
donate.addEventListener('click', function() {
    money += 1000;
    document.querySelector('#money').innerHTML = money;
});

document.querySelector("#money").innerHTML = money;


//game
function roll(sum) {
    var sum = document.getElementById('sum').value;
    if (chancev == true) {
        chance(summ);
    } else {
    if (sum <= money) {
        dice.forEach(function(die) {
            die.classList.add("shake");
        });
        setTimeout(function() {
            dice.forEach(function(die) {
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor((Math.random() * 6));
            let dieTwoValue = Math.floor((Math.random() * 6));
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    
            document.querySelector("#total").innerHTML = "Выпало " + ((dieOneValue + 1) + (dieTwoValue + 1));

            game = (dieOneValue + 1) + (dieTwoValue + 1);
            if (game == 7 || game == 11) {
                money -= sum;
                document.querySelector("#money").innerHTML = money;
                var won = sum * 2.2;
                win = parseFloat(won.toFixed(4));
                document.querySelector("#game").innerHTML = "Вы выйграли " + win;
                money += sum * 2.2;
                document.querySelector("#money").innerHTML = money;
            } else if (game == 2 || game == 3 || game == 12) {
                money -= sum;
                document.querySelector("#game").innerHTML = "Вы проиграли";
                document.querySelector("#money").innerHTML = money;
            } else {
                summ = sum;
                document.querySelector("#game").innerHTML = "Шанс";
                chancev = true;
            }   
        },
        1000
        );
    } else {
        alert("Недостаточно средств");
    }
    }
    
}

//chance 
function chance(summ) {
    var sum = document.getElementById('sum').value;

        dice.forEach(function(die) {
            die.classList.add("shake");
        });
        setTimeout(function() {
            dice.forEach(function(die) {
                die.classList.remove("shake");
            });
            let dieOneValue = Math.floor((Math.random() * 6));
            let dieTwoValue = Math.floor((Math.random() * 6));
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    
            document.querySelector("#total").innerHTML = "Выпало " + ((dieOneValue + 1) + (dieTwoValue + 1));

            game = (dieOneValue + 1) + (dieTwoValue + 1);
            
            if (game == 4 || game == 10) {
                won = summ * 3.2;
                document.querySelector("#game").innerHTML = "Вы выйграли " + won;
                money += won;
                document.querySelector("#money").innerHTML = money;
            } else if (game == 5 || game == 9) {
                won = summ * 3;
                document.querySelector("#game").innerHTML = "Вы выйграли " + won;
                money += won;
                document.querySelector("#money").innerHTML = money;
            } else if (game == 6 || game == 8) {
                won = summ * 2.5;
                document.querySelector("#game").innerHTML = "Вы выйграли " + won;
                money += won;
                document.querySelector("#money").innerHTML = money;
            } else if (game == 7) {
                document.querySelector("#game").innerHTML = "Вы проиграли";
                money -= summ;
                document.querySelector("#money").innerHTML = money;
            } else {
                won = summ * 2.2;
                document.querySelector("#game").innerHTML = "Вы выйграли " + won;
                money += won;
                document.querySelector("#money").innerHTML = money;
            }
    
        },
        1000
        );

    chancev = false;
}

//started
function roll2() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor((Math.random() * 6));
        let dieTwoValue = Math.floor((Math.random() * 6));
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        document.querySelector("#total").innerHTML = "Выпало " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
    1000
    );
}
roll2();