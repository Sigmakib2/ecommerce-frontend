// app/products/page.js
'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axiosInstance.get('/products', {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`,
                    },
                });
                setProducts(data);
            } catch (error) {
                setError('Failed to load products');
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {error && <p>{error}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
