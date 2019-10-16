/*
Name: Jaden Moler
Date created: 10/15/19
Last revised: 10/16/19
*/

var diceSides = 6;
var document = "index.html";

//Rolls the dice. Dice value can be changed with diceSides
function diceRoll(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
}

//validates if the user has entered a value that is greater than 1 and is a number
function validate(startingAmount)
{
    if(startingAmount <= 0 && !isNaN(startingAmount))
        {
            return false;
        }
    else
        {
            return true;
        }
}

/* exported startGame */
function startGame() {
    
    var totalMoney, starting, highestMoney,
        rollsAtHighestMoney, currentRoll,
        rollOne, rollTwo, result;
    
    starting = document.getElementById("Bet").value;
    
    if(validate(starting))
    {
        //remove error message if there is one
        document.getElementById("errorBet").style.display = "none";
        
        //This is to provide information if the user doesn't win a single round
        rollsAtHighestMoney = currentRoll = 0;
        totalMoney = highestMoney = starting;
        totalMoney = Number(totalMoney);
    
        //Continue playing until the user has 0 dollars
        //If the result is equal to seven then add four dollars to users totalMoney
        //  Then check if the totalMoney is higher than the current highest amount total
        //  If the total is higher overide highestMoney with totalMoney and record the roll count which it happened
        //Else the user lost and remove 1 dollar from totalMoney
        while (totalMoney >= 1) {
            currentRoll += 1;
          
            rollOne = diceRoll(diceSides);
            rollTwo = diceRoll(diceSides);
            result = rollOne + rollTwo;
        
            if (result === 7) {
                totalMoney = totalMoney + 4;
            
                if (totalMoney > highestMoney) {
                    highestMoney = totalMoney;
                    rollsAtHighestMoney = currentRoll;
                }
            } else {
                totalMoney -= 1;
            }
        
        }
    
        //Display the results table and the results of the game in table
        document.getElementById("results").style.display = "block";
    
        document.getElementById("startingBet").innerHTML = "$ " + parseFloat(Math.round(starting * 100) / 100).toFixed(2);
        document.getElementById("totalRolls").innerHTML = currentRoll;
        document.getElementById("mostMoney").innerHTML = "$ " + parseFloat(Math.round(highestMoney * 100) / 100).toFixed(2);
        document.getElementById("rollAtMostMoney").innerHTML = rollsAtHighestMoney;
    
    }
    else
        {
            //Display error message if startingBet is NaN or less than 1
            //Removes previous results table if user gets error message
            document.getElementById("errorBet").style.display = "block";
            document.getElementById("results").style.display = "none";
        }
}