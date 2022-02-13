import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkButton } from "../../GeneralUse/StyledComponents/generalStyledComponent";

export const MovieDetail = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    transition: transform .5s ease;
    z-index:1;
`

export const MovieCardContainer = styled(Link)`
    display: flex;
    overflow: hidden;
    flex-flow: column nowrap;
    aspect-ratio: 350/527;
    /* position: relative; */
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    background: rgba(0,0,0,0.6);
    cursor: auto;
    img{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        object-fit: cover;
        mix-blend-mode: multiply;
        transition: transform .5s ease;
    }
    
    ${LinkButton}{
        visibility: collapse;
        opacity: 0;
        z-index: 1;
        transition: opacity .5s ease;
    }
    :not(.links),:hover{
        cursor: pointer;
        img{
            transform: scale(1.1)
        }
        ${MovieDetail}{
            transform: translateY(-19px)
        }
        ${LinkButton}{
            visibility: visible;
            opacity:1;
        }
    }
    :not(.links){
        cursor: default;
    }

`

export const MovieCardTitle = styled.div`
    font-weight: 500;
    color:white;
    font-size: 16px;
    line-height: 23px;
    
    @media (min-width: 700px){
        font-size: 24px;
        line-height: 32px;
    }
`
export const LineGroups = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;

    align-items: center;
    justify-content: center;
`

export const ReleaseYear = styled.div`
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    color: #9e9e9e;

    ::before{
        content:"";
        display:inline-block;
        min-width: 5px;
        min-height: 5px;
        border-radius: 50%;
        background: white;
    }

    @media (min-width: 700px){
        font-size:16px;
        line-height: 32px;
    }
`