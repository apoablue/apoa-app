import React from 'react';

import Layout from 'shared/components/Layout';
import { PAGE_NAME } from 'shared/constants/PageName';

const Home = () => {

    return (
        <Layout pageName={PAGE_NAME.HOME}>
            Home
        </Layout>
    );
}

export default Home;