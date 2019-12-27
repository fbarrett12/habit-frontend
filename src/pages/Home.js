import React from 'react'
import { useSelector } from 'react-redux'
import OrbContainer from '../containers/OrbContainer'
import SignUpForm from '../forms/SignUpForm'

const Home = () => {
    
    return(
        <>
        <div >
            <OrbContainer />
        </div>
        <div>
            <SignUpForm />
        </div>
        </>
    )
}

export default Home