type Currency = {
    name: string;
}

export type Country = {
    cca3: string;
    name: {
        common: string;
        nativeName: Record<string, Record<string, string>>;
    };
    nativeName: string;
    flag: string;
    flags: {
        png: string;
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    currencies: Record<string, Currency>;
    currenciesList: string[];
    languages: Record<string, string>;
    languagesList: string[];
    borders: string[];
};