// const one = document.querySelector(".card14")
// const two =

//     document.querySelector(".card`${}`").addEventListener("click", function (e) {

//     document.querySelector(".inp").value = e.target.innerText;

// })

const nomus = document.querySelectorAll(".nomu");

nomus.forEach(nomu => nomu.addEventListener("click", handleClick));

function handleClick(e) {

    document.querySelector(".inp").value = document.querySelector(".inp").value + e.target.innerText;

    // console.log(document.querySelector(".inp").value);

}

const zedis = document.querySelectorAll(".zedi");

zedis.forEach(zedi => zedi.addEventListener("click", handleClick));

function handleClick(e) {

    document.querySelector(".inp").value = document.querySelector(".inp").value + e.target.innerText;
    // console.log(document.querySelector(".inp").value);

}

document.querySelector(".cardska").addEventListener("click", display);

function display(e) {
    const solve = document.querySelector(".inp").value;
    console.log(eval(solve));
    document.querySelector(".inp").value = Math.floor(eval(solve));
}

document.querySelector(".cardAC").addEventListener("click", clear);

function clear(e) {
    document.querySelector(".inp").value = "";
}

document.querySelector(".cardza").addEventListener("click", back);
function back(e) {
    const bloke = document.querySelector(".inp").value;
    const str = bloke.toString();
    backed = str.substring( 0 , str.length - 1);
    document.querySelector(".inp").value = backed;

}

