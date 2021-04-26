import React from 'react'
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom'

// todos los demas argumentos son recueprados por el operador rest
// ejemplo exact, path
export const PrivateRoute = (
    {
        isAuthenticated,
        component: Component,
        ...rest
    }
) => {
    return (
        //Esto coloca el exact, path solo es un puente
        <Route             
            { ...rest }
            component={ (props) => 
                (
                   ( isAuthenticated) 
                   ? ( <Component {...props } />)
                   : ( <Redirect to="/login" />)
                )
            }
        />
    )
}

PrivateRoute.prototypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}