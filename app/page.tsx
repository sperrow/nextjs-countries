import { getAllCountries } from '../lib/api';
import CountryList from '../components/countryList';
const Home = async () => {
    const { countries, regions } = await getAllCountries();
    return <CountryList countries={countries} regions={regions}></CountryList>;
};

export default Home;
