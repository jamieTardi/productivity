import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { TopNav, LayoutColumns } from './components/Index';
function App() {
	const [newItemText, setNewItemText] = useState('');
	const [newItem, setNewItem] = useState({});
	const [tasks, setTasks] = useState([]);
	const [show, setShow] = useState(false);
	return (
		<div className='App'>
			<TopNav />
			<LayoutColumns
				newItemText={newItemText}
				setNewItemText={setNewItemText}
				newItem={newItem}
				setNewItem={setNewItem}
				tasks={tasks}
				setTasks={setTasks}
				setShow={setShow}
				show={show}
			/>
		</div>
	);
}

export default App;
