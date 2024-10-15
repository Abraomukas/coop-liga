import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Competitions() {
	const competitions = [];
	const teams = [
		{ name: 'Estu 97', group: 1 },
		{ name: 'Jagger Mommiers', group: 1 },
		{ name: 'La Lima Mecánica', group: 1 },
		{ name: 'Airballs', group: 1 },
		{ name: 'Skascajares', group: 2 },
		{ name: 'Danger Queer', group: 2 },
		{ name: 'M30 Pingotroters', group: 2 },
		{ name: 'Lady Soviets', group: 2 },
	];

	return (
		<div style={{ position: 'relative', minHeight: '100vh' }}>
			<Navbar />

			{/* */}
			<div style={{ position: 'relative', minHeight: '100vh' }}></div>

			<Footer />
		</div>
	);
}
