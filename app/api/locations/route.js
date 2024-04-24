import { getLocations } from '@/utils/locations';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const locations = getLocations();
    return NextResponse.json(locations);
};
