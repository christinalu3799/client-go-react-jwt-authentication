import React, { useEffect, useState } from 'react'

//                      👇🏼 in TypeScript, we need to define the type of the props that's being passed in
const Home = (props: {name: string}) => {
    return (
        <div>{props.name ? 'Hi ' + props.name : 'You are not logged in.'}</div>
    )
}

export default Home