import React from 'react';
import { NewItems, CreatedColumn } from './Columns/Index';
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
		<div className='d-flex'>
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
			<div>
				<CreatedColumn />
			</div>
		</div>
	);
};

export default LayoutColumns;
