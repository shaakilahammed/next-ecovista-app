import { getLocationByName } from '@/utils/locations';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const location = getLocationByName(params?.name);
    return NextResponse.json(location);
};
