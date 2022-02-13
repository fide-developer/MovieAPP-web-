import styled from "styled-components";


export const GenreTag = styled.div`
    padding: 4px 8px;
    width: fit-content;
    color: rgb(15, 239, 253);
    background:rgba(15, 239, 253, .1);
    border-radius: 0 8px;
`

export const Section = styled.div`
    padding-top: 18px;
`

export const RoundedButton = styled.div`
    cursor: pointer;
    color: yellow;
    font-weight: 500;
    font-size: 18px;
    padding: 16px 48px;
    line-height: 24px;
    width: fit-content;
    border-radius: 40px;
    border: 1px solid yellow;
    box-shadow: 0px 40px 40px 8px rgba(0, 0, 0, 0.12);
    transition: box-shadow .25s ease; 

    :hover{
        background-color: rgba(255,255,0,0.2);
        border: 0.5px solid yellow;
        box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
    }
`

export const LinkButton = styled.p`
    text-decoration:none;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: yellow;
`

export const GenreContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    flex-shrink: 1;
`