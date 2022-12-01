import { TS_People, TS_Planets } from '@/services/swApi';
import { TS_Info } from '@/stores';

export const convertToPersonArray = (people: TS_People.TPersonCollection): TS_Info.TPersonResource[] =>
    people.results.map((person) => ({
        name: person.name,
    }));

export const convertToPersonTotal = (people: TS_People.TPersonCollection): number => people.count;

export const convertToPlanetArray = (planets: TS_Planets.TPlanetCollection): TS_Info.TPlanetResource[] =>
planets.results.map((planet) => ({
    name: planet.name,
    diameter: planet.diameter,
}));

export const convertToPlanetTotal = (planets: TS_Planets.TPlanetCollection): number => planets.count;
