import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Determines the style of the button.
   */
  variant?: 'primary' | 'secondary' | 'plain';
  /**
   * Specifies the size of the button.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Text displayed on the button.
   */
  label?: string;
  /**
   * Indicates whether the button should have a filled background.
   */
  fullFilled?: boolean;
  /**
   * Icon displayed within the button.
   */
  icon?: ReactNode;
  /**
   * Specifies if the icon should be positioned on the right side of the button.
   */
  iconOnRight?: boolean;
  /**
   * Optional click handler function.
   */
  onClick?: () => void;
  /**
   * Additional content within the button.
   */
  children?: ReactNode;
  /**
   * Additional CSS class names for styling the button.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export default ({
  variant = 'primary',
  size = 'medium',
  label,
  children,
  icon,
  fullFilled = false,
  iconOnRight = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'rounded-md flex flex-row items-center justify-center gap-1',
        {
          // type
          'bg-tma-blue text-white dark:bg-tma-blue-700 hover:brightness-110 active:brightness-125':
            variant === 'primary',
          'bg-tma-gray-450 dark:bg-tma-gray-400 text-white hover:brightness-110 active:brightness-125':
            variant === 'secondary',
          'bg-transparent text-tma-blue hover:brightness-110 active:brightness-125':
            variant === 'plain',
          // size
          'h-10 py-2 px-4 text-sm font-medium': size === 'small',
          'h-12 py-2 px-4 text-md font-semibold': size === 'medium',
          'h-20 py-4 px-8 text-lg font-semibold': size === 'large',
          'w-full': fullFilled,
        },
        className
      )}
      {...props}
    >
      {icon && !iconOnRight && icon}
      {label}
      {children}
      {icon && iconOnRight && icon}
    </button>
  );
};
