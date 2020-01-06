import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import userActions from './redux/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.token){
      dispatch(userActions.persistUser())
    }
  }, [dispatch])
  return (
   <Router >
      <div className="app">
      <Routes />
      </div>
    </Router>
  )
}

export default App
