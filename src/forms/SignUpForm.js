import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const SignUpForm = props => {
   // initialize dispatch 
   const dispatch = useDispatch()

   // set up the local state with useState hook
   const [signupForm, setSignupForm] = useState({
       username: '',
       name: '',
       password: '',
   })

   // dynamically sets sign up routes 
//    let submitRoute = signupForm.role.toLowerCase
//    console.log(submitRoute)

   // controlled form functions
   const handleSubmit = e => {
       e.preventDefault()

        dispatch(userActions.newUserToDB(signupForm, "http://localhost:3000/users"))
        // props.history.push('/')
   }

   const handleChange = e => {
       setSignupForm({...signupForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { username, name, password} = signupForm

   return(
    <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Sign Up</legend>

            <label for="username">Email</label>
            <input 
            id="username" 
            type="username" 
            name="username"
            value={username} 
            onChange={handleChange}
            />
           

            <label for="name">Name</label>
            <input 
            id="name" 
            type="name" 
            name="name"
            value={name} 
            onChange={handleChange}
            />
            

            <label for="password">Password</label>
            <input 
            id="password" 
            type="password"
            name="password" 
            value={password}
            onChange={handleChange} 
            />

            <button type="submit" className="pure-button pure-button-primary">Sign in</button>
        </fieldset>
    </form>
   )

}

export default SignUpForm