import type { Country } from '@/types/country';
import type { MenuItem } from '@/types/menuItem';

async function fetchAPI(url: string) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(url, {
        headers,
        method: 'GET',
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json;
}

export async function getAllCountries(preview: boolean = false) {
    const data: Country[] = await fetchAPI('https://restcountries.com/v3.1/all');
    const regions = new Set<string>();
    data.forEach((country: Country) => {
        regions.add(country.region);
        formatCountry(country);
    });
    const regionsList: MenuItem[] = Array.from(regions)
        .map((name: string) => {
            return {
                label: name,
                value: name,
            };
        })
        .sort((a, b) => {
            if (a.label > b.label) {
                return 1;
            } else if (a.label < b.label) {
                return -1;
            }
            return 0;
        });
    regionsList.push({
        label: 'All',
        value: 'all',
    });
    return { regions: regionsList, countries: data };
}

export async function getCountry(cca3: string, preview: boolean = false) {
    const data: Country[] = await fetchAPI(`https://restcountries.com/v3.1/alpha/${cca3}`);
    formatCountry(data[0]);
    return data[0];
}

function formatCountry(country: Country): void {
    if (country.capital == null) {
        country.capital = ['None'];
    }
    country.currencies = country.currencies || {};
    country.languages = country.languages || {};
    country.borders = country.borders || [];
    country.tld = country.tld || [];
    country.currenciesList = Object.values(country.currencies).map((currency) => currency.name);
    country.languagesList = Object.values(country.languages);
    if (country.name.nativeName == null) {
        country.nativeName = 'N/A';
    } else {
        const names = Object.entries(country.name.nativeName).map(([lang, name]) => `${name.common} (${lang.toUpperCase()})`);
        country.nativeName = names.join(', ');
    }
}
