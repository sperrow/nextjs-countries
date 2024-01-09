'use client';

import { useState, ChangeEvent } from 'react';
import Select from './select';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import type { Country } from '@/types/country';
import type { MenuItem } from '@/types/menuItem';
import Tile from './tile';

interface Props {
    countries: Country[];
    regions: MenuItem[];
}

const CountryList = ({ countries, regions }: Props) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [regionCountries, setRegionCountries] = useState(countries);
    const [searchQuery, setSearchQuery] = useState('');

    const handleRegionChange = function (value: string) {
        const matches = value === 'all' ? countries : countries.filter((country) => country.region === value);
        setRegionCountries(matches);
        filterCountries(matches, searchQuery);
    };

    const handleSearchChange = function (e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSearchQuery(value);
        filterCountries(regionCountries, value);
    };

    function filterCountries(countries: Country[], value: string) {
        const matches =
            value === ''
                ? countries
                : countries.filter((country) => country.name.common.toLowerCase().indexOf(value.toLowerCase()) === 0);
        setFilteredCountries(matches);
    }

    const results =
        filteredCountries.length === 0 ? (
            <div className="m-auto p-6 text-center bg-white dark:bg-dark-mode-elements shadow-md rounded max-w-[320px]">
                <p>No results found</p>
            </div>
        ) : (
            <div className="mb-32 grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left lg:px-16">
                {filteredCountries.map((country, idx) => (
                    <div key={country.cca3} className="flex justify-center">
                        <Tile country={country} priority={idx < 4}></Tile>
                    </div>
                ))}
            </div>
        );

    return (
        <>
            <div className="p-6 flex flex-wrap flex-col lg:flex-row lg:justify-between">
                <div className="relative mb-12 lg:mr-4">
                    <input
                        className="w-full rounded shadow-black/10 shadow-[0_2px_10px] h-[35px] p-6 pl-14 leading-none hover:bg-slate-200 data-[placeholder]:text-slate-400 outline-none dark:bg-dark-mode-elements"
                        placeholder="Search for a country..."
                        onChange={handleSearchChange}
                    />
                    <MagnifyingGlassIcon className="absolute top-4 left-6" />
                </div>
                <div className="mb-6 w-3/5 lg:w-48 z-10">
                    <Select items={regions} onValueChange={handleRegionChange}></Select>
                </div>
            </div>
            {results}
        </>
    );
};

export default CountryList;
