import { useEffect, useState } from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";

const getInitialData = () => {
	const data = JSON.parse(localStorage.getItem("todos"));
	if (!data) {
		return []; //if there is nothing in local storage
	}
	return data;
};

export default function TodoList() {
	const [todos, setTodos] = useState(getInitialData);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const removeTodo = (id) => {
		//for removing one task
		setTodos((prevTodo) => {
			return prevTodo.filter((t) => t.id !== id); //filter all task accept when the id matches
		});
	};

	const toggleTodo = (id) => {
		setTodos((prevTodo) => {
			return prevTodo.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isCompleted: !todo.isCompleted };
				} else {
					return todo;
				}
			});
		});
	};
	const addTodo = (text) => {
		setTodos((prevTodo) => {
			return [
				...prevTodo,
				{ id: crypto.randomUUID(), text: text, isCompleted: false },
			];
		});
	};
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
					m: 3,
				}}
			>
				<Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
					TODOS
				</Typography>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}
				>
					{todos.map((todo) => {
						return (
							<TodoItem
								todo={todo}
								key={todo.id}
								remove={() => removeTodo(todo.id)}
								toggle={toggleTodo}
								// toggle={() => toggleTodo(todo.id)}
							/>
						);
					})}
					<TodoForm add={addTodo} />
				</List>
			</Box>
		</>
	);
}

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//       {[0, 1, 2, 3].map((value) => {

//       })}
//   );
// }
