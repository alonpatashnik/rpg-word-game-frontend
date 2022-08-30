import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedHP(){
    return (
        <div>
            <ProgressBar stripped variant = "danger" now = {100} ></ProgressBar>
            <ProgressBar animated now = {100} ></ProgressBar>
        </div>
    )}

export default AnimatedHP;