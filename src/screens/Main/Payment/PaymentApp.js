import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';

const PaymentApp = () => {
    
  return (
    <StripeProvider
    publishableKey={'pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx'}
    merchantIdentifier="merchant.identifier"
  >
    <PaymentScreen />
  </StripeProvider>
  );
}

export default PaymentApp;

// const [publishableKey, setPublishableKey] = useState('');

// const fetchPublishableKey = async () => {
//   const key = await fetchKey(''); // fetch key from your server here
//   setPublishableKey(key);
// };

// useEffect(() => {
//   fetchPublishableKey();
// }, []);