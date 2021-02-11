var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

// Form submit event
form.addEventListener('submit', addItem)
// delete event
itemList.addEventListener('click', removeItem)
//filter Item
filter.addEventListener('keyup', filterItems)

// Add Item. Here e is element on which the event is added.
function addItem(e) {
    // prevents submit buttons to reload pages.
    e.prevent   Default()
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create mew list Item
    var listItem = document.createElement('li');
    // Add class
    listItem.className = "list-group-item"
    // console.log(listItem)      // test

    // adding entered text to <li>
    listItem.appendChild(document.createTextNode(newItem))

    // create delete button element
    var delButton = document.createElement("button")
    delButton.className = "btn btn-danger btn-sm float-right delete"

    delButton.appendChild(document.createTextNode('X'))

    listItem.appendChild(delButton)

    // append <li> to main list <ul>
    itemList.appendChild(listItem)
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function filterItems(e) {
    // convert to
    var text = e.target.value.toLowerCase();
    // get li
    var items = itemList.getElementsByTagName('li');

    //convert to an array.
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }})
}