import React from 'react';
import TodosCard from './todosCard';

function Todolist(props) {
	return (
		<div>
			<div className="card">
				<h1>Todo List</h1>
				<hr />
				<TodosCard title="piyush" />
				<TodosCard title="Saurabh" />
			</div>
		</div>
	);
}

export default Todolist;
