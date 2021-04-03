import React from 'react';

const CreatedColumn = ({ column }) => {
	console.log(column);
	return (
		<div className='generated-column'>
			<p>{column.columnName}</p>
		</div>
	);
};

export default CreatedColumn;
