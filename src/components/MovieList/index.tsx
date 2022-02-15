import React, { useEffect, useRef, useState } from "react"
import { LinkButton } from "../../GeneralUse/StyledComponents/generalStyledComponent"
import { ContentPlaceHolderBackground } from "../../Pages/PageDetails/PageDetailsTV/Episodes/EpisodeItem/styledComponent"
import { TitleLabel } from "../MovieBanner/styledComponent"
import { MovieListContainer, MovieListItem, HeaderMovieList, MovieGroupContainer, HideScroll } from "./styledComponent"


const MovieList: React.FC<{movieCategory: string, loading: boolean}> = ({children, movieCategory, loading}) => {
    const listRef = useRef<HTMLDivElement | null>(null)
    const [heightCorrection, setHeightCorrection] = useState<string>("fit-content")
    const [listPaddingCorrection, setListPaddingCorrection] = useState<string>("0px")
    
    //function to hide scroll space
    useEffect(() => {
        if(loading) return
        if(listRef.current?.offsetHeight){
            let offsetHeight: number = listRef.current?.offsetHeight
            let clientHeight:number = listRef.current?.clientHeight
            
            let listPaddingBottom = offsetHeight-clientHeight
            
            setListPaddingCorrection(`${listPaddingBottom}px`)
            
            setHeightCorrection(`${clientHeight}px`)
        }
    }, [children])
    

    //function for handling grab scroll
    const [isGrab, setIsGrab] = useState<boolean>(false)
    const [clickPosition, setClickPosition] = useState<number>()
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!listRef.current) return

        setClickPosition(e.clientX)
        setScrollPosition(listRef.current.scrollLeft)
        setIsGrab(true)
    }
    const handleMouseGrab = (move: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!isGrab) return
        if(!clickPosition) return
        if(!listRef.current) return
        move.preventDefault()

        let moveTo = move.clientX
        let moves = clickPosition > moveTo ? scrollPosition + ((clickPosition-moveTo)*1.5) : scrollPosition - ((moveTo - clickPosition)*1.5)
        
        listRef.current?.scroll({left: moves,behavior:'smooth'})
    }

    return(
        <MovieGroupContainer>
            <HeaderMovieList><TitleLabel>{movieCategory}</TitleLabel><LinkButton>See More &gt;</LinkButton></HeaderMovieList>
            <HideScroll height={heightCorrection}>

                <MovieListContainer grabPointer={isGrab} ref={listRef} paddingBottom={listPaddingCorrection} 
                onMouseDown={(e)=>handleClick(e)} 
                onMouseUp={()=>setIsGrab(false)} 
                onMouseMove={(e)=> handleMouseGrab(e)}
                onMouseLeave={()=>setIsGrab(false)}>
                    {!loading && React.Children.map(children, (child: any, index:number)=> {
                        return(
                            <MovieListItem draggable={false} key={index} onDragStart={(e)=> e.preventDefault()}>
                                {React.cloneElement(child)}
                            </MovieListItem>
                        )
                    })}
                    {loading && <MovieListItem><ContentPlaceHolderBackground /></MovieListItem>}
                    {loading && <MovieListItem><ContentPlaceHolderBackground /></MovieListItem>}
                    {loading && <MovieListItem><ContentPlaceHolderBackground /></MovieListItem>}
                    {loading && <MovieListItem><ContentPlaceHolderBackground /></MovieListItem>}
                    {loading && <MovieListItem><ContentPlaceHolderBackground /></MovieListItem>}
                </MovieListContainer>
            </HideScroll>
        </MovieGroupContainer>
    )
}

export default MovieList