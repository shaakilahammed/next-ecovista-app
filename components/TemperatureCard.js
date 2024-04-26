import { getTemperatureData } from '@/actions/weather';
import Image from 'next/image';
import Card from './Card';

const TemperatureCard = async ({ lat, lon }) => {
    const { temp, feels_like } = await getTemperatureData(lat, lon);
    return (
        <Card>
            <h6 class="feature-name">Current Temperature</h6>
            <div class="feature-main">
                <Image
                    class="max-w-20"
                    src="/assets/icons/icon_tempareture.png"
                    alt="rain icon"
                    height={80}
                    width={80}
                />
                <h3 class="feature-title">{temp}°C</h3>

                <span class="feature-name">Feels Like {feels_like}°C</span>
            </div>
        </Card>
    );
};

export default TemperatureCard;
