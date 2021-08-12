import React from 'react'

export const ItemsSkills = ({ data }) => {
    const { name, imgUrl } = data
    return (
        <div>
            {
                !imgUrl ? (
                    <p className="skill_red">{name}</p>
                ) : (
                    <img
                        className="skill_img"
                        src={imgUrl}
                        alt={name}
                    />
                )
            }
        </div>

    )
}
