import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    // Si en la destructuracion el valor no existe, por defecto va el valor en vacio
    const {q = '' } = queryString.parse(location.search);
        
    //const heroesFiltered = heroes;
    const [FormValues, handleInputChange] = useForm(
        {
            heroSearch: q
        }
        );
    
    const {heroSearch} = FormValues;
    const heroesF = useMemo(() => getHeroByName(q), [q.trim()])
    //const heroesF = getHeroByName(heroSearch);

    const handleSubmit = (e) => {
        e.preventDefault();                
        history.push(`?q=${heroSearch}`);
    }

    return (
        <div>
            <h1>Search Hero Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            id="heroSearch"
                            name="heroSearch"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            value={heroSearch}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <br/>

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesF.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is not a hero with: { q }
                        </div>
                    }

                    {
                        heroesF.map((hero) => (
                            <HeroCard key={hero.id} {...hero} /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
