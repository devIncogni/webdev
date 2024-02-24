const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");

function textFromInput() {
    const userText = input.value;
    input.value = "";
    // alert(userText);
    const newLi = document.createElement("li");
    const newSpn = document.createElement("span");
    const newBtn = document.createElement("button");

    newSpn.textContent = userText;
    newBtn.textContent = "Delete";

    newLi.appendChild(newSpn);
    newLi.appendChild(newBtn);


    ul.appendChild(newLi);

    newBtn.addEventListener("click", delFunc);

    function delFunc(){
        ul.removeChild(newLi);
    }

    input.focus();

}

// function delFunc(e) {
    
// }

btn.addEventListener("click", textFromInput);

// const newBtn = document.querySelector("li > button");

// newBtn.addEventListener("click", delFunc(e));


