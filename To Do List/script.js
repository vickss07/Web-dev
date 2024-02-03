let addtoDoButton = document.getElementById('btn');
let toDoContainer = document.getElementById('todocontainer');
let field = document.getElementById('inputfield');

addtoDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = field.value;
    toDoContainer.appendChild(paragraph);
    field.value = " ";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })

})