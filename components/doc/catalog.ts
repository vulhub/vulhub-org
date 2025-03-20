import catalog from "./catalog.json";

export interface Catalog {
    title: string;
    slug: string;
    description?: string;
    keywords?: string[];
}

export default catalog as Catalog[];
