import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics','Marvel Comics'];

    if (!validPublisher.includes(publisher) ){
        throw new Error(`The publisher ${publisher} no es correcto`);
    }

    console.log('Entro');

    return heroes.filter(hero => hero.publisher === publisher);
}
