import { useEffect, useState } from "react"
import { seasonType } from "../../../../../GeneralUse/Function/Api/type"
import { CustomSelect, OptionGroup, SelectOption } from "./styledComponent"


const SelectEpisode: React.FC<{selectedValue: number, onSelected: any, data: seasonType[]}> = ({selectedValue,onSelected,data}) => {
    const[selectActive, setSelectActive] = useState<boolean>(false)
    const clickControl = (e:any) => {
        console.log(e)
        window.removeEventListener("click",clickControl)
        setSelectActive(false)
    }
    useEffect(()=>{
        if(selectActive)
        window.addEventListener("click", clickControl)
    },[selectActive])

    const updates = (index:number)=>{
        setSelectActive(state=>state = !state)
        onSelected(index)
    }
    return(
        <CustomSelect>
            <SelectOption onClick={()=>setSelectActive(state=> state = !state)}>{data[selectedValue].name}</SelectOption>
            <OptionGroup active={selectActive}>
                {data.map((sessions, index)=> {
                    if(index === selectedValue) return
                    return(
                        <SelectOption key={sessions.id} onClick={()=>updates(sessions.season_number)}>{sessions.name}</SelectOption>)}
                    )
                }
            </OptionGroup>
        </CustomSelect>
    )
}

export default SelectEpisode