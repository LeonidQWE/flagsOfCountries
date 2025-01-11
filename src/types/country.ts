import { Regions } from './regions';

type NativeNameItem = {
  official: string;
  common: string;
}

type Flags = {
  png: string;
  svg: string;
  alt: string;
}

type CurrencyItem = {
  name: string;
  symbol: string;
}

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: NativeNameItem,
    },
  },
  flags: Flags,
  region: Regions,
  subregion: string,
  population: number,
  capital: string[],
  borders: string[],
  area: number,
  currencies: {
    [key: string]: CurrencyItem,
  },
  languages: {
    [key: string]: string,
  },
}

export type ShortCountryInfo = Pick<Country, 'name' | 'flags' | 'capital' | 'population'>;
