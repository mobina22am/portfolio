const menu = document.getElementById('menu');

console.log(menu)


menu.addEventListener("click", example);

function example(){
    menu.style.visibility = 'hidden';
    console.log("the function is detected");
    window.confirm("jhfovues");
}
