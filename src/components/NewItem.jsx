import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewItem = ({ newItemText, setNewItemText, newItem, setNewItem }) => {
	const [show, setShow] = useState(true);
	const [authorName, setAuthorName] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let todaysDate = new Date().toLocaleString('en-GB');

	const handleNewTask = () => {
		setNewItem({ date: todaysDate, author: authorName, task: newItemText });
		setNewItemText('');
		setAuthorName('');
		handleClose();
		console.log(newItem);
	};

	return (
		<div>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Create New Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h6>Date: {todaysDate}</h6>
					<Form>
						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Enter The Task</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								onChange={(e) => {
									setNewItemText(e.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlInput1'>
							<Form.Label>Authors Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Jamie Tardi'
								onChange={(e) => {
									setAuthorName(e.target.value);
								}}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleNewTask}>
						Add Task
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default NewItem;
