import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwppLCHtmqTvGRRiSQbGbhSMvLEbqqvjPFb3A4z0inVIdOhuneYMjoYMhNvDDIu5PY9je1wvwNiwel60d6qvAeb002RV7dAjM')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);
    return (
        <div>
            <h2>please pay first for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout form
------
5. Create payment method
6. server create payment Intent API
7. Load client
8. Confirmed card payment
9. handle user error


*/