import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
};

export default App;
