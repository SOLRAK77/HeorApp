import React, {useEffect, useReducer} from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const init = () => {
    // Si el objeto no existe en el localStorage, se carga como un dato no logeado
    return JSON.parse(localStorage.getItem('user')) || { logged:false};
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);
    useEffect(( ) =>{
        localStorage.setItem('user',JSON.stringify(user))
    } , [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
