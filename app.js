console.log('hello')
let main = document.querySelector('#main');

for(let i = 0; i<16; i++){
    let cell = document.createElement("div");
    cell.classList.add('div');
    main.appendChild(cell);

}

let list = document.querySelectorAll(`.div`);

Array.from(list).forEach(function(element){
    for(let i = 0; i<16; i++){
        let row = document.createElement("div");
    row.className += 'div2';
        element.appendChild(row);
    }
})
console.log(document.querySelectorAll('.div2'))
console.log(list);
console.log('hello')

let cells = document.querySelectorAll('.div2')