import { NextResponse } from 'next/server';
import foods from '@/app/data/api-mock/foods.json';

export async function GET() {
  return NextResponse.json(foods);
}