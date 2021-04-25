import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import {types} from '../../types/types';

export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext);

    const handleAccesar = () => {
        // history.push('/');
        // La diferencia es que reemplaza el historia del nevagador
        // {
            //     name : 'Carlos'
            // }        
            
        dispatch(
            {
                type:types.login,
                payload : {
                    name : 'Carlos Castillo',
                    logged : true
                }
            }            
            );
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleAccesar}
            >
                Accesar
            </button>
        </div>
    )
}
