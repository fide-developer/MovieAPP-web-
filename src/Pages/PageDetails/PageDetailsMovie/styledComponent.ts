import styled from "styled-components";
import { MovieCardContainer, MovieCardTitle, ReleaseYear } from "../../../components/MovieCard/styledComponent";

export const PageDetailsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width:100%;
    min-height: 100vh;
    overflow:hidden;
    
    @media (min-width: 700px){
        padding: 144px 0 20px 0;
    }
`

export const MovieDetails = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 30px;
    @media (min-width: 700px){
        flex-flow: row nowrap;
        padding: 0 10%;
    }
`
export const MovieDetailPoster = styled.div`
    ${MovieCardContainer}{
        aspect-ratio: 375/280;
    }
    aspect-ratio: 375/280;
    ${ReleaseYear}{
        visibility: visible;
    }
    width: 100%;
    background: white;
    position: relative;
    overflow: hidden;
    height:fit-content;
        @media (min-width: 700px){
            flex:2;
            aspect-ratio: 350/527;
            ${MovieCardContainer}{
                aspect-ratio: 350/527;
        }
    }

    ${MovieCardTitle}{
        font-size: 24px;
        line-height: 28.13px;
        
        @media (min-width: 700px){
            line-height: 32px;
        }
    }
`

export const AboutMovie = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    overflow:hidden;
    width: 100%;
    overflow: hidden;

    padding-bottom: 20px;
    border-bottom: 1px solid #9e9e9e;
    
    @media (min-width: 700px){
        flex-flow: row nowrap;
        padding-bottom: 0;
        border-bottom: none;
    }
`
export const MovieDetailsData = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    flex: 5;
    overflow:hidden;
    width: 100%;
    color:white;
    padding: 0 1em;
    
    @media (min-width: 700px){
        padding:0;
    }
`