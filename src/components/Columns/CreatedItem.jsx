import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreatedItem = ({ tasks, taskId, showTaskModal, setShowTaskModal }) => {
	//needs fixing
	const task = tasks[0];
	console.log(task);
	return (
		<div>
			{tasks ? (
				<Modal
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered
					show={showTaskModal}>
					<Modal.Header
						closeButton
						onClick={() => {
							setShowTaskModal((prev) => !prev);
						}}>
						<Modal.Title id='contained-modal-title-vcenter'>
							{task.title}
						</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Created on: {task.date}</p>
						<p>Author: {task.author}</p>
						<p>{task.description}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button
							onClick={() => {
								setShowTaskModal((prev) => !prev);
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
