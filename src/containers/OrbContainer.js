import React from 'react'
import '../stylesheets/Orb.css'
import Orb from '../components/Orb'

const OrbContainer = () => {
    const text = <h1> Welcme to Habit</h1>
    return(
        <>
        {text}
        <div className='orb-container'>
            <Orb />
        </div>
        </>
    ) 
}

export default OrbContainer