import clsx from 'clsx';
import { HTMLAttributes, useState } from 'react';

interface IslandRoute {
  key: string;
  label?: string;
  icon?: string;
}

interface IslandProps extends HTMLAttributes<HTMLDivElement> {
  defaultRoute?: string;
  routes: IslandRoute[];
  withLabels?: boolean;
  onChangeRoute?: (routeId: string) => void;
}

/**
 * Island
 */
export default ({
  defaultRoute,
  withLabels = false,
  routes,
  onChangeRoute,
  ...props
}: IslandProps) => {
  const [selected, setSelected] = useState<string | undefined>(defaultRoute);

  const handleSelect = (nextTab: IslandRoute) => () => {
    if (onChangeRoute) {
      onChangeRoute(nextTab.key);
    }
    setSelected(nextTab.key);
  };

  return (
    <div
      className={clsx(
        'w-full h-10 flex flex-row items-center justify-evenly bg-blue-50 dark:bg-tma-gray-400 gap-2'
      )}
      {...props}
    >
      {routes.map((route) => (
        <div
          key={route.key}
          onClick={handleSelect(route)}
          className={clsx(
            'h-full w-fit flex-1 flex flex-col items-center justify-center cursor-pointer hover:brightness-110 active:brightness-125',
            'transition-all',
            {
              'text-white bg-tma-blue-700 dark:text-white dark:bg-tma-gray-600':
                selected === route.key,
              'text-tma-blue dark:text-white dark:bg-tma-gray-400':
                selected !== route.key,
            }
          )}
        >
          {route.icon && route.icon}
          {route.label && withLabels && route.label}
        </div>
      ))}
    </div>
  );
};
