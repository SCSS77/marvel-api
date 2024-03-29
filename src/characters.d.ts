export interface Characters {
    // eslint-disable-next-line no-use-before-define
    data: Data;
}

export interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    // eslint-disable-next-line no-use-before-define
    results: Results[];
}

export interface Results {
    id: number;
    name: string;
    description: string;
    modified: string;
    // eslint-disable-next-line no-use-before-define
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        // eslint-disable-next-line no-use-before-define
        items: Comic[];
        returned: number;
    };
    // eslint-disable-next-line no-use-before-define
    series: Series;
    // eslint-disable-next-line no-use-before-define
    stories: Stories;
    // eslint-disable-next-line no-use-before-define
    events: Events;
    // eslint-disable-next-line no-use-before-define
    urls: Url[];
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Comic {
    resourceURI: string;
    name: string;
}

interface Series {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
}

interface Story {
    resourceURI: string;
    name: string;
    type: string;
}

interface Stories {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
}

interface Event {
    resourceURI: string;
    name: string;
}

interface Events {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
}

interface Url {
    type: string;
    url: string;
}
