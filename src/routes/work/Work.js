import React, { useState } from 'react';

import { Gallery, GalleryItem } from 'shared/components/gallery';
import Layout from 'shared/components/Layout';
import { PAGE_NAME } from 'shared/constants/PageName';

import { PROJECT_IDS, PROJECT_NAMES } from './constants/Projects';

const randomColour = (previousColour) => {
    const colours = ["action200", "info200", "success200", "highlight200", "primary200", "warning200"];
    const i = Math.floor(Math.random() * colours.length);
    if (colours[i] !== previousColour) {
        return colours[i];
    } else {
        return randomColour(previousColour);
    }
}

const Work = () => {
    const [overlayColour, setOverlayColour] = useState(randomColour());

    return (
        <Layout pageName={PAGE_NAME.WORK}>
            <Gallery fillMaxHeight>
                {Object.values(PROJECT_IDS).map((projectId) => {
                    return (
                        <GalleryItem 
                            imageUrl={require(`assets/images/work/thumbnails/${projectId}.jpg`)}
                            overlayColour={overlayColour}
                            updateOverlayColour={() => setOverlayColour(randomColour(overlayColour))}
                            text={PROJECT_NAMES[projectId]} key={projectId} />
                    );
                })}
                </Gallery>
        </Layout>
    );
}

export default Work;