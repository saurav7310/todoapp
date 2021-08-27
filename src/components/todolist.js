import React, { useContext } from 'react';
import { MainContext } from '../App';
import TodosCard from './todosCard';

function Todolist(props) {
	const { todos, handleDelete, setEditData, setEditIndex } = useContext(MainContext);
	return (
		<div>
			<div className="card">
				<h1>Todo List</h1>
				<hr />
				{todos &&
					todos.map((item, index) => (
						<TodosCard
							title={item}
							onEdit={() => {
								setEditData(item);
								setEditIndex(index);
							}}
							onDelete={() => handleDelete(index)}
						/>
					))}
			</div>
		</div>
	);
}

export default Todolist;
