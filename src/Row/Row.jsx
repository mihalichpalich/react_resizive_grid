import React from 'react';

import Column from './Column/Column.jsx';

const Row = (props) => {
	const rowStyle = {	  
	  display: 'flex'
	};

	return (
		<div style={rowStyle}>
			<Column />
			{/*<Column />*/}
		</div>
	);	
}

export default Row;