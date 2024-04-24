'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set('latitude', position.coords.latitude);
                params.set('longitude', position.coords.longitude);
                setLoading(false);
                router.push(`/current?${params.toString()}`);
            });
        }
    }, [router, searchParams, pathName]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            {loading && (
                <>
                    <Image
                        src="/assets/location.gif"
                        alt="Loading..."
                        height={250}
                        width={250}
                        className="rounded-md my-4"
                    />
                    <p className="text-2xl text-center">
                        Detecting Location...
                    </p>
                </>
            )}
        </div>
    );
};

export default LocationDetector;
