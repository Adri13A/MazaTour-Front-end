'use client';

import Link from "next/link";

interface BreadcrumbProps {
  routeName?: string;
}

export default function Breadcrumb({ routeName }: Readonly<BreadcrumbProps>) {
  return (
 <nav className="text-sm text-gray-600 mb-4 space-x-4 pt-1">
  <Link
    href="/"
    className="relative font-normal transition-all duration-200 hover:text-gray-900 hover:font-semibold"
  >
    <span className="hover:bg-gray-300/40 rounded-full px-1 transition-colors duration-200">
      Home
    </span>
  </Link>
  <span>/</span>
  <Link
    href="/routing/routes/list"
    className="relative font-normal transition-all duration-400 hover:text-gray-900 hover:font-semibold"
  >
    <span className="hover:bg-gray-300/40 rounded-full px-1 transition-colors duration-400">
      Lista Rutas
    </span>
  </Link>
  {routeName && (
    <>
      <span>/</span>
      <span className="font-semibold text-gray-900">{routeName}</span>
    </>
  )}
</nav>

  );
}
