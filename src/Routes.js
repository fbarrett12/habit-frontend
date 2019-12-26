import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Pages from './pages'


 const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Pages.Home} />
        </Switch>
       
    )
}

export default Routes