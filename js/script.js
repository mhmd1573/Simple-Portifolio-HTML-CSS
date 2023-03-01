let myName = document.querySelector('.name');

let index = 1;

function writeText() {
    myName.innerHTML= myName.slice(0,index);
    index++
    
    if(index > myName.length){
        index = 1;
    }
}

setInterval(() => {
    writeText()
}, 100);
