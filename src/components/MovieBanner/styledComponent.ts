import styled from "styled-components";


export const MovieBannerContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 10px 12%;
    overflow: hidden;
    position:relative;
    background: rgba(0,0,0,0.6);
    img{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        mix-blend-mode: darken;
        object-fit: cover;
    }
`

export const MovieDetail = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
    width:65%;
    z-index:1;
`

export const TitleLabel = styled.div`
    font-weight: 700;
    line-height: 64px;
    font-size: 56px;
    color: white;
    white-space: nowrap;
`

export const DescriptionLabel = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color:white;
    flex-shrink: 1;
    overflow: hidden;
`