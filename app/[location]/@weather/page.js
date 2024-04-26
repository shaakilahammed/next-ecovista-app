import { getResolvedLocationData } from '@/actions/location';
import NoLocationFound from '@/components/NoLocationFound';
import WeatherCard from '@/components/WeatherCard';

const WeatherPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolvedLocation = await getResolvedLocationData(
        location,
        latitude,
        longitude
    );
    if (resolvedLocation?.lat && resolvedLocation?.lon) {
        return (
            <WeatherCard
                lat={resolvedLocation?.lat}
                lon={resolvedLocation?.lon}
            />
        );
    } else {
        return <NoLocationFound />;
    }
};

export default WeatherPage;
