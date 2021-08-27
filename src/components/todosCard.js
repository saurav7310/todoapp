import React from 'react';

function TodosCard(props) {
	return (
		<div>
			<div style={{ boxShadow: '2px 3px 7px grey', margin: '10px 20px 10px 20px', padding: 10 }}>
				<div>
					<span style={{ color: 'green', textTransform: 'capitalize' }}>{props.title}</span>{' '}
					<span>
						<button onClick={props.onEdit}>edit</button>
					</span>
					<span>
						<button onClick={() => props.onDelete()}>delete</button>
					</span>
				</div>
			</div>
		</div>
	);
}

export default TodosCard;
