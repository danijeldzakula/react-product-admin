export type TGlobalProps = {
  readonly className?: string;
  readonly children?: React.ReactNode;
};

export type TClassName = {
  readonly className?: string;
};

export type TChildren = {
  readonly children?: React.ReactNode;
};

export type TDivElement = React.HTMLAttributes<HTMLDivElement>;
export type THTMLElement = React.HTMLAttributes<HTMLElement>;

export type TIcons = React.SVGAttributes<SVGElement> & {
  readonly className?: TClassName;
};
