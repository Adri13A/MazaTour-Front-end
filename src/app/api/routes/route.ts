import { NextResponse } from 'next/server';
import routes from '@/app/data/api-mock/routes.json';

export async function GET() {
  return NextResponse.json(routes);
}
