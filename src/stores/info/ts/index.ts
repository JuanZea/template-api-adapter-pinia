import { TPersonResource, TPlanetResource } from "./resources";
export * from "./resources";

export type TState = {
    people?: TPersonResource[],
    planets?: TPlanetResource[],
}