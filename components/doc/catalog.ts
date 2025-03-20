import catalog from "./catalog.json";

export interface Catalog {
    title: string;
    slug: string;
}

export default catalog as Catalog[];
