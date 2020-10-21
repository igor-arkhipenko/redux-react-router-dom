import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {connect} from "react-redux";
import {loginAction} from "../actions/appAction";
import { push } from 'connected-react-router'

const Login = (props: any) => {
    let history = useHistory();
    let location = useLocation();

    // let { from } = location.state || { from: { pathname: "/" } };
    const { loginAction, push } = props
    const login = () => {
        loginAction()
        push()
    };

    return (
        <div>
            <p>You must log in to view the page at {/*{from.pathname}*/}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.auth
})

const mapDispatchToProps = (dispatch: any) => ({
    loginAction: () => dispatch(loginAction()),
    push: () => dispatch(push('/protected'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
