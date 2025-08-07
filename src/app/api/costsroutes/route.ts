import { NextResponse } from 'next/server';
import costsroutes from '@/app/data/api-mock/costsroutes.json';

export async function GET() {
  return NextResponse.json(costsroutes);
}
