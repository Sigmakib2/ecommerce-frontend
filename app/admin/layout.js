// app/admin/layout.js
import Link from 'next/link';

export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <ul>
                        <li><Link href="/admin">Dashboard</Link></li>
                        <li><Link href="/admin/products">Manage Products</Link></li>
                        <li><Link href="/admin/orders">Manage Orders</Link></li>
                        <li><Link href="/admin/users">Manage Users</Link></li>
                    </ul>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
