import styled from "styled-components";


export const CardContainer = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 330px;
    height: 350px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.315);
    margin: 10px;

    .project-card_profile {
        
        background-color: #eef4f8;
        align-items: center;
        text-align: center;

        h2 {
            color: #334454;
            font-size: 1.2rem;
        }
    
        p {
            color: #a1b2bc;
            font-size: 0.8rem;
        }

        .project_information{
            width: 100%;
            bottom: 0
        }
    }

}


`