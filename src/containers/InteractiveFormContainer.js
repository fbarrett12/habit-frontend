import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import InteractiveForm from '../forms/InteractiveForm'
import '../stylesheets/TaskForm.css'

const InteractiveFormContainer = () => {
    
    
    const [toggle, setToggle] = useState({
        isActive: true,
        id: 'routine'
    })

    

    const handleClick = e => {
        
        console.log(e.target)
         let ul = document.getElementsByClassName(e.target.parentElement.className)
        
        // li.classList.remove("is-active")
        // setToggle({...toggle, isActive: !toggle.isActive })
        setToggle({...toggle, id: e.target.id})

        for (let i = 0; i < ul.length; ++i){

            if(ul[i].className === 'is-active'){
                ul[i].classList.remove('is-active')
            }
            else  if(ul[i].id === toggle.id){
                ul[i].classList.add('is-active')
            }

        } 

    }

    const  {isActive, id } = toggle
    
    return(
        <>
            <div className="container">
                <div className="wrapper">

                    <ul className="steps" onClick={handleClick}>
                        <li id="routine" onClick={handleClick} >Create Routine</li>
                        <li id="tasks" onClick={handleClick} >Create Tasks</li>
                        <li id="review" onClick={handleClick} >Review</li>
                    </ul>

                    <form className="form-wrapper">
                        <InteractiveForm toggle={id} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default InteractiveFormContainer