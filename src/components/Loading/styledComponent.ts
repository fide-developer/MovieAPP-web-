import styled, { keyframes } from "styled-components";


export const LoadingContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    width:100%;
    color: #9e9e9e;
`
const loadingAnimation = keyframes`
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
`
export const LoadingAnimation = styled.div`
    height: 20px;
    width: 20px;
    border: 2px solid #9e9e9e;
    border-right: none;
    border-radius: 50%;
    animation: ${loadingAnimation} 1s linear infinite; 
`

export const LoadingText = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
`