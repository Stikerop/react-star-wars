import {HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, GUIDE_IMG_EXTENSION, URL_IMG_PERSONS} from "../constants/api";

const getId = (url, category) => {
    const id = url
        .replace(HTTPS+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSONS}/${id + GUIDE_IMG_EXTENSION}`;

