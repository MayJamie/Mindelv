/** @format */

import Image from 'next/image';
import logo from 'public/logos/logo-white.png';

export default async function HomePage() {
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
            <h1>I'dEffect Academy</h1>
            <h2>Coming Soon...</h2>
        </div>
    );
}
