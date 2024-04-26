import Image from 'next/image';

const LocationLayout = ({ children, aqi, temperature, weather, wind }) => {
    return (
        <div className="wrapper">
            <Image
                src="/assets/images/background.png"
                className="bg-img"
                alt="background"
                width={700}
                height={1200}
            />
            <div className="overlay"></div>

            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                        {children}
                        {aqi}
                        {temperature}
                        {weather}
                        {wind}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LocationLayout;
