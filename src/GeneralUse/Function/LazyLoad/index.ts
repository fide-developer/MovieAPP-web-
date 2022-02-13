import React from "react"

//this will orbserve the image container (div) whether it showed inside the viewport or no
const LazyLoad = (target: React.RefObject<HTMLDivElement>, onIntersect: IntersectionObserverCallback) => {
    
    // as simply as the margin on the viewbox
    let rootMargin = "0px"
    // the threshold is percentage of the div element that showed in the viewbox
    // it says that for every 0.1 part of the div appear, the orserver will run the callback
    let threshold = 0.1
    React.useEffect(()=>{
        const orbserver = new IntersectionObserver(onIntersect,{
            rootMargin,
            threshold
        })

        const current = target.current
        if(current) orbserver.observe(current)
        

        return ()=>{
            if(current) orbserver.unobserve(current)
        }
    },[])
}

export default LazyLoad