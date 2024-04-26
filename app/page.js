import LocationDetector from '@/components/LocationDetector';
import NoLocationFound from '@/components/NoLocationFound';
import { Suspense } from 'react';

export default function Home() {
    return (
        <Suspense fallback={<NoLocationFound />}>
            <LocationDetector />
        </Suspense>
    );
}
