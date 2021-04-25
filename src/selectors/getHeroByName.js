import { heroes } from "../data/heroes"

export const getHeroByName = ( name = '' ) => {

    if ( name.trim() === ''){
        return [];
    }
    
    return heroes.filter( hero => 
                hero.superhero.trim().toLocaleLowerCase().includes(name.toLocaleLowerCase()) 
            )
}
