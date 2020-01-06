import React from 'react'
import { useSelector } from 'react-redux'
import OrbContainer from '../containers/OrbContainer'
import SignUpForm from '../forms/SignUpForm'

const Main = () => {
    const currentUser = useSelector(state => state.user.userInfo)
    
}

export default Main