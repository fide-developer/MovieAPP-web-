import styled from "styled-components";

//styled component for Caraousel container
export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    min-height: 500px;
    position: relative;
    background-color: rgba(0,0,0,0,0.1);
`
//styled Component for each child inside the Caraousel Component
export const CaraouselItem = styled.div<{opacityValue: number}>`
    width:100%;
    height:100%;
    transition: transform .5 ease;
    position: absolute;
    top:0;
    left:0;
    z-index: ${props => props.opacityValue === 0 ? -1 : 0};
    opacity: ${props => props.opacityValue};
    transition: opacity 1s ease;
`

//this styledcomponents is for the Carausel Navigation Prev / Next
const CaraouselNavigationIcon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    svg{
        fill: white;
        height:1.5em;
        width:auto;
    }
`
//set position for next icon
export const CaraouselNext = styled(CaraouselNavigationIcon)`
    right:1em;
`
//set position for previous icon
export const CaraouselPrev = styled(CaraouselNavigationIcon)`
    left: 1em;
`

//for dots indicator container
export const IndicatorContainer = styled.div`
    position: absolute;
    bottom: 1em;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-flow: row nowrap;
    gap: 12px;
`

export const Indicator = styled.div<{active: boolean}>`
    padding: 4px;
    border-radius: 50%;
    background-color: white;
    transition: opacity 1s ease;
    opacity: ${props => props.active ? 1 : .1}
`