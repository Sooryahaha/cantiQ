// Function to update the quantity of an item
function updateQuantity(itemName, quantityChange) {
    // Get the current quantity
    let currentQuantity = parseInt(document.getElementById(`${itemName}-quantity`).textContent);
    // Update the quantity
    document.getElementById(`${itemName}-quantity`).textContent = currentQuantity + quantityChange;
    // Update the total order value
    let totalValue = 0;
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((menuItem) => {
        let itemName = menuItem.querySelector('.item-name').textContent;
        let itemPrice = parseInt(menuItem.querySelector('.item-price').textContent.replace(' rupees', ''));
        let itemQuantity = parseInt(document.getElementById(`${itemName}-quantity`).textContent);
        totalValue += itemPrice * itemQuantity;
    });
    document.getElementById('total-value').textContent = totalValue + ' rupees';
}

// Function to go back to the menu
// Function to go back to the menu
function goBack() {
    window.location.href = "homepage.html";
}

