const container = document.querySelector(".container");

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I am red!";
para.style.cssText = "color: red;";

container.appendChild(para);

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// const container = document.querySelector(".container")

const heading3 = document.createElement("h3");

heading3.textContent = "I'm a blue h3!";
heading3.classList.add("heading");
heading3.style.cssText = "color: blue";

container.appendChild(heading3);

const anotherDiv = document.createElement("div");

anotherDiv.style.cssText = 
`background-color: pink;
border: 2px solid black`;

container.appendChild(anotherDiv);

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div"

const para2 = document.createElement("p");
para2.textContent  = "Me too!"

anotherDiv.append(...[heading1, para2]);
// anotherDiv.append(...[heading1, para2]);


function btnClick() {
    alert("BUTTON CLICKED");
}

const btn = document.querySelector(".btn");


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });