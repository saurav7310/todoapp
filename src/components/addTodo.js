import React from 'react';

function AddTodo(props) {
	return (
		<div>
			<div className="card">
				<h1>Add Todo</h1>
				<hr />
				<input placeholder="Enter Your Todo" type="text" />

				<button type="submit">Add</button>
			</div>
		</div>
	);
}

export default AddTodo;
