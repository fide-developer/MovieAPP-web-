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
    padding: 0 10%;
    width: 100%;
    ${TitleLabel}{
        font-size: 32px;
        line-height: 37.5px;
    }
`

export const HideScroll = styled.div<{height: string}>`
    height: ${props => props.height};
    width:100%;
    position:relative;
    overflow: hidden;
`
export const MovieListContainer = styled.div<{paddingBottom:string}>`
    
    padding-left: 10%;
    overflow-x: auto;
    padding-bottom: ${props => props.paddingBottom};
    display: flex;
    flex-flow: row nowrap;
    gap:30px;
    width: 100%;
    overflow-y: hidden;
`

export const MovieListItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 292px;
    gap: 30px;
    position:relative;
    background-color:white;
    overflow:hidden;
`