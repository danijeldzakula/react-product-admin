import { Link } from 'react-router-dom';

import { Container, Div, Section, SeoTitle } from '@/components/layouts';
import { Layout } from '@/components/layouts/layout';

export function NotFoundError() {
  return (
    <Layout>
      <Section>
        <Container>
          <Div className="grid items-center justify-center gap-4">
            <SeoTitle className="mb-4">Not Found Error | 404</SeoTitle>

            <Link
              to="/"
              className="mx-auto w-max rounded-sm bg-blue-500 px-8 py-2 text-white"
            >
              Return to Home
            </Link>
          </Div>
        </Container>
      </Section>
    </Layout>
  );
}
