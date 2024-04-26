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
        const response = await fetch(`/api/locations`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

export const getLocationDatabyName = async (locationName) => {
    try {
        const response = await fetch(`/api/locations/${locationName}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
