export type TVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link'
  | 'default';

export type TSize = 'small' | 'medium' | 'large';

export type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TVariant;
  size?: TSize;
};
