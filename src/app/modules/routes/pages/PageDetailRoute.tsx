import { JSX } from 'react';
import DetailRouteContainer from '../components/DetailRouteContainer';

interface PageDetailRouteProps {
  readonly params: Promise<{ idRuta: string }>;
}

const PageDetailRoute = async ({ params }: PageDetailRouteProps): Promise<JSX.Element> => {
  const resolvedParams = await params;
  const { idRuta } = resolvedParams;

  return <DetailRouteContainer idRuta={idRuta} />;
};

export default PageDetailRoute;
