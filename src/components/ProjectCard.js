import React from 'react'

export const ProjectCard = ({ data }) => {

    const { name, imgUrl, body } = data;

    return (
        <div class="project-card_container" style={{
            backgroundImage: `url(${imgUrl})`,
        }}>
            < div div class="project-card_profile" >
                <div>
                    <h2>{name}</h2>
                    <p>{body}</p>
                </div>
            </div >
        </div >
    )
}