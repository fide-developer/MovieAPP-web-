import styled from "styled-components";


export const CastDetailContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    color: white;
    gap: 8px;
    width: fit-content;
    h1{
        display: block;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        @media (min-width: 700px){
            font-size: 16px;
            line-height: 32px;
        }
    }

    @media (min-width: 700px){
        flex-flow: column nowrap;
    }
`

export const CasterName = styled.h2`
    display: block;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 700px){
        font-size: 16px;
        line-height: 32px;
    }
`