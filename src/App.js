import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { TopNav, LayoutColumns } from './components/Index';
function App() {
	return (
		<div className='App'>
			<TopNav />
			<LayoutColumns />
		</div>
	);
}

export default App;
