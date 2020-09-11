import React from 'react';

import Layout from 'shared/components/Layout';
import { PAGE_NAME } from 'shared/constants/PageName';

const About = () => {

    return (
        <Layout pageName={PAGE_NAME.ABOUT}>
            About
        </Layout>
    );
}

export default About;