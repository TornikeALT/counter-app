let count = 0;
const counter = document.getElementById('count-el');
const saveBtn =  document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');


function increment(){
    count = count + 1;
    counter.textContent = count;
}

function save(){
    let entries = count + ' - ';
    saveEl.textContent +=  entries;
    counter.textContent = 0;
    count = 0;
    counter.textContent = count;
    console.log(count)
 }
