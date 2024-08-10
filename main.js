/*this is the mode change functionality*/
let modeButton = document.getElementById('mode');
let modeText = document.getElementById('modeText');
let modeCircle = document.getElementById('modeCircle');
let body = document.getElementById('body');
let texts = document.getElementsByTagName('p');
let copyRight = document.getElementById('copyRight');
let navlinks = document.getElementsByClassName('headerLink');
let check = true;

modeButton.addEventListener('click', modeChange);

function modeChange(){


    /*this is the LIGHT background*/
    if (check){
        modeButton.style.display = 'flex'
        body.style.backgroundColor = 'rgb(254,235,195)'
        document.documentElement.style.setProperty('--first', 'rgb(0,0,0)');
        menu.style.color = 'rgb(187,2,39)';
        returnS.style.color = 'rgb(187,2,39)';
        link1.style.color = 'rgb(254,235,195)';
        link2.style.color = 'rgb(254,235,195)';
        link3.style.color = 'rgb(254,235,195)';
        modeText.innerText = 'DARK';
        modeText.style.color = 'black';
        modeCircle.style.backgroundColor = 'black';

        for(var i=0; i<texts.length; i++){
            if (i > 1){
                texts[i].style.color = 'black';
            }
        }

        for(var i=0; i<navlinks.length; i++){
             navlinks[i].style.color = 'rgb(254,235,195)';
        }


        check = false
    }


    /*this is the DARK background*/
    else{
        modeButton.style.display = 'grid'
        body.style.backgroundColor = 'black'
        document.documentElement.style.setProperty('--first', 'rgb(254,235,195)');
        menu.style.color = 'rgb(254,235,195)';
        returnS.style.color = 'rgb(254,235,195)';
        link1.style.color = 'black';
        link2.style.color = 'black';
        link3.style.color = 'black';
        modeText.innerText = 'LIGHT';
        modeText.style.color = 'rgb(254,235,195)';
        modeCircle.style.backgroundColor = 'rgb(254,235,195)';

        for(var i=0; i<texts.length; i++){
            if (i > 1){
                texts[i].style.color = 'rgb(254,235,195)';
            }
        }


        for(var i=0; i<navlinks.length; i++){
            navlinks[i].style.color = 'black';
       }

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
        
    /*this is the DARK background*/
    if (check){
        logo1.style.color = 'rgb(254,235,195)';
        link1.style.color = 'rgb(254,235,195)';
    }
    
    /*this is the LIGHT background*/
    else{
        logo1.style.color = 'black';
        link1.style.color = 'black';
    }
}

function link1out(){
    /*this is the DARK background*/
    if (check){
        logo1.style.color = 'rgb(187,2,39)';
        link1.style.color = 'black';
    }

    /*this is the LIGHT background*/
    else{
        link1.style.color = 'rgb(254,235,195)';
        logo1.style.color = 'rgb(187,2,39)';
    }
}



function link2over(){
    if (check){
        logo2.style.color = 'rgb(254,235,195)';
        link2.style.color = 'rgb(254,235,195)';
    }
    
    else{
        logo2.style.color = 'black';
        link2.style.color = 'black';
    }
}

function link2out(){
    if (check){
        logo2.style.color = 'rgb(187,2,39)';
        link2.style.color = 'black';
    }

    else{
        link2.style.color = 'rgb(254,235,195)';
        logo2.style.color = 'rgb(187,2,39)';
    }
}



function link3over(){
    if (check){
        logo3.style.color = 'rgb(254,235,195)';
        link3.style.color = 'rgb(254,235,195)';
    }
    
    else{
        logo3.style.color = 'black';
        link3.style.color = 'black';
    }
}

function link3out(){
    if (check){
        logo3.style.color = 'rgb(187,2,39)';
        link3.style.color = 'black';
    }

    else{
        link3.style.color = 'rgb(254,235,195)';
        logo3.style.color = 'rgb(187,2,39)';
    }
}