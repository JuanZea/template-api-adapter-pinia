import axios from "axios";

const URL = 'https://swapi.dev/api/';
export const service = axios.create({ baseURL: URL });
