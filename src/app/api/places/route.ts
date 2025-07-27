import { NextResponse } from 'next/server';
import places from '@/app/data/api-mock/places.json';

export async function GET() {
  return NextResponse.json(places);
}
