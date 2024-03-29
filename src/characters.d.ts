export interface Characters {
    data: Data;
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Results[];
}

export interface Results {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: Variant[];
    collections: any[];
    collectedIssues: any[];
    dates: {
        type: string;
        date: string;
    }[];
    prices: {
        type: string;
        price: number;
    }[];
    thumbnail: Thumbnail;
    images: any[];
    creators: {
        available: number;
        collectionURI: string;
        items: Creator[];
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: {
            resourceURI: string;
            name: string;
            type: string;
        }[];
            returned: number;
        };
    events: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
}

export interface Url {
    type: string;
    url: string;
}

export interface Series {
    resourceURI: string;
    name: string;
}

export interface Variant {
    resourceURI: string;
    name: string;
}

export interface Creator {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}
