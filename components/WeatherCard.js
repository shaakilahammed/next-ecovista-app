import { getWeatherData } from '@/actions/weather';
import Image from 'next/image';
import Card from './Card';

const WeatherCard = async ({ lat, lon }) => {
    const { main, description } = await getWeatherData(lat, lon);
    return (
        <Card>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/assets/icons/icon_rain.png"
                    alt="rain icon"
                    width={80}
                    height={80}
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </Card>
    );
};

export default WeatherCard;
