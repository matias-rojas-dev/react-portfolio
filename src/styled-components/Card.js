import styled from "styled-components";


export const CardContainer = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 330px;
    height: 350px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.315);
    margin: 10px;
    overflow: hidden;
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

export const ImgSection = styled.div`
    height: 230px;
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
`

export const InfoSection = styled.div`

    border-top: 1px solid #D3D7DC;
    height: 120px;
    a{
        text-decoration: none;
        color: black
    }
    h2 {
        margin: 0
    }
    p {
        height: 100%;
        margin: 0 10px
    }
`


