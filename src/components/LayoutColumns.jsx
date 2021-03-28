import React from 'react';
import { NewItems } from './Columns/Index';
import { NewItem } from './Index';

const LayoutColumns = ({
	newItemText,
	setNewItemText,
	newItem,
	setNewItem,
}) => {
	return (
		<div>
			<NewItem
				newItemText={newItemText}
				setNewItemText={setNewItemText}
				newItem={newItem}
				setNewItem={setNewItem}
			/>
			<NewItems />
		</div>
	);
};

export default LayoutColumns;
