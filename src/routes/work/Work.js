import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Gallery } from "shared/components/gallery";
import { ImageWithTextOverlay } from "shared/components/image";
import Layout from "shared/components/Layout";
import { PAGE_NAME } from "shared/constants/PageName";
import { PROJECT_IDS, PROJECT_NAMES, PROJECT_PATHS } from "shared/constants/Projects";
import { randomColour } from "shared/utils/randomColour";

import Project from "./Project";

const Work = () => {
    const location = useLocation();
    const path = location?.pathname?.substring(1);
    const id = Object.values(PROJECT_IDS).find(id => PROJECT_PATHS[id] === path);
    const [selectedProject, setSelectedProject] = useState(id);
    const [overlayColour, setOverlayColour] = useState(randomColour());

    return (
        <Layout pageName={PAGE_NAME.WORK}>
                {!selectedProject && (
                    <Gallery>
                        {Object.values(PROJECT_IDS).map((projectId) => {
                            return (
                                <Link to={`/${PROJECT_PATHS[projectId]}`} key={projectId}>
                                    <ImageWithTextOverlay 
                                        imageUrl={require(`assets/images/work/thumbnails/${projectId}.jpg`)}
                                        onClick={() => setSelectedProject(projectId)}
                                        overlayColour={overlayColour}
                                        updateOverlayColour={() => setOverlayColour(randomColour(overlayColour))}
                                        text={PROJECT_NAMES[projectId]} />
                                </Link>                            
                            );
                        })}
                    </Gallery>
                )}
                {selectedProject && <Project projectId={selectedProject} />}              
        </Layout>
    );
}

export default Work;