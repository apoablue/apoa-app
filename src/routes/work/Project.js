import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import { Carousel } from "shared/components/carousel";
import { Gallery } from "shared/components/gallery";
import { ImageWithTextOverlay } from "shared/components/image";
import { PROJECT_IDS, PROJECT_IMAGES, PROJECT_NAMES, PROJECT_PATHS } from "shared/constants/Projects";

const Project = ({ projectId }) => {
    return (
        <>
            <Gallery maxWidth="250">
                {PROJECT_IMAGES[projectId].map(({ id, title }) => {
                    return (
                        <ImageWithTextOverlay 
                            imageUrl={require(`assets/images/work/sketchbook/${id}.jpg`)}
                            overlayColour="info400"
                            text={title} 
                            key={id} />
                    );
                })}
            </Gallery>
            <Carousel>
                {Object.values(PROJECT_IDS).map((id) => {
                    return (
                        <Link to={`/${PROJECT_PATHS[id]}`} key={id}>

                            <ImageWithTextOverlay 
                                imageUrl={require(`assets/images/work/thumbnails/${id}.jpg`)}
                                overlayColour="action400"
                                text={PROJECT_NAMES[id]} key={id} />
                        </Link>
                    );
                })}
            </Carousel>
        </>
    );
}

Project.propTypes = {
    projectId: propTypes.oneOf(Object.values(PROJECT_IDS)),
};

export default Project;