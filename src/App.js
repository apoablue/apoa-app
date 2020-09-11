import React from 'react';
import { Route } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { About, Home, New, Projects } from 'routes';
import { MainTheme } from 'shared/themes';

const App = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Route exact path="/apoa-app" component={Home} />
            <Route exact path="/apoa-app/projects" component={Projects} />
            <Route exact path="/apoa-app/new" component={New} />
            <Route exact path="/apoa-app/about" component={About} />
        </ThemeProvider>
    );
}

export default App;