import React from 'react'
import { StudiesContainer } from '../styled-components/StudiesContainer';
import { CERTIFICATIONS } from '../utils/data';
import CertificateCard from './CertificateCard';

const Studies = () => {
    const data = CERTIFICATIONS;
    return (
        <StudiesContainer>
            <div className="studies_info">
                <h2>Estudios y certificaciones</h2>
                <p className="studies_text-info">
                    Gracias a las tecnologías y habilidades impartidas por la
                    universidad, sumado a las constantes capacitaciones
                    en cursos de TI, he logrado obtener conocimientos en importantes
                    lenguajes y librerías.
                </p>
            </div>
            <div className="studies_certificates-container">
                {
                    data.map(item => (
                        <CertificateCard key={item.id} data={item} />
                    ))
                }
            </div>
        </StudiesContainer>
    )
}

export default Studies;