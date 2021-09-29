import React from 'react'
import { CardContainer } from '../styled-components/Card';

export const ProjectCard = ({ data }) => {

    const { name, imgUrl, body } = data;

    return (
        <CardContainer style={{
            backgroundImage: `url(${imgUrl})`,
        }}>
            <div className="project-card_profile" >
                <div className="project_information">
                    <h2>{name}</h2>
                    <p>{body}</p>
                </div>
            </div >
        </CardContainer>
    )
}