let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset");
let newgb=document.querySelector("#newg");
let messagecon=document.querySelector(".message");
let msgpara=document.querySelector("#winn");


let turno=true;

const winining=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame=()=>{
    turno=true;
    enablebtn();
    messagecon.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X"; /////////////
            turno=true;
        }
        box.disabled=true; ////////////////
        checkwinner();
    });
});

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner)=>{
    msgpara.innerText=`Congratulations! The WINNER is ${winner}`;
    messagecon.classList.remove("hide");
    disablebtn();
};

const checkwinner=()=>{
    for(let pattern of winining){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
};

newgb.addEventListener("click",resetgame);
resbtn.addEventListener("click",resetgame);