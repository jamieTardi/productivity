import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreatedItem = ({ tasks, taskId }) => {
	const [show, setShow] = useState(true);

	const task = tasks[0];
	console.log(task);
	return (
		<div>
			{tasks ? (
				<Modal
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					show={show}>
					<Modal.Header
						closeButton
						onClick={() => {
							setShow((prev) => !prev);
						}}>
						<Modal.Title id='contained-modal-title-vcenter'></Modal.Title>
					</Modal.Header>
					<Modal.Title>{task.title}</Modal.Title>
					<Modal.Body>
						<p>Created on: {task.date}</p>
						<p>Author: {task.author}</p>
						<p>{task.description}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() => {
								setShow((prev) => !prev);
							}}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			) : (
				''
			)}
		</div>
	);
};

export default CreatedItem;
