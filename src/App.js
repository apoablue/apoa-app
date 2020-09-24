import React from "react";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";

import { About, Work } from "routes";
import { MainTheme } from "shared/themes";
import { PROJECT_IDS, PROJECT_PATHS } from "shared/constants/Projects";

const App = () => {
    return (
        <ThemeProvider theme={MainTheme}>
            <Route exact path="/" component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.LADIES_POND]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.PLAYA_PLAYA]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.CHRISTINE]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.CARNIVAL]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.THE_GUEST]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.HIGH_WINDOWS]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.POWER_OF_PRINT]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.BLOODY_MESS]}`} component={Work} />
            <Route exact path={`/${PROJECT_PATHS[PROJECT_IDS.SKETCHBOOK]}`} component={Work} />
            <Route exact path="/about" component={About} />
        </ThemeProvider>
    );
}

export default App;
