import React, { useEffect, useRef, useState } from "react"
import { LinkButton } from "../../GeneralUse/StyledComponents/generalStyledComponent"
import { TitleLabel } from "../MovieBanner/styledComponent"
import { MovieListContainer, MovieListItem, HeaderMovieList, MovieGroupContainer, HideScroll } from "./styledComponent"


const MovieList: React.FC<{movieCategory: string}> = ({children, movieCategory}) => {
    const listRef = useRef<HTMLDivElement | null>(null)
    const [heightCorrection, setHeightCorrection] = useState<string>("0px")
    const [listPaddingCorrection, setListPaddingCorrection] = useState<string>("0px")
    
    //function to hide scroll space
    useEffect(() => {
        if(!listRef.current?.offsetHeight) return
        let offsetHeight: number = listRef.current?.offsetHeight
        let clientHeight:number = listRef.current?.clientHeight
        
        let listPaddingBottom = offsetHeight-clientHeight
        
        setListPaddingCorrection(`${listPaddingBottom}px`)
        
        setHeightCorrection(`${clientHeight}px`)
    }, [])
    
    let isScrolling: any
    const correctScroll = (scrollEvent: React.UIEvent<HTMLDivElement, UIEvent>) => {
        //reset the timeout
        window.clearTimeout( isScrolling );
        

	    // Set a timeout to run after scrolling ends
	    isScrolling = setTimeout(function() {
            

	}, 250);
    }

    return(
        <MovieGroupContainer>
            <HeaderMovieList><TitleLabel>{movieCategory}</TitleLabel><LinkButton>See More &gt;</LinkButton></HeaderMovieList>
            <HideScroll height={heightCorrection}>

                <MovieListContainer ref={listRef} paddingBottom={listPaddingCorrection} onScroll={(e)=>correctScroll(e)}>
                    {React.Children.map(children, (child: any, index:number)=> {
                        return(
                            <MovieListItem key={index}>
                                {React.cloneElement(child)}
                            </MovieListItem>
                        )
                    })}
                </MovieListContainer>
            </HideScroll>
        </MovieGroupContainer>
    )
}

export default MovieList