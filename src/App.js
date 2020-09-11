import React from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { About, Home, New, Projects } from 'routes';
import { MainTheme } from 'shared/themes';

const App = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/new" component={New} />
            <Route exact path="/about" component={About} />
        </ThemeProvider>
    );
}

export default App;