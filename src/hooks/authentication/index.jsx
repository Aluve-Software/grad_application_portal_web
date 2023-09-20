import React from 'react'
import Proptypes from 'prop-types'

const Context = React.createContext()

function useAuthValidation() {
    return React.useContext(Context)
}

export function AuthValidationsProvider(props) {
    const emailValidation = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        let isSuccess = null
        let message = null

        if(emailRegex.test(email)) {

        }

    }

    const passwordRequirements = () => {
        return false
    }

    const passwordsComparisson = () => {
        return false
    }

    const value = {}
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

AuthValidationsProvider.prototype = {
    
}

export const AuthenticationHook = { AuthValidationsProvider, useAuthValidation }