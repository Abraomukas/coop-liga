import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './i18n';
import './index.css';

const spinnerSizing = { width: '3rem', height: '3rem' };

const spinnerFallback = (
	<div className='d-flex justify-content-center mt-3'>
		<div className='spinner-border' style={spinnerSizing} role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	</div>
);

/**
 ** PAGES
 */
import Error from './pages/Error';
import Main from './pages/Main';
import Teams from './pages/Teams';
import Courts from './pages/Courts';
import Calendar from './pages/Calendar';
import Competitions from './pages/Competitions';
import About from './pages/About';
import Results from './pages/Results';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <Error />,
	},
	{
		path: '/teams',
		element: <Teams />,
		errorElement: <Error />,
	},
	{
		path: '/courts',
		element: <Courts />,
		errorElement: <Error />,
	},
	{
		path: '/calendar',
		element: <Calendar />,
		errorElement: <Error />,
	},
	{
		path: '/competitions',
		element: <Competitions />,
		errorElement: <Error />,
	},
	{
		path: '/about-us',
		element: <About />,
		errorElement: <Error />,
	},
	{
		path: '/results',
		element: <Results />,
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.Suspense fallback={spinnerFallback}>
		<RouterProvider router={router} />
	</React.Suspense>
);