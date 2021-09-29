import styled from "styled-components";
import { media } from "./media.util";

export const ProjectsStyle = styled.div`

    text-align: center;
    margin: 100px;
    line-height: 40px;


    ${media.tablet}{
        width: 80%;
        margin: 100px auto
    }


    .projects_body{
        font-size: 20px;
        font-weight: lighter;
    }

    .projects_card-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }


`