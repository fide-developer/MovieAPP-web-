import styled from "styled-components";


export const EpisodesListContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-flow: column nowrap;
    width:100%;
    overflow:hidden;
`

export const EpisodesHeader = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 16px;
    height: fit-content;
`

export const TitleEpisode = styled.div`
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
`

export const EpisodeList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-height: 100vh;
    overflow: auto;
`