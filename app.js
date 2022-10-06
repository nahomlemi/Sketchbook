/////////////////-- canvas grid creator --/////////////////
let color = 'black';
let num = 16;
let main = document.querySelector('#main');

function createGrid(num){
    for(let i = 0; i<num; i++){
        let cell = document.createElement("div");
        cell.classList.add('div');
        main.appendChild(cell);
    }

    let list = document.querySelectorAll(`.div`);

    Array.from(list).forEach(function(element){
        for(let i = 0; i<num; i++){
            let row = document.createElement("div");
        row.className += 'div2';
            element.appendChild(row);
        }
    })
    changeColor()
    useColor()
}
createGrid(16);
////////////////--- delete old canvas ---- /////////////////

function removeOldCanvas(){
    let oldList = document.querySelectorAll('#main .div');
    oldList.forEach(function(element){
        element.parentNode.removeChild(element);
    });
}

////////////////--- canvas size selector --/////////////////

let size = document.querySelectorAll('.grid button');

size.forEach(function(element){
    element.addEventListener('click', function(){
        switch (element.className){
            case 'six':
                num = 16;
                removeOldCanvas();
                createGrid(num);
                 break;
            case 'two':
                num = 32; 
                removeOldCanvas();
                createGrid(num);
                break;
            case 'four':
                num = 64; 
                removeOldCanvas();
                createGrid(num);
                break;
        }
    })
})

////////////////// - changing color - //////////////////////
function changeColor(){
    
    let buttons = document.querySelectorAll('.color button');

    buttons.forEach(function(element){
        element.addEventListener('click', function(){
            color = element.className;
            window
        })
    })
}

///////////////// - use-brush-- /////////////////////////

function useColor(){
    let cells = document.querySelectorAll('.div2');

    Array.from(cells).forEach(function(element){
        element.addEventListener('mouseover',function(){
            element.style.backgroundColor = color;
        })
    })
}
