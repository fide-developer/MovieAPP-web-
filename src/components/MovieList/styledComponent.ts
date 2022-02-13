import styled from "styled-components";
import { TitleLabel } from "../MovieBanner/styledComponent";


export const MovieGroupContainer = styled.div`
    padding: 32px 0 0 0;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    gap: 24px;
    overflow-x: hidden;
`

export const HeaderMovieList = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    width: 100%;
    ${TitleLabel}{
        font-size: 20px;
        line-height: 23.44px;
        
        @media (min-width: 700px){
            font-size: 32px;
            line-height: 37.5px;
        }
    }
    
    @media (min-width: 700px){
        padding: 0 10%;
    }
`

export const HideScroll = styled.div<{height: string}>`
    height: ${props => props.height};
    width:100%;
    position:relative;
    overflow: hidden;
`
export const MovieListContainer = styled.div<{paddingBottom:string}>`
    overflow-x: auto;
    padding-bottom: ${props => props.paddingBottom};
    display: flex;
    flex-flow: row nowrap;
    gap:30px;
    width: 100%;
    overflow-y: hidden;
    padding-left: 1em;
    
    @media (min-width: 700px){
        padding-left: 10%;
    }
`

export const MovieListItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position:relative;
    background-color:white;
    overflow:hidden;
    width: 160px;
    
    @media (min-width: 700px){
        width: 292px;
    }
`