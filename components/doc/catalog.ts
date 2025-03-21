import enCatalog from "./en/catalog.json";
import zhCatalog from "./zh/catalog.json";

export interface Catalog {
    title: string;
    slug: string;
    description?: string;
    keywords?: string[];
}

export type CatalogByLocale = {
    en: Catalog[];
    zh: Catalog[];
};

const catalogByLocale: CatalogByLocale = {
    en: enCatalog as Catalog[],
    zh: zhCatalog as Catalog[]
};

export default catalogByLocale;
