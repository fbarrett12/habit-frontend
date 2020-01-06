// API CONSTANTS

const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/auth';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions

const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const setRoutineAction = routineObj => ({
  type: 'SET_ROUTINE',
  payload: routineObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
})

// Fetches

const newUserToDB = (userObj, url) => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    }
    fetch(url, config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data))
        localStorage.setItem('token', data.token)
      })
  }
  
  const deleteUserFromDB = userId => dispatch => {
    const config = {
      method: 'DELETE'
    }
    fetch(SPECIFIC_USER_URL(userId), config).then(r => {
      dispatch(clearUserAction())
      localStorage.clear()
    })
  }
  
  
  const loginUserToDB = userCredentials => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    }
    fetch(LOGIN_URL, config)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        dispatch(setUserAction(data))
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.userInfo)
      })
  }
  
  const persistUser = () => dispatch => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `bearer ` + localStorage.token
      }
    }
    fetch(PERSIST_URL, config)
      .then(r => r.json())
      .then(userInstance => {    
        dispatch(setUserAction(userInstance))
        localStorage.setItem('token', userInstance.token)
      })
  }
  
  const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
  }

  const newRoutineToDB = (routineObj, url) => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(routineObj)
    }
    fetch(url, config)
      .then(r => r.json())
      .then(data => {
        dispatch(setRoutineAction(data))
      })
  }

  export default {
    newUserToDB,
    deleteUserFromDB,
    loginUserToDB,
    persistUser,
    logoutUser,
    newRoutineToDB,
  }