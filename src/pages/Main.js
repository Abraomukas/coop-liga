import React from 'react';

//* COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Main() {
	let sections = [];

	return (
		<div>
			<Navbar />

			<div style={{ position: 'relative', minHeight: '100vh' }}></div>
			<Footer />
		</div>
	);
}

export default Main;
