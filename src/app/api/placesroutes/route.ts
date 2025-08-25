import { NextResponse } from 'next/server';
import placesroutes from '@/app/data/api-mock/placesroutes.json';

export async function GET() {
  return NextResponse.json(placesroutes);
}
