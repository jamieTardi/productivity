import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const NewItem = ({
	newItemText,
	setNewItemText,
	newItem,
	setNewItem,
	tasks,
	setTasks,
	show,
	setShow,
}) => {
	const [authorName, setAuthorName] = useState('');
	const [title, setTitle] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let todaysDate = new Date().toLocaleString('en-GB');

	const handleNewTask = () => {
		setNewItem({
			id: uuidv4(),
			date: todaysDate,
			title,
			author: authorName,
			description: newItemText,
		});
	};

	const handleAddTasks = () => {
		setTasks([...tasks, newItem]);
		setNewItemText('');
		setAuthorName('');
		handleClose();
	};

	return (
		<div>
			<Form>
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

						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Title</Form.Label>
							<Form.Control
								type='name'
								placeholder='Title'
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>

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
						<Button onClick={handleNewTask}>Save Tasks</Button>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' type='submit' onClick={handleAddTasks}>
							Add Task
						</Button>
					</Modal.Footer>
				</Modal>
			</Form>
		</div>
	);
};

export default NewItem;
