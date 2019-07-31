import React from 'react';

import Column from './Column/Column.jsx';

class Row extends React.Component {
	render() {
		const RowStyles = {
			display: 'flex',
			alignItems: 'stretch'
		};

		return (
			<div style={RowStyles.columnStyle}>
				<Column/>
			</div>
		)
	}
}

export default Row;