import React from 'react'
import { ItemsSkills } from './ItemsSkills';
import SVGReact from '../assets/img/react.svg'
import { SKILLS_DATA } from '../utils/data';
const InfoSkills = () => {
    const skills = SKILLS_DATA;

    return (
        <div className="info-skills_container">
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
                <div className="info-skills_container-img">
                    <img className="info-skills_img" src={SVGReact} alt="Img React SVG" />
                </div>
            </div>
        </div>
    )
}
export default InfoSkills;