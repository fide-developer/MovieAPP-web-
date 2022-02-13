import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 2px;

    svg{
        fill: white;
        height: 10px;
        width: auto;
        
        @media (min-width: 700px){
            height: 13px;
        }
    }
`