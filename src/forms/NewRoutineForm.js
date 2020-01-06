import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const NewRoutineForm = props => {
   // initialize dispatch 
   const dispatch = useDispatch()

   // set up the local state with useState hook
   const [newRoutineForm, setNewRoutineForm] = useState({
       title: '',
       description: ''
   })

   // controlled form functions
   const handleSubmit = e => {
       e.preventDefault()

            dispatch(userActions.newRoutineToDB(newRoutineForm, "http://localhost:3000/routines"))
        
        // props.history.push('main')
   }

   const handleChange = e => {
       setNewRoutineForm({...newRoutineForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { title, description} = newRoutineForm

   return(
    <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
        <fieldset>

    
            <label htmlFor="title">Title</label>
            <input 
            id="username" 
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
            
            <button type="submit" className="pure-button pure-button-primary">Create New Routine</button>
        </fieldset>
    </form>
   )

}

export default NewRoutineForm