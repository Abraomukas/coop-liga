import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-dark h-100 d-flex justify-content-between align-items-center'>
			<div className='container p-4'>
				{/* SOCIAL MEDIA */}

				<section className='mb-4'>
					<div className='btn-group' role='group'>
						{/* INSTAGRAM */}

						<Link to='' target='_blank'>
							<button type='button' className='btn btn-outline-primary'>
								<i className='fa-brands fa-instagram'></i>
							</button>
						</Link>

						{/* FACEBOOK */}

						<Link to='' target='_blank'>
							<button
								type='button'
								className='btn btn-outline-primary'
								onClick={() => {}}>
								<i className='fa-brands fa-facebook'></i>
							</button>
						</Link>
					</div>
				</section>

				{/* TEXT */}

				<section>
					<div>
						<div className='row d-flex justify-content-center'>
							<div className='col-auto'>
								<p>
									<strong>Liga Cooperativa de Madrid</strong>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</nav>
	);
}

export default Footer;
