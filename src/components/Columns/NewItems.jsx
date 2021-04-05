import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import plus from '../../assets/icons/plus.svg';
import { CreatedItem } from './Index';
import Draggable from 'react-draggable';

const NewItems = ({ tasks, setShow, setTasks }) => {
	const [taskModal, setTaskModal] = useState(true);
	const [selectedTask, setSelectedTask] = useState(null);
	const [showTaskModal, setShowTaskModal] = useState(true);

	const handleOpenTask = (taskId) => {
		setSelectedTask(
			tasks.filter((item) => {
				return item.id === taskId;
			}),
		);
		setShowTaskModal(true);
	};

	const handleRemoveTask = (taskId) => {
		setTasks(tasks.filter((item) => item.id !== taskId));
	};

	return (
		<div className='new-items-container'>
			<Card>
				<Card.Header className='d-flex justify-content-center align-center'>
					New Task
				</Card.Header>
				<Card.Body className='d-flex justify-content-center align-center flex-column'>
					<Card.Text>Click on the button below to create a new task.</Card.Text>
					<Button
						variant='success'
						onClick={() => {
							setShow(true);
						}}>
						<img src={plus} />
					</Button>
				</Card.Body>
			</Card>

			{/* New task being created */}

			{tasks.map((task) => (
				<Draggable>
					<div className='box'>
						<Card>
							<Card.Body className='d-flex justify-content-center align-center flex-column'>
								<Card.Title className='d-flex justify-content-center align-center flex-column text-center'>
									{task.title}
								</Card.Title>
								<Button
									variant='primary'
									onClick={() => {
										handleOpenTask(task.id);
									}}>
									Click to Open
								</Button>
								<Button
									variant='danger'
									className='mt-2'
									onClick={() => {
										handleRemoveTask(task.id);
									}}>
									Remove 🗑️
								</Button>
							</Card.Body>
						</Card>
					</div>
				</Draggable>
			))}

			<div>
				{selectedTask ? (
					<CreatedItem
						selectedTask={selectedTask}
						showTaskModal={showTaskModal}
						setShowTaskModal={setShowTaskModal}
					/>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default NewItems;
