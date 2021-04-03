import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css';
import { TopNav, LayoutColumns } from './components/Index';
function App() {
	const [newItemText, setNewItemText] = useState('');
	const [newItem, setNewItem] = useState({});
	const [tasks, setTasks] = useState([]);
	const [show, setShow] = useState(false);
	const [column, setColumn] = useState({});
	const [createdColumns, setCreatedColumns] = useState([]);

	return (
		<div className='App'>
			<TopNav
				column={column}
				setColumn={setColumn}
				createdColumns={createdColumns}
				setCreatedColumns={setCreatedColumns}
			/>
			<LayoutColumns
				newItemText={newItemText}
				setNewItemText={setNewItemText}
				newItem={newItem}
				setNewItem={setNewItem}
				tasks={tasks}
				setTasks={setTasks}
				setShow={setShow}
				show={show}
				column={column}
				setColumn={setColumn}
				createdColumns={createdColumns}
			/>
		</div>
	);
}

export default App;
