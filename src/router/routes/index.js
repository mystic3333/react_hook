import React, { Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Demo5 from '../../components/Demo5'
import Demo6 from '../../components/Demo6'

export default (
    <Fragment>
        <Switch>
            <Route exact path="/" component={Demo5}></Route>
            <Route exact path="/demo6" component={Demo6}></Route>
        </Switch>
    </Fragment>


)