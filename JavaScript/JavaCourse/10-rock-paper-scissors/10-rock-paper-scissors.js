const score =JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    draws:0,
    losses:0
}
updateScore();



function playgame(playerMove){
    let computerMove=Math.random()
    let result=''
    if (computerMove<1/3){
        computerMove='Scissors';
    } else if (computerMove<2/3){
        computerMove='Paper';
    }else{
        computerMove='Rock';
    }
    //Win Conditions
    if (computerMove=='Rock'&&playerMove=="Paper"||computerMove=='Paper'&&playerMove=='Scissors'||computerMove=="Scissors"&&playerMove=="Rock"){
        result='You Win :p'
        score.wins+=1;
    } else if (computerMove==playerMove) {//Draw Conditions
        result="Its a Draw :)"
        score.draws+=1;
    } else{
        result="You Lose :("
        score.losses+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result').innerHTML =result;
    document.querySelector('.js-moves').innerHTML = `Your Move: <img src="assets/${playerMove}-emoji.png"/>  \t Computer Move:<img src="assets/${computerMove}-emoji.png"/>`;
    updateScore();
}
 function updateScore(){
    console.log("hey: "+JSON.stringify(score));
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} Draws ${score.draws} Losses ${score.losses}`;
}
function reset(){
    score.wins = 0;
    score.losses = 0;
    score.draws = 0;
    localStorage.removeItem('score')
    updateScore();
}