import { Container, Section } from '@/components/layouts';

import { useRolesStore } from '@/store/roles-store';

import RolesList from '../(components)/RolesList';

export default function Roles() {
  const { data } = useRolesStore();

  return (
    <Section>
      <Container>
        <RolesList data={data} />
      </Container>
    </Section>
  );
}
