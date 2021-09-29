import styled from "styled-components";
import { media } from "./media.util";

export const PersonalContainer = styled.div`
    margin-top: 90px;
    background-color: rgb(82, 116, 179);
    padding: 30px 10px
`

export const InfoSkillsContainer = styled.div`
    background: white;
    border-radius: 15px;
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    width: 80%;
    margin-top: -60px;
    border: 1px solid rgba(0, 0, 0, 0.07);

    p{
        margin: 20px;
        font-size: 20px;
        font-weight: lighter;
        line-height: 33px;


    }

    .info-skills_icons{
        width: 100%;
        padding: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center

    }

    ${media.tablet} {
        width: 100%
    }

    span{
        font-weight: bold;
        color: #5274b3;
    }

    .info-skills_info{
        padding: 15px;
    }

    .info-skills_container-img{
        width: 200px;
        float: right !important;
        margin-right: -100px;
        margin-top: -5px;

        .info-skills_img{
        width: 100%;
        }        
        
        ${media.tablet}{
            display: none
        }
    }


    .skill_img{
        width: 40px;
        height: 40px;
        margin: 10px;
    }
    
`