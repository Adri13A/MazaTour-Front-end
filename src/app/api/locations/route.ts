import { NextResponse } from 'next/server';
import locations from '@/app/data/api-mock/locations.json';

export async function GET() {
  return NextResponse.json(locations);
}