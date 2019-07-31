import React from 'react';
import $ from "jquery";

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'lightblue'
        };
        this.spanMouseDown = this.spanMouseDown.bind(this);
    }

    componentDidMount() {
        $(".control").bind('mousedown', this.spanMouseDown);
    }

    spanMouseDown() {
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
            <div style={styles.columnStyle}>
                ширина
             	<span className="control" style={styles.spanStyle} onMouseDown={this.spanMouseDown}></span>
            </div>
        )
    }
}

export default Column;