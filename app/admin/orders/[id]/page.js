// app/orders/[id]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../../utils/axios';

export default function OrderDetails({ params }) {
    const { id } = params;
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const { data } = await axiosInstance.get(`/orders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`,
                    },
                });
                setOrder(data);
            } catch (error) {
                setError('Failed to load order details');
            }
        };

        fetchOrderDetails();
    }, [id]);

    return (
        <div>
            <h1>Order Details</h1>
            {error && <p>{error}</p>}
            {order && (
                <div>
                    <h2>Order ID: {order._id}</h2>
                    <p>Status: {order.status}</p>
                    <p>Total: ${order.total}</p>
                    <p>Items:</p>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item._id}>
                                <p>{item.name}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
