import React from "react"
import { useContext } from "react"
import { MainContext } from "../../App"
import { GenreContainer, GenreTag } from "../../GeneralUse/StyledComponents/generalStyledComponent"

const UnMemoizeGenres: React.FC<{data?: number[]}> = ({data = []}) => {
    const context = useContext(MainContext)

    const findGenreName = (id: number) => {
        if(context){
            let genre = context.genre.find((genre)=>{
                    return genre.id === id
                })
                if(genre?.name) return genre.name
                return "Not Found"
        }
    }
    return(
        <GenreContainer>
                {data.map((id)=> {
                    let genreName = findGenreName(id)
                    if(genreName === "Not Found") return
                    return (
                        <GenreTag key={id}>
                            {genreName}
                        </GenreTag>
                    )
                })}
        </GenreContainer>
    )
}

const Genres = React.memo(UnMemoizeGenres)
export default Genres