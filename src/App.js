import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { TopNav, LayoutColumns } from './components/Index';
function App() {
	const [newItemText, setNewItemText] = useState('');
	const [newItem, setNewItem] = useState({});
	return (
		<div className='App'>
			<TopNav />
			<LayoutColumns
				newItemText={newItemText}
				setNewItemText={setNewItemText}
				newItem={newItem}
				setNewItem={setNewItem}
			/>
		</div>
	);
}

export default App;
