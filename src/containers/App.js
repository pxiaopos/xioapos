import React, { Component } from 'react'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'

import Order from './Order'
import History from './History'

class App extends Component {
    render() {
        const needRedirect = this.props.match.path === this.props.location.pathname

        return (
            <Switch>
                {needRedirect && <Redirect from="/" to='/order' />}
                <Route path="/order" render={props => <Order {...props} />} />
                <Route path="/history" render={props => <History {...props} />} />
            </Switch>
        )
    }
}

export default withRouter(App)