import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ColumnModal = ({
	column,
	setColumn,
	createdColumns,
	setCreatedColumns,
	showColumn,
	setShowColumn,
}) => {
	const [columnName, setColumnName] = useState('');

	const handleNewColumn = () => {
		setColumn({ id: uuidv4(), columnName, columnColour: '#70e000' });
		setColumnName('');
	};

	const handleCreatedColumns = () => {
		setCreatedColumns([column, ...createdColumns]);
	};

	const handleShow = () => {
		setShowColumn(false);
	};

	const handleColorPick = (e) => {
		let selectedColor = e.target.value;
	};

	return (
		<div>
			<Form>
				<Modal
					show={showColumn}
					onHide={handleShow}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>Create A New Column</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Column Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Column Name ... Tasks... Completed...'
								onChange={(e) => {
									setColumnName(e.target.value);
								}}
							/>
							<Form>
								<Form.Group controlId='exampleForm.SelectCustom'>
									<Form.Label>Choose a column Colour scheme</Form.Label>
									<Form.Control as='select' custom onClick={handleColorPick}>
										<option>Red</option>
										<option>Blue</option>
										<option>Green</option>
										<option>Yellow</option>
										<option>Purple</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</Form.Group>
						<Button
							onClick={() => {
								handleNewColumn();
							}}>
							Save Column
						</Button>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='success' onClick={handleCreatedColumns}>
							Add Saved Columns To your teams Columns
						</Button>
						<Button variant='secondary' onClick={handleShow}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</Form>
		</div>
	);
};

export default ColumnModal;
