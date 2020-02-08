import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import '../stylesheets/TaskForm.css'

const NewRoutineForm = props => {
    console.log(props)
    const intActiveClick = () => props.button
    
    // initialize dispatch 
    const dispatch = useDispatch()

    // set up the local state with useState hook
    const [newRoutineForm, setNewRoutineForm] = useState({
       title: '',
       description: ''
    })

    // controlled form functions

    const handleClick = e => {
        e.preventDefault()
        intActiveClick()
        dispatch(userActions.setRoutineAction(newRoutineForm))
        // props.history.push('main')
        console.log("hi")
   }

   const handleChange = e => {
       setNewRoutineForm({...newRoutineForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { title, description} = newRoutineForm


   return(
        <fieldset>
            <label htmlFor="title">Title</label>
            <input 
            id="title" 
            type="text" 
            name="title"
            value={title} 
            onChange={handleChange}
            />
           
            <label htmlFor="name">Description</label>
            <input 
            id="name" 
            type="text" 
            name="description"
            value={description} 
            onChange={handleChange}
            />
            
            <button 
            onClick={handleClick} 
            className="pure-button pure-button-primary">
                Save
            </button>
        </fieldset>
   )
}

export default NewRoutineForm