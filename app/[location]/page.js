import { getResolvedLocationData } from '@/actions/location';
import LocationInfo from '@/components/LocationInfo';
import NoLocationFound from '@/components/NoLocationFound';

const LocationPage = async ({
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
            <LocationInfo
                lat={resolvedLocation?.lat}
                lon={resolvedLocation?.lon}
            />
        );
    } else {
        return <NoLocationFound />;
    }
};

export default LocationPage;
