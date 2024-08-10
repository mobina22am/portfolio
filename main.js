/*this is the mode change functionality*/
let modeButton = document.getElementById('mode');
let modeText = document.getElementById('modeText');
let modeCircle = document.getElementById('modeCircle');
let body = document.getElementById('body');
let h = document.getElementById('toph1');
let check = true;

modeButton.addEventListener('click', modeChange);

function modeChange(){
    if (check){
        console.log(modeButton)
        modeButton.style.display = 'flex'
        body.style.backgroundColor = 'rgb(254,235,195)'
        document.documentElement.style.setProperty('--first', 'rgb(0,0,0)');

        check = false
    }

    else{
        modeButton.style.display = 'grid'
        body.style.backgroundColor = 'black'

        check = true
    }
}



/*this is for the mouse follow*/
let move = document.getElementById("move");


document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 1000, fill: "forwards"})

}

/*these are the functionality of the menu button*/
let menu = document.getElementById('menu');
let returnS = document.getElementById('return');
let navigation = document.getElementById('headerNavigation');

menu.addEventListener('click', menuClicked);
returnS.addEventListener('click', returnClicked);


function menuClicked(){
    navigation.style.display = 'block';
    menu.style.display = 'none';
    returnS.style.display = 'block';
}

function returnClicked(){
    navigation.style.display = 'none';
    returnS.style.display = 'none';
    menu.style.display = 'block';
}





/*these are the footer logos and their change of colour actions*/
let link1 = document.getElementById('footerA1');
let logo1 = document.getElementById('footerI1');

let link2 = document.getElementById('footerA2');
let logo2 = document.getElementById('footerI2');

let link3 = document.getElementById('footerA3');
let logo3 = document.getElementById('footerI3');

link1.addEventListener('mouseover', link1over);
link1.addEventListener('mouseout', link1out);

link2.addEventListener('mouseover', link2over);
link2.addEventListener('mouseout', link2out);

link3.addEventListener('mouseover', link3over);
link3.addEventListener('mouseout', link3out);


function link1over(){
    logo1.style.color = 'rgb(254,235,195)';
}

function link1out(){
    logo1.style.color = 'rgb(187,2,39)';
}



function link2over(){
    logo2.style.color = 'rgb(254,235,195)';
}

function link2out(){
    logo2.style.color = 'rgb(187,2,39)';
}



function link3over(){
    logo3.style.color = 'rgb(254,235,195)';
}

function link3out(){
    logo3.style.color = 'rgb(187,2,39)';
}