import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to be displayed in the header section of the layout.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Content to be displayed in the footer section of the layout.
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Main content to be displayed within the layout.
   */
  children: ReactNode | ReactNode[];
}

/**
 * Layout
 */
export default ({ header, footer, children, ...props }: LayoutProps) => {
  return (
    <div className={clsx('w-full grid grid-cols-1 max-h-screen')} {...props}>
      {header && <header className="w-full">{header}</header>}
      {children}
      {footer && <footer className="w-full">{footer}</footer>}
    </div>
  );
};
