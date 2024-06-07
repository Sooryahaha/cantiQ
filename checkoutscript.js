// Get the order items from local storage
const orderItems = JSON.parse(localStorage.getItem('orderItems'));
const totalAmount = localStorage.getItem('totalAmount');

// Display the order items
const orderItemsList = document.getElementById('order-items');
orderItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} x ${item.quantity} = ${item.price} rupees`;
    orderItemsList.appendChild(listItem);
});

// Display the total amount
document.getElementById('total-amount').textContent = totalAmount;


// Add event listener to the pay button
document.getElementById('pay-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    // Use the payment method to make the payment
    // For this example, we'll use Stripe as the payment gateway
    const stripe = Stripe('YOUR_STRIPE_SECRET_KEY');
    stripe.redirectToCheckout({
        items: orderItems,
        successUrl: 'uccess.html',
        cancelUrl: 'cancel.html',
    });
});
