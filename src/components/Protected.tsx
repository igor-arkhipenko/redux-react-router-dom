import React from 'react'
import {logoutAction} from "../actions/appAction";
import {connect} from "react-redux";

const Protected = (props: any) => {
    const {logoutAction} = props

    const logout = () => {
        console.log('logout')
        logoutAction()
    }

  return (
    <div>
      <h1>Protected page</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
    logoutAction: () => dispatch(logoutAction())
})

export default connect(null, mapDispatchToProps)(Protected)