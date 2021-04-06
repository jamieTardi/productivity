import React from 'react';

const CreatedColumn = ({ column }) => {
	console.log(column);
	return (
		<div className='generated-column'>
			<p
				className='text-center pt-2'
				style={{ color: `${column.columnColour}` }}>
				{column.columnName}
			</p>
		</div>
	);
};

export default CreatedColumn;
