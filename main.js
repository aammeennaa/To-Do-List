let arrayOfObjects = [];
let button = document.querySelector('.add');
console.log(button);
let item = document.querySelector('.item');
console.log(item);
let items = [];
let list = document.querySelector('.list');
console.log(list);
let checkbox;
//=====================

button.onclick = function Add(e) {
    e.preventDefault();
    console.log(item.value);
    items.push(item.value);
    console.log(items);

    for (let i = items.length - 1; i < items.length; i++) {
        let newObj = {
            id: i,
            value: items[i],
        };
        arrayOfObjects.push(newObj);
    }

    console.log(arrayOfObjects);
    list.innerHTML = arrayOfObjects.map(function (e) {
        return `
            <li>
                <input type="checkbox" name="item" class="checkbox ${e.id}" id="checkbox_${e.id}" >
                <span class="item ${e.id}">${e.value}</span>
            </li>
    `;
    }).join('\n');

    item.value = '';
    let todos = document.querySelectorAll(".list li");
    console.log(todos);
    checkbox = document.querySelectorAll("li .checkbox");
    console.log(checkbox);    
    


    list.addEventListener('change', function (e) {
        if (e.target.classList.contains('checkbox')) {
            let checkboxId = e.target.classList[1]; 
            console.log(checkboxId);
            let correspondingItem = arrayOfObjects.find(item => item.id == checkboxId);
            console.log(correspondingItem);
            if (e.target.checked) {
                console.log(document.getElementById(`checkbox_${checkboxId}`).nextSibling.nextSibling);
                document.getElementById(`checkbox_${checkboxId}`).nextSibling.nextSibling.classList.toggle('checked');
            } 
        }
    });
    
};




