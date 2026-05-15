let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new");
let msg=document.querySelector("h3");

let turnO=true;

const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

function showWinner(winner){
    c=0;
    disableBoxes();
    msg.innerText=`Winner is ${winner}`;
    msg.style.visibility="visible";
    newBtn.style.visibility="visible";
}
function draw(){
    c=0;
    disableBoxes();
    msg.innerText="Match Draw";
    msg.style.visibility="visible";
    newBtn.style.visibility="visible";
    document.querySelector("body").style.backgroundColor="grey";
}

let c=0;
function chechWinner(){
    c++;
    for(let i of winPat){
        if(boxes[i[0]].innerText==="O" && boxes[i[1]].innerText==="O" && boxes[i[2]].innerText==="O"){
            showWinner("O");
            document.querySelector("body").style.backgroundColor="red";
        }
        else if(boxes[i[0]].innerText==="X" && boxes[i[1]].innerText==="X" && boxes[i[2]].innerText==="X"){
            document.querySelector("body").style.backgroundColor="blue";
            showWinner("X");
        }
        else if(c==9){
            draw();
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            document.querySelector("body").style.backgroundColor="rgba(80, 109, 206, 1)";
            box.style.color="red";
            box.innerText="O";
            turnO=false;
        }
        else{
            document.querySelector("body").style.backgroundColor="rgba(189, 87, 87, 1)";
            box.style.color="blue";
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        chechWinner();
    })
})

let restart=()=>{
    document.querySelector("body").style.backgroundColor="red";
    turnO=true;
    enableBoxes();
    msg.innerText="";
    msg.style.visibility="hidden";
    newBtn.style.visibility="hidden";
}

newBtn.addEventListener("click",restart);
rstBtn.addEventListener("click",restart);