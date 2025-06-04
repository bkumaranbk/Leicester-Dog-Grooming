// KlarnaCheckout.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import apiRequest from '@/axios/apiRequest';

declare global {
    interface Window {
        Klarna: any;
    }
}


const KlarnaCheckout = () => {
    const location = useLocation();
    const { formData, selectedCourse, selectedAdditionalCourse } = location.state || {};

    console.log('Form Data:', formData);
    console.log('Selected Course:', selectedCourse);
    console.log('Additional Course:', selectedAdditionalCourse);
    const [clientToken, setClientToken] = useState(null);

    useEffect(() => {
        const fetchClientToken = async () => {
            let price: number;
            let courseName: string;

            if (selectedAdditionalCourse) {
                const priceString = selectedAdditionalCourse.replace(/[£,]/g, '');
                price = parseFloat(priceString);
                courseName = selectedAdditionalCourse;
            } else if (selectedCourse?.price) {
                const priceString = selectedCourse.price.replace(/[£,]/g, '');
                price = parseFloat(priceString);
                courseName = selectedCourse.title;
            } else {
                throw new Error("No course selected");
            }

            const response = await apiRequest<{ client_token: string }>({
                method: "POST",
                url: "/api/klarna/session",
                data: {
                    order_amount: price,
                    course_name: courseName,
                },
            });

            if ("client_token" in response) {
                setClientToken(response.client_token);
            } else {
                console.error("Failed to retrieve Klarna client token:", response.error);
            }
        };

        fetchClientToken();
    }, [selectedCourse, selectedAdditionalCourse]);

    useEffect(() => {
        if (clientToken && window.Klarna) {
            window.Klarna.Payments.init({ client_token: clientToken });
            window.Klarna.Payments.load(
                {
                    container: '#klarna-payments-container',
                    payment_method_category: 'pay_later',
                },
                {},
                function (res) {
                    if (res.show_form) {
                        console.log('Klarna form loaded');
                    } else {
                        console.error('Klarna form failed to load:', res);
                    }
                }
            );
        }
    }, [clientToken]);

    const [isProcessing, setIsProcessing] = useState(false);
    const authorizePayment = () => {

        setIsProcessing(true);
        // Your Klarna payment logic here
        setTimeout(() => {
            setIsProcessing(false);
        }, 2000);
        window.Klarna.Payments.authorize(
            {
                payment_method_category: 'pay_later',
            },
            {
                billing_address: {
                    given_name: formData?.name,
                    family_name: 'Unknown',
                    email: formData?.email,
                    street_address: formData?.address,
                    postal_code: '12345',
                    city: 'Anytown',
                    phone: formData?.phone,
                    country: 'UK',
                },
                shipping_address: {
                    given_name: 'John',
                    family_name: 'Unknown',
                    email: formData?.email,
                    street_address: formData?.address,
                    postal_code: '12345',
                    city: 'Anytown',
                    phone: formData?.phone,
                    country: 'UK',
                },
            },
            function (res) {
                if (res.approved) {
                    console.log('Payment authorized:', res.authorization_token);
                    // Proceed to create order on the backend
                } else {
                    console.error('Payment not authorized:', res);
                }
            }
        );
    };



    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-2xl relative">
                <div className="absolute top-4 right-4">
                    <img
                        src="https://cdn.klarna.com/1.0/shared/image/generic/logo/en_us/basic/logo_black.png?width=80"
                        alt="Klarna"
                        className="w-20"
                    />
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Complete your payment
                </h2>

                <p className="text-gray-500 text-sm mb-6 text-center">
                    Secure checkout powered by Klarna. Choose your preferred payment method below.
                </p>

                <div
                    id="klarna-payments-container"
                    className="border border-dashed border-gray-300 rounded-xl p-6 mb-6 min-h-[160px] bg-gray-50 flex items-center justify-center"
                >
                    <span className="text-gray-400 text-sm">Loading Klarna UI...</span>
                </div>

                <button
                    onClick={authorizePayment}
                    disabled={isProcessing}
                    className={`w-full py-3 rounded-xl text-white text-lg font-semibold transition-all duration-300 ${isProcessing
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 shadow-lg"
                        }`}
                >
                    {isProcessing ? "Processing..." : "Pay with Klarna"}
                </button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                    Klarna protects your information. Payment is encrypted and secure.
                </p>
            </div>
        </div>
    );
};


export default KlarnaCheckout;
