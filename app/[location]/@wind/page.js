import WindCard from '@/components/WindCard';

const WindPage = ({ searchParams: { latitude, longitude } }) => {
    return <WindCard lat={latitude} lon={longitude} />;
};

export default WindPage;
