
document.body.style.background="darkolivegreen"

let chakx1=true
let chakx2=true
let chakx3=true
let chakx4=true
let chakx5=true
let chakx6=true
let chakx7=true
let chakx8=true
let chakx9=true
X_O_chak=true
cal="O"
allchak=true
winchak=true
function play1(){
    if (chakx1){
    let box_txt = document.getElementById("box1")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx1=false
    }
}
function play2(){
    if (chakx2){
    let box_txt = document.getElementById("box2")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx2=false
    }
}
function play3(){
    if (chakx3){
    let box_txt = document.getElementById("box3")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx3=false
    }
}
function play4(){
    if (chakx4){
    let box_txt = document.getElementById("box4")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx4=false
    }
}
function play5(){
    if (chakx5){
    let box_txt = document.getElementById("box5")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx5=false
    }
}
function play6(){
    if (chakx6){
    let box_txt = document.getElementById("box6")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx6=false
    }
}
function play7(){
    if (chakx7){
    let box_txt = document.getElementById("box7")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx7=false
    }
}
function play8(){
    if (chakx8){
    let box_txt = document.getElementById("box8")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx8=false
    }
}
function play9(){
    if (chakx9){
    let box_txt = document.getElementById("box9")
    chak()
    box_txt.value=`${cal}`
    if (box_txt.value==="X"){
        box_txt.style.color ="red"
    }else{
        box_txt.style.color ="blue"
    }
    chakx9=false
    }
}

function chak(){
    let turn = document.getElementsByClassName("turn2")
    turn[0].textContent=cal
    if (X_O_chak){
        X_O_chak=false
        cal="X"
    }else{
        X_O_chak=true
        cal="O"
    }
    
}


function win_chak(){
    let box_txt_chak1 = document.getElementById("box1")
    let box_txt_chak2 = document.getElementById("box2")
    let box_txt_chak3 = document.getElementById("box3")
    let box_txt_chak4 = document.getElementById("box4")
    let box_txt_chak5 = document.getElementById("box5")
    let box_txt_chak6 = document.getElementById("box6")
    let box_txt_chak7 = document.getElementById("box7")
    let box_txt_chak8 = document.getElementById("box8")
    let box_txt_chak9 = document.getElementById("box9")
    let win = document.getElementsByClassName("htag2")
    if (box_txt_chak1.value!=="" && box_txt_chak2.value!=="" && box_txt_chak3.value!=="" && box_txt_chak4.value!=="" && box_txt_chak5.value!=="" && box_txt_chak6.value!=="" && box_txt_chak7.value!=="" && box_txt_chak8.value!=="" && box_txt_chak9.value!=="" && allchak===true){
        win[0].textContent = "DRAW";
    }
    if (winchak){
        if (box_txt_chak1.value === box_txt_chak4.value && box_txt_chak4.value === box_txt_chak7.value && box_txt_chak1.value !== "" && box_txt_chak4.value !== "" && box_txt_chak7.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak2.value === box_txt_chak5.value && box_txt_chak5.value === box_txt_chak8.value && box_txt_chak2.value !== "" && box_txt_chak5.value !== "" && box_txt_chak8.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak3.value === box_txt_chak6.value && box_txt_chak6.value === box_txt_chak9.value && box_txt_chak3.value !== "" && box_txt_chak6.value !== "" && box_txt_chak9.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak1.value === box_txt_chak2.value && box_txt_chak2.value === box_txt_chak3.value && box_txt_chak1.value !== "" && box_txt_chak2.value !== "" && box_txt_chak3.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak4.value === box_txt_chak5.value && box_txt_chak5.value === box_txt_chak6.value && box_txt_chak4.value !== "" && box_txt_chak5.value !== "" && box_txt_chak6.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak7.value === box_txt_chak8.value && box_txt_chak8.value === box_txt_chak9.value && box_txt_chak7.value !== "" && box_txt_chak8.value !== "" && box_txt_chak9.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if (box_txt_chak1.value === box_txt_chak5.value && box_txt_chak5.value === box_txt_chak9.value && box_txt_chak1.value !== "" && box_txt_chak5.value !== "" && box_txt_chak9.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }else if(box_txt_chak3.value === box_txt_chak5.value && box_txt_chak5.value === box_txt_chak7.value && box_txt_chak3.value !== "" && box_txt_chak5.value !== "" && box_txt_chak7.value !== "") {
            win[0].textContent = cal;
            winchak=false;
            allchak=false;
        }
        
    }if (winchak===false){
        box_txt_chak1.disabled=true
        box_txt_chak2.disabled=true
        box_txt_chak3.disabled=true
        box_txt_chak4.disabled=true
        box_txt_chak5.disabled=true
        box_txt_chak6.disabled=true
        box_txt_chak7.disabled=true
        box_txt_chak8.disabled=true
        box_txt_chak9.disabled=true
    }

}

function resetgame(){
    location.reload(true);
    
}