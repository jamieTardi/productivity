import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CreatedItem = ({ tasks, taskId }) => {
	const [show, setShow] = useState(true);

	return (
		<div>
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
					<Modal.Title id='contained-modal-title-vcenter'>
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
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
		</div>
	);
};

export default CreatedItem;
