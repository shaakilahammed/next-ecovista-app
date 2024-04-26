import { getResolvedLocationData } from '@/actions/location';
import NoLocationFound from '@/components/NoLocationFound';
import TemperatureCard from '@/components/TemperatureCard';

const TemperaturePage = async ({
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
            <TemperatureCard
                lat={resolvedLocation?.lat}
                lon={resolvedLocation?.lon}
            />
        );
    } else {
        return <NoLocationFound />;
    }
};

export default TemperaturePage;
