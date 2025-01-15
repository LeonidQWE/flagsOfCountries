const BASE_URL = 'https://restcountries.com/v3.1/';
export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,flags,capital,population';

export const searchCountryByName = (name: string) => BASE_URL + 'name/' + name;
