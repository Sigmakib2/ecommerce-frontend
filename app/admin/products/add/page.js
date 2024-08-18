// app/admin/products/add/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../../../utils/axios';

export default function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const { data } = await axiosInstance.post('/products', {
                name,
                description,
                price,
                imageUrl,
            });
            setSuccess('Product added successfully!');
            router.push('/admin/products');
        } catch (error) {
            setError('Failed to add product');
        }
    };

    return (
        <div>
            <h1>Add New Product</h1>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
            </form>
        </div>
    );
}
