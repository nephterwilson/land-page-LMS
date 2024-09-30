// Example for Stripe payment integration
const stripe = Stripe('your-publishable-key');
const subscribeBtns = document.querySelectorAll('.subscribe-btn');

subscribeBtns.forEach(button => {
    button.addEventListener('click', () => {
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_id', quantity: 1 }],
            mode: 'payment',
            successUrl: 'https://foundlinkdigital.com/success',
            cancelUrl: 'https://foundlinkdigital.com/cancel',
        });
    });
});
