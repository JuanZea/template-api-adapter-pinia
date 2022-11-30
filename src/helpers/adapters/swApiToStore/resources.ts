import { TS_People, TS_Planets } from '@/services/swApi';
import { TS_Info } from '@/stores';

export const adaptPeople = (people: TS_People.TPersonCollection): TS_Info.TPersonResource[] =>
    people.results.map((person) => ({
        name: person.name,
    }));

export const adaptPlanets = (planets: TS_Planets.TPlanetCollection): TS_Info.TPlanetResource[] =>
    planets.results.map((planet) => ({
        name: planet.name,
        diameter: planet.diameter,
    }));
