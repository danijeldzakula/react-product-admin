import { useEffect } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

import Button from '@/components/button/Button';

import TimesCircleIcon from '@/assets/icons/times-circle';

type TProps = {
  onChange: (value: string) => void;
};

export default function SearchRole({ onChange }: TProps) {
  const [searchValue, searchTerm, setSearchTerm] = useDebounce('', 500);

  useEffect(() => {
    onChange(searchValue);
  }, [searchValue]);

  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={searchTerm}
        className="h-14 w-full rounded-md border border-neutral-200 bg-white px-4 dark:border-neutral-800 dark:bg-neutral-950"
        placeholder="Search Role..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm.length ? (
        <Button
          className="absolute bottom-0 right-0 top-0 flex w-10 items-center justify-center"
          type="button"
          onClick={() => setSearchTerm('')}
        >
          <TimesCircleIcon width={18} height={18} />
        </Button>
      ) : null}
    </div>
  );
}
