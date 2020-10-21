import React from "react"
import { Route, Redirect } from 'react-router-dom'
import {connect} from "react-redux";

const PrivateRoute = (props: any) => {
    const { rest, component: Component, auth } = props

    console.log('auth = ', auth)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
