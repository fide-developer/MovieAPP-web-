import styled from "styled-components";


export const SynopsisContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
    flex-grow: 1;
    color: white;
    overflow: hidden;
    width: 0;
    h1{
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
    }
`

export const SynopsisDetails = styled.div`
    padding: 16px;
    background: rgba(36, 36, 36, 1);
    color: #9e9e9e;
`