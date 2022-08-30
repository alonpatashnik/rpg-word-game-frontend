import React, { PureComponent } from 'react';
import { GameEngine } from 'react-game-engine';
import { Box } from './renderers';
import { MoveBox } from './systems';

export default class SimpleGame extends PureComponent {
    render() {
        return (
            <GameEngine
                style={{ width: 800, height: 600, backgroundColor: "blue" }}
                systems={[MoveBox]}
                entities={{
                    // each entity has a unique id (required)
                    // and a renderer property (which is optional)
                    // if no renderer is with the entity, it won't be displayed
                    box1: { x: 200, y:200, renderer: <Box />}
                }}>
    
                </GameEngine>
        );
    }
}