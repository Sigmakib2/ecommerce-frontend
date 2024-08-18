// app/admin/users/page.js
'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '../../../utils/axios';

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axiosInstance.get('/users');
                setUsers(data);
            } catch (error) {
                setError('Failed to load users');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Manage Users</h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <h2>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Assume deleteUser is implemented to handle user deletion
