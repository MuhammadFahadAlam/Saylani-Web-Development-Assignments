import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons(props) {
	const [alignment, setAlignment] = React.useState('new');

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
	};

	return (
		<ToggleButtonGroup
			value={alignment}
			exclusive
			onChange={handleAlignment}
			aria-label='text alignment'
		>
			<ToggleButton value='new' aria-label='left aligned'>
				{props.opt1}
			</ToggleButton>
			<ToggleButton value='used' aria-label='centered'>
				{props.opt2}
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
