import { getResolvedLocationData } from '@/actions/location';
import AQICard from '@/components/AQICard';
import NoLocationFound from '@/components/NoLocationFound';

const AqiPage = async ({
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
            <AQICard lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />
        );
    } else {
        return <NoLocationFound />;
    }
};

export default AqiPage;
