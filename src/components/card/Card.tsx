import clsx from 'clsx';
import Tag, { TagProps } from '../tag/Tag';
import Button, { ButtonProps } from '../button/Button';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Optional label for the card.
   */
  label?: string;
  /**
   * URL of the optional image displayed on the card.
   */
  image?: string;
  /**
   * Properties for the optional tag displayed on the card.
   */
  tag?: TagProps;
  /**
   * Optional description text displayed on the card.
   */
  description?: string;
  /**
   * Properties for the optional action button displayed on the card.
   */
  action?: ButtonProps;
  /**
   * Additional optional CSS/Tailwind class names for styling the card.
   */
  className?: string;
}

/**
 * A versatile card component used to display various types of content such as images, text, and actions in a visually appealing manner.
 */
export default ({
  image,
  label,
  tag,
  action,
  description,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-xl px-10 py-12 max-w-80 border bg-blue-50 relative',
        'dark:bg-tma-gray-400 dark:border-none',
        'flex flex-col items-center gap-3',
        className
      )}
      {...props}
    >
      {image && <img src={image} alt={label || 'card_image'} />}
      {tag && (
        <div className="absolute right-4 top-4">
          <Tag {...tag} />
        </div>
      )}
      {label && (
        <div className="font-semibold text-2xl text-tma-blue dark:text-white">
          {label}
        </div>
      )}
      {description && (
        <div className="text-tma-gray dark:text-tma-gray-300">
          {description}
        </div>
      )}
      {action && <Button fullFilled {...action} />}
    </div>
  );
};
