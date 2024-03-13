// import React from 'react';
// import { ActionIcon, useMantineColorScheme } from '@mantine/core';
// import { IconMoonStars, IconSun } from '@tabler/icons-react';

// export const ThemeToggle = () => {
//   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
//   const dark = colorScheme === 'dark';

//   return (
//     <ActionIcon
//       variant="filled"
//       color={dark ? 'gray' : 'dark'}
//       onClick={() => toggleColorScheme()}
//       title="Toggle color scheme"
//     >
//       {dark ? <IconSun size={16} /> : <IconMoonStars size={16} />}
//     </ActionIcon>
//   );
// };

import React from 'react';
// import { useTheme } from 'next-themes';
import { Button } from '../../../../../../../../components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useToggleDarkMode } from '../../../../../../hooks/useDarkMode'
import { IconMoonStars, IconSun } from '@tabler/icons-react';


export const ThemeToggle = () => {
  const [darkMode, toggleDarkMode] = useToggleDarkMode(false);
  return (
    <Button
      variant="ghost"
      onClick={() => {toggleDarkMode()}}
      title="Toggle color scheme"
      className="h-8 w-8 p-0"
    >
      {darkMode ? (
        <IconSun className="h-4 w-4" />
      ) : (
        <IconMoonStars className="h-4 w-4" />
      )}
    </Button>
  );
};

