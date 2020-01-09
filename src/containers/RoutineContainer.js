import React, { useState } from 'react'
import '../stylesheets/Orb.css'
import Orb from '../components/Orb'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import NewRoutineForm from '../forms/NewRoutineForm'
import TaskForm from '../forms/TaskForm'
import InteractiveFormContainer from './InteractiveFormContainer'

const RoutineContainer = () => {
    const [isVisible, setIsVisible] = useState({
        isVisible: false
    })

    const handleClick = e => {
        setIsVisible({...isVisible, isVisible: !isVisible.isVisible })
        
    }

    const toggleForm = isVisible.isVisible ? (
        
        <>
            <div>
            <InteractiveFormContainer />
            </div>

            <button className="pure-button" onClick={handleClick}>
                <FaPlus />
            </button>
        </>
         )
        :
         <button className="pure-button" onClick={handleClick}>
            <FaPlus />
        </button>
    
    
    return(
        <>
        <div>
            {toggleForm}
        </div>
        </>
    ) 
}

export default RoutineContainer