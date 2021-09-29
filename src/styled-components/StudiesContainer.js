import styled from "styled-components";
import { media } from "./media.util";


export const StudiesContainer = styled.div`
    margin-top: 90px;
    background-color: rgb(82, 116, 179);
    padding: 30px 10px;
    color: white;

    .studies_info {
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    .studies_text-info{
        font-size: 20px;
        font-weight: lighter;
        margin-bottom: 50px
    }


    .studies_certificates-container{
        display: flex;
        justify-content: space-evenly;

        ${media.tablet}{
            width: 80%;
            margin: 0 auto;
            flex-direction: column
        }
    
    }

`

export const CertificateContainer = styled.a`
    display: flex;
    align-items: center;
    margin: 10px ;
    padding: 5px 0;
    padding-right: 5px;
    background: rgb(233, 233, 233);
    border: 1px solid rgba(0, 0, 0, 0.07);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.315);
    border-radius: 5px;
    text-decoration: none;

    ${media.desktop}{
        width: 100%
    }

    img{
        width: 80px;
        height: 80px;
        padding-left: 6px;
    }

    .certificate_text{
        display: flex;
        flex-direction: column;
        padding-left: 6px;
        font-size: 14px;
        color: black;
        padding-bottom: 10px;
        line-height: 22px;

    }

    
    .certificate_school{
        font-size: 13px;
        font-weight: lighter;
    }

`