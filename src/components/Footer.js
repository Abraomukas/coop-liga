import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${
				isDarkMode ? 'dark' : 'light'
			} bg-${isDarkMode ? 'dark' : 'light'} d-flex justify-content-around`}>
			<div className='navbar-left'>
				{/* SOCIAL MEDIA */}

				<div className='btn-group' role='group'>
					{/* INSTAGRAM */}

					<Link
						to='https://www.instagram.com/ligabasketcooperativa/'
						target='_blank'>
						<button
							type='button'
							className='btn btn-outline-primary'
							onClick={() => {}}>
							<i className='fa-brands fa-instagram'></i>
						</button>
					</Link>

					{/* FACEBOOK */}

					<Link
						to='https://www.facebook.com/ligabasketcooperativa'
						target='_blank'>
						<button
							type='button'
							className='btn btn-outline-primary'
							onClick={() => {}}>
							<i className='fa-brands fa-facebook'></i>
						</button>
					</Link>

					{/* TWITTER */}

					<Link to='https://x.com/ligacooperativa' target='_blank'>
						<button
							type='button'
							className='btn btn-outline-primary'
							onClick={() => {}}>
							<i className='fa-brands fa-x-twitter'></i>
						</button>
					</Link>
				</div>
			</div>
			<div className='navbar-middle' />
			<div className='navbar-right'>
				<p className='text-white mt-2'>
					<strong>Liga Cooperativa de Madrid</strong>
				</p>
			</div>
		</nav>
	);
}

export default Footer;
