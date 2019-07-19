import React from 'react';

class Column extends React.Component {


    render() {
        const styles = {
            columnStyle: {
                position: 'relative',
                width: '50%',
                height: '300px',
                backgroundColor: 'lightblue',
                border: '1px solid black'
            },
            spanStyle: {
                display: 'inline-block',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '20px',
                height: '20px',
                backgroundColor: 'red'
            }
        };

        return (
            <div style={styles.columnStyle}>
                ширина
             	<span style={styles.spanStyle}></span>
            </div>
        )
    }
}

export default Column;