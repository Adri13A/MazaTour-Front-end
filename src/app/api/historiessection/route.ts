import { NextResponse } from 'next/server';
import historiessection from '@/app/data/api-mock/historiessection.json';

export async function GET() {
  return NextResponse.json(historiessection);
}
