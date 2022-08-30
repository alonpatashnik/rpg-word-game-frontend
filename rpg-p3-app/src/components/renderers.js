import React, { PureComponent } from 'react';


// box is where stuff renders and plays 
class Box extends PureComponent {
    render() {
        const size = 100;
        const x = this.props.x - size / 2;
        const y = this.props.y - size / 2;
        return (
            <section style={{ position: "absolute", width: size, height: size, backgroundColor: "red", left: x, top: y }} />
        );
    }
}

export { Box }