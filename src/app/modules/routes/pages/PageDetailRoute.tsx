import { JSX } from 'react';
import DetailRouteContainer from '../components/DetailRouteContainer';

interface PageDetailRouteProps {
  readonly params: Promise<{ id: string }>;
}

const PageDetailRoute = async ({ params }: PageDetailRouteProps): Promise<JSX.Element> => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return <DetailRouteContainer routeId ={id} />;
};

export default PageDetailRoute;
