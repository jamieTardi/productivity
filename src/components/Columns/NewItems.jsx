import React from 'react';
import { Card, Button } from 'react-bootstrap';
import plus from '../../assets/icons/plus.svg';

const NewItems = ({ tasks, setShow }) => {
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
			<div>
				{tasks.map((task) => (
					<>
						<Card>
							<Card.Body className='d-flex justify-content-center align-center flex-column'>
								<Card.Title className='d-flex justify-content-center align-center flex-column'>
									{task.title}
								</Card.Title>
								<Button variant='primary'>Click to Open</Button>
							</Card.Body>
						</Card>
					</>
				))}
			</div>
		</div>
	);
};

export default NewItems;
