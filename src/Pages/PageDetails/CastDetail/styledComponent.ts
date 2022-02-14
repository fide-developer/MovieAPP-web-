import styled from "styled-components";


export const CastDetailContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    color: white;
    gap: 8px;
    width: fit-content;
    align-items: center;
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
        align-items: flex-start;
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
export const CasterGroup = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    overflow: hidden;
    gap: 0.5em;

    ${CasterName}{
        ::after{
            content:", ";
        }
        @media (min-width: 700px){
            flex-flow: row wrap;
            ::after{
                content:"";
            }
        }
    }
    @media (min-width: 700px){
        flex-flow: column wrap;
    }
`