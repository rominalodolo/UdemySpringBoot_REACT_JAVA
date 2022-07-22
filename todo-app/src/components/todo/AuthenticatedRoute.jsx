import React, { Component } from 'react'
import { Route, Navigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Navigate to="/login" />
        }

    }
}

export default AuthenticatedRoute