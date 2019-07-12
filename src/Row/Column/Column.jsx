import React from 'react';

const Column = (props) => {
	const columnStyle = {	  
	  position: 'relative',
	  width: '50%',
	  height: '300px',
	  backgroundColor: 'lightblue',
	  border: '1px solid black'
	};

	const spanStyle = {
	  display: 'inline-block',
	  position: 'absolute',
	  bottom: 0,
	  right: 0,
	  width: '20px',
	  height: '20px',
	  backgroundColor: 'red',
	};

	return (
		<div style={columnStyle}>
			<span style={spanStyle}></span>
		</div>
	);	
}

export default Column;