
// using ID 

// let h1tag = document.getElementById("h1tag");  

// querySelector 

// let ptag = document.querySelector(".pt")

// console.log(ptag)

// let allBoxes = document.querySelectorAll(".box");

// console.log(allBoxes)

// let arr = [];

// console.log(arr)



// h1tag.innerHTML = " I am changed through JS ";;


// h1tag.style.color = "red";

// h1tag.innerText = " I am inner text <p> Hey i am ptag </p> "

// console.dir(h1tag);

// let img = document.querySelectorAll(".img1");

// for(let i=0;i<img.length ; i++ ){
//     // img[i].src = "./second.jpeg"

//     img[i].setAttribute("src" , "./second.jpeg")

//     console.log(img[i].getAttribute('alt'))
// }


// console.dir(img)

 let box = document.querySelector(".box");

// box.classList.add("circle");

// box.classList.remove("circle")

// box.classList.toggle("circle")

// console.log(box.classList)


// let h1tag = document.createElement("h1");

// h1tag.innerHTML = " I am a h1 tag made through JS ";

// console.log(h1tag)

// box.appendChild(h1tag)

let imgTag = document.getElementById("imgtag");

let flag = true ;

imgTag.addEventListener("click", function(){
   
    if(flag == true ){
        imgTag.src = "./second.jpeg"
    }else{
        imgTag.src = "./first.jpeg"
    }

    flag = !flag;
})





