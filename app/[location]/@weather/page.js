import WeatherCard from '@/components/WeatherCard';

const WeatherPage = ({ searchParams: { latitude, longitude } }) => {
    return <WeatherCard lat={latitude} lon={longitude} />;
};

export default WeatherPage;
