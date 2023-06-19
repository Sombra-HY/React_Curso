import P from 'prop-types';
import './App.css';
import React, { useState, useCallback } from 'react';

const Button = React.memo(function Button({ sumCountera }) {
    return <button onClick={() => sumCountera()}>+</button>;
});

Button.propTypes = {
    sumCountera: P.func,
};

function App() {
    const [counter, setCounter] = useState(0);

    const sumCounter = useCallback(() => {
        setCounter((c) => c + 1);
    }, []);

    console.log('pai');
    return (
        <div className="App">
            <p>teste 3</p>
            <h1>Contador:{counter}</h1>
            <Button sumCountera={sumCounter} />
        </div>
    );
}
export default App;
