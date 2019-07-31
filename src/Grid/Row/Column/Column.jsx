import React from 'react';

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'lightblue'
        };
        this.divMouseDown = this.divMouseDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.divMouseDown);
    }

    divMouseDown() {
        this.setState({
            backgroundColor: 'green'
        });
    }

    render() {
        const styles = {
            columnStyle: {
                position: 'relative',
                width: '50%',
                height: '300px',
                backgroundColor: this.state.backgroundColor,
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
            <div style={styles.columnStyle} onMouseDown={this.divMouseDown}>
                ширина
             	<span style={styles.spanStyle}></span>
            </div>
        )
    }
}

export default Column;