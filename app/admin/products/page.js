// app/admin/products/page.js
'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axios';
import Link from 'next/link';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axiosInstance.get('/products');
                setProducts(data);
            } catch (error) {
                setError('Failed to load products');
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Manage Products</h1>
            <Link href="/admin/products/add">
            <button>Add New Product</button>
        </Link>
            {error && <p>{error}</p>}
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Assume deleteProduct is implemented to handle product deletion
