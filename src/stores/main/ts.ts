type Item = {
    name: string;
    value: string;
}

export type TState = {
    count: number,
    name?: string,
    isAdmin: boolean,
    items: Item[],
    hasChanged: boolean,
}