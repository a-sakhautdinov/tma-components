import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The label text of the tag.
   */
  label: string;
  /**
   * The type of the tag, determining its visual style.
   */
  type?: 'important' | 'default' | 'error' | 'success';
  /**
   * The size of the tag.
   */
  size?: 'medium' | 'small';
}

/**
 * Tag
 */
export default ({
  label,
  type = 'default',
  size = 'medium',
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(
        'rounded-md font-medium cursor-default',
        'hover:brightness-110',
        {
          'text-white bg-tma-blue dark:bg-tma-blue-700': type === 'important',
          'text-tma-gray-100 bg-tma-gray-400': type === 'default',
          'text-red-800 bg-red-300': type === 'error',
          'text-green-800 bg-green-300': type === 'success',
          'py-0.5 px-2': size === 'medium',
          'h-6 py-0.5 px-1.5 text-sm': size === 'small',
        }
      )}
      {...props}
    >
      {label}
    </div>
  );
};
