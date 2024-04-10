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
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: {
        available: number;
        collectionURI: string;
        items: Comic[];
        returned: number;
    };
    series: Series;
    stories: Stories;
    events: Events;
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

export interface Series {
    available: number;
    collectionURI: string;
    items: Comic[];
    returned: number;
}

export interface Story {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
}

export interface Event {
    resourceURI: string;
    name: string;
}

export interface Events {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
}

export interface Url {
    type: string;
    url: string;
}

export interface CharacterDetail {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
