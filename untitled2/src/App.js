// import P from 'prop-types';
import './App.css';
import React, { createContext, useContext, useState } from 'react';

const globalState = {
    title: 'O título que contexto',
    body: 'O body do contexto',
    counter: 0,
};
const GlobalContext = createContext();
// Variaveis Globais sendo possiveis usar en todo o escopo arvore...

const Div = () => {
    const theContext = useContext(GlobalContext);
    const {
        cont: { title, counter },
    } = theContext;

    return (
        <div>
            <p>
                {title} {counter}
            </p>
        </div>
    );
};

function App() {
    const [cont, setCont] = useState(globalState);

    return (
        <GlobalContext.Provider value={{ cont, setCont }}>
            <div className="App">
                <Div />
            </div>
        </GlobalContext.Provider>
    );
}
export default App;
