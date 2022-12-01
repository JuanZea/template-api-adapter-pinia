import { defineStore } from 'pinia';
import { state } from './state';
import { refresh } from './actions';
export * as ts from './ts';

export const useStore = defineStore('info', {
    state: () => state,
    actions: {
        ...refresh,
    },
});
