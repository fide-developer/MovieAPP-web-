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
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        
        @media (min-width: 700px){
            font-size: 20px;
            line-height: 23.44px;
        }
`

export const EpisodeList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-right: 1em;
`