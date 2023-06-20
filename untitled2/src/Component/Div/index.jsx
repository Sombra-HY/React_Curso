import { GlobalContext } from '../Appcontext';
import { useContext } from 'react';

export const Div = () => {
    // Variaveis Globais sendo possiveis usar en todo o escopo arvore..
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
