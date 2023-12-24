// 1==>Rock
// 2==>Paper
// #==>Scissors

let comp = 0;
let play = 0;
let count = 0;
count = Number.parseInt(count);
let p_s = document.getElementById("p_score"). textContent = comp;
let c_s = document.getElementById("c_score"). textContent = play;
p_s = Number.parseInt(p_s);
c_s = Number.parseInt(c_s);
document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:"+(p_s/count)*100+"%")

function useRock(){
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width: 0px")
    let array = [1, 2, 3];
    let res = Math.floor(Math.random() * 3 );
    res = Number.parseInt(res);

    console.log(array[res]);
    if(array[res] == 1)
    console.log("Rock")
    else if(array[res] == 2)
    console.log("Paper")
    else
    console.log("Scissors")


    if(array[res] == 1){
        alert("It's a Tie!! Computer choose Rock too");
        comp++;
        play++;
    }
    else if(array[res] == 2){
        alert("You lost! Computer choose paper");
        comp++;
    }
    else{
        alert("You Won!! Computer choose scissors");
        play++;
    }
    p_s = document.getElementById("p_score"). textContent = play;
    c_s = document.getElementById("c_score"). textContent = comp;
    count++;
    console.log("Win ="+(p_s/count)*100)
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:"+(p_s/count)*100+"%")
    let won = Math.round((p_s/count)*100)
    ultra.innerHTML = won + " %"
}

function usePaper(){
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width: 0px")
    let array = [1, 2, 3];
    let res = Math.floor(Math.random() * 3 );
    res = Number.parseInt(res);
    if(array[res] == 1)
    console.log("Rock")
    else if(array[res] == 2)
    console.log("Paper")
    else
    console.log("Scissors")


    if(array[res] == 1){
        alert("You Won!");
        play++;
    }
    else if(array[res] == 2){
        alert("It's a Tie!!")
        play++;
        comp++;
    }
    else{
        alert("You lost!");
        comp++;
    }
    p_s = document.getElementById("p_score"). textContent = play;
    c_s = document.getElementById("c_score"). textContent = comp;
    count++;
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:"+(p_s/count)*100+"%")
    let won = Math.round((p_s/count)*100)
    ultra.innerHTML = won + " %"
}

function useScissors(){
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width: 0px")

    let array = [1, 2, 3];
    let res = Math.floor(Math.random() * 3 );
    res = Number.parseInt(res);

    console.log(array[res]);
    if(array[res] == 1)
    console.log("Rock")
    else if(array[res] == 2)
    console.log("Paper")
    else
    console.log("Scissors")


    if(array[res] == 1){
        alert("You Lost!");
        comp++;
    }
    else if(array[res] == 2){
        alert("You Won!");
        play++;
    }
    else{
        alert("It's a Tie!!");
        play++;
        comp++;
    }
    p_s = document.getElementById("p_score"). textContent = play;
    c_s = document.getElementById("c_score"). textContent = comp;
    count++;
    console.log("Win ="+(p_s/count)*100)
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:"+(p_s/count)*100+"%")
    let won = Math.round((p_s/count)*100)
    ultra.innerHTML = won + " %"
}

function dlte(){
    play=0;
    comp=0;
    count = 0;
    p_s = document.getElementById("p_score"). textContent = 0;
    c_s = document.getElementById("c_score"). textContent = 0;
    document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:0px")
}


