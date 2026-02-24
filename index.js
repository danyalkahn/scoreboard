let homescore = 0
let guestscore = 0

function add1toscoreteam1(){
    homescore += 1 
    let scoreTeam1 = document.getElementById("team-1-score")
    scoreTeam1.textContent = homescore 
}
function add1toscoreteam2(){
    guestscore += 1 
    let scoreTeam2 = document.getElementById("team-2-score")
    scoreTeam2.textContent = guestscore 
}

function add2toscoreteam1(){
    homescore += 2 
    let scoreTeam1 = document.getElementById("team-1-score")
    scoreTeam1.textContent = homescore 
}
function add2toscoreteam2(){
    guestscore += 2 
    let scoreTeam2 = document.getElementById("team-2-score")
    scoreTeam2.textContent = guestscore 
}
function add3toscoreteam1(){
    homescore += 3 
    let scoreTeam1 = document.getElementById("team-1-score")
    scoreTeam1.textContent = homescore 
}
function add3toscoreteam2(){
    guestscore += 3 
    let scoreTeam2 = document.getElementById("team-2-score")
    scoreTeam2.textContent = guestscore 
}