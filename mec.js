// 1==>Rock
// 2==>Paper
// #==>Scissors

let comp = 0;
let play = 0;
let p_s = document.getElementById("p_score"). textContent = comp;
let c_s = document.getElementById("c_score"). textContent = play;

function useRock(){

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
        alert("It's a Tie!!");
        comp++;
        play++;
    }
    else if(array[res] == 2){
        alert("You lost!");
        comp++;
    }
    else{
        alert("You Won!!");
        play++;
    }
p_s = document.getElementById("p_score"). textContent = comp;
c_s = document.getElementById("c_score"). textContent = play;
}

function usePaper(){
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
    p_s = document.getElementById("p_score"). textContent = comp;
c_s = document.getElementById("c_score"). textContent = play;

}

function useScissors(){
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
    p_s = document.getElementById("p_score"). textContent = comp;
c_s = document.getElementById("c_score"). textContent = play;
}

function dlte(){
    play=0;
    comp=0;
    p_s = document.getElementById("p_score"). textContent = 0;
    c_s = document.getElementById("c_score"). textContent = 0;
}


