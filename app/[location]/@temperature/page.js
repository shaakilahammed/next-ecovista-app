import TemperatureCard from '@/components/TemperatureCard';

const TemperaturePage = ({ searchParams: { latitude, longitude } }) => {
    return <TemperatureCard lon={longitude} lat={latitude} />;
};

export default TemperaturePage;
