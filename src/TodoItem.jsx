import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";

export default function TodoItem({ todo, remove, toggle }) {
	const labelId = `checkbox-list-label-${todo.id}`;
	const toggleTodo = () => {
		toggle(todo.id);
	};
	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="comments" onClick={remove}>
					<Delete />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton role={undefined} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={todo.isCompleted}
						tabIndex={-1}
						disableRipple
						inputProps={{
							"aria-labelledby": labelId,
						}}
						onChange={toggleTodo}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={todo.text} />
			</ListItemButton>
		</ListItem>
	);
}
