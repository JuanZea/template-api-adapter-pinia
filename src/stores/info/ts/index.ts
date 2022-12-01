import { TPersonResource, TPlanetResource } from "./resources";
export * from "./resources";

export type TState = {
    totals?: {
        people?: number;
        planets?: number;
    },
    people?: TPersonResource[],
    planets?: TPlanetResource[],
}