import { NextResponse } from 'next/server';
import detailroute from '@/app/data/api-mock/detailroute.json';

export async function GET() {
  return NextResponse.json(detailroute);
}
