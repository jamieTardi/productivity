import React from 'react';
import { NewItems } from './Columns/Index';
import { NewItem } from './Index';

const LayoutColumns = ({
	newItemText,
	setNewItemText,
	newItem,
	setNewItem,
	tasks,
	setTasks,
	setShow,
	show,
}) => {
	return (
		<div>
			<NewItem
				newItemText={newItemText}
				setNewItemText={setNewItemText}
				newItem={newItem}
				setNewItem={setNewItem}
				tasks={tasks}
				setTasks={setTasks}
				show={show}
				setShow={setShow}
			/>
			<NewItems tasks={tasks} setShow={setShow} setTasks={setTasks} />
		</div>
	);
};

export default LayoutColumns;
