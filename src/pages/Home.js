import React from 'react'
import { useSelector, useEffect } from 'react-redux'
import OrbContainer from '../containers/OrbContainer'
import SignUpForm from '../forms/SignUpForm'
import RoutineContainer from '../containers/RoutineContainer'

const Home = () => {
    
    const currentUser = useSelector(state => state.user)
    
    const welcome = currentUser.token ? (
        <>
        <h1>Welcome Back {currentUser.userInfo.name}</h1>
        <div>
            <OrbContainer />
        </div>

        <div>
            <RoutineContainer />
        </div>
        </>
    ) :
    (
        <>
            <div id="welcome">
                <h1>Welcome to Habit</h1>
            </div>

            <div>
                <OrbContainer />
            </div>

            <div>
                <SignUpForm />
            </div>
        </>
    )

    
    return(
        welcome
    )
}

export default Home