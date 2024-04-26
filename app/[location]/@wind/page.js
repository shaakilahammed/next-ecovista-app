import { getResolvedLocationData } from '@/actions/location';
import NoLocationFound from '@/components/NoLocationFound';
import WindCard from '@/components/WindCard';

const WindPage = async ({
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
            <WindCard lat={resolvedLocation?.lat} lon={resolvedLocation?.lon} />
        );
    } else {
        return <NoLocationFound />;
    }
};

export default WindPage;
