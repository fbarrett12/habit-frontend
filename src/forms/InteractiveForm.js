import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import '../stylesheets/TaskForm.css'
import NewRoutineForm from '../forms/NewRoutineForm'
import TaskForm from '../forms/TaskForm'

const InteractiveForm = props => {
    
    let active = props.toggle
    

    const handleChange = e => {
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
                <div>
                    <TaskForm onClick={handleChange}/>

                    <button 
                        className="pure-button pure-button-primary">
                            Next
                    </button>

                </div>
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
        else if(active === "routine"){
              
            return(
                <div>
                    <NewRoutineForm onClick={handleChange}/>

                    <button 
                        className="pure-button pure-button-primary">
                            Next
                    </button>
                    
                </div>
            )
            
        } 
        else {
           return( 
           <button 
            className="pure-button pure-button-primary">
                Next
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