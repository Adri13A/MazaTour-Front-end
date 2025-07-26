import { NextResponse } from 'next/server';
import categories from '@/app/data/api-mock/categories.json';

export async function GET() {
  return NextResponse.json(categories);
}