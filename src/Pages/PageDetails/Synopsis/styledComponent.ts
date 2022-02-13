import styled from "styled-components";


export const SynopsisContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-flow: column nowrap;    
    color: white;
    overflow: hidden;
    width: 100%;
    
    h1{
        font-weight: 700;
        font-size: 20px;
        line-height: 23.44px;

        @media (min-width: 700px){
            font-size: 32px;
            line-height: 38px;
        }
    }
    @media (min-width: 700px){
        flex-grow: 1;
        width: 0;
    }
`

export const SynopsisDetails = styled.div`
    padding: 16px;
    background: rgba(36, 36, 36, 1);
    color: #9e9e9e;
    font-size:14px;
    line-height: 20px;

    @media (min-width: 700px){
        font-size:16px;
        line-height: 32px;
    }
`