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
	createdColumns,
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
			<div className='d-flex'>
				{createdColumns
					? createdColumns.map((column) => (
							<>
								<CreatedColumn column={column} key={column.id} />
							</>
					  ))
					: ''}
			</div>
		</div>
	);
};

export default LayoutColumns;
