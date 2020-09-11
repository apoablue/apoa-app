import React from 'react';

import { Gallery, GalleryItem } from 'shared/components/gallery';
import Layout from 'shared/components/Layout';
import { PAGE_NAME } from 'shared/constants/PageName';

import { PROJECT_IDS, PROJECT_NAMES } from './constants/Projects';

const Projects = () => {

    return (
        <Layout pageName={PAGE_NAME.PROJECTS}>
            <Gallery fillMaxHeight>
                {Object.values(PROJECT_IDS).map((projectId) => {
                    return (
                        <GalleryItem 
                            imageUrl={require(`assets/images/projects/thumbnails/${projectId}.jpg`)} 
                            text={PROJECT_NAMES[projectId]} key={projectId} />
                    );
                })}
                </Gallery>
        </Layout>
    );
}

export default Projects;