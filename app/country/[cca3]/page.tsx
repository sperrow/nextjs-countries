import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { getAllCountries, getCountry } from '../../../lib/api';
import CountryDetail from '../../../components/countryDetail';

type Props = {
    params: {
        cca3: string;
    };
};

export async function generateStaticParams() {
    const { countries } = await getAllCountries();
    return countries.map((country) => {
        return {
            cca3: country.cca3,
        };
    });
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const country = await getCountry(params.cca3);
    return {
        title: country.name.common,
    };
}

export default async function Page({ params }: Props) {
    const country = await getCountry(params.cca3);
    return (
        <>
            <div className="p-6 flex flex-row">
                <div className="my-6 w-3/5 lg:w-48">
                    <Link href="/">
                        <span className="gap-[10px] inline-flex items-center justify-between rounded shadow-black/10 shadow-[0_2px_10px] h-[35px] p-6 leading-none hover:bg-slate-200 outline-none dark:bg-dark-mode-elements">
                            <ArrowLeftIcon />
                            Back
                        </span>
                    </Link>
                </div>
            </div>
            <CountryDetail country={country}></CountryDetail>
        </>
    );
}
