import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import TryPage from '../Pages/TryPage'

export default function Router(){
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/try">
                    <TryPage />
                </Route>
            </Switch>  
        </div>
    )
}