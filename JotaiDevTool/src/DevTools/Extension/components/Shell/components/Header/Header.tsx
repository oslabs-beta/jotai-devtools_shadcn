
import React from 'react';
import { useSetAtom } from 'jotai/react';
import { isShellOpenAtom } from '../../../../../atoms/is-shell-open-atom';
import { useDevtoolsJotaiStoreOptions } from '../../../../../internal-jotai-store';
import { Button } from '../../../../../../../components/ui/button';
import { Badge } from '../../../../../../../components/ui/badge';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useDarkModeValue, useSetDarkMode } from '../../../../../atoms/dark-mode';

export const Header = React.memo(() => {
  const darkMode = useDarkModeValue();
  const setDarkMode = useSetDarkMode();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const setIsShellOpen = useSetAtom(
    isShellOpenAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  return (
      <header className="sticky top-0 z-10 w-full bg-white dark:bg-slate-800">
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
              className="h-7 w-7 p-0 hover:bg-slate-500 bg-slate-600 rounded-md"
            >
              {darkMode ? (
                <IconSun className="h-5 w-5 dark:text-white  rounded-md" />
              ) : (
                <IconMoonStars className="h-5 w-5 text-white" />
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
