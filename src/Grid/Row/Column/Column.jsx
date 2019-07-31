import React from 'react';
import $ from "jquery";

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'lightblue'
        };
        this.controlSpan = this.controlSpan.bind(this);
        this.changeColorMove = this.changeColorMove.bind(this);
        this.changeColorUp = this.changeColorUp.bind(this);
    }

    componentDidMount() {
        $(".control").bind('mousedown', this.controlSpan);
    }

    controlSpan() {
        $(window).bind('mousemove', this.changeColorMove);
        $(window).bind('mouseup', this.changeColorUp);
    }

    changeColorMove() {
        this.setState({
            backgroundColor: 'green'
        });
    }

    changeColorUp() {
        this.setState({
            backgroundColor: 'yellow'
        });
    }

    render() {
        const ColumnStyles = {
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
            <div style={ColumnStyles.columnStyle}>
                ширина
             	<span className="controlSpan" style={ColumnStyles.spanStyle} onMouseDown={this.controlSpan}></span>
            </div>
        )
    }
}

export default Column;