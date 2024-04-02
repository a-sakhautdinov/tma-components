import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';
import Button, { ButtonProps } from '../button/Button';

interface SideScrollProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Label for the side-scrolling section.
   */
  label?: string;
  /**
   * Content to be displayed within the side-scrolling section.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Action button properties.
   */
  action?: ButtonProps;
  /**
   * Maximum width of the side-scrolling section.
   */
  maxWidth?: string | number;
}

/**
 * Side Scroll
 */
export default ({
  label,
  children,
  action,
  maxWidth,
  ...props
}: SideScrollProps) => {
  return (
    <div
      className={clsx('w-screen')}
      style={{ maxWidth, ...props.style }}
      {...props}
    >
      {(label || action) && (
        <div className="w-full flex flex-row items-baseline pl-2">
          <div className="mr-auto text-tma-blue-700 font-semibold text-lg">
            {label}
          </div>
          {action && <Button {...(action as ButtonProps)} />}
        </div>
      )}
      <div className="w-full px-4 flex flex-row gap-2 flex-nowrap overflow-auto whitespace-nowrap [&>*]:flex-1">
        {children}
      </div>
    </div>
  );
};
