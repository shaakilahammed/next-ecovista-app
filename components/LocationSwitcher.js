'use client';
import { getLocationListData } from '@/actions/location';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const LocationSwitcher = () => {
    const [showLocationList, setShowLocationList] = useState(false);
    const [locationList, setLocationList] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await getLocationListData();

            setLocationList(data);
        };

        getData();
    }, []);
    return (
        <div className="relative">
            <button onClick={() => setShowLocationList((prev) => !prev)}>
                <Image
                    className="size-9"
                    src="/assets/icons/link.svg"
                    height={36}
                    width={36}
                    alt="link icon"
                />
            </button>
            {showLocationList && (
                <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                    {locationList.length > 0 ? (
                        <ul
                            role="list"
                            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                        >
                            {locationList.map(
                                ({ location, latitude, longitude }) => (
                                    <li key={location}>
                                        <Link
                                            href={`/${location}?latitude=${latitude}&longitude=${longitude}`}
                                        >
                                            {location}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    ) : (
                        <li>No location found!</li>
                    )}
                </div>
            )}
        </div>
    );
};

export default LocationSwitcher;
