import React from 'react'
import { Link } from 'react-router-dom'

const CertificateCard = ({ data }) => {
    const { name, school, img, url } = data
    return (
        <div>
            <a className="certificate_container" href={url}>
                <img src={img} />
                <div className="certificate_text">
                    <p>{name}</p>
                    <span className="certificate_school">{school}</span>
                </div>
            </a >
        </div >
    )
}

export default CertificateCard