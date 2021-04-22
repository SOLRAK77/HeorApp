import React from 'react'

export const LoginScreen = ({history}) => {

    const handleAccesar = () => {
        // history.push('/');
        // La diferencia es que reemplaza el historia del nevagador
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
