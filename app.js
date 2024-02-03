let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;

const winpatter =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked ");
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "white";
        }else{
            box.innerText = "X"
            turn0 = true;
            box.style.color = "black"
        }
        box.disabled = true;

        checkwinner();
        
    });
});


const disabledbtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showwinner = (winner) =>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtn();

}

const checkwinner = () =>{
    for(let patterns of winpatter){
        
        let pos1 = boxes[patterns[0]].innerText
        let pos2 = boxes[patterns[1]].innerText
        let pos3 = boxes[patterns[2]].innerText

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner",pos1);
                showwinner(pos1);

            }

        }

    }
};




const resetgame = () =>{
    turn0 = true;
    enablebtn();
    msgcontainer.classList.add("hide");


};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);