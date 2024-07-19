let die1, die2, human, comp, comp1, comp2;
let humanWins = 0;
let compWins = 0;
let tieMatches = 0;
let totalMatches = 0;

function rollDice() {

    die1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('d1-img').src = 'images/dice' + die1 + '.png';

    die2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById('d2-img').src = 'images/dice' + die2 + '.png';

    comp1 = Math.floor(Math.random() * 6) + 1;
    comp2 = Math.floor(Math.random() * 6) + 1;

    human = die1 + die2;
    comp = comp1 + comp2;

    document.getElementById('human-dice').innerHTML = die1 + ' and ' + die2 + ' = ' + human;
    document.getElementById('comp-dice').innerHTML = comp1 + ' and ' + comp2 + ' = ' + comp;

    if (human > comp) {
        document.getElementById('remarks').innerHTML = 'You Win and Computer Lose';
        humanWins += 1;
        document.getElementById('human-wins').innerHTML = humanWins;
    } else if (human < comp) {
        document.getElementById('remarks').innerHTML = 'You lose and Computer Win';
        compWins += 1;
        document.getElementById('comp-wins').innerHTML = compWins;
    } else {
        document.getElementById('remarks').innerHTML = 'The Match is tied';
        tieMatches += 1;
        document.getElementById('tie-matches').innerHTML = tieMatches;
    }
    totalMatches += 1;
    document.getElementById('total-matches').innerHTML = totalMatches;
}



