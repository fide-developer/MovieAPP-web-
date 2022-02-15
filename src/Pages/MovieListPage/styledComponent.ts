import styled from "styled-components";


export const MovieListPageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;

    width: 100%;
    min-height: 100vh;
`

export const HeaderGroup = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;

`

export const MovieListGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`