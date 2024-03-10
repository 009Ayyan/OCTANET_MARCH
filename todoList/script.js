function addItem() {
    var newItemText = document.getElementById("new-item").value.trim();

    if (newItemText === "") {
        alert("Please enter a valid todo item.");
        return;
    }

    var itemList = document.getElementById("items-list");
    var newItem = document.createElement("li");
    newItem.innerHTML = '<input type="checkbox" class="checkbox" onchange="toggleCompleted(this)">' +
                        '<span>' + newItemText + '</span>' +
                        '<span class="delete-btn" onclick="removeItem(this)">Delete</span>';
    itemList.appendChild(newItem);

    // Clear the input field after adding the item
    document.getElementById("new-item").value = "";
}

function removeItem(element) {
    var item = element.parentNode;
    item.parentNode.removeChild(item);
}

function toggleCompleted(checkbox) {
    var itemText = checkbox.nextElementSibling;
    itemText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}
