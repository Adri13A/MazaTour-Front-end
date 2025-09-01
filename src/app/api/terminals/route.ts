import { NextResponse } from 'next/server';
import terminals from '@/app/data/api-mock/terminals.json';

export async function GET() {
  return NextResponse.json(terminals);
}
