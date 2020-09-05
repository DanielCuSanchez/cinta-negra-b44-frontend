import React, {useEffect, useState} from 'react'

export const Counter =  ()=>{
    // const [counter, setCounter] = useState({count: 0})

    // const increment = ()=>{
    //     setCounter({count: counter.count+1})
    // }
    // const decrement = ()=>{
    //     setCounter({count: counter.count-1})
    // }
    // return(
    //     <div>
    //         <h1>{counter.count}</h1>
    //         <button onClick={ increment } >increment</button>
    //         <button onClick={ decrement } >decrement</button>
    //     </div>
    // )
    const [coordenadas, setCoordenadas ] = useState({x: 0, y:0})
    useEffect(() => {
        const mouseMove = (e)=>{
            const coordenadasNuevas = { x: e.clientX, y: e.clientY}
            setCoordenadas(coordenadasNuevas)
        }
       window.addEventListener('mousemove',mouseMove)
    },[])

    return(
        <div>
            { JSON.stringify(coordenadas)}
        </div>
    )
}