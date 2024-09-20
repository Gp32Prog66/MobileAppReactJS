import React from 'react'

/*
function Salve()
{
    return <h1>Salve "Hello" in the hallway </h1>
}
*/


const Salve = props =>
{
    console.log(props)
    return <h1>Salve "Hello" in the hallway {props.name }</h1>
}


export default Salve;