// app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '../../utils/axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosInstance.post('/auth/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data)); // Save token to localStorage
            router.push('/products'); // Redirect to products page
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
