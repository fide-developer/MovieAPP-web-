import React, { useEffect, useRef, useState } from "react"
import { CaraouselItem, CaraouselNext, CaraouselPrev, CarouselContainer, Indicator, IndicatorContainer } from "./styledComponent"
import {ReactComponent as NavigatePrev} from "./navigate_before.svg"
import {ReactComponent as NavigateNext} from "./navigate_next.svg"


//this function is learn by Dan Abramov (https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
//this custom hooks is to update the state inside the useInterval
const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef(() => {});

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {

        //set the callback function
        const callbackFunction = () => {
            savedCallback.current();
        }
        //only run the interval whenever delay inputed
        if (!delay) return

        let id = setInterval(callbackFunction, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const Carousel: React.FC = ({children}) => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
    
    //state that holds react children number
    const [numberOfChild,setNumberOfChild] = useState<number>(0)

    // function to update image index (change position of the images)
    const updateImageIndex  = (index: number) => {
        //showing the last child when it hit the prev on the first child 
        if(index<0) {
            setActiveImageIndex(sum => sum = numberOfChild-1)
            return
        }

        //showing the first child when it hits the last
        if(index>=numberOfChild) {
            setActiveImageIndex(sum => sum = 0)
            return
        }

        setActiveImageIndex(sum => sum = index)
    }
    
    //auto move child / carousel
    useInterval(()=>{
        updateImageIndex(activeImageIndex+1)
    }, 5000)
    
    //update whenever child changes
    useEffect(()=> {
        setNumberOfChild(sum => sum = React.Children.count(children))
    },[children])

    return(
        <CarouselContainer>
            
            {React.Children.map(children, (child: any, index: number) => {
                return (
                    <CaraouselItem key={index} opacityValue={activeImageIndex===(index)? 1 : 0}>
                        {React.cloneElement(child)}
                    </CaraouselItem>
                )
            })}
            {/* navigation control */}
            <CaraouselPrev onClick={()=> updateImageIndex(activeImageIndex - 1)}>
                <NavigatePrev/>
            </CaraouselPrev>

            <CaraouselNext onClick={()=> updateImageIndex(activeImageIndex + 1)}>
                <NavigateNext/>
            </CaraouselNext>

            {/* indicator */}
            <IndicatorContainer>
                {React.Children.map(children, (child: any, index: number) => <Indicator active={activeImageIndex === index} />)}
            </IndicatorContainer>
        </CarouselContainer>
    )
} 

export default Carousel