let menu = document.getElementById('menu');
let navigation = document.getElementById('headerNavigation');
let returnS = document.getElementById('return')

console.log(menu)

menu.addEventListener('click', fun);

function fun(){
    navigation.style.display = 'block';
    menu.style.display = 'none';
    returnS.style.display = 'block';
}