import styled, { keyframes } from "styled-components";


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

export const VideoPlayer = styled.div<{aspectRatio?: number}>`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: ${props => props.aspectRatio ? props.aspectRatio : 160 / 100};
    background-color: #ebebeb;
    width:160px;
    height: fit-content;

    position: relative;
    overflow: hidden;

    img{
        transform: scale(1.1);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const PlayVideoButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top:50%;
    left:50%;
    background: rgba(0,0,0,0.6);
    transform: translate(-50%, -50%);
    border-radius: 50%;
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
    flex-flow: column nowrap;
    gap: 5px;
    width: 100%;

    @media (min-width: 700px){
        flex-flow: row nowrap;
        align-items: flex-end;
        gap:0;
    }
`

export const MovieDuration = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 11.72px;

    @media (min-width: 700px){
        font-size: 16px;
        line-height: 19px;    
    }
`

export const EpisodeOverview = styled.span`
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    
    @media (min-width: 700px){
        font-size: 16px;
        line-height: 32px;
    }
`

export const PlaceHolderText = styled.div<{width: string}>`
    background-color: #ebebeb;
    display: block;
    height: 1em;
    margin-bottom: 1em;
    overflow: hidden;
    position: relative;
    width: ${props => props.width};
`

export const EpisodeTitle=styled.div`
        color: white;
        font-weight: 700;
        font-size: 14px;
        line-height: 16.41px;
        flex-grow:1;
        
        ${PlaceHolderText}{
            margin-bottom: 0;   
        }
        
        @media (min-width: 700px){
            font-size: 20px;
            line-height: 23px;
        }
`

const PlaceholderAnimation = keyframes`
    0% {
        transform: translateX(-50%);
    }
    50% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-50%);
    }
`

export const ContentPlaceHolderBackground = styled.span`
    animation: ${PlaceholderAnimation} 1s linear infinite;
    background: linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(207,207,207,1) 50%, rgba(235,235,235,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(207,207,207,1) 50%, rgba(235,235,235,1) 100%);
    background: -moz-linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(207,207,207,1) 50%, rgba(235,235,235,1) 100%);
    background-blend-mode: darken;
    opacity: 0.9;
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000f0f0f', endColorstr='#00ffffff',GradientType=1 ); */
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width:200%;
    will-change: transform;
    z-index: 1;
`