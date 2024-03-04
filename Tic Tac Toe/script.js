let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let turn = true;  //player-x player-y
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn = true;
        }
        box.disabled=true;
        count++;
        let iswinner = checkwinner();
        if (count=== 9 && !iswinner){
            gamedraw();
        }
    });
});

const resetgame = () =>{
    turn = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const checkwinner = () =>{
    for (pattern of winpatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1!="" && p2!= "" && p3!=""){
            if (p1===p2 && p2===p3){
                console.log("Winner",p1);
                showwinner(p1);
            }
        }
    }
};

const enableboxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
}; 

const disableboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const gamedraw = () =>{
    msg.innerText = `game was a draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showwinner = (winner) =>{
    msg.innerText = `Congatulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);