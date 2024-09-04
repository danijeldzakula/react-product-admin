import { Link } from 'react-router-dom';

import { Container } from '../layouts';
import Navbar from '../navbar/Navbar';
import ToggleTheme from '../toggle-theme/ToggleTheme';

export default function Header() {
  return (
    <header className="sticky left-0 right-0 top-0 z-10 flex h-16 w-full items-center border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-normal">
              Marketplace
            </Link>

            <Navbar />
          </div>

          <ToggleTheme className="!bg-neutral-100 dark:!bg-neutral-900" />
        </div>
      </Container>
    </header>
  );
}
