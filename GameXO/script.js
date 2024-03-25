const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const buttonstart = document.getElementById("btstart");
let buttonRestart = document.querySelector("#btrestart");
let turn0 = true;
const arr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const arr4 = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [9, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
];

const arr5 = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
];

let titleWelcome = document.getElementById("TitleWelcome");

titleWelcome.style.display = "block";

buttonstart.addEventListener("click", () => {
    const selectoption = document.getElementById("size");
    const option = selectoption.value;
    // console.log(option);
    if(option === ""){
        alert("Please select option!");
        selectoption.focus();
    }
    else if(option === "3x3"){
        titleWelcome.style.display = "none";
        
        check.innerHTML = "";
        showtable(9);
    }
    else if(option === "4x4"){
        titleWelcome.style.display = "none";
        check.innerHTML = "";
        showtable(16);
    }
    else{
        titleWelcome.style.display = "none";
        check.innerHTML = "";
        showtable(25);
    }
})

let boxes;
// const table = document.getElementById("table");
let turn = document.getElementById("turn");
function showtable(buttoncount){
    const buttonContainer = document.getElementById('game');
    buttonContainer.innerHTML = ''; // Clear previous buttons
    
    for (let i = 0; i < buttoncount; i++) {
        const button = document.createElement('button');
        button.className = 'box';
        button.innerText = "";
        const row = Math.sqrt(buttoncount);
        button.style.flex = `1 0 calc(100%/${row} - 10px)`;
        const heightbutton = `calc(100%/${row} - 10px)`;
        console.log("height" + heightbutton)
        button.style.height = heightbutton;
        buttonContainer.appendChild(button);
    }
    boxes = document.querySelectorAll(".box");
    turn.innerHTML = "It's O's turn";
    // console.log(boxes);
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("hello");
            if(turn0){
                box.innerHTML = "O";
                box.style.backgroundColor = 'rgba(40, 22, 2, 0.6)';
                turn0 = false;
                turn.innerHTML = "It's X's turn";
            }
            else{
                box.innerHTML = "X";
                box.style.backgroundColor = 'rgba(40, 22, 2, 0.6)';
                turn0 = true;
                turn.innerHTML = "It's O's turn";
            }
            box.disabled = true;
            if(buttoncount === 9){
                checkWinner3();
            }
            else if(buttoncount === 16){
                checkWinner4();
            }
            else{
                checkWinner5();
            }
        })
    })
}

let check = document.getElementById("result");

const checkWinner3 = () => {
    let cnt = 0;
    for(let tmp of arr){
        let position1 = boxes[tmp[0]].textContent;
        let position2 = boxes[tmp[1]].textContent;
        let position3 = boxes[tmp[2]].textContent;
        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                check.innerHTML = position1 + " is Winner";
                turn.innerHTML = "Finished";
                disableBoxes();
            }
            else{
                cnt++;
            }
        }
    }
    if(cnt === 8){
        check.innerHTML = "Draw score";
    }
}

const checkWinner4 = () => {
    let check = document.getElementById("result");
    let cnt = 0;
    for(let tmp of arr4){
        let position1 = boxes[tmp[0]].textContent;
        let position2 = boxes[tmp[1]].textContent;
        let position3 = boxes[tmp[2]].textContent;
        let position4 = boxes[tmp[3]].textContent;
        if(position1 != "" && position2 != "" && position3 != "" && position4 != ""){
            if(position1 === position2 && position2 === position3 && position3 === position4){
                check.innerHTML = position1 + " is Winner";
                turn.innerHTML = "Finished";
                disableBoxes();
            }
            else{
                cnt++;
            }
        }
    }
    if(cnt === 10){
        check.innerHTML = "Draw score";
    }
}

const checkWinner5 = () => {
    let check = document.getElementById("result");
    let cnt = 0;
    for(let tmp of arr5){
        let position1 = boxes[tmp[0]].textContent;
        let position2 = boxes[tmp[1]].textContent;
        let position3 = boxes[tmp[2]].textContent;
        let position4 = boxes[tmp[3]].textContent;
        let position5 = boxes[tmp[4]].textContent;
        if(position1 != "" && position2 != "" && position3 != "" && position4 != "" && position5 != ""){
            if(position1 === position2 && position2 === position3 && position3 === position4 && position4 === position5){
                check.innerHTML = position1 + " is Winner";
                turn.innerHTML = "Finished";
                disableBoxes();
            }
            else{
                cnt++;
            }
        }
    }
    if(cnt === 12){
        check.innerHTML = "Draw score";
    }
}

buttonRestart.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = "";
        enableBoxes();
        turn.innerHTML = "It's O's turn";
        check.innerHTML = "";
    })
})
