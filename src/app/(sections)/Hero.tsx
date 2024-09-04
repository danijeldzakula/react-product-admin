import { useCallback, useState } from 'react';

import Button from '@/components/button/Button';
import { Container, Section } from '@/components/layouts';

import FormModal from '../(components)/FormModal';

export default function Hero() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback((bool: boolean) => {
    setToggle(bool);
  }, []);

  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
          <h2 className="text-2xl font-normal">Roles System</h2>

          <Button
            className="rounded-md bg-white p-2 dark:bg-neutral-950"
            onClick={() => handleToggle(!toggle)}
          >
            Create Role
          </Button>
        </div>
      </Container>

      <FormModal open={toggle} onOpenChange={handleToggle} />
    </Section>
  );
}
