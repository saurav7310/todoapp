import logo from './logo.svg';
import './App.css';
import AddTodoPage from './pages/addTodoPage';
import { createContext, useEffect, useState } from 'react';

export const MainContext = createContext({});

function App() {
	const [ todos, setTodos ] = useState([]);
	const [ editData, setEditData ] = useState(null);
	const [ editIndex, setEditIndex ] = useState(-1);

	useEffect(() => {
		let data = localStorage.getItem('todos');
		let arrData = JSON.parse(data);
		setTodos(arrData);
	}, []);

	const handleAdd = (todo, setError) => {
		if (todo == null || todo == '') {
			setError('please write todo');
			setTimeout(() => {
				setError(null);
			}, 5000);
		} else {
			const getData = localStorage.getItem('todos');
			const data = getData == null ? [] : JSON.parse(getData);
			data.push(todo);

			localStorage.setItem('todos', JSON.stringify(data));
			setTodos(data);
			console.log(getData);
		}
	};

	const handleDelete = (i) => {
		const getData = localStorage.getItem('todos');
		const data = getData == null ? [] : JSON.parse(getData);

		if (i > -1) {
			data.splice(i, 1);
		}

		localStorage.setItem('todos', JSON.stringify(data));
		setTodos(data);
	};

	const handleEdit = () => {
		const getData = localStorage.getItem('todos');
		const data = getData == null ? [] : JSON.parse(getData);

		data[editIndex] = editData;

		localStorage.setItem('todos', JSON.stringify(data));
		setTodos(data);
		setEditData(null);
		setEditIndex(-1);
	};

	return (
		<MainContext.Provider
			value={{
				todos,
				setTodos,
				setEditData,
				editData,
				setEditIndex,
				setEditIndex,
				handleAdd,
				handleDelete,
				handleEdit
			}}
		>
			<div className="App">
				<AddTodoPage />
			</div>
		</MainContext.Provider>
	);
}

export default App;
