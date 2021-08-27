import React from 'react';

function TodosCard(props) {
	return (
		<div>
			<div style={{ width: '300px', boxShadow: '2px 3px 7px grey' }}>
				<h1>{props.title}</h1>
			</div>
		</div>
	);
}

export default TodosCard;
