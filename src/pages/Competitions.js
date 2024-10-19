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
		{ name: 'Lady Soviets', group: 2 },
		{ name: 'Danger Queer', group: 2 },
		{ name: 'M30 Pingotroters', group: 2 },
		{ name: 'CTG', group: 3 },
		{ name: 'Loz Patoz', group: 3 },
		{ name: 'Chicago Punks', group: 3 },
		{ name: 'Autillos', group: 3 },
		{ name: 'Bonobxs', group: 4 },
		{ name: 'Paralimpiakos', group: 4 },
		{ name: 'Hijas de Odín', group: 4 },
		{ name: 'Petróleo', group: 4 },
		{ name: 'Pyongyang', group: 5 },
		{ name: 'Huwebes al Sol', group: 5 },
		{ name: 'Peritas', group: 5 },
		{ name: 'All Stones', group: 5 },
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
