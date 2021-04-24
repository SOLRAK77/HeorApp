import { heroes } from '../data/heroes';

export const getHeroesById = (IdHero) => {
    return heroes.find(hero => hero.id === IdHero);
}