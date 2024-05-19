let inputTag = document.getElementById("inputtag");
let addBtn = document.getElementById("btn");
let dropdown = document.getElementById("dd");
let colorInput = document.getElementById("color");
let cont = document.querySelector(".shape");

addBtn.addEventListener("click", function () {
    let value = inputTag.value;

    inputTag.value = "";

    let shape = dropdown.value;
    let color = colorInput.value;

    
    cont.innerHTML = "";

    for (let i = 0;i<value;i++){
    let ele = document.createElement("div");

    ele.classList.add(shape);
    ele.style.backgroundColor = color;

    cont.appendChild(ele);

    }


})

