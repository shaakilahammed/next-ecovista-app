import AQICard from '@/components/AQICard';

const AqiPage = ({ searchParams: { latitude, longitude } }) => {
    return <AQICard lon={longitude} lat={latitude} />;
};

export default AqiPage;
