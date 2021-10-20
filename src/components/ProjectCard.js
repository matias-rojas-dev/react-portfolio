import React from 'react'
import { CardContainer, ImgSection, InfoSection } from '../styled-components/Card';

export const ProjectCard = ({ data }) => {

    const { name, url, imgUrl, body } = data;

    return (
        <CardContainer>
            <ImgSection imgUrl={imgUrl}>
            </ImgSection>
            <InfoSection>
                <a
                    href={url}
                    rel="noreferrer"
                    target='_blank'
                >
                    <h2>{name}</h2>
                </a>

                <p>{body}</p>
            </InfoSection>
        </CardContainer>
    )
}