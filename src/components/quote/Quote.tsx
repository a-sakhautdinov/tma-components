import clsx from 'clsx';
import { HTMLAttributes } from 'react';

interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The description or text content of the quote.
   */
  description?: string;
  /**
   * The color of the corner element of the quote.
   */
  cornerColor?: string;
  /**
   * The background color of the quote.
   */
  backgroundColor?: string;
}

/**
 * Quote
 */
export default ({
  description,
  cornerColor,
  backgroundColor,
  ...props
}: QuoteProps) => {
  return (
    <div
      className={clsx(
        'rounded-md flex flex-row items-start justify-start gap-1 shadow bg-white text-tma-gray py-2 px-4',
        'dark:bg-tma-gray dark:text-tma-gray-300 dark:border-tma-blue-400',
        'border-l-8 border-tma-blue font-light'
      )}
      style={{
        borderColor: cornerColor,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {description}
    </div>
  );
};
