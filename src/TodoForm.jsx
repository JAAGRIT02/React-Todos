import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ add }) {
	const [text, setText] = useState("");
	const handleChange = (evt) => {
		setText(evt.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		add(text);
		setText("");
	};
	return (
		<ListItem>
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					label="add todo"
					variant="outlined"
					value={text}
					onChange={handleChange}
					// Use InputProps instead of inputProps
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="add todo"
									edge="end"
									type="submit"
								>
									<Create />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</ListItem>
	);
}

{
	/* <OutlinedInput
	id="outlined-adornment-password"
	type={showPassword ? "text" : "password"}
	label="Password"
/>; */
}
