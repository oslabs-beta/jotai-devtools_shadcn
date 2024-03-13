// import * as React from 'react';
// import { ActionIcon, Badge, Box, Flex, Group, Sx, Title } from '@mantine/core';
// import { IconMinus } from '@tabler/icons-react';
// import { useSetAtom } from 'jotai/react';
// import { isShellOpenAtom } from '../../../../../atoms/is-shell-open-atom';
// import { useDevtoolsJotaiStoreOptions } from '../../../../../internal-jotai-store';
// import { ThemeToggle } from './components/ThemeToggle';

// const headerStyles: Sx = {
//   position: 'sticky',
//   top: 0,
//   zIndex: 1,
//   width: '100%',
// };

// const logoStyles: Sx = { userSelect: 'none' };

// export const Header = React.memo(() => {
//   const setIsShellOpen = useSetAtom(
//     isShellOpenAtom,
//     useDevtoolsJotaiStoreOptions(),
//   );

//   return (
//     <Box sx={headerStyles}>
//       <Flex justify="space-between" align="center" p={10}>
//         <Group mr={10}>
//           <Title size="h4" sx={logoStyles}>
//             👻&nbsp;Jōtai DevTools
//           </Title>
//           <Badge color="orange" size="xs">
//             Alpha
//           </Badge>
//         </Group>
//         <Flex align="center">
//           <ThemeToggle />

//           <ActionIcon
//             ml={10}
//             title="Minimize panel"
//             radius="md"
//             onClick={() => setIsShellOpen(false)}
//           >
//             <IconMinus size={16} />
//           </ActionIcon>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// });
// Header.displayName = 'Header';

import React, { useContext } from 'react';
import { useSetAtom } from 'jotai/react';
import { isShellOpenAtom } from '../../../../../atoms/is-shell-open-atom';
import { useDevtoolsJotaiStoreOptions } from '../../../../../internal-jotai-store';
import { ThemeToggle } from './components/ThemeToggle';
import { Sun, Moon } from 'lucide-react';
import { useToggleDarkMode } from '../../../../../hooks/useDarkMode';
import { Button } from '../../../../../../../components/ui/button';
import { Badge } from '../../../../../../../components/ui/badge';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { DarkModeContext } from '../../../../../../../components/ui/DarkModeContext';

export const Header = React.memo(() => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // const [darkMode, toggleDarkMode] = useToggleDarkMode(false);
  const setIsShellOpen = useSetAtom(
    isShellOpenAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  return (
      <header className="sticky top-0 z-10 w-full dark:bg-slate-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold select-none dark:text-white">
              👻&nbsp;Jōtai DevTools
            </h1>
            <Badge variant="secondary" className='bg-orange-50 hover:bg-orange-50 text-orange-400'>Alpha</Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={() => {
                toggleDarkMode();
              }}
              title="Toggle color scheme"
              className="h-8 w-8 p-0"
            >
              {darkMode ? (
                <IconSun className="h-5 w-5 dark:text-white" />
              ) : (
                <IconMoonStars className="h-5 w-5" />
              )}
            </Button>
            <Button
              className="dark:text-white"
              variant="ghost"
              size="sm"
              title="Minimize panel"
              onClick={() => setIsShellOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
  );
});

Header.displayName = 'Header';
