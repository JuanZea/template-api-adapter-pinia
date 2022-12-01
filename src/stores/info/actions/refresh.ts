import {
    convertToPersonArray,
    convertToPersonTotal,
    convertToPlanetArray,
    convertToPlanetTotal,
} from '@/helpers/adapters/swApiToStore/resources';
import { Api } from '@/services/swApi';
import { state } from '../state';

export const refreshPeople = async () => {
    const people = await Api.people.getIndex();
    state.people = convertToPersonArray(people);
    state.totals = {...state.totals, people: convertToPersonTotal(people)};
}

export const refreshPlanets = async () => {
    const planets = await Api.planets.getIndex();
    state.planets = convertToPlanetArray(planets);
    state.totals = {...state.totals, planets: convertToPlanetTotal(planets)};
}
