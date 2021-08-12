import React from 'react'

export const ProjectCard = ({ data }) => {

    const { name, imgUrl, body } = data;

    return (
        <div className="project-card_container" style={{
            backgroundImage: `url(${imgUrl})`,
        }}>
            <div className="project-card_profile" >
                <div>
                    <h2>{name}</h2>
                    <p>{body}</p>
                </div>
            </div >
        </div >
    )
}