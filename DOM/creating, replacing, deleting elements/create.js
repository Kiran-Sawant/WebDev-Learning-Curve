
function addItem() {
    var item = document.createElement('li')
    var itemText = document.createTextNode('Four')    

    item.appendChild(itemText)

    element = document.getElementById('kkr')
    element.appendChild(item)   
}