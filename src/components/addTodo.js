import React, { useContext, useState } from 'react';
import { MainContext } from '../App';

function AddTodo(props) {
	const [ todo, setTodo ] = useState(null);
	const [ error, setError ] = useState(null);
	const { setTodos, handleAdd, editData, editIndex, handleEdit, setEditData } = useContext(MainContext);

	return (
		<div>
			<div className="card">
				<h1>Add Todo</h1>
				<hr />
				<input
					placeholder="Enter Your Todo"
					onChange={(event) => {
						if (editData) {
							setEditData(event.target.value);
						} else {
							setTodo(event.target.value);
						}
					}}
					type="text"
					value={editData || ''}
					// onKeyPress={handleAdd}
				/>
				{error && <p>{error}</p>}

				{editData ? (
					<button type="submit" onClick={() => handleEdit(todo, setError)}>
						Add
					</button>
				) : (
					<button type="submit" onClick={() => handleAdd(todo, setError)}>
						Add
					</button>
				)}
			</div>
		</div>
	);
}

export default AddTodo;
