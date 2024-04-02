import clsx from 'clsx';
import Tag, { TagProps } from '../tag/Tag';
import { HTMLAttributes, useState } from 'react';

interface Tab {
  key: string;
  label: string;
  disabled?: boolean;
  tag?: TagProps;
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The identifier of the currently selected tab.
   */
  selected?: string;
  /**
   * Callback function invoked when a tab is selected.
   */
  onChangeSelected?: (selected: string) => void;
  /**
   * An array of Tab objects representing the available tabs.
   */
  options: Tab[];
  /**
   * Additional CSS class names for styling the tabs.
   */
  className?: string;
}

export const useTab = (
  defaultSelected?: string,
  onChangeSelected?: (selected: string) => void,
  options?: Tab[]
) => {
  const getDefault = () => {
    if (defaultSelected) {
      return defaultSelected;
    }
    return options && options[0] ? options[0].key : undefined;
  };
  const [selected, setSelected] = useState<string | undefined>(getDefault());

  const handleSelect = (nextTab: Tab) => () => {
    if (nextTab.disabled) {
      return;
    }
    if (onChangeSelected) {
      onChangeSelected(nextTab.key);
    }
    setSelected(nextTab.key);
  };

  return {
    selected,
    handleSelect,
  };
};

/**
 * Tag
 */
export default ({
  selected,
  options,
  onChangeSelected,
  className,
  ...props
}: TabsProps) => {
  const tab = useTab(selected, onChangeSelected, options);

  return (
    <div
      className={clsx(
        'rounded-md font-medium py-0.5 px-2 cursor-pointer flex flex-row overflow-x-auto gap-1',
        className
      )}
      {...props}
    >
      {options.map((option) => (
        <div
          key={option.key}
          className={clsx(
            'relative pb-1.5 px-1 transition-colors flex flex-row items-center gap-1 whitespace-nowrap',
            {
              'text-tma-gray-800 dark:text-tma-blue':
                option.key === tab.selected,
              'text-tma-gray-400 dark:text-white': option.key !== tab.selected,
              '!text-tma-gray-100': option.disabled,
            }
          )}
          onClick={tab.handleSelect(option)}
        >
          {option.label}
          {option.tag && <Tag size="small" {...option.tag} />}
          <div
            className={clsx(
              'absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-md h-1 bg-tma-blue transition-all',
              {
                'w-10/12': option.key === tab.selected,
                'w-0': option.key !== tab.selected,
              }
            )}
          />
        </div>
      ))}
    </div>
  );
};
