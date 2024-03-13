// import * as React from 'react';
// import { NavLink, Sx, Text } from '@mantine/core';
// import { IconChevronRight } from '@tabler/icons-react';
// import { useThemeMode } from '../../../../hooks/useThemeMode';

// type ActionListItemProps = {
//   label?: string | undefined;
//   id: string | number;
//   onClick: (id: string | number) => void;
//   isActive: boolean;
// };

// const monoSpaceFonts: Sx = (theme) => ({
//   fontFamily: theme.fontFamilyMonospace || 'JetBrains Mono',
// });

// const navLinkStyles: Sx = (theme) => ({
//   borderRadius: theme.radius.md,
// });

// export const ActionListItem = React.memo(
//   React.forwardRef<HTMLButtonElement, ActionListItemProps>(
//     ({ label, onClick, id, isActive, ...rest }, ref) => {
//       const handleOnClick = React.useCallback(() => onClick(id), [onClick, id]);

//       return (
//         <NavLink
//           {...rest}
//           ref={ref}
//           label={React.useMemo(
//             () => (
//               <Text sx={monoSpaceFonts}>{label}</Text>
//             ),
//             [label],
//           )}
//           variant="filled"
//           sx={navLinkStyles}
//           active={isActive}
//           color={useThemeMode('dark', 'gray')}
//           onClick={handleOnClick}
//           rightSection={React.useMemo(
//             () => (
//               <IconChevronRight size={12} stroke={1.5} />
//             ),
//             [],
//           )}
//         />
//       );
//     },
//   ),
// );

// ActionListItem.displayName = 'ActionListItem';


//------ Migrated Code -----

import * as React from 'react';
import { Button } from '../../../../../../components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useToggleDarkMode } from '../../../../hooks/useDarkMode'

type ActionListItemProps = {
  label?: string | undefined;
  id: string | number;
  onClick: (id: string | number) => void;
  isActive: boolean;
};

export const ActionListItem = React.memo(
  React.forwardRef<HTMLButtonElement, ActionListItemProps>(
    ({ label, onClick, id, isActive, ...rest }, ref) => {
      const handleOnClick = React.useCallback(() => onClick(id), [onClick, id]);
     

      return (
        <Button
          {...rest}
          ref={ref}
          variant={isActive ? 'secondary' : 'ghost'}
          size="sm"
          onClick={handleOnClick}
          className={`w-full justify-between font-mono focus:bg-slate-700 focus:text-gray-200 dark:focus:bg-gray-500 dark:hover:bg-slate-800 hover:bg-gray-300${
            isActive ? 'bg-muted text-primary' : ''
          }`}
        >
          {label}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  ),
);

ActionListItem.displayName = 'ActionListItem';