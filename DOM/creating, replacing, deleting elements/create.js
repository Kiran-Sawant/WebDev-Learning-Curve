
function addItem() {
    var item = document.createElement('li')             // Creats <li></li>
    var itemText = document.createTextNode('Four')      // creates a textContent

    item.appendChild(itemText)

    element = document.getElementById('kkr')
    element.appendChild(item)   
}