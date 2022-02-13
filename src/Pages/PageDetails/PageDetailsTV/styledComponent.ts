import styled from "styled-components";

export const PageDetailsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-width:100vw;
    min-height: 100vh;
    padding: 144px 10% 0 10%;
`

export const MovieDetails = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
`
export const MovieDetailPoster = styled.div`
    flex: 2;
    background: white;
    position: relative;
    overflow: hidden;
    height:fit-content;
`

export const AboutMovie = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
    overflow:hidden;
    width: 100%;
`
export const MovieDetailsData = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
    flex: 5;
    overflow:hidden;
    width: 100%;
    color:white;
`