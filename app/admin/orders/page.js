// app/orders/page.js
'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axios';

export default function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axiosInstance.get('/orders/user', {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`,
                    },
                });
                setOrders(data);
            } catch (error) {
                setError('Failed to load orders');
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Your Orders</h1>
            {error && <p>{error}</p>}
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>
                        <h2>Order ID: {order._id}</h2>
                        <p>Status: {order.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
