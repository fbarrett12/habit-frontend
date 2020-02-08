import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import userActions from '../redux/actions'
import '../stylesheets/TaskForm.css'

const TaskForm = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user)
    const currentRoutine = useSelector(state => state.routine)
    
    const [taskForm, setTaskForm] = useState({
        content: '',
        userId: currentUser.id,
        routineId: currentRoutine.id
    })

    const handleChange = e => {
        setTaskForm({...setTaskForm, [e.target.name]: e.target.value })
    }

    const handleClick = e => {
        e.preventDefault()
        dispatch(userActions.setTask(taskForm))
    }

    const { content, userId, routineId } = taskForm
    
    return(
        
                    <fieldset className="section is-active">
                        <h3>List Tasks</h3>
                        <input 
                        type="text" 
                        name="content" 
                        id="title" 
                        value={content}
                        onChange={handleChange}/>

                        <button className="pure-button pure-button-primary" onClick={handleClick}>
                            Save
                        </button>
                    </fieldset>
            
    )
}

export default TaskForm