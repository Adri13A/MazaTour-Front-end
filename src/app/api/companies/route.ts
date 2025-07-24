import { NextResponse } from 'next/server';
import companies from '@/app/data/api-mock/companies.json';

export async function GET() {
  return NextResponse.json(companies);
}