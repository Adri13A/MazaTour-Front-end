import { NextResponse } from 'next/server';
import placesroute from '@/app/data/api-mock/placesroute.json';

export async function GET() {
  return NextResponse.json(placesroute);
}
