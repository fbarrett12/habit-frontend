import React from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import { useSelector } from 'react-redux'
import '../stylesheets/TaskForm.css'

const ReviewForm = () => {
    // initialize dispatch 
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user)
    const currentRoutine = useSelector(state => state.routine)
    const currentTasks = useSelector(state => state.taskList)

    const mappedTasks = currentTasks.map(task => {
        return task
    })

    const handleSubmit = e => {
        e.preventDefault()
 
        dispatch(userActions.newRoutineToDB(currentRoutine , "http://localhost:3000/routines"))
        dispatch(userActions.newTasklistToDB(currentTasks, "http://localhost:3000/tasks"))
         // props.history.push('/')
    } 

    return(
        <>
            {currentRoutine.title}
            <br></br>
            {currentRoutine.description}
            <br></br>
            {mappedTasks}
            <br></br>
            <button type="submit" onClick={handleSubmit}
                className="pure-button pure-button-primary">
                    Submit
            </button>
        </>
    )
}

export default ReviewForm

    

