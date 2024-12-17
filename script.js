document.querySelector('.btn-danger').addEventListener('click', function () {
    if (confirm('Are you sure you want to clear the cart?')) {
        alert('Cart cleared successfully.');
    }
});
