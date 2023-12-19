import Link from 'next/link';
import Image from 'next/image';
import type { Country } from '@/types/country';

interface Props {
    country: Country;
}

const CountryDetail = ({ country }: Props) => {
    return (
        <div className="p-6 flex flex-col lg:flex-row gap-12">
            <div className="mb-6 w-full h-[280px] relative lg:w-1/2 lg:h-[320px]">
                <Image
                    src={country.flags.png}
                    alt={country.flag}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority={true}
                    className="object-contain object-top"
                ></Image>
            </div>
            <div className="lg:w-1/2">
                <h1 className="font-bold text-2xl pb-6 lg:text-4xl lg:">{country.name.common}</h1>
                <div className="lg:flex flex-wrap">
                    <div className="mb-6 lg:w-1/2">
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Native Name:</span> {country.nativeName}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Region:</span> {country.region}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Sub Region:</span> {country.subregion}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Capital:</span> {country.capital[0]}
                        </p>
                    </div>
                    <div className="mb-6 lg:w-1/2">
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Top Level Domain:</span> {country.tld.join(', ')}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Currencies:</span> {country.currenciesList.join(', ')}
                        </p>
                        <p className="pb-4 lg:pb-2">
                            <span className="font-semibold">Languages:</span> {country.languagesList.join(', ')}
                        </p>
                    </div>
                </div>
                <div className="mb-6 lg:w-full lg:flex">
                    <h2 className="min-w-max font-bold text-xl mr-4 lg:text-base">Border Countries:</h2>
                    <div className="py-6 grid grid-cols-3 gap-[10px] lg:flex lg:flex-wrap lg:py-0">
                        {country.borders.map((border) => (
                            <Link key={border} href={`/country/${border}`}>
                                <span className="w-full inline-flex items-center justify-center text-center rounded shadow-black/10 shadow-[0_2px_10px] h-[35px] py-4 px-6 leading-none hover:bg-slate-200 outline-none lg:py-0 lg:h-[30px]">
                                    {border}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
