import React from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { About, Work } from 'routes';
import { MainTheme } from 'shared/themes';

const App = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Route exact path="/" component={Work} />
            <Route exact path="/about" component={About} />
        </ThemeProvider>
    );
}

export default App;