import styled from "styled-components";


export const CustomSelect = styled.div`
    width:155px;
    background: rgba(36, 36, 36, 1);
    position: relative;
    color:#9e9e9e;
`

export const SelectOption = styled.div`
    padding: 4px 16px;
    width: 100%;
    background: rgba(36, 36, 36, 1);
    cursor: pointer;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);

    font-size: 14px;

    @media (min-width: 700px){
        font-size: 16px;
        line-height: 18.75px;
    }
`
export const OptionGroup = styled.div<{active:boolean}>`
    visibility: ${props => props.active? "visible" : "collapse"};
    position: absolute;
    top:100%;
    width:100%;
    background: rgba(36, 36, 36, 1);
    z-index: 100;
`