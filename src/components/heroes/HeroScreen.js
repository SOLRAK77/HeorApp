import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroId } = useParams();

    const hero = getHeroesById(heroId);

    if ( !hero) {
        return <Redirect to="/" />; 
    }

    const {superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters} = hero;

    const hanldeReturn = () => {
        if(history.length <= 2){
            history.push("/");
        }
        else{
        history.goBack();
        }
    }

    return (
        <div>
            <h1>Hero Screen</h1>
            <hr/>   
            <div className="row mt-5">
                <div className="col-4">
                   <img 
                    src={`../../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                    />
                </div>
                <div className="col-8">
                    <h3>{superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                        <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                        <li className="list-group-item"><b>Firs appearance:</b> {first_appearance}</li>
                    </ul>
                    <h5>Characters</h5>
                    <p>
                        { characters}
                    </p>

                    <button 
                        className="btn btn-primary"
                        onClick={hanldeReturn}
                    >
                        Return
                    </button>
                </div>
            </div>            
        </div>
    )
}
