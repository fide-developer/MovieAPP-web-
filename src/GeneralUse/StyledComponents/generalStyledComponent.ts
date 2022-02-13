import styled from "styled-components";


export const GenreTag = styled.div`
    padding: 4px 8px;
    width: fit-content;
    color: rgb(15, 239, 253);
    background:rgba(15, 239, 253, .1);
    border-radius: 0 8px;
    font-size: 10px;
    line-height: 16px;

    @media (min-width: 700px){
        font-size: 14px;
    }
`

export const Section = styled.div`
    padding-top: 18px;
`

export const RoundedButton = styled.div`
    cursor: pointer;
    color: yellow;
    font-weight: 500;
    padding: 16px 48px;
    font-size: 14px;
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
    
    @media (min-width: 700px){
        font-size: 18px;
    }
`

export const LinkButton = styled.p`
    text-decoration:none;
    font-style: normal;
    font-weight: 700;
    color: yellow;
    font-size: 14px;
    line-height: 16.41px;
    
    @media (min-width: 700px){
        font-size: 16px;
        line-height: 19px;
    }
`

export const GenreContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    flex-shrink: 1;
    height: 20px;
    overflow: hidden;

    @media (min-width: 700px){
        height: fit-content;
    }
`