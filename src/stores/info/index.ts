import { defineStore } from 'pinia';
import { state } from './state';
import { Api } from '@/services/swApi';
import { adaptPeople, adaptPlanets } from '@/helpers/adapters/swApiToStore/resources';
export * as ts from './ts';

export const useStore = defineStore('info', {
    state: () => state,
    actions: {
        async refreshPeople() {
            const people = await Api.people.getIndex();
            this.people = adaptPeople(people);
        },
        async refreshPlanets() {
            const planets = await Api.planets.getIndex();
            this.planets = adaptPlanets(planets);
        },
    },
});
