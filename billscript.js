// Assume that the payment response is stored in the 'paymentResponse' variable
let paymentResponse = {
    "status": "success", // or "fail"
    "order_id": "ORD12345"
};

// Get the cart data from localStorage
let cartData = JSON.parse(localStorage.getItem('cartData'));

// Generate the bill
let billTable = document.getElementById('bill-table');
let billRows = '';
cartData.items.forEach((item) => {
    billRows += `
        <tr>
            <td>${item.item_name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        </tr>
    `;

// Display the total amount
document.getElementById('total-amount').textContent = cartData.total;

// Update the payment status
document.getElementById('payment-status').innerHTML = paymentResponse.status === 'success' ? 'PAYMENT SUCCESSFUL' : 'PAYMENT FAILED';
document.getElementById('payment-status').className = paymentResponse.status === 'success' ? 'success' : 'fail';
