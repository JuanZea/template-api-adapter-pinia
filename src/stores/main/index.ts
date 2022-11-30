import { defineStore } from 'pinia';
import { state } from './state';
export * as ts from './ts';

export const useStore = defineStore('main', {
    state: () => state,
});
