import Link from 'next/link';
import Image from 'next/image';
import type { Country } from '@/types/country';
import styles from './tile.module.css';

interface Props {
    country: Country;
    priority: boolean;
}

const Tile = ({ country, priority }: Props) => {
    const classes = `bg-white dark:bg-dark-mode-elements shadow-md rounded h-96 w-full max-w-[320px] ${styles.grow}`;
    return (
        <div className={classes}>
            <Link href={`/country/${country.cca3}`}>
                <div className="h-1/2 relative">
                    <Image
                        src={country.flags.png}
                        alt={country.flag}
                        fill={true}
                        className="rounded-t"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={priority}
                    ></Image>
                </div>
                <div className="h-1/2 min-h-min p-6">
                    <h2 className="font-bold text-lg pb-4">{country.name.common}</h2>
                    <p className="text-sm pb-1">
                        <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                    </p>
                    <p className="text-sm pb-1">
                        <span className="font-semibold">Region:</span> {country.region}
                    </p>
                    <p className="text-sm pb-1">
                        <span className="font-semibold">Capital:</span> {country.capital[0]}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Tile;
