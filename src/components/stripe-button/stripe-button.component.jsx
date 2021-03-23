import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IY1rwAZIVJlCVkMaN1pH8WcHVckzifU9xmpN4sy6tADTabXQnfbPNbw6AvSoeNtAIgkTRuvNocilDSkev9qAV6400dmYH0tQA';

  const onToken = token => {
    // Pass to backend to create charge. Which we don't want to do right now
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='ECOM Clothing'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
