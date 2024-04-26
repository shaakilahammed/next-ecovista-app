export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const getLocationListData = async () => {
    try {
        const response = await fetch(
            `https://next-ecovista-app.vercel.app/api/locations`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const getLocationDatabyName = async (locationName) => {
    try {
        const response = await fetch(
            `https://next-ecovista-app.vercel.app/api/locations/${locationName}`
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const getResolvedLocationData = async (location, lat, lon) => {
    if (lat && lon) {
        return { lat, lon };
    }
    const lc = await getLocationDatabyName(location);

    if (lc.latitude && lc.longitude) {
        const lat = lc.latitude;
        const lon = lc.longitude;

        return { lat, lon };
    }
};
