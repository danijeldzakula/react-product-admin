import { useMemo, useState } from 'react';

import { type TRolePayload } from '@/types/roles';

import RoleCard from './RoleCard';
import SearchRole from './SearchRole';

type TProps = {
  data: TRolePayload[];
};

export default function RolesList({ data }: TProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const roles = useMemo(() => {
    return data.filter(({ name }) => {
      return name
        .toLowerCase()
        .trim()
        .includes(searchTerm.toLowerCase().trim());
    });
  }, [data, searchTerm]);

  return (
    <div className="grid gap-4">
      <SearchRole onChange={(searchTerm) => setSearchTerm(searchTerm)} />

      <div className="grid grid-cols-1 gap-4">
        {roles.map((role, idx) => {
          return <RoleCard key={idx} data={role} />;
        })}
      </div>
    </div>
  );
}
