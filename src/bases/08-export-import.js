import { heroes } from "../data/heroes";
export const getHeroreById = (id) => heroes.find(heroe => heroe.id === id);
export const getHeroresByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);