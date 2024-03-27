interface Url {
    type: string;
    url: string;
}

interface Series {
    resourceURI: string;
    name: string;
}

interface Variant {
    resourceURI: string;
    name: string;
}

interface Creator {
    resourceURI: string;
    name: string;
    role: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface Item {
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

interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Item[];
}

interface MarvelResponse {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

export {
  Url,
  Series,
  Variant,
  Creator,
  Thumbnail,
  Item,
  Data,
  MarvelResponse
}
