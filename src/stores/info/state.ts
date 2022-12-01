import { reactive } from 'vue';
import { TState } from './ts';

export const state: TState = reactive({ totals: undefined, people: undefined, planets: undefined });
