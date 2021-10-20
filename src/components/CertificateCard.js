import React from 'react'
import { CertificateContainer } from '../styled-components/StudiesContainer'

const CertificateCard = ({ data }) => {
    const { name, school, img, url } = data
    return (
        <>
            <CertificateContainer className="certificate_container-link" href={url} target="_blank">
                <img
                    src={img}
                    alt={name}
                />

                <div className="certificate_text">
                    <p>{name}</p>
                    <span className="certificate_school">{school}</span>
                </div>
            </CertificateContainer >
        </>
    )
}

export default CertificateCard