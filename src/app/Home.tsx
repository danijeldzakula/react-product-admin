import DefaultLayout from '@/components/layouts/default-layout';

import Arrivals from './(components)/Arrivals';
import Hero from './(sections)/Hero';
import Roles from './(sections)/Roles';

export default function Home() {
  return (
    <DefaultLayout title="Home">
      <Hero />
      <Roles />
      <Arrivals />
    </DefaultLayout>
  );
}
