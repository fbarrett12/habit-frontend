import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'
import '../stylesheets/TaskForm.css'

const TaskForm = () => {

    const [taskForm, setTaskForm] = useState({
        content: '',
        taskItems: [],
    })

    const handleChange = e => {
        setTaskForm({...setTaskForm, [e.target.name]: e.target.value })
    }

    const handleClick = e => {
        setTaskForm({
            ...setTaskForm,
            taskItems: taskForm.taskItems.push(content)
        })
    }

    const { content } = taskForm
    
    return(
        
                    <fieldset className="section is-active">
                        <h3>List Tasks</h3>
                        <input 
                        type="text" 
                        name="content" 
                        id="title" 
                        value={content}
                        onChange={handleChange}/>

                        <button className="pure-button pure-button-primary" onClick={handleClick}>Next</button>
                    </fieldset>
            
    )
}

export default TaskForm