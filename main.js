var getInput = document.querySelector('[data-input]')
var button = document.querySelector('[data-button]')
var result = document.querySelector('[data-res]')
var list = document.querySelector('[data-lis]')
var toDo = [];

function createList(){
    let itemInput = getInput.value
    let element = document.createElement('li')
    let text = document.createTextNode(itemInput)
    let elementButton = document.createElement('button')
    elementButton.setAttribute('data-del', '')
    let textButton = document.createTextNode('X')
    element.append(text)
    list.append(element)
    elementButton.append(textButton)
    element.append(elementButton)
    removeElement(elementButton)
    getInput.value=''
}

button.addEventListener('click', createList)

function removeElement(element){
    element.addEventListener('click', function(){
        this.parentElement.innerHTML = ''
    })
}
