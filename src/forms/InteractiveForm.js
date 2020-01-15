import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import '../stylesheets/TaskForm.css'
import NewRoutineForm from '../forms/NewRoutineForm'
import TaskForm from '../forms/TaskForm'

const InteractiveForm = props => {
    
    let active = props.toggle
    console.log(active)

    const handleClick = e => {
        console.log(active)
        if(active === "routine"){
            active = "tasks"
        }
        else if (active === "tasks"){
            active = "review"
        }
    }

    const toggle = active => {
        if(active === "tasks"){ 
            return(
                <>
                    <TaskForm button={handleClick}/>
                </>
            )              
        } 
        else if(active === "routine"){  
            return(
                <>
                    <NewRoutineForm button={handleClick}/>
                </>
            )
            
        }
        else if(active === "review"){
            return( 
                 <button 
                     className="pure-button pure-button-primary">
                         Next
                 </button>
            )
         } 
        else {
           return( 
           <button 
            className="pure-button pure-button-primary">
                hm
           </button>
           )
        }
    }

    return(
        <>
            {toggle(active)}
        </>
    )
}
    
export default InteractiveForm