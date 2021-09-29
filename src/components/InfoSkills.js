import React from 'react'
import { ItemsSkills } from './ItemsSkills';
import { SKILLS_DATA } from '../utils/data';
import { InfoSkillsContainer } from '../styled-components/InfoSkills';


const InfoSkills = () => {
    const skills = SKILLS_DATA;

    return (
        <InfoSkillsContainer>
            <div className="info-skills_info">
                <h2>Habilidades</h2>
                <p>
                    Mis habilidades en la programación están destinadas a la correcta
                    implementación de buenas prácticas con tecnologías modernas y
                    requeridas en el mercado.
                </p>
                <span>Mis principales lenguajes y habilidades</span>
                <div className="info-skills_icons">
                    {
                        skills.map(item => (
                            <ItemsSkills key={item.id} data={item} />
                        ))
                    }
                </div>
            </div>
        </InfoSkillsContainer>
    )
}
export default InfoSkills;