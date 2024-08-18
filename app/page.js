// app/page.js
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the E-commerce App</h1>
            <nav>
                <ul>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/products">Products</Link></li>
                </ul>
            </nav>
        </div>
    );
}
