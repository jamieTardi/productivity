import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreatedItem = ({
	selectedTask,
	taskId,
	showTaskModal,
	setShowTaskModal,
}) => {
	//needs fixing
	const task = selectedTask[0];
	console.log(selectedTask);
	return (
		<div>
			{selectedTask ? (
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
						<p>Description: {task.description}</p>
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
