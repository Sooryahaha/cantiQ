let prices = {
    biriyani: 80,
    vegFriedRice: 50,
    alooParatha: 40,
    chapathi: 40,
    miniMeals: 45,
    executiveMeals: 70
};

let quantities = {
    biriyani: 0,
    vegFriedRice: 0,
    alooParatha: 0,
    chapathi: 0,
    miniMeals: 0,
    executiveMeals: 0
};

function updateQuantity(item, change) {
    if (quantities[item] + change >= 0) {
        quantities[item] += change;
        document.getElementById(`${item}-quantity`).innerText = quantities[item];
        updateTotal();
    }
}

function updateTotal() {
    let total = 0;
    for (let item in prices) {
        total += prices[item] * quantities[item];
    }
    document.getElementById('total-value').innerText = total;
}

function goBack() {
    window.location.href = 'batchpage.html';
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotal();
});


function proceedToCheckout() {
    window.location.href = 'checkout.html';
}
