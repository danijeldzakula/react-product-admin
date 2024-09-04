import { forwardRef } from 'react';

import clsx from 'clsx';

const Container = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Div ref={ref} className={clsx('container', className)} {...props} />
));
Container.displayName = 'ContainerElement';

const ContainerFluid = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Div
    ref={ref}
    className={clsx('container max-w-full', className)}
    {...props}
  />
));
ContainerFluid.displayName = 'ContainerFluidElement';

const Wrapper = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Div ref={ref} className={className} {...props} />
));
Wrapper.displayName = 'WrapperElement';

const Overlay = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Div ref={ref} className={className} {...props} />
));
Overlay.displayName = 'OverlayElement';

// style={{ contain: 'content' }}
const Section = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={className} {...props} />
  )
);
Section.displayName = 'SectionElement';

const Article = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <article ref={ref} className={className} {...props} />
  )
);
Article.displayName = 'ArticleElement';

const Aside = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <aside ref={ref} className={className} {...props} />
  )
);
Aside.displayName = 'AsideElement';

const Figure = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <figure ref={ref} className={className} {...props} />
  )
);
Figure.displayName = 'FigureElement';

const Header = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <header ref={ref} className={className} {...props} />
  )
);
Header.displayName = 'HeaderElement';

const Nav = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={className} {...props} />
  )
);
Nav.displayName = 'NavElement';

const SeoTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={clsx('mb-4 text-3xl font-normal', className)}
    {...props}
  />
));
SeoTitle.displayName = 'SeoTitleElement';

const Main = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <main ref={ref} className={className} {...props} />
  )
);
Main.displayName = 'MainElement';

const Hr = forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={clsx(
        'my-8 border-neutral-300 dark:border-neutral-700',
        className
      )}
      {...props}
    />
  )
);
Hr.displayName = 'HrElement';

const Div = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
Div.displayName = 'DivElement';

export {
  Div,
  Main,
  Hr,
  SeoTitle,
  Nav,
  Header,
  Figure,
  Aside,
  Article,
  Section,
  Overlay,
  Wrapper,
  ContainerFluid,
  Container,
};
