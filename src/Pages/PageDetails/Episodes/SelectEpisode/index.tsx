import { useState } from "react"
import { seasonType } from "../../../../GeneralUse/Function/Api/type"
import { CustomSelect, OptionGroup, SelectOption } from "./styledComponent"


const SelectEpisode: React.FC<{selectedValue: number, onSelected: any, data: seasonType[]}> = ({selectedValue,onSelected,data}) => {
    const[selectActive, setSelectActive] = useState<boolean>(false)

    const updates = (index:number)=>{
        setSelectActive(state=>state = !state)
        onSelected(index)
    }

    return(
        <CustomSelect>
            <SelectOption onClick={()=>setSelectActive(state=> state = !state)}>Season {selectedValue+1}</SelectOption>
            <OptionGroup active={selectActive}>
                {data.map((sessions, index)=> <SelectOption key={sessions.id} onClick={()=>updates(index)}>Season {index+1}</SelectOption>)}
            </OptionGroup>
        </CustomSelect>
    )
}

export default SelectEpisode