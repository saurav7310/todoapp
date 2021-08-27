import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from '../components/addTodo';
import Todolist from '../components/todolist';

function AddTodoPage(props) {
	return (
		<div>
			<div className="grid">
				<div>
					<AddTodo />
				</div>
				<div>
					<Todolist />
				</div>
			</div>
		</div>
	);
}

export default AddTodoPage;
