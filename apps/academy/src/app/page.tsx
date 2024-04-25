/** @format */

import Image from 'next/image';
import logo from 'public/logos/logo-white.png';

export default function HomePage() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image src={logo} alt='logo' />
            <h1 style={{ fontSize: '64px' }}>Academy</h1>
            <p>Coming Soon...</p>
        </div>
    );
}
