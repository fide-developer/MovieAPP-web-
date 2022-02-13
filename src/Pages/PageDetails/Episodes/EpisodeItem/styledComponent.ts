import styled from "styled-components";


export const EpisodeContainer = styled.div`
    display:flex;
    flex-flow: row nowrap;
    padding: 24px 0;
    gap: 15px;
    border-bottom: 1px solid #9e9e9e;
    color: #9e9e9e;
    width:100%;
    overflow: hidden;
`

export const VideoPlayer = styled.div`
    aspect-ratio: 160 / 100;
    background-color: white;
    width:160px;
    height: auto;
`

export const EpisodeDetail = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 13px;
    flex-grow:1;
    overflow:hidden;
    width: 0%;
`

export const EpisodeHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    width: 100%;
`

export const EpisodeTitle=styled.div`
        color: white;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        flex-grow:1;
`

export const MovieDuration = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`

export const EpisodeOverview = styled.div`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
`